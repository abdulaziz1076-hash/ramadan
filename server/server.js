const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const cron = require('node-cron');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================================
// 🔑 مفتاح GoldAPI.io
// ============================================================
const GOLD_API_KEY = "goldapi-2d5254b3e470938e18dce7629c4ca41f-io";
const GOLD_API_URL = `https://www.goldapi.io/api/XAU/USD`;

// ============================================================
// تخزين السعر في الذاكرة
// ============================================================
let cachedPrice = {
    usd: 4082,
    lastUpdated: new Date().toISOString(),
    status: 'pending'
};

// ============================================================
// دالة جلب السعر من GoldAPI.io
// ============================================================
async function fetchAndStorePrice() {
    try {
        console.log('⏳ جاري تحديث السعر من GoldAPI.io...');
        
        const response = await fetch(GOLD_API_URL, {
            headers: {
                'x-access-token': GOLD_API_KEY,
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        let price = parseFloat(data.price);
        
        if (!price || price <= 0) {
            throw new Error('قيمة السعر غير صالحة');
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
// إعداد الخادم
// ============================================================
app.use(cors());
app.use(express.json());

// تقديم الملفات الثابتة (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// ============================================================
// نقاط النهاية (Endpoints)
// ============================================================

// نقطة النهاية لجلب السعر (للاستخدام من JavaScript)
app.get('/api/price', (req, res) => {
    res.json({
        success: true,
        data: cachedPrice
    });
});

// نقطة النهاية للتحقق من صحة الخادم
app.get('/api/health', (req, res) => {
    res.json({
        status: 'online',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        lastPrice: cachedPrice
    });
});

// ============================================================
// تقديم صفحة index.html عند زيارة الرابط الرئيسي
// ============================================================
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ============================================================
// تشغيل الخادم
// ============================================================
app.listen(PORT, () => {
    console.log(`✅ الخادم يعمل على المنفذ ${PORT}`);
});
