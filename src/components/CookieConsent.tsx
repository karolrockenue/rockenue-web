import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { R } from "../theme";
import { useIsMobile } from "../hooks/useIsMobile";

const COOKIE = "cookie_consent";

function setConsentCookie(value: "granted" | "denied") {
  const oneYear = 365 * 24 * 60 * 60;
  document.cookie = `${COOKIE}=${value}; Max-Age=${oneYear}; Path=/; SameSite=Lax`;
}

function getConsentCookie(): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE}=([^;]*)`));
  return match ? match[1] : null;
}

// Updates Google Consent Mode (gtag is loaded in index.html with analytics
// denied by default). Safe no-op if gtag hasn't loaded.
function updateConsent(granted: boolean) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", { analytics_storage: granted ? "granted" : "denied" });
  }
}

export function CookieConsent() {
  const m = useIsMobile();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = getConsentCookie();
    if (choice === "granted") {
      updateConsent(true); // re-grant for returning visitors (default resets to denied each load)
    } else if (choice !== "denied") {
      setVisible(true); // no prior choice — prompt
    }
    // Footer "Cookie Settings" link reopens the banner.
    const reopen = () => setVisible(true);
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  if (!visible) return null;

  const accept = () => { setConsentCookie("granted"); updateConsent(true); setVisible(false); };
  const decline = () => { setConsentCookie("denied"); updateConsent(false); setVisible(false); };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: "fixed", left: m ? 12 : 20, right: m ? 12 : 20, bottom: m ? 12 : 20,
        maxWidth: 720, margin: "0 auto", zIndex: 100,
        background: R.card, border: `1px solid ${R.border}`, borderRadius: 12,
        boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
        padding: m ? "16px 18px" : "18px 22px",
        display: "flex", flexDirection: m ? "column" : "row",
        alignItems: m ? "stretch" : "center", gap: m ? 14 : 20,
      }}
    >
      <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: R.text, flex: 1 }}>
        We use cookies to understand how visitors use this site (Google Analytics). Analytics
        cookies are only set if you accept.{" "}
        <Link to="/cookies" style={{ color: R.teal, textDecoration: "none" }}>Cookie Policy</Link>.
      </p>
      <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            background: "transparent", color: R.text, border: `1px solid ${R.border}`,
            padding: "10px 18px", borderRadius: 8, fontWeight: 600, fontSize: 13,
            cursor: "pointer", fontFamily: "inherit", flex: m ? 1 : undefined,
          }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          style={{
            background: R.teal, color: "#0F1215", border: `1px solid ${R.teal}`,
            padding: "10px 20px", borderRadius: 8, fontWeight: 700, fontSize: 13,
            cursor: "pointer", fontFamily: "inherit", flex: m ? 1 : undefined,
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
