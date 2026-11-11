import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';

export type ComingSoonVariant = 'badge' | 'card' | 'banner';

export interface ComingSoonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ComingSoonVariant;
  title?: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
}

/**
 * ComingSoon: Governance primitive for Stage 1 / Stage 2 content compliance.
 * Defensively renders unverified owner dependencies (DEP-01 through DEP-09)
 * with institutional dignity, preventing the invention of unauthenticated claims.
 */
export const ComingSoon = React.forwardRef<HTMLDivElement, ComingSoonProps>(
  (
    {
      className,
      variant = 'card',
      title = 'Details Being Confirmed',
      description = 'Official details for this section are being finalized with clinic leadership and will be published shortly.',
      actionText,
      actionHref,
      ...props
    },
    ref
  ) => {
    if (variant === 'badge') {
      return (
        <Badge variant="neutral" size="sm" className={className}>
          {title}
        </Badge>
      );
    }

    if (variant === 'banner') {
      return (
        <div
          ref={ref}
          role="status"
          className={cn(
            'w-full bg-muted/60 border border-border rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3',
            className
          )}
          {...props}
        >
          <div className="space-y-0.5">
            <p className="font-body font-semibold text-sm text-foreground">{title}</p>
            <p className="font-body text-xs text-dark-text-muted">{description}</p>
          </div>
          {actionText && actionHref && (
            <a
              href={actionHref}
              className="text-xs font-semibold text-primary hover:underline shrink-0"
            >
              {actionText} &rarr;
            </a>
          )}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="status"
        className={cn(
          'bg-surface border border-dashed border-border rounded-2xl p-6 md:p-8 text-center space-y-3',
          className
        )}
        {...props}
      >
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted/70 text-primary mb-1">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <h4 className="font-display font-semibold text-lg text-deep-teal">{title}</h4>
        <p className="font-body text-sm text-dark-text-muted max-w-md mx-auto leading-relaxed">
          {description}
        </p>
        {actionText && actionHref && (
          <div className="pt-2">
            <a
              href={actionHref}
              className="inline-flex text-xs font-semibold text-primary hover:text-deep-teal-hover underline underline-offset-4"
            >
              {actionText}
            </a>
          </div>
        )}
      </div>
    );
  }
);

ComingSoon.displayName = 'ComingSoon';

