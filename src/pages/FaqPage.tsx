import { Link } from "react-router-dom";
import { R, heading } from "../theme";
import { FAQ } from "../content";
import { useIsMobile } from "../hooks/useIsMobile";

const TOTAL = FAQ.reduce((n, g) => n + g.items.length, 0);

export function FaqPage() {
  const m = useIsMobile();

  return (
    <>
      {/* ─── Hero ─── */}
      <section style={{ background: R.heroBg, borderBottom: `1px solid ${R.border}`, padding: m ? "56px 24px 44px" : "80px 64px 56px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: R.gold, marginBottom: 18 }}>
            Frequently asked questions
          </div>
          <h1 style={{ ...heading(m ? 30 : 46), margin: "0 0 16px", maxWidth: 820 }}>
            Everything you need to know about working with Rockenue.
          </h1>
          <p style={{ fontSize: 15, color: R.text, lineHeight: 1.7, maxWidth: 620, margin: 0 }}>
            How we work with independent hotels — services, onboarding, technology, markets, and
            commercials. Can't find your answer?{" "}
            <Link to="/contact" style={{ color: R.teal, textDecoration: "none" }}>Talk to us</Link>.
          </p>
        </div>
      </section>

      {/* ─── Body ─── */}
      <section style={{ background: R.bg }}>
        <div
          style={{
            maxWidth: 1100, margin: "0 auto", padding: m ? "40px 24px 72px" : "56px 64px 96px",
            display: "grid", gridTemplateColumns: m ? "1fr" : "240px 1fr", gap: m ? 28 : 48,
          }}
        >
          {/* Category nav */}
          {!m && (
            <nav style={{ position: "sticky", top: 24, alignSelf: "start" }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: R.textDim, marginBottom: 14 }}>
                Categories · {TOTAL} questions
              </div>
              {FAQ.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  style={{ display: "block", fontSize: 13.5, color: R.textMid, padding: "7px 0 7px 12px", borderLeft: `2px solid transparent`, textDecoration: "none" }}
                >
                  {g.category}
                </a>
              ))}
            </nav>
          )}

          {/* Q&A */}
          <main>
            {FAQ.map((g, gi) => (
              <section key={g.id} id={g.id} style={{ marginBottom: 48, scrollMarginTop: 24 }}>
                <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: gi % 2 === 0 ? R.teal : R.gold, margin: "0 0 20px", paddingBottom: 12, borderBottom: `1px solid ${R.border}` }}>
                  {g.category} <span style={{ fontSize: 12, color: R.textDim, fontWeight: 500 }}>· {g.items.length}</span>
                </h2>
                {g.items.map((it) => (
                  <div key={it.q} style={{ marginBottom: 24 }}>
                    <h3 style={{ fontSize: 16.5, fontWeight: 600, color: R.accent, margin: "0 0 8px", lineHeight: 1.4 }}>{it.q}</h3>
                    <p style={{ fontSize: 14.5, color: R.text, lineHeight: 1.75, margin: 0 }}>{it.a}</p>
                  </div>
                ))}
              </section>
            ))}

            {/* CTA */}
            <div style={{ marginTop: 8, padding: m ? "28px 24px" : "32px 36px", background: R.card, border: `1px solid ${R.border}`, borderRadius: 12 }}>
              <h2 style={{ ...heading(m ? 22 : 26), margin: "0 0 10px" }}>Still have a question?</h2>
              <p style={{ fontSize: 14, color: R.textMid, lineHeight: 1.65, margin: "0 0 20px", maxWidth: 460 }}>
                Tell us about your property and what you want to achieve. We respond within 5 business days.
              </p>
              <Link to="/contact" style={{ background: R.teal, color: "#0F1215", border: `1px solid ${R.teal}`, padding: "13px 28px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none", display: "inline-block" }}>
                Contact us
              </Link>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
