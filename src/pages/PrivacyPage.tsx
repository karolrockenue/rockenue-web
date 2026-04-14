import { R } from "../theme";
import { useIsMobile } from "../hooks/useIsMobile";

export function PrivacyPage() {
  const m = useIsMobile();

  return (
    <section style={{ background: R.heroBg, padding: m ? "56px 0 64px" : "80px 0 96px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: m ? "0 24px" : "0 64px" }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, color: R.gold, textTransform: "uppercase", marginBottom: 20 }}>Legal</div>
        <h1 style={{ fontSize: m ? 28 : 36, fontWeight: 700, letterSpacing: -1.2, color: R.accent, margin: "0 0 12px" }}>Privacy Policy</h1>
        <p style={{ fontSize: 13, color: R.textDim, margin: "0 0 48px" }}>Last updated: April 2026</p>

        <Section title="1. Who We Are">
          <P>Rockenue International Group LLC FZ ("Rockenue", "we", "us", "our") is a company registered in the Meydan Free Zone, Dubai, United Arab Emirates. Our registered address is Nad Al Sheba 1, Dubai, United Arab Emirates.</P>
          <P>We act as the data controller for personal data collected through this website (rockenue.com) and our services. For all privacy-related enquiries, contact us at info@rockenue.com.</P>
        </Section>

        <Section title="2. Legal Framework">
          <P>We process personal data in accordance with applicable data protection legislation, including:</P>
          <Ul items={[
            "The UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL) and its implementing regulations",
            "The UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, where we process personal data of individuals located in the United Kingdom",
            "The EU General Data Protection Regulation (EU GDPR), Regulation (EU) 2016/679, where we process personal data of individuals located in the European Economic Area",
          ]} />
        </Section>

        <Section title="3. Information We Collect">
          <Sub>Information you provide directly:</Sub>
          <Ul items={[
            "Full name, email address, phone number",
            "Hotel or property details submitted through our management application or contact forms",
            "Business information including property ownership, occupancy data, and revenue figures",
            "Any additional information you choose to provide in correspondence with us",
          ]} />
          <Sub>Information collected automatically:</Sub>
          <Ul items={[
            "IP address and approximate geographic location",
            "Browser type, device type, and operating system",
            "Pages visited, time spent on pages, referring URLs, and navigation paths",
            "Cookie identifiers and similar tracking technologies (see our Cookie Policy below)",
          ]} />
          <Sub>Information from third parties:</Sub>
          <Ul items={[
            "Publicly available hotel and property data from industry platforms",
            "Information provided by referral partners with your knowledge",
          ]} />
        </Section>

        <Section title="4. Lawful Basis for Processing">
          <P>We process your personal data on the following legal bases:</P>
          <Ul items={[
            "Contract performance: To evaluate your management application, respond to enquiries, and deliver services where we have an agreement with you",
            "Legitimate interests: To improve our website and services, conduct internal analytics, and manage our business operations, provided these interests are not overridden by your rights",
            "Legal obligation: To comply with applicable laws, regulations, and lawful requests from public authorities",
            "Consent: Where you have given explicit consent, such as for marketing communications or non-essential cookies. You may withdraw consent at any time by contacting us",
          ]} />
        </Section>

        <Section title="5. How We Use Your Information">
          <P>We use your personal data to:</P>
          <Ul items={[
            "Respond to enquiries and management applications",
            "Evaluate properties for potential management engagement",
            "Communicate about our services, updates, and relevant industry developments",
            "Provide and maintain our technology platforms and software products",
            "Improve the functionality, performance, and content of our website",
            "Generate aggregated, anonymised analytics to understand website usage",
            "Comply with legal and regulatory obligations",
            "Protect our rights, property, and the safety of our users",
          ]} />
          <P>We do not sell, rent, or trade your personal data to third parties for their marketing purposes.</P>
        </Section>

        <Section title="6. Data Sharing">
          <P>We may share your personal data with the following categories of recipients:</P>
          <Ul items={[
            "Service providers: Third-party companies that assist our operations, including cloud hosting, email delivery, payment processing, and analytics. These providers process data solely on our instructions and are bound by contractual confidentiality and data protection obligations.",
            "Professional advisors: Legal, accounting, and audit professionals engaged to support our business, subject to professional confidentiality duties.",
            "Regulatory and public authorities: Where required by law, regulation, court order, or governmental request.",
            "Business transfers: In connection with a merger, acquisition, reorganisation, or sale of assets, your data may be transferred to the successor entity, subject to equivalent data protection commitments.",
          ]} />
          <P>We require all third parties to respect the security of your personal data and to process it in accordance with applicable law.</P>
        </Section>

        <Section title="7. International Data Transfers">
          <P>Rockenue is based in the United Arab Emirates and our primary data processing occurs within the UAE. Where we process data of individuals located in the United Kingdom or European Economic Area, we ensure that appropriate safeguards are in place for any transfers of personal data outside these jurisdictions, including:</P>
          <Ul items={[
            "Standard Contractual Clauses (SCCs) approved by the European Commission or the UK Information Commissioner's Office",
            "Transfers to countries recognised as providing an adequate level of data protection",
            "Other legally recognised transfer mechanisms",
          ]} />
          <P>You may request a copy of the relevant safeguards by contacting us at info@rockenue.com.</P>
        </Section>

        <Section title="8. Data Retention">
          <P>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Our standard retention periods are:</P>
          <Ul items={[
            "Management applications: 24 months from the date of the last interaction",
            "Client data: For the duration of the service relationship plus 7 years to meet legal and accounting obligations",
            "Website analytics data: 26 months from the date of collection",
            "Marketing communications data: Until you withdraw consent or unsubscribe",
          ]} />
          <P>At the end of the applicable retention period, personal data is securely deleted or anonymised.</P>
        </Section>

        <Section title="9. Your Rights">
          <P>Depending on your location and applicable law, you have the following rights in relation to your personal data:</P>
          <Ul items={[
            "Access: Request a copy of the personal data we hold about you",
            "Rectification: Request correction of inaccurate or incomplete data",
            "Erasure: Request deletion of your personal data where there is no compelling reason for its continued processing",
            "Restriction: Request that we restrict the processing of your personal data in certain circumstances",
            "Data portability: Request transfer of your personal data to you or a third party in a structured, machine-readable format",
            "Objection: Object to processing based on legitimate interests, or object to direct marketing at any time",
            "Withdraw consent: Where processing is based on consent, you have the right to withdraw that consent at any time without affecting the lawfulness of processing carried out prior to withdrawal",
          ]} />
          <P>To exercise any of these rights, contact us at info@rockenue.com. We will respond within 30 days. If we require additional time, we will inform you of the reason and the extended timeframe.</P>
          <P>If you are located in the United Kingdom, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk. If you are located in the EEA, you may lodge a complaint with your local supervisory authority.</P>
        </Section>

        <Section title="10. Automated Decision-Making">
          <P>We do not currently use automated decision-making or profiling that produces legal effects or similarly significant effects on individuals. If this changes, we will update this policy and provide appropriate notice and safeguards.</P>
        </Section>

        <Section title="11. Children's Data">
          <P>Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us and we will take steps to delete it promptly.</P>
        </Section>

        <Section title="12. Security">
          <P>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, loss, or destruction. These measures include encryption of data in transit, access controls, regular security assessments, and secure data storage practices. While no system can guarantee absolute security, we are committed to maintaining a high standard of data protection.</P>
        </Section>

        <Section title="13. Changes to This Policy">
          <P>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. Material changes will be communicated via a prominent notice on our website prior to the changes taking effect. The "Last updated" date at the top of this policy indicates the most recent revision. Continued use of the website after changes have been posted constitutes your acknowledgement of the updated policy.</P>
        </Section>

        <Section title="14. Contact">
          <P>For any questions, concerns, or requests regarding this Privacy Policy or our data processing practices:</P>
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
