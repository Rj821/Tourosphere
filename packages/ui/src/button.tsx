import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-black/90",
        secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8"
      }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const UIButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant, size, ...props }, ref) => {
    const classes = buttonVariants({ variant, size });
    return <button className={`${classes} ${className}`} ref={ref} {...props} />;
  }
);
UIButton.displayName = "UIButton";