import * as React from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          className={cn(
            "flex w-full px-4 py-3 pr-10 bg-white border border-purple-100 text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--foundation-primary)]/20 focus:border-[var(--foundation-primary)] transition-all duration-200 appearance-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 shadow-sm rounded-2xl",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <CaretDown
          weight="bold"
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--foundation-primary)]"
          aria-hidden="true"
        />
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
