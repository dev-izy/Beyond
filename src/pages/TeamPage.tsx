import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import TeamCard from '../components/TeamCard';
import CtaBand from '../components/CtaBand';
import SectionLabel from '../components/SectionLabel';
import { ArrowUpRight } from '../components/Icons';
import { CONTACT, TEAM } from '../data/content';
import { usePageSetup } from '../hooks/usePageSetup';
import { breadcrumbSchema, usePageMeta } from '../hooks/usePageMeta';
import { track } from '../lib/analytics';

const ALL = 'Everyone';

export default function TeamPage() {
  const [filter, setFilter] = useState(ALL);
  const departments = useMemo(() => [ALL, ...Array.from(new Set(TEAM.map((m) => m.department)))], []);
  const visible = filter === ALL ? TEAM : TEAM.filter((m) => m.department === filter);

  usePageSetup();
  usePageMeta({
    title: 'Our Team',
    description:
      'Meet the developers, designers and specialists who are officially part of BEYOND’s operating structure.',
    path: '/team',
    schema: [breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Team', path: '/team' }])],
  });

  return (
    <>
      <PageHero
        eyebrow="The team"
        title="The people behind BEYOND."
        lead="Developers, designers and specialists who are officially part of BEYOND’s operating structure — the same people who will work on your project."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Team' }]}
      />

      <section className="section section--flush-top">
        <div className="container">
          <div className="filters reveal" role="group" aria-label="Filter team by department">
            {departments.map((d) => (
              <button
                key={d}
                type="button"
                className={`chip chip--btn ${filter === d ? 'is-active' : ''}`}
                aria-pressed={filter === d}
                onClick={() => setFilter(d)}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="team-grid" key={filter}>
            {visible.map((m, i) => <TeamCard key={`${m.role}-${i}`} member={m} />)}
          </div>

          <p className="placeholder-note">
            Placeholder profiles — replace with real team members (photo, name, role, bio, skills, links).
          </p>
        </div>
      </section>

      {/* Join BEYOND — path for prospective team members (PRD §2) */}
      <section className="section section--alt">
        <div className="container">
          <div className="card join reveal">
            <div>
              <SectionLabel>Join BEYOND</SectionLabel>
              <h2 className="h2">Want to build with us?</h2>
              <p className="muted">
                We’re always glad to meet skilled developers, designers and specialists who share our
                values. Send a short introduction, your portfolio and the kind of work you do best.
              </p>
            </div>
            <a
              href={`mailto:${CONTACT.careersEmail}?subject=${encodeURIComponent('Joining BEYOND')}`}
              className="btn btn--gradient"
              onClick={() => track('email_click', { location: 'team_join' })}
            >
              Send your introduction <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <CtaBand
        title="Work with this team."
        text="Tell us what you’re building. We’ll match the right people to your project."
      />
    </>
  );
}
