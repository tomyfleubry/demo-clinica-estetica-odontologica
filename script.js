(() => {
  'use strict';
  const { gsap, ScrollTrigger, Lenis } = window;
  if (!gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  const stats = [...document.querySelectorAll('[data-stat]')];
  const displayStat = (element, value) => {
    element.textContent = Number(element.dataset.stat) % 1
      ? value.toFixed(1).replace('.', ',') : String(Math.round(value));
  };
  const media = gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference)', () => {
    const lenis = Lenis && new Lenis({ lerp: 0.12, smoothWheel: true, syncTouch: false, anchors: true, prevent: node => node.closest?.('details') });
    const tick = time => lenis?.raf(time * 1000);
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }
    gsap.fromTo('.hero h1,.hero-intro>p,.hero .text-link,.hero .button,.rating',
      { y: 14, opacity: 0.88 }, { y: 0, opacity: 1, duration: 0.75, stagger: 0.07, ease: 'power3.out' });
    gsap.fromTo('#hero-photo', { scale: 1.035 }, {
      scale: 1, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 }
    });
    document.querySelectorAll('main>section:not(.hero):not(.proof)').forEach(section => {
      const text = section.querySelectorAll('.reveal:not(img):not(figure)');
      gsap.fromTo(text, { y: 22, opacity: 0.85 }, {
        y: 0, opacity: 1, duration: 0.72, stagger: 0.07, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 88%', once: true }
      });
      section.querySelectorAll('img.reveal,figure.reveal').forEach(image => {
        gsap.fromTo(image, { y: 12, opacity: 0.92 }, {
          y: 0, opacity: 1, duration: 0.85, ease: 'power2.out',
          scrollTrigger: { trigger: image, start: 'top 90%', once: true }
        });
      });
    });
    stats.forEach(element => {
      const end = Number(element.dataset.stat), counter = { value: end % 1 ? 4 : 0 };
      gsap.to(counter, {
        value: end, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: '.proof', start: 'top 90%', once: true },
        onUpdate: () => displayStat(element, counter.value)
      });
    });
    return () => {
      gsap.ticker.remove(tick);
      lenis?.destroy();
      stats.forEach(element => displayStat(element, Number(element.dataset.stat)));
    };
  });
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  document.querySelector('#archivo')?.addEventListener('toggle', () => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
})();
