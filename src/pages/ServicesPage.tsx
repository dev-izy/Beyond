import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/SectionLabel';
import StatusBadge from '../components/StatusBadge';
import CtaBand from '../components/CtaBand';
import Faq from '../components/Faq';
import { ArrowUpRight, Check, Message } from '../components/Icons';
import { CONTACT, CREATIVE_SERVICES, FAQS, PROCESS, TECH_SERVICES } from '../data/content';
import { usePageSetup } from '../hooks/usePageSetup';
import { breadcrumbSchema, faqSchema, serviceSchema, usePageMeta } from '../hooks/usePageMeta';
import { track } from '../lib/analytics';

export default function ServicesPage() {
  usePageSetup();
  usePageMeta({
    title: 'Services',
    description:
      'Website development, web applications, custom software, UI/UX design and AI integration & automation from BEYOND’s Technology Division.',
    path: '/services',
    schema: [
      ...serviceSchema(TECH_SERVICES),
      faqSchema(FAQS),
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Solutions you can get from BEYOND today."
        lead="Our Technology Division is fully operational — from your first website to AI-powered automation that scales with your business."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      >
        <Link to="/contact" className="btn btn--gradient">Get a Solution</Link>
        <a
          href={CONTACT.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn--outline"
          onClick={() => track('whatsapp_click', { location: 'services_hero' })}
        >
          <Message size={15} /> Chat on WhatsApp
        </a>
      </PageHero>

      {/* Technology division */}
      <section className="section section--flush-top" aria-labelledby="tech-heading">
        <div className="container">
          <div className="division-title reveal">
            <h2 id="tech-heading" className="division-title__h">Technology Division</h2>
            <StatusBadge status="live" />
          </div>

          <div className="service-rows">
            {TECH_SERVICES.map(({ slug, title, description, icon: Icon, idealFor, deliverables }) => (
              <article key={slug} id={slug} className="card service-row reveal">
                <div className="service-row__main">
                  <span className="icon-box icon-box--lg"><Icon size={20} /></span>
                  <h3>{title}</h3>
                  <p className="service-row__desc">{description}</p>
                  <p className="service-row__ideal"><strong>Ideal for:</strong> {idealFor}</p>
                </div>
                <div className="service-row__side">
                  <p className="card__kicker">What you get</p>
                  <ul className="checklist">
                    {deliverables.map((d) => (
                      <li key={d}><Check size={14} /> {d}</li>
                    ))}
                  </ul>
                  <Link
                    to={`/contact?service=${encodeURIComponent(title)}`}
                    className="btn btn--outline btn--sm"
                  >
                    Request this service <ArrowUpRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Creative & Digital */}
      <section className="section section--alt" aria-labelledby="creative-heading">
        <div className="container">
          <div className="split-head reveal">
            <div>
              <div className="division-title">
                <h2 id="creative-heading" className="division-title__h">Creative &amp; Digital</h2>
                <StatusBadge status="expanding" />
              </div>
              <p className="muted split-head__sub">
                This division is being built out as our team grows. Talk to us and we’ll tell you
                honestly what we can deliver today.
              </p>
            </div>
          </div>
          <div className="creative-grid">
            {CREATIVE_SERVICES.map(({ label, icon: Icon, description }) => (
              <article key={label} className="card creative-card reveal">
                <span className="icon-box"><Icon size={17} /></span>
                <h3>{label}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className="creative__note reveal">
            BEYOND is progressively expanding into additional sectors as our capabilities grow.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="center-head reveal">
            <SectionLabel center>Our process</SectionLabel>
            <h2 className="h2">How a project runs with BEYOND.</h2>
            <p className="muted">Clear steps, regular check-ins, and no surprises on scope or cost.</p>
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

      {/* FAQ */}
      <section className="section section--alt" id="faq">
        <div className="container faq-layout">
          <div className="reveal">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="h2">Questions, answered.</h2>
            <p className="muted faq-layout__sub">
              Can’t find what you’re looking for? <Link to="/contact" className="inline-link">Ask us directly</Link>.
            </p>
          </div>
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        text="Tell us about the problem you’re solving. We’ll scope it with you and recommend the right approach."
      />
    </>
  );
}
