import { supabase } from './auth-client.js';
const link = document.getElementById('auth-nav-link');
if (link && supabase) {
  const { data: { session } } = await supabase.auth.getSession();
  if (session) { link.textContent = 'Account'; link.href = 'account.html'; }
  supabase.auth.onAuthStateChange((_event, session) => {
    link.textContent = session ? 'Account' : 'Sign in';
    link.href = session ? 'account.html' : 'login.html';
  });
}
