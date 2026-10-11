import { Link } from 'react-router-dom';
import { ArrowUpRight } from '../Icons';
import { Field, FormStatus, Select } from './Field';
import { BUDGET_OPTIONS, SERVICE_OPTIONS } from '../../data/content';
import { isEmail, isPhone, sendForm, useForm } from '../../hooks/useForm';
import { track } from '../../lib/analytics';

type Values = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  description: string;
};

export default function ContactForm({ defaultService = '' }: { defaultService?: string }) {
  const initial: Values = {
    fullName: '', email: '', phone: '', company: '',
    service: SERVICE_OPTIONS.includes(defaultService) ? defaultService : '',
    budget: '', description: '',
  };

  const { errors, status, field, onSubmit } = useForm<Values>(
    initial,
    (v) => {
      const e: Partial<Record<keyof Values, string>> = {};
      if (!v.fullName.trim()) e.fullName = 'Please enter your name.';
      if (!isEmail(v.email)) e.email = 'Enter a valid email address.';
      if (!isPhone(v.phone)) e.phone = 'Enter a valid phone number.';
      if (!v.service) e.service = 'Select a service.';
      if (v.description.trim().length < 10) e.description = 'Tell us a little more (10+ characters).';
      return e;
    },
    async (v) => {
      await sendForm('contact', v);
      track('contact_form_submit', { service: v.service, budget: v.budget || 'unspecified' });
    },
  );

  return (
    <form className="card contact__form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <Field id="fullName" label="Full Name" error={errors.fullName}>
          <input {...field('fullName')} placeholder="Jane Doe" autoComplete="name" />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input {...field('email')} type="email" placeholder="you@company.com" autoComplete="email" />
        </Field>
      </div>

      <div className="form-row">
        <Field id="phone" label="Phone / WhatsApp" error={errors.phone}>
          <input {...field('phone')} type="tel" placeholder="+234 …" autoComplete="tel" />
        </Field>
        <Field id="company" label="Company">
          <input {...field('company')} placeholder="Company name" autoComplete="organization" />
        </Field>
      </div>

      <div className="form-row">
        <Field id="service" label="Service Required" error={errors.service}>
          <Select {...field('service')} placeholder="Select a service" options={SERVICE_OPTIONS} required />
        </Field>
        <Field id="budget" label="Budget Range" optional>
          <Select {...field('budget')} placeholder="Select a range" options={BUDGET_OPTIONS} />
        </Field>
      </div>

      <Field id="description" label="Project Description" error={errors.description}>
        <textarea
          {...field('description')}
          rows={5}
          placeholder="Tell us what you want to build, your goals and timeline…"
        />
      </Field>

      <button type="submit" className="btn btn--gradient btn--block" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : <>Let’s Build Something Valuable <ArrowUpRight size={14} /></>}
      </button>

      <FormStatus status={status} sentText="Thanks — your request is in. We’ll get back to you within one business day." />

      <p className="form-note">
        By submitting, you agree to our <Link to="/privacy">Privacy Policy</Link>. We handle your
        data in line with the Nigeria Data Protection Act (NDPA).
      </p>
    </form>
  );
}
