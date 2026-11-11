import React from 'react';
import { cn } from '@/lib/utils';

export type CardVariant = 'default' | 'elevated' | 'interactive' | 'minimal';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  as?: React.ElementType;
}

const variantStyles: Record<CardVariant, string> = {
  default:
    'bg-surface text-foreground border border-border rounded-2xl shadow-sm',
  elevated:
    'bg-surface text-foreground border border-border/80 rounded-2xl shadow-md',
  interactive:
    'bg-surface text-foreground border border-border rounded-2xl shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2',
  minimal:
    'bg-muted/40 text-foreground border border-border/60 rounded-xl',
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('relative overflow-hidden', variantStyles[variant], className)}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('p-6 pb-3 space-y-1.5', className)} {...props} />;
  }
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn('font-display font-semibold text-xl md:text-2xl text-deep-teal tracking-tight', className)}
        {...props}
      />
    );
  }
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('font-body text-sm text-dark-text-muted leading-relaxed', className)}
        {...props}
      />
    );
  }
);
CardDescription.displayName = 'CardDescription';

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('p-6 pt-3 font-body text-dark-text', className)} {...props} />;
  }
);
CardContent.displayName = 'CardContent';

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('p-6 pt-0 flex items-center justify-between gap-4 font-body', className)}
        {...props}
      />
    );
  }
);
CardFooter.displayName = 'CardFooter';

