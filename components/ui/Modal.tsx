"use client";

import * as React from "react";
import { X } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
}: ModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        className={cn(
          "relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 animate-fade-in border border-purple-100 max-h-[90vh] overflow-y-auto",
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 sm:right-6 sm:top-6 rounded-full p-2 text-gray-400 hover:text-gray-700 hover:bg-purple-50 transition-colors"
          aria-label="Close modal"
        >
          <X weight="bold" className="h-5 w-5" />
        </button>

        {title && (
          <div className="mb-4 pr-8">
            <h3 className="text-2xl font-bold text-[var(--foreground)]">{title}</h3>
            {description && (
              <p className="text-sm text-[var(--foreground-muted)] mt-1">{description}</p>
            )}
          </div>
        )}

        <div>{children}</div>
      </div>
    </div>
  );
}
