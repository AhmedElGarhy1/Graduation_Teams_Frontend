import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { Link } from 'react-router-dom';
import { cn } from '../../../utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xl transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none block font-[Lama]',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:text-black hover:bg-[#B9E0FE]',
        success: ' text-white  bg-success hover:bg-success-hover',
        warning: ' text-white  bg-warning hover:bg-warning-hover',
      },
      size: {
        sm: 'text-2xl font-bold  px-4 py-2 rounded-xl',
        lg: 'py-5 px-4 rounded-2xl text-3xl font-black',
        icon: 'w-[55px] h-[55px] flex items-center justify-center rounded-full text-2xl font-black hover:text-3xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          to={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
