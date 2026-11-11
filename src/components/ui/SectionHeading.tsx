import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  theme?: 'light' | 'dark';
}

export const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  (
    {
      className,
      eyebrow,
      title,
      subtitle,
      align = 'left',
      as: HeadingTag = 'h2',
      theme = 'light',
      ...props
    },
    ref
  ) => {
    const isDark = theme === 'dark';
    const isCenter = align === 'center';

    return (
      <div
        ref={ref}
        className={cn(
          'max-w-3xl space-y-3 mb-10 md:mb-14',
          isCenter && 'mx-auto text-center',
          className
        )}
        {...props}
      >
        {eyebrow && (
          <p
            className={cn(
              'eyebrow-label inline-block',
              isDark ? 'text-primary-foreground/80' : 'text-accent'
            )}
          >
            {eyebrow}
          </p>
        )}
        <HeadingTag
          className={cn(
            HeadingTag === 'h1' ? 'heading-1' : HeadingTag === 'h2' ? 'heading-2' : 'heading-3',
            isDark && 'text-primary-foreground'
          )}
        >
          {title}
        </HeadingTag>
        {subtitle && (
          <p
            className={cn(
              'font-body text-base md:text-lg leading-relaxed',
              isDark ? 'text-primary-foreground/85' : 'text-dark-text-muted',
              isCenter && 'mx-auto'
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = 'SectionHeading';

