import {supabase,configured} from './auth-client.js';
const $=id=>document.getElementById(id),panel=$('resend-admin'),select=$('resend-post'),send=$('resend-send'),status=$('resend-status');
if(configured&&supabase){
 const {data:{user}}=await supabase.auth.getUser();
 if(user){
  const {data:admin}=await supabase.rpc('milpol_is_admin');
  if(admin){panel.hidden=false;
   const {data:posts,error}=await supabase.from('milpol_posts').select('id,title,published_at').eq('published',true).order('published_at',{ascending:false});
   if(error)status.textContent='Could not load articles: '+error.message;
   else for(const post of posts||[])select.add(new Option(post.title,post.id));
   send.addEventListener('click',async()=>{
    if(!select.value){status.textContent='Choose a published article first.';return;}
    if(!confirm('Send this article to subscribed members? This cannot be undone.'))return;
    send.disabled=true;status.textContent='Sending up to 10 emails…';
    try{const {data,error}=await supabase.functions.invoke('milpol-newsletter',{body:{post_id:select.value}});
     if(error)throw error;if(data?.error)throw Error(data.error);
     const s=data.stats||{};status.textContent=`Sent this batch: ${data.sent_this_request||0}. Total sent: ${s.sent||0}. Queued: ${s.queued||0}. Failed: ${s.failed||0}.`;
    }catch(e){status.textContent='Send failed. Check Supabase Edge Function logs. '+(e.message||'');}
    finally{send.disabled=false;}
   });
  }
 }
}
