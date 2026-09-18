// Interacciones nativas (sin librerías): reveal por scroll, contadores, spotlight, nav.
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// --- reveal por scroll: [data-reveal] → .is-visible ---
const revealIO = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('is-visible');
    revealIO.unobserve(e.target);
  }),
  { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
);
document.querySelectorAll('[data-reveal]').forEach(el => revealIO.observe(el));

// --- contadores: <span data-count="85" data-prefix="+" data-suffix="%"> ---
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const countIO = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    countIO.unobserve(e.target);
    const el = e.target as HTMLElement;
    const to = Number(el.dataset.count ?? 0);
    const prefix = el.dataset.prefix ?? '';
    const suffix = el.dataset.suffix ?? '';
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = reduced ? 1 : Math.min(1, (now - start) / duration);
      el.textContent = `${prefix}${Math.round(to * easeOut(p))}${suffix}`;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }),
  { threshold: 0.6 },
);
document.querySelectorAll<HTMLElement>('[data-count]').forEach(el => countIO.observe(el));

// --- spotlight: sigue el mouse en [data-spotlight] via --mx/--my ---
document.querySelectorAll<HTMLElement>('[data-spotlight]').forEach(card => {
  card.addEventListener('pointermove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
});

// --- nav: fondo con blur al scrollear ---
const nav = document.querySelector('.nav');
const onScroll = () => nav?.classList.toggle('is-scrolled', scrollY > 24);
addEventListener('scroll', onScroll, { passive: true });
onScroll();
