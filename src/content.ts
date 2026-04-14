export const HERO = {
  eyebrow: "Independent hotel operator — London & Dubai",
  headline: "The hotel management company for independent hotels.",
  subheadline:
    "Built as an alternative to global chains, we give independent hotels the systems, expertise, and scale they need — while preserving their identity.",
  primaryCta: "Apply for management",
  secondaryCta: "See our approach",
};

export const NAV_LINKS = ["Services", "Portfolio", "Markets", "Market Pulse", "About"];

export const STATS = [
  { value: "45", label: "Properties under management" },
  { value: "1,866", label: "Rooms across the portfolio" },
  { value: "#1", label: "Independent operator on Booking.com London" },
  { value: "£50M+", label: "Revenue under management" },
];

export const SERVICES = [
  {
    num: "01",
    title: "Full Service Management",
    summary: "The core of what we do. This is what happens when a hotel joins the network.",
    body: "Pricing, distribution, OTA management, channel strategy, reporting, and day-to-day commercial operations — all handled centrally by a dedicated team. Your hotel operates within the Rockenue network, with access to chain-level infrastructure, established distribution relationships, and proprietary technology from day one. You keep your brand and identity. We provide everything behind it — the systems, the team, the intelligence layer, and the commercial rigour that independent hotels typically can't access alone.",
    includes: ["Autonomous AI pricing", "OTA & channel management", "Revenue & owner reporting", "Commercial strategy", "Front desk & ops support", "Live owner dashboards"],
  },
  {
    num: "02",
    title: "Leasing & Management",
    summary: "For asset owners looking for hands-off, professionally managed returns.",
    body: "We lease or manage properties on behalf of owners who want consistent, professional performance without being involved in operations. Rockenue takes on full commercial and operational responsibility. We maintain a wide and active network of interested leaseholders and are always open to new opportunities — whether that's a single property or a portfolio. The owner receives transparent, investor-grade reporting and the same infrastructure that powers every hotel in our network.",
    includes: ["Fixed or revenue-share structures", "Full operational accountability", "Investor-grade reporting", "Network-level pricing & distribution", "Active leaseholder network", "Guest experience management"],
  },
  {
    num: "03",
    title: "Hotel Sales & Acquisitions",
    summary: "A deep network of buyers, sellers, and off-market opportunities.",
    body: "We operate at the centre of a large network of hotel buyers, sellers, investors, and operators. Many of the properties we know about are not publicly listed — they come through relationships built over years of operating in these markets. For sellers, we position the asset, prepare the data, and connect with qualified buyers. For buyers, we provide market analysis, operational due diligence, and transition support. Every transaction is informed by our proprietary market intelligence and direct operating experience.",
    includes: ["Off-market deal flow", "Buyer & seller introductions", "Asset positioning & valuation", "Operational due diligence", "Market & competitive analysis", "Transition management"],
  },
  {
    num: "04",
    title: "Research & Intelligence",
    summary: "Bespoke market intelligence that doesn't exist anywhere else.",
    body: "Our proprietary platform monitors and analyses any number of hotels, cities, or markets — on demand. We produce research for investors, developers, lenders, and operators that they cannot buy from any existing provider. Forward demand modelling, competitive pricing analysis, supply mapping, event impact scoring, flight corridor data — all derived from a live intelligence layer processing millions of data points daily. Reports are built to the client's specification, under NDA, and delivered on their timeline.",
    includes: ["Bespoke market reports", "Forward demand modelling", "Competitive pricing analysis", "Supply & accommodation mapping", "Event impact assessment", "Investor-grade data packs"],
  },
];

export const MARKETS = [
  "United Kingdom",
  "United States",
  "United Arab Emirates",
  "Spain",
  "Greece",
  "Turkey",
  "Israel",
  "Poland",
  "Indonesia",
];

export const STEPS = [
  {
    num: "01",
    title: "Submit your property",
    desc: "Tell us about your hotel, location, current performance, and what you want to achieve.",
  },
  {
    num: "02",
    title: "Assessment & audit",
    desc: "We evaluate your property against our portfolio criteria: market position, asset quality, and growth potential.",
  },
  {
    num: "03",
    title: "Onboarding",
    desc: "Accepted properties enter a 30-day integration. We connect systems, set strategy, and go live.",
  },
];

export const QUALIFIERS = [
  "3-star or above, minimum 25 rooms",
  "Priority given to our 9 core markets — open to all locations",
  "Full operational handover, not advisory",
  "Property in operational condition or near completion",
];

export const MARKET_PULSE = {
  eyebrow: "Intelligence",
  title: "Market Pulse",
  description:
    "Our proprietary intelligence platform aggregates demand signals, competitor rates, flight search data, and event calendars into a single operational view. Every pricing and distribution decision is data-driven.",
  bullets: [
    "Real-time comp set monitoring across OTAs",
    "Demand forecasting with event-driven signals",
    "Automated rate recommendations refreshed every 15 minutes",
    "Portfolio-wide performance benchmarking 90 days forward",
  ],
  metrics: [
    { label: "Avg. RevPAR uplift Y1", value: "+18%", delta: "vs comp set" },
    { label: "Portfolio occupancy", value: "78.4%", delta: "+3.2pp YoY" },
    { label: "Direct booking share", value: "34%", delta: "+6pp YoY" },
    { label: "Comp set index", value: "112.4", delta: "Index" },
  ],
  miniMetrics: [
    { val: "12+", label: "Data sources" },
    { val: "15 min", label: "Refresh rate" },
    { val: "9", label: "Markets covered" },
  ],
};

export const CTA = {
  title: "Does your property qualify?",
  body: "We partner with hotels ready to grow. Apply today and hear back within 5 business days.",
  primary: "Start your application",
};

export const OFFICES = [
  {
    region: "United Arab Emirates",
    label: "Dubai",
    line: "Rockenue International Group\n5842+632 Grand Stand\nNad Al Sheba 1\nDubai",
  },
];

export const FOOTER = {
  tagline: "The hotel management company for independent hotels.",
  columns: [
    {
      heading: "Company",
      links: ["Approach", "Markets", "Contact"],
    },
    {
      heading: "Services",
      links: [
        "Full Service Management",
        "Leasing & Management",
        "Hotel Sales & Acquisitions",
        "Research & Intelligence",
      ],
    },
    {
      heading: "Resources",
      links: ["Market Pulse", "Apply for Management"],
    },
  ],
  copyright: "\u00a9 2026 Rockenue International Group. All rights reserved.",
  legalLinks: ["Privacy", "Terms", "Cookies"],
};

export const ONBOARDING = [
  { phase: "01", title: "NDA & data access", desc: "We sign a mutual NDA and request access to your hotel's performance data — PMS, channel manager, financials." },
  { phase: "02", title: "Business study", desc: "An exhaustive review of your property: revenue, occupancy patterns, comp set positioning, distribution mix, rate structure, and market context." },
  { phase: "03", title: "Presentation & alignment", desc: "We present our findings — in person or on a call. Full forecast, identified opportunities, and a proposed commercial strategy." },
  { phase: "04", title: "Agreement", desc: "If there's a fit on both sides, we formalise the partnership. Clear terms, clear scope, clear accountability." },
  { phase: "05", title: "Tech stack & implementation", desc: "We review your systems, recommend changes where needed, and implement end to end — PMS migration, channel setup, staff training, data mapping." },
  { phase: "06", title: "Go live", desc: "Systems live. Intelligence layer connected. Autonomous pricing active. Billing starts on this date — not before." },
];

export const ONGOING = [
  { title: "Distribution & partnerships", desc: "Your hotel enters an established network of OTA partnerships, wholesale agreements, and direct booking channels. Preferred terms, chain-level visibility, and account management that a single property couldn't negotiate alone." },
  { title: "Intelligence infrastructure", desc: "A proprietary data layer built in-house — demand formation, pricing behaviour, event scoring, flight corridors — running on dedicated AI hardware. Not a subscription. Not a vendor product. Ours." },
  { title: "Operations & team support", desc: "We work alongside your front desk and on-site team. Training, systems guidance, process design, and daily operational support — a direct extension of your hotel's staff." },
  { title: "Investor-grade reporting", desc: "Performance reports built for board tables. Revenue, occupancy, comp set benchmarking, pace analysis, and forward outlook — automated, scheduled, and delivered in the format your stakeholders expect." },
  { title: "Commercial leadership", desc: "Quarterly strategy sessions with our senior team. Market review, rate positioning, distribution performance, and forward planning — structured around your hotel's commercial objectives." },
  { title: "Real-time transparency", desc: "Live access to the same dashboards and intelligence tools we use to operate the portfolio. No interpretation layers, no monthly summaries — real-time, direct, always on." },
];

export const FORM_FIELDS = [
  { label: "Property name", placeholder: "e.g. The Kensington Hotel", half: false },
  { label: "City / Location", placeholder: "e.g. London, United Kingdom", half: true },
  { label: "Number of rooms", placeholder: "e.g. 45", half: true },
  { label: "Current PMS", placeholder: "e.g. Cloudbeds, Mews, Opera, Other", half: true },
  { label: "Your name", placeholder: "", half: true },
  { label: "Email address", placeholder: "", half: true },
  { label: "Phone", placeholder: "", half: true },
];
