import React from 'react';
import { cn } from '@/lib/utils';

export type GridCols = 1 | 2 | 3 | 4 | 'auto-fit';
export type GridGap = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: GridCols;
  gap?: GridGap;
  as?: React.ElementType;
}

const colsStyles: Record<GridCols, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  'auto-fit': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3',
};

const gapStyles: Record<GridGap, string> = {
  none: 'gap-0',
  sm: 'gap-4',
  md: 'gap-6 md:gap-8',
  lg: 'gap-8 md:gap-10',
  xl: 'gap-10 md:gap-12 lg:gap-16',
};

export const ResponsiveGrid = React.forwardRef<HTMLDivElement, ResponsiveGridProps>(
  ({ className, cols = 3, gap = 'md', as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('grid w-full', colsStyles[cols], gapStyles[gap], className)}
        {...props}
      />
    );
  }
);

ResponsiveGrid.displayName = 'ResponsiveGrid';

