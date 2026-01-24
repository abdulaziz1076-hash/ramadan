// ============================================
// بيانات وهمية للمطاعم في أبوظبي
// ============================================
const restaurantsData = [
    {
        id: 1,
        name: "مطعم ليالي الشام",
        city: "أبوظبي",
        rating: 4.8,
        deliveryTime: "25-40 دقيقة",
        whatsapp: "+971501234567",
        bankAccount: {
            bankName: "بنك أبوظبي الأول",
            iban: "AE070331234567890123456",
            accountName: "ليالي الشام للمطاعم"
        },
        menu: [
            { id: 101, name: "فتوش رمضاني", price: 35, description: "سلطة فتوش بزيت الزيتون والرمان" },
            { id: 102, name: "شوربة عدس بالخضار", price: 25, description: "شوربة عدس مع خضار مشكلة" },
            { id: 103, name: "كباب حلبي", price: 55, description: "كباب الحلبي المشوي على الفحم" },
            { id: 104, name: "مشاوي مشكلة", price: 75, description: "مشاوي لحم ودجاج مع أرز وخضار" },
            { id: 105, name: "كنافة نابلسية", price: 30, description: "كنافة بالقشطة والمكسرات" }
        ]
    },
    {
        id: 2,
        name: "مطعم النخيل الإماراتي",
        city: "أبوظبي",
        rating: 4.6,
        deliveryTime: "30-45 دقيقة",
        whatsapp: "+971502345678",
        bankAccount: {
            bankName: "مصرف الإمارات الإسلامي",
            iban: "AE300234567890123456789",
            accountName: "مطعم النخيل الإماراتي"
        },
        menu: [
            { id: 201, name: "هريس لحم", price: 50, description: "هريس لحم ضأن مع قمح" },
            { id: 202, name: "مجبوس دجاج", price: 45, description: "أرز مجبوس مع دجاج وتوابل" },
            { id: 203, name: "ثريد لحم", price: 60, description: "ثريد لحم مع خبز رقاق" },
            { id: 204, name: "لقيمات", price: 20, description: "لقيمات بالعسل والسمسم" },
            { id: 205, name: "بلاليط", price: 25, description: "حلى البلاليط الإماراتي" }
        ]
    },
    {
        id: 3,
        name: "مطعم بحر الخير",
        city: "المصفح",
        rating: 4.7,
        deliveryTime: "35-50 دقيقة",
        whatsapp: "+971503456789",
        bankAccount: {
            bankName: "بنك دبي الإسلامي",
            iban: "AE460331987654321012345",
            accountName: "بحر الخير للمأكولات البحرية"
        },
        menu: [
            { id: 301, name: "سمك ناجل مشوي", price: 85, description: "سمك ناجل طازج مشوي على الفحم" },
            { id: 302, name: "كباب السمك", price: 45, description: "كباب سمك مع بهارات خاصة" },
            { id: 303, name: "مقبلات بحرية", price: 65, description: "مقبلات متنوعة من المأكولات البحرية" },
            { id: 304, name: "شوربة كريمي", price: 30, description: "شوربة كريمي بالمأكولات البحرية" }
        ]
    },
    {
        id: 4,
        name: "مطعم المنارة التركي",
        city: "الشهامة",
        rating: 4.5,
        deliveryTime: "20-35 دقيقة",
        whatsapp: "+971504567890",
        bankAccount: {
            bankName: "بنك الشارقة",
            iban: "AE540331567890123456789",
            accountName: "مطعم المنارة التركي"
        },
        menu: [
            { id: 401, name: "كبدة تركية", price: 40, description: "كبدة تركية مشوية مع بصل" },
            { id: 402, name: "شاورما لحم", price: 35, description: "شاورما لحم تركية مع خبز" },
            { id: 403, name: "معجنات تركية", price: 45, description: "معجنات متنوعة بالجبن واللحوم" },
            { id: 404, name: "بقلاوة", price: 25, description: "بقلاوة تركية بالفستق" }
        ]
    },
    {
        id: 5,
        name: "مطعم القصيم السعودي",
        city: "بني ياس",
        rating: 4.4,
        deliveryTime: "40-55 دقيقة",
        whatsapp: "+971505678901",
        bankAccount: {
            bankName: "البنك الأهلي",
            iban: "AE230331345678901234567",
            accountName: "مطعم القصيم السعودي"
        },
        menu: [
            { id: 501, name: "كبسة دجاج", price: 55, description: "أرز كبسة مع دجاج طازج" },
            { id: 502, name: "مندي لحم", price: 70, description: "لحم ضأن مع أرز مندي" },
            { id: 503, name: "مرقوق لحم", price: 50, description: "مرقوق لحم مع خبز" },
            { id: 504, name: "حلى القصيم", price: 35, description: "حلى القصيم التقليدي" }
        ]
    },
    {
        id: 6,
        name: "مطعم سندريلا",
        city: "خليفة",
        rating: 4.9,
        deliveryTime: "25-40 دقيقة",
        whatsapp: "+971506789012",
        bankAccount: {
            bankName: "بنك الاتحاد",
            iban: "AE890331234567890987654",
            accountName: "مطعم سندريلا"
        },
        menu: [
            { id: 601, name: "برجر لحم خاص", price: 45, description: "برجر لحم مع جبنة و صلصة خاصة" },
            { id: 602, name: "دجاج كرسبي", price: 40, description: "دجاج مقرمش مع صلصات" },
            { id: 603, name: "بيتزا كبيرة", price: 65, description: "بيتزا كبيرة مع جميع الإضافات" },
            { id: 604, name: "تشيز كيك", price: 30, description: "تشيز كيك بالتوت أو الشوكولاتة" }
        ]
    }
];

// ============================================
// المتغيرات العامة
// ============================================
let cart = JSON.parse(localStorage.getItem('ramadanCart')) || [];
let currentStep = 1;
let selectedRestaurant = null;

// ============================================
// عناصر DOM
// ============================================
// المطاعم
const restaurantsContainer = document.getElementById('restaurantsContainer');
const noResultsCard = document.getElementById('noResults');
const cityFilter = document.getElementById('cityFilter');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// السلة
const cartBottomSheet = document.getElementById('cartBottomSheet');
const cartFab = document.getElementById('cartFab');
const closeBottomSheet = document.getElementById('closeBottomSheet');
const mobileCartItems = document.getElementById('mobileCartItems');
const mobileCartTotal = document.getElementById('mobileCartTotal');
const mobileFinalTotal = document.getElementById('mobileFinalTotal');
const mobileCartCount = document.getElementById('mobileCartCount');
const fabBadge = document.getElementById('fabBadge');
const checkoutBadge = document.getElementById('checkoutBadge');
const mobileClearCart = document.getElementById('mobileClearCart');
const mobileCheckout = document.getElementById('mobileCheckout');

// المودال
const orderModal = document.getElementById('orderModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeOrderModal = document.getElementById('closeOrderModal');
const orderForm = document.getElementById('orderForm');

// خطوات المودال
const steps = document.querySelectorAll('.step');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const nextToStep2 = document.getElementById('nextToStep2');
const nextToStep3 = document.getElementById('nextToStep3');
const backToStep1 = document.getElementById('backToStep1');
const backToStep2 = document.getElementById('backToStep2');
const submitOrderBtn = document.getElementById('submitOrderBtn');

// حقول النموذج
const customerName = document.getElementById('customerName');
const customerPhone = document.getElementById('customerPhone');
const customerArea = document.getElementById('customerArea');
const customerAddress = document.getElementById('customerAddress');
const orderNotes = document.getElementById('orderNotes');
const agreeTerms = document.getElementById('agreeTerms');

// تأكيد البيانات
const confirmName = document.getElementById('confirmName');
const confirmPhone = document.getElementById('confirmPhone');
const confirmAddress = document.getElementById('confirmAddress');
const confirmTotal = document.getElementById('confirmTotal');

// ملخص الطلب
const orderSummary = document.getElementById('orderSummary');
const summaryTotal = document.getElementById('summaryTotal');

// عناصر أخرى
const pageLoader = document.getElementById('pageLoader');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const notificationsContainer = document.getElementById('notificationsContainer');

// ============================================
// تهيئة التطبيق
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // إخفاء شاشة التحميل بعد 1.5 ثانية
    setTimeout(() => {
        pageLoader.classList.add('fade-out');
        setTimeout(() => {
            pageLoader.style.display = 'none';
        }, 300);
    }, 1500);
    
    // تحميل المطاعم
    displayRestaurants(restaurantsData);
    
    // تحديث السلة
    updateCart();
    
    // إضافة الأحداث
    setupEventListeners();
    
    // تهيئة التمرير السلس
    initSmoothScroll();
});

// ============================================
// عرض المطاعم
// ============================================
function displayRestaurants(restaurants) {
    restaurantsContainer.innerHTML = '';
    
    if (restaurants.length === 0) {
        noResultsCard.style.display = 'block';
        return;
    }
    
    noResultsCard.style.display = 'none';
    
    restaurants.forEach(restaurant => {
        const restaurantCard = createRestaurantCard(restaurant);
        restaurantsContainer.appendChild(restaurantCard);
    });
}

function createRestaurantCard(restaurant) {
    const card = document.createElement('div');
    card.className = 'restaurant-card';
    card.setAttribute('data-restaurant-id', restaurant.id);
    
    // إنشاء قائمة الطعام
    let menuItemsHTML = '';
    restaurant.menu.forEach((item, index) => {
        if (index < 4) { // عرض أول 4 عناصر فقط
            menuItemsHTML += `
                <div class="menu-item">
                    <div class="item-info">
                        <div class="item-name">${item.name}</div>
                        <div class="item-description">${item.description}</div>
                    </div>
                    <div class="item-actions">
                        <span class="item-price">${item.price} درهم</span>
                        <button class="add-to-cart-btn" onclick="addToCart(${item.id}, '${item.name}', ${item.price}, ${restaurant.id}, '${restaurant.name}')">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            `;
        }
    });
    
    // إضافة زر "المزيد" إذا كان هناك أكثر من 4 عناصر
    if (restaurant.menu.length > 4) {
        menuItemsHTML += `
            <div class="more-items">
                <span>+${restaurant.menu.length - 4} وجبات أخرى</span>
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="restaurant-header">
            <div class="restaurant-badge">
                <i class="fas fa-star"></i> ${restaurant.rating}
            </div>
            <h3 class="restaurant-name">${restaurant.name}</h3>
        </div>
        <div class="restaurant-info">
            <div class="restaurant-meta">
                <span><i class="fas fa-map-marker-alt"></i> ${restaurant.city}</span>
                <span><i class="fas fa-clock"></i> ${restaurant.deliveryTime}</span>
            </div>
            <div class="menu-items">
                ${menuItemsHTML}
            </div>
        </div>
    `;
    
    return card;
}

// ============================================
// إدارة السلة
// ============================================
function addToCart(itemId, itemName, itemPrice, restaurantId, restaurantName) {
    // التحقق إذا كانت السلة تحتوي على عناصر من مطعم مختلف
    if (cart.length > 0) {
        const firstItemRestaurantId = cart[0].restaurantId;
        if (firstItemRestaurantId !== restaurantId) {
            if (confirm('لديك عناصر من مطعم آخر في السلة. هل تريد تفريغ السلة وإضافة عناصر من هذا المطعم؟')) {
                cart = [];
            } else {
                return;
            }
        }
    }
    
    // البحث عن العنصر في السلة
    const existingItem = cart.find(item => 
        item.id === itemId && item.restaurantId === restaurantId
    );
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: itemId,
            name: itemName,
            price: itemPrice,
            restaurantId: restaurantId,
            restaurantName: restaurantName,
            quantity: 1,
            addedAt: new Date().toISOString()
        });
    }
    
    updateCart();
    showNotification('تمت الإضافة إلى السلة', 'success', `${itemName} تمت إضافته إلى سلة الطلبات`);
    
    // تأثير اهتزاز على زر السلة
    cartFab.style.transform = 'scale(1.1)';
    setTimeout(() => {
        cartFab.style.transform = 'scale(1)';
    }, 300);
}

function removeFromCart(itemId, restaurantId) {
    cart = cart.filter(item => 
        !(item.id === itemId && item.restaurantId === restaurantId)
    );
    updateCart();
    showNotification('تم الإزالة من السلة', 'info');
}

function updateCart() {
    // حفظ السلة في localStorage
    localStorage.setItem('ramadanCart', JSON.stringify(cart));
    
    // حساب إجمالي العناصر والثمن
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 5;
    const total = subtotal + deliveryFee;
    
    // تحديث العداد
    fabBadge.textContent = totalItems;
    mobileCartCount.textContent = `${totalItems} عنصر`;
    checkoutBadge.textContent = totalItems;
    
    // تحديث المبالغ
    mobileCartTotal.textContent = `${subtotal} درهم`;
    mobileFinalTotal.textContent = `${total} درهم`;
    
    // تحديث محتويات السلة
    updateCartItems();
    
    // تحديث ملخص الطلب إذا كان المودال مفتوحاً
    if (orderModal.classList.contains('active')) {
        updateOrderSummary();
    }
}

function updateCartItems() {
    mobileCartItems.innerHTML = '';
    
    if (cart.length === 0) {
        mobileCartItems.innerHTML = `
            <div class="empty-cart-state">
                <i class="fas fa-shopping-basket"></i>
                <p>السلة فارغة</p>
                <small>أضف بعض الوجبات من المطاعم</small>
            </div>
        `;
        return;
    }
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <i class="fas fa-utensils"></i>
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-restaurant">${item.restaurantName}</div>
                <div class="cart-item-price">${item.price} درهم × ${item.quantity} = ${itemTotal} درهم</div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.restaurantId}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.restaurantId}, ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${item.id}, ${item.restaurantId})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        mobileCartItems.appendChild(cartItem);
    });
}

function updateQuantity(itemId, restaurantId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(itemId, restaurantId);
        return;
    }
    
    const item = cart.find(item => 
        item.id === itemId && item.restaurantId === restaurantId
    );
    
    if (item) {
        item.quantity = newQuantity;
        updateCart();
    }
}

function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('هل أنت متأكد من تفريغ السلة؟ سيتم حذف جميع العناصر.')) {
        cart = [];
        updateCart();
        showNotification('تم تفريغ السلة', 'info');
        closeBottomSheet.click();
    }
}

// ============================================
// فلترة وبحث المطاعم
// ============================================
function filterRestaurants() {
    const selectedCity = cityFilter.value;
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    let filtered = restaurantsData;
    
    // فلترة حسب المدينة
    if (selectedCity !== 'all') {
        filtered = filtered.filter(r => r.city === selectedCity);
    }
    
    // بحث حسب النص
    if (searchTerm !== '') {
        filtered = filtered.filter(restaurant => {
            // البحث في اسم المطعم
            if (restaurant.name.toLowerCase().includes(searchTerm)) return true;
            
            // البحث في قائمة الطعام
            const hasMatchingItem = restaurant.menu.some(item => 
                item.name.toLowerCase().includes(searchTerm) || 
                item.description.toLowerCase().includes(searchTerm)
            );
            
            return hasMatchingItem;
        });
    }
    
    displayRestaurants(filtered);
}

// ============================================
// إدارة المودال وخطوات الطلب
// ============================================
function openOrderModal() {
    if (cart.length === 0) {
        showNotification('السلة فارغة', 'error', 'أضف بعض الوجبات أولاً');
        return;
    }
    
    // إغلاق سلة الطلبات
    cartBottomSheet.classList.remove('active');
    
    // تحديث ملخص الطلب
    updateOrderSummary();
    
    // إعادة تعيين الخطوات
    resetSteps();
    
    // فتح المودال
    orderModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
    orderModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function resetSteps() {
    currentStep = 1;
    updateSteps();
    step1.style.display = 'block';
    step2.style.display = 'none';
    step3.style.display = 'none';
    
    // إعادة تعيين النموذج
    orderForm.reset();
    agreeTerms.checked = false;
}

function updateSteps() {
    steps.forEach(step => {
        const stepNumber = parseInt(step.dataset.step);
        if (stepNumber === currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

function goToStep(stepNumber) {
    // التحقق من صحة البيانات قبل الانتقال
    if (stepNumber === 2 && currentStep === 1) {
        if (!validateStep1()) return;
        updateConfirmationData();
    }
    
    if (stepNumber === 3 && currentStep === 2) {
        updateConfirmationData();
    }
    
    currentStep = stepNumber;
    updateSteps();
    
    // إظهار وإخفاء الخطوات
    step1.style.display = stepNumber === 1 ? 'block' : 'none';
    step2.style.display = stepNumber === 2 ? 'block' : 'none';
    step3.style.display = stepNumber === 3 ? 'block' : 'none';
    
    // التمرير للأعلى
    document.querySelector('.modal-body').scrollTop = 0;
}

function validateStep1() {
    if (!customerName.value.trim()) {
        showNotification('الرجاء إدخال الاسم', 'error');
        customerName.focus();
        return false;
    }
    
    if (!customerPhone.value.trim() || !/^05\d{8}$/.test(customerPhone.value)) {
        showNotification('الرجاء إدخال رقم هاتف صحيح', 'error', 'يجب أن يبدأ الرقم بـ 05 ويتكون من 10 أرقام');
        customerPhone.focus();
        return false;
    }
    
    if (!customerArea.value) {
        showNotification('الرجاء اختيار المنطقة', 'error');
        customerArea.focus();
        return false;
    }
    
    if (!customerAddress.value.trim()) {
        showNotification('الرجاء إدخال العنوان التفصيلي', 'error');
        customerAddress.focus();
        return false;
    }
    
    return true;
}

function updateOrderSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 5;
    const total = subtotal + deliveryFee;
    
    summaryTotal.textContent = `${total} درهم`;
    confirmTotal.textContent = `${total} درهم`;
    
    // تحديث عناصر الطلب
    orderSummary.innerHTML = '';
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const summaryItem = document.createElement('div');
        summaryItem.className = 'summary-item';
        summaryItem.innerHTML = `
            <span>${item.name} × ${item.quantity}</span>
            <span>${itemTotal} درهم</span>
        `;
        orderSummary.appendChild(summaryItem);
    });
    
    // إضافة رسوم التوصيل
    const deliveryItem = document.createElement('div');
    deliveryItem.className = 'summary-item';
    deliveryItem.innerHTML = `
        <span>رسوم التوصيل</span>
        <span>${deliveryFee} درهم</span>
    `;
    orderSummary.appendChild(deliveryItem);
}

function updateConfirmationData() {
    confirmName.textContent = customerName.value;
    confirmPhone.textContent = customerPhone.value;
    confirmAddress.textContent = `${customerArea.value} - ${customerAddress.value}`;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 5;
    const total = subtotal + deliveryFee;
    confirmTotal.textContent = `${total} درهم`;
}

// ============================================
// إرسال الطلب
// ============================================
function submitOrder() {
    if (!agreeTerms.checked) {
        showNotification('الرجاء الموافقة على الشروط والأحكام', 'error');
        return;
    }
    
    // إنشاء رقم طلب عشوائي
    const orderId = 'ORD-' + Date.now().toString().slice(-8);
    
    // جمع بيانات الطلب
    const orderData = {
        orderId: orderId,
        customer: {
            name: customerName.value,
            phone: customerPhone.value,
            area: customerArea.value,
            address: customerAddress.value,
            notes: orderNotes.value
        },
        items: [...cart],
        subtotal: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        deliveryFee: 5,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 5,
        status: 'بانتظار الدفع',
        orderDate: new Date().toISOString(),
        paymentMethod: 'تحويل بنكي'
    };
    
    // الحصول على بيانات المطعم
    const restaurantId = cart[0]?.restaurantId;
    const restaurant = restaurantsData.find(r => r.id === restaurantId);
    
    // إعداد رسالة واتساب للعميل
    let itemsText = '';
    orderData.items.forEach(item => {
        itemsText += `• ${item.name} × ${item.quantity}: ${item.price * item.quantity} درهم\n`;
    });
    
    const customerMessage = `*تم استلام طلبك بنجاح! 🎉*

*تفاصيل الطلب:*
رقم الطلب: ${orderData.orderId}
الاسم: ${orderData.customer.name}
الهاتف: ${orderData.customer.phone}
المنطقة: ${orderData.customer.area}
العنوان: ${orderData.customer.address}

*الطلبات:*
${itemsText}
المجموع: ${orderData.subtotal} درهم
رسوم التوصيل: ${orderData.deliveryFee} درهم
*الإجمالي: ${orderData.total} درهم*

*بيانات التحويل البنكي:*
المطعم: ${restaurant.name}
البنك: ${restaurant.bankAccount.bankName}
رقم الآيبان: ${restaurant.bankAccount.iban}
اسم الحساب: ${restaurant.bankAccount.accountName}
المبلغ المطلوب: ${orderData.total} درهم

*خطوات الإكمال:*
1. قم بالتحويل بنفس المبلغ إلى الحساب أعلاه
2. احفظ إيصال التحويل
3. أرسل الإيصال على واتساب خدمة العملاء: 0501234567
4. سنتواصل معك خلال 15 دقيقة لتأكيد الطلب

شكراً لطلبك من وجبات رمضان أبوظبي 🙏
رمضان كريم!`;
    
    // ترميز الرسالة لرابط واتساب
    const encodedMessage = encodeURIComponent(customerMessage);
    const whatsappURL = `https://wa.me/${orderData.customer.phone}?text=${encodedMessage}`;
    
    // حفظ الطلب في localStorage
    saveOrderToStorage(orderData);
    
    // عرض رسالة النجاح
    showNotification('تم إنشاء الطلب بنجاح!', 'success', 'سيتم توجيهك إلى واتساب لإكمال عملية الدفع');
    
    // إعادة تعيين السلة والنموذج
    setTimeout(() => {
        cart = [];
        updateCart();
        closeOrderModal();
        
        // فتح واتساب في نافذة جديدة
        window.open(whatsappURL, '_blank');
        
        // عرض تفاصيل الطلب للمستخدم
        alert(`🎉 تم تأكيد طلبك!
        
رقم طلبك: ${orderData.orderId}
الإجمالي: ${orderData.total} درهم

سيتم توجيهك إلى واتساب الآن لتلقي بيانات التحويل البنكي.
يرجى إكمال عملية الدفع وإرسال الإيصال لخدمة العملاء.`);
    }, 1500);
}

function saveOrderToStorage(orderData) {
    const existingOrders = JSON.parse(localStorage.getItem('ramadanOrders')) || [];
    existingOrders.push(orderData);
    localStorage.setItem('ramadanOrders', JSON.stringify(existingOrders));
    
    // يمكنك هنا إضافة كود لإرسال الطلب إلى Google Sheets عبر API
    console.log('تم حفظ الطلب:', orderData);
}

// ============================================
// نظام الإشعارات
// ============================================
function showNotification(title, type = 'info', message = '') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    if (type === 'warning') icon = 'exclamation-triangle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <div class="notification-content">
            <h4>${title}</h4>
            ${message ? `<p>${message}</p>` : ''}
        </div>
    `;
    
    notificationsContainer.appendChild(notification);
    
    // إزالة الإشعار بعد 4 ثوانٍ
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// ============================================
// التمرير السلس
// ============================================
function initSmoothScroll() {
    // زر العودة للأعلى
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // منع التمرير عند فتح المودال أو السلة
    document.addEventListener('touchmove', (e) => {
        if (orderModal.classList.contains('active') || 
            cartBottomSheet.classList.contains('active')) {
            e.preventDefault();
        }
    }, { passive: false });
}

// ============================================
// إعداد الأحداث
// ============================================
function setupEventListeners() {
    // فلترة المطاعم
    cityFilter.addEventListener('change', filterRestaurants);
    searchBtn.addEventListener('click', filterRestaurants);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') filterRestaurants();
    });
    
    // البحث أثناء الكتابة (مع تأخير)
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(filterRestaurants, 300);
    });
    
    // إدارة السلة
    cartFab.addEventListener('click', () => {
        cartBottomSheet.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeBottomSheet.addEventListener('click', () => {
        cartBottomSheet.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    mobileClearCart.addEventListener('click', clearCart);
    mobileCheckout.addEventListener('click', openOrderModal);
    
    // إغلاق السلة عند النقر خارجها
    modalOverlay.addEventListener('click', closeOrderModal);
    closeOrderModal.addEventListener('click', closeOrderModal);
    
    // خطوات المودال
    nextToStep2.addEventListener('click', () => goToStep(2));
    nextToStep3.addEventListener('click', () => goToStep(3));
    backToStep1.addEventListener('click', () => goToStep(1));
    backToStep2.addEventListener('click', () => goToStep(2));
    
    // إرسال الطلب
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitOrder();
    });
    
    // طريقة الدفع
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', function() {
            document.querySelectorAll('.payment-method').forEach(m => {
                m.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });
    
    // إغلاق السلة عند سحبها للأسفل (للهواتف)
    let startY = 0;
    let currentY = 0;
    
    cartBottomSheet.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
    });
    
    cartBottomSheet.addEventListener('touchmove', (e) => {
        currentY = e.touches[0].clientY;
        const diff = currentY - startY;
        
        // السماح بالسحب للأسفل فقط
        if (diff > 0) {
            cartBottomSheet.style.transform = `translateY(${diff}px)`;
        }
    });
    
    cartBottomSheet.addEventListener('touchend', () => {
        const diff = currentY - startY;
        
        // إذا تم السحب لأكثر من 100px، إغلاق السلة
        if (diff > 100) {
            cartBottomSheet.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // إعادة تعيين التحويل
        cartBottomSheet.style.transform = 'translateY(0)';
    });
    
    // منع إغلاق المتصفح إذا كان هناك طلبات في السلة
    window.addEventListener('beforeunload', (e) => {
        if (cart.length > 0) {
            e.preventDefault();
            e.returnValue = 'لديك عناصر في سلة الطلبات. هل تريد المغادرة؟';
        }
    });
}

// ============================================
// وظائف مساعدة
// ============================================
// إضافة أنيميشن CSS للإشعارات
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .notification-success {
        border-right-color: #2ecc71;
    }
    
    .notification-success i {
        color: #2ecc71;
    }
    
    .notification-error {
        border-right-color: #e74c3c;
    }
    
    .notification-error i {
        color: #e74c3c;
    }
    
    .notification-warning {
        border-right-color: #f39c12;
    }
    
    .notification-warning i {
        color: #f39c12;
    }
    
    .item-actions {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .more-items {
        text-align: center;
        padding: 10px;
        color: #666;
        font-size: 0.9rem;
        border-top: 1px dashed #eee;
        margin-top: 10px;
    }
    
    .quantity-controls {
        display: flex;
        align-items: center;
        gap: 10px;
        background: #f0f7ff;
        padding: 5px;
        border-radius: 8px;
    }
    
    .quantity-controls span {
        min-width: 20px;
        text-align: center;
        font-weight: 600;
    }
`;
document.head.appendChild(style);