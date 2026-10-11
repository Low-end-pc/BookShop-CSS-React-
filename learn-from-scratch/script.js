/* ==========================================================================
   THE FLORET BOOKSHOP — CORE LOGIC
   ========================================================================== */

// 1. Mobile Navigation Toggle
const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primaryNav');

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    // Toggles the .is-open class on the navigation
    const isOpen = primaryNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}
// ==========================================================================
// 2. BOOK CATALOG DATA (Source of Truth)
// ==========================================================================
const BOOKS = [
  {
    id: "piranesi",
    title: "Piranesi",
    author: "Susanna Clarke",
    genre: "Speculative Fiction",
    price: 22.00,
    coverImage: "images/covers/piranesi.jpg",
    synopsis: "An enchanting, metaphysical masterwork about a labyrinth of endless halls and ocean tides."
  },
  {
    id: "hamnet",
    title: "Hamnet",
    author: "Maggie O’Farrell",
    genre: "Historical Fiction",
    price: 24.00,
    coverImage: "images/covers/hamnet.jpg",
    synopsis: "A luminous reimagining of the boy whose loss inspired Shakespeare's greatest play."
  },
  {
    id: "circe",
    title: "Circe",
    author: "Madeline Miller",
    genre: "Literary Fiction",
    price: 25.00,
    coverImage: "images/covers/circe.jpg",
    synopsis: "In the house of Helios, a daughter is born who hones her occult craft and tames wild beasts."
  },
  {
    id: "klara-and-the-sun",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    genre: "Speculative Fiction",
    price: 23.00,
    coverImage: "images/covers/klara-and-the-sun.jpg",
    synopsis: "An unforgettable novel that looks through the eyes of an Artificial Friend to explore what it means to love."
  },
  {
    id: "normal-people",
    title: "Normal People",
    author: "Sally Rooney",
    genre: "Literary Fiction",
    price: 20.00,
    coverImage: "images/covers/normal-people.jpg",
    synopsis: "A searing, electric story of mutual fascination, friendship, and first love in Ireland."
  },
  {
    id: "gentleman-in-moscow",
    title: "A Gentleman in Moscow",
    author: "Amor Towles",
    genre: "Historical Fiction",
    price: 21.00,
    coverImage: "images/covers/gentleman-in-moscow.jpg",
    synopsis: "An unrepentant aristocrat is sentenced to spend the rest of his life inside a luxury hotel."
  }
];

// ==========================================================================
// 3. DYNAMIC DOM RENDERING
// ==========================================================================
const bookGrid = document.getElementById('bookGrid');

function renderBooks(items = BOOKS) {
  if (!bookGrid) return;

  // Converts each book object into an HTML card string
  bookGrid.innerHTML = items.map(book => `
    <li class="book" data-id="${book.id}">
      <div class="cover">
        <img src="${book.coverImage}" alt="${book.title}" loading="lazy">
      </div>
      <div class="book__body">
        <h3 class="book__title">${book.title}</h3>
        <p class="book__author">${book.author}</p>
        <p class="book__price">$${book.price.toFixed(2)}</p>
      </div>
    </li>
  `).join('');
}

// Initial Render: Load all books when page opens
renderBooks();

// ==========================================================================
// 4. CATEGORY FILTERING LOGIC
// ==========================================================================
const filterButtons = document.querySelectorAll('.filter');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 1. Active Tab UI: Remove active class from all, add only to clicked one
    filterButtons.forEach(btn => btn.classList.remove('is-active'));
    button.classList.add('is-active');

    // 2. Read the custom data label
    const selectedGenre = button.dataset.filter;

    // 3. Filter array and re-render
    if (selectedGenre === 'all') {
      renderBooks(BOOKS); // Show all books
    } else {
      const filtered = BOOKS.filter(book => book.genre === selectedGenre);
      renderBooks(filtered); // Show only matched books
    }
  });
});

// ==========================================================================
// 5. BOOK DETAILS MODAL CONTROLLER
// ==========================================================================
const bookModal = document.getElementById('bookModal');
const bookModalScrim = document.getElementById('bookModalScrim');
const bookModalClose = document.getElementById('bookModalClose');
const bookModalContent = document.getElementById('bookModalContent');

// Open Modal & Inject Book Details
function openBookModal(bookId) {
  const book = BOOKS.find(b => b.id === bookId);
  if (!book || !bookModalContent) return;

  // Injects book image, description and action buttons
  bookModalContent.innerHTML = `
    <div class="cover">
      <img src="${book.coverImage}" alt="${book.title}">
    </div>
    <div class="modal__info">
      <p class="hero__kicker">${book.genre}</p>
      <h2 style="font-size: 2.25rem; margin-bottom: 8px;">${book.title}</h2>
      <p style="font-family: var(--font-serif); font-style: italic; color: var(--ink-3); margin-bottom: 20px;">by ${book.author}</p>
      <p style="font-size: 1.25rem; font-weight: 600; margin-bottom: 24px;">$${book.price.toFixed(2)}</p>
      <p style="line-height: 1.7; color: var(--ink-2); margin-bottom: 32px;">${book.synopsis}</p>
      <button class="btn btn--primary" onclick="addToBag('${book.id}')">Add to bag</button>
    </div>
  `;

  bookModal.classList.add('is-open');
  bookModalScrim.classList.add('is-open');
}

// Close Modal
function closeBookModal() {
  bookModal.classList.remove('is-open');
  bookModalScrim.classList.remove('is-open');
}

// Event Listeners: Close triggers
if (bookModalClose) bookModalClose.addEventListener('click', closeBookModal);
if (bookModalScrim) bookModalScrim.addEventListener('click', closeBookModal);
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeBookModal();
});

// Event Delegation: Open modal when any book card in the grid is clicked
if (bookGrid) {
  bookGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.book');
    if (card) {
      openBookModal(card.dataset.id);
    }
  });
}

// ==========================================================================
// 6. SHOPPING BAG STATE & LOCALSTORAGE
// ==========================================================================

// State: Load saved items from browser memory or start with empty array
let bag = JSON.parse(localStorage.getItem('floret_bag')) || [];

// DOM Elements
const bagDrawer = document.getElementById('bag');
const bagScrim = document.getElementById('bagScrim');
const bagOpenBtn = document.getElementById('bagOpen');
const bagCloseBtn = document.getElementById('bagClose');
const bagItemsList = document.getElementById('bagItems');
const bagEmptyMsg = document.getElementById('bagEmpty');
const bagSubtotalEl = document.getElementById('bagSubtotal');
const bagCountBadge = document.getElementById('bagCount');

// Open / Close Drawer
function openBag() {
  if (bagDrawer && bagScrim) {
    bagDrawer.classList.add('is-open');
    bagScrim.classList.add('is-open');
  }
}

function closeBag() {
  if (bagDrawer && bagScrim) {
    bagDrawer.classList.remove('is-open');
    bagScrim.classList.remove('is-open');
  }
}

if (bagOpenBtn) bagOpenBtn.addEventListener('click', openBag);
if (bagCloseBtn) bagCloseBtn.addEventListener('click', closeBag);
if (bagScrim) bagScrim.addEventListener('click', closeBag);

// Save State to LocalStorage & Refresh UI
function saveBag() {
  localStorage.setItem('floret_bag', JSON.stringify(bag));
  updateBagUI();
}

// Add Book to Bag
window.addToBag = function (bookId) {
  const existing = bag.find(item => item.id === bookId);
  if (existing) {
    existing.qty += 1;
  } else {
    bag.push({ id: bookId, qty: 1 });
  }

  saveBag();
  closeBookModal(); // Close detail popup
  openBag();        // Slide in cart drawer to show added item!
};

// Change Quantity (+1 or -1)
window.changeQty = function (bookId, delta) {
  const item = bag.find(i => i.id === bookId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    bag = bag.filter(i => i.id !== bookId); // Remove if 0
  }

  saveBag();
};

// Render Bag Items, Badge Count & Subtotal
function updateBagUI() {
  // 1. Calculate Total Items & Update Badge
  const totalCount = bag.reduce((sum, item) => sum + item.qty, 0);
  if (bagCountBadge) bagCountBadge.innerText = totalCount;

  // 2. Empty State Toggle
  if (bag.length === 0) {
    if (bagEmptyMsg) bagEmptyMsg.style.display = 'block';
    if (bagItemsList) bagItemsList.innerHTML = '';
    if (bagSubtotalEl) bagSubtotalEl.innerText = '$0.00';
    return;
  }

  if (bagEmptyMsg) bagEmptyMsg.style.display = 'none';

  // 3. Render Items & Calculate Subtotal
  let subtotal = 0;
  if (bagItemsList) {
    bagItemsList.innerHTML = bag.map(item => {
      const book = BOOKS.find(b => b.id === item.id);
      if (!book) return '';

      const itemTotal = book.price * item.qty;
      subtotal += itemTotal;

      return `
        <li class="bag__item">
          <img src="${book.coverImage}" alt="${book.title}">
          <div class="bag__item-info">
            <h4>${book.title}</h4>
            <p>$${book.price.toFixed(2)}</p>
            <div style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
              <button class="btn" style="padding: 2px 8px; font-size: 0.8rem;" onclick="changeQty('${item.id}', -1)">-</button>
              <span style="font-size: 0.9rem; font-weight: 600;">${item.qty}</span>
              <button class="btn" style="padding: 2px 8px; font-size: 0.8rem;" onclick="changeQty('${item.id}', 1)">+</button>
            </div>
          </div>
          <div style="font-weight: 600; font-size: 0.95rem;">
            $${itemTotal.toFixed(2)}
          </div>
        </li>
      `;
    }).join('');
  }

  // 4. Update Subtotal Price
  if (bagSubtotalEl) {
    bagSubtotalEl.innerText = `$${subtotal.toFixed(2)}`;
  }
}

// Initial Sync on Page Load
updateBagUI();