// Ease mouse-wheel scrolling; touch scrolling keeps the browser momentum.
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const desktopPointer = matchMedia('(hover: hover) and (pointer: fine)');
  let frame = 0, target = 0, previousTime = 0;
  const maximum = () => Math.max(0, document.documentElement.scrollHeight - innerHeight);
  function stop() {cancelAnimationFrame(frame);frame=0;previousTime=0;target=scrollY;}
  function tick(time) {
    const elapsed = previousTime ? Math.min(64,time-previousTime) : 16;
    previousTime=time;
    target=Math.max(0,Math.min(maximum(),target));
    const next=scrollY+(target-scrollY)*(1-Math.exp(-elapsed/85));
    window.scrollTo({top:next,behavior:'instant'});
    if(Math.abs(target-scrollY)>1) frame=requestAnimationFrame(tick);
    else {window.scrollTo({top:target,behavior:'instant'});frame=0;previousTime=0;}
  }
  window.addEventListener('wheel',event => {
    if(reduced.matches || !desktopPointer.matches || event.ctrlKey || event.metaKey || event.defaultPrevented || document.body.classList.contains('menu-open') || document.querySelector('dialog[open]') || Math.abs(event.deltaX)>Math.abs(event.deltaY)) return;
    // Leave nested scrollable areas to the browser.
    for(let element=event.target instanceof Element?event.target:null;element && element!==document.body;element=element.parentElement){
      const style=getComputedStyle(element);
      if(/auto|scroll/.test(style.overflowY) && element.scrollHeight>element.clientHeight+1) return;
    }
    const delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?innerHeight:1);
    if(!delta)return;
    if(!frame)target=scrollY;
    const next=Math.max(0,Math.min(maximum(),target+delta));
    if(next===target)return;
    event.preventDefault();target=next;
    if(!frame)frame=requestAnimationFrame(tick);
  },{passive:false});
  window.addEventListener('pointerdown',stop,{passive:true});
  window.addEventListener('touchstart',stop,{passive:true});
  window.addEventListener('keydown',stop);
  window.addEventListener('hashchange',stop);
  window.addEventListener('portfolio:scroll-stop',stop);
  reduced.addEventListener('change',stop);
  desktopPointer.addEventListener('change',stop);
})();
