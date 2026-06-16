export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Social Media Growth' | 'Paid Acquisition' | 'Content Creative' | 'Marketing Automation' | 'Video Marketing';
  imageRef: string;
  metrics?: Metric[];
  tags: string[];
  description: string;
  overview: string;
  strategy: string[];
  results: string[];
  relatedGallery?: string[]; // related poster gallery paths
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  grade?: string;
  imageRef: string;
}

export interface Skill {
  name: string;
  description: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Service {
  title: string;
  description: string;
  details: string[];
  iconName: string;
}
