import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { R } from "../theme";
import { HERO, STATS, STEPS, CTA, QUALIFIERS } from "../content";

export function HomePage() {
  return (
    <>
      {/* ─── BAND 1: Hero — 50/50 split, brand brackets in the right card ─── */}
      <section style={{ background: R.heroBg, padding: "0", borderBottom: `1px solid ${R.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "70vh" }}>
          <div style={{ padding: "96px 48px 96px 64px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: `1px solid ${R.border}` }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, color: R.gold, textTransform: "uppercase", marginBottom: 24 }}>
              {HERO.eyebrow}
            </div>
            <h1 style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, margin: "0 0 28px", color: R.accent }}>
              The hotel management company for{" "}
              <span style={{ background: `linear-gradient(135deg, ${R.teal} 0%, ${R.gold} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                independent hotels.
              </span>
            </h1>
            <p style={{ fontSize: 16, color: R.text, maxWidth: 520, lineHeight: 1.7, margin: "0 0 40px" }}>
              {HERO.subheadline}
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              <Link to="/apply" style={{
                background: R.teal, color: "#0F1215", border: `1px solid ${R.teal}`,
                padding: "14px 30px", borderRadius: 8, fontWeight: 700, fontSize: 14,
                cursor: "pointer", letterSpacing: 0.2, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none",
              }}>
                {HERO.primaryCta} <ArrowRight size={15} />
              </Link>
              <Link to="/approach" style={{
                background: "transparent", color: R.text, border: `1px solid ${R.border}`,
                padding: "14px 26px", borderRadius: 8, fontWeight: 600, fontSize: 14,
                cursor: "pointer", letterSpacing: 0.2, textDecoration: "none",
              }}>
                {HERO.secondaryCta}
              </Link>
            </div>
          </div>
          <div style={{ padding: "96px 64px 96px 48px", display: "flex", alignItems: "center" }}>
            <div style={{
              width: "100%", aspectRatio: "1.1", background: R.card, border: `1px solid ${R.border}`,
              borderRadius: 16, padding: "44px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: -100, right: -100, width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle, ${R.teal}30 0%, transparent 70%)`, pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: -100, left: -100, width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle, ${R.gold}30 0%, transparent 70%)`, pointerEvents: "none" }} />
              <div style={{ position: "relative" }}>&nbsp;</div>
              <div style={{ position: "relative", textAlign: "center" }}>
                <div style={{ fontSize: 48, fontWeight: 700, color: R.accent, letterSpacing: 2, display: "flex", alignItems: "center", justifyContent: "center", gap: 18 }}>
                  <span style={{ color: R.teal, fontSize: 78, fontWeight: 300 }}>(</span>
                  ROCKENUE
                  <span style={{ color: R.gold, fontSize: 78, fontWeight: 300 }}>)</span>
                </div>
              </div>
              <div style={{ position: "relative", fontSize: 11, color: R.textDim, letterSpacing: 2, textTransform: "uppercase", textAlign: "center", fontWeight: 500 }}>
                Hotel management · Est. 2019
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BAND 2: Stats ─── */}
      <section style={{ background: R.darkBand, padding: "60px 0", borderBottom: `1px solid ${R.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 64px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center", flex: 1, position: "relative", padding: "0 16px" }}>
              {i > 0 && <div style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", height: 48, width: 1, background: R.border }} />}
              <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: -1.8, lineHeight: 1, background: `linear-gradient(135deg, ${R.teal} 0%, ${R.gold} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {s.value}
              </div>
              <div style={{ fontSize: 11, color: R.textMid, marginTop: 12, fontWeight: 600, letterSpacing: 0.5, lineHeight: 1.4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BAND 3: Services ─── */}
      <section style={{ background: R.bg, padding: "96px 0", borderBottom: `1px solid ${R.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: R.gold, marginBottom: 16 }}>
              Services
            </p>
            <h2 style={{ fontSize: 42, fontWeight: 700, letterSpacing: -1.4, color: R.accent, margin: "0 0 18px", lineHeight: 1.1 }}>
              Four ways we work with hotels.
            </h2>
            <p style={{ fontSize: 14, color: R.textMid, maxWidth: 520, lineHeight: 1.65, margin: 0 }}>
              Each function delivered by a specialist team, powered by proprietary technology, and aligned to your hotel's commercial objectives.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {([
              { num: "01", title: "Full Service Management", summary: "The core of what we do. This is what happens when a hotel joins the network." },
              { num: "02", title: "Leasing & Management", summary: "For asset owners looking for hands-off, professionally managed returns." },
              { num: "03", title: "Hotel Sales & Acquisitions", summary: "A deep network of buyers, sellers, and off-market opportunities." },
              { num: "04", title: "Research & Intelligence", summary: "Bespoke market intelligence that doesn't exist anywhere else." },
            ] as const).map((svc, i) => {
              const accent = i % 2 === 0 ? R.teal : R.gold;
              return (
                <div key={svc.num} style={{ borderTop: `2px solid ${accent}`, paddingTop: 24 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: accent, display: "block", marginBottom: 14 }}>{svc.num}</span>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: R.accent, margin: "0 0 10px" }}>{svc.title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: R.textMid, margin: 0 }}>{svc.summary}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── BAND 4: Intelligence ─── */}
      <section style={{ background: R.heroBg, padding: "96px 0", borderBottom: `1px solid ${R.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 64px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: R.teal, marginBottom: 16 }}>Intelligence</p>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1.3, color: R.accent, margin: "0 0 22px", lineHeight: 1.1 }}>
              Dedicated AI hardware. Every signal, every city.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: R.text, maxWidth: 480, margin: "0 0 28px" }}>
              The pricing engine runs on dedicated GPU infrastructure processing flight search data, event calendars, OTA signals, and booking velocity across entire cities simultaneously. Every signal is retained. The result is a deep behavioural dataset of hospitality markets — demand formation, pricing response, supply elasticity, seasonal structure — growing since the day we started collecting.
            </p>
            <div style={{ display: "flex", gap: 32 }}>
              <div>
                <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1, letterSpacing: -0.5, background: `linear-gradient(135deg, ${R.teal} 0%, ${R.gold} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>5M+</div>
                <div style={{ fontSize: 12, color: R.textDim, fontWeight: 500, marginTop: 6 }}>Data points processed daily</div>
              </div>
            </div>
          </div>
          <div style={{ background: R.card, border: `1px solid ${R.border}`, borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "14px 24px", borderBottom: `1px solid ${R.border}` }}>
              <div style={{ fontSize: 8, color: R.textDim, textTransform: "uppercase", letterSpacing: 1 }}>COMPETITIVE BENCHMARKING</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: R.accent }}>Performance vs Comp Set</div>
            </div>
            <div style={{ padding: "16px 24px" }}>
              {(() => {
                const map = (v: number) => 100 - ((v - 30) / 60) * 90;
                return (
                  <svg viewBox="0 0 200 100" style={{ width: "100%", height: 80 }} preserveAspectRatio="none">
                    {[10, 30, 50, 70, 90].map((y) => <line key={y} x1="0" y1={y} x2="200" y2={y} stroke={R.border} strokeWidth="0.5" opacity="0.3" />)}
                    <path d={Array.from({ length: 25 }, (_, i) => { const v = 68 + Math.sin(i * 0.5) * 10 + (i % 7 >= 5 ? 12 : 0); return `${i === 0 ? "M" : "L"}${i * 8},${map(v)}`; }).join(" ")} fill="none" stroke={R.teal} strokeWidth="1.5" />
                    <path d={Array.from({ length: 25 }, (_, i) => { const v = 58 + Math.sin(i * 0.5) * 8 + (i % 7 >= 5 ? 10 : 0); return `${i === 0 ? "M" : "L"}${i * 8},${map(v)}`; }).join(" ")} fill="none" stroke={R.gold} strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
                  </svg>
                );
              })()}
              <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}><div style={{ width: 12, height: 2, background: R.teal, borderRadius: 1 }} /><span style={{ fontSize: 8, color: R.textDim }}>Portfolio</span></div>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}><div style={{ width: 12, height: 2, background: R.gold, borderRadius: 1, opacity: 0.6 }} /><span style={{ fontSize: 8, color: R.textDim }}>Comp set</span></div>
              </div>
            </div>
            <div style={{ padding: "12px 24px 18px", borderTop: `1px solid ${R.border}` }}>
              <div style={{ fontSize: 8, color: R.textDim, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>OCCUPANCY + PICKUP</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 1, height: 44 }}>
                {Array.from({ length: 45 }, (_, i) => {
                  const dow = i % 7;
                  const occ = Math.min(95, Math.round(50 + (dow >= 5 ? 20 : 0) + Math.sin(i * 0.4) * 12 + (i / 45) * 18));
                  const pickup = Math.max(0, Math.min(18, Math.round(4 + Math.sin(i * 0.7) * 4 + (dow >= 5 ? 6 : 0))));
                  const base = occ - pickup;
                  return (
                    <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "stretch", height: `${occ}%` }}>
                      <div style={{ flex: pickup, background: R.teal, borderRadius: "1px 1px 0 0", opacity: 0.9, minHeight: pickup > 0 ? 1 : 0 }} />
                      <div style={{ flex: base, background: R.textDim, opacity: 0.4, minHeight: 1 }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BAND 5: Application ─── */}
      <section style={{ background: R.bg, padding: "96px 0", borderBottom: `1px solid ${R.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 56 }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: R.gold, marginBottom: 16 }}>Application</p>
            <h2 style={{ fontSize: 42, fontWeight: 700, letterSpacing: -1.4, color: R.accent, margin: "0 0 18px", lineHeight: 1.1 }}>Three steps to onboarding</h2>
            <p style={{ fontSize: 14, color: R.textMid, maxWidth: 280, lineHeight: 1.65, margin: 0 }}>We move quickly. Submission to live operation in 30 days for properties that qualify.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {STEPS.map((step, i) => {
              const accent = i === 0 ? R.teal : i === 1 ? R.gold : R.teal;
              return (
                <div key={step.num} style={{ position: "relative", padding: "32px 26px", background: R.card, borderRadius: 12, border: `1px solid ${R.border}`, overflow: "hidden" }}>
                  <div style={{ fontSize: 36, fontWeight: 700, color: accent, letterSpacing: -1, marginBottom: 16, lineHeight: 1 }}>{step.num}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: R.accent, margin: "0 0 10px" }}>{step.title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: R.text, margin: 0 }}>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── BAND 6: CTA ─── */}
      <section style={{ background: R.darkBand, padding: "0", borderBottom: `1px solid ${R.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 64px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, minHeight: 320, alignItems: "center" }}>
          <div style={{ padding: "72px 0" }}>
            <h2 style={{ fontSize: 38, fontWeight: 700, letterSpacing: -1.2, color: R.accent, margin: "0 0 18px", lineHeight: 1.15 }}>{CTA.title}</h2>
            <p style={{ fontSize: 15, color: R.text, margin: "0 0 32px", maxWidth: 460, lineHeight: 1.65 }}>{CTA.body}</p>
            <Link to="/apply" style={{
              background: `linear-gradient(135deg, ${R.teal} 0%, ${R.gold} 100%)`,
              color: "#0F1215", border: "none", padding: "15px 36px", borderRadius: 8, fontWeight: 700, fontSize: 14,
              cursor: "pointer", letterSpacing: 0.3, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none",
            }}>
              {CTA.primary} <ArrowRight size={15} />
            </Link>
          </div>
          <div style={{ padding: "72px 0" }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, color: R.textMid, textTransform: "uppercase", marginBottom: 18 }}>What we look for</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {QUALIFIERS.map((item, i) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "9px 0", fontSize: 14, color: R.text, lineHeight: 1.6 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: i % 2 === 0 ? R.teal : R.gold, marginTop: 8, flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Partners Strip ─── */}
      <section style={{ background: R.darkBand, padding: "44px 0", borderBottom: `1px solid ${R.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 64px" }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: R.textDim, textAlign: "center", marginBottom: 28 }}>Strategic partners</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ opacity: 0.45, display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 22, height: 22, borderRadius: 4, background: R.border, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderBottom: `9px solid ${R.textMid}` }} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: R.text, letterSpacing: 0.5 }}>MEYDAN</span>
              <span style={{ fontSize: 10, fontWeight: 500, color: R.textDim }}>FREE ZONE</span>
            </div>
            <div style={{ opacity: 0.45 }}><span style={{ fontSize: 15, fontWeight: 700, color: R.text, letterSpacing: -0.3 }}>cloud</span><span style={{ fontSize: 15, fontWeight: 700, color: R.teal, letterSpacing: -0.3 }}>beds</span></div>
            <div style={{ opacity: 0.45, display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 20, height: 20, borderRadius: 10, border: `1.5px solid ${R.textMid}`, display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: 8, height: 8, borderRadius: 4, background: R.textMid }} /></div>
              <div><div style={{ fontSize: 11, fontWeight: 700, color: R.text, letterSpacing: 0.3, lineHeight: 1 }}>DUBAI CHAMBER</div><div style={{ fontSize: 8, color: R.textDim, letterSpacing: 0.5, lineHeight: 1 }}>OF COMMERCE</div></div>
            </div>
            <div style={{ opacity: 0.45 }}><span style={{ fontSize: 14, fontWeight: 800, color: R.text, letterSpacing: 1 }}>ATM</span><span style={{ fontSize: 9, color: R.textDim, marginLeft: 5, fontWeight: 500, letterSpacing: 0.3 }}>Arabian Travel Market</span></div>
            <div style={{ opacity: 0.45 }}><span style={{ fontSize: 16, fontWeight: 700, color: R.text, letterSpacing: -0.3 }}>mews</span></div>
            <div style={{ opacity: 0.45, display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ color: R.teal, fontSize: 16, fontWeight: 200 }}>(</span>
              <span style={{ fontSize: 10, fontWeight: 700, color: R.text, letterSpacing: 1.2 }}>MARKET PULSE</span>
              <span style={{ color: R.teal, fontSize: 16, fontWeight: 200 }}>)</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
