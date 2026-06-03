import { useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { R, heading } from "../theme";
import { OFFICES, QUALIFIERS } from "../content";
import { useIsMobile } from "../hooks/useIsMobile";

// Web3Forms access key (https://web3forms.com) — submissions are emailed to
// the address this key is registered to (karol@rockenue.com).
const WEB3FORMS_ACCESS_KEY = "7ec344de-4d93-4b2d-b1ee-5eb22c9d9f4d";

type Status = "idle" | "sending" | "ok" | "error";

const labelStyle: CSSProperties = { fontSize: 11, fontWeight: 600, color: R.text, marginBottom: 6, letterSpacing: 0.3, display: "block" };
const fieldStyle: CSSProperties = {
  width: "100%", background: R.heroBg, border: `1px solid ${R.border}`, borderRadius: 8,
  padding: "12px 14px", fontSize: 13, color: R.accent, fontFamily: "inherit", outline: "none",
};

function Field({ label, name, type = "text", required = false, placeholder, half, isMobile }: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string; half?: boolean; isMobile: boolean;
}) {
  return (
    <div style={{ gridColumn: half && !isMobile ? "span 1" : "span 2" }}>
      <label style={labelStyle}>{label}{required && <span style={{ color: R.teal }}> *</span>}</label>
      <input name={name} type={type} required={required} placeholder={placeholder}
        style={fieldStyle}
        onFocus={(e) => (e.currentTarget.style.borderColor = R.teal)}
        onBlur={(e) => (e.currentTarget.style.borderColor = R.border)} />
    </div>
  );
}

function TextArea({ label, name, required, placeholder }: { label: string; name: string; required?: boolean; placeholder?: string }) {
  return (
    <div style={{ gridColumn: "span 2" }}>
      <label style={labelStyle}>{label}{required && <span style={{ color: R.teal }}> *</span>}</label>
      <textarea name={name} required={required} placeholder={placeholder} rows={4}
        style={{ ...fieldStyle, resize: "vertical", minHeight: 84 }}
        onFocus={(e) => (e.currentTarget.style.borderColor = R.teal)}
        onBlur={(e) => (e.currentTarget.style.borderColor = R.border)} />
    </div>
  );
}

function SubmittedState({ onReset }: { onReset: () => void }) {
  return (
    <div style={{ textAlign: "center", padding: "32px 8px" }}>
      <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(56,198,186,0.12)", border: `1px solid ${R.teal}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
        <Check size={24} color={R.teal} />
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: R.accent, margin: "0 0 10px" }}>Thank you — message received.</h3>
      <p style={{ fontSize: 14, color: R.textMid, lineHeight: 1.6, margin: "0 0 20px", maxWidth: 360, marginInline: "auto" }}>
        We'll review your enquiry and respond within 5 business days.
      </p>
      <button onClick={onReset} style={{ background: "transparent", color: R.text, border: `1px solid ${R.border}`, padding: "10px 20px", borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
        Send another
      </button>
    </div>
  );
}

export function ContactPage() {
  const [formMode, setFormMode] = useState<"apply" | "enquiry">("enquiry");
  const [status, setStatus] = useState<Status>("idle");
  const m = useIsMobile();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", formMode === "apply" ? "New management application — rockenue.com" : "New enquiry — rockenue.com");
    data.append("from_name", "Rockenue website");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) { setStatus("ok"); form.reset(); } else { setStatus("error"); }
    } catch { setStatus("error"); }
  }

  function switchMode(mode: "apply" | "enquiry") { setFormMode(mode); setStatus("idle"); }

  const submitBtn = (label: string) => (
    <button type="submit" disabled={status === "sending"}
      style={{ background: R.teal, color: "#0F1215", border: "none", width: "100%", padding: "15px 32px", borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: status === "sending" ? "default" : "pointer", opacity: status === "sending" ? 0.7 : 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "inherit" }}>
      {status === "sending" ? "Sending…" : <>{label} <ArrowRight size={15} /></>}
    </button>
  );

  return (
    <section style={{ background: R.heroBg, borderBottom: `1px solid ${R.border}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", minHeight: m ? "auto" : "calc(100vh - 70px)" }}>

        {/* Left — messaging */}
        <div style={{ padding: m ? "56px 24px 40px" : "80px 48px 80px 64px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: m ? "none" : `1px solid ${R.border}` }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, color: R.gold, textTransform: "uppercase", marginBottom: 24 }}>Get in touch</div>
          <h1 style={{ ...heading(m ? 30 : 44), margin: "0 0 24px" }}>
            We work with hotels ready for{" "}
            <span style={{ background: `linear-gradient(135deg, ${R.teal} 0%, ${R.gold} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              the next level.
            </span>
          </h1>
          <p style={{ fontSize: 15, color: R.text, lineHeight: 1.7, maxWidth: 440, margin: "0 0 32px" }}>
            Independent properties with ambition. If your hotel meets our criteria, we move fast — submission to live operation in 30 days.
          </p>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: R.textDim, textTransform: "uppercase", marginBottom: 12 }}>Criteria</div>
          {QUALIFIERS.map((q, i) => (
            <div key={q} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "6px 0" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: i % 2 === 0 ? R.teal : R.gold, marginTop: 6, flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: R.text, lineHeight: 1.5 }}>{q}</span>
            </div>
          ))}
          <div style={{ height: 1, background: R.border, margin: "32px 0" }} />
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: R.textDim, textTransform: "uppercase", marginBottom: 12 }}>Headquarters</div>
          <div style={{ fontSize: 13, color: R.text, lineHeight: 1.7, whiteSpace: "pre-line" }}>{OFFICES[0].line}</div>
        </div>

        {/* Right — form */}
        <div style={{ padding: m ? "0 24px 56px" : "80px 64px 80px 48px", display: "flex", alignItems: "center" }}>
          <div style={{ width: "100%" }}>
            <div style={{ background: R.card, border: `1px solid ${R.border}`, borderRadius: 14, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                {([["enquiry", "General enquiry"], ["apply", "Apply for management"]] as const).map(([key, label]) => {
                  const active = formMode === key;
                  return (
                    <button key={key} onClick={() => switchMode(key)} style={{
                      padding: m ? "14px 12px" : "16px 16px", fontSize: m ? 12 : 13, fontWeight: 600, letterSpacing: 0.2,
                      background: active ? "transparent" : "rgba(0,0,0,0.15)", color: active ? R.accent : R.textDim,
                      border: "none", borderBottom: active ? `2px solid ${R.teal}` : `1px solid ${R.border}`, cursor: "pointer", fontFamily: "inherit",
                    }}>
                      {label}
                    </button>
                  );
                })}
              </div>

              <div style={{ padding: m ? "20px 20px 28px" : "28px 32px 36px" }}>
                {status === "ok" ? (
                  <SubmittedState onReset={() => setStatus("idle")} />
                ) : formMode === "apply" ? (
                  <form onSubmit={handleSubmit}>
                    <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
                    <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: 14, marginBottom: 16 }}>
                      <Field label="Property name" name="Property name" required placeholder="e.g. The Kensington Hotel" isMobile={m} />
                      <Field label="City / Location" name="Location" required half placeholder="e.g. London, UK" isMobile={m} />
                      <Field label="Number of rooms" name="Rooms" half placeholder="e.g. 45" isMobile={m} />
                      <Field label="Current PMS" name="PMS" half placeholder="e.g. Cloudbeds, Mews" isMobile={m} />
                      <Field label="Your name" name="Name" required half isMobile={m} />
                      <Field label="Email address" name="Email" type="email" required half isMobile={m} />
                      <Field label="Phone" name="Phone" type="tel" half isMobile={m} />
                      <TextArea label="Tell us about your goals" name="Message" placeholder="What are you looking to achieve?" />
                    </div>
                    {submitBtn("Submit application")}
                    {status === "error" && <ErrorLine />}
                    <div style={{ textAlign: "center", marginTop: 14 }}><span style={{ fontSize: 12, color: R.textDim }}>Response within 5 business days</span></div>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
                    <p style={{ fontSize: 14, color: R.text, lineHeight: 1.7, margin: "0 0 20px" }}>
                      Questions about our services, a specific market, or how we work with independent hotels? We're happy to talk — no commitment required.
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: 14, marginBottom: 16 }}>
                      <Field label="Your name" name="Name" required half isMobile={m} />
                      <Field label="Email address" name="Email" type="email" required half isMobile={m} />
                      <Field label="Company / Hotel (optional)" name="Company" half isMobile={m} />
                      <Field label="Phone (optional)" name="Phone" type="tel" half isMobile={m} />
                      <TextArea label="Message" name="Message" required placeholder="How can we help?" />
                    </div>
                    {submitBtn("Send message")}
                    {status === "error" && <ErrorLine />}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function ErrorLine() {
  return (
    <p style={{ fontSize: 13, color: "#E5705A", margin: "14px 0 0", textAlign: "center" }}>
      Something went wrong. Please try again, or email{" "}
      <a href="mailto:info@rockenue.com" style={{ color: R.teal, textDecoration: "none" }}>info@rockenue.com</a>.
    </p>
  );
}
