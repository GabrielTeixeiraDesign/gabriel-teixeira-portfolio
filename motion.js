// Progressive scroll effects, no framework or continuous idle animation loop.
(() => {
  const root = document.querySelector('main');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let observer, frame = 0, ribbon;
  function scrollMotion() {
    if (frame || reduced.matches || !ribbon || innerWidth < 701) return;
    frame = requestAnimationFrame(() => {
      if (ribbon?.isConnected) {
        const bounds = ribbon.getBoundingClientRect();
        if (bounds.top < innerHeight && bounds.bottom > 0)
          ribbon.style.setProperty('--ribbon-offset', `${-Math.max(0, innerHeight - bounds.top) * .22}px`);
      }
      frame = 0;
    });
  }
  function enhance() {
    observer?.disconnect();
    const heading = root.querySelector('.hero h1');
    if (heading && !heading.querySelector('.headline-line')) {
      // Wrap the existing words only; preserve wording and line order.
      const lines = heading.innerHTML.split(/<br\s*\/?\s*>/i);
      heading.innerHTML = lines.map(line => `<span class="headline-line">${line}</span>`).join('');
    }
    const hero = root.querySelector('.hero');
    if (hero && !root.querySelector('.scroll-ribbon')) {
      const text = root.querySelector('.tagline')?.textContent || '';
      const strip = document.createElement('div');
      strip.className = 'scroll-ribbon';
      strip.setAttribute('aria-hidden', 'true');
      const track = document.createElement('div');
      track.className = 'ribbon-track';
      for (let i = 0; i < 4; i++) {
        const label = document.createElement('span');
        label.textContent = text;
        track.append(label);
      }
      strip.append(track);
      hero.after(strip);
    }
    ribbon = root.querySelector('.scroll-ribbon');
    const elements = root.querySelectorAll('.section-head,.project,.summary>div,.portrait,.biography,.working,.contact-socials,.email-block,.filters,.case-section,.case-image,.case-overview,.case-return');
    if (reduced.matches || !('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('is-visible'));
      document.documentElement.classList.remove('motion-ready');
      return;
    }
    document.documentElement.classList.add('motion-ready');
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: .08, rootMargin: '0px 0px -24px 0px'});
    elements.forEach((el, i) => {
      el.classList.add('reveal');
      if(root.classList.contains('language-refresh'))el.classList.add('is-visible');
      el.style.setProperty('--delay', `${innerWidth > 700 ? (i % 2) * 70 : 0}ms`);
      observer.observe(el);
    });
    scrollMotion();
  }
  new MutationObserver(enhance).observe(root, {childList:true});
  // Project filters change visibility without creating a new route.
  root.addEventListener('click', event => {if(event.target.closest('[data-filter]')) requestAnimationFrame(enhance)});
  window.addEventListener('scroll', scrollMotion, {passive:true});
  window.addEventListener('resize', scrollMotion, {passive:true});
  reduced.addEventListener('change', enhance);
  enhance();
})();
