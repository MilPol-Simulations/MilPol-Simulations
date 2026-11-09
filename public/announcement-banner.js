import {supabase,configured} from './auth-client.js';
if(configured&&supabase){
 const {data,error}=await supabase.from('milpol_announcements').select('message,link_url').eq('id',1).maybeSingle();
 if(!error&&data?.message){const bar=document.createElement('aside');bar.className='milpol-announcement';bar.setAttribute('role','status');const label=document.createElement('span');label.textContent=data.message;bar.append(label);if(data.link_url){const link=document.createElement('a');link.href=data.link_url;link.textContent='Learn more';link.rel='noopener noreferrer';bar.append(link);}const close=document.createElement('button');close.type='button';close.textContent='×';close.setAttribute('aria-label','Dismiss announcement');close.addEventListener('click',()=>bar.remove());bar.append(close);document.querySelector('.topline')?.after(bar);}
}
