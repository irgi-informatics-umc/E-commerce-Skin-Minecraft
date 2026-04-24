'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { SectionHeading } from '@/components/shared/section-heading';
import { BlurFade } from '@/components/shared/blur-fade';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experience, education } from '@/data/experience';

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading subtitle="Career Path">Experience & Education</SectionHeading>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Work Experience */}
        <div>
          <BlurFade>
            <div className="mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Work Experience</h3>
            </div>
          </BlurFade>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 h-full w-px bg-border" />

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <BlurFade key={exp.id} delay={index * 0.1}>
                  <motion.div className="relative pl-8">
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-0 top-1 h-2 w-2 rounded-full ${
                        exp.current
                          ? 'bg-primary ring-4 ring-primary/20'
                          : 'bg-border'
                      }`}
                    />

                    <Card>
                      <CardContent className="p-5">
                        <div className="mb-2 flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold">{exp.role}</h4>
                            <p className="text-sm text-muted-foreground">
                              {exp.company}
                            </p>
                          </div>
                          <Badge
                            variant={exp.current ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {exp.period}
                          </Badge>
                        </div>

                        <p className="mb-3 text-sm text-muted-foreground">
                          {exp.description}
                        </p>

                        <ul className="space-y-1.5">
                          {exp.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="mt-1 text-primary">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <BlurFade>
            <div className="mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Education</h3>
            </div>
          </BlurFade>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <BlurFade key={edu.id} delay={index * 0.1}>
                <Card>
                  <CardContent className="p-5">
                    <div className="mb-2 flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">
                          {edu.institution}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>

          {/* Additional Info */}
          <BlurFade delay={0.3}>
            <div className="mt-8 rounded-lg bg-secondary/50 p-6">
              <h4 className="mb-4 font-semibold">Additional Information</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Certifications:</strong>{' '}
                  AWS Certified Developer, Google Cloud Professional
                </p>
                <p>
                  <strong className="text-foreground">Languages:</strong> English
                  (Native), Spanish (Conversational)
                </p>
                <p>
                  <strong className="text-foreground">Interests:</strong> Open
                  Source, Technical Writing, Public Speaking
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </SectionWrapper>
  );
}
