'use client';

import { Github, Linkedin, X as TwitterIcon, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function SocialLinks({ className, size = 'md' }: SocialLinksProps) {
  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const gapSizes = {
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-5',
  };

  return (
    <div className={cn('flex items-center', gapSizes[size], className)}>
      <a
        href={siteConfig.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground transition-colors hover:text-foreground"
        aria-label="GitHub"
      >
        <Github className={iconSizes[size]} />
      </a>
      <a
        href={siteConfig.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground transition-colors hover:text-foreground"
        aria-label="LinkedIn"
      >
        <Linkedin className={iconSizes[size]} />
      </a>
      {siteConfig.social.twitter && (
        <a
          href={siteConfig.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Twitter"
        >
          <TwitterIcon className={iconSizes[size]} />
        </a>
      )}
      <a
        href={`mailto:${siteConfig.email}`}
        className="text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Email"
      >
        <Mail className={iconSizes[size]} />
      </a>
    </div>
  );
}
