import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Crumb = { label: string; to?: string };

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  crumbs: Crumb[];
  children?: ReactNode;
};

/** Top-of-page header used on every inner page. */
export default function PageHero({ eyebrow, title, lead, crumbs, children }: Props) {
  return (
    <section className="page-hero" data-reveal-on-load>
      <div className="page-hero__bg" aria-hidden="true" />
      <div className="container page-hero__inner">
        <nav aria-label="Breadcrumb" className="crumbs reveal">
          <ol>
            {crumbs.map((c, i) => (
              <li key={c.label}>
                {c.to && i < crumbs.length - 1 ? (
                  <Link to={c.to}>{c.label}</Link>
                ) : (
                  <span aria-current="page">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="page-hero__title reveal">{title}</h1>
        {lead && <p className="page-hero__lead reveal">{lead}</p>}
        {children && <div className="page-hero__actions reveal">{children}</div>}
      </div>
    </section>
  );
}
