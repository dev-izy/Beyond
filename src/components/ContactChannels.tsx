import { Github, Instagram, LinkedIn, Mail, Message, Phone, XLogo } from './Icons';
import { CONTACT, SOCIALS } from '../data/content';
import { track } from '../lib/analytics';

export function ContactChannels() {
  return (
    <ul className="contact__channels">
      <li>
        <a
          href={CONTACT.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="channel"
          onClick={() => track('whatsapp_click')}
        >
          <span className="channel__icon"><Message size={16} /></span>
          <span><small>WhatsApp</small>{CONTACT.whatsapp}</span>
        </a>
      </li>
      <li>
        <a href={`mailto:${CONTACT.email}`} className="channel" onClick={() => track('email_click')}>
          <span className="channel__icon"><Mail size={16} /></span>
          <span><small>Email</small>{CONTACT.email}</span>
        </a>
      </li>
      <li>
        <a
          href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
          className="channel"
          onClick={() => track('phone_click')}
        >
          <span className="channel__icon"><Phone size={16} /></span>
          <span><small>Phone</small>{CONTACT.phone}</span>
        </a>
      </li>
    </ul>
  );
}

export function Socials({ className = '' }: { className?: string }) {
  return (
    <div className={`socials ${className}`}>
      <a href={SOCIALS.linkedin} aria-label="BEYOND on LinkedIn"><LinkedIn size={15} /></a>
      <a href={SOCIALS.instagram} aria-label="BEYOND on Instagram"><Instagram size={15} /></a>
      <a href={SOCIALS.x} aria-label="BEYOND on X"><XLogo size={13} /></a>
      <a href={SOCIALS.github} aria-label="BEYOND on GitHub"><Github size={15} /></a>
    </div>
  );
}
