const state = {
  data: {},
  theme: {}
};

document.addEventListener('DOMContentLoaded', init);

async function init() {
  await loadData();
  applyTheme();
  renderSite();
  initInteractions();
  hideLoader();
}

async function loadData() {
  const [content, theme] = await Promise.all([
    fetchJSON('data/content.json'),
    fetchJSON('data/theme.json')
  ]);

  state.data = content;
  state.theme = theme;
}

async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to load ${url}`);
  return response.json();
}

function applyTheme() {
  const { colors = {}, brand = {} } = state.theme;

  Object.entries(colors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });

  if (brand.siteTitle) document.title = brand.siteTitle;

  const favicon = document.getElementById('favicon');
  if (favicon && brand.favicon) favicon.href = brand.favicon;
}

function renderSite() {
  renderNavbar();
  renderHero();
  renderAbout();
  renderServices();
  renderPortfolio();
  renderPricing();
  renderContact();
  renderTeam();
  renderFaq();
  renderTestimonials();
  renderFooter();
  triggerReveal();
  startCounters();
  startTyping();
}

function renderNavbar() {
  const navbar = state.data.navbar || {};
  const brand = state.theme.brand || {};
  const items = navbar.items || [];

  const navItems = items.map(item => `
    <li class="nav-item">
      <a class="nav-link" href="#${item.target}">
        ${item.label}
      </a>
    </li>
  `).join('');

  setHTML('navbar', `
    <div class="container">
      <a class="navbar-brand" href="#hero">
        <img src="${brand.logo || ''}" alt="Logo" width="34" class="me-2">
        ${brand.name || ''}
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="mainNav">
        <ul class="navbar-nav align-items-lg-center me-lg-3">
          ${navItems}
        </ul>

        <a href="#contact" class="btn btn-brand">
          ${navbar.buttonText || 'Contact'}
        </a>
      </div>
    </div>
  `);
}

function renderHero() {
  const hero = state.data.hero || {};
  const stats = (hero.stats || []).map(stat => `
    <div class="col-6 col-md-4">
      <div class="metric-box">
        <h3 class="counter" data-target="${stat.value}">0</h3>
        <p class="mb-0 text-muted">${stat.label}</p>
      </div>
    </div>
  `).join('');

  const cards = (hero.cards || []).map(card => `
    <div class="floating-card">
      <div class="icon-box">
        <i class="${card.icon}"></i>
      </div>
      <h5>${card.title}</h5>
      <p class="mb-0 text-muted">${card.text}</p>
    </div>
  `).join('');

  setHTML('hero', `
    <div class="hero-section">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-7">
            <div class="reveal">
              <div class="hero-badge">
                <i class="bi bi-stars"></i>
                ${hero.badge || ''}
              </div>

              <h1 class="hero-title">
                ${hero.titlePrefix || ''}
                <span class="typing-text d-block" data-words='${encodeURIComponent(JSON.stringify(hero.typingWords || []))}'></span>
              </h1>

              <p class="hero-desc">
                ${hero.description || ''}
              </p>

              <div class="hero-cta d-flex flex-wrap gap-3">
                <a href="#contact" class="btn btn-brand">
                  ${hero.primaryButton || 'Contact'}
                </a>

                <a href="#portfolio" class="btn btn-outline-brand">
                  ${hero.secondaryButton || 'Portfolio'}
                </a>
              </div>

              <div class="hero-stats row g-3 mt-2">
                ${stats}
              </div>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="hero-visual reveal">
              <div class="hero-grid">
                ${cards}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
}

function renderAbout() {
  const about = state.data.about || {};
  const points = (about.points || []).map(point => `
    <li class="mb-3">
      <i class="bi bi-check-circle-fill text-primary me-2"></i>
      ${point}
    </li>
  `).join('');

  setHTML('about', `
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <div class="about-image-wrap reveal">
            <img src="${about.image || ''}" alt="About Image" class="img-fluid rounded-4">
          </div>
        </div>

        <div class="col-lg-6">
          <div class="reveal">
            <p class="section-subtitle">${about.subtitle || ''}</p>
            <h2 class="section-title">${about.title || ''}</h2>
            <p class="section-desc ms-0 mb-4">${about.description || ''}</p>

            <ul class="list-unstyled text-start">
              ${points}
            </ul>

            <a href="#services" class="btn btn-brand mt-2">
              ${about.button || 'Learn More'}
            </a>
          </div>
        </div>
      </div>
    </div>
  `);
}

function renderServices() {
  const services = state.data.services || {};
  const cards = (services.items || []).map(service => `
    <div class="col-md-6 col-lg-4">
      <div class="service-card reveal">
        <div class="service-icon">
          <i class="${service.icon}"></i>
        </div>
        <h4>${service.title}</h4>
        <p class="text-muted">${service.description}</p>
        <a href="#contact" class="text-primary fw-bold">
          Learn More <i class="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  `).join('');

  setHTML('services', `
    ${sectionHeader(services)}

    <div class="container">
      <div class="row g-4">
        ${cards}
      </div>
    </div>
  `);
}

function renderPortfolio(){

}

function renderTeam(){

}

function renderPricing(){

}

function renderTestimonials(){

}

function renderFaq(){

}

function renderContact(){

}

function renderFooter() {
  const footer = state.data.footer || {};
  const links = (footer.links || []).map(link => `
    <a href="#${link.target}" class="me-3">${link.label}</a>
  `).join('');

  const socials = (footer.socials || []).map(social => `
    <a href="${social.url}" target="_blank" rel="noopener noreferrer">
      <i class="${social.icon}"></i>
    </a>
  `).join('');

  setHTML('footer', `
    <div class="footer">
      <div class="container">
        <div class="row align-items-center g-3">
          <div class="col-lg-4">
            <p class="mb-0 text-muted">${footer.copy || ''}</p>
          </div>

          <div class="col-lg-4 text-center">
            ${links}
          </div>

          <div class="col-lg-4 text-lg-end social-links">
            ${socials}
          </div>
        </div>
      </div>
    </div>
  `);
}

function sectionHeader(section) {
  return `
    <div class="container">
      <div class="text-center mb-5 reveal">
        <p class="section-subtitle">${section.subtitle || ''}</p>
        <h2 class="section-title">${section.title || ''}</h2>
        <p class="section-desc">${section.description || ''}</p>
      </div>
    </div>
  `;
}

function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function initInteractions() {
  window.addEventListener('scroll', handleScrollEffects);
  handleScrollEffects();
  setupThemeToggle();
  setupContactForm();
  setupActiveLinks();
}

function handleScrollEffects() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }
  triggerReveal();
}

function triggerReveal() {
  document.querySelectorAll('.reveal').forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      item.classList.add('visible');
    }
  });
}

function startCounters() {
  document.querySelectorAll('.counter').forEach(counter => {
    let started = false;

    function animateCounter() {
      const rect = counter.getBoundingClientRect();
      if (started || rect.top > window.innerHeight) return;

      started = true;
      const target = Number(counter.dataset.target || 0);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 80));

      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          counter.textContent = `${target}+`;
          clearInterval(interval);
        } else {
          counter.textContent = `${current}+`;
        }
      }, 24);
    }

    animateCounter();
    window.addEventListener('scroll', animateCounter);
  });
}

function startTyping() {
  const element = document.querySelector('.typing-text');
  if (!element) return;

  const words = JSON.parse(decodeURIComponent(element.dataset.words || '[]'));
  if (!words.length) return;

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const currentWord = words[wordIndex];

    if (!deleting) {
      charIndex++;
      element.textContent = currentWord.substring(0, charIndex);

      if (charIndex === currentWord.length) {
        deleting = true;
        setTimeout(type, 1300);
        return;
      }
    } else {
      charIndex--;
      element.textContent = currentWord.substring(0, charIndex);

      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(type, deleting ? 40 : 90);
  }

  type();
}

function setupThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const savedTheme = localStorage.getItem('theme-mode');
  if (savedTheme === 'dark') document.body.classList.add('dark-mode');

  updateThemeIcon();

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem(
      'theme-mode',
      document.body.classList.contains('dark-mode') ? 'dark' : 'light'
    );
    updateThemeIcon();
  });
}

function updateThemeIcon() {
  const icon = document.querySelector('#themeToggle i');
  if (!icon) return;

  icon.className = document.body.classList.contains('dark-mode')
    ? 'bi bi-sun-fill'
    : 'bi bi-moon-stars-fill';
}

function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const success = document.getElementById('formSuccess');
    const error = document.getElementById('formError');
    const button = document.getElementById('submitBtn');
    const spinner = button?.querySelector('.spinner-border');

    if (success) success.style.display = 'none';
    if (error) error.style.display = 'none';

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      if (error) {
        error.textContent = 'Please fill all required fields.';
        error.style.display = 'block';
      }
      return;
    }

    if (spinner) spinner.classList.remove('d-none');
    if (button) button.disabled = true;

    try {
      const formData = Object.fromEntries(new FormData(form).entries());

      const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Submission failed');

      if (success) success.style.display = 'block';
      form.reset();
      form.classList.remove('was-validated');
    } catch {
      if (error) {
        error.textContent = 'Server unavailable. Please try again later.';
        error.style.display = 'block';
      }
    } finally {
      if (spinner) spinner.classList.add('d-none');
      if (button) button.disabled = false;
    }
  });
}

function setupActiveLinks() {
  const links = [...document.querySelectorAll('.nav-link')];
  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  window.addEventListener('scroll', () => {
    let current = 'hero';

    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) current = section.id;
    });

    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  });
}

function hideLoader() {
  setTimeout(() => {
    const loader = document.getElementById('page-loader');
    if (loader) loader.classList.add('hidden');
  }, 600);
}