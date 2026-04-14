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

        <Section title="1. What Are Cookies">
          <P>Cookies are small text files placed on your device (computer, tablet, or mobile phone) when you visit a website. They allow the website to recognise your device and remember information about your visit, such as your preferences and actions. Cookies can be "session cookies" (deleted when you close your browser) or "persistent cookies" (remain on your device until they expire or you delete them).</P>
        </Section>

        <Section title="2. How We Use Cookies">
          <P>We use cookies and similar tracking technologies to ensure the proper functioning of our website, to understand how visitors interact with our content, and to improve your browsing experience.</P>
        </Section>

        <Section title="3. Cookie Consent">
          <P>In accordance with applicable data protection laws, including the UK GDPR and the EU ePrivacy Directive, we obtain your consent before placing non-essential cookies on your device. When you first visit our website, a cookie consent banner will allow you to:</P>
          <Ul items={[
            "Accept all cookies: Consent to all categories of cookies described below",
            "Manage preferences: Choose which categories of non-essential cookies to allow",
            "Reject non-essential cookies: Only strictly necessary cookies will be set",
          ]} />
          <P>You may change your cookie preferences at any time by clicking the "Cookie Settings" link in the footer of our website. Withdrawing consent does not affect the lawfulness of processing carried out before withdrawal.</P>
        </Section>

        <Section title="4. Categories of Cookies We Use">
          <Sub>Strictly Necessary Cookies</Sub>
          <P>These cookies are essential for the website to function and cannot be disabled. They do not store any personally identifiable information.</P>
          <CookieTable rows={[
            { cookie: "cookie_consent", provider: "rockenue.com", purpose: "Stores your cookie consent preferences", duration: "12 months" },
            { cookie: "__cf_bm", provider: "Cloudflare", purpose: "Bot protection and security", duration: "30 minutes" },
          ]} />

          <Sub>Analytics Cookies</Sub>
          <P>These cookies help us understand how visitors use our website by collecting and reporting information anonymously. They are only set with your consent.</P>
          <CookieTable rows={[
            { cookie: "_ga", provider: "Google Analytics", purpose: "Distinguishes unique visitors", duration: "2 years" },
            { cookie: "_ga[ID]", provider: "Google Analytics", purpose: "Maintains session state", duration: "2 years" },
            { cookie: "_gid", provider: "Google Analytics", purpose: "Distinguishes unique visitors", duration: "24 hours" },
            { cookie: "_gat", provider: "Google Analytics", purpose: "Limits request rate", duration: "1 minute" },
          ]} />
          <P>We use Google Analytics with IP anonymisation enabled, meaning your full IP address is never stored by Google. Analytics data is retained for 26 months.</P>

          <Sub>Functional Cookies</Sub>
          <P>These cookies enable enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we have added to our pages. They are only set with your consent.</P>
          <CookieTable rows={[
            { cookie: "preferred_lang", provider: "rockenue.com", purpose: "Remembers your language preference", duration: "12 months" },
          ]} />
        </Section>

        <Section title="5. Third-Party Cookies">
          <P>Some cookies are set by third-party services that appear on our pages. We do not control these cookies. The third-party providers and their respective privacy policies are:</P>
          <Ul items={[
            "Google Analytics (analytics): https://policies.google.com/privacy",
            "Cloudflare (security): https://www.cloudflare.com/privacypolicy/",
          ]} />
        </Section>

        <Section title="6. Similar Technologies">
          <P>In addition to cookies, we may use similar technologies including:</P>
          <Ul items={[
            "Local storage: Used to store preferences locally on your device",
            "Pixel tags / web beacons: Small transparent images used to track page views and email opens",
          ]} />
          <P>These technologies are subject to the same consent requirements as cookies.</P>
        </Section>

        <Section title="7. Managing Cookies">
          <P>Beyond the consent controls on our website, you can manage cookies through your browser settings. Most browsers allow you to:</P>
          <Ul items={[
            "View what cookies are stored on your device",
            "Delete individual or all cookies",
            "Block cookies from specific or all websites",
            "Set preferences for first-party and third-party cookies",
          ]} />
          <P>Please note that blocking or deleting cookies may affect the functionality of our website and your user experience.</P>
          <P>Browser-specific instructions:</P>
          <Ul items={[
            "Chrome: Settings \u2192 Privacy and Security \u2192 Cookies",
            "Firefox: Settings \u2192 Privacy & Security \u2192 Cookies and Site Data",
            "Safari: Preferences \u2192 Privacy \u2192 Manage Website Data",
            "Edge: Settings \u2192 Cookies and Site Permissions",
          ]} />
        </Section>

        <Section title="8. Do Not Track">
          <P>Some browsers offer a "Do Not Track" (DNT) signal. There is currently no industry-wide standard for how websites should respond to DNT signals. Our website does not currently respond to DNT signals, but we honour the cookie preferences you set through our consent controls.</P>
        </Section>

        <Section title="9. Changes to This Policy">
          <P>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</P>
        </Section>

        <Section title="10. Contact">
          <P>For any questions regarding our use of cookies or this policy:</P>
          <P>Rockenue International Group LLC FZ{"\n"}Nad Al Sheba 1, Dubai, United Arab Emirates{"\n"}Email: info@rockenue.com</P>
        </Section>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <h2 style={{ fontSize: 16, fontWeight: 700, color: R.accent, margin: "0 0 12px" }}>{title}</h2>
      {children}
    </div>
  );
}

function Sub({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 14, fontWeight: 600, color: R.accent, margin: "16px 0 8px" }}>{children}</div>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 14, color: R.text, lineHeight: 1.75, margin: "0 0 12px", whiteSpace: "pre-line" }}>{children}</p>;
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "0 0 12px", padding: "0 0 0 20px", listStyle: "none" }}>
      {items.map((item) => (
        <li key={item.substring(0, 40)} style={{ fontSize: 14, color: R.text, lineHeight: 1.75, padding: "4px 0", display: "flex", gap: 10 }}>
          <span style={{ color: R.teal, flexShrink: 0 }}>&bull;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CookieTable({ rows }: { rows: { cookie: string; provider: string; purpose: string; duration: string }[] }) {
  return (
    <div style={{ margin: "12px 0 16px", border: `1px solid ${R.border}`, borderRadius: 8, overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.5fr 0.8fr", background: R.card, borderBottom: `1px solid ${R.border}`, padding: "10px 14px", gap: 8 }}>
        {["Cookie", "Provider", "Purpose", "Duration"].map((h) => (
          <span key={h} style={{ fontSize: 10, fontWeight: 600, color: R.textDim, textTransform: "uppercase", letterSpacing: 0.5 }}>{h}</span>
        ))}
      </div>
      {rows.map((row, i) => (
        <div key={row.cookie} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.5fr 0.8fr", padding: "10px 14px", gap: 8, borderBottom: i < rows.length - 1 ? `1px solid ${R.border}` : "none" }}>
          <span style={{ fontSize: 12, color: R.accent, fontFamily: "monospace" }}>{row.cookie}</span>
          <span style={{ fontSize: 12, color: R.text }}>{row.provider}</span>
          <span style={{ fontSize: 12, color: R.text }}>{row.purpose}</span>
          <span style={{ fontSize: 12, color: R.textMid }}>{row.duration}</span>
        </div>
      ))}
    </div>
  );
}
