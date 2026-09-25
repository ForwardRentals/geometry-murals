// Slideshows: prev/next arrows, thumbnails, swipe, keyboard.
document.querySelectorAll('.slideshow').forEach((ss) => {
  const slides = [...ss.querySelectorAll('.ss-slide')];
  const thumbs = [...ss.querySelectorAll('.ss-thumb')];
  if (slides.length < 2) return;
  let i = 0;
  const show = (n) => {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('is-active', k === i));
    thumbs.forEach((t, k) => t.classList.toggle('is-active', k === i));
    const next = slides[(i + 1) % slides.length];
    if (next.loading === 'lazy') next.loading = 'eager';
  };
  ss.querySelector('.ss-prev').addEventListener('click', () => show(i - 1));
  ss.querySelector('.ss-next').addEventListener('click', () => show(i + 1));
  thumbs.forEach((t) => t.addEventListener('click', () => show(+t.dataset.i)));
  let x0 = null;
  const stage = ss.querySelector('.ss-stage');
  stage.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) show(dx < 0 ? i + 1 : i - 1);
    x0 = null;
  });
  ss.tabIndex = 0;
  ss.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
});

// Testimonials carousel
document.querySelectorAll('.t-carousel').forEach((c) => {
  const slides = [...c.querySelectorAll('.t-slide')];
  let i = 0;
  const show = (n) => {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('is-active', k === i));
  };
  c.querySelector('.t-prev').addEventListener('click', () => show(i - 1));
  c.querySelector('.t-next').addEventListener('click', () => show(i + 1));
});

// Mobile menu
const toggle = document.querySelector('.menu-toggle');
toggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.site-nav a').forEach((a) =>
  a.addEventListener('click', () => document.body.classList.remove('menu-open'))
);

// Inquiry forms: submit via AJAX so the visitor stays on the page.
document.querySelectorAll('form.inquiry').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.disabled = true;
    try {
      const res = await fetch(form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/'), {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(res.status);
      form.querySelectorAll('.field, .form-actions').forEach((el) => (el.hidden = true));
      form.querySelector('.form-thanks').hidden = false;
    } catch {
      form.submit();
    }
  });
});
