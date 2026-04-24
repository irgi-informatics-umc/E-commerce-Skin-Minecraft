import { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: 'react', level: 95, category: 'frontend' },
  { name: 'Next.js', icon: 'nextjs', level: 90, category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', level: 95, category: 'frontend' },
  { name: 'Framer Motion', icon: 'framer', level: 85, category: 'frontend' },

  // Backend
  { name: 'Node.js', icon: 'nodejs', level: 90, category: 'backend' },
  { name: 'Python', icon: 'python', level: 85, category: 'backend' },
  { name: 'Go', icon: 'go', level: 75, category: 'backend' },
  { name: 'PostgreSQL', icon: 'postgresql', level: 85, category: 'backend' },
  { name: 'Redis', icon: 'redis', level: 80, category: 'backend' },

  // Database
  { name: 'MongoDB', icon: 'mongodb', level: 85, category: 'database' },
  { name: 'Supabase', icon: 'supabase', level: 80, category: 'database' },
  { name: 'Prisma', icon: 'prisma', level: 85, category: 'database' },

  // Tools
  { name: 'Git', icon: 'git', level: 90, category: 'tools' },
  { name: 'Docker', icon: 'docker', level: 80, category: 'tools' },
  { name: 'AWS', icon: 'aws', level: 75, category: 'tools' },
  { name: 'Vercel', icon: 'vercel', level: 95, category: 'tools' },
];

export const skillCategories = {
  frontend: {
    title: 'Frontend',
    description: 'Building responsive and interactive user interfaces',
  },
  backend: {
    title: 'Backend',
    description: 'Server-side development and API design',
  },
  database: {
    title: 'Database',
    description: 'Data modeling and persistence',
  },
  tools: {
    title: 'Tools & DevOps',
    description: 'Development workflow and deployment',
  },
};
