'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { SectionHeading } from '@/components/shared/section-heading';
import { BlurFade } from '@/components/shared/blur-fade';
import { skills, skillCategories } from '@/data/skills';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function AboutSection() {
  const frontendSkills = skills.filter((s) => s.category === 'frontend');
  const backendSkills = skills.filter((s) => s.category === 'backend');
  const databaseSkills = skills.filter((s) => s.category === 'database');
  const toolsSkills = skills.filter((s) => s.category === 'tools');

  return (
    <SectionWrapper id="about">
      <SectionHeading subtitle="About Me">Getting to Know Me</SectionHeading>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Bio */}
        <BlurFade delay={0.1}>
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-muted-foreground">
              I&apos;m a passionate fullstack developer with a knack for building elegant,
              scalable web applications. My journey in software development started with a
              curiosity about how things work on the internet, and it has evolved into a
              career where I get to solve complex problems every day.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              I specialize in the JavaScript/TypeScript ecosystem, with deep expertise in
              React, Next.js, and Node.js. I believe in writing clean, maintainable code
              and creating user experiences that are both beautiful and functional.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              When I&apos;m not coding, you can find me contributing to open-source projects,
              writing technical articles, or exploring new technologies to expand my skillset.
            </p>
          </div>
        </BlurFade>

        {/* Stats */}
        <BlurFade delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-3xl font-semibold">5+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-3xl font-semibold">50+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-3xl font-semibold">30+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-3xl font-semibold">10k+</p>
                  <p className="text-sm text-muted-foreground">npm Downloads</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </BlurFade>
      </div>

      {/* Skills Tabs */}
      <BlurFade delay={0.3}>
        <Tabs defaultValue="frontend" className="mt-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="frontend" className="mt-6">
            <SkillGrid skills={frontendSkills} />
          </TabsContent>
          <TabsContent value="backend" className="mt-6">
            <SkillGrid skills={backendSkills} />
          </TabsContent>
          <TabsContent value="database" className="mt-6">
            <SkillGrid skills={databaseSkills} />
          </TabsContent>
          <TabsContent value="tools" className="mt-6">
            <SkillGrid skills={toolsSkills} />
          </TabsContent>
        </Tabs>
      </BlurFade>
    </SectionWrapper>
  );
}

function SkillGrid({ skills }: { skills: { name: string; level: number }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <Card>
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">{skill.name}</span>
                <Badge variant="secondary">{skill.level}%</Badge>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
