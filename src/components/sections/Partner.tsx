import { Link } from 'react-router-dom';
import BeyondMark from '../BeyondMark';
import SectionLabel from '../SectionLabel';
import { ArrowUpRight } from '../Icons';

export default function Partner() {
  return (
    <section className="section section--tight" id="partner">
      <div className="container">
        <div className="partner reveal">
          <div className="partner__copy">
            <SectionLabel>Partnerships</SectionLabel>
            <h2 className="h2">Partner With BEYOND</h2>
            <p>
              Open to businesses, startups, professionals, organizations and
              technology companies ready to build something meaningful together.
            </p>
            <Link to="/partnerships" className="btn btn--light btn--sm">
              Explore Partnership <ArrowUpRight size={14} />
            </Link>
          </div>
          <BeyondMark size={190} glow className="partner__mark" />
        </div>
      </div>
    </section>
  );
}
