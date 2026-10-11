import { Link } from 'react-router-dom';
import BeyondMark from './BeyondMark';
import { Socials } from './ContactChannels';
import { CONTACT, TECH_SERVICES } from '../data/content';
import { track } from '../lib/analytics';

const COMPANY = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Team', to: '/team' },
  { label: 'Partner With Us', to: '/partnerships' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="brand brand--lg" aria-label="BEYOND home">
              <BeyondMark size={32} />
              <span>Beyond</span>
            </Link>
            <p>Transforming services.<br />Creating value. Making impact.</p>
            <Socials className="footer__socials" />
          </div>

          <div className="footer__cols">
            <div>
              <h2 className="footer__heading">Company</h2>
              <ul>
                {COMPANY.map((l) => (
                  <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="footer__heading">Services</h2>
              <ul>
                {TECH_SERVICES.map((s) => (
                  <li key={s.slug}><Link to={`/services#${s.slug}`}>{s.title}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="footer__heading">Contact</h2>
              <ul>
                <li>
                  <a href={CONTACT.whatsappLink} target="_blank" rel="noreferrer" onClick={() => track('whatsapp_click', { location: 'footer' })}>
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT.email}`} onClick={() => track('email_click', { location: 'footer' })}>
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} onClick={() => track('phone_click', { location: 'footer' })}>
                    {CONTACT.phone}
                  </a>
                </li>
                <li className="footer__plain">{CONTACT.address}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__wordmark" aria-hidden="true">Beyond</div>

        <div className="footer__bottom">
          <span>© {year} BEYOND. All rights reserved.</span>
          <div>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
