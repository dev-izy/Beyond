import { Link } from 'react-router-dom';
import LegalPage, { type LegalSection } from './LegalPage';
import { CONTACT } from '../data/content';

const sections: LegalSection[] = [
  {
    id: 'acceptance',
    title: 'Acceptance of these terms',
    body: (
      <p>
        By using this website you agree to these Terms of Use. If you do not agree, please do not use the
        site. These terms cover use of the website only; projects we deliver are governed by a separate
        written agreement or proposal.
      </p>
    ),
  },
  {
    id: 'use',
    title: 'Using this website',
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>use the site for any unlawful purpose, or to send spam or misleading information;</li>
          <li>attempt to gain unauthorized access to the site, its servers or related systems;</li>
          <li>introduce malware or interfere with the site’s normal operation;</li>
          <li>copy or scrape content from the site in bulk without our written permission.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'information',
    title: 'Information on this site',
    body: (
      <p>
        We work to keep information on this site accurate and up to date, but it is provided for general
        information only. Service descriptions, timelines and examples do not form an offer. A binding
        commitment only exists once a written proposal or contract has been agreed.
      </p>
    ),
  },
  {
    id: 'ip',
    title: 'Intellectual property',
    body: (
      <p>
        The BEYOND name, logo, website design and content are owned by BEYOND or used with permission.
        Project examples remain the property of their respective clients and are shown with permission.
        You may not reuse them without written consent.
      </p>
    ),
  },
  {
    id: 'submissions',
    title: 'Enquiries and submissions',
    body: (
      <p>
        When you send us an enquiry, you confirm the information is accurate and that you are entitled to
        share it. We handle it as described in our <Link to="/privacy">Privacy Policy</Link>. Please don’t
        send confidential information through the website forms; we can arrange a non-disclosure agreement
        before detailed discussions.
      </p>
    ),
  },
  {
    id: 'third-party',
    title: 'Third-party links',
    body: (
      <p>
        The site may link to third-party websites, including client projects and social platforms. We are
        not responsible for their content or privacy practices.
      </p>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    body: (
      <p>
        To the extent permitted by law, BEYOND is not liable for any loss arising from use of, or inability
        to use, this website or reliance on its content. Nothing in these terms limits liability that cannot
        be limited under Nigerian law.
      </p>
    ),
  },
  {
    id: 'law',
    title: 'Governing law',
    body: (
      <p>
        These terms are governed by the laws of the Federal Republic of Nigeria. Disputes will be subject
        to the jurisdiction of the courts of Lagos State, Nigeria.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes and contact',
    body: (
      <p>
        We may update these terms from time to time; continued use of the site means you accept the
        current version. Questions: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      path="/terms"
      description="The terms that apply when you use the BEYOND website."
      lead="The terms that apply when you use the BEYOND website."
      updated="11 October 2026"
      sections={sections}
    />
  );
}
