const products = [
    { id: 1, name: "Зволожуючий крем", price: 450, img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500" },
    { id: 2, name: "Сироватка з вітаміном C", price: 620, img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500" },
    { id: 3, name: "Олія для обличчя", price: 380, img: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500" },
    { id: 4, name: "", price: 450, img: "" },
    { id: 5, name: "", price: 450, img: "" },
    { id: 6, name: "", price: 450, img: "" },
];

let cart = [];

// Рендер товарів
function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.price} грн</p>
            <button class="btn-add" onclick="addToCart(${p.id})">Додати в кошик</button>
        </div>
    `).join('');
}

// Керування кошиком
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    cartCount.innerText = cart.length;
    
    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <span>${item.name}</span> - <strong>${item.price} грн</strong>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.innerText = total;
}

renderProducts();