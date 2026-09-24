import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 border px-3 py-1 text-xs font-semibold rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--foundation-primary-light)] text-[var(--foundation-primary)]",
        primary:
          "border-transparent bg-[var(--foundation-primary)] text-white shadow-sm",
        accent:
          "border-transparent bg-[var(--foundation-accent-light)] text-[var(--foundation-accent-dark)]",
        gold:
          "border-transparent bg-amber-100 text-amber-800",
        outline:
          "text-[var(--foundation-primary)] border-[var(--foundation-primary)]/25 bg-white/80 backdrop-blur-sm",
        success:
          "border-transparent bg-emerald-100 text-emerald-800",
        glass:
          "border-white/30 bg-white/20 backdrop-blur-md text-white shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
export default Badge;
