import { R } from "../theme";
import { OFFICES } from "../content";

export function ContactPage() {
  return (
    <section style={{ background: R.heroBg, flex: 1, display: "flex", alignItems: "center", minHeight: "calc(100vh - 130px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 64px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, color: R.gold, textTransform: "uppercase", marginBottom: 24 }}>Contact</div>
          <h1 style={{ fontSize: 44, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.5, color: R.accent, margin: "0 0 18px" }}>Get in touch.</h1>
          <p style={{ fontSize: 15, color: R.text, lineHeight: 1.7, maxWidth: 400 }}>
            Whether you're exploring management options, looking to sell, or need market intelligence — we'd like to hear from you.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.5, color: R.textDim, textTransform: "uppercase", marginBottom: 10 }}>Email</div>
            <a href="mailto:info@rockenue.com" style={{ fontSize: 16, fontWeight: 600, color: R.accent, textDecoration: "none" }}>info@rockenue.com</a>
            <p style={{ fontSize: 13, color: R.textMid, margin: "8px 0 0" }}>We respond within 2 business days.</p>
          </div>
          {OFFICES.map((office) => (
            <div key={office.label}>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.5, color: R.textDim, textTransform: "uppercase", marginBottom: 10 }}>{office.label}</div>
              <div style={{ fontSize: 13, color: R.text, lineHeight: 1.7, whiteSpace: "pre-line" }}>{office.line}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
