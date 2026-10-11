# 📚 The Floret Bookshop — Mentor-Led Build Handover Guide

> **Purpose:** এই ডকুমেন্টটিতে আমাদের সব নেওয়া সিদ্ধান্ত, লার্নিং রুলস, প্রজেক্ট গোলস এবং পরবর্তী চ্যাটে পেস্ট করার মতো একটি রেডিমেড মাস্টার প্রম্পট সাজানো আছে।

---

## 1. Project Overview & Design Decisions

- **Project Name:** The Floret Bookshop (Independent Online Bookstore).
- **Aesthetic Direction:** **Warm Editorial / Refined Classic**
  - কোনো কড়া সাদা বা নিওন ব্যাকগ্রাউন্ড থাকবে না।
  - বইয়ের দোকানে যেমন আরামদায়ক উষ্ণ আমেজ থাকে, ঠিক তেমনি লিনেন এবং পার্চমেন্ট টেক্সচারের কালার প্যালেট।
- **Palette Tokens:**
  - `--bg`: `#EFE5D5` (Warm golden linen)
  - `--paper`: `#E6D8C3` (Honeyed antique parchment)
  - `--ink`: `rgb(36, 28, 22)` (Deep espresso dark ink)
  - `--ink-2`: `rgba(36, 28, 22, 0.84)` (Body text)
  - `--ink-3`: `rgba(36, 28, 22, 0.68)` (Muted meta, captions)
  - `--line`: `rgba(36, 28, 22, 0.14)` (Subtle hairline dividers)
- **Typography:**
  - Headings / Editorial display: **Newsreader** (Google Serif Font)
  - UI / Body / Controls: **Instrument Sans** (Google Sans-Serif Font)
- **Real Book Data:**
  - বাস্তব বইয়ের কভার আর্ট (`images/covers/`) এবং অথেন্টিক মেটাডাটা (*The Midnight Library*, *Piranesi*, *Hamnet*, *Circe*, *Klara and the Sun* ইত্যাদি)।

---

## 2. Learning Principles & Rules of Engagement

1. **Role:** Senior Frontend Developer & Patient Mentor.
2. **Chunk Size:** কোডের প্রতিটি অংশ **সর্বোচ্চ একটি ফাংশন সাইজ বা তার চেয়ে ছোট (bite-sized)** হবে। কখনোই একসাথে বড় কোড ডাম্প করা যাবে না।
3. **Developer Thought Process & Logical Order:**
   - কোড দেওয়ার আগে বোঝাতে হবে: **কেন এই অর্ডারে শুরু করা হচ্ছে?**
   - ডিজাইনের ভিজ্যুয়াল দেখে একজন ডেভেলপার কীভাবে এইচটিএমএল আর্কিটেকচার চিন্তা করে।
   - **Flexbox বনাম Grid:** কোন এলিমেন্টে কেন ফ্লেক্সবক্স আর কোথায় কেন গ্রিড বেছে নেওয়া হলো।
   - **JavaScript Data Structure:** কেন ডেটা হার্ডকোড না করে `Array of Objects` এ সাজানো হলো এবং কীভাবে স্টেট ম্যানেজ করা হচ্ছে।
4. **Hands-on Typing:** ইউজার নিজে কোড লিখবে/বসাবে এবং ফলাফল যাচাই করবে।
5. **Language:** ন্যাচারাল Banglish (Bangla + English mix), টেকনিক্যাল টার্মস ইংলিশে।

---

## 3. Workspace Setup (Already Prepared)

- **Dedicated Practice Directory:** 
  `d:\Antigravity Projects\(ME)AI assisted\Book Shop\learn-from-scratch\`
- **Asset Availability:** 
  `learn-from-scratch\images\` ফোল্ডারে সমস্ত ব্যাকগ্রাউন্ড টেক্সচার (`bg-pattern.jpg`) এবং আসল বইয়ের কভার (`covers/`) কপি করে রাখা হয়েছে।
- **Files to build together:**
  1. `index.html` (Semantic Layout)
  2. `styles.css` (Design tokens, Layouts, Micro-interactions)
  3. `script.js` (Catalog data, Filter, Modal, Cart & LocalStorage)

---

## 4. The 6-Phase Curriculum / Roadmap

- **Phase 1: Architecture & Foundations**
  - File structure, modern HTML5 skeleton, meta configuration.
  - CSS Custom Properties (Design Tokens), Box Model & Modern CSS Reset.
- **Phase 2: Layout Architecture & Navigation (Sidebar)**
  - Semantic `<aside>`, `<nav>`, `<ul>`.
  - Fixed desktop sidebar (Flexbox/Sticky) বনাম Mobile drawer transition.
- **Phase 3: Editorial Hero Section**
  - Visual hierarchy: Headings, subheadings, call-to-actions.
  - 3D book depth and realistic drop-shadows with CSS.
- **Phase 4: Dynamic Catalog & JavaScript Data Structures**
  - JavaScript Object Modeling: বইয়ের ডেটা স্ট্রাকচার ডিজাইন।
  - DOM Manipulation: Template literals দিয়ে ডায়নামিক কার্ড জেনারেশন।
  - CSS Grid: Responsive card grid (`repeat(auto-fill, minmax(...))`).
- **Phase 5: Interactive Features (Filter & Modal)**
  - Category / Genre filtering logic (Array methods: `.filter()`).
  - Book Detail Modal: Event delegation, accessibility, dynamic content injection.
- **Phase 6: State Management & Persistence (Cart Drawer)**
  - Bag state management (Add, update quantity, remove).
  - Syncing with `localStorage` (ব্রাউজার রিফ্রেশেও কার্ট ডেটা ধরে রাখা)।

---

## 5. Master Prompt to Copy-Paste in the New Chat

```markdown
Hello! I want you to act as my personal Senior Frontend Mentor. We are going to build an editorial bookstore website called "The Floret Bookshop" from scratch together.

### My Working Directory:
`d:\Antigravity Projects\(ME)AI assisted\Book Shop\learn-from-scratch\`
(All necessary images are already copied into `learn-from-scratch\images\`)

### Core Rules of Our Mentorship:
1. Hands-on Learning: I will be typing/pasting code myself. Do NOT write full files at once.
2. Bite-sized Chunks: Give code in portions no larger than a single function size (or smaller).
3. Professional Order & Architecture: Follow a senior developer's authentic construction order. Teach me the architectural thought process behind every decision (e.g. why this HTML tag, why Flexbox vs CSS Grid, why this JS data structure).
4. Explanations: Explain each piece in clear, friendly Banglish (natural mix of Bangla and English, technical terms in English).
5. Design System:
   - Palette: Warm linen (#EFE5D5), parchment (#E6D8C3), deep espresso ink (rgb(36,28,22)).
   - Fonts: Newsreader (Serif) for headings, Instrument Sans for UI.
6. Roadmap to follow:
   - Phase 1: Architecture & Foundations (HTML skeleton, CSS reset, Design Tokens)
   - Phase 2: Navigation & Sidebar Layout (Flexbox & Responsive behavior)
   - Phase 3: Editorial Hero & 3D Book Presentation
   - Phase 4: Dynamic Catalog & Data Structures (JS Objects & CSS Grid)
   - Phase 5: Filter & Book Details Modal
   - Phase 6: Shopping Bag Drawer & LocalStorage

Please acknowledge this plan and start with Phase 1, Step 1.1 when you are ready!
```
