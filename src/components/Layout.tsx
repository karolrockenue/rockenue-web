import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { R } from "../theme";
import { FOOTER } from "../content";
import { useIsMobile } from "../hooks/useIsMobile";

const NAV_ITEMS: { label: string; to: string; external?: boolean }[] = [
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Our Approach", to: "/approach" },
  { label: "Market Pulse", to: "https://www.market-pulse.io", external: true },
  { label: "Contact", to: "/contact" },
];

const FOOTER_ROUTES: Record<string, string> = {
  Approach: "/approach",
  Contact: "/contact",
  "Full Service Management": "/services",
  "Leasing & Management": "/services",
  "Hotel Sales & Acquisitions": "/services",
  "Research & Intelligence": "/services",
  "Apply for Management": "/apply",
};

const FOOTER_EXTERNAL: Record<string, string> = {
  "Market Pulse": "https://www.market-pulse.io",
};

const LEGAL_ROUTES: Record<string, string> = {
  Privacy: "/privacy",
  Terms: "/terms",
  Cookies: "/cookies",
};

export function Layout() {
  const location = useLocation();
  const m = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const px = m ? "0 24px" : "0 64px";

  return (
    <div style={{ minHeight: "100vh", background: R.bg, color: R.white, fontFamily: "'Inter', system-ui, -apple-system, sans-serif", display: "flex", flexDirection: "column" }}>

      {/* ─── Navbar ─── */}
      <nav style={{
        padding: m ? "14px 24px" : "20px 64px", borderBottom: `1px solid ${R.border}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: R.bg, position: "sticky", top: 0, zIndex: 50,
      }}>
        <Link to="/" onClick={() => setMenuOpen(false)} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 700, color: R.accent, letterSpacing: 1.4, textDecoration: "none" }}>
          <span style={{ color: R.teal, fontSize: m ? 22 : 26, fontWeight: 300, lineHeight: 1 }}>(</span>
          ROCKENUE
          <span style={{ color: R.gold, fontSize: m ? 22 : 26, fontWeight: 300, lineHeight: 1 }}>)</span>
        </Link>

        {m ? (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: R.accent, cursor: "pointer", padding: 4 }}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        ) : (
          <>
            <div style={{ display: "flex", gap: 32, fontSize: 13, color: R.textMid, fontWeight: 500 }}>
              {NAV_ITEMS.map((item) => {
                if (item.external) {
                  return (
                    <a key={item.label} href={item.to} target="_blank" rel="noopener noreferrer" style={{ color: R.textMid, textDecoration: "none", transition: "color 0.2s" }}>
                      {item.label}
                    </a>
                  );
                }
                const active = location.pathname === item.to;
                return (
                  <Link key={item.label} to={item.to} style={{ color: active ? R.accent : R.textMid, textDecoration: "none", transition: "color 0.2s" }}>
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <Link to="/apply" style={{ fontSize: 13, color: R.teal, padding: "8px 18px", border: `1px solid ${R.teal}`, borderRadius: 6, fontWeight: 600, textDecoration: "none" }}>
              Apply
            </Link>
          </>
        )}
      </nav>

      {/* ─── Mobile menu drawer ─── */}
      {m && menuOpen && (
        <div style={{ background: R.heroBg, borderBottom: `1px solid ${R.border}`, padding: "16px 24px", display: "flex", flexDirection: "column", gap: 0 }}>
          {NAV_ITEMS.map((item) => {
            if (item.external) {
              return (
                <a key={item.label} href={item.to} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
                  style={{ color: R.text, textDecoration: "none", fontSize: 15, fontWeight: 500, padding: "14px 0", borderBottom: `1px solid ${R.border}` }}>
                  {item.label}
                </a>
              );
            }
            const active = location.pathname === item.to;
            return (
              <Link key={item.label} to={item.to} onClick={() => setMenuOpen(false)}
                style={{ color: active ? R.accent : R.text, textDecoration: "none", fontSize: 15, fontWeight: 500, padding: "14px 0", borderBottom: `1px solid ${R.border}` }}>
                {item.label}
              </Link>
            );
          })}
          <Link to="/apply" onClick={() => setMenuOpen(false)} style={{
            marginTop: 16, background: R.teal, color: "#0F1215", border: "none",
            padding: "14px 0", borderRadius: 8, fontWeight: 700, fontSize: 14,
            textDecoration: "none", textAlign: "center", display: "block",
          }}>
            Apply for management
          </Link>
        </div>
      )}

      {/* ─── Page content ─── */}
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>

      {/* ─── Footer ─── */}
      <footer style={{ background: R.darkBand, padding: m ? "40px 0 0" : "60px 0 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: px }}>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "2fr 1fr 1.2fr 1fr", gap: m ? 28 : 32, paddingBottom: m ? 32 : 44, borderBottom: `1px solid ${R.border}` }}>
            <div>
              <Link to="/" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 700, color: R.accent, letterSpacing: 1.4, marginBottom: 18, opacity: 0.85, textDecoration: "none" }}>
                <span style={{ color: R.teal, fontSize: 26, fontWeight: 300, lineHeight: 1 }}>(</span>
                ROCKENUE
                <span style={{ color: R.gold, fontSize: 26, fontWeight: 300, lineHeight: 1 }}>)</span>
              </Link>
              <p style={{ fontSize: 13, color: R.textDim, maxWidth: 280, lineHeight: 1.6, margin: 0 }}>{FOOTER.tagline}</p>
            </div>
            {FOOTER.columns.map((col, idx) => {
              const headingColor = idx === 1 ? R.gold : R.teal;
              return (
                <div key={col.heading}>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, color: headingColor, textTransform: "uppercase", marginBottom: 16 }}>{col.heading}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {col.links.map((link) => {
                      if (FOOTER_EXTERNAL[link]) {
                        return <a key={link} href={FOOTER_EXTERNAL[link]} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: R.textDim, textDecoration: "none" }}>{link}</a>;
                      }
                      return <Link key={link} to={FOOTER_ROUTES[link] || "/"} style={{ fontSize: 13, color: R.textDim, textDecoration: "none" }}>{link}</Link>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ padding: "20px 0", display: "flex", flexDirection: m ? "column" : "row", justifyContent: "space-between", alignItems: m ? "flex-start" : "center", gap: m ? 12 : 0 }}>
            <span style={{ fontSize: 12, color: R.textDim }}>{FOOTER.copyright}</span>
            <div style={{ display: "flex", gap: 24 }}>
              {FOOTER.legalLinks.map((item) => (
                <Link key={item} to={LEGAL_ROUTES[item] || "/"} style={{ fontSize: 12, color: R.textDim, textDecoration: "none" }}>{item}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
