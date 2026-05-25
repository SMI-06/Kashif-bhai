/**
 * Kashif Agency - Dynamic Renderer
 * Generates all HTML from data constants — no hardcoded content in HTML
 */

const Renderer = {
  /* ─── NAVBAR ──────────────────────────────────── */
  renderNavbar() {
    const nav = document.getElementById("navbar");
    if (!nav) return;
    nav.innerHTML = `
      <div class="nav-container">
        <a href="#home" class="nav-logo">
          <span class="logo-mark">${SITE_SETTINGS.logo}</span>
          <span class="logo-text">${SITE_SETTINGS.brandName.split(" ")[0]}<em>${SITE_SETTINGS.brandName.split(" ")[1]}</em></span>
        </a>
        <ul class="nav-links" id="navLinks">
        ${NAV_MENU.map(
          (item) => `<li><a href="${item.href}" class="nav-link" 
       onclick="handleNavClick(event, '${item.href}')">
      ${item.label}
    </a></li>`,
        ).join("")}
        </ul>
        <div class="nav-actions">
          <a href="#contact" class="btn-nav-cta">Get Started</a>
          <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    `;
  },

  /* ─── HERO ─────────────────────────────────────── */
  renderHero() {
    const section = document.getElementById("hero-section");
    if (!section) return;
    section.innerHTML = `
      <div class="hero-bg-grid"></div>
      <div class="hero-orb hero-orb-1"></div>
      <div class="hero-orb hero-orb-2"></div>
      <div class="hero-orb hero-orb-3"></div>
      <div class="container hero-content">
        <h1 class="hero-headline">
          ${HERO.headline}
          <div class="rotating-words-wrapper">
            <div class="rotating-words" id="rotatingWords">
              ${HERO.rotatingWords.map((w) => `<span class="rw-item">${w}</span>`).join("")}
            </div>
          </div>
        </h1>
        <p class="hero-sub">${HERO.subheadline}</p>
        <div class="hero-ctas">
          <a href="#" class="btn-primary">${HERO.ctaPrimary.label} <span class="btn-arrow">→</span></a>
        </div>
      </div>
    `;
  },

  /* ─── TRUST LOGOS ─────────────────────────────── */
  renderTrust() {
    const section = document.getElementById("trust-section");
    if (!section) return;
    section.innerHTML = `
      <div class="container">
        <div class="trust-strip" data-reveal>
          ${TRUST_LOGOS.map(
            (logo) => `
            <a href="${logo.url}" class="trust-logo">
              <span>${logo.label}</span>
              <small>${logo.name}</small>
            </a>
          `,
          ).join("")}
        </div>
      </div>
    `;
  },

  /* ─── ABOUT ────────────────────────────────────── */
  renderAbout() {
    const section = document.getElementById("about-section");
    if (!section) return;
    section.innerHTML = `
      <div class="container">
        <div class="about-grid">
          <div class="about-visual">
            <div class="about-card-3d">
              <div class="about-inner-card">
                <div class="about-logo-big">${SITE_SETTINGS.logo}</div>
                <div class="about-years">
                  <span class="years-num">${SITE_SETTINGS.experience}</span>
                  <span class="years-label">Years of Excellence</span>
                </div>
                <div class="about-floating-tags">
                  <span class="ftag ftag-1">🏆 Award Winning</span>
                  <span class="ftag ftag-2">🤖 AI Powered</span>
                  <span class="ftag ftag-3">📈 Results Driven</span>
                </div>
              </div>
              <div class="about-glow"></div>
            </div>
          </div>
          <div class="about-content" data-reveal="left">
            <div class="section-badge">${ABOUT.badge}</div>
            <h2 class="section-headline">${ABOUT.headline}</h2>
            <p class="about-desc">${ABOUT.description}</p>
            <p class="about-desc">${ABOUT.description2}</p>
            <div class="about-highlights">
              ${ABOUT.highlights
                .map(
                  (h) => `
                <div class="highlight-item">
                  <div class="hl-icon">${h.icon}</div>
                  <div>
                    <h4>${h.title}</h4>
                    <p>${h.desc}</p>
                  </div>
                </div>
              `,
                )
                .join("")}
            </div>
            <a href="#contact" class="btn-primary mt-3">Work With Us <span class="btn-arrow">→</span></a>
          </div>
        </div>
      </div>
    `;
  },

  /* ─── SERVICES ─────────────────────────────────── */
  renderServices() {
    const section = document.getElementById("services-section");
    if (!section) return;
    section.innerHTML = `
      <div class="container">
        <div class="section-header" data-reveal>
          <div class="section-badge">What We Do</div>
          <h2 class="section-headline">Our <span class="gradient-text">Services</span></h2>
          <p class="section-sub">From strategy to execution — a complete suite of marketing and technology services built for modern businesses.</p>
        </div>
        <div class="services-filter" id="servicesFilter">
          <button class="filter-btn active" data-filter="all">All Services</button>
          ${[...new Set(SERVICES.map((s) => s.category))]
            .map(
              (cat) =>
                `<button class="filter-btn" data-filter="${cat}">${cat}</button>`,
            )
            .join("")}
        </div>
        <div class="services-grid" id="servicesGrid">
          ${SERVICES.map(
            (s) => `
            <div class="service-card" data-category="${s.category}" data-reveal>
              <div class="sc-glow" style="background: radial-gradient(circle at 50% 0%, ${s.color}22, transparent 70%)"></div>
              <div class="sc-icon" style="background: ${s.color}18; color: ${s.color}">${s.icon}</div>
              <div class="sc-category">${s.category}</div>
              <h3 class="sc-title">${s.title}</h3>
              <p class="sc-desc">${s.description}</p>
              <ul class="sc-features">
                ${s.features.map((f) => `<li><span style="color:${s.color}">▸</span> ${f}</li>`).join("")}
              </ul>
              <a href="#contact" class="sc-link" style="color: ${s.color}">Get Started <span>→</span></a>
              <div class="sc-border" style="background: linear-gradient(90deg, ${s.color}, transparent)"></div>
            </div>
          `,
          ).join("")}
        </div>
      </div>
    `;
  },

  /* ─── PORTFOLIO ────────────────────────────────── */
  renderPortfolio() {
    const section = document.getElementById("portfolio-section");
    if (!section) return;
    const categories = ["All", ...new Set(PORTFOLIO.map((p) => p.category))];
    section.innerHTML = `
      <div class="container">
        <div class="section-header" data-reveal>
          <div class="section-badge">Our Work</div>
          <h2 class="section-headline">Featured <span class="gradient-text">Projects</span></h2>
          <p class="section-sub">A selection of our most impactful work across industries and disciplines.</p>
        </div>
        <div class="portfolio-filter" id="portfolioFilter">
          ${categories
            .map(
              (cat, i) =>
                `<button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${cat}">${cat}</button>`,
            )
            .join("")}
        </div>
        <div class="portfolio-grid" id="portfolioGrid">
          ${PORTFOLIO.map(
            (p) => `
            <div class="portfolio-card" data-category="${p.category}" data-reveal>
              <div class="pc-visual" style="background: linear-gradient(135deg, ${p.color}33, ${p.color}11)">
                <div class="pc-number">${String(p.id).padStart(2, "0")}</div>
                <div class="pc-category-tag">${p.category}</div>
                <div class="pc-result-badge">${p.result}</div>
                <div class="pc-glow" style="background: radial-gradient(circle, ${p.color}44, transparent)"></div>
              </div>
              <div class="pc-content">
                <span class="pc-cat">${p.category}</span>
                <h3 class="pc-title">${p.title}</h3>
                <p class="pc-desc">${p.description}</p>
                <div class="pc-tags">
                  ${p.tags.map((t) => `<span class="pc-tag" style="border-color: ${p.color}55; color: ${p.color}">${t}</span>`).join("")}
                </div>
              </div>
              <div class="pc-overlay">
                <div class="pco-inner">
                  <h3>${p.title}</h3>
                  <p>${p.description}</p>
                  <div class="pco-result" style="color: ${p.color}">${p.result}</div>
                  <a href="#contact" class="btn-primary-sm">Discuss Project →</a>
                </div>
              </div>
            </div>
          `,
          ).join("")}
        </div>
      </div>
    `;
  },

  /* ─── WHY US ───────────────────────────────────── */
  renderWhyUs() {
    const section = document.getElementById("whyus-section");
    if (!section) return;
    section.innerHTML = `
      <div class="container">
        <div class="section-header" data-reveal>
          <div class="section-badge">${WHY_CHOOSE_US.badge}</div>
          <h2 class="section-headline">${WHY_CHOOSE_US.headline.replace("Results", '<span class="gradient-text">Results</span>')}</h2>
          <p class="section-sub">${WHY_CHOOSE_US.description}</p>
        </div>
        <div class="whyus-grid">
          ${WHY_CHOOSE_US.reasons
            .map(
              (r) => `
            <div class="whyus-card" data-reveal>
              <div class="wc-icon">${r.icon}</div>
              <h3>${r.title}</h3>
              <p>${r.desc}</p>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    `;
  },

  /* ─── AI SECTION ───────────────────────────────── */
  renderAI() {
    const section = document.getElementById("ai-section");
    if (!section) return;
    section.innerHTML = `
      <div class="ai-bg-lines"></div>
      <div class="container">
        <div class="ai-layout">
          <div class="ai-content" data-reveal="left">
            <div class="section-badge">${AI_SECTION.badge}</div>
            <h2 class="section-headline">${AI_SECTION.headline.replace("Intelligent", '<span class="gradient-text">Intelligent</span>')}</h2>
            <p class="ai-desc">${AI_SECTION.description}</p>
            <div class="ai-capabilities">
              ${AI_SECTION.capabilities
                .map(
                  (c) => `
                <div class="ai-cap">
                  <div class="ai-cap-icon">${c.icon}</div>
                  <div>
                    <h4>${c.title}</h4>
                    <p>${c.desc}</p>
                  </div>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
          <div class="ai-visual" data-reveal="right">
            <div class="ai-orb-container">
              <div class="ai-center-orb">
                <span>AI</span>
              </div>
              <div class="ai-orbit ai-orbit-1">
                <div class="ai-planet" style="background: var(--gold)">🔍</div>
              </div>
              <div class="ai-orbit ai-orbit-2">
                <div class="ai-planet" style="background: rgba(255,255,255,0.85)">🤖</div>
              </div>
              <div class="ai-orbit ai-orbit-3">
                <div class="ai-planet" style="background: rgba(212,175,55,0.15)">⚡</div>
              </div>
              <div class="ai-ring ai-ring-1"></div>
              <div class="ai-ring ai-ring-2"></div>
              <div class="ai-ring ai-ring-3"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  /* ─── TESTIMONIALS ─────────────────────────────── */
  renderTestimonials() {
    const section = document.getElementById("testimonials-section");
    if (!section) return;
    section.innerHTML = `
      <div class="container">
        <div class="section-header" data-reveal>
          <div class="section-badge">Client Stories</div>
          <h2 class="section-headline">What Clients <span class="gradient-text">Say</span></h2>
        </div>
        <div class="testimonials-slider-wrapper">
          <div class="testimonials-track" id="testimonialsTrack">
            ${TESTIMONIALS.map(
              (t) => `
              <div class="testimonial-card">
                <div class="tc-stars">${"★".repeat(t.rating)}</div>
                <p class="tc-review">"${t.review}"</p>
                <div class="tc-author">
                  <div class="tc-avatar">${t.initials}</div>
                  <div>
                    <div class="tc-name">${t.name}</div>
                    <div class="tc-pos">${t.position}</div>
                  </div>
                </div>
              </div>
            `,
            ).join("")}
          </div>
          <div class="slider-controls">
            <button class="slider-btn" id="sliderPrev">←</button>
            <div class="slider-dots" id="sliderDots">
              ${TESTIMONIALS.map((_, i) => `<span class="dot ${i === 0 ? "active" : ""}" data-index="${i}"></span>`).join("")}
            </div>
            <button class="slider-btn" id="sliderNext">→</button>
          </div>
        </div>
      </div>
    `;
  },

  /* ─── TEAM ─────────────────────────────────────── */
  renderTeam() {
    const section = document.getElementById("team-section");
    if (!section) return;
    section.innerHTML = `
      <div class="container">
        <div class="section-header" data-reveal>
          <div class="section-badge">The People</div>
          <h2 class="section-headline">Meet the <span class="gradient-text">Team</span></h2>
          <p class="section-sub">Exceptional minds united by a passion for innovation and an obsession with client results.</p>
        </div>
        <div class="team-grid">
          ${TEAM.map(
            (m) => `
            <div class="team-card" data-reveal>
              <div class="team-avatar-wrap" style="--c: ${m.color}">
                <div class="team-avatar" style="background: linear-gradient(135deg, ${m.color}44, ${m.color}11)">
                  <span style="color: ${m.color}">${m.initials}</span>
                </div>
                <div class="team-avatar-ring" style="border-color: ${m.color}55"></div>
              </div>
              <h3 class="team-name">${m.name}</h3>
              <div class="team-role" style="color: ${m.color}">${m.role}</div>
              <p class="team-bio">${m.bio}</p>
              <div class="team-expertise">
                ${m.expertise.map((e) => `<span class="expertise-tag" style="border-color: ${m.color}44">${e}</span>`).join("")}
              </div>
            </div>
          `,
          ).join("")}
        </div>
      </div>
    `;
  },

  /* ─── COUNTERS ─────────────────────────────────── */
  renderCounters() {
    const section = document.getElementById("counters-section");
    if (!section) return;
    const counters = [
      { value: 500, suffix: "+", label: "Projects Delivered" },
      { value: 20, suffix: "+", label: "Years Experience" },
      { value: 98, suffix: "%", label: "Client Satisfaction" },
      { value: 50, suffix: "+", label: "Team Members" },
      { value: 12, suffix: "x", label: "Avg. ROAS" },
      { value: 100, suffix: "+", label: "Global Clients" },
    ];
    section.innerHTML = `
      <div class="container">
        <div class="counters-grid">
          ${counters
            .map(
              (c) => `
            <div class="counter-item" data-reveal>
              <div class="counter-val" data-target="${c.value}" data-suffix="${c.suffix}">0${c.suffix}</div>
              <div class="counter-label">${c.label}</div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    `;
  },

  /* ─── CTA BANNER ───────────────────────────────── */
  renderCTA() {
    const section = document.getElementById("cta-section");
    if (!section) return;
    section.innerHTML = `
      <div class="cta-orb-1"></div>
      <div class="cta-orb-2"></div>
      <div class="container">
        <div class="cta-content" data-reveal>
          <div class="section-badge">Ready to Grow?</div>
          <h2>Let's Build Something <span class="gradient-text">Extraordinary</span></h2>
          <p>Join 500+ businesses that trust Kashif Agency to drive their digital growth. Schedule your free strategy session today.</p>
          <div class="cta-actions">
            <a href="#contact" class="btn-primary btn-lg">Start Your Journey <span class="btn-arrow">→</span></a>
            <a href="tel:${SITE_SETTINGS.phone}" class="btn-ghost btn-lg">📞 ${SITE_SETTINGS.phone}</a>
          </div>
        </div>
      </div>
    `;
  },

  /* ─── FAQ ──────────────────────────────────────── */
  renderFAQ() {
    const section = document.getElementById("faq-section");
    if (!section) return;
    section.innerHTML = `
      <div class="container">
        <div class="section-header" data-reveal>
          <div class="section-badge">FAQ</div>
          <h2 class="section-headline">Frequently Asked <span class="gradient-text">Questions</span></h2>
        </div>
        <div class="faq-list" id="faqList">
          ${FAQS.map(
            (f, i) => `
            <div class="faq-item" data-reveal>
              <button class="faq-q" data-index="${i}">
                <span>${f.q}</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-a" id="faq-${i}">
                <p>${f.a}</p>
              </div>
            </div>
          `,
          ).join("")}
        </div>
      </div>
    `;
  },

  /* ─── CONTACT ──────────────────────────────────── */
  renderContact() {
    const section = document.getElementById("contact-section");
    if (!section) return;
    section.innerHTML = `
      <div class="container">
        <div class="section-header" data-reveal>
          <div class="section-badge">Get In Touch</div>
          <h2 class="section-headline">Let's <span class="gradient-text">Connect</span></h2>
          <p class="section-sub">Ready to transform your business? Let's start with a conversation.</p>
        </div>
        <div class="contact-layout">
          <div class="contact-info" data-reveal="left">
            <div class="ci-item">
              <div class="ci-icon">📧</div>
              <div>
                <h4>Email Us</h4>
                <a href="mailto:${SITE_SETTINGS.email}">${SITE_SETTINGS.email}</a>
              </div>
            </div>
            <div class="ci-item">
              <div class="ci-icon">📞</div>
              <div>
                <h4>Call Us</h4>
                <a href="tel:${SITE_SETTINGS.phone}">${SITE_SETTINGS.phone}</a>
              </div>
            </div>
            <div class="ci-item">
              <div class="ci-icon">📍</div>
              <div>
                <h4>Visit Us</h4>
                <p>${SITE_SETTINGS.address}</p>
              </div>
            </div>
            <div class="social-links">
              <a href="${SITE_SETTINGS.social.linkedin}" class="social-link" title="LinkedIn">in</a>
              <a href="${SITE_SETTINGS.social.twitter}" class="social-link" title="Twitter">𝕏</a>
              <a href="${SITE_SETTINGS.social.instagram}" class="social-link" title="Instagram">ig</a>
              <a href="${SITE_SETTINGS.social.facebook}" class="social-link" title="Facebook">f</a>
            </div>
          </div>
          <div class="contact-form-wrap" data-reveal="right">
            <form id="contactForm" class="contact-form" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" id="f_name" placeholder="Ahmed Hassan" required>
                </div>
                <div class="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" id="f_email" placeholder="ahmed@company.com" required>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" id="f_phone" placeholder="+92 300 0000000">
                </div>
                <div class="form-group">
                  <label>Service Needed *</label>
                  <select name="service" id="f_service" required>
                    <option value="">Select a Service</option>
                    ${SERVICES.map((s) => `<option value="${s.id}">${s.title}</option>`).join("")}
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label>Message *</label>
                <textarea name="message" id="f_message" rows="5" placeholder="Tell us about your project and goals..." required></textarea>
              </div>
              <button type="submit" class="btn-primary btn-full" id="submitBtn">
                <span id="btnText">Send Message</span>
                <span id="btnLoader" style="display:none">Sending...</span>
              </button>
              <div id="formSuccess" class="form-success" style="display:none">
                ✅ Message received! We'll be in touch within 24 hours.
              </div>
              <div id="formError" class="form-error" style="display:none">
                ❌ Please fill in all required fields.
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  },

  /* ─── FOOTER ───────────────────────────────────── */
  renderFooter() {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    footer.innerHTML = `
      <div class="footer-top">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="footer-logo">
                <span class="logo-mark">${SITE_SETTINGS.logo}</span>
                <span>${SITE_SETTINGS.brandName}</span>
              </div>
              <p>${FOOTER.description}</p>
            </div>
            ${FOOTER.columns
              .map(
                (col) => `
              <div class="footer-col">
                <h4>${col.title}</h4>
                <ul>
                  ${col.links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}
                </ul>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>${FOOTER.copyright}</p>
          <div class="footer-social">
            <a href="${SITE_SETTINGS.social.linkedin}" class="fs-link">in</a>
            <a href="${SITE_SETTINGS.social.twitter}" class="fs-link">𝕏</a>
            <a href="${SITE_SETTINGS.social.instagram}" class="fs-link">ig</a>
            <a href="${SITE_SETTINGS.social.facebook}" class="fs-link">f</a>
          </div>
        </div>
      </div>
    `;
  },

  /* ─── RENDER ALL ──────────────────────────────── */
  renderAll() {
    this.renderNavbar();
    this.renderHero();
    this.renderAbout();
    this.renderServices();
    this.renderPortfolio();
    this.renderWhyUs();
    this.renderAI();
    this.renderTestimonials();
    this.renderTeam();
    this.renderCounters();
    this.renderCTA();
    this.renderFAQ();
    this.renderContact();
    this.renderFooter();
  },
};
