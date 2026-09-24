"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Heart,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Users,
  GraduationCap,
  Heartbeat,
  Drop,
  Smiley,
  Globe,
  Medal,
  BookOpen,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function Home() {
  const t = useTranslations("home");

  return (
    <>
      {/* =========================================================================
          1. HERO SECTION (Warm, Clean & Human)
          ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden hero-gradient-canvas">
        <div className="hero-mesh-glow" />
        <div className="pattern-dots absolute inset-0 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-8 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-[var(--foreground)]">
                {t("hero.titlePart1")} <br />
                {t("hero.titlePart2")}
                <span className="text-gradient-accent">
                  {t("hero.titlePart2Accent")}
                </span>{" "}
                <br />
                {t("hero.titlePart3")}
              </h1>

              <div className="space-y-2">
                <p className="text-lg sm:text-xl font-bold text-[var(--foundation-primary)]">
                  {t("hero.slogan")}
                </p>
                <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed max-w-2xl">
                  {t("hero.description")}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href="/donate"
                  variant="primary"
                  size="xl"
                  className="gap-2.5 font-bold shadow-lg hover:shadow-primary-glow"
                >
                  <Heart
                    weight="fill"
                    className="w-5 h-5 fill-white animate-heart-beat"
                  />
                  {t("hero.donateBtn")}
                </Button>

                <Button
                  href="/about"
                  variant="outline"
                  size="xl"
                  className="gap-2.5 font-bold bg-white/90 border-2 border-[var(--foundation-primary)] text-[var(--foundation-primary)]"
                >
                  <BookOpen
                    weight="bold"
                    className="w-5 h-5 text-[var(--foundation-accent)]"
                  />
                  {t("hero.exploreBtn")}
                </Button>
              </div>

              {/* Supporters Proof */}
              <div className="pt-6 border-t border-purple-100 flex items-center gap-4">
                <div className="flex -space-x-3 overflow-hidden">
                  {[
                    "/images/nursechild.avif",
                    "/images/younggirlwheelchair.avif",
                    "/images/disabledperson.jpg",
                    "/images/womanchildtalking.avif",
                    "/images/poorwomantalking.avif",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white overflow-hidden bg-purple-100 relative shadow-sm"
                    >
                      <Image
                        src={src}
                        alt={t("hero.imageAlts.supporter", { number: i + 1 })}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-xs sm:text-sm text-[var(--foreground-muted)]">
                  <span className="font-extrabold text-[var(--foreground)]">
                    {t("hero.supportersHighlight")}
                  </span>{" "}
                  {t("hero.supportersText")}
                </div>
              </div>
            </div>

            {/* Right Visual Column (5 cols) - Clean 2x2 Photo Grid */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                {/* Background Ambient Glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--foundation-primary)]/15 to-[var(--foundation-accent)]/15 rounded-3xl blur-2xl -z-10 pointer-events-none" />

                {/* 2x2 Clean Image Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Photo 1: Wheelchair Freedom */}
                  <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden shadow-md border border-purple-100 group">
                    <Image
                      src="/images/younggirlwheelchair.avif"
                      alt={t("hero.imageAlts.wheelchair")}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5">
                      <span className="text-[11px] font-bold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {t("hero.imageTags.mobility")}
                      </span>
                    </div>
                  </div>

                  {/* Photo 2: Pediatric Care */}
                  <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden shadow-md border border-purple-100 group">
                    <Image
                      src="/images/nursechild.avif"
                      alt={t("hero.imageAlts.pediatricCare")}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5">
                      <span className="text-[11px] font-bold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {t("hero.imageTags.pediatric")}
                      </span>
                    </div>
                  </div>

                  {/* Photo 3: Adaptive Education */}
                  <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden shadow-md border border-purple-100 group">
                    <Image
                      src="/images/disabledperson.jpg"
                      alt={t("hero.imageAlts.adaptiveEducation")}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5">
                      <span className="text-[11px] font-bold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {t("hero.imageTags.education")}
                      </span>
                    </div>
                  </div>

                  {/* Photo 4: Caregiver Connection */}
                  <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden shadow-md border border-purple-100 group">
                    <Image
                      src="/images/womanchildtalking.avif"
                      alt={t("hero.imageAlts.caregiver")}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5">
                      <span className="text-[11px] font-bold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {t("hero.imageTags.family")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. 4 CORE PILLARS (Transparent, Accountable, Community Driven, Proven Impact)
          ========================================================================= */}
      <section className="py-16 bg-[var(--background-alt)] relative border-b border-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Transparent */}
            <div className="p-8 bg-white rounded-3xl border border-purple-50 shadow-[0_4px_20px_-4px_rgba(123,2,246,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-[var(--foundation-accent)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Globe weight="bold" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">
                {t("pillars.transparent.title")}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                {t("pillars.transparent.description")}
              </p>
            </div>

            {/* Card 2: Accountable */}
            <div className="p-8 bg-white rounded-3xl border border-purple-50 shadow-[0_4px_20px_-4px_rgba(123,2,246,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 text-[var(--foundation-primary)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck weight="bold" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">
                {t("pillars.accountable.title")}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                {t("pillars.accountable.description")}
              </p>
            </div>

            {/* Card 3: Community Driven */}
            <div className="p-8 bg-white rounded-3xl border border-purple-50 shadow-[0_4px_20px_-4px_rgba(123,2,246,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Users weight="bold" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">
                {t("pillars.community.title")}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                {t("pillars.community.description")}
              </p>
            </div>

            {/* Card 4: Proven Impact */}
            <div className="p-8 bg-white rounded-3xl border border-purple-50 shadow-[0_4px_20px_-4px_rgba(123,2,246,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group">
              <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Medal weight="bold" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">
                {t("pillars.impact.title")}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                {t("pillars.impact.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ABOUT JOVIA SPOTLIGHT ("Empowering Communities. Inspiring Inclusion.")
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Clean Photo Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-3 bg-gradient-to-tr from-[var(--foundation-primary-light)] to-[var(--foundation-accent-light)] rounded-3xl blur-xl opacity-70" />
                <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-purple-100">
                  <Image
                    src="/images/poordisabledafrican.avif"
                    alt={t("aboutSpotlight.imageAlt")}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
                    <div className="space-y-1 text-white">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--foundation-primary)] text-white inline-block shadow-sm">
                        {t("aboutSpotlight.cardBadge")}
                      </span>
                      <p className="text-sm font-bold">
                        {t("aboutSpotlight.cardText")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--foundation-primary-light)] text-[var(--foundation-primary)] text-xs font-extrabold uppercase tracking-wider">
                {t("aboutSpotlight.badge")}
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
                {t("aboutSpotlight.titlePart1")} <br />
                <span className="text-gradient-primary">
                  {t("aboutSpotlight.titlePart2")}
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
                {t("aboutSpotlight.description")}
              </p>

              {/* 4 Key Checklist Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  t("aboutSpotlight.points.point1"),
                  t("aboutSpotlight.points.point2"),
                  t("aboutSpotlight.points.point3"),
                  t("aboutSpotlight.points.point4"),
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-100 text-[var(--foundation-primary)] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle weight="fill" className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-[var(--foreground)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button
                  href="/about"
                  variant="primary"
                  size="lg"
                  className="font-bold"
                >
                  {t("aboutSpotlight.learnMoreBtn")}
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="font-bold border-2 border-[var(--foundation-primary)] text-[var(--foundation-primary)]"
                >
                  {t("aboutSpotlight.contactBtn")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. 5 CORE PROGRAM PILLARS (Centered 3 + 2 Balanced Layout)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[var(--background-alt)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--foundation-primary-light)] text-[var(--foundation-primary)] text-xs font-extrabold uppercase tracking-wider">
              {t("programPillars.badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              {t("programPillars.titlePart1")}
              <span className="text-gradient-primary">
                {t("programPillars.titlePart2")}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              {t("programPillars.description")}
            </p>
          </div>

          {/* Top Row: 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t("programPillars.items.education.title"),
                icon: GraduationCap,
                color: "bg-purple-100 text-[var(--foundation-primary)]",
                desc: t("programPillars.items.education.description"),
              },
              {
                title: t("programPillars.items.health.title"),
                icon: Heartbeat,
                color: "bg-amber-100 text-amber-700",
                desc: t("programPillars.items.health.description"),
              },
              {
                title: t("programPillars.items.family.title"),
                icon: Users,
                color: "bg-emerald-100 text-emerald-700",
                desc: t("programPillars.items.family.description"),
              },
            ].map((program, idx) => {
              const IconComp = program.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-3xl border border-purple-100/80 shadow-[0_4px_20px_-4px_rgba(123,2,246,0.06)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-center items-center group"
                >
                  <div className="space-y-4 flex flex-col items-center">
                    <div
                      className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner`}
                    >
                      <IconComp weight="bold" className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 leading-snug">
                      {program.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                      {program.desc}
                    </p>
                  </div>

                  <div className="pt-6">
                    <Link
                      href="/about#programs"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 text-xs font-bold text-[var(--foundation-primary)] transition-all group-hover:gap-2.5"
                    >
                      {t("programPillars.learnMore")}
                      <ArrowRight weight="bold" className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: 2 Pillars Centered */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {[
              {
                title: t("programPillars.items.inclusion.title"),
                icon: Smiley,
                color: "bg-rose-100 text-rose-700",
                desc: t("programPillars.items.inclusion.description"),
              },
              {
                title: t("programPillars.items.povertyRelief.title"),
                icon: Drop,
                color: "bg-blue-100 text-blue-700",
                desc: t("programPillars.items.povertyRelief.description"),
              },
            ].map((program, idx) => {
              const IconComp = program.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-3xl border border-purple-100/80 shadow-[0_4px_20px_-4px_rgba(123,2,246,0.06)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-center items-center group"
                >
                  <div className="space-y-4 flex flex-col items-center">
                    <div
                      className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner`}
                    >
                      <IconComp weight="bold" className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 leading-snug">
                      {program.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                      {program.desc}
                    </p>
                  </div>

                  <div className="pt-6">
                    <Link
                      href="/about#programs"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 text-xs font-bold text-[var(--foundation-primary)] transition-all group-hover:gap-2.5"
                    >
                      {t("programPillars.learnMore")}
                      <ArrowRight weight="bold" className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. STRATEGIC IMPACT INITIATIVES (Authentic Field Projects)
          ========================================================================= */}
      <section id="campaigns" className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold uppercase tracking-wider">
              {t("fieldInitiatives.badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              {t("fieldInitiatives.titlePart1")}
              <span className="text-gradient-accent">
                {t("fieldInitiatives.titlePart2")}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              {t("fieldInitiatives.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Initiative 1 */}
            <div className="bg-white rounded-3xl border border-purple-100 shadow-[0_10px_30px_-5px_rgba(123,2,246,0.06)] hover:shadow-2xl overflow-hidden transition-all duration-300 flex flex-col group">
              <div className="relative h-60 w-full overflow-hidden bg-purple-50">
                <Image
                  src="/images/disabledperson.jpg"
                  alt={t("fieldInitiatives.item1.imageAlt")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="primary" className="font-bold shadow-sm">
                    {t("fieldInitiatives.item1.badge")}
                  </Badge>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                    {t("fieldInitiatives.item1.title")}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t("fieldInitiatives.item1.description")}
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-purple-50">
                  <div className="space-y-2 text-xs font-medium text-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        weight="fill"
                        className="w-4 h-4 text-emerald-600 shrink-0"
                      />
                      <span>{t("fieldInitiatives.item1.point1")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        weight="fill"
                        className="w-4 h-4 text-emerald-600 shrink-0"
                      />
                      <span>{t("fieldInitiatives.item1.point2")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        weight="fill"
                        className="w-4 h-4 text-emerald-600 shrink-0"
                      />
                      <span>{t("fieldInitiatives.item1.point3")}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <Button
                      href="/donate"
                      variant="primary"
                      size="default"
                      className="w-full font-bold shadow-md hover:shadow-primary-glow"
                    >
                      <Heart weight="fill" className="w-4 h-4 fill-white" />
                      {t("fieldInitiatives.item1.btn")}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Initiative 2 */}
            <div className="bg-white rounded-3xl border border-purple-100 shadow-[0_10px_30px_-5px_rgba(123,2,246,0.06)] hover:shadow-2xl overflow-hidden transition-all duration-300 flex flex-col group">
              <div className="relative h-60 w-full overflow-hidden bg-purple-50">
                <Image
                  src="/images/younggirlwheelchair.avif"
                  alt={t("fieldInitiatives.item2.imageAlt")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="accent" className="font-bold shadow-sm">
                    {t("fieldInitiatives.item2.badge")}
                  </Badge>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                    {t("fieldInitiatives.item2.title")}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t("fieldInitiatives.item2.description")}
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-purple-50">
                  <div className="space-y-2 text-xs font-medium text-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        weight="fill"
                        className="w-4 h-4 text-emerald-600 shrink-0"
                      />
                      <span>{t("fieldInitiatives.item2.point1")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        weight="fill"
                        className="w-4 h-4 text-emerald-600 shrink-0"
                      />
                      <span>{t("fieldInitiatives.item2.point2")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        weight="fill"
                        className="w-4 h-4 text-emerald-600 shrink-0"
                      />
                      <span>{t("fieldInitiatives.item2.point3")}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <Button
                      href="/donate"
                      variant="primary"
                      size="default"
                      className="w-full font-bold shadow-md hover:shadow-primary-glow"
                    >
                      <Heart weight="fill" className="w-4 h-4 fill-white" />
                      {t("fieldInitiatives.item2.btn")}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Initiative 3 */}
            <div className="bg-white rounded-3xl border border-purple-100 shadow-[0_10px_30px_-5px_rgba(123,2,246,0.06)] hover:shadow-2xl overflow-hidden transition-all duration-300 flex flex-col group">
              <div className="relative h-60 w-full overflow-hidden bg-purple-50">
                <Image
                  src="/images/womanchildtalking.avif"
                  alt={t("fieldInitiatives.item3.imageAlt")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="gold" className="font-bold shadow-sm">
                    {t("fieldInitiatives.item3.badge")}
                  </Badge>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                    {t("fieldInitiatives.item3.title")}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t("fieldInitiatives.item3.description")}
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-purple-50">
                  <div className="space-y-2 text-xs font-medium text-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        weight="fill"
                        className="w-4 h-4 text-emerald-600 shrink-0"
                      />
                      <span>{t("fieldInitiatives.item3.point1")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        weight="fill"
                        className="w-4 h-4 text-emerald-600 shrink-0"
                      />
                      <span>{t("fieldInitiatives.item3.point2")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        weight="fill"
                        className="w-4 h-4 text-emerald-600 shrink-0"
                      />
                      <span>{t("fieldInitiatives.item3.point3")}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <Button
                      href="/donate"
                      variant="primary"
                      size="default"
                      className="w-full font-bold shadow-md hover:shadow-primary-glow"
                    >
                      <Heart weight="fill" className="w-4 h-4 fill-white" />
                      {t("fieldInitiatives.item3.btn")}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. FIELD IMPACT & REAL COMMUNITY GALLERY (Showcasing All NGO Photos)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[var(--background-alt)] border-t border-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--foundation-primary-light)] text-[var(--foundation-primary)] text-xs font-extrabold uppercase tracking-wider">
                {t("fieldGallery.badge")}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                {t("fieldGallery.titlePart1")} <br />
                <span className="text-gradient-primary">
                  {t("fieldGallery.titlePart2")}
                </span>
              </h2>
              <p className="text-base text-gray-600">
                {t("fieldGallery.description")}
              </p>
            </div>
            <div>
              <Button
                href="/resources"
                variant="outline"
                size="lg"
                className="font-bold border-2 border-[var(--foundation-primary)] text-[var(--foundation-primary)] bg-white hover:bg-purple-50"
              >
                {t("fieldGallery.viewFullBtn")}
                <ArrowRight weight="bold" className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* 4 Multi-Image Field Showcase Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Story 1 */}
            <Link
              href="/resources"
              className="group bg-white rounded-3xl overflow-hidden border border-purple-100/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-purple-50">
                <Image
                  src="/images/poordisabledafrican.avif"
                  alt={t("fieldGallery.story1.imageAlt")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/95 text-[var(--foundation-primary)] shadow-sm">
                    {t("fieldGallery.story1.badge")}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold mb-1">
                    <MapPin
                      weight="bold"
                      className="w-3.5 h-3.5 text-[var(--foundation-accent)]"
                    />
                    <span>{t("fieldGallery.story1.location")}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[var(--foundation-primary)] transition-colors">
                    {t("fieldGallery.story1.title")}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {t("fieldGallery.story1.description")}
                  </p>
                </div>
                <div className="pt-2 text-xs font-bold text-[var(--foundation-primary)] flex items-center gap-1">
                  <span>{t("fieldGallery.exploreStory")}</span>
                  <ArrowRight
                    weight="bold"
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>

            {/* Story 2 */}
            <Link
              href="/resources"
              className="group bg-white rounded-3xl overflow-hidden border border-purple-100/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-purple-50">
                <Image
                  src="/images/poorwomantalking.avif"
                  alt={t("fieldGallery.story2.imageAlt")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/95 text-amber-800 shadow-sm">
                    {t("fieldGallery.story2.badge")}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold mb-1">
                    <MapPin
                      weight="bold"
                      className="w-3.5 h-3.5 text-[var(--foundation-accent)]"
                    />
                    <span>{t("fieldGallery.story2.location")}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[var(--foundation-primary)] transition-colors">
                    {t("fieldGallery.story2.title")}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {t("fieldGallery.story2.description")}
                  </p>
                </div>
                <div className="pt-2 text-xs font-bold text-[var(--foundation-primary)] flex items-center gap-1">
                  <span>{t("fieldGallery.exploreStory")}</span>
                  <ArrowRight
                    weight="bold"
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>

            {/* Story 3 */}
            <Link
              href="/resources"
              className="group bg-white rounded-3xl overflow-hidden border border-purple-100/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-purple-50">
                <Image
                  src="/images/youngchildthatcantwalk.webp"
                  alt={t("fieldGallery.story3.imageAlt")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/95 text-emerald-700 shadow-sm">
                    {t("fieldGallery.story3.badge")}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold mb-1">
                    <MapPin
                      weight="bold"
                      className="w-3.5 h-3.5 text-[var(--foundation-accent)]"
                    />
                    <span>{t("fieldGallery.story3.location")}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[var(--foundation-primary)] transition-colors">
                    {t("fieldGallery.story3.title")}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {t("fieldGallery.story3.description")}
                  </p>
                </div>
                <div className="pt-2 text-xs font-bold text-[var(--foundation-primary)] flex items-center gap-1">
                  <span>{t("fieldGallery.exploreStory")}</span>
                  <ArrowRight
                    weight="bold"
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>

            {/* Story 4 */}
            <Link
              href="/resources"
              className="group bg-white rounded-3xl overflow-hidden border border-purple-100/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-purple-50">
                <Image
                  src="/images/teacherandchild.jpg"
                  alt={t("fieldGallery.story4.imageAlt")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/95 text-rose-700 shadow-sm">
                    {t("fieldGallery.story4.badge")}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold mb-1">
                    <MapPin
                      weight="bold"
                      className="w-3.5 h-3.5 text-[var(--foundation-accent)]"
                    />
                    <span>{t("fieldGallery.story4.location")}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[var(--foundation-primary)] transition-colors">
                    {t("fieldGallery.story4.title")}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {t("fieldGallery.story4.description")}
                  </p>
                </div>
                <div className="pt-2 text-xs font-bold text-[var(--foundation-primary)] flex items-center gap-1">
                  <span>{t("fieldGallery.exploreStory")}</span>
                  <ArrowRight
                    weight="bold"
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. VOLUNTEER & COMMUNITY ACTION BANNER
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#7B02F6]/10 via-[#F59E0B]/15 to-[#7B02F6]/10 border border-purple-200/60 p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[var(--foundation-primary)] text-xs font-extrabold uppercase tracking-wider">
                  {t("volunteerBanner.badge")}
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
                  {t("volunteerBanner.titlePart1")} <br />
                  {t("volunteerBanner.titlePart2")}
                </h2>
                <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl leading-relaxed">
                  {t("volunteerBanner.description")}
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Button
                    href="/contact#membership"
                    variant="primary"
                    size="lg"
                    className="font-bold shadow-md"
                  >
                    {t("volunteerBanner.membershipBtn")}
                  </Button>
                  <Button
                    href="/contact#volunteer"
                    variant="outline"
                    size="lg"
                    className="font-bold bg-white/80 border-2 border-[var(--foundation-primary)] text-[var(--foundation-primary)]"
                  >
                    {t("volunteerBanner.volunteerBtn")}
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden shadow-lg ring-4 ring-white">
                  <Image
                    src="/images/disablechildrenandmothers.jpg"
                    alt={t("volunteerBanner.imageAlt")}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
