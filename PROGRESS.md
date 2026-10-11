# Book Shop Project - Progress Tracker

- **Project:** The Floret Bookshop (Vanilla HTML5, CSS3, JavaScript)
- **Mode:** Build mode (AI builds, user reviews)
- **Current Phase:** Home page built (single long-scroll page)
- **Next Step:** User review of `index.html`, then Checkout / Book Detail pages

> The earlier dark-blue direction (#06141B palette, icon rail, Mentor Mode) was **replaced** on 2026-10-06 by the Warm Editorial direction below.

## Design Decisions (APPROVED)

### Direction: Warm Editorial, "refined classic"
- Clean, normal split hero first (headline + short text + CTA, book visual on the right)
- Restrained type. ONE ink colour; hierarchy comes from **opacity**, not extra colours
- Vertical, long-scrolling site with a **fixed left sidebar** (no horizontal top nav on desktop)

### Palette
| Token | Value | Role |
|---|---|---|
| `--bg` | `#EFE5D5` | Warm golden linen background |
| `--paper` | `#E6D8C3` | Honeyed antique parchment band |
| `--ink` | `rgb(36,28,22)` | Deep espresso ink (headings, buttons) |
| `--ink-2` | ink @ 84% | Body text |
| `--ink-3` | ink @ 68% | Meta, captions |
| `--line` | ink @ 14% | Hairline dividers |

Muted cover colours (sage, slate blue, plum, ochre, navy) appear ONLY on book covers, never in UI.

### Type
- Display: **Newsreader** (400, italic for author names)
- Body/UI: **Instrument Sans** (400/500/600)

### Page structure (`index.html`, top to bottom)
1. Sidebar: brand, nav (scroll-linked), bag button with count, opening hours
2. Hero + 3 quiet facts
3. New arrivals: genre filters + book grid (CSS-built covers)
4. Book of the month: big cover + details accordion + staff quote
5. Journal: feature entry + list
6. Events: date-led list with "Reserve a seat"
7. Our story: drop cap + CSS bookshelf illustration
8. Visit: address, hours, contact
9. Newsletter band (dark ink) + footer
- Bag drawer (slide-in, quantities, localStorage)
- Mobile (<960px): sidebar turns into a top bar with a menu button

## Files
- `index.html` — markup
- `styles.css` — design system + layout
- `script.js` — book data, filters, bag, scroll-spy, mobile menu

## Roadmap
- [x] Home / long-scroll page
- [x] Real realistic book covers (stored locally in `images/covers/`)
- [x] Book detail modal/page (per book, synopsis, details, reviews, add-to-bag)
- [x] Dedicated editorial checkout page (`checkout.html`, fulfillment, promo codes, order confirmation)
- [ ] Journal article reader view
