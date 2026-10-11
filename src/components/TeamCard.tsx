import { ArrowUpRight, Github, LinkedIn, Users } from './Icons';
import type { TeamMember } from '../data/content';

export default function TeamCard({ member }: { member: TeamMember }) {
  const { name, role, department, bio, skills, photo, links } = member;
  return (
    <article className="card team-card reveal">
      <div className="team-card__photo">
        {photo ? <img src={photo} alt={`${name}, ${role}`} loading="lazy" /> : <Users size={26} aria-hidden="true" />}
      </div>
      <h3 className="team-card__name">{name}</h3>
      <p className="team-card__role">{role} · {department}</p>
      <p className="team-card__bio">{bio}</p>
      <p className="team-card__skills">{skills.join(' · ')}</p>
      <div className="socials socials--sm">
        {links.linkedin && <a href={links.linkedin} aria-label={`${name} on LinkedIn`}><LinkedIn size={14} /></a>}
        {links.github && <a href={links.github} aria-label={`${name} on GitHub`}><Github size={14} /></a>}
        {links.portfolio && <a href={links.portfolio} aria-label={`${name}’s portfolio`}><ArrowUpRight size={14} /></a>}
      </div>
    </article>
  );
}
