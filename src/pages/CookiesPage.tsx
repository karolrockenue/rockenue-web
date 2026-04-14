import { R } from "../theme";
import { useIsMobile } from "../hooks/useIsMobile";

export function CookiesPage() {
  const m = useIsMobile();

  return (
    <section style={{ background: R.heroBg, padding: m ? "56px 0 64px" : "80px 0 96px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: m ? "0 24px" : "0 64px" }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, color: R.gold, textTransform: "uppercase", marginBottom: 20 }}>Legal</div>
        <h1 style={{ fontSize: m ? 28 : 36, fontWeight: 700, letterSpacing: -1.2, color: R.accent, margin: "0 0 12px" }}>Cookie Policy</h1>
        <p style={{ fontSize: 13, color: R.textDim, margin: "0 0 48px" }}>Last updated: April 2026</p>

        {([
          { title: "1. What are cookies", body: "Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you use it. Cookies can be \"session\" (deleted when you close your browser) or \"persistent\" (remain until they expire or you delete them)." },
          { title: "2. Cookies we use", body: "Essential cookies: Required for the website to function. These cannot be disabled. They handle basic functions like page navigation and access to secure areas.\n\nAnalytics cookies: Help us understand how visitors use the site — which pages are visited, how long sessions last, and where visitors come from. This data is aggregated and anonymous.\n\nFunctional cookies: Remember your preferences (such as language or region) to provide a more personalised experience." },
          { title: "3. Third-party cookies", body: "We may use third-party services (such as analytics providers) that set their own cookies. We do not control these cookies. Refer to the relevant third-party privacy policies for more information." },
          { title: "4. Managing cookies", body: "You can control and delete cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing ones. Note that disabling cookies may affect the functionality of some parts of the website." },
          { title: "5. Changes to this policy", body: "We may update this cookie policy from time to time. Changes will be posted on this page with an updated revision date." },
          { title: "6. Contact", body: "For questions about our use of cookies, contact info@rockenue.com." },
        ] as const).map((section) => (
          <div key={section.title} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: R.accent, margin: "0 0 10px" }}>{section.title}</h2>
            <p style={{ fontSize: 14, color: R.text, lineHeight: 1.75, margin: 0, whiteSpace: "pre-line" }}>{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
