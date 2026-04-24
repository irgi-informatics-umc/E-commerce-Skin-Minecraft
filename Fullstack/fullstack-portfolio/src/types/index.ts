export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  techStack: string[];
  highlights: string[];
  date: string;
}

export type ProjectCategory = 'fullstack' | 'frontend' | 'backend' | 'mobile';

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  logo?: string;
  current: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: SkillCategory;
}

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
  readingTime: number;
  content: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  email: string;
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
  url: string;
  description: string;
}
