import React from 'react';
import { cn } from '@/lib/utils';

export type SectionBackground = 'ivory' | 'white' | 'teal' | 'muted';
export type SectionSpacing = 'none' | 'compact' | 'default' | 'relaxed';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: SectionBackground;
  spacing?: SectionSpacing;
  borderTop?: boolean;
  borderBottom?: boolean;
  as?: React.ElementType;
}

const backgroundStyles: Record<SectionBackground, string> = {
  ivory: 'bg-background text-foreground',
  white: 'bg-surface text-foreground',
  teal: 'bg-primary text-primary-foreground',
  muted: 'bg-muted/50 text-foreground',
};

const spacingStyles: Record<SectionSpacing, string> = {
  none: 'py-0',
  compact: 'py-8 md:py-12',
  default: 'py-14 md:py-20 lg:py-24',
  relaxed: 'py-18 md:py-28 lg:py-32',
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      background = 'ivory',
      spacing = 'default',
      borderTop = false,
      borderBottom = false,
      as: Component = 'section',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'relative w-full overflow-hidden',
          backgroundStyles[background],
          spacingStyles[spacing],
          borderTop && 'border-t border-border',
          borderBottom && 'border-b border-border',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Section.displayName = 'Section';

