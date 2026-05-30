/**
 * KASHIF AGENCY — Main Application JS
 * Dynamically renders all content from JSON data files
 */

/* ─────────────────────────────────────────────────────────
   SVG ICON LIBRARY
───────────────────────────────────────────────────────── */
const ICONS = {
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  megaphone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  "trending-up": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  "bar-chart-2": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  bot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="11"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>`,
  brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.065-4.636A2.5 2.5 0 0 1 8.5 9.5a2.5 2.5 0 0 1-1.04-3.55A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.065-4.636A2.5 2.5 0 0 0 15.5 9.5a2.5 2.5 0 0 0 1.04-3.55A2.5 2.5 0 0 0 14.5 2z"/></svg>`,
  workflow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h3a3 3 0 0 1 3 3v6"/><path d="m18 18-2-2 2-2"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  key: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  "map-pin": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  monitor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  "chevron-left": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  "chevron-right": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  "arrow-right": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98" fill="white"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,
};

const ic = (name, size = 20) => {
  const raw = ICONS[name] || ICONS["star"];
  return `<svg width="${size}" height="${size}" style="flex-shrink:0">${raw.replace(/^<svg[^>]*>/, "").replace("</svg>", "")}</svg>`;
};

/* ─────────────────────────────────────────────────────────
   DATA STORE
───────────────────────────────────────────────────────── */
const DATA = {};

async function loadData() {
  const files = [
    "config",
    "content",
    "services",
    "portfolio",
    "testimonials",
    "team",
    "faqs",
  ];
  await Promise.all(
    files.map(async (name) => {
      try {
        const r = await fetch(`data/${name}.json`);
        DATA[name] = await r.json();
      } catch (e) {
        console.warn(`Failed to load ${name}.json`, e);
        DATA[name] = [
          "services",
          "portfolio",
          "testimonials",
          "team",
          "faqs",
        ].includes(name)
          ? []
          : {};
      }
    }),
  );
}

/* ─────────────────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────────────────── */
function renderNavbar() {
  const { site, nav } = DATA.config;
  const el = document.getElementById("navbar");
  if (!el) return;

  el.innerHTML = `
    <div class="nav-inner">
      <a href="#home" class="nav-logo">
        <div class="logo-mark">${site.logo}</div>
        <span class="logo-text">${site.name.split(" ")[0]} <span>${site.name.split(" ").slice(1).join(" ")}</span></span>
      </a>
      <nav class="nav-links" aria-label="Main navigation">
        ${nav.map((n) => `<a href="${n.href}" class="nav-link">${n.label}</a>`).join("")}
        <a href="#contact" class="nav-link nav-cta">Get Started</a>
      </nav>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="nav-mobile" id="nav-mobile" role="navigation">
      ${nav.map((n) => `<a href="${n.href}" class="nav-link">${n.label}</a>`).join("")}
      <a href="#contact" class="nav-link" style="color:var(--primary);font-weight:700">Get Started →</a>
    </div>`;

  const toggle = document.getElementById("nav-toggle");
  const mobile = document.getElementById("nav-mobile");
  toggle.addEventListener("click", () => {
    const open = mobile.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  mobile.querySelectorAll(".nav-link").forEach((l) =>
    l.addEventListener("click", () => {
      mobile.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }),
  );

  // Scroll effects
  const onScroll = () => {
    el.classList.toggle("scrolled", window.scrollY > 50);
    const sections = document.querySelectorAll("section[id]");
    let current = "";
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 130) current = s.id;
    });
    el.querySelectorAll(".nav-link:not(.nav-cta)").forEach((l) => {
      const href = l.getAttribute("href").replace("#", "");
      l.classList.toggle("active", href === current);
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ─────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────── */
function renderHero() {
  const h = DATA.content.hero;
  const el = document.getElementById("hero-inner");
  if (!el || !h) return;

  const particles = Array.from({ length: 25 }, (_, i) => {
    const left = (i * 4.1) % 100;
    const dur = 9 + (i % 7) * 2;
    const delay = -(i * 1.3);
    const drift = ((i % 5) - 2) * 30;
    return `<div class="particle" style="left:${left}%;animation-duration:${dur}s;animation-delay:${delay}s;--drift:${drift}px"></div>`;
  }).join("");

  el.innerHTML = `
  <div class="hero-particles" aria-hidden="true">${particles}</div>  
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-12 hero-content reveal">
        <div class="orbit-ring ring-1">
          <div class="orbit-dot"></div>
        </div>
        <div class="orbit-ring ring-2">
          <div class="orbit-dot"></div>
        </div>
        <div class="orbit-ring ring-3">
          <div class="orbit-dot"></div>
        </div>
        <h1 class="hero-title">
          ${h.headline}
          <span class="line2">${h.headlineHighlight}</span>
        </h1>
        <p class="hero-subtitle">${h.subheadline}</p>
        <div class="hero-cta">
          <a href="${h.cta1.href}" class="btn-primary">${h.cta1.label}</a>
        </div>
      </div>
    </div>
  </div>
    `;
}

/* ─────────────────────────────────────────────────────────
   Stats
───────────────────────────────────────────────────────── */

function renderStats() {
  const s = DATA.content.stats;
  const si = document.getElementById("stat-inner");

  si.innerHTML = `
    <div class="container stats-container">
      <div class="row align-items-center g-5">
        <div class="col-lg-12">
          <div class="hero-stats">
            ${s.stat
              .map(
                (stats) => `
                  <div class="stat-item">
                    <span 
                      class="stat-value" 
                      data-target="${stats.value.replace(/\D/g, "")}"
                      data-symbol="${stats.value.replace(/[0-9]/g, "")}"
                    >
                      0
                    </span>

                    <span class="stat-label">${stats.label}</span>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  `;

  initCounter();
}

function initCounter() {
  const counters = document.querySelectorAll(".stat-value");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;

          const target = +counter.dataset.target;
          const symbol = counter.dataset.symbol;

          let current = 1;
          const speed = target / 10;

          const updateCounter = () => {
            current += speed;

            if (current < target) {
              counter.innerText = Math.floor(current) + symbol;

              requestAnimationFrame(updateCounter);
            } else {
              counter.innerText = target + symbol;
            }
          };

          updateCounter();

          observer.unobserve(counter);
        }
      });
    },
    {
      threshold: 1,
    },
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
}
/* ─────────────────────────────────────────────────────────
   ABOUT
───────────────────────────────────────────────────────── */
function renderAbout() {
  const a = DATA.content.about;
  const cfg = DATA.config.site;
  const el = document.getElementById("about-inner");
  if (!el || !a) return;

  el.innerHTML = `
    <div class="container">
      <div class="about-grid">
        <div class="about-visual reveal-left">
        <div class="section-badge">${a.badge}</div>
          <h2 class="section-title mb-3">${a.headline} <span class="highlight-gold">${a.headlineHighlight}</span></h2>
          <p class="section-desc mb-3">${a.description1}</p>
          <p class="section-desc mb-4">${a.description2}</p>
        </div>
        <div class="about-content reveal-right">
         <div class="about-features">
            ${a.features
              .map(
                (f) => `
              <div class="about-feature">
                <div class="about-feature-icon">${f.icon}</div>
                <div>
                  <h4>${f.title}</h4>
                  <p>${f.desc}</p>
                </div>
              </div>`,
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>`;
}

/* ─────────────────────────────────────────────────────────
   SERVICES
───────────────────────────────────────────────────────── */
function renderServices() {
  const services = DATA.services;
  const el = document.getElementById("services-inner");
  if (!el || !services.length) return;

  el.innerHTML = `
    <div class="container">
      <div class="text-center mb-5 reveal">
        <div class="section-badge">What We Do</div>
        <h2 class="section-title">Full-Spectrum Digital <span class="highlight">Solutions</span></h2>
        <p class="section-desc mx-auto mt-3">Everything your business needs to dominate the digital landscape — all under one roof.</p>
      </div>
      <div class="services-grid">
        ${services
          .map(
            (s, i) => `
          <div class="service-card reveal" style="transition-delay:${i * 0.08}s">
            ${s.badge ? `<span class="service-badge">${s.badge}</span>` : ""}
            <div class="service-card-glow" style="background:radial-gradient(circle at top right,${s.color}20,transparent 60%)"></div>
            <div class="service-icon-wrap" style="background:${s.color}15;border-color:${s.color}30;color:${s.color}">
              ${ic(s.icon)}
            </div>
            <div class="service-category">${s.category}</div>
            <h3 class="service-title">${s.title}</h3>
            <p class="service-desc">${s.description}</p>
            <div class="service-features">
              ${s.features.map((f) => `<span class="service-feature-tag">${f}</span>`).join("")}
            </div>
            <div class="service-arrow" style="color:${s.color}">${ic("arrow-right", 16)}</div>
          </div>`,
          )
          .join("")}
      </div>
    </div>`;
}

/* ─────────────────────────────────────────────────────────
   PORTFOLIO
───────────────────────────────────────────────────────── */
function renderPortfolio() {
  const portfolio = DATA.portfolio;
  const el = document.getElementById("portfolio-inner");
  if (!el || !portfolio.length) return;

  const cats = ["All", ...new Set(portfolio.map((p) => p.category))];

  el.innerHTML = `
    <div class="container">
      <div class="text-center mb-5 reveal">
        <div class="section-badge">Our Work</div>
        <h2 class="section-title">Transformative <span class="highlight">Projects</span></h2>
        <p class="section-desc mx-auto mt-3">A showcase of our most impactful work across industries and disciplines.</p>
      </div>
      <div class="portfolio-filters reveal">
        ${cats.map((c) => `<button class="filter-btn${c === "All" ? " active" : ""}" data-filter="${c}">${c}</button>`).join("")}
      </div>
      <div class="portfolio-grid" id="portfolio-grid">
        ${portfolio
          .map(
            (p, i) => `
          <div class="portfolio-card reveal" data-category="${p.category}" style="transition-delay:${(i % 3) * 0.1}s">
            <div class="portfolio-thumb" style="background:${p.gradient}">
              <div class="portfolio-thumb-icon">${ic(p.icon, 32)}</div>
              <div class="portfolio-overlay">
                <div class="portfolio-overlay-content">
                  <div class="portfolio-overlay-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
                  <button class="portfolio-overlay-btn">View Details</button>
                </div>
              </div>
            </div>
            <div class="portfolio-body">
              <span class="portfolio-category">${p.category}</span>
              <h3 class="portfolio-title">${p.title}</h3>
              <p class="portfolio-desc">${p.description}</p>
              <div class="portfolio-footer">
                <span class="portfolio-result">${ic("trending-up", 12)} ${p.result}</span>
              </div>
            </div>
          </div>`,
          )
          .join("")}
      </div>
    </div>`;

  el.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      el.querySelectorAll(".filter-btn").forEach((b) =>
        b.classList.remove("active"),
      );
      btn.classList.add("active");
      const f = btn.dataset.filter;
      el.querySelectorAll(".portfolio-card").forEach((card) => {
        const show = f === "All" || card.dataset.category === f;
        card.style.opacity = "0";
        card.style.transform = "scale(0.95)";
        setTimeout(() => {
          card.style.display = show ? "" : "none";
          if (show)
            requestAnimationFrame(() => {
              card.style.opacity = "1";
              card.style.transform = "scale(1)";
            });
        }, 150);
      });
    });
  });

  // Smooth transitions for portfolio cards
  el.querySelectorAll(".portfolio-card").forEach((card) => {
    card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  });
}

/* ─────────────────────────────────────────────────────────
   WHY US
───────────────────────────────────────────────────────── */
function renderWhyUs() {
  const w = DATA.content.whyUs;
  const el = document.getElementById("why-us-inner");
  if (!el || !w) return;

  el.innerHTML = `
    <div class="container">
      <div class="text-center mb-5 reveal">
        <div class="section-badge">${w.badge}</div>
        <h2 class="section-title">${w.headline} <span class="highlight">${w.headlineHighlight}</span></h2>
        <p class="section-desc mx-auto mt-3">Trusted by 300+ businesses across 15+ industries worldwide.</p>
      </div>
      <div class="why-grid">
        ${w.reasons
          .map(
            (r, i) => `
          <div class="why-card reveal" style="transition-delay:${i * 0.1}s">
            <div class="why-icon-wrap">${ic(r.icon)}</div>
            <h3 class="why-title">${r.title}</h3>
            <p class="why-desc">${r.desc}</p>
          </div>`,
          )
          .join("")}
      </div>
    </div>`;
}

/* ─────────────────────────────────────────────────────────
   AI SOLUTIONS
───────────────────────────────────────────────────────── */
function renderAI() {
  const a = DATA.content.aiSection;
  const el = document.getElementById("ai-inner");
  if (!el || !a) return;

  el.innerHTML = `
    <div class="container">
      <div class="ai-grid">
        <div class="reveal-left">
          <div class="section-badge">${a.badge}</div>
          <h2 class="section-title mb-3">${a.headline} <span class="highlight">${a.headlineHighlight}</span></h2>
          <p class="section-desc mb-4">${a.description}</p>
          <div class="ai-solutions-cards">
            ${a.solutions
              .map(
                (s) => `
              <div class="ai-card">
                <div class="ai-icon">${ic(s.icon)}</div>
                <h4 class="ai-card-title">${s.title}</h4>
                <p class="ai-card-desc">${s.desc}</p>
              </div>`,
              )
              .join("")}
          </div>
        </div>
        <div class="reveal-right">
          <div class="ai-visual-wrap">
            <div class="ai-brain" aria-hidden="true">${ic("cpu", 52)}</div>
            <h3 class="ai-visual-title">AI-First Methodology</h3>
            <p class="ai-visual-desc">Every solution we build leverages the latest AI models and automation frameworks for maximum business impact.</p>
            <div class="ai-stats-grid">
              <div class="ai-stat"><div class="ai-stat-num">95%</div><div class="ai-stat-label">Automation Accuracy</div></div>
              <div class="ai-stat"><div class="ai-stat-num">10x</div><div class="ai-stat-label">Speed Improvement</div></div>
              <div class="ai-stat"><div class="ai-stat-num">80%</div><div class="ai-stat-label">Cost Reduction</div></div>
              <div class="ai-stat"><div class="ai-stat-num">24/7</div><div class="ai-stat-label">Always Active</div></div>
            </div>
            <a href="#contact" class="btn-primary mt-4" style="width:100%;justify-content:center">
              ${ic("arrow-right", 16)} Explore AI Solutions
            </a>
          </div>
        </div>
      </div>
    </div>`;
}

/* ─────────────────────────────────────────────────────────
   SEO SECTION
───────────────────────────────────────────────────────── */
function renderSEO() {
  const s = DATA.content.seoSection;
  const el = document.getElementById("seo-inner");
  if (!el || !s) return;

  el.innerHTML = `
    <div class="container">
      <div class="seo-grid">
        <div class="reveal-left">
          <div class="section-badge">${s.badge}</div>
          <h2 class="section-title mb-3">${s.headline} <span class="highlight">${s.headlineHighlight}</span></h2>
          <p class="section-desc mb-4">${s.description}</p>
          <div class="seo-features-list">
            ${s.features.map((f) => `<div class="seo-feature-item">${f}</div>`).join("")}
          </div>
          <div class="mt-4">
            <a href="#contact" class="btn-primary">${ic("search", 16)} Get SEO Audit</a>
          </div>
        </div>
        <div class="reveal-right">
          <div class="seo-metrics">
            ${s.metrics
              .map(
                (m) => `
              <div class="seo-metric">
                <div class="seo-metric-icon">${ic(m.icon)}</div>
                <div class="seo-metric-val">${m.value}</div>
                <div class="seo-metric-label">${m.label}</div>
              </div>`,
              )
              .join("")}
          </div>
          <div class="seo-trust-bar reveal">
            <span>Trusted by 200+ businesses</span>
            <div class="trust-avatars">
              ${["AB", "SM", "RC", "KT", "PJ"].map((i, n) => `<div class="trust-avatar" style="background:hsl(${n * 60},60%,40%);left:${n * 18}px">${i}</div>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

/* ─────────────────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────────────────── */
let slideIndex = 0;
let slideTimer = null;

function renderTestimonials() {
  const testimonials = DATA.testimonials;
  const el = document.getElementById("testimonials-inner");
  if (!el || !testimonials.length) return;

  el.innerHTML = `
    <div class="container">
      <div class="text-center mb-5 reveal">
        <div class="section-badge">Client Stories</div>
        <h2 class="section-title">What Our <span class="highlight">Clients Say</span></h2>
        <p class="section-desc mx-auto mt-3">Real results, real businesses, real testimonials from partners who've grown with us.</p>
      </div>
      <div class="testimonials-slider reveal">
        <div class="testimonials-track" id="testimonials-track">
          ${testimonials
            .map(
              (t) => `
            <div class="testimonial-slide">
              <div class="testimonial-card">
                <div class="tc-top">
                  <div class="testimonial-stars">${'<span class="star">★</span>'.repeat(t.rating)}</div>
                  <div class="tc-quote" aria-hidden="true">"</div>
                </div>
                <p class="testimonial-text">${t.text}</p>
                <div class="testimonial-author">
                  <div class="author-avatar" style="background:${t.color}22;border:2px solid ${t.color}55;color:${t.color}">${t.avatar}</div>
                  <div>
                    <div class="author-name">${t.name}</div>
                    <div class="author-role">${t.role} — ${t.company}</div>
                  </div>
                </div>
              </div>
            </div>`,
            )
            .join("")}
        </div>
        <div class="slider-controls" role="navigation" aria-label="Testimonial controls">
          <button class="slider-btn" id="slider-prev" aria-label="Previous">${ic("chevron-left")}</button>
          <div class="slider-dots" id="slider-dots">
            ${testimonials.map((_, i) => `<button class="slider-dot${i === 0 ? " active" : ""}" data-i="${i}" aria-label="Go to testimonial ${i + 1}"></button>`).join("")}
          </div>
          <button class="slider-btn" id="slider-next" aria-label="Next">${ic("chevron-right")}</button>
        </div>
      </div>
    </div>`;

  const track = document.getElementById("testimonials-track");
  const dots = document.getElementById("slider-dots");
  const total = testimonials.length;

  const goTo = (i) => {
    slideIndex = ((i % total) + total) % total;
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
    dots
      .querySelectorAll(".slider-dot")
      .forEach((d, j) => d.classList.toggle("active", j === slideIndex));
  };

  document.getElementById("slider-prev").addEventListener("click", () => {
    clearInterval(slideTimer);
    goTo(slideIndex - 1);
    startAutoplay();
  });
  document.getElementById("slider-next").addEventListener("click", () => {
    clearInterval(slideTimer);
    goTo(slideIndex + 1);
    startAutoplay();
  });
  dots.querySelectorAll(".slider-dot").forEach((d) =>
    d.addEventListener("click", () => {
      clearInterval(slideTimer);
      goTo(+d.dataset.i);
      startAutoplay();
    }),
  );

  const startAutoplay = () => {
    slideTimer = setInterval(() => goTo(slideIndex + 1), 5500);
  };
  startAutoplay();
}

/* ─────────────────────────────────────────────────────────
   TEAM
───────────────────────────────────────────────────────── */
function renderTeam() {
  const team = DATA.team;
  const el = document.getElementById("team-inner");
  if (!el || !team.length) return;

  el.innerHTML = `
    <div class="container">
      <div class="text-center mb-5 reveal">
        <div class="section-badge">Our People</div>
        <h2 class="section-title">The Brilliant Minds <span class="highlight">Behind Our Success</span></h2>
        <p class="section-desc mx-auto mt-3">A world-class team of strategists, creatives, developers and AI specialists.</p>
      </div>
      <div class="team-grid">
        ${team
          .map(
            (m, i) => `
          <div class="team-card reveal" style="transition-delay:${i * 0.1}s">
            <div class="team-avatar-wrap">
              <div class="team-avatar" style="background:${m.gradient}">${m.initials}</div>
              <div class="team-avatar-ring"></div>
            </div>
            <h3 class="team-name">${m.name}</h3>
            <div class="team-role">${m.role}</div>
            <p class="team-bio">${m.bio}</p>
            <div class="team-social">
              <a href="${m.social.linkedin}" class="team-social-link" title="LinkedIn" target="_blank" rel="noopener">${ic("linkedin", 14)}</a>
              <a href="${m.social.twitter}"  class="team-social-link" title="Twitter"  target="_blank" rel="noopener">${ic("twitter", 14)}</a>
            </div>
          </div>`,
          )
          .join("")}
      </div>
    </div>`;
}

/* ─────────────────────────────────────────────────────────
   CTA BANNER
───────────────────────────────────────────────────────── */
function renderCTA() {
  const c = DATA.content.cta;
  const el = document.getElementById("cta-inner");
  if (!el || !c) return;

  el.innerHTML = `
    <div class="container">
      <div class="cta-box reveal">
        <div class="cta-glow" aria-hidden="true"></div>
        <div class="cta-content">
          <span class="section-badge" style="margin:0 auto 1.25rem">Ready to Scale?</span>
          <h2 class="cta-title">${c.headline} <span class="highlight">${c.headlineHighlight}</span></h2>
          <p class="cta-desc">${c.description}</p>
          <div class="cta-btns">
            <a href="${c.btn1.href}" class="btn-primary">${ic("arrow-right", 16)} ${c.btn1.label}</a>
            <a href="${c.btn2.href}" class="btn-outline">${c.btn2.label}</a>
          </div>
          <div class="cta-trust">
            <span>${ic("shield", 14)} No contracts</span>
            <span>${ic("clock", 14)} 24hr response</span>
            <span>${ic("star", 14)} Free consultation</span>
          </div>
        </div>
      </div>
    </div>`;
}

/* ─────────────────────────────────────────────────────────
   FAQ
───────────────────────────────────────────────────────── */
function renderFAQ() {
  const faqs = DATA.faqs;
  const el = document.getElementById("faq-inner");
  if (!el || !faqs.length) return;

  el.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-5 mb-lg-0">
          <div class="faq-intro reveal-left">
            <div class="section-badge">FAQ</div>
            <h2 class="section-title">Frequently Asked <span class="highlight">Questions</span></h2>
            <p class="section-desc mt-3">Can't find your answer here? Reach out to us directly.</p>
            <a href="#contact" class="btn-outline mt-4" style="display:inline-flex;align-items:center;gap:.5rem">${ic("mail", 16)} Ask Us Directly</a>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="faq-list reveal-right">
            ${faqs
              .map(
                (f) => `
              <div class="faq-item">
                <button class="faq-question" aria-expanded="false">
                  <span>${f.question}</span>
                  <span class="faq-icon" aria-hidden="true">${ic("plus", 16)}</span>
                </button>
                <div class="faq-answer" role="region">
                  <div class="faq-answer-inner">${f.answer}</div>
                </div>
              </div>`,
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>`;

  el.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      el.querySelectorAll(".faq-item").forEach((i) => {
        i.classList.remove("open");
        i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ─────────────────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────────────────── */
function renderContact() {
  const c = DATA.content.contact;
  const cfg = DATA.config;
  const el = document.getElementById("contact-inner");
  if (!el || !c) return;

  el.innerHTML = `
    <div class="container">
      <div class="text-center mb-5 reveal">
        <div class="section-badge">${c.badge}</div>
        <h2 class="section-title">${c.headline} <span class="highlight">${c.headlineHighlight}</span></h2>
        <p class="section-desc mx-auto mt-3">${c.description}</p>
      </div>
      <div class="contact-grid">
        <div class="contact-info-card reveal-left">
          <h3 class="contact-info-heading">Contact Information</h3>
          ${c.info
            .map(
              (i) => `
            <div class="contact-info-item">
              <div class="contact-icon-wrap">${ic(i.icon)}</div>
              <div>
                <div class="contact-info-label">${i.label}</div>
                <div class="contact-info-value">${i.value}</div>
              </div>
            </div>`,
            )
            .join("")}
          <div class="contact-social">
            <div class="contact-social-title">Follow Us</div>
            <div class="contact-social-links">
              ${cfg.social
                .map(
                  (s) => `
                <a href="${s.url}" class="social-icon-link" title="${s.name}" target="_blank" rel="noopener">${ic(s.icon, 16)}</a>`,
                )
                .join("")}
            </div>
          </div>
          <a href="admin.html" class="admin-link-btn" title="View Submissions">
            ${ic("layers", 14)} Admin Panel
          </a>
        </div>
        <div class="contact-form-card reveal-right">
          <h3 class="contact-form-title">Send Us a Message</h3>
          <form id="contact-form" novalidate>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="cf-name">Full Name <span style="color:#ef4444">*</span></label>
                <input type="text" class="form-control" id="cf-name" placeholder="Your full name" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="cf-email">Email Address <span style="color:#ef4444">*</span></label>
                <input type="email" class="form-control" id="cf-email" placeholder="your@email.com" required>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="cf-phone">Phone Number</label>
                <input type="tel" class="form-control" id="cf-phone" placeholder="+92 300 0000000">
              </div>
              <div class="form-group">
                <label class="form-label" for="cf-service">Service Interested In</label>
                <select class="form-control" id="cf-service">
                  <option value="">Select a service...</option>
                  ${c.services.map((s) => `<option value="${s}">${s}</option>`).join("")}
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="cf-message">Your Message <span style="color:#ef4444">*</span></label>
              <textarea class="form-control" id="cf-message" placeholder="Tell us about your project goals, budget, and timeline..." required></textarea>
            </div>
            <button type="submit" class="btn-submit" id="submit-btn">
              <span id="submit-text">${ic("send", 16)} Send Message</span>
              <span id="submit-loading" style="display:none">Sending...</span>
            </button>
            <div class="form-success" id="form-success">
              ✓ Thank you! Your message has been received. We'll respond within 24 hours.
            </div>
            <div class="form-error" id="form-error"></div>
          </form>
        </div>
      </div>
    </div>`;

  document
    .getElementById("contact-form")
    .addEventListener("submit", handleFormSubmit);
}

/* ─────────────────────────────────────────────────────────
   FORM HANDLER
───────────────────────────────────────────────────────── */
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("cf-name").value.trim();
  const email = document.getElementById("cf-email").value.trim();
  const phone = document.getElementById("cf-phone").value.trim();
  const service = document.getElementById("cf-service").value;
  const message = document.getElementById("cf-message").value.trim();
  const errorEl = document.getElementById("form-error");
  const successEl = document.getElementById("form-success");

  errorEl.textContent = "";
  errorEl.style.display = "none";

  if (!name) {
    showFormError("Please enter your name.");
    return;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showFormError("Please enter a valid email address.");
    return;
  }
  if (!message) {
    showFormError("Please enter your message.");
    return;
  }

  // Show loading state
  const btn = document.getElementById("submit-btn");
  btn.disabled = true;
  document.getElementById("submit-text").style.display = "none";
  document.getElementById("submit-loading").style.display = "inline";

  setTimeout(() => {
    const entry = {
      id: Date.now(),
      name,
      email,
      phone,
      service,
      message,
      date: new Date().toLocaleDateString("en-PK", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      time: new Date().toLocaleTimeString("en-PK", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      datetime: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("ka_submissions") || "[]");
    existing.push(entry);
    localStorage.setItem("ka_submissions", JSON.stringify(existing));

    e.target.reset();
    btn.disabled = false;
    document.getElementById("submit-text").style.display = "";
    document.getElementById("submit-loading").style.display = "none";
    successEl.classList.add("show");
    setTimeout(() => successEl.classList.remove("show"), 6000);
  }, 800);
}

function showFormError(msg) {
  const el = document.getElementById("form-error");
  el.textContent = msg;
  el.style.display = "block";
  setTimeout(() => {
    el.style.display = "none";
  }, 4000);
}

/* ─────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────── */
function renderFooter() {
  const { site, footer, social, nav } = DATA.config;
  const el = document.getElementById("footer");
  if (!el) return;

  const year = new Date().getFullYear();

  el.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand-col">
          <div class="nav-logo mb-3">
            <div class="logo-mark">${site.logo}</div>
            <span class="logo-text">${site.name.split(" ")[0]} <span>${site.name.split(" ").slice(1).join(" ")}</span></span>
          </div>
          <p class="footer-brand-desc">${site.description} Transforming businesses through AI and digital excellence since ${site.founded}.</p>

        </div>
        <div>
          <div class="footer-col-title">Quick Links</div>
          ${footer.quickLinks.map((l) => `<a href="${l.href}" class="footer-link footer-contact-link">${l.icon}<span>${l.label}</span></a>`).join("")}
        </div>
        <div>
          <div class="footer-col-title">Our Services</div>
          ${footer.services.map((s) => `<a href="${s.href}" class="footer-link footer-contact-link">${s.icon}<span>${s.label}</span></a>`).join("")}
        </div>
        <div>
        <div class="footer-col-title">Get In Touch</div>
          <a href="mailto:${site.email}" class="footer-link footer-contact-link">${site.icons.email}<span>${site.email}</span></a>
          <a href="tel:${site.phone}" class="footer-link footer-contact-link">${site.icons.phone}<span>${site.phone}</span></a>
          <p class="footer-link footer-contact-link">${site.icons.address}<span>${site.address}</span></p>
          <p class="footer-link footer-contact-link">${site.icons.timing}<span>${site.timing}</span></p>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">© ${year} ${site.name}. All Rights Reserved.</p>

    </div>`;
}

/* ─────────────────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────────────────── */
function initScrollReveal() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
  );

  document
    .querySelectorAll(".reveal, .reveal-left, .reveal-right")
    .forEach((el) => obs.observe(el));
}

/* ─────────────────────────────────────────────────────────
   CUSTOM CURSOR (desktop only)
───────────────────────────────────────────────────────── */
function initCursor() {
  if (window.matchMedia("(hover: none)").matches) return;
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring) return;

  let mx = 0,
    my = 0,
    rx = 0,
    ry = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top = my + "px";
  });

  const animateRing = () => {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    requestAnimationFrame(animateRing);
  };
  animateRing();

  document
    .querySelectorAll("a, button, .service-card, .portfolio-card, .filter-btn")
    .forEach((el) => {
      el.addEventListener("mouseenter", () => {
        ring.style.transform = "translate(-50%,-50%) scale(1.5)";
        ring.style.opacity = "0.7";
      });
      el.addEventListener("mouseleave", () => {
        ring.style.transform = "translate(-50%,-50%) scale(1)";
        ring.style.opacity = "1";
      });
    });
}

/* ─────────────────────────────────────────────────────────
   HIDE LOADER
───────────────────────────────────────────────────────── */
function hideLoader() {
  setTimeout(() => {
    const loader = document.getElementById("loading-screen");
    if (loader) {
      loader.classList.add("hidden");
      loader.addEventListener("transitionend", () => loader.remove(), {
        once: true,
      });
    }
  }, 2000);
}

/* ─────────────────────────────────────────────────────────
   SMOOTH SCROLL for nav links
───────────────────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const offset = document.getElementById("navbar").offsetHeight + 10;
        window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
      }
    });
  });
}

/* ─────────────────────────────────────────────────────────
   BACK TO TOP BUTTON
───────────────────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.createElement("button");
  btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="20" height="20"><polyline points="18 15 12 9 6 15"/></svg>`;
  btn.setAttribute("aria-label", "Back to top");
  btn.style.cssText = `
    position:fixed;bottom:2rem;right:2rem;z-index:500;
    width:46px;height:46px;
    background:var(--grad-main);
    border:none;border-radius:12px;cursor:pointer;
    display:flex;align-items:center;justify-content:center;
    color:#fff;opacity:0;transform:translateY(10px);
    transition:opacity .3s,transform .3s;
    box-shadow:0 8px 24px rgba(0,212,255,.3);`;
  document.body.appendChild(btn);

  window.addEventListener(
    "scroll",
    () => {
      const show = window.scrollY > 400;
      btn.style.opacity = show ? "1" : "0";
      btn.style.transform = show ? "translateY(0)" : "translateY(10px)";
      btn.style.pointerEvents = show ? "auto" : "none";
    },
    { passive: true },
  );

  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}

/* ─────────────────────────────────────────────────────────
   APPLY THEME COLORS from config
───────────────────────────────────────────────────────── */
function applyTheme() {
  const theme = DATA.config?.theme;
  if (!theme) return;
  const root = document.documentElement;
  if (theme.primaryColor)
    root.style.setProperty("--primary", theme.primaryColor);
  if (theme.accentColor) root.style.setProperty("--accent", theme.accentColor);
  if (theme.secondaryColor)
    root.style.setProperty("--secondary", theme.secondaryColor);
  if (theme.bgDark) root.style.setProperty("--bg", theme.bgDark);
  if (theme.bgCard) root.style.setProperty("--bg-card", theme.bgCard);
}

/* ─────────────────────────────────────────────────────────
   INIT — entry point
───────────────────────────────────────────────────────── */
async function init() {
  await loadData();
  applyTheme();

  renderNavbar();
  renderHero();
  renderStats();
  renderAbout();
  renderServices();
  renderPortfolio();
  renderWhyUs();
  renderAI();
  renderSEO();
  renderTestimonials();
  renderTeam();
  renderCTA();
  renderFAQ();
  renderContact();
  renderFooter();

  // Post-render setup (small delay ensures DOM is flushed)
  requestAnimationFrame(() => {
    initScrollReveal();
    initSmoothScroll();
    initCursor();
    initBackToTop();
    hideLoader();
  });
}

document.addEventListener("DOMContentLoaded", init);
