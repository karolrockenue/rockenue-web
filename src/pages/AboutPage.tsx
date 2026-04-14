import { R } from "../theme";
import { OFFICES } from "../content";

export function AboutPage() {
  return (
    <section style={{ background: R.heroBg, borderBottom: `1px solid ${R.border}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", minHeight: "70vh" }}>
        <div style={{ padding: "96px 48px 96px 64px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: `1px solid ${R.border}` }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, color: R.gold, textTransform: "uppercase", marginBottom: 24 }}>About</div>
          <h1 style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.15, letterSpacing: -1.3, color: R.accent, margin: "0 0 28px" }}>
            Hotel management company.{" "}
            <span style={{ color: R.textMid }}>London & Dubai.</span>
          </h1>
          <div style={{ display: "flex", gap: 24, marginTop: 8 }}>
            {OFFICES.map((o, i) => (
              <div key={o.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 6, height: 6, borderRadius: 3, background: i === 0 ? R.teal : R.gold }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: R.accent }}>{o.label}</div>
                  <div style={{ fontSize: 11, color: R.textDim }}>{o.line}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "96px 64px 96px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: 16, color: R.text, lineHeight: 1.8, margin: "0 0 24px" }}>
            We operate independent hotels. Pricing, distribution, technology, and commercial strategy — managed centrally, the same way a chain operates. Hotels that join the network get the infrastructure of a major group while keeping their own name and identity.
          </p>
          <p style={{ fontSize: 16, color: R.text, lineHeight: 1.8, margin: "0 0 24px" }}>
            Founded in 2019 in London. We started because independent hotels were being outcompeted on infrastructure — not on quality. Chains had better systems, better deals, and more data. We built what was missing and made it available to hotels that would otherwise go without.
          </p>
          <p style={{ fontSize: 16, color: R.text, lineHeight: 1.8, margin: 0 }}>
            The technology stack is proprietary and built from scratch — dedicated AI hardware, a live market intelligence layer, autonomous pricing infrastructure. None of it is off-the-shelf. None of it is available outside the network. We built it because nothing else came close.
          </p>
        </div>
      </div>
    </section>
  );
}
