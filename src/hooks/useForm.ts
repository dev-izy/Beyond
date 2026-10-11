import { useState, type ChangeEvent, type FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';
type FieldEl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

/**
 * Small form helper: controlled values, validation, a11y attributes and submit state.
 * `submit` should throw on failure so the form can show an error.
 */
export function useForm<T extends Record<string, string>>(
  initial: T,
  validate: (v: T) => Partial<Record<keyof T, string>>,
  submit: (v: T) => Promise<void>,
) {
  const [values, setValues] = useState<T>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [status, setStatus] = useState<Status>('idle');

  const onChange = (e: ChangeEvent<FieldEl>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof T]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status === 'sent' || status === 'error') setStatus('idle');
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementById(firstError)?.focus();
      return;
    }
    setStatus('sending');
    try {
      await submit(values);
      setStatus('sent');
      setValues(initial);
    } catch {
      setStatus('error');
    }
  };

  const field = (name: keyof T & string) => ({
    id: name,
    name,
    value: values[name],
    onChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  return { values, errors, status, field, onSubmit };
}

export const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
export const isPhone = (s: string) => /^\+?[\d\s-]{7,}$/.test(s);

/**
 * Placeholder submit — replace with your endpoint (e.g. a serverless function,
 * Formspree, or your CMS). Throw on non-2xx so the form shows its error state.
 */
export async function sendForm(kind: 'contact' | 'partnership', data: Record<string, string>) {
  // Example:
  // const res = await fetch(`/api/${kind}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
  // if (!res.ok) throw new Error('Request failed');
  void kind;
  void data;
  await new Promise((r) => setTimeout(r, 900));
}
