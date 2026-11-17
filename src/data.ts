
import { Project, Certificate, SkillCategory, Service } from './types';

export const personalInfo = {
  name: "Ikbal KM",
  title: "Social Media & Digital Marketing Executive",
  tagline: "Meta Ads | Content Creation | Social Media Marketing",
  badge: "Open to Digital Marketing Opportunities",
  bio: "I'm an entry-level Digital Marketing professional with practical experience in Meta Ads, social media management, content creation and graphic design. My practical work includes managing social media activities for a client business, running a Meta Ads messaging campaign and developing my own digital marketing brand, Pixo Spark. I also have working knowledge of Shopify store setup, theme customisation, product organisation and basic store settings. I'm focused on helping businesses improve their online presence through practical, measurable digital marketing activities.",
  email: "ikbalkmtnr786@gmail.com",
  phone: "919061124162",
  phoneFormatted: "+91 90611 24162",
  whatsappUrl: "https://wa.me/919061124162?text=Hi%20Ikbal,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20an%20opportunity!",
  instagram: "https://instagram.com/pixospark",
  linkedin: "https://linkedin.com/in/ikbal-km-digital-marketing-executive",
  profileImage: "/profile.jpg",
  location: "Tanur, Malappuram, Kerala, India"
};

export const stats = [
  { value: "171", label: "Organic Followers – Pixo Spark" },
  { value: "872", label: "Organic Reach – Pixo Spark" },
  { value: "13", label: "WhatsApp Conversations – Client Campaign" },
  { value: "₹160", label: "Cost per Conversation – Client Campaign" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Digital Marketing",
    skills: [
      {
        name: "Meta Ads",
        description: "Practical experience with Facebook and Instagram campaign setup, audience targeting, messaging campaigns, budget monitoring and performance reporting.",
        iconName: "Target"
      },
      {
        name: "Social Media Marketing",
        description: "Facebook and Instagram page setup and management, content planning, publishing, post scheduling and organic audience engagement.",
        iconName: "Compass"
      },
      {
        name: "Content Creation",
        description: "Social media captions, promotional content, creative concepts, marketing copy and content calendars.",
        iconName: "Sparkles"
      },
      {
        name: "SEO Fundamentals",
        description: "Basic knowledge of keyword research, on-page SEO, website content structure and local search visibility.",
        iconName: "Search"
      },
      {
        name: "Google Ads",
        description: "Foundational knowledge of Google Search Ads, keyword intent, campaign structure and advertising concepts. No independent campaign execution experience claimed.",
        iconName: "Search"
      }
    ]
  },
  {
    title: "Shopify & Creative Design",
    skills: [
      {
        name: "Shopify",
        description: "Working knowledge of store setup, theme customisation, products, collections, inventory settings, apps and basic store configuration.",
        iconName: "ShoppingBag"
      },
      {
        name: "Canva",
        description: "Social media posters, promotional creatives, carousel designs and marketing materials.",
        iconName: "LayoutGrid"
      },
      {
        name: "Photoshop",
        description: "Image editing, promotional graphics, photo adjustments and social media creative design.",
        iconName: "Image"
      },
      {
        name: "Illustrator",
        description: "Basic vector graphics, typography and visual design elements.",
        iconName: "PenTool"
      },
      {
        name: "Video Editing",
        description: "Short-form video editing, Instagram Reels, promotional videos and captions using CapCut.",
        iconName: "Video"
      }
    ]
  },
  {
    title: "AI & Productivity Tools",
    skills: [
      {
        name: "ChatGPT",
        description: "Marketing ideas, content planning, caption writing, research assistance and creative brainstorming.",
        iconName: "BrainCircuit"
      },
      {
        name: "Gemini",
        description: "Content research, marketing assistance, idea generation and creative planning.",
        iconName: "Cpu"
      },
      {
        name: "Meta Business Suite",
        description: "Facebook and Instagram account management, content publishing and basic performance monitoring.",
        iconName: "Monitor"
      }
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
    title: "Innovative Designs – Meta Ads & Social Media",
    category: "Paid Acquisition",
    imageRef: "/images/post1.jpg",
    metrics: [
      { label: "Ad Spend (Excl. GST)", value: "₹2,085" },
      { label: "Reach", value: "12,960" },
      { label: "Impressions", value: "21,593" },
      { label: "WhatsApp Conversations", value: "13" },
      { label: "Cost per Conversation", value: "₹160" },
      { label: "Link Clicks", value: "86" },
      { label: "CTR", value: "0.40%" },
      { label: "CPC", value: "₹24.24" }
    ],
    tags: [
      "Real Client Project",
      "Meta Ads",
      "Social Media Management",
      "WhatsApp Campaign",
      "Performance Reporting"
    ],
    description: "An ongoing digital marketing project for an interior design business in Kerala, including social media management and a completed Meta Ads messaging campaign.",
    overview: "Worked on building and improving the digital presence of Innovative Designs. The work included Facebook and Instagram page setup, promotional content, Reels and an actual Meta Ads messaging campaign. The campaign ran from 8–14 November 2026. The business website is also under development and is not yet complete.",
    strategy: [
      "Set up and organised the business's Facebook and Instagram presence.",
      "Created promotional content around interior design, false ceiling and related services.",
      "Prepared and published social media posts and short-form video content.",
      "Set up and monitored a Meta Ads campaign focused on WhatsApp messaging conversations.",
      "Managed campaign delivery and reviewed spend, reach, impressions, clicks and messaging performance.",
      "Identified opportunities to improve creative performance, audience focus and the click-to-message journey."
    ],
    results: [
      "Campaign period: 8–14 November 2026.",
      "Total ad spend: ₹2,085, excluding GST.",
      "Reached 12,960 accounts and generated 21,593 impressions.",
      "Recorded 86 link clicks and 13 WhatsApp messaging conversations.",
      "Average cost per messaging conversation: approximately ₹160.",
      "Reported CTR: 0.40%; CPC: ₹24.24; CPM: ₹96.55.",
      "Approximately 15% of link clicks resulted in messaging conversations.",
      "Lead quality, site visits and sales have not yet been confirmed or measured.",
      "Website development is in progress; final project photos and business information are still awaited."
    ],
    relatedGallery: [
      "/images/post2.jpg",
      "/images/post5.jpg"
    ]
  },
  {
    id: "proj2",
    title: "Pixo Spark – Organic Instagram Growth",
    category: "Social Media Growth",
    imageRef: "/poster-pixo-spark.jpg",
    metrics: [
      { label: "Followers", value: "171" },
      { label: "Organic Reach", value: "872" },
      { label: "Engagement Rate", value: "4.9%" }
    ],
    tags: [
      "Personal Project",
      "Instagram Growth",
      "Content Creation",
      "Graphic Design"
    ],
    description: "An independent social media project developed to practise digital marketing, content creation and organic Instagram growth.",
    overview: "Built and managed Pixo Spark as a personal digital marketing portfolio brand. Created social media graphics and content to develop a consistent online presence and practise organic social media marketing.",
    strategy: [
      "Developed a consistent visual identity for the Instagram page.",
      "Created educational and promotional social media content.",
      "Used graphic design and short-form content to communicate marketing ideas.",
      "Monitored follower growth, reach and engagement."
    ],
    results: [
      "Grew the Instagram page to 171 followers.",
      "Recorded 872 organic accounts reached.",
      "Achieved a reported engagement rate of 4.9%."
    ],
    relatedGallery: [
      "/images/post1.jpg",
      "/images/post3.jpg",
      "/images/post4.jpg"
    ]
  },
  {
    id: "proj3",
    title: "TET Skills Meta Ads Campaign",
    category: "Paid Acquisition",
    imageRef: "/poster-tet-ads.jpg",
    metrics: [
      { label: "Ad Spend", value: "₹127.11" },
      { label: "Messaging Conversations", value: "5" }
    ],
    tags: [
      "Practical Training",
      "Meta Ads",
      "Messaging Campaign",
      "Campaign Reporting"
    ],
    description: "A small-budget Meta Ads messaging campaign for an educational course, completed as part of practical digital marketing experience.",
    overview: "Worked on a Meta Ads messaging campaign for TET Skills. The practical work included campaign setup, audience targeting, creative preparation and performance monitoring.",
    strategy: [
      "Identified the intended audience for the educational course.",
      "Prepared promotional ad creative and campaign messaging.",
      "Set up the campaign using the Meta Ads messaging objective.",
      "Monitored campaign delivery and messaging performance."
    ],
    results: [
      "Recorded 5 messaging conversations started.",
      "Reported campaign spend of ₹127.11.",
      "Gained practical exposure to Meta Ads campaign setup and performance monitoring."
    ],
    relatedGallery: [
      "/images/post2.jpg",
      "/images/post5.jpg"
    ]
  },
  {
    id: "proj4",
    title: "Prime Business Awards 2026 Poster",
    category: "Content Creative",
    imageRef: "/poster-prime-business.jpg",
    tags: [
      "Poster Design",
      "Graphic Design",
      "Typography",
      "Photoshop"
    ],
    description: "A promotional poster design created for a business awards event.",
    overview: "Developed a promotional visual concept with a premium dark and gold colour direction, focusing on clear typography and event communication.",
    strategy: [
      "Used a dark visual background with gold accents.",
      "Organised the information using a clear typography hierarchy.",
      "Designed the layout for social media viewing."
    ],
    results: [
      "Created a completed promotional poster design.",
      "Added the creative to the Pixo Spark design portfolio."
    ],
    relatedGallery: [
      "/images/post3.jpg",
      "/images/post4.jpg"
    ]
  },
  {
    id: "proj5",
    title: "Digital Marketing Internship – Creative Work",
    category: "Content Creative",
    imageRef: "/poster-ynes.jpg",
    tags: [
      "Internship Project",
      "Graphic Design",
      "AI-Assisted Content",
      "Social Media"
    ],
    description: "Selected digital creative work developed during the digital marketing internship.",
    overview: "Practised social media creative development and digital content preparation as part of the digital marketing internship at Team Ynes.",
    strategy: [
      "Worked on promotional visual concepts.",
      "Used design tools to prepare social media creatives.",
      "Used AI tools for content ideas and creative assistance."
    ],
    results: [
      "Developed practical experience in digital creative production.",
      "Strengthened understanding of social media content requirements."
    ],
    relatedGallery: [
      "/images/post4.jpg",
      "/images/post1.jpg"
    ]
  }
];

export const services: Service[] = [
  {
    title: "Meta Ads Campaign Support",
    description: "Facebook and Instagram advertising support, from campaign setup to performance monitoring and reporting.",
    iconName: "Target",
    details: [
      "Campaign objective selection and setup",
      "Audience research and targeting",
      "Ad creative and copy preparation",
      "Budget monitoring and performance reporting"
    ]
  },
  {
    title: "Social Media Management",
    description: "Support for maintaining a consistent and engaging social media presence.",
    iconName: "Instagram",
    details: [
      "Facebook and Instagram page management",
      "Content planning and scheduling",
      "Post, Reel and promotional content creation",
      "Basic performance monitoring"
    ]
  },
  {
    title: "Graphic Design & Content Creation",
    description: "Visual content and promotional materials for digital platforms.",
    iconName: "Sparkles",
    details: [
      "Social media posters and promotional creatives",
      "Marketing captions and content ideas",
      "Carousel and campaign creative concepts",
      "Short-form video and Reel editing"
    ]
  },
  {
    title: "Shopify Store Setup Support",
    description: "Basic Shopify store setup and product organisation support.",
    iconName: "ShoppingBag",
    details: [
      "Basic Shopify store configuration",
      "Theme customisation",
      "Product and collection setup",
      "Basic inventory and store settings"
    ]
  }
];
