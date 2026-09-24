"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import {
  Heart,
  Envelope,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Globe,
  FacebookLogo,
  XLogo,
  LinkedinLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const t = useTranslations("footer");
  const tCommon = useTranslations("common");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  const footerLinks = {
    pages: [
      { href: "/", label: t("links.home") },
      { href: "/about", label: t("links.about") },
      { href: "/resources", label: t("links.resources") },
      { href: "/contact", label: t("links.contact") },
    ],
    governance: [
      { href: "/code-of-conduct", label: t("links.codeOfConduct") },
      { href: "/code-of-conduct", label: t("links.childSafeguarding") },
      { href: "/bylaws", label: t("links.bylaws") },
      { href: "/resources", label: t("links.brandKit") },
      { href: "/contact#membership", label: t("links.membership") },
    ],
    programs: [
      { href: "/about#programs", label: t("links.childDevelopment") },
      { href: "/about#programs", label: t("links.healthMobility") },
      { href: "/about#programs", label: t("links.familySupport") },
      { href: "/about#programs", label: t("links.inclusion") },
      { href: "/about#programs", label: t("links.povertyRelief") },
    ],
  };

  return (
    <footer className="bg-[#120126] text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--foundation-primary)]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--foundation-accent)]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Newsletter Subscription Strip */}
      <div className="border-b border-white/10 bg-[#1A0336]/90 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-purple-200 text-xs font-semibold">
                <Envelope weight="bold" className="w-3.5 h-3.5 text-[var(--foundation-accent)]" />
                {t("newsletter.badge")}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {t("newsletter.heading")}
              </h3>
              <p className="text-sm text-purple-100 max-w-lg">
                {t("newsletter.description")}
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="p-4 bg-purple-900/60 border border-purple-500/40 rounded-2xl flex items-center gap-3 text-purple-100">
                  <CheckCircle weight="fill" className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-bold text-sm">{t("newsletter.thankYou")}</p>
                    <p className="text-xs text-purple-200">
                      {t("newsletter.confirmMessage")}
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    required
                    placeholder={t("newsletter.placeholder")}
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/15 focus:border-[var(--foundation-accent)] rounded-full h-12 px-6"
                  />
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="rounded-full shrink-0 font-bold shadow-md hover:shadow-accent-glow"
                  >
                    {t("newsletter.subscribe")}
                    <ArrowRight weight="bold" className="w-4 h-4 ml-1" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/jovialogo.svg"
                alt={`${tCommon("siteName")} Logo`}
                width={48}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                  JOVIA <span className="text-[var(--foundation-accent)]">FOUNDATION</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-purple-300">
                  {tCommon("tagline")}
                </span>
              </div>
            </Link>

            <div className="space-y-2">
              <p className="text-sm font-bold text-amber-300">
                {t("brand.slogan")}
              </p>
              <p className="text-sm text-purple-100 leading-relaxed">
                {t("brand.description")}
              </p>
            </div>

            {/* Social Media Links */}
            <div className="pt-1">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                {t("brand.followWork")}
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--foundation-primary)] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm border border-white/10"
                  aria-label="Facebook"
                >
                  <FacebookLogo weight="fill" className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--foundation-primary)] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm border border-white/10"
                  aria-label="Twitter / X"
                >
                  <XLogo weight="bold" className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--foundation-primary)] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm border border-white/10"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo weight="fill" className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--foundation-primary)] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm border border-white/10"
                  aria-label="Instagram"
                >
                  <InstagramLogo weight="fill" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: 4 Pages (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold text-amber-400 uppercase tracking-wider">
              {t("sections.navigation")}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.pages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-purple-100 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Governance & Bylaws (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-amber-400 uppercase tracking-wider">
              {t("sections.governance")}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.governance.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-purple-100 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Regional Offices (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-amber-400 uppercase tracking-wider">
              {t("sections.regionalOffices")}
            </h4>

            <div className="space-y-3.5 text-xs text-purple-100">
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5 text-xs sm:text-sm">
                  <Globe weight="bold" className="w-4 h-4 text-amber-400" />
                  {t("offices.canadaTitle")}
                </div>
                <p className="text-purple-100 pl-5">
                  {t("offices.canadaLocation")}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5 text-xs sm:text-sm">
                  <MapPin weight="bold" className="w-4 h-4 text-emerald-400" />
                  {t("offices.cameroonTitle")}
                </div>
                <p className="text-purple-100 pl-5">
                  {t("offices.cameroonLocation")}
                </p>
              </div>

              <div className="pt-1 space-y-2">
                <a
                  href="tel:+18001234567"
                  className="flex items-center gap-2 text-white hover:text-[var(--foundation-accent)] transition-colors"
                >
                  <Phone weight="bold" className="w-4 h-4 text-[var(--foundation-accent)]" />
                  +1 (800) 123-4567 / +237 670 000 000
                </a>
                <a
                  href="mailto:info@joviafoundation.org"
                  className="flex items-center gap-2 text-white hover:text-[var(--foundation-accent)] transition-colors"
                >
                  <Envelope weight="bold" className="w-4 h-4 text-[var(--foundation-accent)]" />
                  info@joviafoundation.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#0E001F] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-purple-200">
            <div className="flex items-center gap-2 text-center md:text-left">
              <span>{t("bottom.copyright", { year: currentYear })}</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-amber-300 hidden sm:inline">
                {t("bottom.slogan")}
              </span>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                {t("bottom.privacyPolicy")}
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                {t("bottom.termsOfUse")}
              </Link>
              <Link href="/code-of-conduct" className="hover:text-white transition-colors">
                {t("bottom.codeOfConduct")}
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                {t("bottom.contactUs")}
              </Link>
              <Link
                href="/contact#donate"
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[var(--foundation-accent)] text-white font-bold hover:bg-[var(--foundation-accent-hover)] transition-all"
              >
                <Heart weight="fill" className="w-3.5 h-3.5 fill-current" />
                {t("bottom.donate")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
