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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--foundation-primary-light)] text-[var(--foundation-primary)] rounded-full text-xs sm:text-sm font-extrabold shadow-sm border border-[var(--foundation-primary)]/20">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--foundation-accent)] animate-pulse" />
                Joseph's Opportunities, Values, Inclusion & Ability
              </div>

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
                    "/images/team2.png",
                    "/images/consulting-team.jpg",
                    "/images/man-woman.jpg",
                    "/images/handshake.jpg",
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
                  <span className="font-extrabold text-[var(--foreground)]">Join 25,000+</span>{" "}
                  supporters, families & partners in Canada & Cameroon
                </div>
              </div>
            </div>

            {/* Right Visual Column (5 cols) - Liliane Fonds Style Multi-photo Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -top-6 -left-6 w-36 h-36 bg-[var(--foundation-primary)]/15 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-[var(--foundation-accent)]/20 rounded-full blur-3xl" />

                <div className="relative rounded-3xl p-4 sm:p-6 bg-white border border-purple-100 shadow-2xl">
                  {/* Photo Collage */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-sm">
                      <Image
                        src="/images/consulting-team.jpg"
                        alt="Community & Children"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-sm">
                      <Image
                        src="/images/meeting.jpg"
                        alt="Inclusive Education Classroom"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative h-40 rounded-2xl overflow-hidden shadow-sm">
                      <Image
                        src="/images/deliveryboy.jpg"
                        alt="Mobility Aid Distribution"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative h-40 rounded-2xl overflow-hidden shadow-sm bg-gradient-to-br from-[#7B02F6] to-[#490096] p-4 flex flex-col justify-between text-white">
                      <span className="text-xs font-bold text-amber-300">#EveryAbility</span>
                      <div>
                        <div className="text-2xl font-extrabold text-white">100%</div>
                        <div className="text-[11px] text-purple-200">Dignity & Inclusion</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Metric Badge */}
                  <div className="absolute -bottom-4 -left-4 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-purple-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--foundation-primary-light)] text-[var(--foundation-primary)] flex items-center justify-center font-extrabold text-sm">
                      <Medal weight="fill" className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--foreground)]">
                        1,200+ Children
                      </div>
                      <div className="text-[11px] text-[var(--foreground-muted)]">
                        Supported with Direct Aid
                      </div>
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
          3. LIVE IMPACT NUMBERS STRIP
          ========================================================================= */}
      <section className="py-12 bg-white border-y border-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foundation-primary)]">
                <Users weight="bold" className="w-7 h-7 sm:w-9 sm:h-9" />
                2.4M+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[var(--foreground-muted)]">
                Lives Reached & Impacted
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foundation-accent)]">
                <BookOpen weight="bold" className="w-7 h-7 sm:w-9 sm:h-9" />
                1,200+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[var(--foreground-muted)]">
                Inclusive Schools & Communities
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-600">
                <Heart weight="fill" className="w-7 h-7 sm:w-9 sm:h-9" />
                3,500+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[var(--foreground-muted)]">
                Volunteers & Advocates Engaged
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-800">
                <TrendUp weight="bold" className="w-7 h-7 sm:w-9 sm:h-9" />
                $12M+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[var(--foreground-muted)]">
                Aid & Assistive Devices Mobilized
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
            {/* Left Photo Collage (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--foundation-primary-light)] to-[var(--foundation-accent-light)] rounded-full blur-xl opacity-80" />

                <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full ring-8 ring-white shadow-2xl overflow-hidden bg-purple-50">
                  <Image
                    src="/images/man-woman.jpg"
                    alt="Community & Youth Support"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute -top-4 -right-2 w-28 h-28 sm:w-32 sm:h-32 rounded-full ring-4 ring-white shadow-xl overflow-hidden bg-purple-50">
                  <Image
                    src="/images/handshake.jpg"
                    alt="Partnership and care"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute -bottom-4 -left-2 w-28 h-28 sm:w-32 sm:h-32 rounded-full ring-4 ring-white shadow-xl overflow-hidden bg-purple-50">
                  <Image
                    src="/images/meeting.jpg"
                    alt="Inclusive Education"
                    fill
                    className="object-cover"
                  />
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
                  src="/images/meeting.jpg"
                  alt="Inclusive Education & Classrooms"
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
                  src="/images/deliveryboy.jpg"
                  alt="All-Terrain Mobility Devices"
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
                  src="/images/handshake.jpg"
                  alt="Caregiver Empowerment & Respite"
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
          7. EMBEDDED DIRECT DONATION & GIVING SECTION (No Popups!)
          ========================================================================= */}
      <section id="donate" className="py-20 lg:py-28 bg-[var(--background-alt)] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-purple-100 shadow-xl p-8 sm:p-12 space-y-8">
            <div className="text-center space-y-2">
              <Badge variant="default" className="font-bold">
                Direct Community Giving
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)]">
                Make a Direct Contribution Today
              </h2>
              <p className="text-sm sm:text-base text-[var(--foreground-muted)] max-w-xl mx-auto">
                100% of your tax-deductible gift goes towards education, mobility equipment, and
                care for children with disabilities in Canada and Cameroon.
              </p>
            </div>

            {donationSubmitted ? (
              <div className="p-8 bg-purple-50 rounded-2xl border border-purple-200 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[var(--foundation-primary)] text-white flex items-center justify-center mx-auto">
                  <CheckCircle weight="fill" className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--foreground)]">
                  Thank You for Your Generosity!
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] max-w-md mx-auto">
                  Your pledge of ${effectiveAmount} ({frequency}) for {selectedCause} has been
                  received. An official donation receipt will be emailed to you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDonationSubmit} className="space-y-6">
                {/* One-Time vs Monthly Toggle */}
                <div className="grid grid-cols-2 p-1.5 bg-[var(--surface)] rounded-full border border-purple-100 max-w-md mx-auto">
                  <button
                    type="button"
                    onClick={() => setFrequency("one-time")}
                    className={`py-2.5 text-sm font-bold rounded-full transition-all ${
                      frequency === "one-time"
                        ? "bg-white text-[var(--foundation-primary)] shadow-sm"
                        : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    Give Once
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency("monthly")}
                    className={`py-2.5 text-sm font-bold rounded-full transition-all flex items-center justify-center gap-1.5 ${
                      frequency === "monthly"
                        ? "bg-[var(--foundation-primary)] text-white shadow-sm"
                        : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    <Sparkle weight="fill" className="w-4 h-4 text-amber-300" />
                    Monthly Hero
                  </button>
                </div>

                {/* Amount Selection */}
                <div>
                  <Label className="block mb-2 text-xs font-bold uppercase tracking-wider text-[var(--foreground-subtle)] text-center">
                    Select Gift Amount (USD / CAD)
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
                        className={`py-3.5 px-4 rounded-2xl border text-center transition-all ${
                          selectedAmount === amt
                            ? "border-[var(--foundation-primary)] bg-[var(--foundation-primary-light)] text-[var(--foundation-primary)] font-extrabold shadow-sm ring-2 ring-[var(--foundation-primary)]/20"
                            : "border-purple-100 hover:border-purple-300 bg-white text-[var(--foreground)] font-bold"
                        }`}
                      >
                        <span className="text-lg">${amt}</span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-3">
                    <Input
                      type="number"
                      min="5"
                      placeholder="Or enter custom amount (e.g. $500)"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount("custom");
                      }}
                      className="text-center font-bold"
                    />
                  </div>
                </div>

                {/* Cause Selection */}
                <div className="space-y-1.5">
                  <Label htmlFor="cause" className="text-xs font-bold uppercase tracking-wider text-[var(--foreground-subtle)]">
                    Allocate Donation To
                  </Label>
                  <select
                    id="cause"
                    value={selectedCause}
                    onChange={(e) => setSelectedCause(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-purple-100 rounded-2xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--foundation-primary)]/20"
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

                <Button
                  type="submit"
                  variant="primary"
                  size="xl"
                  className="w-full font-extrabold shadow-lg hover:shadow-primary-glow"
                >
                  <Heart weight="fill" className="w-5 h-5 fill-white" />
                  Complete Gift of ${effectiveAmount || 50} {frequency === "monthly" ? "/ Month" : ""}
                </Button>

                <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck weight="fill" className="w-4 h-4 text-emerald-600" />
                    256-Bit SSL Encrypted
                  </span>
                  <span>•</span>
                  <span>Official Charitable Receipt</span>
                  <span>•</span>
                  <span>Direct Field Delivery</span>
                </div>
              </form>
            )}
          </div>
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
                    src="/images/consulting-team.jpg"
                    alt="Volunteers and field team"
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
