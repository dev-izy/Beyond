import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useReveal } from './useReveal';

/** Per-page setup: scroll-reveal, scroll to top on navigation, and support for "#anchor" links. */
export function usePageSetup() {
  const { pathname, hash } = useLocation();
  useReveal([pathname]);

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const el = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }));
  }, [pathname, hash]);
}
