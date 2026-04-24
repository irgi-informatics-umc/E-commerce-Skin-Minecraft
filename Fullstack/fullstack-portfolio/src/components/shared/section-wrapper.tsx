'use client';

import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  delay?: number;
}

export function SectionWrapper({
  children,
  id,
  className = '',
  delay = 0,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay }}
        className="mx-auto max-w-5xl px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}
