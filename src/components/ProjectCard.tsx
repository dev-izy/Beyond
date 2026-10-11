import { Link } from 'react-router-dom';
import { ArrowUpRight, ImageIcon } from './Icons';
import type { Project } from '../data/content';

export function ProjectMedia({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div className={`project-media ${large ? 'project-media--lg' : ''}`}>
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.name} for ${project.client} — project screenshot`}
          loading={large ? 'eager' : 'lazy'}
        />
      ) : (
        <ImageIcon size={large ? 36 : 26} aria-label="Project image placeholder" />
      )}
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const lead = project.results[0];
  const to = `/projects/${project.slug}`;
  return (
    <article className="card project-card reveal">
      <Link to={to} tabIndex={-1} aria-hidden="true">
        <ProjectMedia project={project} />
      </Link>
      <div className="project-card__body">
        <p className="project-card__client">{project.client} · {project.industry}</p>
        <h3 className="project-card__title">
          <Link to={to}>{project.name}</Link>
        </h3>
        <p className="project-card__summary">{project.summary}</p>
        <ul className="tags">
          {[...project.services.slice(0, 1), ...project.technologies.slice(0, 2)].map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="project-card__foot">
          <div>
            <p className="metric">{lead.value}</p>
            <p className="metric__label">{lead.label}</p>
          </div>
          <Link to={to} className="btn btn--outline btn--xs" aria-label={`View project: ${project.name}`}>
            View Project <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </article>
  );
}
