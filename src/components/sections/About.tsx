import { Link } from 'react-router-dom';
import SectionLabel from '../SectionLabel';
import { ArrowUpRight } from '../Icons';
import { VALUES } from '../../data/content';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="reveal">
            <SectionLabel>Who we are</SectionLabel>
            <h2 className="h2">
              A multi-disciplinary team turning services into lasting impact.
            </h2>
            <p className="muted about__text">
              BEYOND is a growing company of skilled professionals delivering
              technology and digital solutions today — with a clear roadmap to
              expand into creative, business and other strategic divisions as each
              becomes operational.
            </p>
          </div>

          <div className="about__cards">
            <article className="card card--quote reveal">
              <p className="card__kicker">Our Mission</p>
              <p className="card__statement">
                BEYOND exists to transform services into solutions, and solutions
                into lasting impact.
              </p>
            </article>
            <article className="card card--quote reveal">
              <p className="card__kicker">Our Vision</p>
              <p className="card__statement">
                To build a world where individuals and businesses create meaningful
                impact, achieve purposeful fulfillment, and attain sustainable
                prosperity through innovation, collaboration, and enterprise.
              </p>
            </article>
          </div>
        </div>

        <div className="values reveal">
          <SectionLabel>Our values</SectionLabel>
          <ul className="chips">
            {VALUES.map((v) => (
              <li key={v} className="chip">{v}</li>
            ))}
          </ul>
          <Link to="/about" className="text-link">
            More about BEYOND <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
