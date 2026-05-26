import { R, heading } from "../theme";
import { useIsMobile } from "../hooks/useIsMobile";

const MUTED = "#8A9099";

const FEATURES_MP = [
  "Competitor and OTA rate monitoring",
  "Forward demand modelling with event signals",
  "Comp-set benchmarking up to 90 days out",
  "Bespoke market reports on request",
];

const FEATURES_DB = [
  "Mobile-first guest checkout",
  "Multi-currency and multi-language",
  "Cloudbeds and Mews integrations",
  "Real-time inventory and rate parity",
];

function Wordmark({ text, accent }: { text: string; accent: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "baseline", gap: 8, fontSize: 13, fontWeight: 700, letterSpacing: 2, color: R.accent, textTransform: "uppercase", marginBottom: 28 }}>
      <span style={{ color: accent, fontWeight: 300, fontSize: 22, lineHeight: 1 }}>(</span>
      {text}
      <span style={{ color: accent, fontWeight: 300, fontSize: 22, lineHeight: 1 }}>)</span>
    </div>
  );
}

function FeatureList({ items, accent }: { items: string[]; accent: string }) {
  return (
    <ul style={{ listStyle: "none", margin: "0 0 36px", padding: 0, maxWidth: 480 }}>
      {items.map((f, i) => (
        <li key={f} style={{
          display: "flex", alignItems: "flex-start", gap: 12,
          padding: i === 0 ? "0 0 8px" : "8px 0",
          borderTop: i === 0 ? "none" : `1px solid ${R.border}`,
          fontSize: 13.5, color: R.text, lineHeight: 1.55,
        }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: accent, flexShrink: 0, marginTop: 8 }} />
          {f}
        </li>
      ))}
    </ul>
  );
}

export function TechnologyPage() {
  const m = useIsMobile();

  return (
    <>
      {/* ─── Intro ─── */}
      <section style={{ background: R.heroBg, borderBottom: `1px solid ${R.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: m ? "56px 24px 40px" : "88px 64px 72px", textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, color: R.gold, textTransform: "uppercase", marginBottom: 22 }}>
            Platforms
          </div>
          <h1 style={{ ...heading("clamp(32px, 5vw, 52px)"), margin: "0 auto 22px", maxWidth: 900 }}>Our technology.</h1>
          <p style={{ fontSize: "clamp(15px, 2.2vw, 19px)", fontWeight: 300, lineHeight: 1.6, color: MUTED, margin: "0 auto", maxWidth: 620 }}>
            Market intelligence and direct bookings.
          </p>
        </div>
      </section>

      {/* ─── Split: two products ─── */}
      <section style={{ borderBottom: `1px solid ${R.border}` }}>
        <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", minHeight: m ? "auto" : "70vh" }}>

          {/* Market Pulse (left, teal) */}
          <div style={{
            background: R.heroBg,
            borderRight: m ? "none" : `1px solid ${R.border}`,
            borderBottom: m ? `1px solid ${R.border}` : "none",
            padding: m ? "56px 24px" : "80px 64px",
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
          }}>
            <div style={{ width: "100%", maxWidth: 540 }}>
              <div style={{ width: 56, height: 2, borderRadius: 1, marginBottom: 32, background: R.teal }} />
              <Wordmark text="MARKET PULSE" accent={R.teal} />
              <h2 style={{ ...heading("clamp(34px, 4.4vw, 48px)"), lineHeight: 1.05, margin: "0 0 18px" }}>Market Pulse</h2>
              <div style={{ fontSize: 17, fontWeight: 500, lineHeight: 1.4, margin: "0 0 24px", color: R.teal }}>
                Market intelligence platform.
              </div>
              <p style={{ fontSize: 14.5, fontWeight: 300, lineHeight: 1.7, color: R.text, margin: "0 0 28px", maxWidth: 480 }}>
                Aggregates competitor rates, OTA signals, event calendars, and flight-search data into a single forward-looking view. Runs on dedicated GPU infrastructure; the dataset grows with every signal collected.
              </p>
              <FeatureList items={FEATURES_MP} accent={R.teal} />
              <a
                href="https://www.market-pulse.io"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 8, fontWeight: 700, fontSize: 14, letterSpacing: 0.2, background: R.teal, color: "#0F1215", textDecoration: "none" }}
              >
                Visit Market Pulse →
              </a>
              <div style={{ marginTop: 14, fontSize: 12, color: R.textDim }}>market-pulse.io</div>
            </div>
          </div>

          {/* Direct Booking (right, gold) */}
          <div style={{
            background: R.darkBand,
            padding: m ? "56px 24px" : "80px 64px",
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
          }}>
            <div style={{ width: "100%", maxWidth: 540 }}>
              <div style={{ width: 56, height: 2, borderRadius: 1, marginBottom: 32, background: R.gold }} />
              <Wordmark text="DIRECT BOOKING" accent={R.gold} />
              <h2 style={{ ...heading("clamp(34px, 4.4vw, 48px)"), lineHeight: 1.05, margin: "0 0 18px" }}>Direct Booking Platform</h2>
              <div style={{ fontSize: 17, fontWeight: 500, lineHeight: 1.4, margin: "0 0 24px", color: R.gold }}>
                Hosts direct bookings for hotels in the network.
              </div>
              <p style={{ fontSize: 14.5, fontWeight: 300, lineHeight: 1.7, color: R.text, margin: "0 0 28px", maxWidth: 480 }}>
                Mobile-first checkout, integrated with the channel manager and PMS so direct reservations land in the same operational stack as OTA bookings. Multi-currency and multi-language across every property.
              </p>
              <FeatureList items={FEATURES_DB} accent={R.gold} />
              <a
                href="https://tech.rockenue.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 8, fontWeight: 700, fontSize: 14, letterSpacing: 0.2, background: R.gold, color: "#0F1215", textDecoration: "none" }}
              >
                Visit Direct Booking →
              </a>
              <div style={{ marginTop: 14, fontSize: 12, color: R.textDim }}>tech.rockenue.com</div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
