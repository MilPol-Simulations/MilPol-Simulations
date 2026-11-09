import {supabase, configured} from './auth-client.js';
const status=document.getElementById('poll-status');
const submit=document.getElementById('poll-submit');
const login=document.getElementById('poll-login');
const radios=[...document.querySelectorAll('input[name="future-aircraft"]')];
let user=null;let busy=false;
const message=(value)=>{status.textContent=value;};
const setBusy=(v)=>{busy=v;submit.disabled=v||!user||!radios.some(r=>r.checked);};
function redirect(){window.location.href='login.html?next=future.html';}
login.addEventListener('click',(e)=>{e.preventDefault();redirect();});
radios.forEach(r=>r.addEventListener('change',()=>{if(!user){redirect();return;}setBusy(false);}));
async function init(){
 if(!configured||!supabase){message('Voting is not configured yet.');submit.disabled=true;return;}
 const {data:{session},error}=await supabase.auth.getSession();
 if(error){message('Unable to check sign-in status. Please try again.');return;}
 user=session?.user||null;
 if(!user){message('Sign in to cast your vote.');login.hidden=false;submit.hidden=true;return;}
 const {data,error:voteError}=await supabase.from('future_project_votes').select('project_id').eq('user_id',user.id).maybeSingle();
 if(voteError){message('Voting is not available yet. Please try again later.');return;}
 if(data){const selected=radios.find(r=>r.value===data.project_id);if(selected)selected.checked=true;message('Your saved vote is selected. You can change it.');}
 else message('Choose one aircraft to cast your vote.');
 setBusy(false);
}
submit.addEventListener('click',async()=>{
 if(!user){redirect();return;}
 const project=radios.find(r=>r.checked)?.value;if(!project||busy)return;
 setBusy(true);message('Saving your vote…');
 const {error}=await supabase.from('future_project_votes').upsert({user_id:user.id,project_id:project},{onConflict:'user_id'});
 message(error?'Could not save your vote. Please try again.':'Your vote has been saved. Thank you!');setBusy(false);
});
init();
