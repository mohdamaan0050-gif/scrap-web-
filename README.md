# Apashishta Vyapar Sanstha — corporate website

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion.
Every page is statically prerendered; the only server route is the contact form.

---

## Quick start

```bash
npm install
cp .env.example .env.local     # then fill in the values
npm run dev                    # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

---

## Where to change things

| You want to change… | Edit this |
| --- | --- |
| Any text, service, FAQ, testimonial, rate, stat | `content/site.ts` |
| Phone, email, address, hours, map pin | `content/site.ts` → `company` |
| Colours, type scale, spacing tokens | `tailwind.config.ts` |
| Logo mark | `components/ui/Logo.tsx` |
| Page-level SEO title/description | the `pageMeta({...})` call at the top of each page |
| Structured data (Google rich results) | `lib/jsonld.ts` |

`content/site.ts` is the single source of truth. Nine times out of ten it is the
only file you need to touch.

---

## Before you go live

Search the codebase for `TODO:` — every placeholder is marked. In order of importance:

- **Logo** — drop `logo.svg` into `/public` and swap the inline SVG in `components/ui/Logo.tsx` for a `next/image` tag. The exact replacement line is in the file comment.
- **Gallery photos** — replace the six placeholder SVGs in `/public/gallery` with real JPGs, landscape, around 1600×1200. Update the `src` values in `content/site.ts`.
- **Testimonials** — the four in `content/site.ts` are realistic placeholders with no company names attached. Replace them with real, permission-cleared quotes. Do not publish invented company names.
- **Stats** — the four figures in `stats` are placeholders. Confirm them or remove the section.
- **Rate board** — the hero rates are indicative. Update them, and update `boardUpdated` when you do.
- **Registration numbers** — GSTIN, Udyam and UPPCB values in `certifications`.
- **Map pin** — `company.geo` holds approximate Saharanpur coordinates. Replace with the exact plot lat/lng.
- **Social share image** — `/public/og.svg` works, but LinkedIn and WhatsApp prefer raster. Export a 1200×630 PNG as `/public/og.png` and change the path in `lib/seo.ts`.

---

## Contact form

The form posts to `/api/contact`, which validates the payload, drops honeypot
submissions, then emails the enquiry.

- **No `RESEND_API_KEY` set** — the enquiry is logged to the server console and the form still reports success. Useful in development.
- **With a key** — the enquiry is emailed via Resend to `CONTACT_TO_EMAIL`, with the sender's address set as reply-to.

To use a different provider (SendGrid, Brevo, SMTP), replace the single `fetch`
block in `app/api/contact/route.ts`. Nothing else changes.

---

## Deployment

### Vercel (recommended, zero config)

1. Push this folder to a GitHub repository.
2. Import it at vercel.com/new. The framework is auto-detected.
3. Add environment variables under Settings → Environment Variables:
   `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
4. Add `apshishtvyaparsanstha.in` under Settings → Domains, then point these records at your registrar:
   - `A` record on `@` → `76.76.21.21`
   - `CNAME` on `www` → `cname.vercel-dns.com`
5. Redeploy after adding the domain so canonical URLs pick it up.

### Any Node host (VPS, cPanel Node, Railway, Render)

```bash
npm ci
npm run build
npm start          # serves on PORT, default 3000
```

Put Nginx or Caddy in front for TLS. With PM2:

```bash
pm2 start npm --name apashishta -- start
pm2 save
```

### Static export

Not available as configured, because the contact form needs a server route. For a
fully static site, delete `app/api/contact/`, point the form at a service like
Formspree, and add `output: 'export'` to `next.config.mjs`.

---

## Performance notes

Choices made specifically to hold a Lighthouse score above 95:

- **Self-hosted fonts.** Archivo and Public Sans install from npm (`@fontsource-variable/*`) and are served from your own origin. No Google Fonts request, no layout shift.
- **Server components by default.** Only the navbar, rate board, counter, accordion, testimonial slider, gallery and contact form ship JavaScript.
- **No image CDN dependency.** All imagery is local and served through `next/image` with AVIF and WebP enabled.
- **Lazy map.** The Google Maps iframe uses `loading="lazy"`, so it never touches LCP.
- **No CSS-in-JS runtime, no clsx, no icon font.** Icons are tree-shaken from `lucide-react`.
- **Motion is opt-out aware.** Every animated component checks `prefers-reduced-motion`, and `globals.css` kills transitions globally for those users.

Measured first-load JS: 87 kB shared, 133–143 kB per page.

Run Lighthouse against the production URL, not `npm run dev` — the dev server
includes tooling that depresses the score.

---

## Accessibility

Skip link, visible focus rings on every interactive element, `aria-expanded` on the
menu and accordion, `aria-current` on the active nav item, labelled form fields,
`role="alert"` on form errors, keyboard-dismissible gallery lightbox, and semantic
landmarks throughout.

---

## Project structure

```
app/                 routes, one folder per page
  api/contact/       contact form handler
  layout.tsx         shell, fonts, metadata, Organization schema
  sitemap.ts         auto-generated from the nav config
  robots.ts
components/
  layout/            Navbar, Footer
  sections/          page-level blocks (Hero, RateBoard, ServiceGrid, ...)
  ui/                primitives (Button, Reveal, Accordion, Counter, ...)
content/site.ts      all copy and data
lib/                 SEO helpers, JSON-LD, icon registry
public/              favicon, OG image, gallery placeholders
```
