export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  highlights: string[];
  architecture: {
    frontend: string[];
    backend: string[];
    database: string[];
    cloud: string[];
    deployment: string[];
  };
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
  link?: string;
  github?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  projects: {
    title: string;
    description: string;
    technologies: string[];
    achievements: string[];
  }[];
}

export interface Skill {
  category: string;
  icon: string;
  items: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}