"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-95 rounded-full",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--foundation-primary)] text-white hover:bg-[var(--foundation-primary-hover)] shadow-[0_10px_25px_-5px_rgba(123,2,246,0.35)] hover:shadow-[0_15px_35px_-5px_rgba(123,2,246,0.45)] border border-white/10",
        accent:
          "bg-[var(--foundation-accent)] text-white hover:bg-[var(--foundation-accent-hover)] shadow-[0_10px_25px_-5px_rgba(245,158,11,0.35)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.5)] border border-white/10",
        secondary:
          "bg-[var(--foundation-primary-light)] text-[var(--foundation-primary)] hover:bg-[var(--foundation-primary)] hover:text-white border border-[var(--foundation-primary)]/15 shadow-[0_4px_15px_-3px_rgba(123,2,246,0.08)]",
        outline:
          "bg-white/90 backdrop-blur-sm border-2 border-[var(--foundation-primary)] text-[var(--foundation-primary)] hover:bg-[var(--foundation-primary)] hover:text-white shadow-sm",
        "outline-white":
          "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--foundation-primary)] shadow-sm",
        ghost:
          "bg-transparent text-[var(--foreground)] hover:bg-[var(--foundation-primary-light)] hover:text-[var(--foundation-primary)]",
        white:
          "bg-white text-[var(--foundation-primary)] hover:bg-gray-50 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.15)]",
        dark:
          "bg-[var(--foundation-dark)] text-white hover:bg-black/90 shadow-md",
      },
      size: {
        default: "px-6 py-3 has-[>svg]:px-5",
        sm: "gap-1.5 px-4 py-2 has-[>svg]:px-3 text-xs",
        lg: "px-8 py-3.5 has-[>svg]:px-6 text-base font-semibold",
        xl: "px-10 py-4 has-[>svg]:px-8 text-lg font-bold",
        icon: "size-10 rounded-full",
        "icon-sm": "size-8 rounded-full",
        "icon-lg": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

function Button({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  href,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  if (href && !asChild) {
    return (
      <Link
        href={href}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={cn(buttonVariants({ variant, size, className }))}
        {...(props as any)}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export default Button;
