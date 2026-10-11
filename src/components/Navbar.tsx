import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import BeyondMark from './BeyondMark';
import { Close, Menu } from './Icons';
import { NAV_ITEMS } from '../data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="brand" aria-label="BEYOND home">
          <BeyondMark size={26} />
          <span>Beyond</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <Link to="/partnerships" className="btn btn--outline btn--sm">Partner With Us</Link>
          <Link to="/contact" className="btn btn--light btn--sm">Get a Solution</Link>
        </div>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`nav__drawer ${open ? 'is-open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => `nav__drawer-link ${isActive ? 'is-active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
        <div className="nav__drawer-actions">
          <Link to="/partnerships" className="btn btn--outline">Partner With Us</Link>
          <Link to="/contact" className="btn btn--light">Get a Solution</Link>
        </div>
      </div>
    </header>
  );
}
