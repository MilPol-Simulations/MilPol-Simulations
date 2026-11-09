/* Single shared navigation controller for desktop and mobile. */
(() => {
  function init() {
    document.querySelectorAll('nav').forEach(nav => {
      const button = nav.querySelector('.mobile-menu-toggle');
      const panel = nav.querySelector('.links');
      if (!button || !panel || button.dataset.navReady) return;
      button.dataset.navReady = 'true';
      panel.id = 'milpol-nav-links';
      button.setAttribute('aria-controls', panel.id);
      const setOpen = (open) => {
        panel.classList.toggle('is-open', open);
        panel.classList.toggle('mobile-open', open);
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      };
      button.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        setOpen(button.getAttribute('aria-expanded') !== 'true');
      });
      panel.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
      document.addEventListener('click', e => { if (!nav.contains(e.target)) setOpen(false); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
