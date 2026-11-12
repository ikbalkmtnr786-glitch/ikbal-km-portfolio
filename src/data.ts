
import { Project, Certificate, SkillCategory, Service } from './types';

export const personalInfo = {
  name: "Ikbal KM",
  title: "Social Media, Digital Marketing & Shopify Executive",
  tagline: "Meta Ads | Shopify | Social Media | Content Creation",
  badge: "Open to Digital Marketing & Shopify Opportunities",
  bio: "I'm an entry-level Digital Marketing professional with practical experience in Meta Ads, social media management, content creation and graphic design. I have worked on a Meta Ads campaign during my digital marketing practical training and developed my skills through personal and client projects. I also have practical knowledge of Shopify store setup, theme customisation, product organisation and basic store settings. I'm interested in helping businesses build and improve their online presence through practical digital marketing and e-commerce support.",
  email: "ikbalkmtnr786@gmail.com",
  phone: "919061124162",
  phoneFormatted: "+91 90611 24162",
  whatsappUrl: "https://wa.me/919061124162?text=Hi%20Ikbal,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20an%20opportunity!",
  instagram: "https://instagram.com/pixospark",
  linkedin: "https://linkedin.com/in/ikbal-km-digital-marketing-executive",
  profileImage: "/profile.jpg",
  location: "Thanur, Malappuram, Kerala, India"
};

export const stats = [
  { value: "171", label: "Organic Followers Gained" },
  { value: "872", label: "Organic Accounts Reached" },
  { value: "4.9%", label: "Engagement Rate" },
  { value: "5", label: "Messaging Conversations" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Digital Marketing",
    skills: [
      {
        name: "Meta Ads",
        description: "Practical experience with campaign setup, audience targeting, messaging campaigns, budget monitoring and performance reporting.",
        iconName: "Target"
      },
      {
        name: "Social Media Marketing",
        description: "Facebook and Instagram page management, content planning, post scheduling and organic audience engagement.",
        iconName: "Compass"
      },
      {
        name: "Content Creation",
        description: "Social media captions, promotional content, creative concepts, marketing copy and content calendars.",
        iconName: "Sparkles"
      },
      {
        name: "SEO Fundamentals",
        description: "Basic keyword research, on-page SEO concepts, website content structure and search visibility fundamentals.",
        iconName: "Search"
      },
      {
        name: "Google Ads",
        description: "Foundational knowledge of Google Search Ads and campaign concepts, supported by Google Ads Search Certification. No independent campaign execution experience claimed.",
        iconName: "Search"
      }
    ]
  },
  {
    title: "Shopify & Creative Design",
    skills: [
      {
        name: "Shopify",
        description: "Practical knowledge of store setup, theme customisation, products, collections, inventory settings, apps and basic store configuration.",
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
    title: "TET Skills Meta Ads Campaign",
    category: "Paid Acquisition",
    imageRef: "/poster-tet-ads.jpg",
    metrics: [
      { label: "Ad Spend", value: "₹127.11" },
      { label: "Messaging Conversations", value: "5" }
    ],
    tags: [
      "Meta Ads",
      "Messaging Campaign",
      "Audience Targeting",
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
    title: "Innovative Designs – Social Media Project",
    category: "Social Media Growth",
    imageRef: "/images/post1.jpg",
    tags: [
      "Client Project",
      "Social Media Management",
      "Content Creation",
      "Meta Ads Planning"
    ],
    description: "An ongoing social media project for an interior design business in Kerala.",
    overview: "Working on the social media presence of Innovative Designs, an interior design business. The project focuses on Facebook and Instagram page management, promotional content and planning for future Meta Ads campaigns.",
    strategy: [
      "Organised the business's Facebook and Instagram presence.",
      "Prepared social media content around interior design and false ceiling services.",
      "Created promotional creatives and short-form content.",
      "Planned Meta Ads activity to support future enquiry generation."
    ],
    results: [
      "Social media account setup and management activities are underway.",
      "Promotional content creation and publishing are part of the ongoing work.",
      "Advertising performance will be added after the campaign is launched and measured."
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
    description: "Practical Facebook and Instagram advertising support, from campaign setup to basic performance reporting.",
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
