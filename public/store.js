// Reuses the site's existing Supabase client; does not modify auth configuration.
import { supabase, configured } from './auth-client.js';
const auth = document.getElementById('store-auth');
const content = document.getElementById('store-content');
function signInPrompt() {
  const next = encodeURIComponent('store.html');
  auth.innerHTML = `Please <a class="store-login" href="login.html?next=${next}">sign in to your MilPol account</a> to view the aircraft store.`;
  content.hidden = true;
}
if (!configured || !supabase) {
  auth.textContent = 'Account access is currently unavailable. Please try again later.';
} else {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) signInPrompt();
    else {
      auth.textContent = `Signed in as ${data.user.email || 'MilPol member'}. Purchasing is not yet available.`;
      content.hidden = false;
    }
  } catch (_) {
    auth.textContent = 'Unable to verify your session. Please try again later.';
  }
}
