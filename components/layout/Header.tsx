"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Heart,
  Phone,
  Envelope,
  List,
  X,
  Globe,
  ShieldCheck,
  CaretRight,
  FacebookLogo,
  XLogo,
  LinkedinLogo,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Center navigation links: Home, About, Resources
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#120126] text-white/90 text-xs hidden lg:block border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="inline-flex items-center text-purple-200 font-medium">
              <span className="w-2 h-2 rounded-full bg-[var(--foundation-accent)] animate-pulse mr-2" />
              Canada & Cameroon • Every Child Deserves a Chance to Thrive
            </span>
            <span className="text-white/20">|</span>
            <a
              href="mailto:info@joviafoundation.org"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Envelope weight="bold" className="w-3.5 h-3.5 text-[var(--foundation-accent)]" />
              info@joviafoundation.org
            </a>
            <a
              href="tel:+18001234567"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone weight="bold" className="w-3.5 h-3.5 text-[var(--foundation-accent)]" />
              +1 (800) 123-4567
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-purple-200">
              <ShieldCheck weight="fill" className="w-4 h-4 text-amber-400" />
              Registered Non-Profit Foundation
            </span>
            <span className="text-white/20">|</span>
            <div className="flex items-center space-x-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-[var(--foundation-primary)] flex items-center justify-center transition-colors text-white"
                aria-label="Facebook"
              >
                <FacebookLogo weight="fill" className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-[var(--foundation-primary)] flex items-center justify-center transition-colors text-white"
                aria-label="Twitter / X"
              >
                <XLogo weight="bold" className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-[var(--foundation-primary)] flex items-center justify-center transition-colors text-white"
                aria-label="LinkedIn"
              >
                <LinkedinLogo weight="fill" className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-[var(--foundation-primary)] flex items-center justify-center transition-colors text-white"
                aria-label="Instagram"
              >
                <InstagramLogo weight="fill" className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-purple-100"
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-purple-100/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-purple-100 p-1 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/jovialogo.svg"
                  alt="JOVIA Foundation Logo"
                  width={50}
                  height={50}
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[var(--foundation-primary)] group-hover:text-[var(--foundation-primary-hover)] transition-colors">
                  JOVIA <span className="text-[var(--foundation-accent)]">FOUNDATION</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[var(--foreground-muted)] uppercase hidden sm:block">
                  Every Child • Every Ability • Every Opportunity
                </span>
              </div>
            </Link>

            {/* Center Navigation Links (Home, About, Resources) */}
            <nav className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? "text-[var(--foundation-primary)] bg-[var(--foundation-primary-light)] shadow-sm"
                        : "text-[var(--foreground)] hover:text-[var(--foundation-primary)] hover:bg-[var(--surface)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: 2 Buttons (Contact Us & Donate Now) */}
            <div className="hidden sm:flex items-center gap-3">
              <Button
                href="/contact"
                variant="outline"
                size="default"
              >
                Contact Us
              </Button>

              <Button
                href="/contact#donate"
                variant="primary"
                size="default"
                className="gap-2 font-bold px-6 shadow-md hover:shadow-primary-glow"
              >
                <Heart weight="fill" className="w-4 h-4 fill-white animate-heart-beat" />
                Donate Now
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                href="/contact#donate"
                variant="primary"
                size="sm"
                className="font-bold px-3 py-1.5 text-xs"
              >
                <Heart weight="fill" className="w-3.5 h-3.5 fill-white" />
                Donate
              </Button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-[var(--surface)] text-[var(--foreground)] hover:text-[var(--foundation-primary)] hover:bg-purple-100 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X weight="bold" className="w-6 h-6" />
                ) : (
                  <List weight="bold" className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-purple-100 shadow-2xl animate-fade-in">
          <div className="px-5 pt-4 pb-6 space-y-2">
            <div className="p-3 bg-[var(--foundation-primary-light)] rounded-2xl mb-3 flex items-center justify-between">
              <div className="text-xs font-semibold text-[var(--foundation-primary)]">
                Active in Canada & Cameroon
              </div>
              <span className="text-[11px] font-bold text-[var(--foundation-accent)]">
                Registered NGO
              </span>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-[var(--foreground)] hover:text-[var(--foundation-primary)] hover:bg-[var(--surface)] rounded-xl transition-all"
              >
                <span>{link.label}</span>
                <CaretRight weight="bold" className="w-4 h-4 text-purple-300" />
              </Link>
            ))}

            <div className="pt-4 border-t border-purple-100 space-y-2.5">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full justify-center font-bold"
              >
                Contact Us
              </Button>

              <Button
                href="/contact#donate"
                variant="primary"
                size="lg"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full justify-center font-bold"
              >
                <Heart weight="fill" className="w-4 h-4 fill-white" />
                Donate Now
              </Button>

              <div className="flex flex-col gap-2 pt-2 text-xs text-[var(--foreground-muted)]">
                <a
                  href="mailto:info@joviafoundation.org"
                  className="flex items-center gap-2 p-2 rounded-lg bg-[var(--surface)]"
                >
                  <Envelope weight="bold" className="w-4 h-4 text-[var(--foundation-primary)]" />
                  info@joviafoundation.org
                </a>
                <a
                  href="tel:+18001234567"
                  className="flex items-center gap-2 p-2 rounded-lg bg-[var(--surface)]"
                >
                  <Phone weight="bold" className="w-4 h-4 text-[var(--foundation-accent)]" />
                  +1 (800) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
