import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/SectionLabel';
import StatusBadge from '../components/StatusBadge';
import CtaBand from '../components/CtaBand';
import BeyondMark from '../components/BeyondMark';
import { ArrowUpRight } from '../components/Icons';
import { DIVISIONS, MISSION, PROCESS, REASONS, VALUE_DETAILS, VISION } from '../data/content';
import { usePageSetup } from '../hooks/usePageSetup';
import { breadcrumbSchema, usePageMeta } from '../hooks/usePageMeta';

export default function AboutPage() {
  usePageSetup();
  usePageMeta({
    title: 'About Us',
    description:
      'BEYOND is a multi-disciplinary team of skilled professionals transforming services into solutions, and solutions into lasting impact. Learn our mission, vision and values.',
    path: '/about',
    schema: [breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])],
  });

  return (
    <>
      <PageHero
        eyebrow="About BEYOND"
        title="A multi-disciplinary team turning services into lasting impact."
        lead="BEYOND is a growing company of skilled professionals delivering technology and digital solutions today — with a clear roadmap to expand into creative, business and other strategic divisions as each becomes operational."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* Who we are */}
      <section className="section section--flush-top">
        <div className="container story">
          <div className="story__copy reveal">
            <SectionLabel>Who we are</SectionLabel>
            <h2 className="h2">Built around what we can deliver — and ready for what comes next.</h2>
            <p className="muted">
              BEYOND brings together developers, designers and specialists who share one belief:
              good service should become a real solution, and a real solution should leave a
              lasting impact on the people and businesses it serves.
            </p>
            <p className="muted">
              We launched with our Technology &amp; Digital Solutions division because that is
              where our team is strongest today. We would rather do fewer things exceptionally
              than promise everything. New divisions are introduced only when they are ready to
              deliver to the same standard.
            </p>
          </div>
          <div className="story__visual reveal" aria-hidden="true">
            <div className="story__glow" />
            <BeyondMark size={200} glow />
            <span className="story__tagline">Transforming services.<br />Creating value.<br />Making impact.</span>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="section section--alt">
        <div className="container">
          <div className="mv-grid">
            <article className="card mv-card reveal">
              <p className="card__kicker">Our Mission</p>
              <p className="mv-card__text">{MISSION}</p>
            </article>
            <article className="card mv-card reveal">
              <p className="card__kicker">Our Vision</p>
              <p className="mv-card__text">{VISION}</p>
            </article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="split-head reveal">
            <div>
              <SectionLabel>Our values</SectionLabel>
              <h2 className="h2">Seven values that shape every project.</h2>
            </div>
            <p className="muted split-head__aside">
              They guide how we scope work, how we communicate, and how we decide what “done” means.
            </p>
          </div>
          <ol className="values-grid">
            {VALUE_DETAILS.map((v, i) => (
              <li key={v.name} className="card value-card reveal">
                <span className="value-card__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.name}</h3>
                <p>{v.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Divisions roadmap */}
      <section className="section section--alt">
        <div className="container">
          <div className="split-head reveal">
            <div>
              <SectionLabel>Our divisions</SectionLabel>
              <h2 className="h2">One company, growing one division at a time.</h2>
            </div>
            <p className="muted split-head__aside">
              We only present a division as active once it is fully operational.
            </p>
          </div>
          <ol className="roadmap">
            {DIVISIONS.map((d) => (
              <li key={d.name} className={`roadmap__item roadmap__item--${d.status} reveal`}>
                <span className="roadmap__dot" aria-hidden="true" />
                <div className="card roadmap__card">
                  <div className="roadmap__head">
                    <h3>{d.name}</h3>
                    <StatusBadge status={d.status} />
                  </div>
                  <p>{d.description}</p>
                  {d.status === 'live' && (
                    <Link to="/services" className="text-link">
                      See services <ArrowUpRight size={13} />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* How we work */}
      <section className="section">
        <div className="container">
          <div className="center-head reveal">
            <SectionLabel center>How we work</SectionLabel>
            <h2 className="h2">A clear process, from first call to long after launch.</h2>
          </div>
          <ol className="process">
            {PROCESS.map(({ title, description, icon: Icon }, i) => (
              <li key={title} className="process__step reveal">
                <span className="process__icon"><Icon size={18} /></span>
                <span className="process__num">Step {i + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why BEYOND */}
      <section className="section section--alt">
        <div className="container">
          <div className="center-head reveal">
            <SectionLabel center>Why BEYOND</SectionLabel>
            <h2 className="h2">Built to deliver. Built to last.</h2>
          </div>
          <div className="reasons-row">
            {REASONS.map(({ title, description, icon: Icon }) => (
              <article key={title} className="card reason-card reason-card--compact reveal">
                <Icon size={18} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="center-action reveal">
            <Link to="/team" className="btn btn--outline btn--sm">
              Meet the people behind BEYOND <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
