/* =========================================================
   The Floret Bookshop — Interactions & Authentic Catalogue
   ========================================================= */

const BOOKS = [
  {
    id: "piranesi",
    title: "Piranesi",
    author: "Susanna Clarke",
    genre: "Speculative Fiction",
    price: 22.00,
    format: "Hardcover",
    pages: 272,
    publisher: "Bloomsbury Publishing",
    year: "2020",
    isbn: "978-1-63557-563-7",
    coverImage: "images/covers/piranesi.jpg",
    synopsis: "Piranesi lives in the House. Perhaps he always has. In his notebooks day after day, he makes a meticulous record of its wonders: the labyrinth of halls, the thousands of statues, the tides that thunder up staircases. An enchanting, metaphysical masterwork.",
    quote: "“A luminous, singular novel about solitude, innocence, and wonder.” — Julian, Reading Specialist"
  },
  {
    id: "hamnet",
    title: "Hamnet",
    author: "Maggie O’Farrell",
    genre: "Historical Fiction",
    price: 24.00,
    format: "Hardcover",
    pages: 384,
    publisher: "Tinder Press / Knopf",
    year: "2020",
    isbn: "978-0-525-65760-6",
    coverImage: "images/covers/hamnet.jpg",
    synopsis: "Warwickshire in the 1580s. Agnes is a wild, intuitive woman who walks her family's land with a kestrel perched on her glove. A portrait of a marriage, a celebration of fierce love, and a devastating reimagining of the boy whose loss inspired Shakespeare's greatest play.",
    quote: "“Heartbreaking, visceral, and richly atmospheric on every single page.” — Nadia, Front Desk"
  },
  {
    id: "circe",
    title: "Circe",
    author: "Madeline Miller",
    genre: "Literary Fiction",
    price: 25.00,
    format: "Hardcover",
    pages: 400,
    publisher: "Little, Brown and Company",
    year: "2018",
    isbn: "978-0-316-55634-7",
    coverImage: "images/covers/circe.jpg",
    synopsis: "In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. Banished to a deserted island by Zeus, Circe hones her occult craft, tames wild beasts, and crosses paths with the most famous figures in all of mythology.",
    quote: "“Bold, feminist, and intoxicatingly written. An instant modern classic.” — Maya, Fiction Desk"
  },
  {
    id: "klara-and-the-sun",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    genre: "Speculative Fiction",
    price: 23.00,
    format: "Hardcover",
    pages: 320,
    publisher: "Faber & Faber / Knopf",
    year: "2021",
    isbn: "978-0-593-31817-1",
    coverImage: "images/covers/klara-and-the-sun.jpg",
    synopsis: "From his Nobel Prize-winning perch, Ishiguro looks through the eyes of Klara, an Artificial Friend with outstanding observational qualities, who watches the behavior of those who come in to browse the shop. A thrilling book that asks: what does it mean to love?",
    quote: "“Devastatingly quiet and profound. Ishiguro at his absolute best.” — Thomas, Fiction Curator"
  },
  {
    id: "normal-people",
    title: "Normal People",
    author: "Sally Rooney",
    genre: "Literary Fiction",
    price: 20.00,
    format: "Paperback",
    pages: 288,
    publisher: "Faber & Faber / Hogarth",
    year: "2018",
    isbn: "978-1-9848-2217-8",
    coverImage: "images/covers/normal-people.jpg",
    synopsis: "Connell and Marianne grow up in the same small town in western Ireland, but the similarities end there. In school, Connell is popular and well-liked, while Marianne is a loner. A searing story of mutual fascination, friendship, and first love.",
    quote: "“Electric prose about intimacy, class, and young adulthood.” — Clara, Bookseller"
  },
  {
    id: "secret-history",
    title: "The Secret History",
    author: "Donna Tartt",
    genre: "Literary Fiction",
    price: 24.00,
    format: "Paperback",
    pages: 576,
    publisher: "Alfred A. Knopf",
    year: "1992",
    isbn: "978-0-679-41032-4",
    coverImage: "images/covers/secret-history.jpg",
    synopsis: "Under the influence of a charismatic classics professor, a group of clever, eccentric misfits at an elite New England college discover a way of thinking and living that is a world away from the humdrum existence of their contemporaries. Then a murder occurs.",
    quote: "“The quintessential dark academia novel that never loses its grip.” — Sam, Co-Founder"
  },
  {
    id: "gentleman-in-moscow",
    title: "A Gentleman in Moscow",
    author: "Amor Towles",
    genre: "Historical Fiction",
    price: 27.00,
    format: "Hardcover",
    pages: 480,
    publisher: "Viking / Penguin",
    year: "2016",
    isbn: "978-0-670-02619-7",
    coverImage: "images/covers/gentleman-in-moscow.jpg",
    synopsis: "In 1922, Count Alexander Rostov is deemed an unrepentant aristocrat by a Bolshevik tribunal and sentenced to spend the remainder of his life inside the Hotel Metropol. Over the decades, he witnesses Russian history unfold from behind the hotel's revolving doors.",
    quote: "“Utterly charming, witty, and heartwarming. Pure literary comfort food.” — Eleanor, Non-Fiction Desk"
  },
  {
    id: "crawdads",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    genre: "Literary Fiction",
    price: 22.00,
    format: "Paperback",
    pages: 384,
    publisher: "G.P. Putnam’s Sons",
    year: "2018",
    isbn: "978-0-7352-1129-2",
    coverImage: "images/covers/crawdads.jpg",
    synopsis: "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called wild child who lived alone in the marsh.",
    quote: "“A lush ode to the natural world intertwined with a poignant coming-of-age mystery.” — Margaret, Co-Founder"
  }
];

// Book of the month
const EXTRA = [
  {
    id: "midnight-library",
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Speculative Fiction",
    price: 26.00,
    format: "Hardcover",
    pages: 304,
    publisher: "Viking / Penguin",
    year: "2020",
    isbn: "978-0-525-55947-4",
    coverImage: "images/covers/midnight-library.jpg",
    synopsis: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices.",
    quote: "“A poignant novel about possibilities, regret, and the choices that make a life worth living.” — Nadia, Front Desk"
  }
];

const CATALOG = Object.fromEntries([...BOOKS, ...EXTRA].map(b => [b.id, b]));

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const money = n => `$${n.toFixed(2)}`;

function coverHTML(b) {
  return `
    <div class="cover" aria-hidden="true">
      <img src="${b.coverImage}" alt="${b.title}" loading="lazy">
    </div>`;
}

/* ---------- Book Grid + Filter ---------- */
function renderGrid() {
  $("#bookGrid").innerHTML = BOOKS.map(b => `
    <li class="book" data-genre="${b.genre}" data-id="${b.id}">
      ${coverHTML(b)}
      <div class="book__body">
        <h3 class="book__title">${b.title}</h3>
        <p class="book__author">${b.author}</p>
        <div class="book__row">
          <span class="book__price">${money(b.price)}</span>
          <button class="book__add" data-add="${b.id}" aria-label="Add ${b.title} to bag">Add to bag</button>
        </div>
      </div>
    </li>`).join("");
}

function initFilters() {
  $$(".filter").forEach(btn => btn.addEventListener("click", () => {
    $$(".filter").forEach(b => { b.classList.remove("is-active"); b.setAttribute("aria-selected", "false"); });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    const f = btn.dataset.filter;
    $$(".book").forEach(card => card.classList.toggle("is-hidden", f !== "all" && card.dataset.genre !== f));
  }));
}

/* ---------- Book Details Modal ---------- */
const bookModal = $("#bookModal");
const bookModalScrim = $("#bookModalScrim");
const bookModalClose = $("#bookModalClose");
const bookModalContent = $("#bookModalContent");

function openBookDetail(id) {
  const b = CATALOG[id];
  if (!b) return;

  bookModalContent.innerHTML = `
    <div class="book-modal__visual">
      <div class="cover cover--lg">
        <img src="${b.coverImage}" alt="${b.title}">
      </div>
    </div>
    <div class="book-modal__body">
      <p class="book-modal__kicker">${b.genre} · Staff Recommendation</p>
      <h2 class="book-modal__title">${b.title}</h2>
      <p class="book-modal__author">by ${b.author}</p>
      <p class="book-modal__price">${money(b.price)} <span>${b.format}</span></p>
      
      <p class="book-modal__synopsis">${b.synopsis}</p>
      
      <div class="book-modal__actions">
        <button class="btn" data-add="${b.id}">Add to bag</button>
        <span class="book-modal__stock">In stock · Ready for pickup today</span>
      </div>

      <blockquote class="staff-quote">
        <p>${b.quote}</p>
      </blockquote>

      <details class="details" open>
        <summary>Book Details</summary>
        <dl class="details__list">
          <div><dt>Pages</dt><dd>${b.pages}</dd></div>
          <div><dt>Publisher</dt><dd>${b.publisher}</dd></div>
          <div><dt>Published</dt><dd>${b.year}</dd></div>
          <div><dt>ISBN</dt><dd>${b.isbn}</dd></div>
        </dl>
      </details>
      <details class="details">
        <summary>Pickup & Shipping</summary>
        <p>Order before 4pm for same-day complimentary pickup at our Linden Street shop. Standard countrywide shipping takes 2–4 days and is free on orders over $40.</p>
      </details>
    </div>
  `;

  bookModalScrim.hidden = false;
  bookModal.showModal?.();
  requestAnimationFrame(() => {
    bookModalScrim.classList.add("is-open");
    bookModal.classList.add("is-open");
  });
  document.body.style.overflow = "hidden";
  history.replaceState(null, "", `#book/${b.id}`);
}

function closeBookDetail() {
  bookModalScrim.classList.remove("is-open");
  bookModal.classList.remove("is-open");
  document.body.style.overflow = "";
  setTimeout(() => {
    bookModalScrim.hidden = true;
    bookModal.close?.();
  }, 260);
  if (location.hash.startsWith("#book/")) {
    history.replaceState(null, "", location.pathname);
  }
}

bookModalClose?.addEventListener("click", closeBookDetail);
bookModalScrim?.addEventListener("click", closeBookDetail);

/* ---------- Bag (Persisted in localStorage) ---------- */
const STORE_KEY = "floret-bag";
let bag = load();

function load() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { return {}; }
}
function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(bag)); } catch { /* private mode */ }
}

function addToBag(id) {
  bag[id] = (bag[id] || 0) + 1;
  save(); renderBag();
  const count = $("#bagCount");
  count.classList.remove("is-bump"); void count.offsetWidth; count.classList.add("is-bump");
  toast(`Added “${CATALOG[id].title}” to your bag`);
}

function setQty(id, qty) {
  if (qty <= 0) delete bag[id]; else bag[id] = qty;
  save(); renderBag();
}

function renderBag() {
  const ids = Object.keys(bag).filter(id => CATALOG[id]);
  const totalItems = ids.reduce((n, id) => n + bag[id], 0);
  const subtotal = ids.reduce((s, id) => s + bag[id] * CATALOG[id].price, 0);

  $("#bagCount").textContent = totalItems;
  $("#bagSubtotal").textContent = money(subtotal);
  $("#bagEmpty").hidden = ids.length > 0;
  $("#checkoutBtn").disabled = ids.length === 0;
  $("#checkoutBtn").style.opacity = ids.length ? "" : ".4";

  $("#bagItems").innerHTML = ids.map(id => {
    const b = CATALOG[id];
    return `
      <li class="bag-item">
        <div class="cover" style="width: 54px; height: 80px;">
          <img src="${b.coverImage}" alt="${b.title}">
        </div>
        <div>
          <p class="bag-item__title">${b.title}</p>
          <p class="bag-item__author">${b.author}</p>
          <div class="qty" role="group" aria-label="Quantity">
            <button data-qty="${id}" data-step="-1" aria-label="Decrease quantity">−</button>
            <span>${bag[id]}</span>
            <button data-qty="${id}" data-step="1" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <div class="bag-item__side">
          <span class="bag-item__price">${money(b.price * bag[id])}</span>
          <button class="bag-item__remove" data-remove="${id}">Remove</button>
        </div>
      </li>`;
  }).join("");
}

/* ---------- Bag Drawer Open / Close ---------- */
const drawer = $("#bag");
const scrim = $("#scrim");
let lastFocus = null;

function openBag() {
  lastFocus = document.activeElement;
  scrim.hidden = false;
  requestAnimationFrame(() => { scrim.classList.add("is-open"); drawer.classList.add("is-open"); });
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setTimeout(() => $("#bagClose").focus(), 50);
}

function closeBag() {
  scrim.classList.remove("is-open");
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  setTimeout(() => { scrim.hidden = true; }, 260);
  lastFocus?.focus();
}

/* ---------- Toast Alerts ---------- */
let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("is-show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("is-show"), 2400);
}

/* ---------- Scroll-linked Nav Highlighting ---------- */
function initScrollSpy() {
  const links = $$(".nav__link");
  const byId = Object.fromEntries(links.map(a => [a.getAttribute("href").slice(1), a]));
  const sections = Object.keys(byId).map(id => document.getElementById(id)).filter(Boolean);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a => a.classList.remove("is-active"));
      byId[entry.target.id]?.classList.add("is-active");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(s => observer.observe(s));
}

/* ---------- Mobile Menu ---------- */
function initMenu() {
  const toggle = $("#menuToggle");
  const nav = $("#primaryNav");
  const setOpen = open => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  $$(".nav__link").forEach(a => a.addEventListener("click", () => setOpen(false)));
}

/* ---------- Newsletter ---------- */
function initLetter() {
  $("#letterForm").addEventListener("submit", e => {
    e.preventDefault();
    const input = $("#email");
    const note = $("#letterNote");
    if (!input.validity.valid || !input.value.trim()) {
      note.textContent = "Please enter a valid email address.";
      input.focus();
      return;
    }
    note.textContent = "Thank you. Your first letter arrives at the start of next month.";
    input.value = "";
  });
}

/* ---------- Global Click Handling ---------- */
document.addEventListener("click", e => {
  // Add to Bag
  const add = e.target.closest("[data-add]");
  if (add) {
    e.stopPropagation();
    addToBag(add.dataset.add);
    const original = add.textContent;
    add.textContent = "Added";
    add.classList.add("is-done");
    setTimeout(() => { add.textContent = original; add.classList.remove("is-done"); }, 1600);
    return;
  }

  // Open Book Detail when book card is clicked
  const bookCard = e.target.closest(".book");
  if (bookCard && !e.target.closest(".book__add")) {
    openBookDetail(bookCard.dataset.id);
    return;
  }

  // Open Book Detail when hero book or book-of-the-month is clicked
  const heroBook = e.target.closest("[data-book]");
  if (heroBook) {
    openBookDetail(heroBook.dataset.book);
    return;
  }

  // Bag Quantities
  const q = e.target.closest("[data-qty]");
  if (q) { setQty(q.dataset.qty, (bag[q.dataset.qty] || 0) + Number(q.dataset.step)); return; }

  // Bag Remove
  const rm = e.target.closest("[data-remove]");
  if (rm) { setQty(rm.dataset.remove, 0); return; }

  // Events RSVP
  const rsvp = e.target.closest("[data-rsvp]");
  if (rsvp) {
    const reserved = rsvp.classList.toggle("is-done");
    rsvp.textContent = reserved ? "Seat reserved" : "Reserve a seat";
    if (reserved) toast("Seat reserved. We’ll email you a reminder.");
  }
});

$("#bagOpen").addEventListener("click", openBag);
$("#bagClose").addEventListener("click", closeBag);
scrim.addEventListener("click", closeBag);

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (bookModal.classList.contains("is-open")) closeBookDetail();
    if (drawer.classList.contains("is-open")) closeBag();
  }
});

$("#checkoutBtn").addEventListener("click", () => {
  const ids = Object.keys(bag).filter(id => CATALOG[id] && bag[id] > 0);
  if (ids.length === 0) {
    toast("Your bag is empty! Choose a book first.");
    return;
  }
  window.location.href = "checkout.html";
});

// Deep link hash support (#book/id)
function checkInitialHash() {
  if (location.hash.startsWith("#book/")) {
    const bookId = location.hash.replace("#book/", "");
    if (CATALOG[bookId]) {
      setTimeout(() => openBookDetail(bookId), 150);
    }
  }
}

/* ---------- Boot ---------- */
renderGrid();
initFilters();
renderBag();
initScrollSpy();
initMenu();
initLetter();
checkInitialHash();
