import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy — Fly Fishing Guide School" },
  description: "Privacy Policy for the Fly Fishing Guide School. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://flyfishingguideschool.com/privacy-policy/" },
  robots: { index: false },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="font-serif text-4xl font-bold text-primary mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-12">Effective Date: May 29, 2026</p>

        <p className="text-base text-foreground/80 leading-relaxed mb-10">
          This Privacy Policy describes how the Fly Fishing Guide School ("we," "us," or "our"), operating at
          flyfishingguideschool.com, collects, uses, and protects information you provide when visiting our website or
          using our services. We are committed to safeguarding your privacy and handling your data with care and
          transparency.
        </p>

        <Section title="1. Information We Collect">
          <p>We collect information you voluntarily provide when you:</p>
          <ul>
            <li>Submit a contact or inquiry form</li>
            <li>Complete a reservation or booking request</li>
            <li>Sign up for our email newsletter</li>
            <li>Make a purchase or payment for guided trips, lessons, or merchandise</li>
          </ul>
          <p>The types of personal information we may collect include:</p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Mailing address</li>
            <li>Payment information (processed securely through our payment provider — we do not store credit card numbers)</li>
            <li>Trip preferences, experience level, and scheduling details you share with us</li>
          </ul>
          <p>
            We also collect limited non-personal information automatically, such as browser type, referring pages, and
            general location data through standard web analytics tools (e.g., Google Analytics). This data is aggregated
            and not tied to your identity.
          </p>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and questions</li>
            <li>Process and confirm reservations and bookings</li>
            <li>Send confirmation emails and trip preparation details</li>
            <li>Send periodic newsletters, updates, and promotions (only if you opt in)</li>
            <li>Process payments securely</li>
            <li>Improve our website and services based on aggregate feedback</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We do not sell, trade, rent, or otherwise transfer your personal information to third parties for their own marketing purposes.</p>
        </Section>

        <Section title="3. Email Communications">
          <p>
            If you subscribe to our email newsletter, we will send you periodic updates about upcoming trips, instructional
            content, promotions, and news related to our services. Every marketing email we send includes a clear
            unsubscribe link. You may opt out at any time, and we will promptly remove you from our mailing list.
          </p>
          <p>
            Transactional emails — such as booking confirmations and trip details — are sent as a necessary part of
            fulfilling your reservation and cannot be opted out of while a booking is active.
          </p>
        </Section>

        <Section title="4. Payment Processing">
          <p>
            All payment transactions are processed through secure, third-party payment processors. We do not collect or
            store your full credit card number, CVV, or bank account details on our servers. Our payment partners comply
            with Payment Card Industry Data Security Standards (PCI DSS).
          </p>
          <p>By submitting payment information, you agree to the terms of the applicable payment processor.</p>
        </Section>

        <Section title="5. Cookies and Tracking Technologies">
          <p>
            Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze
            site traffic, and understand how visitors use our site. You can instruct your browser to refuse cookies or
            alert you when cookies are being sent. Some portions of our site may not function properly without cookies.
          </p>
          <p>
            We may use Google Analytics or similar services to collect aggregate, anonymized usage data. These services
            have their own privacy policies governing data use.
          </p>
        </Section>

        <Section title="6. How We Protect Your Information">
          <p>
            We implement reasonable administrative, technical, and physical security measures to protect your personal
            information from unauthorized access, use, or disclosure. However, no method of transmission over the internet
            or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute
            security.
          </p>
        </Section>

        <Section title="7. Third-Party Links">
          <p>
            Our website may contain links to third-party websites (such as gear retailers, tourism boards, or partner
            organizations). We are not responsible for the privacy practices of those sites and encourage you to review
            their privacy policies before sharing any personal information.
          </p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>
            Our website and services are not directed to children under the age of 13. We do not knowingly collect
            personal information from children. If you believe a child has provided us with personal information, please
            contact us and we will promptly delete it.
          </p>
        </Section>

        <Section title="9. Your Rights and Choices">
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information (subject to any legal obligations we may have to retain it)</li>
            <li>Opt out of marketing emails at any time via the unsubscribe link</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:info@flyfishingguideschool.com" className="text-primary underline underline-offset-2 hover:opacity-80">
              info@flyfishingguideschool.com
            </a>.
          </p>
        </Section>

        <Section title="10. Data Retention">
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes described in this policy,
            including maintaining booking records, complying with legal obligations, resolving disputes, and enforcing our
            agreements. When data is no longer needed, we delete or anonymize it in a secure manner.
          </p>
        </Section>

        <Section title="11. Changes to This Privacy Policy">
          <p>
            We reserve the right to update this Privacy Policy at any time. When we make material changes, we will update
            the effective date at the top of this page. We encourage you to review this policy periodically. Continued use
            of our website after changes are posted constitutes your acceptance of the revised policy.
          </p>
        </Section>

        <Section title="12. Contact Us">
          <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
          <ul>
            <li>Website: <a href="https://flyfishingguideschool.com" className="text-primary underline underline-offset-2 hover:opacity-80">flyfishingguideschool.com</a></li>
            <li>Email: <a href="mailto:flyfishingguideschool@gmail.com" className="text-primary underline underline-offset-2 hover:opacity-80">flyfishingguideschool@gmail.com</a></li>
          </ul>
        </Section>

        <p className="text-sm text-muted-foreground mt-12 pt-8 border-t border-border">
          © 2026 Fly Fishing Guide School. All rights reserved.
        </p>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-serif text-xl font-bold text-primary mb-4">{title}</h2>
      <div className="space-y-4 text-base text-foreground/80 leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_p]:leading-relaxed">
        {children}
      </div>
    </section>
  );
}
