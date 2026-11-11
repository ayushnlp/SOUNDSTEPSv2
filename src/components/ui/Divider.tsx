import React from 'react';
import { cn } from '@/lib/utils';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}

const spacingStyles = {
  horizontal: {
    none: 'my-0',
    sm: 'my-4',
    md: 'my-8',
    lg: 'my-12',
  },
  vertical: {
    none: 'mx-0',
    sm: 'mx-4',
    md: 'mx-8',
    lg: 'mx-12',
  },
};

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = 'horizontal', spacing = 'md', ...props }, ref) => {
    if (orientation === 'vertical') {
      return (
        <span
          role="separator"
          aria-orientation="vertical"
          className={cn(
            'inline-block h-full w-[1px] bg-border self-stretch',
            spacingStyles.vertical[spacing],
            className
          )}
        />
      );
    }

    return (
      <hr
        ref={ref}
        role="separator"
        aria-orientation="horizontal"
        className={cn(
          'w-full border-0 border-t border-border',
          spacingStyles.horizontal[spacing],
          className
        )}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

