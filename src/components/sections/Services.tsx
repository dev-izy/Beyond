import { Link } from 'react-router-dom';
import SectionLabel from '../SectionLabel';
import { ArrowUpRight } from '../Icons';
import { CREATIVE_SERVICES, TECH_SERVICES } from '../../data/content';

export default function Services() {
  return (
    <section className="section section--alt" id="services">
      <div className="container">
        <div className="split-head reveal">
          <div>
            <SectionLabel>What we do</SectionLabel>
            <h2 className="h2">Solutions you can get from BEYOND today.</h2>
          </div>
          <p className="muted split-head__aside">
            Our Technology Division is fully operational — from your first website
            to AI-powered automation that scales with your business.
          </p>
        </div>

        <div className="division-title reveal">
          <h3>Technology Division</h3>
          <span className="badge badge--live"><span className="badge__dot" />Live now</span>
        </div>

        <div className="services-grid">
          {TECH_SERVICES.map(({ title, description, icon: Icon }) => (
            <article key={title} className="card service-card reveal">
              <span className="icon-box"><Icon size={18} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}

          <Link to="/services" className="card cta-card reveal">
            <p>Not sure what you need? We’ll scope it with you.</p>
            <span className="cta-card__link">
              Explore Our Services <ArrowUpRight size={14} />
            </span>
          </Link>
        </div>

        <div className="card creative reveal">
          <div className="division-title division-title--sm">
            <h3>Creative &amp; Digital</h3>
            <span className="badge badge--expanding"><span className="badge__dot" />Expanding</span>
          </div>
          <ul className="creative__list">
            {CREATIVE_SERVICES.map(({ label, icon: Icon }) => (
              <li key={label}><Icon size={15} /> {label}</li>
            ))}
          </ul>
          <p className="creative__note">
            BEYOND is progressively expanding into additional sectors as our
            capabilities grow.
          </p>
        </div>
      </div>
    </section>
  );
}
