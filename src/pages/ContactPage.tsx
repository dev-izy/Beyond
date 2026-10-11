import { useSearchParams } from 'react-router-dom';
import Contact from '../components/sections/Contact';
import SectionLabel from '../components/SectionLabel';
import Faq from '../components/Faq';
import { Clock, Compass, FileText, Handshake, Rocket } from '../components/Icons';
import { CONTACT, FAQS } from '../data/content';
import { usePageSetup } from '../hooks/usePageSetup';
import { breadcrumbSchema, faqSchema, organizationSchema, usePageMeta } from '../hooks/usePageMeta';

const NEXT_STEPS = [
  { title: 'We reply', text: 'Within one business day, by email or WhatsApp — whichever you prefer.', icon: Clock },
  { title: 'Requirement gathering', text: 'A short call to understand your goals, users, timeline and budget.', icon: Compass },
  { title: 'Quotation', text: 'A clear, fixed proposal with scope, deliverables and timeline.', icon: FileText },
  { title: 'Project kick-off', text: 'Once approved, we start — with regular demos until delivery.', icon: Rocket },
];

export default function ContactPage() {
  const [params] = useSearchParams();
  const service = params.get('service') ?? '';

  usePageSetup();
  usePageMeta({
    title: 'Contact Us',
    description:
      'Tell BEYOND about your project. Reach us by form, WhatsApp, email or phone and get a tailored quotation within one business day.',
    path: '/contact',
    schema: [
      organizationSchema(CONTACT),
      faqSchema(FAQS.slice(0, 4)),
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]),
    ],
  });

  return (
    <>
      <Contact asPage defaultService={service} />

      <section className="section section--alt">
        <div className="container">
          <div className="center-head reveal">
            <SectionLabel center>What happens next</SectionLabel>
            <h2 className="h2">From your message to a working project.</h2>
          </div>
          <ol className="steps">
            {NEXT_STEPS.map(({ title, text, icon: Icon }, i) => (
              <li key={title} className="card step reveal">
                <div className="step__top">
                  <span className="icon-box"><Icon size={17} /></span>
                  <span className="reason-card__num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <div className="info-strip reveal">
            <span><Clock size={15} /> {CONTACT.hours}</span>
            <span><Compass size={15} /> {CONTACT.address}</span>
            <span><Handshake size={15} /> Working with clients across Nigeria and remotely</span>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container faq-layout">
          <div className="reveal">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="h2">Before you reach out.</h2>
          </div>
          <Faq items={FAQS.slice(0, 4)} />
        </div>
      </section>
    </>
  );
}
