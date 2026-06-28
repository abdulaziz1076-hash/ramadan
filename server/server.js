const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const cron = require('node-cron');

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================================
// 🔑 ضع مفتاح API الجديد هنا (استبدل API_KEY_HERE)
// ============================================================
const METALS_API_KEY = "API_KEY_HERE"; // <--- غيّر هذا إلى مفتاحك الجديد
const METALS_API_URL = `https://metals-api.com/api/latest?access_key=${METALS_API_KEY}&base=USD`;

const FALLBACK_PRICE = 4082;

// ============================================================
// تخزين السعر في الذاكرة
// ============================================================
let cachedPrice = {
    usd: FALLBACK_PRICE,
    lastUpdated: new Date().toISOString(),
    status: 'pending'
};

// ============================================================
// دالة جلب السعر
// ============================================================
async function fetchAndStorePrice() {
    try {
        console.log('⏳ جاري تحديث السعر من Metals-API...');
        console.log(`🔗 الرابط: ${METALS_API_URL}`);
        
        const response = await fetch(METALS_API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('📦 البيانات المستلمة:', JSON.stringify(data).substring(0, 200) + '...');
        
        // التحقق من وجود خطأ في الرد
        if (data.error) {
            throw new Error(`API Error: ${data.error.type} - ${data.error.info}`);
        }
        
        // Metals-API يعيد السعر في rates.XAU
        let price = parseFloat(data.rates?.XAU);
        
        if (!price || price <= 0) {
            throw new Error('قيمة السعر غير صالحة');
        }
        
        // إذا كانت القيمة أقل من 1، فهي معكوسة (نأخذ المقلوب)
        if (price < 1) {
            price = 1 / price;
        }
        
        cachedPrice = {
            usd: price,
            lastUpdated: new Date().toISOString(),
            status: 'success'
        };
        
        console.log(`✅ تم تحديث السعر: $${price} (${cachedPrice.lastUpdated})`);
    } catch (error) {
        console.error('❌ فشل جلب السعر:', error.message);
        cachedPrice.status = 'failed';
        cachedPrice.lastUpdated = new Date().toISOString();
        cachedPrice.error = error.message;
    }
}

// ============================================================
// جدولة التحديث (كل 10 دقائق)
// ============================================================
fetchAndStorePrice();
cron.schedule('*/10 * * * *', () => {
    fetchAndStorePrice();
});

console.log('⏰ تم جدولة تحديث السعر كل 10 دقائق');

// ============================================================
// نقاط النهاية (Endpoints)
// ============================================================
app.use(cors());
app.use(express.json());

app.get('/api/price', (req, res) => {
    res.json({
        success: true,
        data: cachedPrice
    });
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'online',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        lastPrice: cachedPrice
    });
});

app.get('/', (req, res) => {
    res.send(`
        <h1>🚀 خادم أسعار الذهب يعمل بنجاح</h1>
        <p>آخر تحديث: ${cachedPrice.lastUpdated}</p>
        <p>سعر الأونصة: $${cachedPrice.usd}</p>
        <p>الحالة: ${cachedPrice.status}</p>
        ${cachedPrice.error ? `<p style="color:red;">⚠️ خطأ: ${cachedPrice.error}</p>` : ''}
        <hr />
        <p>استخدم نقطة النهاية <code>/api/price</code> للحصول على البيانات بصيغة JSON.</p>
        <p>استخدم <code>/api/health</code> للتحقق من صحة الخادم.</p>
    `);
});

app.listen(PORT, () => {
    console.log(`✅ الخادم يعمل على المنفذ ${PORT}`);
});
