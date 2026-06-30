# Paperboat Gifts & Forever Moments

**Premium photo frames, polaroid prints, wedding albums, miniatures & personalized gifts.**  
Built with Next.js 15 App Router · TypeScript · Material UI · Firebase · Framer Motion

🌐 **Live:** https://frames.paperboatphotography.in  
📸 **Main Studio:** https://paperboatphotography.in

---

## Brand

| Token | Value | Use |
|---|---|---|
| Purple | `#5B2D8E` | Primary CTA, headings, borders |
| Purple Dark | `#3D1D63` | Hover states |
| Gold | `#F5C842` | Accents, stars, labels |
| Ghost | `#F8F6FF` | Page backgrounds |
| Charcoal | `#1E1428` | Body text, dark sections |

Fonts: **Playfair Display** (headings) · **Cormorant Garamond** (italic accents) · **Jost** (body)

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                      # Home
│   ├── about/page.tsx                # About
│   ├── products/
│   │   ├── page.tsx                  # All Products
│   │   ├── frames/page.tsx
│   │   ├── polaroids/page.tsx
│   │   ├── albums/page.tsx
│   │   ├── miniatures/page.tsx
│   │   ├── magnets/page.tsx
│   │   └── [category]/[slug]/page.tsx  # Product Detail
│   ├── testimonials/page.tsx
│   ├── contact/page.tsx
│   ├── order/page.tsx
│   ├── api/
│   │   ├── contact/route.ts          # Nodemailer contact form
│   │   └── order/route.ts            # Nodemailer order + WhatsApp
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/  Navbar · Footer
│   ├── sections/ Hero · WhyChooseUs · CategoryStrip · FeaturedProducts · Process · Testimonials · FAQ · CTA
│   ├── products/ ProductCard
│   └── ui/      FloatingWhatsApp · SectionLabel
└── lib/
    ├── theme.ts        MUI theme + BRAND tokens
    ├── firebase.ts     Firestore + Storage init
    ├── products.ts     All 38 products
    └── testimonials.ts 8 customer stories
```

---

## Quick Start

```bash
# 1. Clone & install
npm install

# 2. Set environment variables
cp .env.local.example .env.local
# Fill in all values (see below)

# 3. Run dev server
npm run dev
```

---

## Environment Variables

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Email (Gmail App Password recommended)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your-app-password

# Business
CONTACT_EMAIL=hello@paperboatphotography.in
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_SITE_URL=https://frames.paperboatphotography.in
```

### Gmail App Password Setup
1. Google Account → Security → 2-Step Verification → App Passwords
2. Select "Mail" → Generate → copy 16-char password → paste as `SMTP_PASS`

---

## Firebase Setup

### Firestore Rules
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /orders/{orderId} {
      allow create: if true;
      allow read, update, delete: if false;
    }
    match /contacts/{id} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

### Storage Rules
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /orders/{orderId}/{allPaths=**} {
      allow write: if request.resource.size < 20 * 1024 * 1024
                   && request.resource.contentType.matches('image/.*');
      allow read: if false;
    }
  }
}
```

---

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Set env vars in Vercel Dashboard:
# Project → Settings → Environment Variables
# Add all vars from .env.local
```

**Vercel Settings:**
- Framework: Next.js
- Root Directory: `./` (or wherever package.json is)
- Node.js Version: 20.x

**Custom Domain:**
- Vercel → Project → Settings → Domains
- Add `frames.paperboatphotography.in`
- Add DNS CNAME: `frames` → `cname.vercel-dns.com`

---

## SEO Checklist

- [x] Dynamic `<title>` and `<description>` per page
- [x] Open Graph tags
- [x] Twitter Card tags  
- [x] `sitemap.xml` auto-generated (`/sitemap`)
- [x] `robots.txt` (`/robots`)
- [x] Semantic HTML structure
- [x] Next.js `<Image>` with `alt` on every image
- [x] Mobile-first responsive design
- [x] Core Web Vitals optimised (lazy load, font preconnect)
- [ ] Submit sitemap to Google Search Console after deploy
- [ ] Add Google Analytics (`gtag`) to layout.tsx
- [ ] Set up Google Business Profile listing

**Target Keywords:**
- photo frames Chennai
- custom photo frames
- wedding frames Chennai
- personalized gifts Chennai
- polaroid prints Chennai
- photo albums Chennai
- couple frames gift
- memory frames India

---

## Mobile Checklist

- [x] Hamburger nav with full-width drawer
- [x] Touch-optimised tap targets (min 44px)
- [x] Horizontal-scroll category strip on mobile
- [x] Responsive grids: 1 col → 2 col → 4 col
- [x] Image `sizes` prop tuned per breakpoint
- [x] Floating WhatsApp hides label text on xs

---

## Adding Products

Edit `src/lib/products.ts` — add a new object to the `products` array:

```ts
{
  id: "f032",
  slug: "my-new-frame",
  category: "frames",        // frames | polaroids | albums | miniatures | magnets
  name: "My New Frame",
  price: 999,
  priceLabel: "₹999",
  description: "...",
  features: ["Feature 1", "Feature 2"],
  sizes: ["5×7", "8×10"],
  materials: ["Teak Wood"],
  image: "https://...",      // primary image URL
  images: ["https://..."],   // gallery images
  badge: "New",              // optional: "Bestseller" | "New" | "Premium" etc
  popular: true,             // shows in featured section
}
```

The product will automatically appear on its category page and get a detail page at `/products/frames/my-new-frame`.

---

## Tech Stack

| Library | Version | Purpose |
|---|---|---|
| Next.js | 15 | App Router, SSR, Image Optimisation |
| TypeScript | 5 | Type safety |
| Material UI | 6 | Component library |
| Framer Motion | 11 | Animations |
| React Hook Form | 7 | Form state |
| Zod | 3 | Schema validation |
| Firebase | 11 | Storage + Firestore |
| Nodemailer | 6 | Transactional email |
| React Hot Toast | 2 | Notifications |
| react-intersection-observer | 9 | Scroll-triggered animations |

---

*Made with love in Chennai 💜 — Paperboat Gifts & Forever Moments*
