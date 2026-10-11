import type { ReactNode } from 'react';
import { ChevronDown } from '../Icons';

type Props = {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
};

export function Field({ id, label, optional, error, children }: Props) {
  return (
    <div className="field">
      <label htmlFor={id}>
        {label} {optional && <span className="optional">(optional)</span>}
      </label>
      {children}
      {error && <span id={`${id}-error`} className="field__error">{error}</span>}
    </div>
  );
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  placeholder: string;
  options: string[];
  value: string;
  required?: boolean;
};

export function Select({ placeholder, options, value, required, ...rest }: SelectProps) {
  return (
    <div className="select">
      <select {...rest} value={value} className={value ? '' : 'is-empty'}>
        <option value="" disabled={required}>{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown size={15} />
    </div>
  );
}

export function FormStatus({ status, sentText }: { status: string; sentText: string }) {
  if (status === 'sent') return <p className="form-success" role="status">{sentText}</p>;
  if (status === 'error')
    return (
      <p className="form-error" role="alert">
        Something went wrong sending your message. Please try again, or reach us on WhatsApp.
      </p>
    );
  return null;
}
