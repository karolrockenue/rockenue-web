import { R, heading } from "../theme";
import { useIsMobile } from "../hooks/useIsMobile";

const MUTED = "#8A9099";

const TIMELINE = [
  { color: R.teal, year: "Jan 2022 · London", title: "Founded", desc: "Set out to build the infrastructure independent hotels were missing — systems, deals, and data." },
  { color: R.gold, year: "2023", title: "Our own technology", desc: "Built a proprietary stack from scratch — AI pricing on dedicated hardware and a live market-intelligence layer." },
  { color: R.teal, year: "2024", title: "50 hotels", desc: "The network crosses 50 properties as autonomous pricing and distribution roll out across every hotel." },
  { color: R.gold, year: "Jan 2025 · Dubai", title: "HQ moves to Dubai", desc: "The network's headquarters relocate to Dubai, consolidating operations in the UAE." },
  { color: R.teal, year: "2026 · Nordics", title: "Into the Nordics", desc: "Expansion into the Nordic markets, bringing the network's full infrastructure to a new region." },
];

const TEAM = [
  { img: "/team/karol.jpg", name: "Karol Zymek", role: "Founder & CEO", bio: "Former Head of Revenue at OYO; previously at Agoda. 20 years in hospitality revenue management." },
  { img: "/team/magnus.jpg", name: "Magnús Magnússon", role: "Head of Nordics", bio: "Former Country Manager at Booking.com, Nordics (9 years, €150M+ revenue)." },
  { img: "/team/sunny.jpg", name: "Sunny Singh", role: "Advisor", bio: "Cloudbeds, ex-Keytel, ex-OYO UK. Hospitality sales and partnerships." },
  { img: "/team/ruslana.jpg", name: "Ruslana Doroshchuk", role: "Director of Operations", bio: "Former Hyatt and InterContinental. 10+ years in hospitality operations." },
  { img: "/team/zeynep.jpg", name: "Zeynep Taskin", role: "Market Expansion", bio: "Former Duetto and Amazon. King's College London." },
  { img: "/team/hannah.jpg", name: "Hannah Cuevas", role: "Account Management Lead", bio: "Manages client relationships and day-to-day operations across the portfolio." },
];

export function AboutPage() {
  const m = useIsMobile();

  return (
    <section style={{ background: R.heroBg, borderBottom: `1px solid ${R.border}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: m ? "64px 24px" : "112px 64px" }}>

        {/* ─── Intro ─── */}
        <div style={{ marginBottom: m ? 72 : 128 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: R.gold, marginBottom: 18 }}>
            About Us
          </div>
          <h1 style={{ ...heading("clamp(32px, 5vw, 52px)"), margin: "0 0 22px", maxWidth: 900 }}>
            From one idea in 2021 to a network of{" "}
            <span style={{ background: `linear-gradient(135deg, ${R.teal} 0%, ${R.gold} 100%)`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              60 hotels.
            </span>
          </h1>
          <p style={{ fontSize: "clamp(15px, 2.2vw, 19px)", fontWeight: 300, lineHeight: 1.6, color: MUTED, margin: 0, maxWidth: 880 }}>
            We started because independent hotels were being outcompeted on infrastructure — not on quality. Chains had better systems, better deals, and more data, and the gap only widened as they scaled. We built what was missing and made it available to hotels that would otherwise go without — the pricing, distribution, and market intelligence of a major group, without the loss of identity that comes with joining one. Today that same infrastructure runs quietly behind every hotel in the network.
          </p>
        </div>

        {/* ─── Timeline ─── */}
        <div style={{ display: "grid", gridTemplateColumns: m ? "1fr 1fr" : "repeat(5, 1fr)", rowGap: 32, marginBottom: m ? 56 : 84 }}>
          {TIMELINE.map((ev) => (
            <div key={ev.title} style={{ position: "relative", paddingRight: 22, borderTop: `1px solid ${R.border}` }}>
              <div style={{ position: "absolute", left: 0, top: -6, width: 11, height: 11, borderRadius: "50%", background: ev.color }} />
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.4, color: ev.color, margin: "22px 0 6px" }}>{ev.year}</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: R.accent, marginBottom: 6 }}>{ev.title}</div>
              <div style={{ fontSize: 12.5, lineHeight: 1.55, color: R.textMid }}>{ev.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: R.border, margin: m ? "56px 0" : "96px 0" }} />

        {/* ─── Leadership ─── */}
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: R.teal, marginBottom: 18 }}>
          Leadership
        </div>
        <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)", gap: m ? 44 : "56px 32px" }}>
          {TEAM.map((p) => (
            <div key={p.name} style={{ textAlign: "center" }}>
              <img
                src={p.img}
                alt={p.name}
                style={{ width: 140, height: 140, borderRadius: "50%", objectFit: "cover", objectPosition: "center top", background: R.card, display: "block", margin: "0 auto 20px" }}
              />
              <div style={{ fontSize: 17, fontWeight: 600, color: R.accent }}>{p.name}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: R.teal, margin: "4px 0 12px" }}>{p.role}</div>
              <div style={{ fontSize: 13, lineHeight: 1.6, color: R.textMid, maxWidth: 300, margin: "0 auto" }}>{p.bio}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
