// ========== Año dinámico en footer ==========
document.getElementById('year').textContent = new Date().getFullYear();

// ========== Header sombra al scrollear ==========
const header = document.getElementById('header');
const onScroll = () => {
  if (window.scrollY > 12) header.classList.add('is-scrolled');
  else header.classList.remove('is-scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ========== Menú móvil ==========
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ========== Reveal on scroll ==========
const revealEls = document.querySelectorAll(
  '.section__head, .service-card, .about__content, .about__media, .testimonial, .contact__info, .contact__form, .hero__content, .hero__visual'
);
revealEls.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// ========== Validación de formulario ==========
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

const validators = {
  nombre: (v) => v.trim().length >= 3 || 'Ingresá tu nombre completo (mín. 3 caracteres).',
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Ingresá un email válido.',
  telefono: (v) => /^[+\d\s\-()]{7,}$/.test(v.trim()) || 'Ingresá un teléfono válido.',
  interes: (v) => v.trim() !== '' || 'Seleccioná una opción.',
};

const showError = (name, message) => {
  const field = form.querySelector(`[name="${name}"]`).closest('.field');
  const errorEl = form.querySelector(`[data-error-for="${name}"]`);
  if (message === true || message === undefined) {
    field.classList.remove('invalid');
    if (errorEl) errorEl.textContent = '';
  } else {
    field.classList.add('invalid');
    if (errorEl) errorEl.textContent = message;
  }
};

Object.keys(validators).forEach(name => {
  const input = form.querySelector(`[name="${name}"]`);
  if (!input) return;
  input.addEventListener('blur', () => {
    const result = validators[name](input.value);
    showError(name, result);
  });
  input.addEventListener('input', () => {
    if (input.closest('.field').classList.contains('invalid')) {
      const result = validators[name](input.value);
      showError(name, result);
    }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let allValid = true;
  Object.keys(validators).forEach(name => {
    const input = form.querySelector(`[name="${name}"]`);
    const result = validators[name](input.value);
    showError(name, result);
    if (result !== true) allValid = false;
  });

  if (!allValid) return;

  // Demo: simular envío. En producción, conectar a backend / Formspree / EmailJS / etc.
  const data = Object.fromEntries(new FormData(form).entries());
  console.log('Formulario enviado:', data);

  successMsg.hidden = false;
  form.reset();
  setTimeout(() => { successMsg.hidden = true; }, 6000);
});
