import { Link, Outlet, useLocation } from "react-router-dom";
import { R } from "../theme";
import { NAV_LINKS, FOOTER } from "../content";

const NAV_ROUTES: Record<string, string> = {
  Services: "/services",
  Portfolio: "/",       // no dedicated page yet — link to home
  Markets: "/approach", // markets section lives on approach page
  "Market Pulse": "/",  // external product — link home for now
  About: "/about",
};

const FOOTER_ROUTES: Record<string, string> = {
  Approach: "/approach",
  Markets: "/approach",
  Contact: "/contact",
  "Full Service Management": "/services",
  "Leasing & Management": "/services",
  "Hotel Sales & Acquisitions": "/services",
  "Research & Intelligence": "/services",
  "Market Pulse": "/",
  "Apply for Management": "/apply",
};

const LEGAL_ROUTES: Record<string, string> = {
  Privacy: "/privacy",
  Terms: "/terms",
  Cookies: "/cookies",
};

export function Layout() {
  const location = useLocation();

  return (
    <div style={{ minHeight: "100vh", background: R.bg, color: R.white, fontFamily: "'Inter', system-ui, -apple-system, sans-serif", display: "flex", flexDirection: "column" }}>

      {/* ─── Navbar ─── */}
      <nav style={{
        padding: "20px 64px", borderBottom: `1px solid ${R.border}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: R.bg, position: "sticky", top: 0, zIndex: 50,
      }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 700, color: R.accent, letterSpacing: 1.4, textDecoration: "none" }}>
          <span style={{ color: R.teal, fontSize: 26, fontWeight: 300, lineHeight: 1 }}>(</span>
          ROCKENUE
          <span style={{ color: R.gold, fontSize: 26, fontWeight: 300, lineHeight: 1 }}>)</span>
        </Link>
        <div style={{ display: "flex", gap: 32, fontSize: 13, color: R.textMid, fontWeight: 500 }}>
          {NAV_LINKS.map((item) => {
            const to = NAV_ROUTES[item] || "/";
            const active = location.pathname === to && to !== "/";
            return (
              <Link key={item} to={to} style={{ color: active ? R.accent : R.textMid, textDecoration: "none", transition: "color 0.2s" }}>
                {item}
              </Link>
            );
          })}
        </div>
        <Link to="/apply" style={{
          fontSize: 13, color: R.teal, padding: "8px 18px",
          border: `1px solid ${R.teal}`, borderRadius: 6, fontWeight: 600, textDecoration: "none",
        }}>
          Apply
        </Link>
      </nav>

      {/* ─── Page content ─── */}
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>

      {/* ─── Footer ─── */}
      <footer style={{ background: R.darkBand, padding: "60px 0 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 64px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.2fr 1fr", gap: 32, paddingBottom: 44, borderBottom: `1px solid ${R.border}` }}>
            <div>
              <Link to="/" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 700, color: R.accent, letterSpacing: 1.4, marginBottom: 18, opacity: 0.85, textDecoration: "none" }}>
                <span style={{ color: R.teal, fontSize: 26, fontWeight: 300, lineHeight: 1 }}>(</span>
                ROCKENUE
                <span style={{ color: R.gold, fontSize: 26, fontWeight: 300, lineHeight: 1 }}>)</span>
              </Link>
              <p style={{ fontSize: 13, color: R.textDim, maxWidth: 280, lineHeight: 1.6, margin: 0 }}>
                {FOOTER.tagline}
              </p>
            </div>
            {FOOTER.columns.map((col, idx) => {
              const headingColor = idx === 1 ? R.gold : R.teal;
              return (
                <div key={col.heading}>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, color: headingColor, textTransform: "uppercase", marginBottom: 16 }}>
                    {col.heading}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {col.links.map((link) => (
                      <Link key={link} to={FOOTER_ROUTES[link] || "/"} style={{ fontSize: 13, color: R.textDim, textDecoration: "none" }}>
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 12, color: R.textDim }}>{FOOTER.copyright}</span>
            <div style={{ display: "flex", gap: 24 }}>
              {FOOTER.legalLinks.map((item) => (
                <Link key={item} to={LEGAL_ROUTES[item] || "/"} style={{ fontSize: 12, color: R.textDim, textDecoration: "none" }}>
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
