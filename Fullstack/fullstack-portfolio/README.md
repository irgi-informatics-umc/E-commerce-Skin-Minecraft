# Fullstack Developer Portfolio

A high-end, production-ready developer portfolio built with Next.js 14+, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css)

## Features

- **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS v4
- **Premium Design**: Clean, minimal aesthetic inspired by Vercel and Linear
- **Dark Mode**: Smooth theme toggle with system preference detection
- **Animations**: Subtle, purposeful animations with Framer Motion
- **Blog System**: MDX-based blog with syntax highlighting
- **SEO Optimized**: Meta tags, OpenGraph, sitemap, and structured data
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for Lighthouse scores of 90+

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui |
| Animations | Framer Motion |
| Blog | MDX with remark/rehype |
| Forms | React Hook Form + Zod |
| Email | Resend (optional) |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd fullstack-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your configuration:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Customization

### Personal Information

Update `src/lib/config.ts` with your details:

```typescript
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
  description: 'Your unique description',
};
```

### Projects

Edit `src/data/projects.ts` to add your projects:

```typescript
export const projects: Project[] = [
  {
    slug: 'my-project',
    title: 'My Awesome Project',
    description: 'A brief description',
    image: '/images/projects/my-project.jpg',
    tags: ['Next.js', 'TypeScript'],
    category: 'fullstack',
    liveUrl: 'https://...',
    repoUrl: 'https://github.com/...',
    featured: true,
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind'],
    highlights: ['Key achievement 1', 'Key achievement 2'],
    date: '2024-01-15',
  },
];
```

### Experience

Update `src/data/experience.ts` with your work history and education.

### Blog Posts

Add new blog posts in `src/content/blog/` as `.mdx` files:

```mdx
---
title: "Your Post Title"
description: "A brief description"
date: "2024-03-15"
tags: ["React", "TypeScript"]
---

## Your Content

Write your blog post content here using Markdown.
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (home)/            # Home page
│   ├── blog/              # Blog pages
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Header, Footer, Nav
│   ├── sections/          # Page sections
│   ├── shared/            # Reusable components
│   └── magic-ui/          # Custom animated components
├── data/                  # Static data files
├── lib/                   # Utilities and config
└── types/                 # TypeScript types
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub

2. Import your repository in [Vercel](https://vercel.com)

3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`

4. Deploy!

### Build Locally

```bash
npm run build
npm run start
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Performance Targets

- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

## License

MIT License - feel free to use this template for your own portfolio!

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) for the beautiful UI components
- [Vercel](https://vercel.com) for the design inspiration
- [Framer Motion](https://www.framer.com/motion/) for animations
