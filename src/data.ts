import { Project, Certificate, SkillCategory, Service } from './types';

export const personalInfo = {
  name: "Ikbal KM",
  title: "Meta Ads Specialist & Social Media Strategist",
  tagline: "2 Years. Real Campaigns. Real Results.",
  badge: "Open to Meta Ads Roles & Freelance Projects",
  bio: "I'm a Meta Ads Specialist and Social Media Strategist who builds high-ROI conversion systems. From delivering ₹30 CPL lead campaigns to engineering 4.9% engagement rates organically — I combine data-driven Meta Ads strategy, AI-powered content pipelines, and creative design to help brands grow profitably. Through Pixo Spark, my personal digital marketing brand, I fuse performance marketing with creative storytelling.",
  email: "ikbalkmtnr786@gmail.com",
  phone: "919061124162",
  phoneFormatted: "+91 90611 24162",
  whatsappUrl: "https://wa.me/919061124162?text=Hi%20Ikbal,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project!",
  instagram: "https://instagram.com/pixospar",
  linkedin: "https://linkedin.com/in/ikbal-km-digital-marketing-executive",
  profileImage: "/profile.jpg"
};

export const stats = [
  { value: "0 → 171", label: "Followers Gained" },
  { value: "872", label: "Organic Accounts Reached" },
  { value: "4.9%", label: "Average Engagement Rate" },
  { value: "₹30", label: "Cost Per Lead (CPL)" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Marketing",
    skills: [
      { name: "Meta Ads", description: "Audience research, custom audiences lookalikes, scaling bid strategies, pixel tracking, and high-ROI campaign setups.", iconName: "Target" },
      { name: "Social Media Marketing", description: "Organic growth blueprints, strategic scheduling, interactive community building, and personal brand development.", iconName: "Compass" },
      { name: "Content Creation", description: "Direct-response copywriting, dynamic hooks, and visual micro-content architecture that drives immediate clicks.", iconName: "Sparkles" },
      { name: "SEO Fundamentals", description: "Critical search optimization, keywords planning, and structured layouts to rank content natively.", iconName: "Search" }
    ]
  },
  {
    title: "Design",
    skills: [
      { name: "Canva", description: "High-speed ad creative generation, branding template construction, dynamic slide carousels, and premium aesthetic layouts.", iconName: "LayoutGrid" },
      { name: "Photoshop", description: "Advanced asset manipulation, detailed lighting adjustments, and composite visual creation for attention-grabbing ads.", iconName: "Image" },
      { name: "Illustrator", description: "Sleek vector creation, precision logo files, cohesive brand elements, and crisp typography arrangements.", iconName: "PenTool" },
      { name: "Video Editing", description: "High-retention reels cutdowns, pacing optimization, sound design overlays, and attention-hook subtitles integration.", iconName: "Video" }
    ]
  },
  {
    title: "AI Tools",
    skills: [
      { name: "ChatGPT", description: "Prompt engineering for high-conversion sales copy, buyer persona simulations, and marketing funnel outlines.", iconName: "BrainCircuit" },
      { name: "Gemini", description: "Strategic market intelligence, search-grounded competitor research, and high-quality creative brief generation.", iconName: "Cpu" }
    ]
  }
];

export const certificates: Certificate[] = [
  {
    id: "cert1",
    title: "AI Integrated Digital Marketing",
    issuer: "The TET Skills",
    date: "January 2025",
    grade: "Grade A+",
    imageRef: "/cert-tet-merit.jpg"
  },
  {
    id: "cert2",
    title: "Digital Marketing Experience",
    issuer: "The TET Skills",
    date: "February 2025",
    imageRef: "/cert-tet-experience.jpg"
  },
  {
    id: "cert3",
    title: "Digital Marketing Internship",
    issuer: "Team Ynes",
    date: "April 2025",
    imageRef: "/cert-ynes-internship.jpg"
  }
];

export const projects: Project[] = [
  {
    id: "proj1",
    title: "Pixo Spark Organic Instagram Growth",
    category: "Social Media Growth",
    imageRef: "/poster-pixo-spark.jpg",
    metrics: [
      { label: "Followers Gained", value: "+171" },
      { label: "Accounts Reached", value: "872" },
      { label: "Engagement Rate", value: "4.9%" }
    ],
    tags: ["Organic Growth", "Aesthetic Design", "Content Strategy", "Reels Pacing"],
    description: "Multi-layered organic brand building strategy on Instagram under Ikbal's custom digital marketing page, Pixo Spark.",
    overview: "Built an aesthetic, highly informative presence from zero for a personal digital marketing brand. By combining deep value carousels on performance marketing with attention-grabbing micro-reels, this strategy cultivated a professional digital ecosystem that earned 872 organic reach in 30 days.",
    strategy: [
      "Designed a strict slate-dark grid styling with orange highlights mirroring high-end design agencies.",
      "Engineered carousel frameworks featuring high-impact copywriting (Dynamic Hooks in the first 2 seconds).",
      "Calculated engagement loops by directly replying and building connections with targeted digital marketing seekers.",
      "Leveraged a specialized video-pacing format to increase reel retention metrics."
    ],
    results: [
      "Gained zero-to-one traction (171 real followers) organically within a highly competitive niche.",
      "Achieved a 4.9% engagement rate, surpassing the industry average of 1.2%.",
      "Reached 872 unique accounts strictly from organic content amplification and value shares."
    ],
    relatedGallery: [
      "/images/post1.jpg",
      "/images/post3.jpg",
      "/images/post4.jpg"
    ]
  },
  {
    id: "proj2",
    title: "Skill Hub Meta Ads Lead Campaign",
    category: "Paid Acquisition",
    imageRef: "/poster-tet-ads.jpg",
    metrics: [
      { label: "Ad budget", value: "₹150" },
      { label: "Qualified Leads", value: "5 Leads" },
      { label: "Cost Per Lead", value: "₹30 CPL" }
    ],
    tags: ["Meta Ads", "Lead Generation", "Direct-Response Ads", "CPL Optimization"],
    description: "Laser-focused lead generation campaign utilizing Meta Ads Manager to capture highly qualified educational leads.",
    overview: "Formulated and deployed a direct-response ad campaign on Meta to acquire target inquiries for educational skills courses. With limited trial spending, the campaign delivered high intent and minimal friction, proving that structural setup outperforms bloated budgets.",
    strategy: [
      "Designed high-contrast, text-led story creatives using direct-response templates on Canva.",
      "Segmented demographic profiles based on skill interest categories, setting custom geo-targets to avoid wasted impressions.",
      "Constructed a light interactive lead form with custom qualifying fields, screening out automated bots and spam submissions.",
      "Ran live A/B creative testing focusing the orange direct CTA at the core of the design."
    ],
    results: [
      "Acquired exactly 5 high-intent direct student leads with a micro-test budget of ₹150.",
      "Secured an outstanding cost-per-lead (CPL) profile of exactly ₹30.",
      "Maintained a 100% submission validity, where leads were verified through phone validation checks."
    ],
    relatedGallery: [
      "/images/post2.jpg",
      "/images/post5.jpg"
    ]
  },
  {
    id: "proj3",
    title: "Prime Business Awards 2026 Poster",
    category: "Content Creative",
    imageRef: "/poster-prime-business.jpg",
    tags: ["Event Design", "Typography Hierarchy", "Photoshop Layout", "Agency Aesthetic"],
    description: "Sleek and luxurious digital content creative crafted for the Prime Business Awards event series.",
    overview: "Crafted to capture the prestige and influence of business leaders, this poster balances premium slate and gold/orange lighting contrast. This layout is structured to maintain supreme luxury feel while maximizing social scroll-stop metrics.",
    strategy: [
      "Defined a premium high-contrast dark palette to spotlight gold and bronze achievements details.",
      "Constructed asymmetric column layouts that guide the viewer's eyes naturally from headline to key venue dates.",
      "Fine-tuned image sharpeners and high-dynamic range levels inside Photoshop to render crisply on mobile screens."
    ],
    results: [
      "Achieved immediate design acceptance from organizers without revision requests.",
      "Drove organic signups rate during announcement phase through high graphic legibility.",
      "Integrated as part of Pixo Spark's master design case studies."
    ],
    relatedGallery: [
      "/images/post3.jpg",
      "/images/post4.jpg"
    ]
  },
  {
    id: "proj4",
    title: "Ynes Digital Brand Poster",
    category: "Marketing Automation",
    imageRef: "/poster-ynes.jpg",
    tags: ["AI Integrated Design", "Brand Authority", "Illustrator Vectors", "Direct Creative"],
    description: "Modern branding poster produced during Digital Marketing Internship representing modern technical supremacy.",
    overview: "Created during the Ynes digital marketing tenure to communicate technical competence and strategic brilliance. Designed with absolute precision to portray high trust and modern agency aesthetics.",
    strategy: [
      "Utilized AI assistance to speed draft content, mapping out target points before visual asset structuring.",
      "Constructed clean vector icons inside Illustrator aligning with agency-grade marketing services.",
      "Harmonized corporate dark-slate tones with lively orange-neon pops for modern eye-holding pacing."
    ],
    results: [
      "Deployed on official social marketing assets, boosting profile interactions during launch week.",
      "Received honors for outstanding internship graphic work due to strong professional composition.",
      "Integrated into the professional services showcase presentation."
    ],
    relatedGallery: [
      "/images/post4.jpg",
      "/images/post1.jpg"
    ]
  },
  {
    id: "proj5",
    title: "TET Skills Ad Creative",
    category: "Paid Acquisition",
    imageRef: "/poster-tet-offer.jpg",
    tags: ["Meta Creatives", "Direct-Response", "Canva Layouts", "A/B Ready Asset"],
    description: "Stellar performance marketing creative crafted to drive CTR on local vocational training courses.",
    overview: "Synthesized direct-response design conventions with native aesthetic looks to formulate a high-CTR Facebook and Instagram feed ad. Designed specifically for instant information processing under 2.5 seconds.",
    strategy: [
      "Selected highly readable condensed typography designed to read clearly even on micro mobile phone layouts.",
      "Placed the primary benefit statement under absolute premium contrast using a custom neon orange badge.",
      "Maintained generous white/dark-slate space inside the layout, raising overall professionalism and conversion ratios."
    ],
    results: [
      "Attained high ratings among experimental ad asset rosters of the campaign.",
      "Maintained low ad fatigue score over dynamic marketing cycles.",
      "Employed as reference blueprint template for future local direct-response campaigns."
    ],
    relatedGallery: [
      "/images/post5.jpg",
      "/images/post2.jpg"
    ]
  }
];

export const services: Service[] = [
  {
    title: "Paid Meta Ads Management",
    description: "High-ROI Facebook & Instagram campaigns built on custom audience scaling models and optimized direct-response visuals.",
    iconName: "Target",
    details: [
      "Laser-targeted audience setup & customer avatar mapping",
      "Dynamic A/B creative testing of hooks and layouts",
      "Qualifying Meta forms architecture (₹30 CPL-driven setups)",
      "Pixel monitoring, Custom Audiences, & Retargeting funnels"
    ]
  },
  {
    title: "Organic Social Media Management",
    description: "Premium visual grids and structured value schedules that construct real engagement systems and build brand authority.",
    iconName: "Instagram",
    details: [
      "Custom brand typography systems (via Pixo Spark frameworks)",
      "Educational micro-reels pacing and scroll-stopping templates",
      "High-engagement carousel structures (4.9%+ direct metrics)",
      "Community connection strategies & daily organic amplify routines"
    ]
  },
  {
    title: "AI-Integrated Content Strategy",
    description: "Amplify execution speed by integrating high-precision prompt pipelines into copywritting and content generation systems.",
    iconName: "Sparkles",
    details: [
      "Automated marketing briefs and customer objection simulations",
      "Persuasive copywriting generation via optimized LLM presets",
      "Rapid template batching for high-frequency ad creative tests",
      "Fusing strategic marketing wisdom with state-of-the-art AI speed"
    ]
  }
];
