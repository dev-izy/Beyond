import { Link, useParams } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import CtaBand from '../components/CtaBand';
import ProjectCard, { ProjectMedia } from '../components/ProjectCard';
import { ArrowLeft, ArrowUpRight } from '../components/Icons';
import { PROJECTS, getProject } from '../data/content';
import { usePageSetup } from '../hooks/usePageSetup';
import { breadcrumbSchema, usePageMeta } from '../hooks/usePageMeta';
import NotFoundPage from './NotFoundPage';

export default function ProjectDetailPage() {
  const { slug = '' } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFoundPage />;
  return <ProjectDetail key={slug} slug={slug} />;
}

function ProjectDetail({ slug }: { slug: string }) {
  const project = getProject(slug)!;
  const others = PROJECTS.filter((p) => p.slug !== slug).slice(0, 2);
  const path = `/projects/${slug}`;

  usePageSetup();
  usePageMeta({
    title: `${project.name} — ${project.client}`,
    description: `${project.problem} ${project.solution}`.slice(0, 158),
    path,
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.name,
        about: project.services.join(', '),
        keywords: project.technologies.join(', '),
        creator: { '@type': 'Organization', name: 'BEYOND' },
        dateCreated: project.year,
      },
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: project.name, path },
      ]),
    ],
  });

  return (
    <>
      <section className="page-hero page-hero--project" data-reveal-on-load>
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="container page-hero__inner">
          <Link to="/projects" className="back-link reveal">
            <ArrowLeft size={14} /> All projects
          </Link>
          <p className="eyebrow reveal">{project.client} · {project.industry} · {project.year}</p>
          <h1 className="page-hero__title reveal">{project.name}</h1>
          <p className="page-hero__lead reveal">{project.summary}</p>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container">
          <div className="reveal">
            <ProjectMedia project={project} large />
          </div>

          <dl className="results reveal" aria-label="Results">
            {project.results.map((r) => (
              <div key={r.label} className="results__item">
                <dt>{r.label}</dt>
                <dd className="metric metric--lg">{r.value}</dd>
              </div>
            ))}
          </dl>

          <div className="case">
            <div className="case__body">
              <section className="case__block reveal">
                <SectionLabel>The problem</SectionLabel>
                <p>{project.problem}</p>
              </section>
              <section className="case__block reveal">
                <SectionLabel>The solution</SectionLabel>
                <p>{project.solution}</p>
              </section>
            </div>

            <aside className="card case__aside reveal" aria-label="Project details">
              <dl>
                <div><dt>Client</dt><dd>{project.client}</dd></div>
                <div><dt>Industry</dt><dd>{project.industry}</dd></div>
                <div><dt>Year</dt><dd>{project.year}</dd></div>
                <div>
                  <dt>Services provided</dt>
                  <dd><ul className="tags">{project.services.map((s) => <li key={s}>{s}</li>)}</ul></dd>
                </div>
                <div>
                  <dt>Technologies used</dt>
                  <dd><ul className="tags">{project.technologies.map((t) => <li key={t}>{t}</li>)}</ul></dd>
                </div>
              </dl>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn--outline btn--sm btn--block">
                  Visit live site <ArrowUpRight size={13} />
                </a>
              )}
            </aside>
          </div>

          <p className="placeholder-note">
            Placeholder case study — replace with the real project details and image before go-live.
          </p>
        </div>
      </section>

      {others.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <div className="split-head split-head--end reveal">
              <div>
                <SectionLabel>More work</SectionLabel>
                <h2 className="h2">Other projects</h2>
              </div>
              <Link to="/projects" className="btn btn--outline btn--sm">
                View All Projects <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="projects-grid projects-grid--2">
              {others.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title="Want results like these?"
        text="Tell us about your project and we’ll get back to you with next steps and a tailored quotation."
      />
    </>
  );
}
