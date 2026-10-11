import { Link } from 'react-router-dom';
import BeyondMark from './BeyondMark';
import SectionLabel from './SectionLabel';
import { ArrowUpRight, Message } from './Icons';
import { CONTACT } from '../data/content';
import { track } from '../lib/analytics';

type Props = {
  eyebrow?: string;
  title?: string;
  text?: string;
  primary?: { label: string; to: string };
};

/** Closing call-to-action — moves the visitor one step down the lead-gen path (PRD §8). */
export default function CtaBand({
  eyebrow = 'Get started',
  title = 'Ready to build something valuable?',
  text = 'Tell us what you need. We’ll reply within one business day with next steps and a tailored quotation.',
  primary = { label: 'Get a Solution', to: '/contact' },
}: Props) {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="partner reveal">
          <div className="partner__copy">
            <SectionLabel>{eyebrow}</SectionLabel>
            <h2 className="h2">{title}</h2>
            <p>{text}</p>
            <div className="partner__actions">
              <Link to={primary.to} className="btn btn--light btn--sm">
                {primary.label} <ArrowUpRight size={14} />
              </Link>
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost-light btn--sm"
                onClick={() => track('whatsapp_click', { location: 'cta_band' })}
              >
                <Message size={14} /> Chat on WhatsApp
              </a>
            </div>
          </div>
          <BeyondMark size={190} glow className="partner__mark" />
        </div>
      </div>
    </section>
  );
}
