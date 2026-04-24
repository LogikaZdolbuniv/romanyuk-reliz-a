// Основна база товарів
const products = [
    { id: 1, name: "Зволожуючий крем", price: 450, img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500" },
    { id: 2, name: "Сироватка з вітаміном C", price: 620, img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500" },
    { id: 3, name: "Олія для обличчя", price: 380, img: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500" },
    { id: 4, name: "Очищувальна пінка", price: 320, img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500" }
];

// База наборів (Sets)
const sets = [
    { id: 101, name: "Morning Glow Set", price: 1200, img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500" },
    { id: 102, name: "Deep Detox Box", price: 1550, img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500" },
    { id: 103, name: "Travel Pack", price: 1650, img: "https://thebeautyroom.store/image/catalog/znimokekrana2026-01-13o14.03.33.png?w=500" }
];

let cart = [];

// Функція для рендеру звичайних товарів
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if(grid) {
        grid.innerHTML = products.map(p => createCard(p)).join('');
    }
}

// Функція для рендеру наборів
function renderSets() {
    const grid = document.getElementById('sets-grid');
    if(grid) {
        grid.innerHTML = sets.map(s => createCard(s)).join('');
    }
}

// Універсальний шаблон картки
function createCard(item) {
    return `
        <div class="product-card">
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price} грн</p>
            <button class="btn-add" onclick="addToCartById(${item.id})">Додати в кошик</button>
        </div>
    `;
}

// Пошук товару в обох масивах
function addToCartById(id) {
    const allItems = [...products, ...sets];
    const item = allItems.find(p => p.id === id);
    if(item) {
        cart.push(item);
        updateCartUI();
        if (document.getElementById('cart-sidebar').classList.contains('active') === false) {
            toggleCart(); // Автоматично відкриваємо кошик при додаванні
        }
    }
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    cartCount.innerText = cart.length;
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <strong>${item.price} грн</strong>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.innerText = total;
}

function showPaymentError() {
    alert("Вибачте, онлайн-оплата тимчасово недоступна. Будь ласка, зв'яжіться з менеджером");
}

// Запуск рендеру при завантаженні (якщо ми на головній)
renderProducts();