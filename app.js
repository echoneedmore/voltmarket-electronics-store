const products = [
  {
    id: 'laptop-pro-14',
    name: 'NovaBook Pro 14',
    category: 'Ноутбуки',
    price: 149990,
    oldPrice: 169990,
    rating: 4.9,
    stock: 8,
    image: 'assets/laptop.png',
    specs: ['14.2" mini-LED', 'Intel Core Ultra 7', '1 ТБ SSD', 'Вес 1.35 кг'],
    popularity: 98,
  },
  {
    id: 'phone-x1',
    name: 'Aster Phone X1',
    category: 'Смартфоны',
    price: 89990,
    oldPrice: 99990,
    rating: 4.8,
    stock: 14,
    image: 'assets/phone.png',
    specs: ['6.7" OLED 120 Гц', '256 ГБ', 'Камера 50 Мп', 'Быстрая зарядка'],
    popularity: 96,
  },
  {
    id: 'headphones-air',
    name: 'Pulse Air ANC',
    category: 'Аудио',
    price: 24990,
    oldPrice: 29990,
    rating: 4.7,
    stock: 21,
    image: 'assets/headphones.png',
    specs: ['Шумоподавление', 'До 42 ч', 'Bluetooth 5.4', 'Hi-Res Audio'],
    popularity: 89,
  },
  {
    id: 'watch-sport',
    name: 'Orbit Watch Sport',
    category: 'Гаджеты',
    price: 32990,
    oldPrice: 39990,
    rating: 4.6,
    stock: 6,
    image: 'assets/watch.png',
    specs: ['AMOLED 1.43"', 'GPS', 'NFC', 'Защита 5 ATM'],
    popularity: 78,
  },
  {
    id: 'tablet-air',
    name: 'Canvas Tab Air',
    category: 'Планшеты',
    price: 64990,
    oldPrice: 72990,
    rating: 4.7,
    stock: 12,
    image: 'assets/tablet.png',
    specs: ['11" IPS 144 Гц', '512 ГБ', 'Стилус в комплекте', '4 динамика'],
    popularity: 82,
  },
  {
    id: 'camera-vlog',
    name: 'FrameCam Vlog 4K',
    category: 'Фото',
    price: 57990,
    oldPrice: 64990,
    rating: 4.5,
    stock: 4,
    image: 'assets/camera.png',
    specs: ['4K 60 fps', 'Поворотный экран', 'Wi-Fi', 'Стабилизация'],
    popularity: 71,
  },
  {
    id: 'gamepad-elite',
    name: 'Vector Gamepad Elite',
    category: 'Игры',
    price: 11990,
    oldPrice: 14990,
    rating: 4.6,
    stock: 17,
    image: 'assets/gamepad.png',
    specs: ['Hall sticks', '2.4 ГГц', 'Макро-кнопки', 'До 30 ч'],
    popularity: 84,
  },
  {
    id: 'speaker-home',
    name: 'Wave Home Speaker',
    category: 'Аудио',
    price: 18990,
    oldPrice: 22990,
    rating: 4.4,
    stock: 0,
    image: 'assets/speaker.png',
    specs: ['60 Вт', 'Wi-Fi + Bluetooth', 'Мультирум', 'Голосовое управление'],
    popularity: 64,
  },
];

const categories = ['Все', ...new Set(products.map((product) => product.category))];
const state = {
  category: 'Все',
  query: '',
  maxPrice: 250000,
  stockOnly: false,
  sort: 'popular',
  cart: load('voltmarket-cart', {}),
  favorites: load('voltmarket-favorites', []),
  compare: load('voltmarket-compare', []),
  promo: '',
};

const elements = {
  tabs: document.querySelector('#categoryTabs'),
  grid: document.querySelector('#productGrid'),
  resultCount: document.querySelector('#resultCount'),
  search: document.querySelector('#globalSearch'),
  sort: document.querySelector('#sortSelect'),
  range: document.querySelector('#priceRange'),
  priceValue: document.querySelector('#priceValue'),
  stockOnly: document.querySelector('#stockOnly'),
  reset: document.querySelector('#resetFilters'),
  wishlistButton: document.querySelector('#wishlistButton'),
  wishlistCount: document.querySelector('#wishlistCount'),
  cartOpen: document.querySelector('#cartOpen'),
  cartClose: document.querySelector('#cartClose'),
  cartDrawer: document.querySelector('#cartDrawer'),
  cartItems: document.querySelector('#cartItems'),
  cartCount: document.querySelector('#cartCount'),
  cartTotal: document.querySelector('#cartTotal'),
  checkoutForm: document.querySelector('#checkoutForm'),
  promoInput: document.querySelector('#promoInput'),
  applyDeal: document.querySelector('#applyDeal'),
  compareTable: document.querySelector('#compareTable'),
  toast: document.querySelector('#toast'),
};

function load(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function money(value) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(value);
}

function pluralProducts(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return `${count} товар`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return `${count} товара`;
  return `${count} товаров`;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add('show');
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => elements.toast.classList.remove('show'), 2600);
}

function renderTabs() {
  elements.tabs.innerHTML = categories
    .map(
      (category) => `
        <button
          class="category-tab"
          type="button"
          role="tab"
          aria-selected="${category === state.category}"
          data-category="${category}"
        >
          ${category}
        </button>
      `,
    )
    .join('');
}

function filteredProducts() {
  return products
    .filter((product) => state.category === 'Все' || product.category === state.category)
    .filter((product) => product.price <= state.maxPrice)
    .filter((product) => !state.stockOnly || product.stock > 0)
    .filter((product) => {
      const query = state.query.trim().toLowerCase();
      if (!query) return true;
      return [product.name, product.category, ...product.specs].join(' ').toLowerCase().includes(query);
    })
    .sort((a, b) => {
      if (state.sort === 'priceAsc') return a.price - b.price;
      if (state.sort === 'priceDesc') return b.price - a.price;
      if (state.sort === 'rating') return b.rating - a.rating;
      return b.popularity - a.popularity;
    });
}

function renderProducts() {
  const list = filteredProducts();
  elements.resultCount.textContent = pluralProducts(list.length);
  elements.priceValue.textContent = money(Number(state.maxPrice));

  if (!list.length) {
    elements.grid.innerHTML = '<p class="empty-state">Ничего не найдено. Попробуй сбросить фильтры.</p>';
    return;
  }

  elements.grid.innerHTML = list.map(productCard).join('');
}

function productCard(product) {
  const isFavorite = state.favorites.includes(product.id);
  const isCompared = state.compare.includes(product.id);
  const stockClass = product.stock > 5 ? 'stock' : 'low';
  const stockText = product.stock > 0 ? `${product.stock} шт. в наличии` : 'Под заказ';

  return `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="product-body">
        <div class="product-top">
          <h3 class="product-title">${product.name}</h3>
          <button
            class="favorite-button ${isFavorite ? 'active' : ''}"
            type="button"
            aria-label="${isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}"
            data-favorite="${product.id}"
          >♡</button>
        </div>
        <div class="product-meta">
          <span class="chip">${product.category}</span>
          <span class="chip ${stockClass}">${stockText}</span>
          <span class="chip">★ ${product.rating}</span>
        </div>
        <ul class="product-specs">
          ${product.specs.map((spec) => `<li>${spec}</li>`).join('')}
        </ul>
        <div class="product-footer">
          <div class="price-row">
            <span class="price">${money(product.price)}</span>
            <span class="old-price">${money(product.oldPrice)}</span>
          </div>
          <div class="card-actions">
            <button class="add-button" type="button" data-add="${product.id}" ${product.stock ? '' : 'disabled'}>
              ${product.stock ? 'В корзину' : 'Нет в наличии'}
            </button>
            <button
              class="compare-button ${isCompared ? 'active' : ''}"
              type="button"
              aria-label="${isCompared ? 'Убрать из сравнения' : 'Добавить к сравнению'}"
              data-compare="${product.id}"
            >⇄</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCart() {
  const entries = Object.entries(state.cart)
    .map(([id, qty]) => ({ product: products.find((item) => item.id === id), qty }))
    .filter((entry) => entry.product);

  const count = entries.reduce((sum, entry) => sum + entry.qty, 0);
  elements.cartCount.textContent = count;
  elements.wishlistCount.textContent = state.favorites.length;

  if (!entries.length) {
    elements.cartItems.innerHTML = '<p class="empty-state">Корзина пока пустая. Добавь товары из каталога.</p>';
  } else {
    elements.cartItems.innerHTML = entries
      .map(
        ({ product, qty }) => `
          <article class="cart-line">
            <img src="${product.image}" alt="${product.name}" />
            <div>
              <h3>${product.name}</h3>
              <div class="cart-line-controls">
                <strong>${money(product.price * qty)}</strong>
                <div class="qty-controls" aria-label="Количество">
                  <button type="button" data-dec="${product.id}">−</button>
                  <span>${qty}</span>
                  <button type="button" data-inc="${product.id}">+</button>
                </div>
                <button class="remove-button" type="button" data-remove="${product.id}">Убрать</button>
              </div>
            </div>
          </article>
        `,
      )
      .join('');
  }

  const subtotal = entries.reduce((sum, entry) => sum + entry.product.price * entry.qty, 0);
  const discount = state.promo.toUpperCase() === 'VOLT10' ? Math.round(subtotal * 0.1) : 0;
  elements.cartTotal.textContent = money(Math.max(subtotal - discount, 0));
}

function renderCompare() {
  const list = state.compare.map((id) => products.find((product) => product.id === id)).filter(Boolean);
  if (!list.length) {
    elements.compareTable.innerHTML = '<p class="empty-state">Добавь товары через кнопку «Сравнить» в карточке.</p>';
    return;
  }

  elements.compareTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Модель</th>
          ${list.map((product) => `<th>${product.name}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Цена</td>
          ${list.map((product) => `<td>${money(product.price)}</td>`).join('')}
        </tr>
        <tr>
          <td>Рейтинг</td>
          ${list.map((product) => `<td>${product.rating}</td>`).join('')}
        </tr>
        <tr>
          <td>Категория</td>
          ${list.map((product) => `<td>${product.category}</td>`).join('')}
        </tr>
        <tr>
          <td>Характеристики</td>
          ${list.map((product) => `<td>${product.specs.join('<br>')}</td>`).join('')}
        </tr>
      </tbody>
    </table>
  `;
}

function sync() {
  save('voltmarket-cart', state.cart);
  save('voltmarket-favorites', state.favorites);
  save('voltmarket-compare', state.compare);
  renderProducts();
  renderCart();
  renderCompare();
}

function addToCart(id) {
  const product = products.find((item) => item.id === id);
  if (!product || product.stock === 0) return;
  const currentQty = state.cart[id] ?? 0;
  if (currentQty >= product.stock) {
    showToast('Больше нет на складе');
    return;
  }
  state.cart[id] = currentQty + 1;
  showToast(`${product.name} добавлен в корзину`);
  sync();
}

function updateQuantity(id, delta) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  const next = (state.cart[id] ?? 0) + delta;
  if (next <= 0) delete state.cart[id];
  else state.cart[id] = Math.min(next, product.stock);
  sync();
}

function toggleFavorite(id) {
  state.favorites = state.favorites.includes(id)
    ? state.favorites.filter((item) => item !== id)
    : [...state.favorites, id];
  sync();
}

function toggleCompare(id) {
  if (state.compare.includes(id)) {
    state.compare = state.compare.filter((item) => item !== id);
  } else {
    state.compare = [...state.compare.slice(-2), id];
  }
  sync();
}

function openCart() {
  elements.cartDrawer.classList.add('open');
  elements.cartDrawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('cart-open');
}

function closeCart() {
  elements.cartDrawer.classList.remove('open');
  elements.cartDrawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('cart-open');
}

elements.tabs.addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  state.category = button.dataset.category;
  renderTabs();
  renderProducts();
});

elements.grid.addEventListener('click', (event) => {
  const addButton = event.target.closest('[data-add]');
  const favoriteButton = event.target.closest('[data-favorite]');
  const compareButton = event.target.closest('[data-compare]');
  if (addButton) addToCart(addButton.dataset.add);
  if (favoriteButton) toggleFavorite(favoriteButton.dataset.favorite);
  if (compareButton) toggleCompare(compareButton.dataset.compare);
});

elements.cartItems.addEventListener('click', (event) => {
  const inc = event.target.closest('[data-inc]');
  const dec = event.target.closest('[data-dec]');
  const remove = event.target.closest('[data-remove]');
  if (inc) updateQuantity(inc.dataset.inc, 1);
  if (dec) updateQuantity(dec.dataset.dec, -1);
  if (remove) {
    delete state.cart[remove.dataset.remove];
    sync();
  }
});

elements.search.addEventListener('input', (event) => {
  state.query = event.target.value;
  renderProducts();
});

elements.sort.addEventListener('change', (event) => {
  state.sort = event.target.value;
  renderProducts();
});

elements.range.addEventListener('input', (event) => {
  state.maxPrice = Number(event.target.value);
  renderProducts();
});

elements.stockOnly.addEventListener('change', (event) => {
  state.stockOnly = event.target.checked;
  renderProducts();
});

elements.reset.addEventListener('click', () => {
  state.category = 'Все';
  state.query = '';
  state.maxPrice = 250000;
  state.stockOnly = false;
  state.sort = 'popular';
  elements.search.value = '';
  elements.range.value = String(state.maxPrice);
  elements.stockOnly.checked = false;
  elements.sort.value = state.sort;
  renderTabs();
  renderProducts();
});

elements.wishlistButton.addEventListener('click', () => {
  if (!state.favorites.length) {
    showToast('Избранное пока пустое');
    return;
  }
  state.category = 'Все';
  state.query = '';
  elements.search.value = '';
  const favoriteNames = state.favorites
    .map((id) => products.find((product) => product.id === id)?.name)
    .filter(Boolean)
    .join(', ');
  showToast(`В избранном: ${favoriteNames}`);
});

elements.cartOpen.addEventListener('click', openCart);
elements.cartClose.addEventListener('click', closeCart);
elements.cartDrawer.addEventListener('click', (event) => {
  if (event.target === elements.cartDrawer) closeCart();
});

elements.applyDeal.addEventListener('click', () => {
  state.promo = 'VOLT10';
  elements.promoInput.value = 'VOLT10';
  openCart();
  renderCart();
  showToast('Промокод VOLT10 применён');
});

elements.promoInput.addEventListener('input', (event) => {
  state.promo = event.target.value.trim();
  renderCart();
});

elements.checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const hasItems = Object.keys(state.cart).length > 0;
  if (!hasItems) {
    showToast('Добавь товар перед оформлением');
    return;
  }
  const orderId = `VM-${Math.floor(100000 + Math.random() * 900000)}`;
  state.cart = {};
  sync();
  closeCart();
  elements.checkoutForm.reset();
  state.promo = '';
  showToast(`Заказ ${orderId} создан. Менеджер свяжется с тобой.`);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeCart();
});

renderTabs();
sync();
