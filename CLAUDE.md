# Rockenue — Website

Marketing site for Rockenue (hotel management company), built with React + TypeScript + Vite.

## Mockups & marketing assets

Standalone design mockups and brand/marketing assets live in [`mockups/`](./mockups) — see
[`mockups/README.md`](./mockups/README.md) for the full index. Open any file directly in a
browser (no build step needed). Most relevant:

- **`mockups/linkedin-assets.html`** — LinkedIn & marketing brand-asset generator: company
  logo (300 × 300), page banner (1128 × 191), personal profile banner (1584 × 396), and a
  range of downloadable logo variations. Right-click → "Save image as…" or use the Download
  buttons to export spec-sized PNGs.

---

## Stack

React 19 + TypeScript + Vite 8, react-router 7 (library mode), `lucide-react` for icons.
Inline styles throughout (no CSS framework); the brand palette and shared `heading()` helper
live in `src/theme.ts`. All page copy is centralised in `src/content.ts`.

## Static prerendering (the important part)

The site is a client-side SPA, but it is **prerendered to static HTML per route at build time**
so AI crawlers and search engines get full content without running JavaScript. This was built
custom (not a framework / not `vite-react-ssg`, which is incompatible with react-router 7).

Build pipeline (`npm run build`):
1. `tsc -b` — typecheck.
2. `vite build` — client bundle + `dist/index.html` template.
3. `vite build --ssr src/entry-server.tsx --outDir .ssr-dist` — server bundle.
4. `node scripts/prerender.mjs` — renders each route to `dist/<route>/index.html`, injects
   per-page `<head>` (title/description/canonical/OG/Twitter) + JSON-LD, and generates `sitemap.xml`.

Key files:
- `src/AppRoutes.tsx` — router-agnostic `<Routes>` (used by both entries) + `PRERENDER_PATHS`.
- `src/main.tsx` — client entry (`hydrateRoot` + `BrowserRouter`).
- `src/entry-server.tsx` — server entry (`renderToString` + `StaticRouter`); re-exports SEO data.
- `src/seo.ts` — per-route titles/descriptions (`PAGE_SEO`) + `pageStructuredData(path)` (JSON-LD).
- `scripts/prerender.mjs` — the prerender + sitemap generator.

`useIsMobile` initialises to `false` (the SSR/desktop default) to avoid hydration mismatches.

## Adding a new page — checklist

A new route must be registered in **five** places or it will break:
1. `src/AppRoutes.tsx` — add the `<Route>` **and** add the path to `PRERENDER_PATHS`.
2. `src/seo.ts` — add a `PAGE_SEO` entry (title + description); optionally a `BREADCRUMB_LABELS` entry.
3. `public/serve.json` — add the path to the `cleanUrls` array (**or it 404s in production**).
4. `src/components/Layout.tsx` — add to `NAV_ITEMS` and/or the footer route maps if it should be linked.
5. `src/content.ts` — add it to `FOOTER.columns` if it belongs in the footer.

## SEO & structured data

- Per-page meta + canonical + Open Graph / Twitter tags injected by the prerender.
- JSON-LD via `pageStructuredData(path)`: `ProfessionalService` (Organization) on every page,
  plus `FAQPage` on `/faq`, `Person` nodes (leadership) on `/about`, and `BreadcrumbList` on inner pages.
- `public/robots.txt` explicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.).
- `public/llms.txt` — curated brief for LLM crawlers.
- OG image: `public/og-image.png` (1200×630), generated from `mockups/og-image.html`.

## Analytics & cookie consent

- GA4 (`G-8Y83WKCDQ9`) in `index.html` with **Consent Mode v2**: `analytics_storage` defaults to
  `denied`; granted only after the user accepts via the consent banner (`src/components/CookieConsent.tsx`).
- Consent choice stored in a `cookie_consent` cookie; "Cookie Settings" footer link reopens the banner.
- **Self-exclusion:** visiting `?notrack` sets a `rockenue_notrack` cookie and Google's
  `ga-disable-G-8Y83WKCDQ9` flag (zero hits sent on that browser); `?track` re-enables. See `index.html`.

## Contact form

`src/pages/ContactPage.tsx` posts to **Web3Forms** (`WEB3FORMS_ACCESS_KEY`), which emails
submissions to karol@rockenue.com. Two tabs (enquiry / apply), validation, loading/success/error
states, spam honeypot. Note: Web3Forms blocks datacenter IPs, so submissions can only be tested
from a real browser/connection, not from CI or a cloud host.

## Deployment (Railway)

- Hosted on Railway; auto-deploys on push to `main`. Domain: `rockenue.com` (canonical) + `www`.
- Build: `npm run build`. Start: `npm start` → `serve dist -p ${PORT}`.
- **Two serving gotchas (do not regress):**
  1. `serve.json` must live in `public/` so the build copies it into `dist/` — `serve` reads it
     from the served directory, not the repo root.
  2. Do **not** use `serve -s` (the `--single` flag rewrites every route to `index.html` and
     destroys per-route prerendering). `/apply` → `/contact` is a 301 in `serve.json`.

## Commands

- `npm run dev` — Vite dev server (SPA only, no prerender).
- `npm run build` — full typecheck + client + SSR + prerender into `dist/`.
- `npm start` — serve the built `dist/` (production command).
- `npm run lint` — ESLint.
