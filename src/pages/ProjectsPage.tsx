import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/ProjectCard';
import CtaBand from '../components/CtaBand';
import { PROJECTS } from '../data/content';
import { usePageSetup } from '../hooks/usePageSetup';
import { breadcrumbSchema, usePageMeta } from '../hooks/usePageMeta';

const ALL = 'All projects';

export default function ProjectsPage() {
  const [filter, setFilter] = useState(ALL);

  const filters = useMemo(
    () => [ALL, ...Array.from(new Set(PROJECTS.flatMap((p) => p.services)))],
    [],
  );
  const visible = filter === ALL ? PROJECTS : PROJECTS.filter((p) => p.services.includes(filter));

  usePageSetup();
  usePageMeta({
    title: 'Projects',
    description:
      'Real problems, the solutions BEYOND shipped, and the measurable results they delivered — websites, web apps, software and AI automation.',
    path: '/projects',
    schema: [breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }])],
  });

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Proof, not promises."
        lead="Every project here shows the problem we were given, the solution we built, and the result it delivered."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Projects' }]}
      />

      <section className="section section--flush-top">
        <div className="container">
          <div className="filters reveal" role="group" aria-label="Filter projects by service">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={`chip chip--btn ${filter === f ? 'is-active' : ''}`}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <p className="sr-only" aria-live="polite">
            Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
          </p>

          <div className="projects-grid" key={filter}>
            {visible.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>

          {visible.length === 0 && (
            <p className="muted empty-state">No projects in this category yet.</p>
          )}

          <p className="placeholder-note">
            Placeholder content — replace with real client projects (name, client/industry,
            problem, solution, services, technologies, quantified result, image) before go-live.
          </p>
        </div>
      </section>

      <CtaBand
        title="Have a similar challenge?"
        text="Tell us about it. We’ll show you how we’d approach it and what results to expect."
      />
    </>
  );
}
