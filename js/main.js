'use strict';

/* =============================================
   NAVBAR — scroll state + mobile toggle
   ============================================= */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('nav-hamburger');
const navLinks  = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav when any link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Close mobile nav on outside click
document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

/* =============================================
   ACTIVE NAV LINK — highlight based on scroll position
   ============================================= */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -40% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* =============================================
   TYPED TEXT — cycling phrases in the hero
   ============================================= */
const typedEl = document.getElementById('typed-text');
const phrases = [
  'Python · REST APIs · Cloud Engineering',
  'FastAPI · Flask · MongoDB',
  'AWS · Azure · GCP · OCI',
  'Event-Driven Systems · Microservices',
  'Clean Code · Type-Safe Python',
];

let phraseIndex = 0;
let charIndex   = 0;
let deleting    = false;

function tick() {
  if (!typedEl) return;

  const phrase = phrases[phraseIndex];

  if (!deleting) {
    typedEl.textContent = phrase.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === phrase.length) {
      deleting = true;
      setTimeout(tick, 1800);
      return;
    }
    setTimeout(tick, 68);
  } else {
    typedEl.textContent = phrase.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(tick, 380);
      return;
    }
    setTimeout(tick, 42);
  }
}

// Start after hero animations settle
setTimeout(tick, 1100);

/* =============================================
   SCROLL REVEAL — fade-up elements on enter
   ============================================= */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold:  0.08,
  rootMargin: '0px 0px -48px 0px',
});

revealEls.forEach(el => revealObserver.observe(el));

/* =============================================
   STAGGER reveal children within grids
   ============================================= */
const staggerParents = document.querySelectorAll(
  '.skills-grid, .projects-grid, .certs-grid, .family-grid, .hobbies-grid'
);

staggerParents.forEach(parent => {
  parent.querySelectorAll('.reveal').forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.07}s`;
  });
});

/* =============================================
   SCROLL TO TOP BUTTON
   ============================================= */
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  scrollToTopBtn.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
