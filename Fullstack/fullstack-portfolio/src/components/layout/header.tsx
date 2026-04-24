'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { Button } from '@/components/ui/button';
import { MobileNav } from './mobile-nav';
import { navigationLinks } from '@/lib/config';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], ['backdrop-blur-none', 'backdrop-blur-md']);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (y) => {
      setIsScrolled(y > 10);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      <motion.header
        className="fixed top-0 z-50 w-full"
        style={{
          opacity: headerOpacity,
          backdropFilter: headerBlur,
        }}
      >
        <div
          className={`mx-auto flex h-14 max-w-5xl items-center justify-between px-6 transition-all ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <nav className="hidden md:flex items-center gap-6">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 md:hidden"
              onClick={() => setIsMobileNavOpen(true)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.header>

      <MobileNav open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen} />
    </>
  );
}
