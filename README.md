# Ceylon 3D — Official Website

Professional 3D printing, scanning, and prototyping services from Makandura, Sri Lanka.

Built with **Next.js 16**, **Tailwind CSS**, and **Directus CMS**.

---

## Requirements

- **Node.js** 18.18 or later
- **npm** 9 or later (or compatible package manager)

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd ceylon3d
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and set your values. See [Environment Variables](#environment-variables) below.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build

```bash
npm run build
npm run start
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Required | Type | Description |
|---|---|---|---|
| `NEXT_PUBLIC_DIRECTUS_URL` | No | Public | Directus CMS base URL for the gallery. Defaults to the production CMS if not set. |
| `NEXT_PUBLIC_SITE_URL` | Production | Public | Canonical website URL (e.g. `https://www.ceylon3d.com`). |

> **Important:** `.env.local` is protected by `.gitignore` and must never be committed.
>
> For Vercel deployment, configure environment variables in:
> **Vercel Dashboard → Project → Settings → Environment Variables**

---

## Project Structure

```
ceylon3d/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── gallery/            # Gallery page
│   ├── privacy-policy/     # Privacy Policy
│   └── terms-and-conditions/
├── components/
│   ├── layout/             # Navbar, Footer, FloatingWhatsApp
│   ├── sections/           # Homepage sections
│   ├── gallery/            # Gallery UI components
│   ├── legal/              # Legal page layout
│   └── ui/                 # Shared UI components
├── features/
│   ├── services/           # Services feature (animated cards)
│   └── gallery/            # Gallery feature (client-side page)
├── lib/
│   ├── directus.ts         # Directus API client
│   └── gallery-api.ts      # Gallery data fetching
├── content/                # Static site content (text, data)
├── config/                 # Site-wide configuration constants
├── types/                  # TypeScript type definitions
├── public/                 # Static assets served publicly
│   ├── images/             # Brand, service, and project images
│   └── videos/             # Hero video
├── .env.example            # Environment variable template
└── docs/                   # Project documentation
```

---

## Key Technologies

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | Framework, SSG, ISR |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Directus CMS | Gallery content management |
| Lucide React | Icons |
| TypeScript | Type safety |

---

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Gallery CMS

The gallery is powered by **Directus** at `cms.print3d.hitinnovations.lk`.

Gallery content is fetched at request time with **60-second ISR revalidation**.

The CMS is accessed **without authentication** — only published content is returned.

---

## Deployment

The project is optimised for deployment on **Vercel**.

1. Connect the repository to Vercel
2. Set environment variables in Vercel project settings
3. Deploy — Vercel handles build and CDN automatically

---

## Legal Pages

- [Privacy Policy](/privacy-policy) — reflects actual site data practices
- [Terms & Conditions](/terms-and-conditions) — ⚠️ sections on payment, returns, and cancellations require review by the business owner before publishing

---

Developed by [HIT Innovations](https://www.hitinnovations.lk/)
