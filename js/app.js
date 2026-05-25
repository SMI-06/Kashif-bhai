/**
 * Kashif Agency - Main Application
 * Handles all interactions, animations, and form submissions
 */

const App = {
  currentTestimonial: 0,
  testimonialTimer: null,

  init() {
    this.applyTheme();
    Renderer.renderAll();
    this.initLoader();
    this.initNavbar();
    this.initScrollReveal();
    this.initWordRotation();
    this.initServiceFilter();
    this.initPortfolioFilter();
    this.initTestimonialsSlider();
    this.initFAQ();
    this.initCounters();
    this.initContactForm();
    this.initParticles();
    this.initCursor();
    this.initActiveNav();
    document.title = SITE_SETTINGS.brandName + " — " + SITE_SETTINGS.tagline;
  },

  applyTheme() {
    const root = document.documentElement;
    root.style.setProperty('--primary', SITE_SETTINGS.goldColor);
    root.style.setProperty('--primary-dim', SITE_SETTINGS.goldColor + '22');
    root.style.setProperty('--gold', SITE_SETTINGS.goldColor);
    root.style.setProperty('--gold-dim', SITE_SETTINGS.goldColor + '22');
    root.style.setProperty('--secondary', SITE_SETTINGS.accentColor);
    root.style.setProperty('--accent', SITE_SETTINGS.accentColor);
  },

  /* ─── LOADING SCREEN ──────────────────────────── */
  initLoader() {
    const loader = document.getElementById('pageLoader');
    if (!loader) return;
    let progress = 0;
    const bar = loader.querySelector('.loader-bar-fill');
    const pct = loader.querySelector('.loader-pct');
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          loader.classList.add('hide');
          setTimeout(() => loader.remove(), 600);
          document.body.classList.remove('loading');
          this.triggerHeroAnimation();
        }, 400);
      }
      if (bar) bar.style.width = progress + '%';
      if (pct) pct.textContent = Math.floor(progress) + '%';
    }, 80);
  },

  triggerHeroAnimation() {
    const hero = document.querySelector('.hero-content');
    if (hero) hero.classList.add('animate-in');
  },

  /* ─── NAVBAR ──────────────────────────────────── */
  initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    // Scroll behavior
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    }, { passive: true });

    // Mobile toggle
    toggle?.addEventListener('click', () => {
      toggle.classList.toggle('open');
      navLinks?.classList.toggle('open');
    });

    // Close mobile menu on link click
    document.addEventListener('click', (e) => {
      if (e.target.matches('.nav-link')) {
        toggle?.classList.remove('open');
        navLinks?.classList.remove('open');
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    // CTA button scroll
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[href^="#"]');
      if (btn && !btn.matches('.nav-link')) {
        const href = btn.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  },

  /* ─── ACTIVE NAV HIGHLIGHT ────────────────────── */
  initActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      const isActive = href === currentPage || (href === 'index.html' && currentPage === '') || (href === '#home' && currentPage === 'index.html');
      link.classList.toggle('active', isActive);
    });

    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => observer.observe(s));
  },

  /* ─── SCROLL REVEAL ───────────────────────────── */
  initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.dataset.delay || 0;
          setTimeout(() => {
            el.classList.add('revealed');
          }, delay * 100);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    // Will be triggered after render via MutationObserver
    const scanReveal = () => {
      document.querySelectorAll('[data-reveal]:not(.revealed)').forEach((el, i) => {
        el.dataset.delay = el.dataset.delay || i % 5;
        observer.observe(el);
      });
    };
    scanReveal();
    // Rescan after dynamic render
    setTimeout(scanReveal, 200);
  },

  /* ─── WORD ROTATION ───────────────────────────── */
  initWordRotation() {
    const container = document.getElementById('rotatingWords');
    if (!container) return;
    const words = container.querySelectorAll('.rw-item');
    if (!words.length) return;
    let current = 0;
    words[0].classList.add('active');
    setInterval(() => {
      words[current].classList.remove('active');
      words[current].classList.add('out');
      setTimeout(() => words[current].classList.remove('out'), 500);
      current = (current + 1) % words.length;
      words[current].classList.add('active');
    }, 2200);
  },

  /* ─── SERVICE FILTER ──────────────────────────── */
  initServiceFilter() {
    document.addEventListener('click', (e) => {
      if (!e.target.matches('#servicesFilter .filter-btn')) return;
      const filter = e.target.dataset.filter;
      document.querySelectorAll('#servicesFilter .filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      document.querySelectorAll('#servicesGrid .service-card').forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        setTimeout(() => {
          card.style.display = match ? '' : 'none';
          if (match) {
            requestAnimationFrame(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            });
          }
        }, 150);
      });
    });
  },

  /* ─── PORTFOLIO FILTER ────────────────────────── */
  initPortfolioFilter() {
    document.addEventListener('click', (e) => {
      if (!e.target.matches('#portfolioFilter .filter-btn')) return;
      const filter = e.target.dataset.filter;
      document.querySelectorAll('#portfolioFilter .filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      document.querySelectorAll('#portfolioGrid .portfolio-card').forEach((card, i) => {
        const match = filter === 'All' || card.dataset.category === filter;
        card.style.transition = `opacity 0.3s ${i * 0.05}s, transform 0.3s ${i * 0.05}s`;
        if (match) {
          card.style.display = '';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => card.style.display = 'none', 350);
        }
      });
    });
  },

  /* ─── TESTIMONIALS SLIDER ─────────────────────── */
  initTestimonialsSlider() {
    const total = TESTIMONIALS.length;
    const goTo = (idx) => {
      this.currentTestimonial = (idx + total) % total;
      const track = document.getElementById('testimonialsTrack');
      if (track) track.style.transform = `translateX(-${this.currentTestimonial * 100}%)`;
      document.querySelectorAll('#sliderDots .dot').forEach((d, i) => {
        d.classList.toggle('active', i === this.currentTestimonial);
      });
    };

    document.addEventListener('click', (e) => {
      if (e.target.matches('#sliderPrev')) goTo(this.currentTestimonial - 1);
      if (e.target.matches('#sliderNext')) goTo(this.currentTestimonial + 1);
      if (e.target.matches('#sliderDots .dot')) goTo(parseInt(e.target.dataset.index));
    });

    // Auto-play
    this.testimonialTimer = setInterval(() => goTo(this.currentTestimonial + 1), 5000);
  },

  /* ─── FAQ ACCORDION ───────────────────────────── */
  initFAQ() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.faq-q');
      if (!btn) return;
      const idx = btn.dataset.index;
      const answer = document.getElementById(`faq-${idx}`);
      const icon = btn.querySelector('.faq-icon');
      const isOpen = answer.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-a.open').forEach(a => {
        a.classList.remove('open');
        a.style.maxHeight = null;
        a.previousElementSibling.querySelector('.faq-icon').textContent = '+';
      });

      if (!isOpen) {
        answer.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.textContent = '−';
      }
    });
  },

  /* ─── ANIMATED COUNTERS ───────────────────────── */
  initCounters() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target);
          const suffix = el.dataset.suffix || '';
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = Math.floor(current) + suffix;
            if (current >= target) clearInterval(timer);
          }, 16);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    setTimeout(() => {
      document.querySelectorAll('.counter-val, .stat-value').forEach(el => observer.observe(el));
    }, 300);
  },

  /* ─── CONTACT FORM ────────────────────────────── */
  initContactForm() {
    document.addEventListener('submit', (e) => {
      if (!e.target.matches('#contactForm')) return;
      e.preventDefault();
      const form = e.target;
      const data = {
        id: Date.now(),
        name: form.f_name.value.trim(),
        email: form.f_email.value.trim(),
        phone: form.f_phone.value.trim(),
        service: form.f_service.value,
        message: form.f_message.value.trim(),
        datetime: new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' }),
        status: 'new'
      };

      const success = document.getElementById('formSuccess');
      const error = document.getElementById('formError');
      const btnText = document.getElementById('btnText');
      const btnLoader = document.getElementById('btnLoader');

      if (!data.name || !data.email || !data.service || !data.message) {
        error.style.display = 'block';
        setTimeout(() => error.style.display = 'none', 4000);
        return;
      }

      btnText.style.display = 'none';
      btnLoader.style.display = 'inline';

      const sendEmail = () => {
        if (window.emailjs && emailjs.send) {
          return emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone,
            service: data.service,
            message: data.message,
            subject: `Strategy Call Request from ${data.name}`
          });
        }
        return Promise.reject(new Error('EmailJS not initialized'));
      };

      sendEmail().catch(() => {
        const submissions = JSON.parse(localStorage.getItem('ka_submissions') || '[]');
        submissions.push(data);
        localStorage.setItem('ka_submissions', JSON.stringify(submissions));
      }).finally(() => {
        setTimeout(() => {
          btnText.style.display = 'inline';
          btnLoader.style.display = 'none';
          success.style.display = 'block';
          form.reset();
          setTimeout(() => success.style.display = 'none', 6000);
        }, 1200);
      });
    });
  },

  /* ─── PARTICLE CANVAS ─────────────────────────── */
  initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let width, height;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.2;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '#00d4ff' : '#7c3aed';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + Math.floor(this.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    // Draw connections
    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawLines();
      requestAnimationFrame(animate);
    };
    animate();
  },

  /* ─── CUSTOM CURSOR ───────────────────────────── */
  initCursor() {
    const cursor = document.getElementById('customCursor');
    const cursorDot = document.getElementById('cursorDot');
    if (!cursor || !cursorDot || window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0, mouseY = 0, curX = 0, curY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    }, { passive: true });

    const animateCursor = () => {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      cursor.style.left = curX + 'px';
      cursor.style.top = curY + 'px';
      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    document.addEventListener('mouseenter', (e) => {
      if (e.target.matches('a, button, .filter-btn, .service-card, .portfolio-card')) {
        cursor.classList.add('hover');
      }
    }, true);
    document.addEventListener('mouseleave', (e) => {
      if (e.target.matches('a, button, .filter-btn, .service-card, .portfolio-card')) {
        cursor.classList.remove('hover');
      }
    }, true);
  }
};

// ── BOOT ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loading');
  App.init();
});
