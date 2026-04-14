import { R } from "../theme";

export function PrivacyPage() {
  return (
    <section style={{ background: R.heroBg, padding: "80px 0 96px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 64px" }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, color: R.gold, textTransform: "uppercase", marginBottom: 20 }}>Legal</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: -1.2, color: R.accent, margin: "0 0 12px" }}>Privacy Policy</h1>
        <p style={{ fontSize: 13, color: R.textDim, margin: "0 0 48px" }}>Last updated: April 2026</p>

        {([
          {
            title: "1. Who we are",
            body: "Rockenue International Group (\"Rockenue\", \"we\", \"us\") operates this website. Our registered office is at Nad Al Sheba 1, Dubai, United Arab Emirates. For privacy enquiries contact info@rockenue.com.",
          },
          {
            title: "2. Information we collect",
            body: "We collect information you provide directly: name, email address, phone number, hotel details, and any other information submitted through our application or contact forms. We also collect standard web analytics data (pages visited, browser type, IP address) through cookies and similar technologies.",
          },
          {
            title: "3. How we use your information",
            body: "We use your information to: respond to enquiries and applications; evaluate properties for management; communicate about our services; improve our website and services; comply with legal obligations. We do not sell or rent your personal data to third parties.",
          },
          {
            title: "4. Data sharing",
            body: "We may share your information with: service providers who assist our operations (hosting, email, analytics); professional advisors (legal, accounting); regulatory authorities where required by law. All service providers are bound by confidentiality obligations.",
          },
          {
            title: "5. Data retention",
            body: "We retain your data for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Application data is retained for 24 months after the last interaction. You may request deletion at any time.",
          },
          {
            title: "6. Your rights",
            body: "You have the right to: access your personal data; correct inaccurate data; request deletion; object to processing; data portability. To exercise any of these rights, contact info@rockenue.com.",
          },
          {
            title: "7. Security",
            body: "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.",
          },
          {
            title: "8. Changes to this policy",
            body: "We may update this policy from time to time. Material changes will be communicated via our website. Continued use of the site constitutes acceptance of the updated policy.",
          },
        ] as const).map((section) => (
          <div key={section.title} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: R.accent, margin: "0 0 10px" }}>{section.title}</h2>
            <p style={{ fontSize: 14, color: R.text, lineHeight: 1.75, margin: 0 }}>{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
