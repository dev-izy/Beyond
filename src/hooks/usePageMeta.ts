import { useEffect } from 'react';
import { SITE } from '../data/content';

type Meta = {
  title: string;
  description: string;
  /** Path for canonical / og:url, e.g. "/about". */
  path: string;
  /** JSON-LD objects for this page (Organization, Service, FAQPage…). */
  schema?: object[];
  noindex?: boolean;
};

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

/** Sets title, description, canonical, Open Graph tags and JSON-LD for the current page. */
export function usePageMeta({ title, description, path, schema = [], noindex }: Meta) {
  useEffect(() => {
    const fullTitle = path === '/' ? title : `${title} — ${SITE.name}`;
    const url = SITE.url + path;
    document.title = fullTitle;

    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', SITE.name);
    setMeta('name', 'twitter:card', 'summary_large_image');

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    document.head.querySelectorAll('script[data-page-schema]').forEach((s) => s.remove());
    schema.forEach((obj) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.dataset.pageSchema = '';
      s.textContent = JSON.stringify(obj);
      document.head.appendChild(s);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path]);
}

/* ---------- schema helpers ---------- */

export const organizationSchema = (contact: { email: string; phone: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/favicon.svg`,
  slogan: SITE.tagline,
  description: SITE.description,
  email: contact.email,
  telephone: contact.phone,
  address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const serviceSchema = (services: { title: string; description: string }[]) =>
  services.map((s) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    description: s.description,
    provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    areaServed: 'NG',
  }));

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: SITE.url + it.path,
  })),
});
