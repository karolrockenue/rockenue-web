import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { R } from "../theme";
import { MARKETS, OFFICES, ONBOARDING, ONGOING } from "../content";

export function ApproachPage() {
  return (
    <>
      {/* Hero — 50/50 split */}
      <section style={{ background: R.heroBg, borderBottom: `1px solid ${R.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "50vh" }}>
          <div style={{ padding: "80px 48px 80px 64px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: `1px solid ${R.border}` }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, color: R.gold, textTransform: "uppercase", marginBottom: 24 }}>Our approach</div>
            <h1 style={{ fontSize: 44, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.5, color: R.accent, margin: "0 0 20px" }}>
              What happens when your hotel{" "}
              <span style={{ background: `linear-gradient(135deg, ${R.teal} 0%, ${R.gold} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                joins the network.
              </span>
            </h1>
            <p style={{ fontSize: 15, color: R.text, lineHeight: 1.7, maxWidth: 440 }}>
              Access to chain-scale infrastructure, distribution, and technology — while keeping your identity. Every hotel operates on the same systems, the same intelligence, and the same commercial standards.
            </p>
          </div>
          <div style={{ padding: "80px 64px 80px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {[
              { num: "01", title: "Owner-aligned", desc: "Your hotel, your identity. We provide the operating layer — you retain the brand." },
              { num: "02", title: "Data-first", desc: "Every decision backed by real-time market intelligence. Not instinct, not last month's report." },
              { num: "03", title: "Full accountability", desc: "We manage revenue, distribution, and commercial performance. Transparent reporting, no black boxes." },
            ].map((p, i) => {
              const accent = i % 2 === 0 ? R.teal : R.gold;
              return (
                <div key={p.num} style={{ display: "flex", gap: 16, marginBottom: i < 2 ? 28 : 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: accent, width: 24, flexShrink: 0 }}>{p.num}</div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: R.accent, marginBottom: 4 }}>{p.title}</div>
                    <div style={{ fontSize: 13, color: R.text, lineHeight: 1.6 }}>{p.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Onboarding — vertical timeline */}
      <section style={{ background: R.bg, padding: "96px 0", borderBottom: `1px solid ${R.border}` }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 64px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: R.teal, marginBottom: 16 }}>Onboarding</div>
            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: -1.2, color: R.accent, margin: 0, lineHeight: 1.1 }}>From first conversation to go-live</h2>
          </div>
          <div style={{ position: "relative", paddingLeft: 40 }}>
            <div style={{ position: "absolute", left: 11, top: 8, bottom: 8, width: 2, background: R.border }} />
            {ONBOARDING.map((step, i) => {
              const accent = i % 2 === 0 ? R.teal : R.gold;
              const isLast = i === ONBOARDING.length - 1;
              return (
                <div key={step.phase} style={{ position: "relative", marginBottom: isLast ? 0 : 32 }}>
                  <div style={{ position: "absolute", left: -40 + 4, top: 6, width: 16, height: 16, borderRadius: 8, background: R.card, border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 6, height: 6, borderRadius: 3, background: accent }} />
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: accent, marginBottom: 4 }}>{step.phase}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: R.accent, margin: "0 0 5px" }}>{step.title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: R.text, margin: 0 }}>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ongoing — table rows */}
      <section style={{ background: R.heroBg, padding: "96px 0", borderBottom: `1px solid ${R.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 64px" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: R.gold, marginBottom: 16 }}>Ongoing</div>
            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: -1.2, color: R.accent, margin: 0 }}>What we deliver, every month</h2>
          </div>
          <div style={{ background: R.card, border: `1px solid ${R.border}`, borderRadius: 12, overflow: "hidden" }}>
            {ONGOING.map((item, i) => {
              const accent = i % 2 === 0 ? R.teal : R.gold;
              return (
                <div key={item.title} style={{ display: "grid", gridTemplateColumns: "56px 260px 1fr", borderBottom: i < ONGOING.length - 1 ? `1px solid ${R.border}` : "none" }}>
                  <div style={{ padding: "20px 0", display: "flex", alignItems: "center", justifyContent: "center", borderRight: `1px solid ${R.border}` }}>
                    <div style={{ width: 8, height: 8, borderRadius: 4, background: accent }} />
                  </div>
                  <div style={{ padding: "20px 18px", borderRight: `1px solid ${R.border}`, display: "flex", alignItems: "center" }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: R.accent }}>{item.title}</span>
                  </div>
                  <div style={{ padding: "20px 22px", display: "flex", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: R.text, lineHeight: 1.6 }}>{item.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section style={{ background: R.darkBand, padding: "64px 0", borderBottom: `1px solid ${R.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 64px", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: R.gold, textTransform: "uppercase", marginBottom: 16 }}>Global presence</div>
            <p style={{ fontSize: 20, fontWeight: 500, color: R.accent, lineHeight: 1.6, margin: 0 }}>
              {MARKETS.map((m, i) => (
                <span key={m}>
                  <span style={{ color: OFFICES.some((o) => o.region === m) ? R.teal : R.accent }}>{m}</span>
                  {i < MARKETS.length - 2 ? ", " : i === MARKETS.length - 2 ? " and " : "."}
                </span>
              ))}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {OFFICES.map((o, i) => (
              <div key={o.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 8, height: 8, borderRadius: 4, background: i === 0 ? R.teal : R.gold, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: R.accent }}>{o.label}</div>
                  <div style={{ fontSize: 12, color: R.textDim }}>{o.line}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: R.bg, padding: "72px 0", borderBottom: `1px solid ${R.border}` }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 64px", textAlign: "center" }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: -1, color: R.accent, margin: "0 0 16px" }}>Does your property qualify?</h2>
          <p style={{ fontSize: 15, color: R.text, margin: "0 0 28px", lineHeight: 1.6 }}>We partner with hotels ready to grow. Apply today and hear back within 5 business days.</p>
          <Link to="/apply" style={{ background: `linear-gradient(135deg, ${R.teal} 0%, ${R.gold} 100%)`, color: "#0F1215", border: "none", padding: "15px 36px", borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            Apply for management <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
