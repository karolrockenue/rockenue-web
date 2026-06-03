# Mockups & marketing assets

Standalone HTML design mockups and brand/marketing asset generators. Each file is
self-contained — **open it directly in a browser**, no build step required.

## Brand asset generators (canvas + download)

These render brand assets to `<canvas>` at exact platform pixel sizes. Each card
has a **Download** button (or right-click → "Save image as…") that exports a PNG.

- **`linkedin-assets.html`** — LinkedIn & marketing brand-asset generator.
  Company logo (300 × 300), company banner (1128 × 191), personal profile
  banner (1584 × 396), plus a range of logo variations (colour-flipped, bright,
  large `(R)` monogram) across solid / gradient / split / radial backgrounds.
- **`facebook-assets.html`** — Combined Facebook brand-asset generator.
  - **Profile picture** (360 × 360) — six brand-only variants.
  - **Page cover** (1640 × 924) — four brand-only (solid / gradient / split /
    editorial) plus four photo-led (Dubai · London · hotel lobby · resort)
    with Unsplash photography under the brand chrome.
  - **Square posts** (1080 × 1080) — four brand-only (brand / stat / quote /
    announcement) plus four photo-led (city announcement · hotel quote ·
    milestone · skyline). Photo URLs live at the top of the script — swap to
    retheme any variant.
- **`tech-logos.html`** — Ten logo concepts for **Rockenue Tech sp. z o.o.**
  (the Polish entity behind `tech.rockenue.com`). Families range from
  "stays close to parent brand" (parens / suffix variations) through
  "tech-coded" (square brackets, JSX, path style) to standalone marks
  (monogram, stacked lockup, gradient-dot prefix).
- **`og-image.html`** — Open Graph / social share-card generator (1200 × 630).
  Four concepts: editorial headline-led, centred wordmark + tagline, credibility
  (stat row), and gradient side panel. The chosen concept (01, editorial) is
  exported to `public/og-image.png` and wired into every page's `og:image` /
  `twitter:image` meta tags by the SEO build.

## Letterheads & business documents

- **`letterhead.html`** — Four letterhead concepts for comparison: minimal
  editorial · bold top band · centered logo · side rail accent. All A4
  portrait, all use the brand palette and Inter.

### ⚠ Sensitive — gitignored, do not commit

The two files below are one-off business correspondence that contain **real
bank account details**. They are excluded via `.gitignore`. Keep local-only,
export to PDF, send, and delete.

- **`letter-bank-details.html`** — Light-themed bank-details letter (Concept 01
  letterhead chrome) for a payment request from Mason & Fifth.
- **`letter-bank-details-dark.html`** — Same letter with dark header/footer
  bands (site-matching).

## Page design mockups (one-off design explorations)

- **`homepage.html`** — Full homepage design mockup.
- **`first-fold.html`** — Homepage hero "first fold" concept explorations (the
  country-presence list / "spinner" variations that fed the live homepage hero).
- **`about-us.html`** — About page design mockup (story timeline + leadership grid).
- **`about-leadership-concepts.html`** — Leadership section concept explorations.
- **`contact-concepts.html`** — Four contact-page layout concepts (split form,
  centered minimal, inquiry router, form-forward) for comparison.
- **`contact.html`** — Standalone full-screen mockup of the "Let's talk."
  centered contact page (was briefly promoted to live before the Apply→Contact
  merge).
- **`tech.html`** — Technology page mockup. Split layout: Market Pulse on the
  left (teal) and Direct Booking Platform on the right (gold); each panel
  links to its app. Basis of the live `/technology` route.
- **`faq.html`** — FAQ page content mockup. 45 Q&As across 7 categories with a
  sticky category nav; the approved content was ported to the live `/faq` route
  (`src/content.ts` → `FAQ`, rendered by `src/pages/FaqPage.tsx`).

## Notes

- Assets use the brand palette from `src/theme.ts` (teal `#38C6BA`, gold `#C8A66E`,
  background `#14181D`) and the Inter typeface.
- These are reference/working files, kept in the repo in case the assets are
  needed again — they are not part of the built site (`src/`). Some predate or
  have been superseded by their live counterparts; the live React pages in
  `src/pages/` are the source of truth.
- The static mockups are served by the local Python HTTP server at
  `http://localhost:8080/mockups/<file>.html`.
