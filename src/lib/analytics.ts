/**
 * Conversion events (PRD §7): form submit, WhatsApp click, email click.
 * Events are pushed to window.dataLayer, which works with Google Tag Manager / GA4.
 * Swap the body of `track` for Plausible, PostHog, etc. if preferred.
 */
export type ConversionEvent =
  | 'contact_form_submit'
  | 'partnership_form_submit'
  | 'whatsapp_click'
  | 'email_click'
  | 'phone_click';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: ConversionEvent, params: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, page_path: window.location.pathname, ...params });
  if (import.meta.env.DEV) console.info('[analytics]', event, params);
}
