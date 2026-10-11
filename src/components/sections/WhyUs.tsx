import SectionLabel from '../SectionLabel';
import { REASONS } from '../../data/content';

export default function WhyUs() {
  return (
    <section className="section" id="why">
      <div className="container why__grid">
        <div className="why__intro reveal">
          <SectionLabel>Why BEYOND</SectionLabel>
          <h2 className="h2">Built to deliver.<br />Built to last.</h2>
          <p className="muted">
            We combine real expertise with a partnership mindset — so what we build
            keeps creating value long after launch.
          </p>
        </div>

        <div className="why__cards">
          {REASONS.map(({ title, description, icon: Icon }, i) => (
            <article key={title} className="card reason-card reveal">
              <div className="reason-card__top">
                <Icon size={18} />
                <span className="reason-card__num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
