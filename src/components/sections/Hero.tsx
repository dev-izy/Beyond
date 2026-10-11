import { Link } from 'react-router-dom';
import BeyondMark from '../BeyondMark';

export default function Hero() {
  return (
    <section className="hero" id="home" data-reveal-on-load>
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="pill reveal">
            <span className="pill__dot" />
            Technology &amp; Digital Solutions — now live
          </span>
          <h1 className="hero__title reveal">
            Building Digital Solutions That Move Businesses Forward.
          </h1>
          <p className="hero__lead reveal">
            BEYOND designs and builds websites, web applications, software and
            AI-powered automation for businesses, startups and professionals
            ready to grow. Transforming services. Creating value. Making impact.
          </p>
          <div className="hero__ctas reveal">
            <Link to="/contact" className="btn btn--gradient">Get a Solution</Link>
            <Link to="/services" className="btn btn--outline">Explore Our Services</Link>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true">
          <div className="hero__glow" />
          <span className="streak streak--1" />
          <span className="streak streak--2" />
          <span className="streak streak--3" />
          <span className="streak streak--4" />
          <span className="streak streak--5" />
          <BeyondMark size={340} glow className="hero__mark" />
        </div>
      </div>
    </section>
  );
}
