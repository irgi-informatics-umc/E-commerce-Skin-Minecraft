import { siteConfig } from '@/lib/config';
import { SocialLinks } from '@/components/shared/social-links';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6">
        <SocialLinks size="md" />

        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
