import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Your Name',
  role: 'Fullstack Developer',
  email: 'hello@example.com',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourhandle',
  },
  url: 'https://yourdomain.com',
  description: 'Building elegant, scalable web applications with modern technologies',
};

export const navigationLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#stack', label: 'Tech Stack' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
];
