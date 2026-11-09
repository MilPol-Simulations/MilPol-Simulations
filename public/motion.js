// Progressive enhancement only: navigation and content work without this script.
(() => {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav .links a').forEach(link => {
    const target = new URL(link.href, location.href);
    if (target.origin === location.origin && target.pathname.split('/').pop() === current) {
      link.setAttribute('aria-current', 'page');
    }
  });
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const targets = document.querySelectorAll('section .sectionhead, section .card, section .grid4, section .grid3, section .timeline, section .feature');
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.08, rootMargin: '0px 0px 45px 0px' });
  targets.forEach(el => {
    // Don't conceal elements already visible at startup.
    if (el.getBoundingClientRect().top < innerHeight - 20) return;
    el.classList.add('milpol-reveal');
    observer.observe(el);
  });
})();
