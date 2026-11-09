/* Progressive visual enhancements only. No navigation/auth/data changes. */
(()=>{'use strict';const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const meter=document.createElement('div');meter.className='mp-scroll-meter';meter.setAttribute('aria-hidden','true');document.body.appendChild(meter);
let pending=false;const update=()=>{pending=false;const max=document.documentElement.scrollHeight-window.innerHeight;meter.style.width=(max>0?Math.min(100,Math.max(0,window.scrollY/max*100)):0)+'%'};
const onScroll=()=>{if(!pending){pending=true;requestAnimationFrame(update)}};window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll,{passive:true});update();
if(reduced||!('IntersectionObserver' in window))return;
const selectors='.pagehero .container, .dev-strip, .variant-panel, .news-promo-inner, footer .footergrid';
const io=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('mp-in');io.unobserve(entry.target)}}},{threshold:.06,rootMargin:'0px 0px 40px 0px'});
for(const el of document.querySelectorAll(selectors)){if(el.closest('nav')||el.classList.contains('milpol-reveal'))continue;if(el.getBoundingClientRect().top<window.innerHeight-10)continue;el.classList.add('mp-soft-reveal');io.observe(el)}
})();
