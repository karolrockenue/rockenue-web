import { R } from "../theme";

export function TermsPage() {
  return (
    <section style={{ background: R.heroBg, padding: "80px 0 96px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 64px" }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, color: R.gold, textTransform: "uppercase", marginBottom: 20 }}>Legal</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: -1.2, color: R.accent, margin: "0 0 12px" }}>Terms of Service</h1>
        <p style={{ fontSize: 13, color: R.textDim, margin: "0 0 48px" }}>Last updated: April 2026</p>

        {([
          {
            title: "1. Agreement",
            body: "By accessing and using this website (rockenue.com), you agree to be bound by these Terms of Service. If you do not agree, please do not use the site. These terms apply to all visitors, users, and anyone who accesses the website.",
          },
          {
            title: "2. Services",
            body: "Rockenue International Group provides hotel management, leasing, sales advisory, and market intelligence services. Information on this website is for general informational purposes and does not constitute an offer, contract, or guarantee of service.",
          },
          {
            title: "3. Applications",
            body: "Submitting a management application through our website does not create a binding agreement. All applications are subject to evaluation, and Rockenue reserves the right to accept or decline any application at its sole discretion.",
          },
          {
            title: "4. Intellectual property",
            body: "All content on this website — including text, graphics, logos, data visualisations, and software — is the property of Rockenue International Group and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written consent.",
          },
          {
            title: "5. Accuracy of information",
            body: "We make reasonable efforts to ensure the accuracy of information on this website, including portfolio statistics and market data. However, we do not warrant that all information is complete, current, or error-free. Performance figures are based on internal data and may not reflect future results.",
          },
          {
            title: "6. Limitation of liability",
            body: "To the maximum extent permitted by law, Rockenue shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided.",
          },
          {
            title: "7. External links",
            body: "This website may contain links to third-party websites. We are not responsible for the content, privacy practices, or availability of these external sites.",
          },
          {
            title: "8. Governing law",
            body: "These terms are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai.",
          },
          {
            title: "9. Changes",
            body: "We reserve the right to modify these terms at any time. Changes are effective upon posting to this website. Your continued use constitutes acceptance of the revised terms.",
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
