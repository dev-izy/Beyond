import { Link } from 'react-router-dom';
import SectionLabel from '../SectionLabel';
import TeamCard from '../TeamCard';
import { ArrowUpRight } from '../Icons';
import { TEAM } from '../../data/content';

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <div className="center-head reveal">
          <SectionLabel center>The team</SectionLabel>
          <h2 className="h2">The people behind BEYOND.</h2>
          <p className="muted">
            Developers, designers and specialists who are officially part of
            BEYOND’s operating structure.
          </p>
        </div>

        <div className="team-grid">
          {TEAM.slice(0, 4).map((m, i) => <TeamCard key={i} member={m} />)}
        </div>

        <div className="center-action reveal">
          <Link to="/team" className="btn btn--outline btn--sm">
            Meet the Team <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
