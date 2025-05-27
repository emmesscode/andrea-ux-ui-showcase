
import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from './button';

interface ThemedButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
}

const ThemedButton = React.forwardRef<HTMLButtonElement, ThemedButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    const getVariantClasses = () => {
      switch (variant) {
        case 'primary':
          return 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5';
        case 'secondary':
          return 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5';
        case 'ghost':
          return 'hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-0.5';
        case 'outline':
          return 'border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5';
        default:
          return '';
      }
    };

    return (
      <Button
        ref={ref}
        className={cn(
          'font-light rounded-xl',
          getVariantClasses(),
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

ThemedButton.displayName = 'ThemedButton';

export { ThemedButton };
