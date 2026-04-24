import { HeroSection } from '@/components/sections/hero/hero-section';
import { AboutSection } from '@/components/sections/about/about-section';
import { TechStackSection } from '@/components/sections/stack/tech-stack-section';
import { ProjectsSection } from '@/components/sections/projects/projects-section';
import { ExperienceSection } from '@/components/sections/experience/experience-section';
import { ContactSection } from '@/components/sections/contact/contact-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
