'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { SectionHeading } from '@/components/shared/section-heading';
import { BlurFade } from '@/components/shared/blur-fade';
import { Card, CardContent } from '@/components/ui/card';
import {
  Code2,
  Server,
  Database,
  Wrench,
  ArrowRight,
} from 'lucide-react';

const categories = {
  frontend: {
    title: 'Frontend',
    icon: Code2,
    description: 'Building responsive and interactive user interfaces',
    technologies: [
      { name: 'React', level: 'Expert' },
      { name: 'Next.js', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Framer Motion', level: 'Advanced' },
      { name: 'Vue.js', level: 'Intermediate' },
    ],
  },
  backend: {
    title: 'Backend',
    icon: Server,
    description: 'Server-side development and API design',
    technologies: [
      { name: 'Node.js', level: 'Expert' },
      { name: 'Python', level: 'Advanced' },
      { name: 'Go', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Expert' },
      { name: 'GraphQL', level: 'Advanced' },
      { name: 'WebSockets', level: 'Advanced' },
    ],
  },
  database: {
    title: 'Database',
    icon: Database,
    description: 'Data modeling and persistence',
    technologies: [
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'Redis', level: 'Advanced' },
      { name: 'Prisma', level: 'Advanced' },
      { name: 'Supabase', level: 'Advanced' },
      { name: 'Firebase', level: 'Intermediate' },
    ],
  },
  tools: {
    title: 'Tools & DevOps',
    icon: Wrench,
    description: 'Development workflow and deployment',
    technologies: [
      { name: 'Git', level: 'Expert' },
      { name: 'Docker', level: 'Advanced' },
      { name: 'AWS', level: 'Intermediate' },
      { name: 'Vercel', level: 'Expert' },
      { name: 'CI/CD', level: 'Advanced' },
      { name: 'Linux', level: 'Advanced' },
    ],
  },
};

export function TechStackSection() {
  return (
    <SectionWrapper id="stack" className="bg-secondary/30">
      <SectionHeading subtitle="Tech Stack">Technologies I Work With</SectionHeading>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(categories).map(([key, category], index) => (
          <BlurFade key={key} delay={index * 0.1}>
            <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{category.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <motion.span
                      key={tech.name}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-3 py-1.5 text-sm transition-colors hover:border-primary/50"
                    >
                      {tech.name}
                      <span className="text-xs text-muted-foreground">
                        {tech.level}
                      </span>
                    </motion.span>
                  ))}
                </div>
              </CardContent>

              {/* Hover effect */}
              <div className="absolute -bottom-1 -right-1 h-20 w-20 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </Card>
          </BlurFade>
        ))}
      </div>
    </SectionWrapper>
  );
}
