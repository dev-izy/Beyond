import { Link } from 'react-router-dom';
import SectionLabel from '../SectionLabel';
import ProjectCard from '../ProjectCard';
import { ArrowUpRight } from '../Icons';
import { PROJECTS } from '../../data/content';

export default function Projects() {
  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <div className="split-head split-head--end reveal">
          <div>
            <SectionLabel>Featured projects</SectionLabel>
            <h2 className="h2">Proof, not promises.</h2>
            <p className="muted split-head__sub">
              Real problems, the solutions we shipped, and the measurable results
              they delivered.
            </p>
          </div>
          <Link to="/projects" className="btn btn--outline btn--sm">
            View All Projects <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="projects-grid">
          {PROJECTS.slice(0, 3).map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>

        <p className="placeholder-note">
          Placeholder content — replace with real client projects (name,
          client/industry, problem, solution, services, technologies, quantified
          result, image) before go-live.
        </p>
      </div>
    </section>
  );
}
