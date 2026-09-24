import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full px-4 py-3 bg-white border border-gray-200 text-[var(--foreground)] text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--foundation-primary)]/20 focus:border-[var(--foundation-primary)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm rounded-xl",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
