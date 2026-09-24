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
                  has the opportunity to live, learn, and thrive globally through
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
                  in Canada, Cameroon & Worldwide
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
                Culturally rooted, grassroots solutions tailored to the needs of local communities in Canada, Cameroon & Worldwide.
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
                disabilities and their families across communities in Canada, Cameroon, and worldwide.
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
              barriers faced by children with disabilities across communities in Canada, Cameroon, and worldwide.
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
                    <span>Littoral Region, Cameroon</span>
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
                    <span>Littoral & Centre Regions, Cameroon</span>
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
                    <span>Douala Centre, Littoral Region, Cameroon</span>
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
          8. VOLUNTEER & COMMUNITY ACTION BANNER
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
                  Join our dedicated volunteer network or apply for community membership
                  to help shape inclusive programs for children across communities in Canada, Cameroon, and worldwide.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary" size="lg" className="font-bold shadow-md">
                    Apply for Community Membership
                  </Button>
                  <Button href="/contact" variant="outline" size="lg" className="font-bold bg-white/80 border-2 border-[var(--foundation-primary)] text-[var(--foundation-primary)]">
                    Join as Community Volunteer
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
