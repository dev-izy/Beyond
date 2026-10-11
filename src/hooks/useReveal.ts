import { useEffect } from 'react';

/** Adds `is-visible` to every `.reveal` element once it scrolls into view. */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'));
    // Above-the-fold hero content animates in on load, not on scroll.
    const hero = els.filter((el) => el.closest('[data-reveal-on-load]'));
    requestAnimationFrame(() => hero.forEach((el) => el.classList.add('is-visible')));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    els.filter((el) => !hero.includes(el)).forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
