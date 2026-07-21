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
        <a href="contact.html" class="nav-link nav-cta">Contact Us</a>
      </nav>
      <span class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <i class="fa-solid fa-grip"></i>
      </span>
    </div>
    <div class="nav-mobile" id="nav-mobile" role="navigation">
      ${nav.map((n) => `<a href="${n.href}" class="nav-link">${n.label}</a>`).join("")}
      <a href="contact.html" class="nav-link" style="color:var(--primary);font-weight:700">Contact Us</a>
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

  if (!si) return;

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
// About function for about Page

function renderAboutPage() {
  const as = DATA?.content?.about || {};
  const aboutSS = document.getElementById("about-inner-pp");
  const aboutSSs = document.getElementById("about-page-inner");
  // const aboutCTA = document.getElementById("about-cta-inner");

  // ---- HERO (page header) — UNCHANGED ----
  if (aboutSS && as.pageHeader) {
    const ph = as.pageHeader;
    aboutSS.innerHTML = `
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-12 hero-content reveal">
            <div class="orbit-ring ring-1"><div class="orbit-dot"></div></div>
            <div class="orbit-ring ring-2"><div class="orbit-dot"></div></div>
            <div class="orbit-ring ring-3"><div class="orbit-dot"></div></div>
            <h1 class="pp-title">${ph.eyebrow}<br><span class="line2">${ph.titleHighlight}</span></h1>
            <p class="hero-subtitle">${ph.subtitle}</p>
          </div>
        </div>
      </div>`;
  }

  if (!aboutSSs) return;

  // ---- WHATSAPP ----
  const wa = as.whatsapp;
  const waLink = wa
    ? `https://wa.me/${wa.number}?text=${encodeURIComponent(wa.message)}`
    : null;

  aboutSSs.innerHTML = `
    <section class="ap-section-intro">
      <div class="container">
        <div class="ap-hero reveal-up">
          <h2 class="section-title">${as.headline} <span class="highlight-gold">${as.headlineHighlight}</span></h2>  
          <p class="ap-lead">${as.description1}</p>
          <p class="section-desc">${as.description2}</p>
        </div>
      </div>
    </section>

    <!-- ===== MISSION & VISION ===== -->
    <section class="ap-section-mv">
      <div class="container">
        <div class="ap-section-head reveal-up">
          <h2 class="section-title">Mission <span class="highlight-gold"> & Vision</span></h2>
        </div>
        <div class="ap-mv-grid reveal-up">
          <div class="ap-mv-card">
            <div class="ap-mv-icon"><i class="far fa-dot-circle"></i></div>
            <h3>Our Mission</h3>
            <p>${as.mission}</p>
          </div>
          <div class="ap-mv-card">
            <div class="ap-mv-icon"><i class="far fa-eye"></i></div>
            <h3>Our Vision</h3>
            <p>${as.vision}</p>
          </div>
        </div>
      </div>
    </section>
    
    
    <!-- ===== JOURNEY / STORY ===== -->
    <section class="ap-section-story">
      <div class="container">
        <div class="ap-section-head reveal-up">
          <h2 class="section-title">Our <span class="highlight-gold">Journey</span></h2>
        </div>
        <div class="ap-timeline reveal-up">
          ${as.story
            .map(
              (s) => `
            <div class="ap-tl-item">
              <div class="ap-tl-year">${s.year}</div>
              <div class="ap-tl-dot"></div>
              <div class="ap-tl-body">
                <h4>${s.title}</h4>
                <p>${s.desc}</p>
              </div>
            </div>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <!-- ===== CORE VALUES ===== -->
    <section class="ap-section-values">
      <div class="container">
        <div class="ap-section-head reveal-up">
          <h2 class="section-title">Core <span class="highlight-gold">Values</span></h2>
        </div>
        <div class="ap-values-grid reveal-up">
          ${as.values
            .map(
              (v) => `
            <div class="ap-value-card">
              <div class="ap-value-icon">${v.icon}</div>
              <h4>${v.title}</h4>
              <p>${v.desc}</p>
            </div>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <!-- ===== WHY CHOOSE US ===== -->
    <section class="c">
      <div class="container">
        <div class="ap-section-head reveal-up">
          <h2 class="section-title">Why <span class="highlight-gold">Choose Us</span></h2>
        </div>
        <div class="about-features reveal-up">
          ${as["reason-for-about-page"]
            .map(
              (f, i) => `
            <div class="why-slab-wrap reveal" style="transition-delay:${i * 0.08}s">
            <div class="why-slab">
              <span class="why-slab-num">0${i + 1}</span>
              <div class="why-slab-icon">${f.icon}</div>
              <h3 class="why-slab-title">${f.title}</h3>
              <p class="why-slab-desc">${f.desc}</p>
              <div class="why-depth-bar"></div>
            </div>
          </div>`,
            )
            .join("")}
        </div>
      </div>
    </section>`;

  function initReveal() {
    const items = document.querySelectorAll(
      ".reveal-up:not(.in), .reveal-left:not(.in), .reveal-right:not(.in)",
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    items.forEach((el) => io.observe(el));
  }

  initReveal();
}

/* ─────────────────────────────────────────────────────────
  Portfolio
───────────────────────────────────────────────────────── */
let currentProjects = 9;

function renderPortfolio() {
  const HOME_LIMIT = 3;
  const vmbtn = DATA?.content?.cta;
  const pp = DATA?.content?.pphero;
  const portfolio = DATA?.portfolio || [];

  const el = document.getElementById("portfolio-inner");
  const heroPP = document.getElementById("hero-inner-pp");

  if (!el || !portfolio.length) return;

  const isPortfolioPage = window.location.pathname.includes("portfolios.html");
  const visibleProjects = isPortfolioPage
    ? portfolio.slice(0, currentProjects)
    : portfolio.slice(0, HOME_LIMIT);

  /* ── HERO ── */
  if (heroPP && pp) {
    heroPP.innerHTML = `
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-12 hero-content reveal">
            <div class="orbit-ring ring-1"><div class="orbit-dot"></div></div>
            <div class="orbit-ring ring-2"><div class="orbit-dot"></div></div>
            <div class="orbit-ring ring-3"><div class="orbit-dot"></div></div>
            <h1 class="pp-title">${pp.headline}<br><span class="line2">${pp.headlineHighlight}</span></h1>
            <p class="hero-subtitle">${pp.description}</p>
          </div>
        </div>
      </div>`;
  }

  /* ── PORTFOLIO SECTION ── */
  el.innerHTML = `
    <div class="container">

      ${
        !isPortfolioPage
          ? `
        <div class="text-center mb-5 reveal">
          <div class="section-badge">Our Portfolio</div>
          <h2 class="section-title">Transformative <span class="highlight">Projects</span></h2>
          <p class="section-desc mx-auto mt-3">A showcase of our most impactful work across industries and disciplines.</p>
        </div>`
          : ""
      }

      <div class="portfolio-grid">
        ${visibleProjects.map((p, i) => buildCardHTML(p, i)).join("")}
      </div>

      <div class="cta-view-more text-center mt-5">
        ${
          !isPortfolioPage
            ? `<a href="${vmbtn?.btn3?.href || "#"}" class="btn-outline">${vmbtn?.btn3?.label || "View More"}</a>`
            : currentProjects < portfolio.length
              ? `<button id="loadMoreProjects" class="btn-outline">Load More</button>`
              : ""
        }
      </div>
    </div>`;

  /* ── Bind interactions after DOM is ready ── */
  initPortfolioTilt();
  initCursorGlow();

  /* ── Load more (portfolio page only) ── */
  if (isPortfolioPage) {
    const btn = document.getElementById("loadMoreProjects");
    if (btn) {
      btn.addEventListener("click", () => {
        currentProjects += 3;
        renderPortfolio();
      });
    }
  }
}

/* ─────────────────────────────────────────────────────────
   buildCardHTML — generates one card's markup string
───────────────────────────────────────────────────────── */
function buildCardHTML(p, i) {
  const delay = (i % 3) * 0.1; // stagger within each row of 3

  const tagsHTML = p.tags?.length
    ? `<div class="pf-tags">${p.tags.map((t) => `<span class="pf-tag">${t}</span>`).join("")}</div>`
    : "";

  const catHTML = p.category
    ? `<span class="pf-pill">${p.category}</span>`
    : "";

  return `
    <div class="portfolio-card reveal" style="animation-delay:${delay}s">
      <div class="pf-frame">

        <div class="pf-screen">
          <!-- Cursor-tracking glow dot (positioned by JS) -->
          <div class="pf-cursor-glow"></div>

          <img src="assets/images/portfolio/${p.image}" alt="${p.title}" loading="lazy">
          ${catHTML}
          <!-- View-project button — fades in on hover -->
          <div class="pf-overlay">
            <a href="${p.link}" class="pf-overlay-btn" target="_blank" rel="noopener">
              View Project
              <svg viewBox="0 0 12 12">
                <line x1="2" y1="10" x2="10" y2="2"/>
                <polyline points="4,2 10,2 10,8"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="pf-body">
          <span class="pf-num">${String(i + 1).padStart(2, "0")}</span>
          <h3 class="pf-title">${p.title}</h3>
          <p class="pf-desc">${p.description}</p>
        </div>

      </div>
    </div>`;
}

function initPortfolioTilt() {
  document.querySelectorAll(".portfolio-card").forEach((card) => {
    const frame = card.querySelector(".pf-frame");
    if (!frame) return;

    card.addEventListener("mousemove", (e) => {
      const r = frame.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
      const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);

      frame.style.transform = `rotateY(${dx * 9}deg) rotateX(${-dy * 6}deg) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      frame.style.transform = "";
    });
  });
}

function initCursorGlow() {
  document.querySelectorAll(".portfolio-card").forEach((card) => {
    const screen = card.querySelector(".pf-screen");
    const glow = card.querySelector(".pf-cursor-glow");
    if (!screen || !glow) return;

    screen.addEventListener("mousemove", (e) => {
      const r = screen.getBoundingClientRect();
      glow.style.left = e.clientX - r.left + "px";
      glow.style.top = e.clientY - r.top + "px";
      glow.style.opacity = "1";
    });

    screen.addEventListener("mouseleave", () => {
      glow.style.opacity = "0";
    });
  });
}

/* ─────────────────────────────────────────────────────────
SERVICES
───────────────────────────────────────────────────────── */

function icon(name) {
  const icons = {
    /* ── service category icons ── */
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
    megaphone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>`,
    target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
    code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>`,
    briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M12 12h.01"/></svg>`,
    /* ── step icons ── */
    chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    rocket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>`,
    clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>`,
    layout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
    edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  };
  return icons[name] || "";
}

/* ══════════════════════════════════════════════════════════════
   HOME PAGE
   ══════════════════════════════════════════════════════════════ */
function renderServices(limit = 3) {
  const services = DATA.services;
  const el = document.getElementById("services-inner");
  if (!el || !services || !services.length) return;
  let expanded = false;

  function paint() {
    const shown = expanded ? services : services.slice(0, limit);
    const hasMore = services.length > limit;

    el.innerHTML = `
      <div class="container">
        <div class="text-center mb-5 reveal">
          <div class="section-badge">Services</div>
          <h2 class="section-title">Full-Spectrum Digital <span class="highlight">Solutions</span></h2>
          <p class="section-desc mx-auto mt-3">Everything your business needs to dominate the digital landscape.</p>
        </div>
          ${shown
            .map(
              (s, i) => `
            <article class="sh-row" style="--ac:${s.color}">
              <span class="sh-corner sh-corner-tl"></span>
              <span class="sh-corner sh-corner-br"></span>
              <div class="sh-num">${String(i + 1).padStart(2, "0")}</div>
              <div class="sh-icon">${icon(s.icon)}</div>
              <div class="sh-main">
                <div class="sh-cat">${s.category}</div>
                <h3 class="sh-title">${s.title}</h3>
                <p class="sh-desc">${s.description}</p>
                <div class="sh-tags">${s.features.map((f) => `<span>${f}</span>`).join("")}</div>
              </div>
              <div class="sh-side">
                ${s.badge ? `<span class="sh-badge">${s.badge}</span>` : ""}
                <div class="sh-stat">
                  <span class="sh-stat-val">${s.stat || "—"}</span>
                  <span class="sh-stat-label">${s.stat_label || "PROJECTS"}</span>
                </div>
                 <a href="services.html?tab=${s.id}" class="sh-cta">VIEW <span class="sh-arrow">→</span></a>
              </div>
            </article>`,
            )
            .join("")}
        </div>
        ${
          hasMore
            ? `<div class="sh-more-wrap">
              <a href="services.html" class="sh-more-btn">
                <span>View All Services</span>
                <span class="sh-more-count">(${services.length - limit} more)</span>
              </a>
            </div>`
            : ""
        }
      </div>`;

    const moreBtn = document.getElementById("sh-more-btn");
    if (moreBtn) {
      moreBtn.addEventListener("click", () => {
        expanded = !expanded;
        paint();
      });
    }
  }

  paint();
}

/* ══════════════════════════════════════════════════════════════
   SERVICES DETAIL PAGE — Tabbed Full-Section Layout
   ══════════════════════════════════════════════════════════════ */

function renderServicesDetail() {
  const services = DATA.services;
  const tabNav = document.getElementById("sp-tab-nav");
  const sections = document.getElementById("services-inner-detailed");
  if (!tabNav || !sections || !services || !services.length) return;

  const ss = DATA?.content?.sshero;
  const headerSS = document.getElementById("hero-inner-services");
  if (headerSS && ss) {
    headerSS.innerHTML = `
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-12 hero-content reveal">
            <div class="orbit-ring ring-1"><div class="orbit-dot"></div></div>
            <div class="orbit-ring ring-2"><div class="orbit-dot"></div></div>
            <div class="orbit-ring ring-3"><div class="orbit-dot"></div></div>
            <h1 class="pp-title">${ss.headline}<br><span class="line2">${ss.headlineHighlight}</span></h1>
            <p class="hero-subtitle">${ss.description}</p>
          </div>
        </div>
      </div>`;
  }

  const arrowRight = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
  const checkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
  const plusIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;

  /* Reveal observer — defined before setActiveTab so it can call it */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08 },
  );

  function observeReveals() {
    sections
      .querySelectorAll(".sp-section.visible .reveal:not(.in-view)")
      .forEach((el) => observer.observe(el));
  }

  function setActiveTab(id) {
    tabNav
      .querySelectorAll(".sp-tab")
      .forEach((t) => t.classList.remove("active"));
    sections
      .querySelectorAll(".sp-section")
      .forEach((s) => s.classList.remove("visible"));
    tabNav.querySelector(`[data-id="${id}"]`).classList.add("active");
    document.getElementById(`sec-${id}`).classList.add("visible");
    setTimeout(observeReveals, 50);
  }

  services.forEach((s, i) => {
    const d = s.detail;
    if (!d) {
      console.warn(`"${s.id}" has no detail object — skipped`);
      return;
    }

    /* TAB */
    const tab = document.createElement("button");
    tab.className = "sp-tab" + (i === 0 ? " active" : "");
    tab.setAttribute("data-id", s.id);
    tab.innerHTML = icon(s.icon) + s.title;
    tab.addEventListener("click", () => setActiveTab(s.id));
    tabNav.appendChild(tab);

    /* SECTION */
    const sec = document.createElement("div");
    sec.className = "sp-section" + (i === 0 ? " visible" : "");
    sec.id = `sec-${s.id}`;
    sec.style.setProperty("--sc", s.color);

    sec.innerHTML = `
      <div class="container">
        <!-- HERO -->
        <div class="sp-hero">
          <div class="sp-hero-left reveal">
            <div class="sp-hero-tag">${icon(s.icon)} ${d.tag}</div>
            <h2 class="sp-hero-title">${d.title}</h2>
            <p class="sp-hero-desc">${d.desc}</p>
            <div class="sp-tech-tags">${d.tags.map((t) => `<span class="sp-tech-tag">${t}</span>`).join("")}</div>
            <div class="sp-cta-row">
              <a href="contact.html" class="sp-btn-primary" style="background:${s.color};color:#060911">Get a quote ${arrowRight}</a>
            </div>
          </div>
          <div class="sp-hero-right reveal">
            <div class="sp-stats-grid">
              ${d.stats
                .map(
                  (st) => `
                <div class="sp-stat">
                  <div class="sp-stat-val" style="color:${s.color}">${st.v}</div>
                  <div class="sp-stat-label">${st.l}</div>
                </div>`,
                )
                .join("")}
            </div>
            <div class="sp-stat-wide">
              <span class="sp-stat-wide-label">${d.wide.l}</span>
              <span class="sp-stat-wide-val" style="color:${s.color}">${d.wide.v}</span>
            </div>
          </div>
        </div>

        <!-- PROCESS -->
        <div class="sp-block reveal">
          <div class="sp-block-label" style="color:${s.color};">How it works</div>
          <div class="sp-process">
            ${d.steps
              .map(
                (st, si) => `
              <div class="sp-step">
                <div class="sp-step-ghost">0${si + 1}</div>
                <div class="sp-step-icon-wrap" style="background:${s.color}12;border:1px solid ${s.color}20;color:${s.color}">
                  ${icon(st.icon)}
                </div>
                <div class="sp-step-title">${st.title}</div>
                <div class="sp-step-desc">${st.desc}</div>
              </div>`,
              )
              .join("")}
          </div>
        </div>

        <!-- PRICING -->
        <div class="sp-block reveal">
          <div class="sp-block-label" style="color:${s.color};">Pricing</div>
          <div class="sp-plans">
            ${d.plans
              .map(
                (p) => `
              <div class="sp-plan${p.featured ? " featured" : ""}">
                ${p.badge ? `<div class="sp-plan-badge" style="background:${s.color}18;color:${s.color};border:1px solid ${s.color}30">${p.badge}</div>` : ""}
                <div class="sp-plan-tier">${p.tier}</div>
                <div class="sp-plan-price">${p.price}</div>
                <div class="sp-plan-period">${p.period}</div>
                <div class="sp-plan-divider"></div>
                <div class="sp-plan-feats">
                  ${p.feats
                    .map(
                      (f) => `
                    <div class="sp-plan-feat">
                      <span style="color:${s.color};flex-shrink:0;margin-top:1px">${checkIcon}</span>
                      ${f}
                    </div>`,
                    )
                    .join("")}
                </div>
                <button class="sp-plan-btn${p.featured ? "" : " ghost"}"
                  ${p.featured ? `style="background:${s.color};color:#060911"` : ""}>
                  ${p.price === "Custom" ? "Let's talk" : "Get started"}
                </button>
              </div>`,
              )
              .join("")}
          </div>
        </div>

        <!-- FAQ -->
        <div class="sp-block reveal">
          <div class="sp-block-label" style="color:${s.color};">Common questions</div>
          <div class="sp-faq-list">
            ${d.faqs
              .map(
                (f) => `
              <div class="sp-faq">
                <div class="sp-faq-header">
                  <div class="sp-faq-q">${f.q}</div>
                  <div class="sp-faq-toggle">${plusIcon}</div>
                </div>
                <div class="sp-faq-a">${f.a}</div>
              </div>`,
              )
              .join("")}
          </div>
        </div>

        <!-- BOTTOM CTA -->
        <div class="sp-cta-banner reveal">
          <div class="sp-cta-banner-glow" style="background:${s.color}"></div>
          <div class="sp-cta-banner-title">Ready to start your ${d.tag.toLowerCase()} project?</div>
          <div class="sp-cta-banner-desc">Tell us about your project and we'll get back within 24 hours with a plan and a quote.</div>
          <div class="sp-cta-banner-btns">
            <button class="sp-btn-primary" style="background:${s.color};color:#060911">Start a project ${arrowRight}</button>
            <button class="sp-btn-ghost">Schedule a call</button>
          </div>
        </div>
      </div>`;

    /* FAQ accordion */
    sec.querySelectorAll(".sp-faq").forEach((faq) => {
      faq.addEventListener("click", () => {
        const isOpen = faq.classList.contains("open");
        sec
          .querySelectorAll(".sp-faq")
          .forEach((f) => f.classList.remove("open"));
        if (!isOpen) faq.classList.add("open");
      });
    });

    sections.appendChild(sec);
  });

  const requestedTab = new URLSearchParams(window.location.search).get("tab");
  if (requestedTab && tabNav.querySelector(`[data-id="${requestedTab}"]`)) {
    setActiveTab(requestedTab);
  }

  observeReveals();
}

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
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
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
        <h2 class="section-title">${w.headline} <br> <span class="highlight">${w.headlineHighlight}</span></h2>
        <p class="section-desc mx-auto mt-3">Trusted by 300+ businesses across 15+ industries worldwide.</p>
      </div>
      <div class="why-slab-grid">
        ${w.reasons
          .map(
            (r, i) => `
          <div class="why-slab-wrap reveal" style="transition-delay:${i * 0.08}s">
            <div class="why-slab">
              <span class="why-slab-num">0${i + 1}</span>
              <div class="why-slab-icon">${r.icon}</div>
              <h3 class="why-slab-title">${r.title}</h3>
              <p class="why-slab-desc">${r.desc}</p>
              <div class="why-depth-bar"></div>
            </div>
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

function renderTeamHeader() {
  const el = document.getElementById("team-inner-pp");
  if (!el) return;
  el.innerHTML = `
    <div class="container">
    <div class="row align-items-center mt-5 g-5">
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
        <h2 class="section-title">
          The Brilliant Minds <span class="highlight">Behind Our Success</span>
        </h2>
        <p class="section-desc mx-auto mt-3">
          A world-class team of strategists, creatives, developers and AI
          specialists.
        </p>
      </div>
    </div>
  </div>
  `;
}

/* ============ RENDER: Team grid (ID badge style) ============ */
function renderTeam() {
  const team = DATA.team;
  const el = document.getElementById("team-page-inner");
  if (!el || !team.length) return;

  const glowColor = (gradient) => {
    const match = gradient.match(/#[0-9a-fA-F]{3,6}/);
    return match ? match[0] : "#E5B80B";
  };

  el.innerHTML = `
    <div class="container">
      <div class="team-grid">
        ${team
          .map(
            (m, i) => `
          <div class="team-card reveal" style="transition-delay:${i * 0.1}s; --tm-glow:${glowColor(m.gradient)}">
             <div class="team-photo-panel">
              ${
                m.photo
                  ? `<img src="${m.photo}" alt="${m.name}" loading="lazy" onerror="this.remove()">`
                  : `<div class="tm-dots"></div><div class="team-avatar">${m.initials}</div>`
              }
            </div>
            <div class="team-details">
              <h3 class="team-name">${m.name}</h3>
              <div class="team-role">${m.role}</div>
              <p class="team-bio">${m.bio}</p>
              <div class="team-social">
                <a href="${m.social.linkedin}" class="team-social-link" title="LinkedIn" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a>
                <a href="${m.social.twitter}"  class="team-social-link" title="Twitter"  target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>`,
          )
          .join("")}
      </div>
    </div>`;
}

/* ============ Init — add both calls where your other render*() calls run ============ */
document.addEventListener("DOMContentLoaded", () => {
  renderTeamHeader();
  renderTeam();
  // your existing initReveal() / initCursor() / initLoader() calls stay as-is
});

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
            <a href="#contact" class="btn-outline mt-4" style="display:inline-flex;align-items:center;gap:.5rem">
            <i class="fa-regular fa-comments"></i> Ask Us Directly</a>
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
                  <span class="faq-icon" aria-hidden="true"><i class="fa-solid fa-question"></i></span>
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
            <a href="${c.btn1.href}" class="btn-primary">${c.btn1.label}</a>
            <a href="${c.btn2.href}" class="btn-outline">${c.btn2.label}</a>
          </div>
        </div>
      </div>
    </div>`;
}

/* ─────────────────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────────────────── */
function renderContact() {
  const c = DATA.content.contact;
  const cfg = DATA.config;
  const heroCS = document.getElementById("hero-inner-cs");
  const el = document.getElementById("contact-inner");
  if (!el || !c) return;

  if (heroCS) {
    heroCS.innerHTML = `
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-12 hero-content reveal">
            <div class="orbit-ring ring-1"><div class="orbit-dot"></div></div>
            <div class="orbit-ring ring-2"><div class="orbit-dot"></div></div>
            <div class="orbit-ring ring-3"><div class="orbit-dot"></div></div>
            <h1 class="pp-title">${c.headline}<br><span class="line2">${c.headlineHighlight}</span></h1>
            <p class="hero-subtitle">${c.description}</p>
          </div>
        </div>
      </div>`;
  }

  el.innerHTML = `
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info-card reveal-left">
          <h3 class="contact-info-heading">Contact Information</h3>
          ${c.info
            .map(
              (i) => `
            <div class="contact-info-item">
              <div class="contact-icon-wrap">${i.icon}</div>
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
                <a href="${s.url}" class="social-icon-link" title="${s.name}" target="_blank" rel="noopener">${s.icon}</a>`,
                )
                .join("")}
            </div>
          </div>
        </div>
        <div class="contact-form-card reveal-right">
          <h3 class="contact-form-title">Send Us a Message</h3>
          <form id="contact-form" novalidate>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="cf-name">Full Name <span style="color:#ef4444">*</span></label>
                <input type="text" class="form-control" id="cf-name" placeholder="Your full name" style="color: var(--muted)" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="cf-email">Email Address <span style="color:#ef4444">*</span></label>
                <input type="email" class="form-control" id="cf-email" placeholder="your@email.com" style="color: var(--muted)" required>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="cf-phone">Phone Number</label>
                <input type="tel" class="form-control" id="cf-phone" placeholder="+92 300 0000000" style="color: var(--muted)">
              </div>
              <div class="form-group">
                <label class="form-label" for="cf-service">Service Interested In</label>
                <select class="form-control"  id="cf-service" style="color: var(--muted)">
                  <option value="">Select a service...</option>
                  ${c.services.map((s) => `<option value="${s}">${s}</option>`).join("")}
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="cf-message">Your Message <span style="color:#ef4444">*</span></label>
              <textarea class="form-control" id="cf-message" placeholder="Tell us about your project goals, budget, and timeline..." style="color: var(--muted)" required></textarea>
            </div>
            <button type="submit" class="btn-submit" id="submit-btn">
              <span id="submit-text">Send Message</span>
              <span id="submit-loading" style="display:none">Sending...</span>
            </button>
            <div class="form-success" id="form-success">
              ✓ Thank you! Your message has been received. We'll respond within 24 hours.
            </div>
            <div class="form-error" id="form-error"></div>
          </form>
        </div>
      </div>
      <div class="map reveal-right mt-5">
        <h3 class="contact-form-title">Our Location</h3>
        <div class="map-container">
          <iframe src="${c.mapEmbed}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  renderAboutPage();
  renderPortfolio();
  renderServices();
  renderServicesDetail();
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
