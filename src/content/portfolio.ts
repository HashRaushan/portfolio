/**
 * ============================================================
 * PORTFOLIO CONTENT — SINGLE SOURCE OF TRUTH
 * ============================================================
 * Edit this file to update all website content.
 * No frontend code changes are needed for ordinary content updates.
 *
 * ACCURACY RULES:
 * - Fields marked `verified: false` are shown as "to be confirmed".
 * - Never add invented dates, metrics, grades or achievements.
 * ============================================================
 */

/** Must match `basePath` in next.config.ts. GitHub Pages serves the site
 *  from https://hashraushan.github.io/portfolio/ so every public asset
 *  reference built by hand needs this prefix (next/image with
 *  unoptimized:true does not add it automatically). */
export const basePath = "/portfolio";

export const site = {
  name: "Raushan Kumar Pathak",
  monogram: "RKP",
  headline:
    "MBA Candidate | Marketing & Operations | Connecting Customer Insight with Business Execution",
  tagline: "Business Perspective. Strategic Thinking. Technological Curiosity.",
  positioning:
    "I am interested in understanding how businesses grow, how customers make decisions and how well-designed operations turn ideas into measurable outcomes.",
  location: "India",
  email: "email.raushanpathak@gmail.com",
  phone: "+91 95215 24102",
  phoneHref: "+919521524102",
  linkedin: "https://www.linkedin.com/in/iraushanx",
  linkedinLabel: "linkedin.com/in/iraushanx",
  resumeUrl:
    "https://drive.google.com/file/d/1fGfMUXPXS6bIJej3DHfbBIT3KbD3hDgY/view?usp=sharing",
  resumeEmbedUrl:
    "https://drive.google.com/file/d/1fGfMUXPXS6bIJej3DHfbBIT3KbD3hDgY/preview",
  /** Live URL on GitHub Pages. Used for SEO canonical, sitemap and
   *  social-share tags. If you later attach a custom domain, update it
   *  here AND in next.config.ts (basePath). */
  url: "https://hashraushan.github.io/portfolio",
  languages: ["English", "Hindi"],
};

export const heroStats = [
  { value: "MBA", label: "Marketing & Operations", note: "Candidate, 2028" },
  { value: "3", label: "Disciplines Converged", note: "Tech · Business · Marketing" },
  { value: "100+", label: "Units Sold in 15 Days", note: "₹25K reported sales" },
];

export const marqueeWords = [
  "Market Research",
  "Brand Strategy",
  "Operations Thinking",
  "Consumer Insight",
  "Go-to-Market",
  "Generative AI",
  "Business Analysis",
];

/* ------------------------------ ABOUT ------------------------------ */

export const about = {
  chapterLabel: "01 — The Story",
  title: "A Journey Across Three Disciplines",
  paragraphs: [
    "My academic path moved from code to commerce: a Diploma in Computer Science taught me how systems are built, a BBA taught me how organisations run, and my MBA in Marketing and Operations is teaching me how customers think and businesses grow.",
    "That combination is the point. Technology gave me structured, analytical thinking. Business education gave me context for markets, operations and people. Together they shape how I approach problems — first understanding the customer, then designing the strategy, then thinking about the process that makes it work.",
  ],
  statement: site.positioning,
  photo: {
    src: basePath + "/images/headshot.jpg",
    alt: "Raushan Kumar Pathak standing before snow-capped mountains",
  },
  currentlyLearning: [
    "Consumer behaviour & market research methods",
    "Brand positioning and go-to-market planning",
    "Operations and process improvement thinking",
    "Generative AI tools for analysis and productivity",
  ],
};

/* --------------------------- TIMELINE ------------------------------ */

export type Milestone = {
  id: string;
  period: string;
  verified: boolean;
  title: string;
  org: string;
  kind: "education" | "experience";
  description: string;
  learning: string[];
  tag: string;
};

export const timeline: Milestone[] = [
  {
    id: "diploma",
    period: "Completed 2023",
    verified: true,
    title: "Diploma in Computer Science",
    org: "Mansarovar University, Bhopal",
    kind: "education",
    tag: "Foundation",
    description:
      "The starting point: programming fundamentals, systems thinking and the technical vocabulary that still informs how I evaluate technology today.",
    learning: [
      "Programming & CS fundamentals",
      "Structured, analytical problem solving",
      "Comfort reading and evaluating technology",
    ],
  },
  {
    id: "meil",
    period: "Jan 2024 — Jun 2026",
    verified: true,
    title: "Site In-Charge",
    org: "Megha Engineering & Infrastructure Ltd (MEIL)",
    kind: "experience",
    tag: "Industry",
    description:
      "Professional engineering experience on the BWSSB project in Bengaluru — working within large-scale public infrastructure delivery, where reliable systems and disciplined operations are non-negotiable.",
    learning: [
      "Exposure to large-scale infrastructure operations",
      "Systems monitoring & process discipline",
      "Cross-team coordination in live projects",
    ],
  },
  {
    id: "bba",
    period: "Graduating 2026",
    verified: true,
    title: "Bachelor of Business Administration",
    org: "Manipal University Jaipur",
    kind: "education",
    tag: "Business",
    description:
      "The pivot from technology to business: management fundamentals, marketing principles and the language of organisations — customers, markets, operations and finance.",
    learning: [
      "Management & marketing fundamentals",
      "Business communication",
      "Organisational thinking",
    ],
  },
  {
    id: "mba",
    period: "Expected 2028",
    verified: true,
    title: "MBA — Marketing Major, Operations Minor",
    org: "Lovely Professional University",
    kind: "education",
    tag: "Specialisation",
    description:
      "Where the journey is heading: deep work in marketing strategy and consumer behaviour, paired with operations management — the two levers that turn insight into execution.",
    learning: [
      "Marketing strategy & consumer behaviour",
      "Operations management concepts",
      "Brand building & go-to-market planning",
    ],
  },
];

/* ------------------------- FEATURED CASE STUDY ---------------------- */

export const caseStudy = {
  chapterLabel: "03 — Featured Work",
  kicker: "MBA Coursework Project · Lovely Professional University",
  title: "Brand Development Strategy for Unbranded Notebooks",
  heroLine: "From Unbranded to Brand-Led",
  metrics: [
    { value: "100+", label: "Units sold", note: "Reported project outcome" },
    { value: "15", label: "Days", note: "Launch-to-result window" },
    { value: "₹25K", label: "Sales value", note: "Reported revenue" },
  ],
  attribution:
    "Outcome reported for the coursework project team at Lovely Professional University. Individual contribution attribution available on request.",
  /** Real project photos: add files from /public/images/project/ here.
   *  The gallery stays hidden while this array is empty. */
  gallery: [
    {
      src: "campus-notes-poster.jpg",
      alt: "Campus Notes branded notebook poster from the project — Write, Learn, Achieve",
    },
  ] as { src: string; alt: string }[],
  chapters: [
    {
      no: "01",
      id: "challenge",
      title: "The Challenge",
      body: "Notebooks are a commodity. Shelves — physical and digital — are full of functionally identical products, and buyers default to the cheapest option. The project asked a simple question: can a deliberate brand strategy give an unbranded notebook a reason to be chosen beyond price?",
      visual: null as string | null,
    },
    {
      no: "02",
      id: "research",
      title: "Market Research",
      body: "The starting point was understanding the segment before touching the brand: who actually buys unbranded notebooks, where they buy, at what price points the category concentrates, and what trade-offs buyers make between price, paper quality, durability and design.",
      visual: "research",
    },
    {
      no: "03",
      id: "insights",
      title: "Consumer Insights",
      body: "The research framed indicative buyer archetypes — a student optimizing for value, a professional buying for daily utility, a gifting-oriented buyer drawn to design — each weighting price, quality and appearance differently. These archetypes guided which brand promises could realistically win.",
      visual: "personas",
    },
    {
      no: "04",
      id: "competition",
      title: "Competitive Landscape",
      body: "The unbranded segment competes almost entirely on cost, while established stationery brands defend quality and identity. The white space sat in between: better-than-commodity perceived quality at a still-accessible price, with enough identity to be remembered and re-bought.",
      visual: "matrix",
    },
    {
      no: "05",
      id: "positioning",
      title: "Brand Positioning",
      body: "The strategy positioned the notebook as an affordable everyday brand with genuine design intent — not competing with premium stationery, but refusing to be invisible. The positioning work defined the promise, the personality and the reasons to believe that the product could keep.",
      visual: null,
    },
    {
      no: "06",
      id: "pricing",
      title: "Pricing Strategy",
      body: "Pricing had to respect the category's price sensitivity while signalling a step up from generic commodity. The approach treated price as part of the brand message: accessible enough for everyday purchase, positioned high enough within the local range to imply quality.",
      visual: null,
    },
    {
      no: "07",
      id: "packaging",
      title: "Packaging Concept",
      body: "Packaging was designed as the brand's first advertisement: clean identity, readable at shelf distance, and consistent across variants. The concept work covered structure, labelling hierarchy and shelf presence — converting a wrapped stack of paper into a recognisable product.",
      visual: "packaging",
    },
    {
      no: "08",
      id: "gtm",
      title: "Go-to-Market Strategy",
      body: "The launch plan moved through a classic funnel: awareness in the catchment area, trial through visibility and availability, and repeat purchase driven by the product itself. Distribution and timing were sequenced deliberately rather than left to chance.",
      visual: "funnel",
    },
    {
      no: "09",
      id: "outcome",
      title: "Project Outcome",
      body: "The project reported 100+ units sold within 15 days of launch, worth about ₹25,000 in reported sales — modest in scale, but real evidence that the strategy changed buying behaviour beyond the default commodity choice. The result is attributed to the coursework project team, and stands as the most tangible demonstration of applying MBA concepts to a real branding problem.",
      visual: "kpi",
    },
    {
      no: "10",
      id: "learnings",
      title: "Key Learnings",
      body: "Research beats assumption. Positioning is a choice, not a slogan. Price and packaging carry as much meaning as advertising. And a strategy is only real when the operations behind it can deliver — a lesson that now connects directly to my operations minor.",
      visual: null,
    },
  ],
};

/* --------------------------- EXPERIENCE ----------------------------- */

export const experience = {
  chapterLabel: "04 — Professional Experience",
  title: "Engineering Discipline, Business Ambition",
  org: "Megha Engineering & Infrastructure Limited (MEIL)",
  role: "Site In-Charge",
  period: "Jan 2024 — Jun 2026",
  context: "Project: BWSSB — Bengaluru",
  summary:
    "Professional engineering role within one of India's major infrastructure companies, delivered on the BWSSB (Bangalore Water Supply and Sewerage Board) programme in Bengaluru — a large-scale public water infrastructure project where reliable systems and disciplined operations are non-negotiable.",
  responsibilities: [
    "Monitored and controlled water supply distribution systems in real time using SCADA software, ensuring 24/7 operational continuity across the BWSSB network.",
    "Operated HMI interfaces to manage pumping stations, flow rates and pressure levels across multiple supply zones.",
    "Identified system anomalies, alarms and faults promptly to minimise downtime and service disruptions.",
    "Coordinated with field engineers and maintenance teams to resolve operational issues efficiently.",
    "Maintained operational logs, shift reports and system status documentation for compliance purposes.",
    "Ensured adherence to safety protocols and standard operating procedures (SOPs) during all monitoring activities.",
  ],
  technologies: [
    "SCADA",
    "HMI Programming",
    "Industrial Automation",
    "PLC Programming",
    "Fault Diagnosis",
  ],
  takeaway:
    "This role strengthened my ability to manage client-site operations and communicate technical solutions to non-technical stakeholders.",
};

/* ------------------------------ SKILLS ------------------------------ */

export type SkillGroup = {
  id: string;
  title: string;
  icon: string;
  blurb: string;
  skills: { name: string; evidence: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "marketing",
    title: "Marketing & Brand Strategy",
    icon: "Target",
    blurb: "The core of my MBA specialisation — understanding customers and building brands.",
    skills: [
      { name: "Market Research", evidence: "Demonstrated in coursework" },
      { name: "Brand Strategy", evidence: "Demonstrated in coursework" },
      { name: "Brand Positioning", evidence: "Demonstrated in coursework" },
      { name: "Consumer Behaviour", evidence: "Academic foundation" },
      { name: "Go-to-Market Planning", evidence: "Demonstrated in coursework" },
      { name: "Competitive Analysis", evidence: "Demonstrated in coursework" },
    ],
  },
  {
    id: "operations",
    title: "Business & Operations",
    icon: "Workflow",
    blurb: "Operations minor plus real exposure to infrastructure-scale processes.",
    skills: [
      { name: "Operations Management Concepts", evidence: "Academic foundation" },
      { name: "Business Process Thinking", evidence: "Developing capability" },
      { name: "Workflow Understanding", evidence: "Industry exposure" },
      { name: "Business Problem Analysis", evidence: "Developing capability" },
      { name: "Cross-functional Thinking", evidence: "Developing capability" },
    ],
  },
  {
    id: "technology",
    title: "Technology",
    icon: "Cpu",
    blurb: "A computer science foundation that keeps me fluent in technical conversations.",
    skills: [
      { name: "Python Fundamentals", evidence: "Training completed" },
      { name: "Computer Science Foundation", evidence: "Academic foundation" },
      { name: "Generative AI Literacy", evidence: "Training completed" },
      { name: "Technology Awareness", evidence: "Ongoing" },
    ],
  },
  {
    id: "professional",
    title: "Research & Communication",
    icon: "MessageSquare",
    blurb: "The transferable layer that makes the rest usable in a team.",
    skills: [
      { name: "Business Communication", evidence: "Academic foundation" },
      { name: "Research & Analysis", evidence: "Demonstrated in coursework" },
      { name: "Presentation & Storytelling", evidence: "Developing capability" },
      { name: "Learning Agility", evidence: "Ongoing" },
      { name: "Analytical Thinking", evidence: "Academic foundation" },
    ],
  },
];

export const evidenceLegend = [
  "Demonstrated in coursework",
  "Academic foundation",
  "Training completed",
  "Industry exposure",
  "Developing capability",
  "Ongoing",
];

/* --------------------------- CERTIFICATES --------------------------- */

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  detail: string;
  url: string | null;
  embeddable: boolean;
  cta: string;
};

export const certificates: Certificate[] = [
  {
    id: "forage",
    title: "Goldman Sachs Job Simulation",
    issuer: "Forage",
    detail: "Completion certificate for the Goldman Sachs job simulation programme on Forage.",
    url: "https://www.theforage.com/completion-certificates/MBA4MnZTNFEoJZGnk/wNge9cjzNTXD2acrv_MBA4MnZTNFEoJZGnk_6a70a6ce0f4144b756dc85a4_1785768403374_completion_certificate.pdf",
    embeddable: true,
    cta: "View certificate (PDF)",
  },
  {
    id: "hackerrank",
    title: "Python (Basic) Certification",
    issuer: "HackerRank",
    detail: "Python (Basic) skill certification — verified via HackerRank.",
    url: "https://www.hackerrank.com/certificates/3e371fbec0e0",
    embeddable: false,
    cta: "Verify on HackerRank",
  },
  {
    id: "genai",
    title: "What Is Generative AI?",
    issuer: "Course by Pinar Demirdag",
    detail: "Completed a generative AI foundation course; completion shared via LinkedIn.",
    url: "https://lnkd.in/dn6rAxxw",
    embeddable: false,
    cta: "See completion post",
  },
  {
    id: "guvi",
    title: "Python — 100-Day Journey (Beginner to Expert)",
    issuer: "GUVI · associated with IIT Madras",
    detail: "Completed the 100-day Python programme and earned the 'Zero Hero' recognition.",
    url: "https://www.guvi.in/certificate?id=g30szku9610230711N",
    embeddable: false,
    cta: "Verify on GUVI",
  },
];

/* ------------------------------ NAV --------------------------------- */

export const navLinks = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "work", label: "Featured Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const enquiryTypes = [
  "Recruitment opportunity",
  "Internship / management trainee",
  "Marketing & brand strategy",
  "Business collaboration",
  "Academic or professional networking",
  "General enquiry",
];
