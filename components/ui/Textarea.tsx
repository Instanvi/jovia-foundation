import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full px-4 py-3 bg-white border border-gray-200 text-[var(--foreground)] text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--foundation-primary)]/20 focus:border-[var(--foundation-primary)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm rounded-xl resize-y",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
