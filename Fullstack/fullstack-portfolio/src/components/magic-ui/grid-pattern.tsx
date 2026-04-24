import { cn } from '@/lib/utils';

interface GridPatternProps {
  className?: string;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
}

export function GridPattern({
  className,
  width = 40,
  height = 40,
  x = 0,
  y = 0,
}: GridPatternProps) {
  return (
    <svg
      className={cn(
        'absolute inset-0 h-full w-full stroke-zinc-200 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:stroke-zinc-800',
        className
      )}
    >
      <defs>
        <pattern
          id="grid-pattern"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M0 ${height}V0H${width}M${width} 0V${height}H0`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
}
