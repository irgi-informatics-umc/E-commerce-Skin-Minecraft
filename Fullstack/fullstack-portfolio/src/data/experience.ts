import { Experience } from '@/types';

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Tech Company',
    role: 'Senior Fullstack Developer',
    period: '2023 - Present',
    description: 'Leading development of scalable web applications and mentoring junior developers.',
    highlights: [
      'Architected microservices handling 1M+ daily requests',
      'Reduced infrastructure costs by 40% through optimization',
      'Led migration from monolith to microservices architecture',
      'Mentored team of 5 junior developers',
    ],
    current: true,
  },
  {
    id: '2',
    company: 'Startup Inc.',
    role: 'Fullstack Developer',
    period: '2021 - 2023',
    description: 'Built and maintained multiple customer-facing products using React and Node.js.',
    highlights: [
      'Developed real-time collaboration features used by 10k+ users',
      'Implemented CI/CD pipeline reducing deployment time by 70%',
      'Built internal tools improving team productivity by 30%',
      'Integrated third-party APIs (Stripe, Twilio, SendGrid)',
    ],
    current: false,
  },
  {
    id: '3',
    company: 'Digital Agency',
    role: 'Frontend Developer',
    period: '2019 - 2021',
    description: 'Created responsive websites and web applications for various clients.',
    highlights: [
      'Delivered 20+ client projects on time and within budget',
      'Specialized in React and modern CSS architectures',
      'Collaborated with designers to implement pixel-perfect UIs',
      'Implemented accessibility standards (WCAG 2.1)',
    ],
    current: false,
  },
];

export const education = [
  {
    id: 'edu1',
    institution: 'University Name',
    degree: 'Bachelor of Science in Computer Science',
    period: '2015 - 2019',
    description: 'Graduated with honors. Focus on software engineering and web technologies.',
  },
];
