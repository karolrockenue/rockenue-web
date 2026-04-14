import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { R } from "../theme";
import { STEPS, QUALIFIERS, FORM_FIELDS } from "../content";

function FormField({ label, placeholder, half }: { label: string; placeholder: string; half: boolean }) {
  return (
    <div style={{ gridColumn: half ? "span 1" : "span 2" }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: R.text, marginBottom: 6, letterSpacing: 0.3 }}>{label}</div>
      <div style={{ background: R.heroBg, border: `1px solid ${R.border}`, borderRadius: 8, padding: "12px 14px", fontSize: 13, color: R.textDim }}>
        {placeholder || label}
      </div>
    </div>
  );
}

export function ApplyPage() {
  const [formMode, setFormMode] = useState<"apply" | "enquiry">("apply");

  return (
    <section style={{ background: R.heroBg, borderBottom: `1px solid ${R.border}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "calc(100vh - 70px)" }}>
        {/* Left — messaging */}
        <div style={{ padding: "80px 48px 80px 64px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: `1px solid ${R.border}` }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, color: R.gold, textTransform: "uppercase", marginBottom: 24 }}>Apply for management</div>
          <h1 style={{ fontSize: 44, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.5, color: R.accent, margin: "0 0 24px" }}>
            We work with hotels ready for{" "}
            <span style={{ background: `linear-gradient(135deg, ${R.teal} 0%, ${R.gold} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              the next level.
            </span>
          </h1>
          <p style={{ fontSize: 15, color: R.text, lineHeight: 1.7, maxWidth: 440, margin: "0 0 40px" }}>
            Independent properties with ambition. If your hotel meets our criteria, we move fast — submission to live operation in 30 days.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
            {STEPS.map((step, i) => {
              const accent = i === 0 ? R.teal : i === 1 ? R.gold : R.teal;
              return (
                <div key={step.num} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ fontSize: 24, fontWeight: 700, color: accent, lineHeight: 1, width: 28, flexShrink: 0 }}>{step.num}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: R.accent, marginBottom: 2 }}>{step.title}</div>
                    <div style={{ fontSize: 13, color: R.textMid, lineHeight: 1.5 }}>{step.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: R.textDim, textTransform: "uppercase", marginBottom: 12 }}>Criteria</div>
          {QUALIFIERS.map((q, i) => (
            <div key={q} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "6px 0" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: i % 2 === 0 ? R.teal : R.gold, marginTop: 6, flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: R.text, lineHeight: 1.5 }}>{q}</span>
            </div>
          ))}
        </div>

        {/* Right — form */}
        <div style={{ padding: "80px 64px 80px 48px", display: "flex", alignItems: "center" }}>
          <div style={{ width: "100%" }}>
            <div style={{ background: R.card, border: `1px solid ${R.border}`, borderRadius: 14, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                {([["apply", "Apply for management"], ["enquiry", "General enquiry"]] as const).map(([key, label]) => {
                  const active = formMode === key;
                  return (
                    <button key={key} onClick={() => setFormMode(key)} style={{
                      padding: "16px 16px", fontSize: 13, fontWeight: 600, letterSpacing: 0.2,
                      background: active ? "transparent" : "rgba(0,0,0,0.15)",
                      color: active ? R.accent : R.textDim,
                      border: "none", borderBottom: active ? `2px solid ${R.teal}` : `1px solid ${R.border}`,
                      cursor: "pointer",
                    }}>
                      {label}
                    </button>
                  );
                })}
              </div>
              <div style={{ padding: "28px 32px 36px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "grid" }}>
                  <div style={{ gridArea: "1 / 1", display: "flex", flexDirection: "column", visibility: formMode === "apply" ? "visible" : "hidden", pointerEvents: formMode === "apply" ? "auto" : "none" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
                      {FORM_FIELDS.map((f) => <FormField key={f.label} {...f} />)}
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: R.text, marginBottom: 6, letterSpacing: 0.3 }}>Tell us about your goals</div>
                      <div style={{ background: R.heroBg, border: `1px solid ${R.border}`, borderRadius: 8, padding: "12px 14px", fontSize: 13, color: R.textDim, height: 72 }}>What are you looking to achieve?</div>
                    </div>
                    <button style={{ background: R.teal, color: "#0F1215", border: "none", width: "100%", padding: "15px 32px", borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                      Submit application <ArrowRight size={15} />
                    </button>
                    <div style={{ textAlign: "center", marginTop: 14 }}><span style={{ fontSize: 12, color: R.textDim }}>Response within 5 business days</span></div>
                  </div>
                  <div style={{ gridArea: "1 / 1", display: "flex", flexDirection: "column", visibility: formMode === "enquiry" ? "visible" : "hidden", pointerEvents: formMode === "enquiry" ? "auto" : "none" }}>
                    <p style={{ fontSize: 14, color: R.text, lineHeight: 1.7, margin: "0 0 24px" }}>Questions about our services, a specific market, or how we work with independent hotels? We're happy to talk — no commitment required.</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
                      <FormField label="Your name" placeholder="" half={true} />
                      <FormField label="Email address" placeholder="" half={true} />
                      <FormField label="Company / Hotel (optional)" placeholder="" half={true} />
                      <FormField label="Phone (optional)" placeholder="" half={true} />
                    </div>
                    <div style={{ flex: 1, marginBottom: 24, display: "flex", flexDirection: "column" }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: R.text, marginBottom: 6, letterSpacing: 0.3 }}>Message</div>
                      <div style={{ background: R.heroBg, border: `1px solid ${R.border}`, borderRadius: 8, padding: "12px 14px", fontSize: 13, color: R.textDim, flex: 1 }}>How can we help?</div>
                    </div>
                    <button style={{ background: R.teal, color: "#0F1215", border: "none", width: "100%", padding: "15px 32px", borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                      Send message <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
