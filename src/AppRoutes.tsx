import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ApproachPage } from "./pages/ApproachPage";
import { AboutPage } from "./pages/AboutPage";
import { TechnologyPage } from "./pages/TechnologyPage";
import { ContactPage } from "./pages/ContactPage";
import { FaqPage } from "./pages/FaqPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { CookiesPage } from "./pages/CookiesPage";
import { BookingEngineSupportPage } from "./pages/BookingEngineSupportPage";

// Router-agnostic route table. Wrapped by <BrowserRouter> on the client
// (entry: main.tsx) and <StaticRouter> on the server (entry: entry-server.tsx).
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/apply" element={<Navigate to="/contact" replace />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/support/booking-engine" element={<BookingEngineSupportPage />} />
      </Route>
    </Routes>
  );
}

// Static list of paths to prerender (kept in sync with the routes above).
// `/apply` is intentionally omitted — it's a redirect, not a page.
export const PRERENDER_PATHS = [
  "/",
  "/services",
  "/approach",
  "/about",
  "/technology",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
  "/cookies",
  "/support/booking-engine",
];
