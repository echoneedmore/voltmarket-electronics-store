const slotDefinitions = [
  { id: 'cpu', label: 'Процессор', short: 'CPU', required: true },
  { id: 'motherboard', label: 'Материнская плата', short: 'Board', required: true },
  { id: 'ram', label: 'Оперативная память', short: 'RAM', required: true },
  { id: 'storage', label: 'Накопитель', short: 'SSD', required: true },
  { id: 'gpu', label: 'Видеокарта', short: 'GPU', required: true },
  { id: 'psu', label: 'Блок питания', short: 'PSU', required: true },
  { id: 'case', label: 'Корпус', short: 'Case', required: true },
  { id: 'cooling', label: 'Охлаждение', short: 'Cooler', required: true },
];

const products = [
  {
    id: 'ryzen-5-7600x',
    name: 'AMD Ryzen 5 7600X',
    short: 'R5 7600X',
    category: 'Процессоры',
    slot: 'cpu',
    price: 22990,
    oldPrice: 27990,
    rating: 4.8,
    stock: 12,
    image: 'assets/part-cpu.png',
    specs: ['6 ядер / 12 потоков', 'Socket AM5', 'Boost до 5.3 ГГц', 'TDP 105 Вт'],
    tags: ['AM5', 'DDR5', 'Gaming'],
    socket: 'AM5',
    tdp: 105,
    watt: 115,
    performance: 78,
    popularity: 93,
  },
  {
    id: 'ryzen-7-7800x3d',
    name: 'AMD Ryzen 7 7800X3D',
    short: 'R7 7800X3D',
    category: 'Процессоры',
    slot: 'cpu',
    price: 38990,
    oldPrice: 44990,
    rating: 4.9,
    stock: 7,
    image: 'assets/part-cpu.png',
    specs: ['8 ядер / 16 потоков', 'Socket AM5', '3D V-Cache', 'TDP 120 Вт'],
    tags: ['AM5', 'DDR5', 'Top gaming'],
    socket: 'AM5',
    tdp: 120,
    watt: 135,
    performance: 95,
    popularity: 98,
  },
  {
    id: 'intel-i5-14600kf',
    name: 'Intel Core i5-14600KF',
    short: 'i5-14600KF',
    category: 'Процессоры',
    slot: 'cpu',
    price: 28990,
    oldPrice: 32990,
    rating: 4.7,
    stock: 10,
    image: 'assets/part-cpu.png',
    specs: ['14 ядер / 20 потоков', 'LGA1700', 'Разблокированный множитель', 'TDP 181 Вт'],
    tags: ['LGA1700', 'DDR5', 'Hybrid'],
    socket: 'LGA1700',
    tdp: 181,
    watt: 190,
    performance: 87,
    popularity: 88,
  },
  {
    id: 'intel-i7-14700k',
    name: 'Intel Core i7-14700K',
    short: 'i7-14700K',
    category: 'Процессоры',
    slot: 'cpu',
    price: 43990,
    oldPrice: 49990,
    rating: 4.8,
    stock: 6,
    image: 'assets/part-cpu.png',
    specs: ['20 ядер / 28 потоков', 'LGA1700', 'Boost до 5.6 ГГц', 'TDP 253 Вт'],
    tags: ['LGA1700', 'Creator', 'High power'],
    socket: 'LGA1700',
    tdp: 253,
    watt: 260,
    performance: 96,
    popularity: 91,
  },
  {
    id: 'b650m-forge',
    name: 'Forge B650M WiFi',
    short: 'B650M WiFi',
    category: 'Материнские платы',
    slot: 'motherboard',
    price: 16990,
    oldPrice: 19990,
    rating: 4.6,
    stock: 14,
    image: 'assets/part-board.png',
    specs: ['Socket AM5', 'DDR5 до 7600 МГц', 'mATX', 'Wi-Fi 6E'],
    tags: ['AM5', 'DDR5', 'mATX'],
    socket: 'AM5',
    memoryType: 'DDR5',
    formFactor: 'mATX',
    watt: 45,
    performance: 74,
    popularity: 84,
  },
  {
    id: 'x670e-aero',
    name: 'Aero X670E Pro',
    short: 'X670E Pro',
    category: 'Материнские платы',
    slot: 'motherboard',
    price: 32990,
    oldPrice: 38990,
    rating: 4.8,
    stock: 5,
    image: 'assets/part-board.png',
    specs: ['Socket AM5', 'DDR5', 'ATX', 'PCIe 5.0 x16'],
    tags: ['AM5', 'DDR5', 'ATX'],
    socket: 'AM5',
    memoryType: 'DDR5',
    formFactor: 'ATX',
    watt: 55,
    performance: 92,
    popularity: 79,
  },
  {
    id: 'z790-proline',
    name: 'ProLine Z790 Edge',
    short: 'Z790 Edge',
    category: 'Материнские платы',
    slot: 'motherboard',
    price: 28990,
    oldPrice: 34990,
    rating: 4.7,
    stock: 8,
    image: 'assets/part-board.png',
    specs: ['LGA1700', 'DDR5', 'ATX', 'PCIe 5.0'],
    tags: ['LGA1700', 'DDR5', 'ATX'],
    socket: 'LGA1700',
    memoryType: 'DDR5',
    formFactor: 'ATX',
    watt: 58,
    performance: 88,
    popularity: 82,
  },
  {
    id: 'b760m-prime',
    name: 'Prime B760M Studio',
    short: 'B760M Studio',
    category: 'Материнские платы',
    slot: 'motherboard',
    price: 14990,
    oldPrice: 18990,
    rating: 4.5,
    stock: 16,
    image: 'assets/part-board.png',
    specs: ['LGA1700', 'DDR5', 'mATX', '2.5G LAN'],
    tags: ['LGA1700', 'DDR5', 'mATX'],
    socket: 'LGA1700',
    memoryType: 'DDR5',
    formFactor: 'mATX',
    watt: 42,
    performance: 70,
    popularity: 77,
  },
  {
    id: 'ddr5-32-6000',
    name: 'VoltBlade DDR5 32 ГБ 6000',
    short: '32 ГБ 6000',
    category: 'Оперативная память',
    slot: 'ram',
    price: 11990,
    oldPrice: 14990,
    rating: 4.8,
    stock: 18,
    image: 'assets/part-ram.png',
    specs: ['2 x 16 ГБ', 'DDR5-6000', 'CL30', 'EXPO / XMP'],
    tags: ['DDR5', '32 ГБ', '6000 MT/s'],
    memoryType: 'DDR5',
    capacity: 32,
    watt: 12,
    performance: 80,
    popularity: 92,
  },
  {
    id: 'ddr5-64-6400',
    name: 'VoltBlade DDR5 64 ГБ 6400',
    short: '64 ГБ 6400',
    category: 'Оперативная память',
    slot: 'ram',
    price: 23990,
    oldPrice: 27990,
    rating: 4.9,
    stock: 9,
    image: 'assets/part-ram.png',
    specs: ['2 x 32 ГБ', 'DDR5-6400', 'CL32', 'Радиаторы алюминий'],
    tags: ['DDR5', '64 ГБ', 'Creator'],
    memoryType: 'DDR5',
    capacity: 64,
    watt: 16,
    performance: 92,
    popularity: 86,
  },
  {
    id: 'ddr4-32-3600',
    name: 'Legacy DDR4 32 ГБ 3600',
    short: 'DDR4 32 ГБ',
    category: 'Оперативная память',
    slot: 'ram',
    price: 8490,
    oldPrice: 10990,
    rating: 4.4,
    stock: 11,
    image: 'assets/part-ram.png',
    specs: ['2 x 16 ГБ', 'DDR4-3600', 'CL18', 'XMP'],
    tags: ['DDR4', '32 ГБ', 'Budget'],
    memoryType: 'DDR4',
    capacity: 32,
    watt: 10,
    performance: 62,
    popularity: 61,
  },
  {
    id: 'nvme-1tb-forge',
    name: 'Forge NVMe 1 ТБ',
    short: 'NVMe 1 ТБ',
    category: 'Накопители',
    slot: 'storage',
    price: 7990,
    oldPrice: 9990,
    rating: 4.7,
    stock: 20,
    image: 'assets/part-ssd.png',
    specs: ['PCIe 4.0', 'До 7000 МБ/с', 'TBW 700 ТБ', 'M.2 2280'],
    tags: ['PCIe 4.0', '1 ТБ', 'M.2'],
    watt: 7,
    performance: 78,
    popularity: 90,
  },
  {
    id: 'nvme-2tb-forge',
    name: 'Forge NVMe 2 ТБ',
    short: 'NVMe 2 ТБ',
    category: 'Накопители',
    slot: 'storage',
    price: 13990,
    oldPrice: 16990,
    rating: 4.8,
    stock: 15,
    image: 'assets/part-ssd.png',
    specs: ['PCIe 4.0', 'До 7400 МБ/с', 'TBW 1400 ТБ', 'M.2 2280'],
    tags: ['PCIe 4.0', '2 ТБ', 'M.2'],
    watt: 8,
    performance: 86,
    popularity: 87,
  },
  {
    id: 'nvme-4tb-rocket',
    name: 'Rocket NVMe 4 ТБ Gen5',
    short: 'NVMe 4 ТБ',
    category: 'Накопители',
    slot: 'storage',
    price: 38990,
    oldPrice: 44990,
    rating: 4.6,
    stock: 4,
    image: 'assets/part-ssd.png',
    specs: ['PCIe 5.0', 'До 12000 МБ/с', 'Радиатор', 'M.2 2280'],
    tags: ['PCIe 5.0', '4 ТБ', 'Creator'],
    watt: 12,
    performance: 96,
    popularity: 66,
  },
  {
    id: 'rtx-4070-super',
    name: 'NVIDIA GeForce RTX 4070 Super',
    short: 'RTX 4070S',
    category: 'Видеокарты',
    slot: 'gpu',
    price: 72990,
    oldPrice: 82990,
    rating: 4.8,
    stock: 6,
    image: 'assets/part-gpu.png',
    specs: ['12 ГБ GDDR6X', '267 мм', '220 Вт', 'DLSS 3'],
    tags: ['1440p', 'Ray tracing', '220 Вт'],
    length: 267,
    watt: 220,
    performance: 90,
    popularity: 94,
  },
  {
    id: 'rtx-4080-super',
    name: 'NVIDIA GeForce RTX 4080 Super',
    short: 'RTX 4080S',
    category: 'Видеокарты',
    slot: 'gpu',
    price: 124990,
    oldPrice: 139990,
    rating: 4.9,
    stock: 3,
    image: 'assets/part-gpu.png',
    specs: ['16 ГБ GDDR6X', '310 мм', '320 Вт', '4K Ultra'],
    tags: ['4K', 'Ray tracing', '320 Вт'],
    length: 310,
    watt: 320,
    performance: 98,
    popularity: 89,
  },
  {
    id: 'rx-7800-xt',
    name: 'AMD Radeon RX 7800 XT',
    short: 'RX 7800 XT',
    category: 'Видеокарты',
    slot: 'gpu',
    price: 58990,
    oldPrice: 67990,
    rating: 4.7,
    stock: 8,
    image: 'assets/part-gpu.png',
    specs: ['16 ГБ GDDR6', '280 мм', '263 Вт', 'DisplayPort 2.1'],
    tags: ['1440p', '16 ГБ', '263 Вт'],
    length: 280,
    watt: 263,
    performance: 86,
    popularity: 83,
  },
  {
    id: 'rx-7600',
    name: 'AMD Radeon RX 7600 Pulse',
    short: 'RX 7600',
    category: 'Видеокарты',
    slot: 'gpu',
    price: 28990,
    oldPrice: 32990,
    rating: 4.5,
    stock: 13,
    image: 'assets/part-gpu.png',
    specs: ['8 ГБ GDDR6', '220 мм', '165 Вт', '1080p High'],
    tags: ['1080p', 'Compact', '165 Вт'],
    length: 220,
    watt: 165,
    performance: 66,
    popularity: 72,
  },
  {
    id: 'psu-650-gold',
    name: 'VoltCore 650W Gold',
    short: '650W Gold',
    category: 'Блоки питания',
    slot: 'psu',
    price: 8990,
    oldPrice: 10990,
    rating: 4.6,
    stock: 17,
    image: 'assets/part-psu.png',
    specs: ['650 Вт', '80+ Gold', 'ATX 3.0', 'Тихий вентилятор'],
    tags: ['650 Вт', 'Gold', 'ATX 3.0'],
    capacity: 650,
    watt: 0,
    performance: 70,
    popularity: 81,
  },
  {
    id: 'psu-750-gold',
    name: 'VoltCore 750W Gold',
    short: '750W Gold',
    category: 'Блоки питания',
    slot: 'psu',
    price: 10990,
    oldPrice: 13990,
    rating: 4.8,
    stock: 12,
    image: 'assets/part-psu.png',
    specs: ['750 Вт', '80+ Gold', 'ATX 3.0', 'Модульные кабели'],
    tags: ['750 Вт', 'Gold', 'Modular'],
    capacity: 750,
    watt: 0,
    performance: 82,
    popularity: 91,
  },
  {
    id: 'psu-850-platinum',
    name: 'VoltCore 850W Platinum',
    short: '850W Platinum',
    category: 'Блоки питания',
    slot: 'psu',
    price: 15990,
    oldPrice: 18990,
    rating: 4.9,
    stock: 9,
    image: 'assets/part-psu.png',
    specs: ['850 Вт', '80+ Platinum', 'ATX 3.1', '12V-2x6'],
    tags: ['850 Вт', 'Platinum', 'ATX 3.1'],
    capacity: 850,
    watt: 0,
    performance: 92,
    popularity: 86,
  },
  {
    id: 'psu-1000-platinum',
    name: 'VoltCore 1000W Platinum',
    short: '1000W Platinum',
    category: 'Блоки питания',
    slot: 'psu',
    price: 21990,
    oldPrice: 25990,
    rating: 4.8,
    stock: 5,
    image: 'assets/part-psu.png',
    specs: ['1000 Вт', '80+ Platinum', 'ATX 3.1', 'Zero RPM'],
    tags: ['1000 Вт', 'Platinum', 'Silent'],
    capacity: 1000,
    watt: 0,
    performance: 96,
    popularity: 73,
  },
  {
    id: 'case-air-mesh',
    name: 'Northline Air Mesh',
    short: 'Air Mesh',
    category: 'Корпуса',
    slot: 'case',
    price: 11990,
    oldPrice: 14990,
    rating: 4.7,
    stock: 13,
    image: 'assets/part-case.png',
    specs: ['ATX / mATX', 'GPU до 340 мм', 'Кулер до 170 мм', '3 вентилятора'],
    tags: ['ATX', '340 мм GPU', 'Airflow'],
    formFactors: ['ATX', 'mATX'],
    maxGpu: 340,
    coolerHeight: 170,
    watt: 0,
    performance: 84,
    popularity: 88,
  },
  {
    id: 'case-compact-mesh',
    name: 'Cube M Compact Mesh',
    short: 'Compact M',
    category: 'Корпуса',
    slot: 'case',
    price: 8990,
    oldPrice: 10990,
    rating: 4.5,
    stock: 10,
    image: 'assets/part-case.png',
    specs: ['mATX', 'GPU до 285 мм', 'Кулер до 160 мм', 'Пылевые фильтры'],
    tags: ['mATX', '285 мм GPU', 'Compact'],
    formFactors: ['mATX'],
    maxGpu: 285,
    coolerHeight: 160,
    watt: 0,
    performance: 70,
    popularity: 75,
  },
  {
    id: 'case-glass-xl',
    name: 'Panorama XL Glass',
    short: 'Panorama XL',
    category: 'Корпуса',
    slot: 'case',
    price: 18990,
    oldPrice: 22990,
    rating: 4.8,
    stock: 7,
    image: 'assets/part-case.png',
    specs: ['ATX / mATX', 'GPU до 380 мм', 'Кулер до 180 мм', 'USB-C'],
    tags: ['ATX', '380 мм GPU', 'Glass'],
    formFactors: ['ATX', 'mATX'],
    maxGpu: 380,
    coolerHeight: 180,
    watt: 0,
    performance: 92,
    popularity: 80,
  },
  {
    id: 'cooler-tower-220',
    name: 'IceTower 220 Air',
    short: 'Tower 220',
    category: 'Охлаждение',
    slot: 'cooling',
    price: 6990,
    oldPrice: 8490,
    rating: 4.6,
    stock: 18,
    image: 'assets/part-cooler.png',
    specs: ['До 220 Вт', 'Высота 155 мм', 'AM5 / LGA1700', '2 вентилятора'],
    tags: ['220 Вт', '155 мм', 'Air'],
    sockets: ['AM5', 'LGA1700'],
    tdpLimit: 220,
    height: 155,
    watt: 6,
    performance: 76,
    popularity: 82,
  },
  {
    id: 'cooler-aio-240',
    name: 'LiquidLoop 240 ARGB',
    short: 'AIO 240',
    category: 'Охлаждение',
    slot: 'cooling',
    price: 11990,
    oldPrice: 14990,
    rating: 4.7,
    stock: 11,
    image: 'assets/part-cooler.png',
    specs: ['До 280 Вт', 'Радиатор 240 мм', 'AM5 / LGA1700', 'PWM помпа'],
    tags: ['280 Вт', 'AIO', 'ARGB'],
    sockets: ['AM5', 'LGA1700'],
    tdpLimit: 280,
    height: 0,
    watt: 12,
    performance: 88,
    popularity: 85,
  },
  {
    id: 'cooler-aio-360',
    name: 'LiquidLoop 360 Pro',
    short: 'AIO 360',
    category: 'Охлаждение',
    slot: 'cooling',
    price: 17990,
    oldPrice: 21990,
    rating: 4.9,
    stock: 6,
    image: 'assets/part-cooler.png',
    specs: ['До 320 Вт', 'Радиатор 360 мм', 'AM5 / LGA1700', 'Тихий профиль'],
    tags: ['320 Вт', 'AIO', 'Quiet'],
    sockets: ['AM5', 'LGA1700'],
    tdpLimit: 320,
    height: 0,
    watt: 16,
    performance: 96,
    popularity: 78,
  },
];

const defaultBuild = {
  cpu: 'ryzen-7-7800x3d',
  motherboard: 'b650m-forge',
  ram: 'ddr5-32-6000',
  storage: 'nvme-2tb-forge',
  gpu: 'rtx-4070-super',
  psu: 'psu-750-gold',
  case: 'case-air-mesh',
  cooling: 'cooler-tower-220',
};

const presets = [
  {
    id: 'balanced',
    name: '1440p Balance',
    build: { ...defaultBuild },
  },
  {
    id: 'creator',
    name: 'Creator XL',
    build: {
      cpu: 'intel-i7-14700k',
      motherboard: 'z790-proline',
      ram: 'ddr5-64-6400',
      storage: 'nvme-4tb-rocket',
      gpu: 'rtx-4080-super',
      psu: 'psu-1000-platinum',
      case: 'case-glass-xl',
      cooling: 'cooler-aio-360',
    },
  },
  {
    id: 'compact',
    name: 'Compact Play',
    build: {
      cpu: 'intel-i5-14600kf',
      motherboard: 'b760m-prime',
      ram: 'ddr5-32-6000',
      storage: 'nvme-1tb-forge',
      gpu: 'rx-7600',
      psu: 'psu-650-gold',
      case: 'case-compact-mesh',
      cooling: 'cooler-aio-240',
    },
  },
];

const categories = ['Все', ...new Set(products.map((product) => product.category))];
const freeDeliveryFrom = 250000;
const storageKeys = {
  cart: 'voltmarket-pc-cart',
  favorites: 'voltmarket-pc-favorites',
  build: 'voltmarket-pc-build',
};

const state = {
  category: 'Все',
  query: '',
  maxPrice: 250000,
  stockOnly: false,
  compatibleOnly: false,
  favoritesOnly: false,
  sort: 'popular',
  cart: cleanCart(load(storageKeys.cart, {})),
  favorites: cleanFavorites(load(storageKeys.favorites, [])),
  build: loadBuild(),
  promo: '',
};

const elements = {
  header: document.querySelector('.site-header'),
  tabs: document.querySelector('#categoryTabs'),
  grid: document.querySelector('#productGrid'),
  resultCount: document.querySelector('#resultCount'),
  scopeNote: document.querySelector('#scopeNote'),
  search: document.querySelector('#globalSearch'),
  sort: document.querySelector('#sortSelect'),
  range: document.querySelector('#priceRange'),
  priceValue: document.querySelector('#priceValue'),
  stockOnly: document.querySelector('#stockOnly'),
  compatibleOnly: document.querySelector('#compatibleOnly'),
  reset: document.querySelector('#resetFilters'),
  wishlistButton: document.querySelector('#wishlistButton'),
  wishlistCount: document.querySelector('#wishlistCount'),
  buildSlots: document.querySelector('#buildSlots'),
  buildTotal: document.querySelector('#buildTotal'),
  buildName: document.querySelector('#buildName'),
  buildMetrics: document.querySelector('#buildMetrics'),
  scoreBars: document.querySelector('#scoreBars'),
  compatibilityList: document.querySelector('#compatibilityList'),
  presetButtons: document.querySelector('#presetButtons'),
  buildToCart: document.querySelector('#buildToCart'),
  copyBuild: document.querySelector('#copyBuild'),
  resetBuild: document.querySelector('#resetBuild'),
  rigFrame: document.querySelector('#rigFrame'),
  cartOpen: document.querySelector('#cartOpen'),
  cartClose: document.querySelector('#cartClose'),
  cartDrawer: document.querySelector('#cartDrawer'),
  cartItems: document.querySelector('#cartItems'),
  cartCount: document.querySelector('#cartCount'),
  cartSubtotal: document.querySelector('#cartSubtotal'),
  cartDiscount: document.querySelector('#cartDiscount'),
  cartTotal: document.querySelector('#cartTotal'),
  deliveryNote: document.querySelector('#deliveryNote'),
  deliveryMeter: document.querySelector('#deliveryMeter'),
  checkoutForm: document.querySelector('#checkoutForm'),
  promoInput: document.querySelector('#promoInput'),
  quickView: document.querySelector('#quickView'),
  quickViewClose: document.querySelector('#quickViewClose'),
  quickViewContent: document.querySelector('#quickViewContent'),
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

function loadBuild() {
  const raw = localStorage.getItem(storageKeys.build);
  if (raw === null) return { ...defaultBuild };
  try {
    return cleanBuild(JSON.parse(raw));
  } catch {
    return {};
  }
}

function cleanBuild(build) {
  const clean = {};
  if (!build || typeof build !== 'object') return clean;
  slotDefinitions.forEach((slot) => {
    const product = productById(build[slot.id]);
    if (product?.slot === slot.id) clean[slot.id] = product.id;
  });
  return clean;
}

function cleanCart(cart) {
  const clean = {};
  if (!cart || typeof cart !== 'object' || Array.isArray(cart)) return clean;
  Object.entries(cart).forEach(([id, qty]) => {
    const product = productById(id);
    const nextQty = Number(qty);
    if (product && Number.isInteger(nextQty) && nextQty > 0) {
      clean[id] = Math.min(nextQty, product.stock || 1);
    }
  });
  return clean;
}

function cleanFavorites(favorites) {
  if (!Array.isArray(favorites)) return [];
  return favorites.filter((id, index) => productById(id) && favorites.indexOf(id) === index);
}

function productById(id) {
  return products.find((product) => product.id === id);
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

function discountPercent(product) {
  return Math.max(0, Math.round((1 - product.price / product.oldPrice) * 100));
}

function selectedProducts(build = state.build) {
  return slotDefinitions.map((slot) => productById(build[slot.id])).filter(Boolean);
}

function buildTotal(build = state.build) {
  return selectedProducts(build).reduce((sum, product) => sum + product.price, 0);
}

function buildPower(build = state.build) {
  const selected = selectedProducts(build);
  if (!selected.length) return 0;
  return selected.reduce((sum, product) => sum + (product.watt || 0), 70);
}

function recommendedPsu(build = state.build) {
  const power = buildPower(build);
  if (!power) return 0;
  return Math.ceil((power * 1.3) / 50) * 50;
}

function buildIssues(build = state.build, includeMissing = true) {
  const issues = [];
  const cpu = productById(build.cpu);
  const motherboard = productById(build.motherboard);
  const ram = productById(build.ram);
  const gpu = productById(build.gpu);
  const psu = productById(build.psu);
  const caseItem = productById(build.case);
  const cooling = productById(build.cooling);

  if (includeMissing) {
    slotDefinitions.forEach((slot) => {
      if (slot.required && !productById(build[slot.id])) {
        issues.push({
          level: 'warn',
          title: slot.label,
          message: 'Слот пока пустой.',
        });
      }
    });
  }

  if (cpu && motherboard && cpu.socket !== motherboard.socket) {
    issues.push({
      level: 'error',
      title: 'Сокет',
      message: `${cpu.short} требует ${cpu.socket}, а плата рассчитана на ${motherboard.socket}.`,
    });
  }

  if (motherboard && ram && motherboard.memoryType !== ram.memoryType) {
    issues.push({
      level: 'error',
      title: 'Память',
      message: `${motherboard.short} поддерживает ${motherboard.memoryType}, выбран комплект ${ram.memoryType}.`,
    });
  }

  if (motherboard && caseItem && !caseItem.formFactors.includes(motherboard.formFactor)) {
    issues.push({
      level: 'error',
      title: 'Форм-фактор',
      message: `${caseItem.short} не принимает плату ${motherboard.formFactor}.`,
    });
  }

  if (gpu && caseItem && gpu.length > caseItem.maxGpu) {
    issues.push({
      level: 'error',
      title: 'Длина GPU',
      message: `${gpu.short}: ${gpu.length} мм, лимит корпуса ${caseItem.maxGpu} мм.`,
    });
  }

  if (cpu && cooling && !cooling.sockets.includes(cpu.socket)) {
    issues.push({
      level: 'error',
      title: 'Крепление кулера',
      message: `${cooling.short} не указан для ${cpu.socket}.`,
    });
  }

  if (cpu && cooling && cpu.tdp > cooling.tdpLimit) {
    issues.push({
      level: 'error',
      title: 'Охлаждение',
      message: `${cooling.short} рассчитан до ${cooling.tdpLimit} Вт, процессору нужно до ${cpu.tdp} Вт.`,
    });
  }

  if (caseItem && cooling?.height && cooling.height > caseItem.coolerHeight) {
    issues.push({
      level: 'error',
      title: 'Высота кулера',
      message: `${cooling.short}: ${cooling.height} мм, лимит корпуса ${caseItem.coolerHeight} мм.`,
    });
  }

  if (psu) {
    const recommended = recommendedPsu(build);
    if (recommended && psu.capacity < recommended) {
      issues.push({
        level: 'error',
        title: 'Блок питания',
        message: `${psu.short}: ${psu.capacity} Вт, нужен запас около ${recommended} Вт.`,
      });
    } else if (recommended && psu.capacity < recommended + 100) {
      issues.push({
        level: 'warn',
        title: 'Запас питания',
        message: `${psu.short} подходит, но апгрейд GPU лучше планировать с запасом.`,
      });
    }
  }

  return issues;
}

function hasBlockingIssues(build = state.build) {
  return buildIssues(build, false).some((issue) => issue.level === 'error');
}

function productFitsBuild(product) {
  const simulated = { ...state.build, [product.slot]: product.id };
  return !hasBlockingIssues(simulated);
}

function buildScores() {
  const cpu = productById(state.build.cpu);
  const gpu = productById(state.build.gpu);
  const ram = productById(state.build.ram);
  const storage = productById(state.build.storage);
  const cooling = productById(state.build.cooling);
  const caseItem = productById(state.build.case);
  const psu = productById(state.build.psu);
  const cpuScore = cpu?.performance ?? 0;
  const gpuScore = gpu?.performance ?? 0;
  const ramScore = ram?.performance ?? 0;
  const storageScore = storage?.performance ?? 0;
  const coolingScore = cooling?.performance ?? 0;
  const airflowScore = caseItem?.performance ?? 0;
  const psuScore = psu?.performance ?? 0;

  return [
    {
      label: 'Игры',
      value: Math.round(gpuScore * 0.55 + cpuScore * 0.3 + ramScore * 0.1 + storageScore * 0.05),
    },
    {
      label: 'Работа',
      value: Math.round(cpuScore * 0.45 + ramScore * 0.25 + storageScore * 0.2 + gpuScore * 0.1),
    },
    {
      label: 'Тишина',
      value: Math.round(coolingScore * 0.35 + airflowScore * 0.35 + psuScore * 0.3),
    },
  ];
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add('show');
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => elements.toast.classList.remove('show'), 2600);
}

function bumpCartBadge() {
  elements.cartCount.classList.remove('bump');
  void elements.cartCount.offsetWidth;
  elements.cartCount.classList.add('bump');
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

function renderPresets() {
  elements.presetButtons.innerHTML = presets
    .map(
      (preset) => `
        <button class="preset-button" type="button" data-preset="${preset.id}">
          <span>${preset.name}</span>
          <strong>${money(buildTotal(preset.build))}</strong>
        </button>
      `,
    )
    .join('');
}

function renderBuildSlots() {
  elements.buildSlots.innerHTML = slotDefinitions
    .map((slot, index) => {
      const selected = productById(state.build[slot.id]);
      const options = products
        .filter((product) => product.slot === slot.id)
        .map((product) => {
          const active = selected?.id === product.id;
          const fits = productFitsBuild(product) || active;
          return `
            <button
              class="part-option ${active ? 'active' : ''} ${fits ? '' : 'blocked'}"
              type="button"
              aria-pressed="${active}"
              data-build-pick="${product.id}"
            >
              <span>${product.short}</span>
              <strong>${money(product.price)}</strong>
            </button>
          `;
        })
        .join('');

      return `
        <article class="slot-item">
          <div class="slot-label">
            <span>${String(index + 1).padStart(2, '0')}</span>
            <div>
              <strong>${slot.label}</strong>
              <small>${selected ? selected.name : 'Не выбран'}</small>
            </div>
          </div>
          <div class="slot-options">${options}</div>
        </article>
      `;
    })
    .join('');
}

function renderRig() {
  const caseSelected = Boolean(productById(state.build.case));
  elements.rigFrame.classList.toggle('case-filled', caseSelected);
  document.querySelectorAll('.rig-part[data-slot]').forEach((part) => {
    const slotId = part.dataset.slot;
    const product = productById(state.build[slotId]);
    part.classList.toggle('filled', Boolean(product));
    part.querySelector('span').textContent = product?.short ?? slotDefinitions.find((slot) => slot.id === slotId)?.short;
    part.title = product?.name ?? '';
  });
}

function renderBuildSummary() {
  const selected = selectedProducts();
  const selectedCount = selected.length;
  const total = buildTotal();
  const power = buildPower();
  const recommended = recommendedPsu();
  const issues = buildIssues();
  const errors = issues.filter((issue) => issue.level === 'error');
  const cpu = productById(state.build.cpu);
  const gpu = productById(state.build.gpu);

  elements.buildName.textContent = cpu || gpu ? `${cpu?.short ?? 'CPU'} + ${gpu?.short ?? 'GPU'}` : 'Текущая сборка';
  elements.buildTotal.textContent = money(total);

  elements.buildMetrics.innerHTML = [
    ['Слоты', `${selectedCount}/${slotDefinitions.length}`],
    ['Мощность', power ? `${power} Вт` : '0 Вт'],
    ['БП от', recommended ? `${recommended} Вт` : '0 Вт'],
    ['Статус', errors.length ? 'Конфликт' : selectedCount === slotDefinitions.length ? 'Готово' : 'Черновик'],
  ]
    .map(
      ([label, value]) => `
        <div class="metric">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `,
    )
    .join('');

  elements.scoreBars.innerHTML = buildScores()
    .map(
      (score) => `
        <div class="score-row">
          <span>${score.label}</span>
          <div class="score-track" aria-hidden="true">
            <span style="width: ${Math.min(score.value, 100)}%"></span>
          </div>
          <strong>${score.value}</strong>
        </div>
      `,
    )
    .join('');

  if (!issues.length) {
    elements.compatibilityList.innerHTML = `
      <li class="ok">
        <strong>Совместимо</strong>
        <span>Сборка проходит проверку по сокету, памяти, корпусу, питанию и охлаждению.</span>
      </li>
    `;
  } else {
    elements.compatibilityList.innerHTML = issues
      .slice(0, 6)
      .map(
        (issue) => `
          <li class="${issue.level}">
            <strong>${issue.title}</strong>
            <span>${issue.message}</span>
          </li>
        `,
      )
      .join('');
  }
}

function filteredProducts() {
  return products
    .filter((product) => !state.favoritesOnly || state.favorites.includes(product.id))
    .filter((product) => state.category === 'Все' || product.category === state.category)
    .filter((product) => product.price <= state.maxPrice)
    .filter((product) => !state.stockOnly || product.stock > 0)
    .filter((product) => !state.compatibleOnly || productFitsBuild(product))
    .filter((product) => {
      const query = state.query.trim().toLowerCase();
      if (!query) return true;
      return [product.name, product.category, product.socket, product.memoryType, product.formFactor, ...product.specs, ...product.tags]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(query);
    })
    .sort((a, b) => {
      if (state.sort === 'priceAsc') return a.price - b.price;
      if (state.sort === 'priceDesc') return b.price - a.price;
      if (state.sort === 'rating') return b.rating - a.rating;
      if (state.sort === 'power') return b.performance - a.performance;
      return b.popularity - a.popularity;
    });
}

function renderProducts() {
  const list = filteredProducts();
  elements.resultCount.textContent = pluralProducts(list.length);
  elements.scopeNote.textContent = state.favoritesOnly ? 'Избранное' : state.compatibleOnly ? 'Совместимые' : state.query ? 'Поиск' : '';
  elements.wishlistButton.setAttribute('aria-pressed', String(state.favoritesOnly));
  elements.priceValue.textContent = money(Number(state.maxPrice));

  if (!list.length) {
    elements.grid.innerHTML = state.favoritesOnly
      ? '<p class="empty-state">В избранном пока пусто.</p>'
      : '<p class="empty-state">Ничего не найдено по текущим фильтрам.</p>';
    return;
  }

  elements.grid.innerHTML = list.map(productCard).join('');
}

function productCard(product) {
  const isFavorite = state.favorites.includes(product.id);
  const selected = state.build[product.slot] === product.id;
  const fits = productFitsBuild(product) || selected;
  const stockClass = product.stock > 5 ? 'stock' : product.stock > 0 ? 'low' : 'empty';
  const stockText = product.stock > 0 ? `${product.stock} шт.` : 'Под заказ';

  return `
    <article class="product-card">
      <div class="product-image">
        <span class="sale-badge">-${discountPercent(product)}%</span>
        <img src="${product.image}" alt="${product.name}" />
        <button class="quick-view-button" type="button" data-view="${product.id}">Подробнее</button>
      </div>
      <div class="product-body">
        <div class="product-top">
          <h3 class="product-title">${product.name}</h3>
          <button
            class="favorite-button ${isFavorite ? 'active' : ''}"
            type="button"
            aria-label="${isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}"
            aria-pressed="${isFavorite}"
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
        <div class="tag-row">
          ${product.tags.slice(0, 3).map((tag) => `<span>${tag}</span>`).join('')}
        </div>
        <div class="product-footer">
          <div class="price-row">
            <span class="price">${money(product.price)}</span>
            <span class="old-price">${money(product.oldPrice)}</span>
          </div>
          <div class="card-actions">
            <button class="add-button" type="button" data-add="${product.id}" ${product.stock ? '' : 'disabled'}>
              ${product.stock ? 'В заказ' : 'Нет'}
            </button>
            <button
              class="pick-button ${selected ? 'active' : ''} ${fits ? '' : 'blocked'}"
              type="button"
              data-build-pick="${product.id}"
              aria-pressed="${selected}"
            >
              ${selected ? 'В сборке' : 'В сборку'}
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCart() {
  const entries = Object.entries(state.cart)
    .map(([id, qty]) => ({ product: productById(id), qty }))
    .filter((entry) => entry.product);

  const count = entries.reduce((sum, entry) => sum + entry.qty, 0);
  elements.cartCount.textContent = count;
  elements.wishlistCount.textContent = state.favorites.length;

  if (!entries.length) {
    elements.cartItems.innerHTML = '<p class="empty-state">Заказ пока пустой.</p>';
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
  const discount = state.promo.toUpperCase() === 'BUILD7' ? Math.round(subtotal * 0.07) : 0;
  const total = Math.max(subtotal - discount, 0);
  const deliveryLeft = Math.max(freeDeliveryFrom - subtotal, 0);
  const deliveryProgress = Math.min(100, Math.round((subtotal / freeDeliveryFrom) * 100));

  elements.cartSubtotal.textContent = money(subtotal);
  elements.cartDiscount.textContent = discount ? `−${money(discount)}` : money(0);
  elements.cartTotal.textContent = money(total);
  elements.deliveryMeter.style.width = `${deliveryProgress}%`;
  elements.deliveryNote.textContent =
    subtotal === 0
      ? 'Добавь комплектующие для расчёта доставки'
      : deliveryLeft === 0
        ? 'Бесплатная доставка уже в заказе'
        : `До бесплатной доставки ${money(deliveryLeft)}`;
}

function sync() {
  save(storageKeys.cart, state.cart);
  save(storageKeys.favorites, state.favorites);
  save(storageKeys.build, state.build);
  renderBuildSlots();
  renderRig();
  renderBuildSummary();
  renderProducts();
  renderCart();
}

function addToCart(id, silent = false) {
  const product = productById(id);
  if (!product || product.stock === 0) return false;
  const currentQty = state.cart[id] ?? 0;
  if (currentQty >= product.stock) {
    if (!silent) showToast('Больше нет на складе');
    return false;
  }
  state.cart[id] = currentQty + 1;
  if (!silent) showToast(`${product.name} добавлен в заказ`);
  sync();
  bumpCartBadge();
  return true;
}

function updateQuantity(id, delta) {
  const product = productById(id);
  if (!product) return;
  const next = (state.cart[id] ?? 0) + delta;
  if (next <= 0) delete state.cart[id];
  else state.cart[id] = Math.min(next, product.stock);
  sync();
}

function pickBuildProduct(id) {
  const product = productById(id);
  if (!product) return;
  state.build[product.slot] = product.id;
  sync();
  showToast(`${product.short} добавлен в сборку`);
  refreshQuickView();
}

function applyPreset(id) {
  const preset = presets.find((item) => item.id === id);
  if (!preset) return;
  state.build = { ...preset.build };
  sync();
  showToast(`${preset.name} загружен`);
}

function resetBuild() {
  state.build = {};
  sync();
  showToast('Сборка очищена');
}

function addBuildToCart() {
  const selected = selectedProducts();
  if (!selected.length) {
    showToast('Сборка пока пустая');
    return;
  }

  let added = 0;
  selected.forEach((product) => {
    if (addToCart(product.id, true)) added += 1;
  });
  sync();
  if (added) {
    bumpCartBadge();
    openCart();
    showToast(`В заказ добавлено: ${added}`);
  } else {
    showToast('Позиции уже достигли лимита склада');
  }
}

function copyBuild() {
  const selected = selectedProducts();
  if (!selected.length) {
    showToast('Сборка пока пустая');
    return;
  }

  const issues = buildIssues()
    .filter((issue) => issue.level === 'error')
    .map((issue) => `${issue.title}: ${issue.message}`);
  const text = [
    'VoltMarket PC',
    ...slotDefinitions.map((slot) => {
      const product = productById(state.build[slot.id]);
      return `${slot.label}: ${product ? `${product.name} - ${money(product.price)}` : 'не выбран'}`;
    }),
    `Итого: ${money(buildTotal())}`,
    `Расчёт мощности: ${buildPower()} Вт`,
    `Рекомендованный БП: ${recommendedPsu()} Вт`,
    issues.length ? `Конфликты: ${issues.join('; ')}` : 'Совместимость: проверена',
  ].join('\n');

  navigator.clipboard
    ?.writeText(text)
    .then(() => showToast('Смета скопирована'))
    .catch(() => showToast('Не удалось скопировать смету'));
}

function toggleFavorite(id) {
  state.favorites = state.favorites.includes(id)
    ? state.favorites.filter((item) => item !== id)
    : [...state.favorites, id];
  sync();
  refreshQuickView();
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

function productLead(product) {
  const leads = {
    cpu: 'Центр сборки: задаёт сокет, теплопакет и общий запас производительности.',
    motherboard: 'Плата определяет платформу, тип памяти, размер корпуса и будущие апгрейды.',
    ram: 'Память влияет на стабильность, рабочие задачи и комфорт в современных играх.',
    storage: 'Быстрый NVMe сокращает загрузки системы, проектов и игровых миров.',
    gpu: 'Главный модуль для FPS, рендера, трассировки и работы с нейросетями.',
    psu: 'Запас питания держит систему стабильной под нагрузкой и будущим апгрейдом.',
    case: 'Корпус отвечает за поток воздуха, габариты видеокарты и аккуратную сборку.',
    cooling: 'Охлаждение удерживает частоты и шум в комфортном диапазоне.',
  };
  return leads[product.slot] ?? 'Комплектующая для сборки VoltMarket PC.';
}

function quickViewMarkup(product) {
  const isFavorite = state.favorites.includes(product.id);
  const selected = state.build[product.slot] === product.id;
  const fits = productFitsBuild(product) || selected;
  const stockText = product.stock > 0 ? `${product.stock} шт. в наличии` : 'Под заказ';

  return `
    <div class="quick-view-content">
      <div class="quick-view-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="quick-view-details">
        <div>
          <p class="eyebrow">${product.category}</p>
          <h2>${product.name}</h2>
        </div>
        <p class="quick-view-lead">${productLead(product)}</p>
        <div class="product-meta">
          <span class="chip stock">${stockText}</span>
          <span class="chip">★ ${product.rating}</span>
          <span class="chip">-${discountPercent(product)}%</span>
        </div>
        <ul class="quick-view-specs">
          ${product.specs.map((spec) => `<li>${spec}</li>`).join('')}
        </ul>
        <div class="tag-row">
          ${product.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
        <div class="price-row">
          <span class="price">${money(product.price)}</span>
          <span class="old-price">${money(product.oldPrice)}</span>
        </div>
        <div class="quick-view-actions">
          <button class="add-button" type="button" data-add="${product.id}" ${product.stock ? '' : 'disabled'}>
            ${product.stock ? 'В заказ' : 'Нет в наличии'}
          </button>
          <button
            class="pick-button ${selected ? 'active' : ''} ${fits ? '' : 'blocked'}"
            type="button"
            data-build-pick="${product.id}"
            aria-pressed="${selected}"
          >
            ${selected ? 'В сборке' : 'В сборку'}
          </button>
          <button
            class="favorite-button ${isFavorite ? 'active' : ''}"
            type="button"
            aria-label="${isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}"
            aria-pressed="${isFavorite}"
            data-favorite="${product.id}"
          >♡</button>
        </div>
      </div>
    </div>
  `;
}

function openQuickView(id) {
  const product = productById(id);
  if (!product) return;
  elements.quickViewContent.innerHTML = quickViewMarkup(product);
  elements.quickView.dataset.product = id;
  elements.quickView.classList.add('open');
  elements.quickView.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function refreshQuickView() {
  const id = elements.quickView.dataset.product;
  if (!id || !elements.quickView.classList.contains('open')) return;
  const product = productById(id);
  if (product) elements.quickViewContent.innerHTML = quickViewMarkup(product);
}

function closeQuickView() {
  elements.quickView.classList.remove('open');
  elements.quickView.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  delete elements.quickView.dataset.product;
}

elements.tabs.addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  state.category = button.dataset.category;
  state.favoritesOnly = false;
  renderTabs();
  renderProducts();
});

elements.presetButtons.addEventListener('click', (event) => {
  const button = event.target.closest('[data-preset]');
  if (button) applyPreset(button.dataset.preset);
});

elements.buildSlots.addEventListener('click', (event) => {
  const button = event.target.closest('[data-build-pick]');
  if (button) pickBuildProduct(button.dataset.buildPick);
});

elements.grid.addEventListener('click', (event) => {
  const viewButton = event.target.closest('[data-view]');
  const addButton = event.target.closest('[data-add]');
  const favoriteButton = event.target.closest('[data-favorite]');
  const pickButton = event.target.closest('[data-build-pick]');
  if (viewButton) openQuickView(viewButton.dataset.view);
  if (addButton) addToCart(addButton.dataset.add);
  if (favoriteButton) toggleFavorite(favoriteButton.dataset.favorite);
  if (pickButton) pickBuildProduct(pickButton.dataset.buildPick);
});

elements.quickView.addEventListener('click', (event) => {
  const addButton = event.target.closest('[data-add]');
  const favoriteButton = event.target.closest('[data-favorite]');
  const pickButton = event.target.closest('[data-build-pick]');
  if (event.target === elements.quickView) closeQuickView();
  if (addButton) addToCart(addButton.dataset.add);
  if (favoriteButton) toggleFavorite(favoriteButton.dataset.favorite);
  if (pickButton) pickBuildProduct(pickButton.dataset.buildPick);
});

elements.quickViewClose.addEventListener('click', closeQuickView);

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

elements.compatibleOnly.addEventListener('change', (event) => {
  state.compatibleOnly = event.target.checked;
  renderProducts();
});

elements.reset.addEventListener('click', () => {
  state.category = 'Все';
  state.query = '';
  state.maxPrice = 250000;
  state.stockOnly = false;
  state.compatibleOnly = false;
  state.favoritesOnly = false;
  state.sort = 'popular';
  elements.search.value = '';
  elements.range.value = String(state.maxPrice);
  elements.stockOnly.checked = false;
  elements.compatibleOnly.checked = false;
  elements.sort.value = state.sort;
  renderTabs();
  renderProducts();
});

elements.wishlistButton.addEventListener('click', () => {
  if (!state.favorites.length) {
    showToast('Избранное пока пустое');
    return;
  }
  state.favoritesOnly = !state.favoritesOnly;
  state.category = 'Все';
  state.query = '';
  elements.search.value = '';
  renderTabs();
  renderProducts();
  showToast(state.favoritesOnly ? 'Показываю избранное' : 'Показываю весь каталог');
});

elements.buildToCart.addEventListener('click', addBuildToCart);
elements.copyBuild.addEventListener('click', copyBuild);
elements.resetBuild.addEventListener('click', resetBuild);
elements.cartOpen.addEventListener('click', openCart);
elements.cartClose.addEventListener('click', closeCart);
elements.cartDrawer.addEventListener('click', (event) => {
  if (event.target === elements.cartDrawer) closeCart();
});

elements.promoInput.addEventListener('input', (event) => {
  state.promo = event.target.value.trim();
  renderCart();
});

elements.checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const hasItems = Object.keys(state.cart).length > 0;
  if (!hasItems) {
    showToast('Добавь комплектующие перед заявкой');
    return;
  }
  const orderId = `VMPC-${Math.floor(100000 + Math.random() * 900000)}`;
  state.cart = {};
  state.promo = '';
  sync();
  closeCart();
  elements.checkoutForm.reset();
  showToast(`Заявка ${orderId} создана`);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeCart();
    closeQuickView();
  }
});

window.addEventListener('scroll', () => {
  elements.header.classList.toggle('scrolled', window.scrollY > 12);
});

renderTabs();
renderPresets();
sync();
