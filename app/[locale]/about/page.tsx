"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  CheckCircle,
  ShieldCheck,
  Target,
  Eye,
  Users,
  Medal,
  Globe,
  BookOpen,
  Drop,
  Building,
  Scales,
  FileText,
  Quotes,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-24 bg-gradient-to-b from-[var(--surface)] via-white to-white overflow-hidden">
        <div className="hero-mesh-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 animate-fade-in">
            <Badge variant="default" className="font-bold">
              Organizational Identity & Framework
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Every Child. Every Ability. <br />
              <span className="text-gradient-primary">Every Opportunity.</span>
            </h1>
            <p className="text-lg sm:text-xl font-bold text-[var(--foundation-accent-dark)]">
              "Every Child Deserves a Chance to Thrive."
            </p>
            <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
              JOVIA Foundation (Joseph's Opportunities, Values, Inclusion & Ability) was established
              to create a world where every child with a disability is valued, included, and
              empowered to develop their abilities and reach their potential in Canada, Cameroon, and worldwide.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Button href="/contact#donate" variant="primary" size="lg" className="font-bold">
                <Heart weight="fill" className="w-5 h-5 fill-white" />
                Support Our Mission
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="font-bold bg-white border-2 border-[var(--foundation-primary)] text-[var(--foundation-primary)]">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 1. A Word from the Founder (First Section & Founder Image) */}
      <section id="founder-word" className="py-20 bg-white border-b border-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Founder Image Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--foundation-primary-light)] to-[var(--foundation-accent-light)] rounded-3xl blur-xl opacity-70" />
                <div className="relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-purple-100">
                  <Image
                    src="/images/disabledchildandman.avif"
                    alt="Founder and Inspiration of JOVIA Foundation"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-purple-100">
                    <p className="text-xs font-bold text-[var(--foundation-primary)] uppercase tracking-wider">
                      Leadership & Vision
                    </p>
                    <h3 className="text-lg font-extrabold text-[var(--foreground)] mt-0.5">
                      Founder & Board of Directors
                    </h3>
                    <p className="text-xs font-semibold text-[var(--foreground-muted)]">
                      JOVIA Foundation (Canada & Cameroon)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Word & Letter (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--foundation-primary-light)] text-[var(--foundation-primary)] text-xs font-extrabold uppercase tracking-wider">
                <Quotes weight="fill" className="w-4 h-4 text-[var(--foundation-accent)]" />
                A Word from the Founder
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
                Why We Created <br />
                <span className="text-gradient-primary">JOVIA Foundation</span>
              </h2>

              <blockquote className="p-6 rounded-2xl bg-purple-50/70 border-l-4 border-[var(--foundation-primary)] italic text-base sm:text-lg font-semibold text-[var(--foreground)] leading-relaxed">
                "When we look into the eyes of a child with a disability, we do not see limitations—we see untapped potential, immense strength, and a spirit waiting for an opportunity. JOVIA Foundation was born from love, purpose, and the unwavering belief in human ability."
              </blockquote>

              <div className="space-y-4 text-base text-[var(--foreground-muted)] leading-relaxed">
                <p>
                  Having walked alongside families caring for children with special needs and witnessed firsthand the severe gaps in healthcare, adaptive learning, and social support, we knew that passive empathy was not enough.
                </p>
                <p>
                  Across both Canada and Cameroon, thousands of children with disabilities are kept out of school due to lack of accessible transport, unpaved terrains, or assistive mobility devices. Many mothers carry the heavy emotional and economic weight alone, fighting against systemic neglect and social stigma.
                </p>
                <p>
                  JOVIA Foundation exists to bridge this divide. We are dedicated to ensuring that every child is granted the assistive technology, physical therapy, inclusive schooling, and family respite care they need to live with independence and pride.
                </p>
              </div>

              <div className="pt-4 border-t border-purple-100 flex items-center justify-between">
                <div>
                  <p className="text-base font-extrabold text-[var(--foreground)]">
                    Founder & Leadership Council
                  </p>
                  <p className="text-xs font-medium text-[var(--foreground-muted)]">
                    Joseph's Opportunities, Values, Inclusion & Ability (JOVIA)
                  </p>
                </div>
                <Button href="/contact" variant="primary" size="default" className="font-bold shadow-md">
                  Connect with Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Founding Inspiration & Story */}
      <section id="story" className="py-20 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-purple-100">
                <Image
                  src="/images/poordisabledafrican.avif"
                  alt="Founding Inspiration of JOVIA Foundation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-purple-100">
                  <p className="text-xs font-bold text-[var(--foundation-primary)] uppercase tracking-wider">
                    Our Acronym Meaning
                  </p>
                  <p className="text-sm font-semibold text-[var(--foreground)] mt-0.5">
                    <strong>J</strong>oseph's <strong>O</strong>pportunities, <strong>V</strong>alues,{" "}
                    <strong>I</strong>nclusion & <strong>A</strong>bility
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[var(--foundation-primary)] text-xs font-extrabold uppercase tracking-wider">
                Part A Founding Inspiration
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
                The Inspiration Behind <span className="text-gradient-primary">JOVIA</span>
              </h2>
              <div className="space-y-4 text-base text-[var(--foreground-muted)] leading-relaxed">
                <p>
                  JOVIA Foundation was inspired by Joseph and by the real-life experiences of children
                  with disabilities and their families who face persistent barriers to health,
                  education, development, participation, and family support.
                </p>
                <p>
                  While Joseph’s journey is the heartfelt inspiration for the organization, JOVIA
                  Foundation is established strictly for the <strong>public benefit</strong> of
                  eligible children and families facing disability and poverty rather than for the
                  private benefit of any individual.
                </p>
                <p>
                  Operating with active programs in <strong>Canada and Cameroon</strong>, the
                  Foundation addresses systemic gaps by delivering assistive devices, funding
                  inclusive schooling, providing caregiver relief, and eliminating the stigma that
                  often isolates disabled children from society.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-purple-50">
                <div className="p-4 rounded-2xl bg-[var(--surface)]">
                  <div className="text-2xl font-extrabold text-[var(--foundation-primary)]">
                    Canada & Cameroon
                  </div>
                  <div className="text-xs text-[var(--foreground-muted)] mt-1">
                    Dual active non-profit chapters
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-[var(--surface)]">
                  <div className="text-2xl font-extrabold text-[var(--foundation-accent)]">
                    Public Benefit
                  </div>
                  <div className="text-xs text-[var(--foreground-muted)] mt-1">
                    100% Non-profit charity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section id="vision-mission" className="py-20 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <Badge variant="accent" className="font-bold">
              Vision & Mission
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Our Guiding Principles
            </h2>
            <p className="text-base text-[var(--foreground-muted)]">
              Formal governing mandates adopted under the JOVIA Foundation Constitution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-purple-50 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[var(--foundation-primary)] flex items-center justify-center">
                <Eye weight="bold" className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--foreground)]">Our Vision</h3>
              <p className="text-base text-[var(--foreground-muted)] leading-relaxed">
                A world where every child with a disability is <strong>valued, included and empowered</strong> to develop their abilities and reach their potential, regardless of disability, poverty or social circumstances.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-purple-50 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-[var(--foundation-accent)] flex items-center justify-center">
                <Target weight="bold" className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--foreground)]">Our Mission</h3>
              <p className="text-base text-[var(--foreground-muted)] leading-relaxed">
                JOVIA Foundation works to improve opportunities and quality of life for children and youth with disabilities and their families by improving access to educational, developmental, health-supporting and social programs; providing appropriate resources and supports; strengthening families; promoting dignity and inclusion; and reducing barriers associated with poverty, stigma, exclusion and lack of services, with programs in Canada, Cameroon, and worldwide.
              </p>
            </div>
          </div>

          {/* Photo Pair - Living Our Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg border border-purple-100 group">
              <Image
                src="/images/nursechild.avif"
                alt="Pediatric Healthcare and Clinical Support"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[var(--foundation-primary)] text-white shadow-sm mb-2 inline-block">
                    Pediatric Healthcare
                  </span>
                  <p className="text-sm font-bold text-white">
                    Clinical physiotherapy assessments & specialized rehabilitation therapies
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg border border-purple-100 group">
              <Image
                src="/images/younggirlwheelchair.avif"
                alt="Mobility and Inclusion in Action"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-white shadow-sm mb-2 inline-block">
                    Mobility Freedom
                  </span>
                  <p className="text-sm font-bold text-white">
                    Empowering children with wheelchairs & barrier-free community participation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 8 Core Values */}
      <section id="values" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <Badge variant="default" className="font-bold">
              Ethical Pillars
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Our 8 Core Values
            </h2>
            <p className="text-base text-[var(--foreground-muted)]">
              These eight values govern our conduct, program selection, partnerships, and daily operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Dignity",
                desc: "Every child has inherent worth and must be treated with respect.",
              },
              {
                title: "Opportunity",
                desc: "Children should have meaningful opportunities to learn, communicate, play, develop skills and participate.",
              },
              {
                title: "Compassion",
                desc: "Families should be met with empathy, practical support and respect.",
              },
              {
                title: "Integrity",
                desc: "The Foundation will act transparently, responsibly and in accordance with law.",
              },
              {
                title: "Equity",
                desc: "Support should respond to genuine barriers and needs.",
              },
              {
                title: "Inclusion",
                desc: "Children with disabilities should be able to belong and participate in community life.",
              },
              {
                title: "Ability",
                desc: "Programs will recognize strengths, capabilities and potential rather than defining a child only by disability.",
              },
              {
                title: "Accountability",
                desc: "Funds, property and programs will be governed carefully and used to advance the Foundation's charitable purposes.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[var(--surface)] border border-purple-50 hover:border-[var(--foundation-primary)] hover:bg-white hover:shadow-md transition-all space-y-2 group"
              >
                <div className="text-xs font-bold text-[var(--foundation-primary)]">
                  VALUE 0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--foundation-primary)] transition-colors">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 5 Charitable Objects & Cameroon Centre Initiative */}
      <section id="programs" className="py-20 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <Badge variant="accent" className="font-bold">
              Part B Charitable Objects
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Our 5 Core Program Mandates
            </h2>
            <p className="text-base text-[var(--foreground-muted)]">
              Formal charitable purposes established in Canada, Cameroon, and worldwide.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "Poverty Relief for Children with Disabilities",
                desc: "Relieving poverty among children and youth with disabilities and their families in Canada, Cameroon, and globally by providing or facilitating access to necessities of life and disability-related supports, including food, clothing, assistive devices, mobility aids, adaptive equipment, and basic hardship relief.",
              },
              {
                num: "02",
                title: "Advancing Inclusive Education & Literacy",
                desc: "Providing educational programs, tutoring, literacy and communication supports, adaptive learning resources, skills-development programs, scholarships or bursaries, and teacher training that improves access to learning and greater independence.",
              },
              {
                num: "03",
                title: "Health, Rehabilitation & Mobility Promotion",
                desc: "Facilitating access to health-related educational programs, rehabilitation and developmental supports, therapeutic services delivered by qualified medical professionals, and disability-related assistive equipment.",
              },
              {
                num: "04",
                title: "Community Benefit & Family Respite",
                desc: "Relieving social isolation by providing inclusive recreational, social, and developmental community programs, and providing caregivers and families with information, peer support groups, and respite-support programs that reduce isolation.",
              },
              {
                num: "05",
                title: "Advancing Public Understanding & Stigma Prevention",
                desc: "Delivering non-partisan educational workshops, public information, and resources concerning disability rights, accessibility, dignity, inclusion, and the eradication of social stigma and discrimination.",
              },
            ].map((obj, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-white rounded-3xl border border-purple-50 shadow-sm flex flex-col sm:flex-row sm:items-start gap-6"
              >
                <span className="text-3xl font-extrabold text-[var(--foundation-primary)] shrink-0">
                  {obj.num}
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[var(--foreground)]">{obj.title}</h3>
                  <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
                    {obj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Cameroon Centre Spotlight */}
          <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#7B02F6]/10 via-[#F59E0B]/10 to-[#7B02F6]/10 border border-purple-200/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[var(--foundation-primary)] text-xs font-bold">
                  <Building weight="bold" className="w-4 h-4" />
                  Long-Term Strategic Initiative
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
                  The Douala Regional Centre Initiative (Centre Régional d'Inclusion)
                </h3>
                <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
                  Development of a permanent, sustainable hub in Douala, Littoral Region, Cameroun (Centre Régional de Réhabilitation et d'Apprentissage Inclusif) as a central
                  facility for delivering JOVIA’s pediatric rehabilitation, adaptive classrooms,
                  caregiver training, and assistive device assembly programs.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                    <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Pediatric Therapy Wing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                    <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Adaptive Literacy Lab</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                    <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Mobility Assembly Workshop</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                    <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Caregiver Respite Suites</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white">
                  <Image
                    src="/images/teachersdisabledchildern.webp"
                    alt="Inclusive Education and Rehabilitation Hub Team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-bold text-white">
                      Inclusive Education & Rehabilitation Staff
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Governance, Board & Code of Conduct */}
      <section id="governance" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                Governance & Safeguarding
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
                Governed by Integrity, <br />
                <span className="text-gradient-primary">Accountability & Law</span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed">
                <p>
                  JOVIA Foundation is governed by an independent Board of Directors under the{" "}
                  <strong>Societies Act of Alberta</strong> and adheres to the standards of the Canada
                  Revenue Agency (CRA) and applicable Cameroonian laws.
                </p>
                <p>
                  Our Board composition balances lived-experience perspectives, accounting, legal
                  compliance, child development, and international programming experience.
                </p>
                <p>
                  We enforce a <strong>Zero Tolerance Safeguarding Policy</strong> protecting every
                  child and vulnerable person from abuse, exploitation, or discrimination.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/bylaws" variant="primary" size="default" className="font-bold">
                  View Official Bylaws
                </Button>
                <Button href="/code-of-conduct" variant="outline" size="default" className="font-bold border-2 border-[var(--foundation-primary)] text-[var(--foundation-primary)]">
                  View Code of Conduct
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-purple-50 space-y-2">
                <div className="flex items-center gap-2 font-bold text-[var(--foundation-primary)]">
                  <ShieldCheck weight="bold" className="w-5 h-5 text-emerald-600" />
                  Child Safeguarding Procedures
                </div>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Strict screening, vulnerable-sector background checks, supervision rules, and mandatory reporting protocols across all global programs in Canada and Cameroon.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-purple-50 space-y-2">
                <div className="flex items-center gap-2 font-bold text-[var(--foundation-primary)]">
                  <Scales weight="bold" className="w-5 h-5 text-amber-600" />
                  Conflict of Interest & Anti-Corruption
                </div>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Directors serve without remuneration. Strict policies prevent private benefit, unauthorized gifts, or partisan political activity.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-purple-50 space-y-2">
                <div className="flex items-center gap-2 font-bold text-[var(--foundation-primary)]">
                  <FileText weight="bold" className="w-5 h-5 text-purple-600" />
                  Community Annual Voting Membership
                </div>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Individual voting members help maintain democratic oversight, approve financial statements, and elect the Board of Directors at the Annual General Meeting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
