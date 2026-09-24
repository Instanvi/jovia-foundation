"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Play,
  ArrowRight,
  Sparkle,
  ShieldCheck,
  CheckCircle,
  Users,
  GraduationCap,
  Heartbeat,
  Drop,
  ForkKnife,
  Smiley,
  Globe,
  Medal,
  BookOpen,
  TrendUp,
  HandHeart,
  Envelope,
  Phone,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export default function Home() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedCause, setSelectedCause] = useState<string>(
    "General Disability Inclusion & Relief"
  );
  const [donationSubmitted, setDonationSubmitted] = useState(false);

  const effectiveAmount =
    selectedAmount === "custom" ? Number(customAmount) || 0 : selectedAmount;

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDonationSubmitted(true);
    setTimeout(() => {
      setDonationSubmitted(false);
    }, 4000);
  };

  return (
    <>
      {/* =========================================================================
          1. HERO SECTION (Liliane Fonds Inspired - Clean, Warm & Human)
          ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden hero-gradient-canvas">
        <div className="hero-mesh-glow" />
        <div className="pattern-dots absolute inset-0 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-8 animate-fade-in">

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-[var(--foreground)]">
                Building Hope. <br />
                Creating <span className="text-gradient-accent">Change.</span> <br />
                Transforming Lives.
              </h1>

              <div className="space-y-2">
                <p className="text-lg sm:text-xl font-bold text-[var(--foundation-primary)]">
                  Every Child. Every Ability. Every Opportunity.
                </p>
                <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed max-w-2xl">
                  Together, we build an inclusive world where every child and youth with disabilities
                  has the opportunity to live, learn, and thrive across Canada and Cameroon through
                  education, healthcare, assistive supports, and family empowerment.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href="#donate"
                  variant="primary"
                  size="xl"
                  className="gap-2.5 font-bold shadow-lg hover:shadow-primary-glow"
                >
                  <Heart weight="fill" className="w-5 h-5 fill-white animate-heart-beat" />
                  Donate Now
                </Button>

                <Button
                  href="/about"
                  variant="outline"
                  size="xl"
                  className="gap-2.5 font-bold bg-white/90 border-2 border-[var(--foundation-primary)] text-[var(--foundation-primary)]"
                >
                  <BookOpen weight="bold" className="w-5 h-5 text-[var(--foundation-accent)]" />
                  Explore Our Work
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
                        alt={`Supporter ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-xs sm:text-sm text-[var(--foreground-muted)]">
                  <span className="font-extrabold text-[var(--foreground)]">Dedicated to Every Child</span>{" "}
                  across Canada & Cameroon
                </div>
              </div>
            </div>

            {/* Right Visual Column (5 cols) - Clean, Balanced 2x2 Photo Grid */}
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
                      alt="Pediatric Wheelchair Freedom"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5">
                      <span className="text-[11px] font-bold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        Mobility Freedom
                      </span>
                    </div>
                  </div>

                  {/* Photo 2: Pediatric Care */}
                  <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden shadow-md border border-purple-100 group">
                    <Image
                      src="/images/nursechild.avif"
                      alt="Pediatric Healthcare and Care"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5">
                      <span className="text-[11px] font-bold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        Pediatric Care
                      </span>
                    </div>
                  </div>

                  {/* Photo 3: Adaptive Education */}
                  <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden shadow-md border border-purple-100 group">
                    <Image
                      src="/images/disabledperson.jpg"
                      alt="Adaptive Education and Literacy"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5">
                      <span className="text-[11px] font-bold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        Inclusive Education
                      </span>
                    </div>
                  </div>

                  {/* Photo 4: Caregiver Connection */}
                  <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden shadow-md border border-purple-100 group">
                    <Image
                      src="/images/womanchildtalking.avif"
                      alt="Caregiver and Family Support"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5">
                      <span className="text-[11px] font-bold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        Family Respite
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
              <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">Transparent</h3>
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                100% financial and operational transparency in how donations and field supplies are allocated.
              </p>
            </div>

            {/* Card 2: Accountable */}
            <div className="p-8 bg-white rounded-3xl border border-purple-50 shadow-[0_4px_20px_-4px_rgba(123,2,246,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 text-[var(--foundation-primary)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck weight="bold" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">Accountable</h3>
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                We answer directly to our children, families, members, donors, and governing boards.
              </p>
            </div>

            {/* Card 3: Community Driven */}
            <div className="p-8 bg-white rounded-3xl border border-purple-50 shadow-[0_4px_20px_-4px_rgba(123,2,246,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Users weight="bold" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">Community Driven</h3>
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                Culturally rooted, grassroots solutions tailored to the needs of local communities in Canada & Cameroon.
              </p>
            </div>

            {/* Card 4: Proven Impact */}
            <div className="p-8 bg-white rounded-3xl border border-purple-50 shadow-[0_4px_20px_-4px_rgba(123,2,246,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group">
              <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Medal weight="bold" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">Proven Impact</h3>
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                Measurable, life-changing outcomes in education, rehabilitation, and family resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CORE FOUNDATION FOCUS STRIP
          ========================================================================= */}
      <section className="py-12 bg-white border-y border-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foundation-primary)]">
                <Medal weight="bold" className="w-7 h-7 sm:w-9 sm:h-9" />
                5 Pillars
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[var(--foreground-muted)]">
                Education, Health, Respite, Inclusion & Relief
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foundation-accent)]">
                <Globe weight="bold" className="w-7 h-7 sm:w-9 sm:h-9" />
                2 Chapters
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[var(--foreground-muted)]">
                Canada & Cameroon Operational Programs
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-600">
                <ShieldCheck weight="bold" className="w-7 h-7 sm:w-9 sm:h-9" />
                100%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[var(--foreground-muted)]">
                Non-Profit Public Benefit Purpose
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-800">
                <Heart weight="fill" className="w-7 h-7 sm:w-9 sm:h-9" />
                0 Stigma
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[var(--foreground-muted)]">
                Unwavering Dignity & Inclusion for Every Child
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. ABOUT JOVIA SPOTLIGHT ("Empowering Communities. Inspiring Inclusion.")
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
                    alt="African Child with Disability Supported by JOVIA"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
                    <div className="space-y-1 text-white">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--foundation-primary)] text-white inline-block shadow-sm">
                        Grassroots Mission
                      </span>
                      <p className="text-sm font-bold">
                        Reaching underserved children with assistive equipment & adaptive schooling
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--foundation-primary-light)] text-[var(--foundation-primary)] text-xs font-extrabold uppercase tracking-wider">
                About Jovia Foundation
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
                Empowering Communities. <br />
                <span className="text-gradient-primary">Inspiring Inclusion.</span>
              </h2>

              <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
                JOVIA Foundation is a registered humanitarian non-profit organization dedicated to
                improving the lives, health, dignity, and opportunities of children and youth with
                disabilities and their families across Canada and Cameroon.
              </p>

              {/* 4 Key Checklist Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Inclusive education and adaptive learning tools for every child",
                  "Assistive devices, mobility carts & pediatric physical therapy",
                  "Caregiver support, family respite & economic livelihood grants",
                  "Disability rights advocacy, anti-stigma campaigns & inclusion",
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
                <Button href="/about" variant="primary" size="lg" className="font-bold">
                  Learn More About Us
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="font-bold border-2 border-[var(--foundation-primary)] text-[var(--foundation-primary)]"
                >
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. 5 CORE PROGRAM PILLARS (Centered 3 + 2 Balanced Layout)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[var(--background-alt)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--foundation-primary-light)] text-[var(--foundation-primary)] text-xs font-extrabold uppercase tracking-wider">
              Our 5 Core Program Pillars
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              Programs That Create <span className="text-gradient-primary">Lasting Change</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Delivering holistic, human rights-centered programs directly addressing the systemic
              barriers faced by children with disabilities across Canada and Cameroon.
            </p>
          </div>

          {/* Top Row: 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Child Development & Education",
                icon: GraduationCap,
                color: "bg-purple-100 text-[var(--foundation-primary)]",
                desc: "Adaptive education, accessible classrooms, communication tools, literacy supports, and scholarships.",
              },
              {
                title: "Health & Mobility Supports",
                icon: Heartbeat,
                color: "bg-amber-100 text-amber-700",
                desc: "Wheelchairs, all-terrain mobility carts, pediatric physiotherapy, and specialized healthcare access.",
              },
              {
                title: "Family Support & Empowerment",
                icon: Users,
                color: "bg-emerald-100 text-emerald-700",
                desc: "Caregiver peer support, respite programs, navigation resources, and livelihood micro-grants for mothers.",
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
                      Learn More
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
                title: "Inclusion & Community Participation",
                icon: Smiley,
                color: "bg-rose-100 text-rose-700",
                desc: "Inclusive recreation, social integration, accessibility education, and breaking disability stigma.",
              },
              {
                title: "Poverty Relief & Cameroon Centre",
                icon: Drop,
                color: "bg-blue-100 text-blue-700",
                desc: "Necessities of life assistance and the establishment of a dedicated rehabilitation & learning hub in Cameroon.",
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
                      Learn More
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
          6. STRATEGIC IMPACT INITIATIVES (Authentic Field Projects)
          ========================================================================= */}
      <section id="campaigns" className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold uppercase tracking-wider">
              Strategic Impact Initiatives
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              Our Core <span className="text-gradient-accent">Field Programs</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Measurable, sustainable solutions designed to break isolation, open classroom doors,
              and build long-term independence for children with disabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Initiative 1 */}
            <div className="bg-white rounded-3xl border border-purple-100 shadow-[0_10px_30px_-5px_rgba(123,2,246,0.06)] hover:shadow-2xl overflow-hidden transition-all duration-300 flex flex-col group">
              <div className="relative h-60 w-full overflow-hidden bg-purple-50">
                <Image
                  src="/images/disabledperson.jpg"
                  alt="Inclusive Education & Adaptive Classrooms"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="primary" className="font-bold shadow-sm">
                    Education & Literacy
                  </Badge>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                    Accessible Classrooms & Adaptive Learning
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Constructing accessible ramps, providing adaptive desks, speech devices, and teacher training to ensure children with disabilities thrive in mainstream schools.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-purple-50">
                  <div className="space-y-2 text-xs font-medium text-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Wheelchair-accessible ramps & wide doors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Tactile & large-print learning kits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Educator inclusive-teaching workshops</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <Button
                      href="#donate"
                      variant="primary"
                      size="default"
                      className="w-full font-bold shadow-md hover:shadow-primary-glow"
                    >
                      <Heart weight="fill" className="w-4 h-4 fill-white" />
                      Support Education
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
                  alt="Pediatric Wheelchairs & Mobility Supports"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="accent" className="font-bold shadow-sm">
                    Health & Mobility
                  </Badge>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                    All-Terrain Mobility Carts & Therapy
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Distributing rugged mobility carts, customized pediatric wheelchairs, and delivering qualified pediatric physiotherapy in rural and urban communities.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-purple-50">
                  <div className="space-y-2 text-xs font-medium text-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Rugged hand-powered carts for unpaved terrain</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Pediatric physical therapy sessions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Custom postural seating & orthotics</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <Button
                      href="#donate"
                      variant="primary"
                      size="default"
                      className="w-full font-bold shadow-md hover:shadow-primary-glow"
                    >
                      <Heart weight="fill" className="w-4 h-4 fill-white" />
                      Support Mobility
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
                  alt="Caregiver Mother and Child Support"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="gold" className="font-bold shadow-sm">
                    Family Respite & Livelihoods
                  </Badge>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                    Caregiver Respite & Micro-Grants
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Supporting mothers and caregivers through peer respite groups, nutritional assistance, and livelihood micro-grants to ensure whole-family resilience.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-purple-50">
                  <div className="space-y-2 text-xs font-medium text-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Caregiver peer support & respite circles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Small business seed grants for mothers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Household nutritional and food security packs</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <Button
                      href="#donate"
                      variant="primary"
                      size="default"
                      className="w-full font-bold shadow-md hover:shadow-primary-glow"
                    >
                      <Heart weight="fill" className="w-4 h-4 fill-white" />
                      Support Caregivers
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6.5 FIELD IMPACT & REAL COMMUNITY GALLERY (Showcasing All NGO Photos)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[var(--background-alt)] border-t border-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--foundation-primary-light)] text-[var(--foundation-primary)] text-xs font-extrabold uppercase tracking-wider">
                Real Community Moments
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                Witnessing Real Change <br />
                <span className="text-gradient-primary">Across Canada & Cameroon</span>
              </h2>
              <p className="text-base text-gray-600">
                Every photograph reflects genuine field work: adaptive classrooms, wheelchair mobility freedom, caregiver support, and pediatric healthcare.
              </p>
            </div>
            <div>
              <Button
                href="/resources"
                variant="outline"
                size="lg"
                className="font-bold border-2 border-[var(--foundation-primary)] text-[var(--foundation-primary)] bg-white hover:bg-purple-50"
              >
                View Full Media Gallery (11 Stories)
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
                  alt="Rural Community Outreach"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/95 text-[var(--foundation-primary)] shadow-sm">
                    Grassroots Outreach
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold mb-1">
                    <MapPin weight="bold" className="w-3.5 h-3.5 text-[var(--foundation-accent)]" />
                    <span>Mezam Division, Cameroon</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[var(--foundation-primary)] transition-colors">
                    Rural Disability Direct Aid
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Delivering vital supplies, assistive devices, and barrier-breaking support to remote villages.
                  </p>
                </div>
                <div className="pt-2 text-xs font-bold text-[var(--foundation-primary)] flex items-center gap-1">
                  <span>Explore Story</span>
                  <ArrowRight weight="bold" className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
                  alt="Caregiver Mother Respite"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/95 text-amber-800 shadow-sm">
                    Caregiver Circles
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold mb-1">
                    <MapPin weight="bold" className="w-3.5 h-3.5 text-[var(--foundation-accent)]" />
                    <span>Douala, Cameroon</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[var(--foundation-primary)] transition-colors">
                    Mother Empowerment Respite
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Livelihood counseling and peer mental wellness groups for dedicated caregiver mothers.
                  </p>
                </div>
                <div className="pt-2 text-xs font-bold text-[var(--foundation-primary)] flex items-center gap-1">
                  <span>Explore Story</span>
                  <ArrowRight weight="bold" className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
                  alt="Early Mobility & Rehabilitation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/95 text-emerald-700 shadow-sm">
                    Mobility Tech
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold mb-1">
                    <MapPin weight="bold" className="w-3.5 h-3.5 text-[var(--foundation-accent)]" />
                    <span>Northwest Region, Cameroon</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[var(--foundation-primary)] transition-colors">
                    All-Terrain Cart Logistics
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Rugged carts engineered specifically for rough unpaved roads, giving children daily school access.
                  </p>
                </div>
                <div className="pt-2 text-xs font-bold text-[var(--foundation-primary)] flex items-center gap-1">
                  <span>Explore Story</span>
                  <ArrowRight weight="bold" className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
                  alt="Educator Inclusive Training"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/95 text-rose-700 shadow-sm">
                    Inclusive Schools
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold mb-1">
                    <MapPin weight="bold" className="w-3.5 h-3.5 text-[var(--foundation-accent)]" />
                    <span>Bamenda Centre, Cameroon</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[var(--foundation-primary)] transition-colors">
                    Teacher Adaptive Training
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Equipping mainstream educators with skills to welcome and teach children of all abilities.
                  </p>
                </div>
                <div className="pt-2 text-xs font-bold text-[var(--foundation-primary)] flex items-center gap-1">
                  <span>Explore Story</span>
                  <ArrowRight weight="bold" className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. EMBEDDED DIRECT DONATION & GIVING SECTION (No Popups!)
          ========================================================================= */}
      <section id="donate" className="py-20 lg:py-28 bg-gradient-to-br from-purple-50 via-white to-amber-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--foundation-primary)]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--foundation-accent)]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-200 shadow-sm">
              <Heart weight="fill" className="w-4 h-4 text-[var(--foundation-primary)]" />
              <span className="text-sm font-bold text-[var(--foundation-primary)]">Direct Community Giving</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)]">
              Make a Direct Impact Today
            </h2>
            <p className="text-base sm:text-lg text-[var(--foreground-muted)]">
              100% of your tax-deductible gift goes towards education, mobility equipment, and
              care for children with disabilities in Canada and Cameroon.
            </p>
          </div>

          {donationSubmitted ? (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-3xl border-2 border-emerald-200 shadow-2xl p-8 sm:p-12 text-center space-y-6 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle weight="fill" className="w-12 h-12" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
                    Thank You for Your Generosity!
                  </h3>
                  <p className="text-base text-[var(--foreground-muted)] max-w-lg mx-auto">
                    Your pledge of <span className="font-bold text-[var(--foundation-primary)]">${effectiveAmount}</span> ({frequency === "monthly" ? "Monthly" : "One-Time"}) for <span className="font-bold">{selectedCause}</span> has been received.
                  </p>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    An official donation receipt will be emailed to you shortly.
                  </p>
                </div>
                <Button
                  onClick={() => setDonationSubmitted(false)}
                  variant="outline"
                  size="lg"
                  className="font-bold border-2 border-[var(--foundation-primary)] text-[var(--foundation-primary)]"
                >
                  Make Another Donation
                </Button>
              </div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl border border-purple-100 shadow-2xl overflow-hidden">
                <form onSubmit={handleDonationSubmit}>
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Left Column - Donation Form */}
                    <div className="lg:col-span-2 p-8 sm:p-10 space-y-8">
                      {/* Frequency Toggle */}
                      <div className="space-y-3">
                        <Label className="block text-sm font-bold text-[var(--foreground)]">
                          Donation Frequency
                        </Label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setFrequency("one-time")}
                            className={`py-4 px-6 rounded-xl border-2 text-sm font-bold transition-all ${
                              frequency === "one-time"
                                ? "border-[var(--foundation-primary)] bg-[var(--foundation-primary-light)] text-[var(--foundation-primary)] shadow-md"
                                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                            }`}
                          >
                            <div className="flex flex-col items-center gap-1">
                              <span>One-Time Gift</span>
                            </div>
                          </button>
                          <button
                            type="button"
                            onClick={() => setFrequency("monthly")}
                            className={`py-4 px-6 rounded-xl border-2 text-sm font-bold transition-all ${
                              frequency === "monthly"
                                ? "border-[var(--foundation-primary)] bg-[var(--foundation-primary)] text-white shadow-md"
                                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                            }`}
                          >
                            <div className="flex flex-col items-center gap-1">
                              <span>Monthly Giving</span>
                              <span className="text-xs opacity-80">Sustaining Impact</span>
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Amount Selection */}
                      <div className="space-y-3">
                        <Label className="block text-sm font-bold text-[var(--foreground)]">
                          Select Amount (USD/CAD)
                        </Label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {[25, 50, 100, 250].map((amt) => (
                            <button
                              key={amt}
                              type="button"
                              onClick={() => {
                                setSelectedAmount(amt);
                                setCustomAmount("");
                              }}
                              className={`py-4 px-4 rounded-xl border-2 text-center transition-all ${
                                selectedAmount === amt
                                  ? "border-[var(--foundation-primary)] bg-[var(--foundation-primary-light)] text-[var(--foundation-primary)] font-extrabold shadow-md scale-105"
                                  : "border-gray-200 bg-white text-gray-700 font-bold hover:border-gray-300 hover:scale-102"
                              }`}
                            >
                              <div className="text-2xl font-bold">${amt}</div>
                            </button>
                          ))}
                        </div>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg font-bold">$</span>
                          <Input
                            type="number"
                            min="5"
                            placeholder="Other amount"
                            value={customAmount}
                            onChange={(e) => {
                              setCustomAmount(e.target.value);
                              setSelectedAmount("custom");
                            }}
                            className="pl-8 py-6 text-lg font-bold border-2 rounded-xl focus:border-[var(--foundation-primary)] focus:ring-2 focus:ring-[var(--foundation-primary)]/20"
                          />
                        </div>
                      </div>

                      {/* Cause Selection */}
                      <div className="space-y-3">
                        <Label htmlFor="cause" className="block text-sm font-bold text-[var(--foreground)]">
                          Designate Your Donation
                        </Label>
                        <select
                          id="cause"
                          value={selectedCause}
                          onChange={(e) => setSelectedCause(e.target.value)}
                          className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-base font-semibold text-gray-700 focus:outline-none focus:border-[var(--foundation-primary)] focus:ring-2 focus:ring-[var(--foundation-primary)]/20 transition-all cursor-pointer"
                        >
                          <option value="General Disability Inclusion & Relief">
                            Where Needed Most (General Fund)
                          </option>
                          <option value="Inclusive Classrooms & School Access">
                            Inclusive Classrooms & School Accessibility
                          </option>
                          <option value="Mobility Carts, Wheelchairs & Assistive Tech">
                            Mobility Carts, Wheelchairs & Assistive Tech
                          </option>
                          <option value="Pediatric Healthcare & Rehabilitation">
                            Pediatric Healthcare & Physical Rehabilitation
                          </option>
                          <option value="Caregiver & Family Livelihoods">
                            Caregiver Livelihoods & Food Security
                          </option>
                        </select>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="primary"
                        size="xl"
                        className="w-full font-extrabold text-lg py-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
                      >
                        <Heart weight="fill" className="w-6 h-6 fill-white" />
                        Complete Donation: ${effectiveAmount || 50} {frequency === "monthly" ? "/ Month" : ""}
                      </Button>

                      {/* Security Badges */}
                      <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs text-gray-500 border-t border-gray-100">
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck weight="fill" className="w-4 h-4 text-emerald-600" />
                          Secure Payment
                        </span>
                        <span className="text-gray-300">|</span>
                        <span className="flex items-center gap-1.5">
                          <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600" />
                          Tax Receipt Included
                        </span>
                        <span className="text-gray-300">|</span>
                        <span className="flex items-center gap-1.5">
                          <Heart weight="fill" className="w-4 h-4 text-[var(--foundation-primary)]" />
                          100% to Programs
                        </span>
                      </div>
                    </div>

                    {/* Right Column - Impact Summary */}
                    <div className="lg:col-span-1 bg-gradient-to-br from-purple-50 to-purple-100/50 p-8 sm:p-10 flex flex-col justify-center space-y-6 border-l border-purple-200">
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-[var(--foreground)]">Your Impact</h3>
                        <p className="text-sm text-[var(--foreground-muted)]">
                          Every dollar creates tangible change for children with disabilities.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-purple-200/50 shadow-sm">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 text-[var(--foundation-primary)] flex items-center justify-center shrink-0">
                            <GraduationCap weight="bold" className="w-5 h-5" />
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm font-bold text-[var(--foreground)]">$50</div>
                            <div className="text-xs text-[var(--foreground-muted)]">Provides adaptive learning materials for one child</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-purple-200/50 shadow-sm">
                          <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                            <Heartbeat weight="bold" className="w-5 h-5" />
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm font-bold text-[var(--foreground)]">$250</div>
                            <div className="text-xs text-[var(--foreground-muted)]">Funds pediatric physiotherapy sessions</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-purple-200/50 shadow-sm">
                          <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                            <Users weight="bold" className="w-5 h-5" />
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm font-bold text-[var(--foreground)]">$500+</div>
                            <div className="text-xs text-[var(--foreground-muted)]">Supplies an all-terrain mobility cart</div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-purple-200">
                        <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                          Monthly donors provide predictable funding that allows us to plan long-term programs and reach more families.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          8. VOLUNTEER & MEMBERSHIP ACTION BANNER
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#7B02F6]/10 via-[#F59E0B]/15 to-[#7B02F6]/10 border border-purple-200/60 p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[var(--foundation-primary)] text-xs font-extrabold uppercase tracking-wider">
                  Join Our Foundation
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
                  Be the Change. <br />
                  Volunteer or Become a Member!
                </h2>
                <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-xl leading-relaxed">
                  Join our voting membership (CAD $100/year) or register as a passionate volunteer
                  to help shape inclusive programs for children across Canada and Cameroon.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Button href="/contact#membership" variant="primary" size="lg" className="font-bold shadow-md">
                    Apply for Membership (CAD $100)
                  </Button>
                  <Button href="/contact#volunteer" variant="outline" size="lg" className="font-bold bg-white/80 border-2 border-[var(--foundation-primary)] text-[var(--foundation-primary)]">
                    Join as Volunteer
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden shadow-lg ring-4 ring-white">
                  <Image
                    src="/images/disablechildrenandmothers.jpg"
                    alt="Volunteers, families and children"
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
