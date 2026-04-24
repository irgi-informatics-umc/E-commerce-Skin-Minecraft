import { cn } from '@/lib/utils';

interface DotPatternProps {
  className?: string;
  size?: number;
  gap?: number;
}

export function DotPattern({
  className,
  size = 2,
  gap = 24,
}: DotPatternProps) {
  return (
    <svg
      className={cn(
        'absolute inset-0 h-full w-full fill-zinc-300/30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:fill-zinc-700/30',
        className
      )}
    >
      <defs>
        <pattern
          id="dot-pattern"
          width={gap}
          height={gap}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={size / 2} cy={size / 2} r={size / 2} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  );
}
