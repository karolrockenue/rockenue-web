import { R } from "../theme";
import { useIsMobile } from "../hooks/useIsMobile";

export function TermsPage() {
  const m = useIsMobile();

  return (
    <section style={{ background: R.heroBg, padding: m ? "56px 0 64px" : "80px 0 96px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: m ? "0 24px" : "0 64px" }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, color: R.gold, textTransform: "uppercase", marginBottom: 20 }}>Legal</div>
        <h1 style={{ fontSize: m ? 28 : 36, fontWeight: 700, letterSpacing: -1.2, color: R.accent, margin: "0 0 12px" }}>Terms of Service</h1>
        <p style={{ fontSize: 13, color: R.textDim, margin: "0 0 48px" }}>Last updated: April 2026</p>

        <Section title="1. Agreement to Terms">
          <P>By accessing or using this website (rockenue.com), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you must not access or use the website. These terms apply to all visitors, users, prospective clients, and anyone who accesses the website.</P>
        </Section>

        <Section title="2. Eligibility">
          <P>You must be at least 18 years of age to use this website and our services. By accessing this website, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these terms.</P>
        </Section>

        <Section title="3. Services">
          <P>Rockenue International Group LLC FZ provides hotel commercial management, revenue optimisation, distribution management, technology implementation, and market intelligence services. Information presented on this website is for general informational purposes only and does not constitute an offer, contract, guarantee, or commitment to provide any specific service.</P>
        </Section>

        <Section title="4. Management Applications">
          <P>Submitting a management application through our website does not create a binding agreement or obligation on either party. All applications are subject to our evaluation criteria, and Rockenue reserves the right to accept or decline any application at its sole discretion without obligation to provide reasons. Information submitted through the application process will be processed in accordance with our Privacy Policy.</P>
        </Section>

        <Section title="5. Intellectual Property">
          <P>All content on this website — including but not limited to text, graphics, logos, icons, images, data visualisations, software, code, market data, and the overall design and arrangement of the website — is the exclusive property of Rockenue International Group LLC FZ or its licensors and is protected by applicable intellectual property laws, including copyright, trademark, and trade secret laws.</P>
          <P>You may not reproduce, distribute, modify, create derivative works from, publicly display, republish, download, store, transmit, or otherwise exploit any content from this website without our prior written consent, except for temporary caching or as permitted by applicable law for personal, non-commercial use.</P>
          <P>The Rockenue name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Rockenue International Group LLC FZ. You may not use these marks without our prior written permission.</P>
        </Section>

        <Section title="6. User Conduct">
          <P>You agree not to use this website to:</P>
          <Ul items={[
            "Violate any applicable local, national, or international law or regulation",
            "Transmit any material that is unlawful, threatening, abusive, defamatory, or otherwise objectionable",
            "Attempt to gain unauthorised access to any part of the website, its servers, or any connected systems",
            "Interfere with or disrupt the website or the servers and networks connected to it",
            "Use any automated means (including bots, scrapers, or crawlers) to access the website or collect data without our express written permission",
            "Impersonate any person or entity or misrepresent your affiliation with any person or entity",
          ]} />
        </Section>

        <Section title="7. Accuracy of Information">
          <P>We make reasonable efforts to ensure the accuracy of information on this website, including portfolio statistics, market data, and service descriptions. However, we do not warrant that all information is complete, current, or error-free. Performance figures, market statistics, and case study results are based on internal data and historical performance and may not reflect future results. No information on this website should be construed as a guarantee of any particular outcome.</P>
        </Section>

        <Section title="8. Limitation of Liability">
          <P>To the maximum extent permitted by applicable law, Rockenue International Group LLC FZ, its directors, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunity, or goodwill, arising from or in connection with:</P>
          <Ul items={[
            "Your access to, use of, or inability to use the website",
            "Any reliance on information provided on the website",
            "Any unauthorised access to or alteration of your data",
            "Any conduct or content of any third party on the website",
          ]} />
          <P>Our total aggregate liability for any claims arising from or related to the website shall not exceed one hundred US dollars (USD $100).</P>
        </Section>

        <Section title="9. Indemnification">
          <P>You agree to indemnify, defend, and hold harmless Rockenue International Group LLC FZ, its directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising from or related to your use of the website, your violation of these terms, or your violation of any rights of a third party.</P>
        </Section>

        <Section title="10. External Links">
          <P>This website may contain links to third-party websites or resources. These links are provided for convenience only. We have no control over and assume no responsibility for the content, privacy policies, practices, or availability of any third-party websites. Inclusion of a link does not imply endorsement by Rockenue.</P>
        </Section>

        <Section title="11. Availability">
          <P>We do not guarantee that the website will be available at all times or that access will be uninterrupted, timely, secure, or error-free. We reserve the right to modify, suspend, or discontinue the website (or any part of it) at any time without notice.</P>
        </Section>

        <Section title="12. Force Majeure">
          <P>Rockenue shall not be liable for any failure or delay in performing its obligations where such failure or delay results from circumstances beyond its reasonable control, including but not limited to natural disasters, war, terrorism, pandemic, government actions, power failures, internet disruptions, or other force majeure events.</P>
        </Section>

        <Section title="13. Severability">
          <P>If any provision of these terms is found to be unlawful, void, or unenforceable, that provision shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions.</P>
        </Section>

        <Section title="14. Entire Agreement">
          <P>These Terms of Service, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and Rockenue with respect to your use of the website and supersede all prior or contemporaneous communications, whether electronic, oral, or written.</P>
        </Section>

        <Section title="15. Governing Law and Jurisdiction">
          <P>These terms are governed by and construed in accordance with the laws of the United Arab Emirates. Any dispute arising out of or in connection with these terms, including any question regarding their existence, validity, or termination, shall be subject to the exclusive jurisdiction of the courts of Dubai, United Arab Emirates.</P>
        </Section>

        <Section title="16. Changes to These Terms">
          <P>We reserve the right to modify these terms at any time. Changes are effective upon posting to this website. We will indicate the date of the most recent revision at the top of this page. Your continued use of the website following the posting of revised terms constitutes your acceptance of those changes.</P>
        </Section>

        <Section title="17. Contact">
          <P>For any questions regarding these Terms of Service:</P>
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
