import { supabase } from './auth-client.js';

// Authentication link only. Navigation is controlled by nav-menu.js.
const link = document.getElementById('auth-nav-link');
if (link && supabase) {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    const update = (session) => {
      link.textContent = session ? 'Account' : 'Sign in';
      link.href = session ? 'account.html' : 'login.html';
    };
    update(session);
    supabase.auth.onAuthStateChange((_event, session) => update(session));
  } catch (error) { console.error('MilPol authentication navigation:', error); }
}
