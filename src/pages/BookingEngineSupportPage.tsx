import { R } from "../theme";
import { useIsMobile } from "../hooks/useIsMobile";

export function BookingEngineSupportPage() {
  const m = useIsMobile();

  return (
    <section style={{ background: R.heroBg, padding: m ? "56px 0 64px" : "80px 0 96px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: m ? "0 24px" : "0 64px" }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, color: R.gold, textTransform: "uppercase", marginBottom: 20 }}>Support</div>
        <h1 style={{ fontSize: m ? 28 : 36, fontWeight: 700, letterSpacing: -1.2, color: R.accent, margin: "0 0 12px" }}>Booking Engine — Support &amp; Onboarding</h1>
        <p style={{ fontSize: 13, color: R.textDim, margin: "0 0 48px" }}>Last updated: May 2026</p>

        <Section title="1. What the Rockenue Booking Engine Is">
          <P>The Rockenue booking engine is a direct-booking checkout used by hotels under management with Rockenue. It is integrated with the hotel's Cloudbeds property management system so that availability, rates, and reservations stay in sync in real time, and with Stripe Connect so that guest payments settle directly to the hotel.</P>
          <P>The engine is offered exclusively as part of a Rockenue management or commercial engagement. It is not a standalone, self-serve product.</P>
        </Section>

        <Section title="2. Onboarding Is by Approval Only">
          <P>Hotels cannot self-onboard onto the booking engine. Access is granted only after a hotel has been accepted into the Rockenue network through our standard evaluation process and a formal commercial agreement is in place.</P>
          <P>If your property has not yet been accepted, please start with the management application at rockenue.com/apply. Onboarding to the booking engine happens as part of the wider commercial setup, not as a separate sign-up.</P>
        </Section>

        <Section title="3. How Onboarding Works Once Approved">
          <P>For approved hotels, Rockenue handles the full technical setup end-to-end. There are no configuration files for the hotel to manage and no developer work required on the hotel's side.</P>
          <P>The setup typically covers:</P>
          <Ul items={[
            "Connection to the hotel's Cloudbeds account, including rooms, rate plans, and availability mapping",
            "Stripe Connect activation so payments settle directly into the hotel's bank account",
            "Booking engine theming and content (property description, photography, policies, extras)",
            "Email templates for confirmation, modification, cancellation, and payment receipts, sent on the hotel's behalf",
            "Test bookings end-to-end before the engine is made live",
          ]} />
        </Section>

        <Section title="4. A Dedicated Point of Contact">
          <P>Once a hotel is live, Rockenue assigns a named individual as the hotel's primary point of contact for the booking engine and related commercial workflows. That person is responsible for day-to-day questions, rate and inventory changes that need our help, guest issues escalated by the hotel, and coordination with the wider Rockenue team.</P>
          <P>This is intentionally not a generic ticket queue. The same person knows your property, your Cloudbeds setup, and your Stripe configuration.</P>
        </Section>

        <Section title="5. Getting Support">
          <P>If you are an existing Rockenue-managed hotel, please contact your assigned point of contact directly for the fastest response.</P>
          <P>For all other enquiries — including hotels interested in joining the network, partnership questions, or general support — please email info@rockenue.com. We respond within two business days.</P>
        </Section>

        <Section title="6. Guests Who Have Booked Through a Rockenue Hotel">
          <P>If you are a guest who has made a reservation through a hotel using the Rockenue booking engine, please contact the hotel directly in the first instance. The hotel holds your reservation in its Cloudbeds system and is best placed to handle changes, cancellations, or special requests.</P>
          <P>For questions about how your booking data is processed, please see our Privacy Policy at rockenue.com/privacy. If you cannot reach the hotel, email info@rockenue.com and we will route your request appropriately.</P>
        </Section>

        <Section title="7. Contact">
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
