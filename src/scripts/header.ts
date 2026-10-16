/**
 * Header behaviour:
 * 1. Adds `data-scrolled` once the page leaves the very top, which gives the
 *    sticky header its background and border.
 * 2. Marks the nav link of the section currently in view with
 *    `aria-current="true"`.
 *
 * Both use IntersectionObserver, so nothing runs on every scroll frame.
 */
export function initHeader(): void {
  const header = document.querySelector<HTMLElement>('[data-site-header]');
  const sentinel = document.querySelector<HTMLElement>('[data-header-sentinel]');
  if (!header || !sentinel || !('IntersectionObserver' in window)) return;

  new IntersectionObserver(([entry]) => {
    header.toggleAttribute('data-scrolled', !entry.isIntersecting);
  }).observe(sentinel);

  const links = new Map<string, HTMLAnchorElement>();
  document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]').forEach((link) => {
    links.set(link.dataset.navLink ?? '', link);
  });

  const sections = [...links.keys()]
    .map((id) => document.getElementById(id))
    .filter((section): section is HTMLElement => section !== null);
  if (sections.length === 0) return;

  // A section counts as active while it crosses the middle of the viewport.
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const link = links.get(entry.target.id);
        if (!link) continue;
        if (entry.isIntersecting) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      }
    },
    { rootMargin: '-50% 0px -50% 0px' },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
