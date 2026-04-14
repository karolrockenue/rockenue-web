import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { R } from "../theme";
import { SERVICES } from "../content";

export function ServicesPage() {
  return (
    <>
      <section style={{ background: R.heroBg, padding: "80px 0 64px", borderBottom: `1px solid ${R.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 64px" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, color: R.gold, textTransform: "uppercase", marginBottom: 20 }}>Services</div>
          <h1 style={{ fontSize: 42, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.4, color: R.accent, margin: 0, maxWidth: 500 }}>
            Full-stack commercial management.
          </h1>
        </div>
      </section>

      <section style={{ background: R.bg, padding: "0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 64px", display: "grid", gridTemplateColumns: "240px 1fr", gap: 0 }}>
          <div style={{ borderRight: `1px solid ${R.border}`, padding: "48px 32px 48px 0", position: "sticky", top: 90, alignSelf: "start" }}>
            {SERVICES.map((svc, i) => {
              const accent = i % 2 === 0 ? R.teal : R.gold;
              return (
                <div key={svc.num} onClick={() => document.getElementById(`svc-${svc.num}`)?.scrollIntoView({ behavior: "smooth", block: "start" })} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", cursor: "pointer" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: accent, width: 20 }}>{svc.num}</span>
                  <span style={{ fontSize: 13, color: R.accent, fontWeight: 500 }}>{svc.title}</span>
                </div>
              );
            })}
          </div>
          <div style={{ padding: "48px 0 80px 48px" }}>
            {SERVICES.map((svc, i) => {
              const accent = i % 2 === 0 ? R.teal : R.gold;
              return (
                <div key={svc.num} id={`svc-${svc.num}`} style={{ scrollMarginTop: 100, marginBottom: i < SERVICES.length - 1 ? 56 : 0, paddingBottom: i < SERVICES.length - 1 ? 56 : 0, borderBottom: i < SERVICES.length - 1 ? `1px solid ${R.border}` : "none" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: accent }}>{svc.num}</span>
                    <h2 style={{ fontSize: 26, fontWeight: 700, color: R.accent, margin: 0 }}>{svc.title}</h2>
                  </div>
                  <p style={{ fontSize: 13, color: R.textMid, margin: "0 0 16px", fontWeight: 500 }}>{svc.summary}</p>
                  <p style={{ fontSize: 14, color: R.text, lineHeight: 1.75, margin: "0 0 24px", maxWidth: 620 }}>{svc.body}</p>
                  <div style={{ background: R.card, border: `1px solid ${R.border}`, borderRadius: 10, padding: "20px 22px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                    {svc.includes.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0" }}>
                        <div style={{ width: 4, height: 4, borderRadius: 2, background: accent, flexShrink: 0 }} />
                        <span style={{ fontSize: 12, color: R.text }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: R.darkBand, padding: "72px 0", borderBottom: `1px solid ${R.border}` }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 64px", textAlign: "center" }}>
          <h2 style={{ fontSize: 34, fontWeight: 700, letterSpacing: -1, color: R.accent, margin: "0 0 16px" }}>Ready to talk?</h2>
          <p style={{ fontSize: 15, color: R.text, margin: "0 0 28px" }}>Tell us about your property and what you're looking to achieve.</p>
          <Link to="/apply" style={{ background: R.teal, color: "#0F1215", border: "none", padding: "15px 36px", borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            Apply for management <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
