import { supabase, configured } from './auth-client.js';
const loading=document.getElementById('account-loading'),content=document.getElementById('account-content'),error=document.getElementById('account-error');
if(!configured){loading.textContent='Account access is not configured yet.';error.textContent='Configure Supabase in auth-config.js.';}
else {try{const {data:{user},error:authError}=await supabase.auth.getUser();if(authError||!user){location.replace('login.html');}else{loading.hidden=true;content.hidden=false;document.getElementById('account-email').textContent=user.email||'MilPol member';}}catch(e){loading.textContent='Unable to check your account.';error.textContent=e.message||'Try again later.';}}
document.getElementById('signout').addEventListener('click',async()=>{if(supabase){await supabase.auth.signOut();location.replace('login.html');}});
