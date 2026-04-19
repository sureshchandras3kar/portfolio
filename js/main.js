'use strict';

/* =============================================
   NAVBAR — scroll state + mobile toggle
   ============================================= */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('nav-hamburger');
const navLinks  = document.getElementById('nav-links');
const navIndicator = document.getElementById('nav-indicator');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const isFinePointer = window.matchMedia('(pointer: fine)');

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
const experienceSection = document.getElementById('experience');
const timeline = experienceSection?.querySelector('.timeline');
const timelineProgress = experienceSection?.querySelector('.timeline-progress');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
      updateNavIndicator();
    }
  });
}, { rootMargin: '-40% 0px -40% 0px' });

sections.forEach(s => sectionObserver.observe(s));

function updateNavIndicator() {
  if (!navLinks || !navIndicator) return;

  const activeLink = navLinks.querySelector('a.active');
  if (!activeLink || window.innerWidth <= 768) {
    navIndicator.style.opacity = '0';
    navIndicator.style.width = '0';
    return;
  }

  navIndicator.style.opacity = '1';
  navIndicator.style.width = `${activeLink.offsetWidth}px`;
  navIndicator.style.transform = `translateX(${activeLink.offsetLeft}px)`;
}

/* =============================================
   TYPED TEXT — cycling phrases in the hero
   ============================================= */
const typedEl = document.getElementById('typed-text');
const profileImg = document.getElementById('profile-img');
const avatarFallback = document.getElementById('avatar-fallback');
const photoFrame = document.querySelector('.photo-frame');
const phrases = [
  'Enterprise API Platforms · Cloud Integrations',
  'Backend Ownership · Production Reliability',
  'Multi-Cloud Products · FinOps Systems',
  'Performance Optimization · Event-Driven Systems',
  'Scalable Python APIs · Platform Engineering',
];

let phraseIndex = 0;
let phraseTimer;

if (profileImg && avatarFallback) {
  profileImg.addEventListener('error', () => {
    profileImg.hidden = true;
    avatarFallback.style.display = 'flex';
  });
}

function showPhrase(nextPhraseIndex) {
  if (!typedEl) return;

  const nextPhrase = phrases[nextPhraseIndex];
  typedEl.classList.add('is-changing');

  window.clearTimeout(phraseTimer);
  phraseTimer = window.setTimeout(() => {
    typedEl.textContent = nextPhrase;
    typedEl.classList.remove('is-changing');
    phraseIndex = nextPhraseIndex;

    phraseTimer = window.setTimeout(() => {
      showPhrase((phraseIndex + 1) % phrases.length);
    }, 2200);
  }, 220);
}

if (typedEl) {
  typedEl.classList.add('typed-word');
  if (prefersReducedMotion.matches) {
    typedEl.textContent = phrases[0];
  } else {
    typedEl.textContent = phrases[0];
    phraseTimer = window.setTimeout(() => {
      showPhrase(1);
    }, 1800);
  }
}

function updateTimelineProgress() {
  if (!timeline || !timelineProgress || prefersReducedMotion.matches) return;

  const rect = timeline.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const start = viewportHeight * 0.82;
  const end = viewportHeight * 0.18;
  const progress = (start - rect.top) / (start - end);
  const clamped = Math.max(0, Math.min(1, progress));

  timelineProgress.style.height = `${clamped * rect.height}px`;
}

function resetPhotoTilt() {
  if (!photoFrame) return;

  photoFrame.style.setProperty('--tilt-x', '0deg');
  photoFrame.style.setProperty('--tilt-y', '0deg');
  photoFrame.style.setProperty('--img-shift-x', '0px');
  photoFrame.style.setProperty('--img-shift-y', '0px');
}

if (photoFrame && !prefersReducedMotion.matches && isFinePointer.matches) {
  photoFrame.addEventListener('pointermove', event => {
    const rect = photoFrame.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

    photoFrame.style.setProperty('--tilt-x', `${offsetY * -10}deg`);
    photoFrame.style.setProperty('--tilt-y', `${offsetX * 12}deg`);
    photoFrame.style.setProperty('--img-shift-x', `${offsetX * -8}px`);
    photoFrame.style.setProperty('--img-shift-y', `${offsetY * -10}px`);
  });

  photoFrame.addEventListener('pointerleave', resetPhotoTilt);
} else {
  resetPhotoTilt();
}

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

if (prefersReducedMotion.matches) {
  revealEls.forEach(el => el.classList.add('visible'));
} else {
  revealEls.forEach(el => revealObserver.observe(el));
}

/* =============================================
   STAGGER reveal children within grids
   ============================================= */
const staggerParents = document.querySelectorAll(
  '.skills-grid, .projects-grid, .certs-grid'
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
const currentYearEl = document.getElementById('current-year');

if (currentYearEl) {
  currentYearEl.textContent = String(new Date().getFullYear());
}

window.addEventListener('scroll', () => {
  if (scrollToTopBtn) {
    scrollToTopBtn.classList.toggle('visible', window.scrollY > 300);
  }

  updateTimelineProgress();
}, { passive: true });

window.addEventListener('resize', () => {
  updateNavIndicator();
  updateTimelineProgress();

  if (!isFinePointer.matches || prefersReducedMotion.matches) {
    resetPhotoTilt();
  }
}, { passive: true });

updateNavIndicator();
updateTimelineProgress();

if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
    });
  });
}

/* =============================================
   MEDIUM BLOG FEED — MODERN GRID
   ============================================= */
async function loadMediumFeed() {
  const gridEl = document.getElementById('blog-grid');
  if (!gridEl) return;

  function renderArticles(items) {
    gridEl.innerHTML = '';
    if (!items.length) {
      gridEl.innerHTML = '<div class="api-loading">No articles found.</div>';
      return;
    }

    // Strip HTML and "Continue reading" from Medium description
    function stripContent(html) {
      const d = document.createElement('div');
      d.innerHTML = html;
      let t = (d.textContent || d.innerText || '').replace(/Continue reading on Medium.*/gi, '').trim();
      return t.length > 200 ? t.slice(0, 197) + '...' : t;
    }

    items.forEach(item => {
      // Date Formatting
      const d = new Date(item.pubDate);
      const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

      // Tag extraction
      let tag = 'Article';
      if (item.categories && item.categories.length > 0) {
        tag = item.categories[0];
      }

      const excerpt = stripContent(item.description);

      const card = document.createElement('a');
      card.href = item.link;
      card.target = "_blank";
      card.rel = "noopener noreferrer me";
      card.className = "article-card";
      
      card.innerHTML = `
        <div class="article-meta">
          <span class="article-date">${dateStr}</span>
          <span class="article-tag">${tag}</span>
        </div>
        <h3 class="article-title">${item.title}</h3>
        <p class="article-excerpt">${excerpt}</p>
      `;

      gridEl.appendChild(card);
    });
  }

  try {
    const res  = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sureshchandrasekar');
    const data = await res.json();
    
    if (data.status === 'ok' && data.items.length > 0) {
      renderArticles(data.items);
    } else {
      gridEl.innerHTML = '<div class="api-loading">No articles found.</div>';
    }
  } catch (err) {
    console.error('Medium feed error:', err);
    gridEl.innerHTML = '<div class="api-loading">Failed to load articles.</div>';
  }
}

loadMediumFeed();

