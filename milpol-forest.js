/* Gentle scroll-linked depth effect for forest silhouettes. */
(()=>{'use strict';if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
let queued=false;const update=()=>{queued=false;const amount=Math.min(32,window.scrollY*.035);document.body.style.setProperty('--forest-drift',`${amount.toFixed(1)}px`)};
window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update)}},{passive:true});update();})();
