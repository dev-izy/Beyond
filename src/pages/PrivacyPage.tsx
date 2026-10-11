import { Link } from 'react-router-dom';
import LegalPage, { type LegalSection } from './LegalPage';
import { CONTACT } from '../data/content';

const sections: LegalSection[] = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <p>
        BEYOND (“BEYOND”, “we”, “us”) is the data controller for personal data collected through this
        website. We are based in {CONTACT.address}. This policy explains what personal data we collect,
        why, and your rights under the Nigeria Data Protection Act 2023 (“NDPA”).
      </p>
    ),
  },
  {
    id: 'data-we-collect',
    title: 'Data we collect',
    body: (
      <>
        <p>We only collect what we need to respond to you and run this website:</p>
        <ul>
          <li><strong>Enquiry data</strong> — your name, email, phone/WhatsApp number, company, the service you need, budget range and project description, when you use our contact or partnership forms.</li>
          <li><strong>Communications</strong> — messages you send us by email, WhatsApp or phone.</li>
          <li><strong>Usage data</strong> — pages visited, device and browser type, approximate location and referral source, collected through analytics tools.</li>
        </ul>
        <p>We do not knowingly collect sensitive personal data, and this website is not directed at children.</p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How we use your data and our lawful basis',
    body: (
      <ul>
        <li><strong>To respond to your enquiry and prepare a quotation</strong> — to take steps at your request before entering into a contract.</li>
        <li><strong>To deliver services you engage us for</strong> — performance of a contract.</li>
        <li><strong>To improve this website and measure enquiries</strong> — our legitimate interests, or your consent where required.</li>
        <li><strong>To meet legal, tax and regulatory obligations</strong> — compliance with a legal obligation.</li>
      </ul>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies and analytics',
    body: (
      <p>
        We use analytics to understand how visitors use the site and to count enquiries (for example, form
        submissions and WhatsApp or email clicks). Where analytics cookies are not strictly necessary, we
        will ask for your consent. You can block or delete cookies in your browser settings at any time.
      </p>
    ),
  },
  {
    id: 'sharing',
    title: 'Who we share data with',
    body: (
      <>
        <p>We do not sell your personal data. We share it only with:</p>
        <ul>
          <li>Service providers who help us operate (for example hosting, email, form handling and analytics providers), under written agreements that require them to protect your data.</li>
          <li>Authorities, where required by law.</li>
        </ul>
        <p>
          Some providers may process data outside Nigeria. Where that happens, we rely on the safeguards
          permitted under the NDPA to make sure your data remains protected.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'How long we keep data',
    body: (
      <p>
        Enquiries that do not become projects are kept for up to 24 months, then deleted. Client and
        contract records are kept for as long as needed to deliver the service and to meet legal and tax
        requirements. Analytics data is kept in aggregated or anonymized form where possible.
      </p>
    ),
  },
  {
    id: 'security',
    title: 'How we protect your data',
    body: (
      <p>
        We use appropriate technical and organizational measures, including HTTPS encryption, access
        controls and reputable providers. If a personal data breach is likely to put your rights at risk,
        we will notify the Nigeria Data Protection Commission and, where required, you.
      </p>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    body: (
      <>
        <p>Under the NDPA you have the right to:</p>
        <ul>
          <li>access the personal data we hold about you;</li>
          <li>have inaccurate data corrected, and have data deleted where it is no longer needed;</li>
          <li>restrict or object to certain processing;</li>
          <li>receive your data in a portable format;</li>
          <li>withdraw consent at any time, where we rely on consent.</li>
        </ul>
        <p>
          To exercise any of these rights, email <a href={`mailto:${CONTACT.privacyEmail}`}>{CONTACT.privacyEmail}</a>.
          We will respond within the time required by law. If you are not satisfied with our response, you
          may lodge a complaint with the Nigeria Data Protection Commission (NDPC).
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        We may update this policy from time to time. The “Last updated” date above shows when it last
        changed. Please also read our <Link to="/terms">Terms of Use</Link>.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <p>
        Questions about this policy or your data: <a href={`mailto:${CONTACT.privacyEmail}`}>{CONTACT.privacyEmail}</a>,
        or write to BEYOND, {CONTACT.address}.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      description="How BEYOND collects, uses and protects your personal data, in line with the Nigeria Data Protection Act (NDPA) 2023."
      lead="How we collect, use and protect your personal data — in line with the Nigeria Data Protection Act (NDPA) 2023."
      updated="11 October 2026"
      sections={sections}
    />
  );
}
