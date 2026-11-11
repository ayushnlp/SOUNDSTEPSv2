import React from 'react';
import { cn } from '@/lib/utils';

export type ContainerSize = 'narrow' | 'default' | 'wide' | 'full';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  as?: React.ElementType;
}

const sizeStyles: Record<ContainerSize, string> = {
  narrow: 'max-w-3xl',      // 768px (Reading column)
  default: 'max-w-7xl',     // 1280px (Standard main layout)
  wide: 'max-w-screen-2xl', // 1536px (Wide media showcases)
  full: 'max-w-full',
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'default', as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'w-full mx-auto px-4 sm:px-6 lg:px-8',
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

