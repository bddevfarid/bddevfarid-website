// Every piece of text on the site lives here, so updating the portfolio
// never means touching layout code. Install counts come from the
// WordPress.org plugin API (checked 21 Oct 2026).

export const site = {
  url: "https://bddevfarid.com",
  name: "Faridul Islam",
  handle: "bddevfarid",
  title: "Faridul Islam — Lead WordPress Engineer & Plugin Security Specialist",
  description:
    "Lead WordPress Engineer & Plugin Security Specialist at Sigmative. I build and secure WordPress plugins — Element Pack, Prime Slider, Ultimate Post Kit — used on 230,000+ websites.",
  locale: "en_US",
};

export const person = {
  name: "Faridul Islam",
  role: "Lead WordPress Engineer & Plugin Security Specialist",
  company: "Sigmative LLC",
  location: "Bogura, Bangladesh",
  photo: "/images/faridul-islam.jpg",
  availability: "Open to senior & lead WordPress roles",
};

export const hero = {
  eyebrow: "Lead WordPress Engineer · Plugin Security",
  headline: ["I build and secure", "WordPress plugins used on", "230,000+ websites."],
  intro:
    "Seven years of shipping Elementor add-ons and WordPress plugins at scale — with a focus on security, performance and getting through WordPress.org review.",
};

export const stats = [
  { value: "230K+", label: "Active installs across plugins I lead" },
  { value: "7+", label: "Years building WordPress products" },
  { value: "10+", label: "Plugins in the portfolio I lead" },
  { value: "4.7★", label: "Element Pack rating · 284 reviews" },
];

export const about = {
  title: "At this scale, there is no such thing as a small bug.",
  paragraphs: [
    "Most WordPress plugins fail in one of three ways: they slow the site down, they ship a security hole, or they get pulled from WordPress.org. I've spent seven years preventing all three.",
    "When a plugin runs on hundreds of thousands of sites, one unescaped attribute becomes an XSS on every one of them. One bloated script slows every visitor. One review failure can take a product out of the directory overnight.",
    "As Security Specialist & Lead Engineer at Sigmative / BdThemes, I lead the team behind Element Pack, Prime Slider, Ultimate Post Kit, Pixel Gallery, Ultimate Store Kit, ZoloBlocks, Sigma Forms, Spin Wheel and more.",
  ],
};

export const expertise = [
  {
    key: "security",
    title: "Plugin security",
    body: "Triage researcher reports, patch XSS and injection paths, harden bundled libraries, and ship coordinated fixes in free and Pro editions.",
    tags: ["XSS hardening", "Secure code review", "Vulnerability management"],
  },
  {
    key: "performance",
    title: "Performance",
    body: "Load assets only where they're used, remove duplicate libraries, and prove every change with Lighthouse under heavy CPU throttling.",
    tags: ["Core Web Vitals", "Lighthouse", "Asset loading"],
  },
  {
    key: "compliance",
    title: "WordPress.org compliance",
    body: "Keep products passing plugin review: no locked features, sanitized input, escaped output, prefixed code and documented external services.",
    tags: ["WPCS", "Plugin Check", "Guidelines"],
  },
  {
    key: "release",
    title: "Release management",
    body: "Ship free + Pro editions in lockstep so no combination of versions breaks a customer's site.",
    tags: ["Hooks & filters", "Back-compat", "Versioning"],
  },
  {
    key: "product",
    title: "Product engineering",
    body: "Elementor widgets, Gutenberg blocks and React admin dashboards — built to stay identical in the editor and on the live site.",
    tags: ["Elementor", "Gutenberg", "React"],
  },
];

export const plugins = [
  {
    name: "Element Pack",
    slug: "bdthemes-element-pack-lite",
    installs: "100,000+",
    rating: "4.7★ · 284 reviews",
    blurb: "A large Elementor add-on library — widgets, extensions and templates for building any page.",
  },
  {
    name: "Prime Slider",
    slug: "bdthemes-prime-slider-lite",
    installs: "100,000+",
    rating: "4.5★ · 82 reviews",
    blurb: "Hero sliders and showcase layouts for Elementor with a React admin dashboard.",
  },
  {
    name: "Ultimate Post Kit",
    slug: "ultimate-post-kit",
    installs: "30,000+",
    rating: "4.8★ · 58 reviews",
    blurb: "Blog and magazine post layouts, grids and carousels for Elementor.",
  },
  {
    name: "Pixel Gallery",
    slug: "pixel-gallery",
    installs: "4,000+",
    rating: "4.8★",
    blurb: "Image gallery and portfolio widgets with ready-made layout kits.",
  },
  {
    name: "Ultimate Store Kit",
    slug: "ultimate-store-kit",
    installs: "3,000+",
    rating: "4.5★",
    blurb: "WooCommerce product grids, carousels and store layouts for Elementor.",
  },
  {
    name: "ZoloBlocks",
    slug: "zoloblocks",
    installs: "1,000+",
    rating: "5.0★",
    blurb: "A Gutenberg block collection for building full pages in the block editor.",
  },
];

export const caseStudy = {
  eyebrow: "Case study · Element Pack 10",
  title: "We deleted up to 39% of Element Pack's CSS. Nobody noticed.",
  body: "Element Pack used to do what most plugins do: load its assets everywhere, just in case. In version 10 we flipped that — assets load only on pages that use a widget, duplicate library loads are gone, and every change was benchmarked with Lighthouse under heavy CPU throttling.",
  lesson: "A plugin's real cost isn't on the pages that use it. It's on the hundreds that don't.",
  metrics: [
    { label: "CSS shipped", before: 100, after: 61, result: "−32% to −39%" },
    { label: "Total Blocking Time", before: 100, after: 40, result: "−60%" },
  ],
};

export const experience = [
  {
    role: "Security Specialist & Lead Engineer",
    company: "Sigmative LLC",
    period: "Aug 2026 — Present",
    points: [
      "Hardened the plugin portfolio against stored XSS by replacing string-built markup with safe DOM construction and patching the bundled UIkit library.",
      "Triage security reports from external researchers and take each from reproduction to a coordinated fix in free and Pro editions.",
      "Audit products against WordPress.org guidelines to keep every plugin compliant and listed.",
    ],
  },
  {
    role: "WordPress Team Lead",
    company: "Sigmative LLC",
    period: "Sep 2025 — Present",
    points: [
      "Lead development of 10+ WordPress plugins with 230,000+ combined active installs.",
      "Cut CSS by up to 39% and Total Blocking Time by 60% in Element Pack 10.",
      "Built a React admin dashboard and per-page asset combining for Prime Slider.",
      "Own release management for paired free/Pro plugins.",
    ],
  },
  {
    role: "WordPress Plugin Developer",
    company: "BdThemes Limited",
    period: "Apr 2019 — Sep 2025",
    points: [
      "Built Elementor widgets and features for Element Pack and Prime Slider — each now active on 100,000+ sites.",
      "Developed features for Ultimate Post Kit and Pixel Gallery.",
    ],
  },
];

export const insights = [
  {
    title: "One unescaped attribute = one XSS on every site that runs your plugin.",
    summary: "What I check first in every Elementor widget security review.",
    tag: "Security",
  },
  {
    title: "innerHTML is not a template engine.",
    summary: "Why boring DOM APIs are the secure way to build plugin UI.",
    tag: "Security",
  },
  {
    title: "Want to stay in the WordPress plugin directory? Never lock free features.",
    summary: "What gets plugins rejected — and what the Plugins Team wants instead.",
    tag: "Compliance",
  },
  {
    title: "If your Lighthouse score is perfect on your MacBook, you're testing wrong.",
    summary: "How I benchmark plugin performance like the slowest user.",
    tag: "Performance",
  },
  {
    title: "Releasing a free plugin and its Pro add-on is like changing an engine mid-flight.",
    summary: "Rules for keeping every version combination working.",
    tag: "Releases",
  },
  {
    title: "“It works in the Elementor editor” doesn't mean it works on the live site.",
    summary: "Editor preview vs. frontend: what I always test separately.",
    tag: "Elementor",
  },
];

export const stack = [
  "PHP",
  "JavaScript",
  "TypeScript",
  "React",
  "Elementor API",
  "Gutenberg",
  "WordPress REST API",
  "WooCommerce",
  "MySQL",
  "WP-CLI",
  "WPCS / Plugin Check",
  "Lighthouse",
  "Git",
];

export const credentials = [
  {
    title: "WordPress Plugin Development",
    issuer: "weDevs Academy",
    year: "2024",
  },
  {
    title: "Diploma in Engineering, Electrical",
    issuer: "Bogura Polytechnic Institute",
    year: "2013 — 2017",
  },
];

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/faridbpi10/", handle: "in/faridbpi10" },
  { label: "GitHub", href: "https://github.com/bddevfarid", handle: "@bddevfarid" },
  { label: "X", href: "https://x.com/bddevfarid", handle: "@bddevfarid" },
  { label: "Facebook", href: "https://www.facebook.com/bddevfarid", handle: "bddevfarid" },
  { label: "Instagram", href: "https://www.instagram.com/bddevfarid", handle: "@bddevfarid" },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Plugins" },
  { href: "#case-study", label: "Case study" },
  { href: "#experience", label: "Experience" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];
