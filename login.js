import { supabase, configured } from './auth-client.js';
const form=document.getElementById('auth-form'), msg=document.getElementById('auth-message');
const signIn=document.getElementById('signin-tab'), signUp=document.getElementById('signup-tab');
const submit=document.getElementById('submit-auth'), reset=document.getElementById('reset-password'), password=document.getElementById('password');
let mode='signin';
function setMode(next){mode=next;signIn.classList.toggle('active',next==='signin');signUp.classList.toggle('active',next==='signup');submit.textContent=next==='signin'?'Sign in':'Create account';reset.hidden=next!=='signin';password.autocomplete=next==='signin'?'current-password':'new-password';msg.textContent='';}
signIn.onclick=()=>setMode('signin');signUp.onclick=()=>setMode('signup');
if (!configured) { msg.textContent='Account sign-in needs configuration. Add your Supabase URL and publishable key to auth-config.js.'; submit.disabled=true;reset.disabled=true; }
else { const {data:{session}}=await supabase.auth.getSession();if(session) location.replace((['store.html','future.html','admin.html'].includes(new URLSearchParams(location.search).get('next')) ? new URLSearchParams(location.search).get('next') : 'account.html')); }
form.addEventListener('submit',async e=>{e.preventDefault();if(!supabase)return;submit.disabled=true;msg.textContent='Please wait…';const email=document.getElementById('email').value.trim(), pass=password.value;
try {const result=mode==='signin'?await supabase.auth.signInWithPassword({email,password:pass}):await supabase.auth.signUp({email,password:pass,options:{emailRedirectTo:new URL('account.html',location.href).href}});
if(result.error)throw result.error;
if(result.data.session) location.replace((['store.html','future.html','admin.html'].includes(new URLSearchParams(location.search).get('next')) ? new URLSearchParams(location.search).get('next') : 'account.html'));else msg.textContent='Account created. Check your email for the confirmation link before signing in.';
}catch(err){msg.textContent=err.message||'Could not complete the request.';}finally{submit.disabled=false;}});
reset.addEventListener('click',async()=>{if(!supabase)return;const email=document.getElementById('email').value.trim();if(!email){msg.textContent='Enter your email address first.';return;}const {error}=await supabase.auth.resetPasswordForEmail(email,{redirectTo:new URL('reset-password.html',location.href).href});msg.textContent=error?error.message:'If that email is registered, a password reset link has been sent.';});
