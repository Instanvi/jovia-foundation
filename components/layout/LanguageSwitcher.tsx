"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useState, useRef, useEffect } from "react";
import { CaretDown, Check } from "@phosphor-icons/react/dist/ssr";
import { GB, FR } from "country-flag-icons/react/3x2";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("language");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    {
      code: "en",
      name: t("english"),
      Flag: GB,
    },
    {
      code: "fr",
      name: t("french"),
      Flag: FR,
    },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 border border-white/20 hover:border-white/30"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        {currentLanguage && (
          <currentLanguage.Flag className="w-5 h-3.5 rounded-sm shadow-sm" />
        )}
        <span className="text-sm font-semibold hidden sm:inline">
          {currentLanguage?.name}
        </span>
        <CaretDown
          weight="bold"
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-purple-100 overflow-hidden animate-fade-in z-50">
          {languages.map((language) => {
            const isActive = language.code === locale;
            return (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[var(--foundation-primary-light)] text-[var(--foundation-primary)]"
                    : "text-[var(--foreground)] hover:bg-[var(--surface)]"
                }`}
              >
                <language.Flag className="w-6 h-4 rounded-sm shadow-sm" />
                <span className="flex-1 text-left">{language.name}</span>
                {isActive && (
                  <Check weight="bold" className="w-5 h-5 text-[var(--foundation-primary)]" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
