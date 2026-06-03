import { MARKETS, SERVICES, OFFICES } from "./content";

export const SITE_URL = "https://rockenue.com";
export const SITE_NAME = "Rockenue";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export interface PageSeo {
  title: string;
  description: string;
}

// Per-route <title> + meta description. Titles ~50-60 chars, descriptions
// ~150-160 chars. Kept here as the single source of truth; injected into each
// prerendered page's <head> by scripts/prerender.mjs.
export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    title: "Rockenue — Hotel Management for Independent Hotels",
    description:
      "Rockenue is the hotel management company for independent hotels — chain-level systems, distribution, and revenue intelligence, while you keep your brand. Operating across 7 countries.",
  },
  "/services": {
    title: "Services — Hotel Management, Leasing, Sales & Intelligence",
    description:
      "Four ways Rockenue works with hotels: full-service management, leasing & management, hotel sales & acquisitions, and bespoke market research & intelligence.",
  },
  "/approach": {
    title: "Partnership & Onboarding — Rockenue",
    description:
      "How Rockenue partners with independent hotels: NDA and data access, business study, alignment, agreement, tech implementation, and go-live in 30 days.",
  },
  "/about": {
    title: "About Rockenue — Independent Hotel Operator",
    description:
      "Rockenue is an independent hotel operator running chain-level commercial infrastructure for independent hotels across the UK, UAE, US, the Nordics, and Europe.",
  },
  "/technology": {
    title: "Technology & Market Pulse — Rockenue",
    description:
      "Rockenue's proprietary intelligence layer — Market Pulse and a direct booking platform — running on dedicated AI hardware processing millions of demand signals daily.",
  },
  "/contact": {
    title: "Contact Rockenue — Apply for Hotel Management",
    description:
      "Talk to Rockenue about managing your hotel, or apply for management. Submission to live operation in 30 days for properties that qualify. London & Dubai.",
  },
  "/privacy": {
    title: "Privacy Policy — Rockenue",
    description: "How Rockenue International Group collects, uses, and protects your data.",
  },
  "/terms": {
    title: "Terms of Service — Rockenue",
    description: "The terms governing use of the Rockenue website and services.",
  },
  "/cookies": {
    title: "Cookie Policy — Rockenue",
    description: "How Rockenue uses cookies and similar technologies on this website.",
  },
  "/support/booking-engine": {
    title: "Booking Engine Support — Rockenue",
    description:
      "Support and documentation for hotels using the Rockenue direct booking engine.",
  },
};

// Organization / ProfessionalService JSON-LD. This is the machine-readable
// description an AI agent uses to answer e.g. "revenue management consultancy
// in the UK". Derived from content.ts so it stays in sync with the site.
export function structuredData(): string {
  const office = OFFICES[0];
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "Rockenue International Group",
    url: SITE_URL,
    logo: OG_IMAGE,
    image: OG_IMAGE,
    description:
      "Hotel management company for independent hotels. Rockenue provides revenue management, distribution, OTA and channel management, and proprietary market intelligence — chain-level commercial infrastructure while hotels keep their own brand.",
    knowsAbout: [
      "Hotel revenue management",
      "Hotel distribution",
      "OTA and channel management",
      "Hotel sales and acquisitions",
      "Hospitality market intelligence",
      "Direct booking technology",
    ],
    areaServed: MARKETS.map((name) => ({ "@type": "Country", name })),
    address: {
      "@type": "PostalAddress",
      streetAddress: "5842+632 Grand Stand, Nad Al Sheba 1",
      addressLocality: office.label,
      addressCountry: "AE",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hotel management services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.summary,
        },
      })),
    },
  };
  return JSON.stringify(data);
}
