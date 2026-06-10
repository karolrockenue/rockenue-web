export const HERO = {
  eyebrow: "Independent hotel operator",
  headline: "The hotel management company for independent hotels.",
  subheadline:
    "Built as an alternative to global chains, we give independent hotels the systems, expertise, and scale they need — while preserving their identity.",
  primaryCta: "Apply for management",
  secondaryCta: "See our approach",
};

// Hero presence list — countries where Rockenue currently operates.
// `highlight` is rendered in teal at the centre of the list.
export const PRESENCE = {
  caption: "Operating across",
  highlight: "United Kingdom",
  countries: [
    "Iceland",
    "Denmark",
    "Norway",
    "United Kingdom",
    "United Arab Emirates",
    "United States",
    "Poland",
  ],
  footnote: "7 countries · 3 continents",
};

export const NAV_LINKS = ["Services", "Portfolio", "Markets", "Market Pulse", "About"];

export const STATS = [
  { value: "58", label: "Properties under management" },
  { value: "2,500", label: "Rooms across the portfolio" },
  { value: "#1", label: "Independent operator on Booking.com London" },
  { value: "£75M+", label: "Revenue under management" },
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
  "Iceland",
  "Denmark",
  "Norway",
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
  addresses: [
    {
      name: "Rockenue International Group",
      line: "5842+632 Grand Stand\nNad Al Sheba 1\nDubai, United Arab Emirates",
    },
    {
      name: "Rockenue Tech sp. z o.o.",
      line: "ul. Józefa Chełmońskiego 118/4\n31-348 Kraków, Poland\nNIP: 9452331438 · KRS: 0001246600\nREGON: 544967330",
    },
  ],
  columns: [
    {
      heading: "Company",
      links: ["Partnership", "Services", "Technology", "Contact"],
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
      links: ["FAQ", "Market Pulse", "Booking Engine Support"],
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

// Leadership — single source of truth, used by the About page and the
// Person structured data (seo.ts).
export const LEADERSHIP = [
  { img: "/team/karol.jpg", name: "Karol Zymek", role: "Founder & CEO", bio: "Former Head of Revenue at OYO; previously at Agoda. 20 years in hospitality revenue management." },
  { img: "/team/magnus.jpg", name: "Magnús Magnússon", role: "Head of Nordics", bio: "Former Country Manager at Booking.com, Nordics (9 years, €150M+ revenue)." },
  { img: "/team/sunny.jpg", name: "Sunny Singh", role: "Advisor", bio: "Cloudbeds, ex-Keytel, ex-OYO UK. Hospitality sales and partnerships." },
  { img: "/team/ruslana.jpg", name: "Ruslana Doroshchuk", role: "Director of Operations", bio: "Former Hyatt and InterContinental. 10+ years in hospitality operations." },
  { img: "/team/zeynep.jpg", name: "Zeynep Taskin", role: "Market Expansion", bio: "Former Duetto and Amazon. King's College London." },
  { img: "/team/hannah.jpg", name: "Hannah Cuevas", role: "Account Management Lead", bio: "Manages client relationships and day-to-day operations across the portfolio." },
];

// FAQ — single source of truth, used by the FAQ page and the FAQPage
// structured data (seo.ts).
export const FAQ = [
  {
    id: "about",
    category: "About Rockenue",
    items: [
      { q: "What is Rockenue?", a: "Rockenue is a hotel management company built specifically for independent hotels. We provide the systems, distribution, revenue management, and market intelligence of a large hotel group — while each hotel keeps its own brand and identity. In short, we run the commercial engine behind your hotel so it can compete with the global chains." },
      { q: "Who is Rockenue for?", a: "Independent hotels that want chain-level commercial performance without giving up their identity or joining a franchise. We typically work with 3-star-and-above properties of 25 rooms or more, though we consider opportunities of all sizes and stages." },
      { q: "How is Rockenue different from a global chain or franchise?", a: "A franchise makes you adopt their brand, standards, and fees in exchange for a flag. We do the opposite: you keep your brand, and we supply the infrastructure behind it — pricing, distribution, technology, and reporting. You get the scale benefits of a chain without surrendering what makes your hotel distinct." },
      { q: "Do I keep my brand and identity?", a: "Yes — this is central to how we work. We operate as the commercial and operational layer behind your existing brand. Guests experience your hotel, not ours." },
      { q: "Is Rockenue a hotel chain?", a: "No. We don't own or brand hotels under a single flag. We're an operator and management company running a network of independent hotels, each retaining its own identity while connected to shared infrastructure." },
      { q: "Where is Rockenue based?", a: "Rockenue International Group is headquartered in Dubai, in the Meydan Free Zone, with an operating presence in London. We manage hotels across the UK, Europe, the US, and the Middle East." },
      { q: "How big is Rockenue's portfolio?", a: "We manage close to 60 properties and around 2,500 rooms, with more than £75M in revenue under management. We're also the #1 independent operator on Booking.com in London." },
    ],
  },
  {
    id: "services",
    category: "Services",
    items: [
      { q: "What services does Rockenue offer?", a: "Four: Full Service Management, Leasing & Management, Hotel Sales & Acquisitions, and Research & Intelligence. Most hotels engage us for Full Service Management; the others serve owners, investors, and buyers or sellers." },
      { q: "What is Full Service Management?", a: "It's the core of what we do, and what happens when a hotel joins the network. We take over pricing, distribution, OTA and channel management, reporting, and day-to-day commercial operations centrally, with a dedicated team. You keep your brand; we provide everything behind it." },
      { q: "What's included in Full Service Management?", a: "Autonomous AI pricing, OTA & channel management, revenue and owner reporting, commercial strategy, front-desk and operations support, and live owner dashboards — all run from chain-level infrastructure." },
      { q: "What is Leasing & Management?", a: "For asset owners who want hands-off, professionally managed returns. We lease or manage properties on your behalf and take on full commercial and operational responsibility, under fixed or revenue-share structures, with investor-grade reporting." },
      { q: "What is Hotel Sales & Acquisitions?", a: "We sit at the centre of a large network of hotel buyers, sellers, and investors — including many off-market opportunities. For sellers we position the asset and connect qualified buyers; for buyers we provide market analysis, operational due diligence, and transition support." },
      { q: "What is Research & Intelligence?", a: "Bespoke market intelligence built on our proprietary platform — forward demand modelling, competitive pricing analysis, supply mapping, event-impact scoring, and flight-corridor data. We produce reports for investors, developers, lenders, and operators, under NDA, to their specification." },
      { q: "Can I buy a market report without becoming a managed hotel?", a: "Yes. Research & Intelligence is a standalone service. We build reports to your specification, under NDA, on your timeline — you don't need to be a managed hotel." },
    ],
  },
  {
    id: "partnership",
    category: "Partnership & Onboarding",
    items: [
      { q: "How do I become a Rockenue-managed hotel?", a: "Get in touch through our contact page or apply for management. We sign a mutual NDA, study your property in depth, present our findings and proposed strategy, and — if there's a fit on both sides — formalise the partnership and begin onboarding." },
      { q: "What does the onboarding process look like?", a: "Six structured steps: (1) NDA & data access, (2) business study, (3) presentation & alignment, (4) agreement, (5) tech-stack & implementation, and (6) go-live. Each stage is transparent, with clear scope and accountability." },
      { q: "How long does onboarding take?", a: "For properties that qualify, we move from submission to live operation in about 30 days." },
      { q: "What happens in the business study?", a: "An exhaustive review of your property — revenue, occupancy patterns, comp-set positioning, distribution mix, rate structure, and market context — so every recommendation is grounded in your actual data." },
      { q: "When does billing start?", a: "Billing begins on your go-live date, when systems are live and pricing is active — not before. You're not charged during the study or implementation." },
      { q: "What are the qualifying criteria?", a: "Typically 3-star or above with a minimum of 25 rooms; priority to our core markets though we're open to all locations; a full operational handover rather than advisory; and a property in operational condition or near completion." },
      { q: "Is this advisory, or a full handover?", a: "A full operational handover. We take on commercial responsibility and run it — this isn't a consulting engagement where you implement our advice yourself." },
      { q: "Do you work with hotels outside your core markets?", a: "Yes. We give priority to our core markets, but we evaluate opportunities anywhere." },
      { q: "Do I have to sign an NDA?", a: "Yes. We begin with a mutual NDA before you share any performance data, so both sides are protected from the outset." },
    ],
  },
  {
    id: "markets",
    category: "Markets & Coverage",
    items: [
      { q: "Which markets does Rockenue operate in?", a: "We currently operate across the United Kingdom, United States, United Arab Emirates, Spain, Greece, Turkey, Israel, Poland, Iceland, Denmark, Norway, and Indonesia — spanning three continents, and growing." },
      { q: "Do you only work in your listed markets?", a: "No — those are our active and priority markets, but we assess opportunities globally." },
      { q: "Are you expanding into new regions?", a: "Yes — we're actively expanding, including across the Nordics." },
    ],
  },
  {
    id: "technology",
    category: "Technology & Market Pulse",
    items: [
      { q: "What is Market Pulse?", a: "Market Pulse is our proprietary intelligence platform. It aggregates demand signals, competitor rates, flight-search data, and event calendars into a single operational view, so every pricing and distribution decision is data-driven." },
      { q: "How does your pricing and revenue management work?", a: "Our pricing engine runs on dedicated AI/GPU hardware, processing flight-search data, event calendars, OTA signals, and booking velocity across entire cities at once. It produces automated rate recommendations refreshed every 15 minutes." },
      { q: "Is your technology a third-party subscription?", a: "No. Our intelligence layer is built in-house and runs on our own dedicated hardware — it isn't a vendor product or subscription we resell. It's ours, and it's been accumulating a behavioural dataset of hospitality markets since the day we started." },
      { q: "What PMS do you work with?", a: "We work with the major property-management systems, including Cloudbeds, Mews, and Opera, among others. During onboarding we review your stack and implement changes where needed — including PMS migration if it makes sense." },
      { q: "Do I get access to live dashboards?", a: "Yes. You get live owner dashboards and real-time access to the same intelligence tools we use to run the portfolio — no interpretation layers, no monthly-summary delays." },
      { q: "How often are rates updated?", a: "Rate recommendations are refreshed every 15 minutes, driven by live demand and competitor signals." },
      { q: "What data sources feed the engine?", a: "More than a dozen sources — OTA rates, flight-search and corridor data, event calendars, and booking velocity among them — amounting to millions of data points processed every day." },
      { q: "Do you offer a direct booking engine?", a: "Yes. We provide a direct booking platform so hotels can grow commission-free direct bookings alongside their OTA channels." },
    ],
  },
  {
    id: "commercials",
    category: "Commercials, Reporting & Operations",
    items: [
      { q: "How does Rockenue charge?", a: "It depends on the engagement. Management is structured around your hotel's commercial objectives, and leasing arrangements use fixed or revenue-share structures. We agree clear terms, scope, and accountability before anything goes live." },
      { q: "What reporting will I receive?", a: "Investor-grade reporting built for board tables — revenue, occupancy, comp-set benchmarking, pace analysis, and forward outlook — automated, scheduled, and delivered in the format your stakeholders expect." },
      { q: "How transparent is the reporting?", a: "Fully. You get real-time access to live dashboards and the same tools we use internally — not filtered monthly summaries." },
      { q: "Do you manage my OTA and Booking.com relationships?", a: "Yes. Your hotel joins our established network of OTA partnerships and wholesale agreements with chain-level visibility and preferred terms — including our Booking.com chain account, where we're the #1 independent operator in London." },
      { q: "Will you replace my staff?", a: "No. We work alongside your on-site team — training, systems guidance, process design, and daily operational support — as a direct extension of your staff, not a replacement." },
      { q: "Who owns the guest relationship?", a: "Your hotel does. Guests experience your brand; we operate the commercial and distribution layer behind it." },
      { q: "Do you provide commercial strategy beyond pricing?", a: "Yes — quarterly strategy sessions with our senior team covering market review, rate positioning, distribution performance, and forward planning, structured around your objectives." },
    ],
  },
  {
    id: "getting-started",
    category: "Getting Started",
    items: [
      { q: "How do I get in touch?", a: "Through our contact page — either a general enquiry or a formal application for management. Tell us about your property and what you want to achieve, and we'll take it from there." },
      { q: "How quickly will I hear back?", a: "We aim to respond within 5 business days." },
      { q: "What information should I have ready?", a: "Your property name and location, room count, current PMS, recent performance, and what you're looking to achieve. It helps us assess fit quickly, though an initial conversation doesn't require all of it." },
      { q: "Does my property qualify?", a: "If you're a 3-star-or-above property with 25+ rooms, in operational condition or near completion, you likely meet our baseline criteria — but we assess each property individually and welcome a conversation." },
    ],
  },
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
