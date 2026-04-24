import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}

export function SectionHeading({
  children,
  className,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 md:mb-16', className)}>
      {subtitle && (
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {children}
      </h2>
    </div>
  );
}
