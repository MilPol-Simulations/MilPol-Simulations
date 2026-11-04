import { supabase } from './auth-client.js';

// Reuse the existing navigation and Supabase authentication unchanged.
const link = document.getElementById('auth-nav-link');
if (link && supabase) {
  const { data: { session } } = await supabase.auth.getSession();
  if (session) { link.textContent = 'Account'; link.href = 'account.html'; }
  supabase.auth.onAuthStateChange((_event, session) => {
    link.textContent = session ? 'Account' : 'Sign in';
    link.href = session ? 'account.html' : 'login.html';
  });
}

// Mobile-only menu: the same existing links, not a duplicate navigation.
const nav = document.querySelector('nav .navin');
const links = nav?.querySelector('.links');
if (nav && links) {
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'mobile-nav-toggle';
  toggle.setAttribute('aria-label', 'Open navigation menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'milpol-mobile-nav');
  toggle.innerHTML = '<span class="menu-icon" aria-hidden="true">☰</span><span>Menu</span>';
  links.id = 'milpol-mobile-nav';
  nav.insertBefore(toggle, links);
  const setOpen = (open) => {
    links.classList.toggle('mobile-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    toggle.querySelector('.menu-icon').textContent = open ? '×' : '☰';
  };
  toggle.addEventListener('click', () => setOpen(!links.classList.contains('mobile-open')));
  links.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) setOpen(false);
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
}
