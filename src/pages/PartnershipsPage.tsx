import PageHero from '../components/PageHero';
import SectionLabel from '../components/SectionLabel';
import BeyondMark from '../components/BeyondMark';
import { Field, FormStatus, Select } from '../components/forms/Field';
import { ArrowUpRight, Mail } from '../components/Icons';
import {
  CONTACT, PARTNER_MODELS, PARTNER_MODEL_OPTIONS, PARTNER_TYPES, PARTNER_TYPE_OPTIONS,
} from '../data/content';
import { usePageSetup } from '../hooks/usePageSetup';
import { breadcrumbSchema, usePageMeta } from '../hooks/usePageMeta';
import { isEmail, sendForm, useForm } from '../hooks/useForm';
import { track } from '../lib/analytics';
import { Link } from 'react-router-dom';

const STEPS = [
  { title: 'Introduce yourself', text: 'Tell us who you are and the kind of partnership you have in mind.' },
  { title: 'Explore fit', text: 'We meet to understand goals, strengths and how we could work together.' },
  { title: 'Agree terms', text: 'We put a clear, simple agreement in place that works for both sides.' },
  { title: 'Build together', text: 'We start with a first project and grow the relationship from there.' },
];

type Values = {
  name: string;
  email: string;
  organization: string;
  partnerType: string;
  model: string;
  message: string;
};

function PartnershipForm() {
  const { errors, status, field, onSubmit } = useForm<Values>(
    { name: '', email: '', organization: '', partnerType: '', model: '', message: '' },
    (v) => {
      const e: Partial<Record<keyof Values, string>> = {};
      if (!v.name.trim()) e.name = 'Please enter your name.';
      if (!isEmail(v.email)) e.email = 'Enter a valid email address.';
      if (!v.partnerType) e.partnerType = 'Select what describes you best.';
      if (v.message.trim().length < 10) e.message = 'Tell us a little more (10+ characters).';
      return e;
    },
    async (v) => {
      await sendForm('partnership', v);
      track('partnership_form_submit', { partner_type: v.partnerType, model: v.model || 'unspecified' });
    },
  );

  return (
    <form className="card contact__form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <Field id="name" label="Full Name" error={errors.name}>
          <input {...field('name')} placeholder="Jane Doe" autoComplete="name" />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input {...field('email')} type="email" placeholder="you@company.com" autoComplete="email" />
        </Field>
      </div>
      <Field id="organization" label="Organization" optional>
        <input {...field('organization')} placeholder="Company or organization name" autoComplete="organization" />
      </Field>
      <div className="form-row">
        <Field id="partnerType" label="I am a…" error={errors.partnerType}>
          <Select {...field('partnerType')} placeholder="Select one" options={PARTNER_TYPE_OPTIONS} required />
        </Field>
        <Field id="model" label="Partnership type" optional>
          <Select {...field('model')} placeholder="Select a type" options={PARTNER_MODEL_OPTIONS} />
        </Field>
      </div>
      <Field id="message" label="Tell us about the partnership" error={errors.message}>
        <textarea {...field('message')} rows={5} placeholder="What do you have in mind, and what would success look like?" />
      </Field>
      <button type="submit" className="btn btn--gradient btn--block" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : <>Explore Partnership <ArrowUpRight size={14} /></>}
      </button>
      <FormStatus status={status} sentText="Thanks — we’ve received your partnership enquiry and will be in touch shortly." />
      <p className="form-note">
        By submitting, you agree to our <Link to="/privacy">Privacy Policy</Link>. We handle your
        data in line with the Nigeria Data Protection Act (NDPA).
      </p>
    </form>
  );
}

export default function PartnershipsPage() {
  usePageSetup();
  usePageMeta({
    title: 'Partner With Us',
    description:
      'Partner with BEYOND. Open to businesses, startups, professionals, organizations and technology companies ready to build something meaningful together.',
    path: '/partnerships',
    schema: [breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Partnerships', path: '/partnerships' }])],
  });

  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Partner With BEYOND"
        lead="Open to businesses, startups, professionals, organizations and technology companies ready to build something meaningful together."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Partnerships' }]}
      >
        <a href="#partner-form" className="btn btn--gradient">Explore Partnership</a>
      </PageHero>

      <section className="section section--flush-top">
        <div className="container">
          <div className="split-head reveal">
            <div>
              <SectionLabel>Who we partner with</SectionLabel>
              <h2 className="h2">Built on mutual success.</h2>
            </div>
            <p className="muted split-head__aside">
              Mutual Success is one of our core values. Every partnership should make both sides stronger.
            </p>
          </div>
          <div className="partner-types">
            {PARTNER_TYPES.map(({ title, description, icon: Icon }) => (
              <article key={title} className="card creative-card reveal">
                <span className="icon-box"><Icon size={17} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="center-head reveal">
            <SectionLabel center>Ways to partner</SectionLabel>
            <h2 className="h2">Three ways to work together.</h2>
          </div>
          <div className="models">
            {PARTNER_MODELS.map(({ title, description, icon: Icon }) => (
              <article key={title} className="card model-card reveal">
                <span className="process__icon"><Icon size={18} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center-head reveal">
            <SectionLabel center>How it works</SectionLabel>
            <h2 className="h2">Simple, clear, and built to last.</h2>
          </div>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className="card step reveal">
                <span className="reason-card__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--alt" id="partner-form">
        <div className="container contact__grid">
          <div className="contact__intro reveal">
            <SectionLabel>Start a conversation</SectionLabel>
            <h2 className="h2 h2--xl">Let’s build something together.</h2>
            <p className="muted">
              Tell us a little about yourself and the partnership you have in mind. We’ll get back to
              you within two business days.
            </p>
            <a
              href={`mailto:${CONTACT.partnershipsEmail}`}
              className="channel channel--inline"
              onClick={() => track('email_click', { location: 'partnerships' })}
            >
              <span className="channel__icon"><Mail size={16} /></span>
              <span><small>Partnerships email</small>{CONTACT.partnershipsEmail}</span>
            </a>
            <div className="story__visual story__visual--sm" aria-hidden="true">
              <div className="story__glow" />
              <BeyondMark size={120} glow />
            </div>
          </div>
          <div className="reveal">
            <PartnershipForm />
          </div>
        </div>
      </section>
    </>
  );
}
