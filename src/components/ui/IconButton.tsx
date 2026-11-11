import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export type IconButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Mandatory descriptive label for screen reader users (WCAG 2.2 AA SC 4.1.2)
   */
  'aria-label': string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  href?: string;
  external?: boolean;
  icon: React.ReactNode;
}

const variantStyles: Record<IconButtonVariant, string> = {
  primary:
    'bg-primary text-primary-foreground hover:bg-[#122E2D] active:bg-[#0E2322] border border-transparent shadow-sm',
  secondary:
    'bg-secondary text-primary border border-border hover:bg-muted/50 active:bg-muted shadow-sm',
  outline:
    'bg-transparent text-primary border-2 border-primary hover:bg-primary/5 active:bg-primary/10',
  ghost:
    'bg-transparent text-foreground hover:bg-muted/60 active:bg-muted border border-transparent',
};

const sizeStyles: Record<IconButtonSize, string> = {
  sm: 'w-9 h-9 min-w-[36px] min-h-[36px] rounded-lg',
  md: 'w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl', // Meets WCAG 2.2 SC 2.5.8 (44x44px)
  lg: 'w-12 h-12 min-w-[48px] min-h-[48px] rounded-xl',
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      'aria-label': ariaLabel,
      className,
      variant = 'secondary',
      size = 'md',
      href,
      external = false,
      icon,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center transition-colors duration-150',
      'select-none',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-background',
      'disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            className={baseClasses}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
          >
            {icon}
          </a>
        );
      }
      return (
        <Link href={href} className={baseClasses} aria-label={ariaLabel}>
          {icon}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        className={baseClasses}
        disabled={disabled}
        aria-label={ariaLabel}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

