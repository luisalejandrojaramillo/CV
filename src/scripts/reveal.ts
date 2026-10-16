/**
 * Scroll reveal: adds `is-visible` to every `[data-reveal]` element the first
 * time it enters the viewport. The matching transition lives in
 * `global.css` and is disabled for users who prefer reduced motion.
 *
 * Uses IntersectionObserver instead of scroll listeners so the browser
 * batches the work off the scroll path.
 */
export function initReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (targets.length === 0) return;

  // Without observer support, show everything immediately.
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
  );

  targets.forEach((el) => observer.observe(el));
}
