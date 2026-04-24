'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { SectionHeading } from '@/components/shared/section-heading';
import { BlurFade } from '@/components/shared/blur-fade';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects, projectCategories } from '@/data/projects';
import { cn } from '@/lib/utils';

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <SectionWrapper id="projects">
      <SectionHeading subtitle="Portfolio">Featured Projects</SectionHeading>

      {/* Filter */}
      <BlurFade>
        <div className="mb-8 flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                'transition-all',
                selectedCategory === category.id
                  ? 'border-primary bg-primary text-primary-foreground'
                  : ''
              )}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </BlurFade>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid gap-6 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <BlurFade delay={index * 0.1}>
      <motion.div layout>
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-0">
            {/* Image */}
            <div className="relative aspect-video overflow-hidden bg-secondary">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800"
              >
                {/* Placeholder - replace with actual images */}
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  <span className="text-sm">Project Image</span>
                </div>
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/80 opacity-0 transition-opacity group-hover:opacity-100">
                {project.liveUrl && (
                  <Button
                    size="sm"
                    variant="default"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                  >
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold">{project.title}</h3>
                {project.featured && (
                  <Badge variant="secondary" className="text-xs">
                    Featured
                  </Badge>
                )}
              </div>

              <p className="mb-4 text-sm text-muted-foreground">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.techStack.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.techStack.length - 4}
                  </Badge>
                )}
              </div>

              {/* Highlights */}
              <ul className="space-y-1">
                {project.highlights.slice(0, 2).map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <span className="mt-1 text-primary">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </BlurFade>
  );
}
