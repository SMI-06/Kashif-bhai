/**
 * Kashif Agency - Content Data
 * Edit this file to update all website content without touching HTML
 */

const SITE_SETTINGS = {
  brandName: "Kashif Agency",
  tagline: "Scaling Businesses Through Strategy, Paid Media, Automation & Conversion",
  logo: "KA",
  logoFull: "Kashif<span>Agency</span>",
  email: "hello@kashifagency.com",
  phone: "+92 300 1234567",
  address: "Office 14, Innovation Tower, Karachi, Pakistan",
  founded: "2004",
  experience: "20+",
  themeColor: "#D4AF37",
  accentColor: "#FFFFFF",
  goldColor: "#D4AF37",
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com"
  }
};

const NAV_MENU = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html" },
  { label: "Services", href: "services.html" },
  { label: "Portfolio", href: "portfolio.html" },
  // { label: "Testimonials", href: "testimonials.html" },
  // { label: "Team", href: "team.html" },
  // { label: "FAQs", href: "faq.html" },
  // { label: "Blog", href: "blog.html" },
  // { label: "Book a Call", href: "booking.html" }
];

const HERO = {
  badge: "AI-Powered Marketing Agency",
  headline: "We Build Brands That",
  rotatingWords: ["Dominate", "Convert", "Inspire", "Evolve", "Perform"],
  subheadline: "Kashif Agency — 20+ years of transforming businesses through cutting-edge digital marketing, AI automation, and technology solutions.",
  ctaPrimary: { label: "Book a Strategy Call", href: "booking.html" },
  ctaSecondary: { label: "View Our Work", href: "portfolio.html" },
  stats: [
    { value: "500+", label: "Projects Delivered" },
    { value: "20+", label: "Years Experience" },
    { value: "98%", label: "Client Retention" },
    { value: "50+", label: "Team Experts" }
  ]
};

const ABOUT = {
  badge: "Who We Are",
  headline: "A Legacy of Digital Excellence",
  description: "Founded in 2004, Kashif Agency has been at the forefront of digital transformation. We combine deep marketing expertise with the latest AI technologies to deliver measurable results for brands across industries.",
  description2: "From Fortune 500 companies to ambitious startups, we craft bespoke strategies that cut through the noise, capture attention, and convert audiences into loyal customers.",
  highlights: [
    { icon: "🎯", title: "Strategy First", desc: "Data-driven strategies aligned with your business goals" },
    { icon: "🤖", title: "AI-Powered", desc: "Latest AI tools integrated into every campaign" },
    { icon: "📈", title: "Results Focused", desc: "ROI-driven execution with transparent reporting" },
    { icon: "🌍", title: "Global Reach", desc: "International expertise with local market knowledge" }
  ],
  image: null
};

const SERVICES = [
  {
    id: "seo",
    icon: "🔍",
    category: "Digital Marketing",
    title: "SEO & Google Ranking",
    description: "Dominate search results with our data-driven SEO strategies. We combine technical excellence with content mastery to rank your business at the top.",
    features: ["Technical SEO Audit", "Keyword Strategy", "Link Building", "Local SEO"],
    color: "#00d4ff"
  },
  {
    id: "social",
    icon: "📱",
    category: "Digital Marketing",
    title: "Social Media Marketing",
    description: "Build a powerful social presence that engages audiences and drives conversions across all major platforms with our expert team.",
    features: ["Content Strategy", "Community Management", "Paid Campaigns", "Analytics"],
    color: "#7c3aed"
  },
  {
    id: "paid-ads",
    icon: "💰",
    category: "Advertising",
    title: "Paid Media & Advertising",
    description: "Maximize your ROI with precision-targeted paid campaigns on Google, Meta, LinkedIn, and beyond. Every rupee optimized for impact.",
    features: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Programmatic"],
    color: "#f59e0b"
  },
  {
    id: "branding",
    icon: "✨",
    category: "Branding",
    title: "Branding & Strategy",
    description: "Craft a brand identity that resonates, differentiates, and endures. From logo to full brand system, we build brands that lead markets.",
    features: ["Brand Identity", "Visual Design", "Brand Guidelines", "Positioning"],
    color: "#10b981"
  },
  {
    id: "web-dev",
    icon: "💻",
    category: "Technology",
    title: "Web Development",
    description: "High-performance, conversion-optimized websites and web apps built with modern technologies. Fast, secure, and beautifully designed.",
    features: ["React / Next.js", "E-Commerce", "CMS Solutions", "Progressive Web Apps"],
    color: "#f43f5e"
  },
  {
    id: "software",
    icon: "⚙️",
    category: "Technology",
    title: "Software Development",
    description: "Custom software solutions that automate operations, enhance customer experience, and create competitive advantages for your business.",
    features: ["Custom CRM", "ERP Systems", "Mobile Apps", "API Development"],
    color: "#3b82f6"
  },
  {
    id: "ai-auto",
    icon: "🤖",
    category: "AI Solutions",
    title: "AI Automation",
    description: "Automate repetitive tasks, streamline workflows, and unlock operational efficiency with intelligent AI systems tailored to your business.",
    features: ["Process Automation", "Chatbot Deployment", "Data Pipeline", "AI Workflows"],
    color: "#00d4ff"
  },
  {
    id: "ai-int",
    icon: "🧠",
    category: "AI Solutions",
    title: "AI Integration & Support",
    description: "Seamlessly integrate AI capabilities into your existing systems. We provide end-to-end AI implementation and ongoing technical support.",
    features: ["LLM Integration", "Custom AI Models", "AI Consulting", "24/7 AI Support"],
    color: "#7c3aed"
  },
  {
    id: "consulting",
    icon: "🎯",
    category: "Consulting",
    title: "Business Consulting",
    description: "Strategic consulting that aligns your marketing, technology, and business operations for sustainable growth and market leadership.",
    features: ["Growth Strategy", "Market Analysis", "Digital Transformation", "KPI Planning"],
    color: "#f59e0b"
  },
  {
    id: "offline",
    icon: "📺",
    category: "Marketing",
    title: "Offline Marketing",
    description: "Powerful offline campaigns that complement your digital presence. From print to events, we create integrated marketing ecosystems.",
    features: ["Print Design", "Event Marketing", "BTL Campaigns", "OOH Advertising"],
    color: "#10b981"
  }
];

const PORTFOLIO = [
  {
    id: 1,
    category: "Web Development",
    title: "NexaTech Platform",
    description: "Full-stack enterprise SaaS platform with AI-powered analytics dashboard for a leading fintech startup.",
    tags: ["React", "Node.js", "AI"],
    color: "#D4AF37",
    result: "340% user growth"
  },
  {
    id: 2,
    category: "Branding",
    title: "Velo Motors Rebrand",
    description: "Complete brand overhaul for a premium automotive brand — identity, digital assets, and launch campaign.",
    tags: ["Branding", "Design", "Strategy"],
    color: "#FFFFFF",
    result: "Brand recall +78%"
  },
  {
    id: 3,
    category: "SEO",
    title: "MediCare SEO Campaign",
    description: "Comprehensive SEO strategy that took a healthcare provider from page 5 to #1 position in 6 months.",
    tags: ["SEO", "Content", "Local"],
    color: "#D4AF37",
    result: "#1 Google Rank"
  },
  {
    id: 4,
    category: "AI Solutions",
    title: "RetailBot AI System",
    description: "Custom AI automation suite for a retail chain — inventory management, customer service bot, and predictive analytics.",
    tags: ["AI", "Automation", "Retail"],
    color: "#D4AF37",
    result: "60% cost reduction"
  },
  {
    id: 5,
    category: "Paid Ads",
    title: "LuxeApartments Campaign",
    description: "Performance marketing campaign for a real estate developer generating record leads at unprecedented cost efficiency.",
    tags: ["Google Ads", "Meta", "Real Estate"],
    color: "#FFFFFF",
    result: "12x ROAS achieved"
  },
  {
    id: 6,
    category: "Software",
    title: "LogiTrack ERP",
    description: "Custom logistics ERP system streamlining operations for a national distribution company across 12 cities.",
    tags: ["Software", "ERP", "Logistics"],
    color: "#D4AF37",
    result: "45% efficiency gain"
  }
];

const TRUST_LOGOS = [
  { name: "Global Tech Labs", label: "GTL", url: "#" },
  { name: "Enterprise Inc.", label: "EI", url: "#" },
  { name: "Nimbus University", label: "NU", url: "#" },
  { name: "Scale Partners", label: "SP", url: "#" },
  { name: "Velocity Works", label: "VW", url: "#" },
  { name: "Clarity Certified", label: "CC", url: "#" }
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "How Performance Marketing Drives 10x Growth for SaaS Teams",
    excerpt: "Learn the framework behind high-conversion campaigns, AI-led optimization, and repeatable growth systems.",
    category: "Growth",
    date: "May 2026",
    readTime: "5 min",
    link: "#"
  },
  {
    id: 2,
    title: "Modern Website Strategy for High-Attention Luxury Brands",
    excerpt: "A premium website is more than design — it is a conversion engine, analytics dashboard, and lead machine.",
    category: "Web Design",
    date: "Apr 2026",
    readTime: "6 min",
    link: "#"
  },
  {
    id: 3,
    title: "AI Automation Tactics Every Growth Team Should Deploy",
    excerpt: "From campaigns to customer journeys, discover the automation plays that save time and scale revenue.",
    category: "Automation",
    date: "Mar 2026",
    readTime: "4 min",
    link: "#"
  }
];

const BOOKING_PAGE = {
  badge: "Strategy Call",
  headline: "Book Your Growth Strategy Session",
  subheadline: "Secure a dedicated planning call with our experts to map your next phase of digital growth.",
  description: "We’ll evaluate your funnel, paid media, automation stack, and conversion systems to identify the fastest path to revenue growth.",
  cta: { label: "Book a Call", href: "#contact" },
  calendar: {
    provider: "Calendly",
    link: "#",
    note: "Connect your calendar once and let qualified leads schedule directly."
  },
  integrations: ["Calendly", "HubSpot CRM", "GA4", "Microsoft Clarity"]
};

const WHY_CHOOSE_US = {
  badge: "Why Kashif Agency",
  headline: "The Agency That Delivers Real Results",
  description: "We don't just run campaigns — we build growth engines. Our integrated approach combines strategy, creativity, and technology to deliver outcomes that matter.",
  reasons: [
    { icon: "🏆", title: "Award-Winning Work", desc: "Recognized by industry leaders for creative excellence and measurable impact across multiple categories." },
    { icon: "📊", title: "Data-Driven Decisions", desc: "Every strategy is backed by deep analytics. We track, measure, and optimize relentlessly for maximum ROI." },
    { icon: "⚡", title: "Agile Execution", desc: "Rapid deployment and iteration cycles. We move at the speed of the market and stay ahead of trends." },
    { icon: "🤝", title: "True Partnership", desc: "We embed ourselves in your business, acting as a strategic partner, not just a vendor." },
    { icon: "🔬", title: "R&D Investment", desc: "Continuous investment in emerging technologies ensures our clients always have a competitive edge." },
    { icon: "🌐", title: "Full-Stack Capability", desc: "From strategy to execution, creative to tech — we handle everything under one roof." }
  ]
};

const AI_SECTION = {
  badge: "AI-First Agency",
  headline: "The Future of Marketing is Intelligent",
  description: "We've integrated cutting-edge AI into every service we offer. From AI-generated content strategies to automated campaign optimization, we harness artificial intelligence to amplify human creativity and deliver results at scale.",
  capabilities: [
    { title: "Predictive Analytics", desc: "AI models that forecast campaign performance and market trends before they happen.", icon: "📡" },
    { title: "Smart Automation", desc: "Automated workflows that run 24/7, optimizing your marketing in real-time.", icon: "⚡" },
    { title: "AI Content Engine", desc: "AI-assisted content creation that maintains brand voice while scaling output.", icon: "✍️" },
    { title: "Conversational AI", desc: "Deploy intelligent chatbots that convert visitors into customers round the clock.", icon: "💬" }
  ]
};

const TESTIMONIALS = [
  {
    id: 1,
    name: "Ahmed Hassan",
    position: "CEO, NexaTech Solutions",
    review: "Kashif Agency transformed our digital presence completely. Within 6 months, our organic traffic tripled and lead quality improved dramatically. Their AI-powered approach is genuinely different from other agencies.",
    rating: 5,
    initials: "AH"
  },
  {
    id: 2,
    name: "Sarah Williams",
    position: "Marketing Director, Velo Motors",
    review: "The rebrand they executed for us was nothing short of spectacular. They understood our vision from day one and delivered a brand identity that perfectly captures our premium positioning. Our brand recall has soared.",
    rating: 5,
    initials: "SW"
  },
  {
    id: 3,
    name: "Rashid Khan",
    position: "Founder, MediCare Clinic",
    review: "From page 5 to the #1 spot on Google in just 6 months — I didn't believe it was possible until Kashif Agency made it happen. Their SEO expertise is world-class and the team is incredibly responsive.",
    rating: 5,
    initials: "RK"
  },
  {
    id: 4,
    name: "Emma Thompson",
    position: "COO, LuxeApartments Group",
    review: "The 12x ROAS on our paid campaign was honestly jaw-dropping. They don't just manage ads — they engineer growth systems. Every decision is backed by data and the results speak for themselves.",
    rating: 5,
    initials: "ET"
  },
  {
    id: 5,
    name: "Tariq Mehmood",
    position: "Director, LogiTrack Pvt Ltd",
    review: "The custom ERP they built for us runs our entire operations across 12 cities. The project was delivered on time, within budget, and the post-launch support has been exceptional. Highly recommend.",
    rating: 5,
    initials: "TM"
  }
];

const TEAM = [
  {
    id: 1,
    name: "Kashif Raza",
    role: "Founder & CEO",
    bio: "20+ years shaping digital landscapes. Visionary strategist and entrepreneur.",
    expertise: ["Strategy", "Leadership", "AI Vision"],
    initials: "KR",
    color: "#00d4ff"
  },
  {
    id: 2,
    name: "Zara Ahmed",
    role: "Creative Director",
    bio: "Award-winning designer with a passion for brands that stop the scroll.",
    expertise: ["Branding", "Design", "Creative Strategy"],
    initials: "ZA",
    color: "#7c3aed"
  },
  {
    id: 3,
    name: "Bilal Siddiqui",
    role: "Head of Technology",
    bio: "Full-stack architect building scalable systems and AI integrations.",
    expertise: ["AI/ML", "Architecture", "DevOps"],
    initials: "BS",
    color: "#f59e0b"
  },
  {
    id: 4,
    name: "Nadia Farooq",
    role: "SEO & Growth Lead",
    bio: "Data-obsessed growth hacker who has ranked hundreds of businesses #1.",
    expertise: ["SEO", "PPC", "Analytics"],
    initials: "NF",
    color: "#10b981"
  },
  {
    id: 5,
    name: "Omar Khalil",
    role: "AI Solutions Architect",
    bio: "Specialist in deploying enterprise AI automation and LLM integrations.",
    expertise: ["LLM", "Automation", "ML Ops"],
    initials: "OK",
    color: "#f43f5e"
  },
  {
    id: 6,
    name: "Aya Malik",
    role: "Head of Performance",
    bio: "Paid media specialist consistently delivering 10x+ ROAS for clients.",
    expertise: ["Paid Ads", "CRO", "Data"],
    initials: "AM",
    color: "#3b82f6"
  }
];

const FAQS = [
  {
    q: "How long does it take to see results from SEO?",
    a: "SEO is a long-term investment. You'll typically see initial improvements within 2-3 months, with significant ranking gains in 4-6 months. We provide monthly reports so you can track progress from day one."
  },
  {
    q: "What industries do you specialize in?",
    a: "We have experience across 20+ industries including healthcare, real estate, e-commerce, fintech, hospitality, and education. Our multi-industry expertise means we bring fresh cross-sector insights to every engagement."
  },
  {
    q: "Do you work with businesses outside Pakistan?",
    a: "Absolutely. We serve clients globally. Our team operates across multiple time zones and we have successfully delivered projects for clients in the UAE, UK, USA, and Southeast Asia."
  },
  {
    q: "What makes your AI services different from competitors?",
    a: "We don't bolt on AI as an afterthought — it's embedded in our core methodology. We have dedicated AI engineers who build custom solutions tailored to each client's specific workflow, not generic off-the-shelf tools."
  },
  {
    q: "How do you structure your pricing?",
    a: "We offer flexible engagement models: project-based, monthly retainer, or performance-based pricing. After an initial consultation, we provide a customized proposal aligned with your goals and budget."
  },
  {
    q: "Can you handle both online and offline marketing campaigns?",
    a: "Yes — this is one of our key differentiators. We create fully integrated campaigns that unify digital and offline channels, ensuring consistent brand messaging and maximized reach across all touchpoints."
  },
  {
    q: "Do you offer post-project support?",
    a: "All our engagements include a dedicated support period. For technology projects, we offer ongoing SLA-backed maintenance plans. For campaigns, we provide continuous optimization as part of retainer packages."
  }
];

const FOOTER = {
  description: "Kashif Agency — 20+ years of transforming businesses through intelligent marketing, cutting-edge technology, and AI-powered solutions.",
  columns: [
    {
      title: "Services",
      links: [
        { label: "Performance Marketing", href: "#" },
        { label: "SEO & Google Ranking", href: "#" },
        { label: "Social Media Marketing", href: "services.html" },
        // { label: "Paid Advertising", href: "services.html" },
        { label: "Web Development", href: "#" },
        { label: "AI Automation", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "about.html" },
        { label: "Our Team", href: "team.html" },
        { label: "Portfolio", href: "portfolio.html" },
        { label: "Services", href: "services.html" },
        { label: "Contact", href: "contact.html" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Case Studies", href: "portfolio.html" },
        { label: "Blog", href: "blog.html" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Admin Panel", href: "admin.html" }
      ]
    }
  ],
  copyright: `© ${new Date().getFullYear()} Kashif Agency. All Rights Reserved.`
};
