document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.mobile-menu-toggle');
 const links=document.querySelector('#milpol-nav-links');
 if(toggle&&links){
  const close=()=>{toggle.setAttribute('aria-expanded','false');links.classList.remove('is-open');};
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));links.classList.toggle('is-open',open);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('click',e=>{if(!links.contains(e.target)&&!toggle.contains(e.target))close();});
 }
});
