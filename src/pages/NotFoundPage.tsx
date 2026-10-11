import { Link } from 'react-router-dom';
import BeyondMark from '../components/BeyondMark';
import { ArrowUpRight } from '../components/Icons';
import { usePageSetup } from '../hooks/usePageSetup';
import { usePageMeta } from '../hooks/usePageMeta';

const LINKS = [
  { label: 'Services', to: '/services', text: 'What we can build for you' },
  { label: 'Projects', to: '/projects', text: 'Work we’ve delivered' },
  { label: 'Contact', to: '/contact', text: 'Tell us about your project' },
];

export default function NotFoundPage() {
  usePageSetup();
  usePageMeta({
    title: 'Page Not Found',
    description: 'The page you’re looking for doesn’t exist or has moved.',
    path: '/404',
    noindex: true,
  });

  return (
    <section className="not-found">
      <div className="coming-soon__glow" aria-hidden="true" />
      <div className="container not-found__inner">
        <BeyondMark size={72} glow />
        <p className="not-found__code" aria-hidden="true">404</p>
        <h1>This page went beyond our reach.</h1>
        <p className="muted">The page you’re looking for doesn’t exist or has moved.</p>
        <div className="page-hero__actions">
          <Link to="/" className="btn btn--gradient">Back to Home</Link>
          <Link to="/contact" className="btn btn--outline">Contact Us</Link>
        </div>
        <ul className="not-found__links">
          {LINKS.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="card not-found__link">
                <span>
                  <strong>{l.label}</strong>
                  <small>{l.text}</small>
                </span>
                <ArrowUpRight size={15} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
