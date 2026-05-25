import { R, heading } from "../theme";
import { useIsMobile } from "../hooks/useIsMobile";

const MUTED = "#8A9099";

export function ContactPage() {
  const m = useIsMobile();

  return (
    <section style={{ background: R.heroBg, flex: 1, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", minHeight: m ? "auto" : "calc(100vh - 73px)", padding: m ? "80px 24px" : "140px 24px" }}>
      <div style={{ maxWidth: 680 }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: R.teal, marginBottom: 40 }}>
          Contact
        </div>
        <h1 style={{ ...heading("clamp(40px, 7vw, 68px)"), lineHeight: 1.05, margin: "0 0 32px" }}>
          Let's talk.
        </h1>
        <p style={{ fontSize: "clamp(16px, 2.4vw, 19px)", fontWeight: 300, lineHeight: 1.6, color: MUTED, margin: "0 auto", maxWidth: 500 }}>
          Exploring management, selling a property, or after bespoke market intelligence? Reach us directly.
        </p>

        <a
          href="mailto:info@rockenue.com"
          style={{ display: "inline-block", margin: "96px 0 14px", fontSize: "clamp(24px, 4.5vw, 40px)", fontWeight: 300, letterSpacing: "-0.01em", textDecoration: "none", background: `linear-gradient(135deg, ${R.teal} 0%, ${R.gold} 100%)`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          info@rockenue.com
        </a>
        <div style={{ fontSize: 13, color: R.textMid }}>We respond within 2 business days.</div>

        <div style={{ marginTop: m ? 72 : 120 }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: R.textDim, marginBottom: 12 }}>
            Headquarters
          </div>
          <div style={{ fontSize: 14, color: R.text, lineHeight: 1.8, whiteSpace: "pre-line" }}>
            {"Dubai, United Arab Emirates\nNad Al Sheba 1"}
          </div>
        </div>
      </div>
    </section>
  );
}
