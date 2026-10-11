import type { ReactNode } from 'react';
import PageHero from '../components/PageHero';
import { usePageSetup } from '../hooks/usePageSetup';
import { breadcrumbSchema, usePageMeta } from '../hooks/usePageMeta';

export type LegalSection = { id: string; title: string; body: ReactNode };

type Props = {
  title: string;
  path: string;
  description: string;
  lead: string;
  updated: string;
  sections: LegalSection[];
};

export default function LegalPage({ title, path, description, lead, updated, sections }: Props) {
  usePageSetup();
  usePageMeta({
    title,
    description,
    path,
    schema: [breadcrumbSchema([{ name: 'Home', path: '/' }, { name: title, path }])],
  });

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        lead={lead}
        crumbs={[{ label: 'Home', to: '/' }, { label: title }]}
      />

      <section className="section section--flush-top">
        <div className="container legal">
          <aside className="legal__toc" aria-label="On this page">
            <p className="card__kicker">On this page</p>
            <ol>
              {sections.map((s) => (
                <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>
              ))}
            </ol>
          </aside>

          <article className="legal__body">
            <p className="legal__updated">Last updated: {updated}</p>
            <p className="placeholder-note legal__draft">
              Draft for review — have this reviewed by a qualified legal practitioner before publishing.
            </p>
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="legal__section">
                <h2>{i + 1}. {s.title}</h2>
                {s.body}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
