"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Download,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  MapPin,
  CalendarBlank,
  X,
  MagnifyingGlassPlus,
  ShareNetwork,
  Image as ImageIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface GalleryItem {
  id: number;
  title: string;
  category: "education" | "mobility" | "family" | "community";
  categoryLabel: string;
  image: string;
  location: string;
  date: string;
  description: string;
  span?: string; // For bento grid styling
}

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Adaptive Classroom Learning & Literacy",
      category: "education",
      categoryLabel: "Inclusive Classrooms",
      image: "/images/disabledperson.jpg",
      location: "Yaoundé, Centre Region, Cameroon",
      date: "February 2026",
      description:
        "Young learners with disabilities accessing adaptive textbooks, large-print materials, and dedicated inclusive classroom environments.",
    },
    {
      id: 2,
      title: "Pediatric Wheelchair & Mobility Freedom",
      category: "mobility",
      categoryLabel: "Mobility & Health",
      image: "/images/wheelchairperson.jpg",
      location: "Bamenda, Northwest Region, Cameroon",
      date: "January 2026",
      description:
        "Customized pediatric wheelchair fitting providing newfound mobility, independence, and joyful inclusion in school and community life.",
    },
    {
      id: 3,
      title: "Clinical Pediatric Assessment & Healthcare",
      category: "mobility",
      categoryLabel: "Mobility & Health",
      image: "/images/nursechild.avif",
      location: "Bafut Health Clinic, Cameroon",
      date: "January 2026",
      description:
        "Qualified nursing and pediatric physiotherapy specialists delivering posture evaluations, clinical care, and rehabilitation therapies.",
    },
    {
      id: 4,
      title: "Rural Community Outreach & Direct Aid",
      category: "community",
      categoryLabel: "Field Team & Community",
      image: "/images/poordisabledafrican.avif",
      location: "Mezam Division, Cameroon",
      date: "December 2025",
      description:
        "Reaching the most vulnerable children in underserved rural villages with essential nutrition, clothing, medical supplies, and barrier-breaking support.",
    },
    {
      id: 5,
      title: "Caregiver Mother Empowerment & Respite",
      category: "family",
      categoryLabel: "Caregiver Support",
      image: "/images/poorwomantalking.avif",
      location: "Douala, Littoral Region, Cameroon",
      date: "November 2025",
      description:
        "Peer respite circles and livelihood counseling for mothers caring for children with severe disabilities, building sustainable family resilience.",
    },
    {
      id: 6,
      title: "Speech, Communication & Family Connection",
      category: "education",
      categoryLabel: "Inclusive Classrooms",
      image: "/images/womanchildtalking.avif",
      location: "Calgary, Alberta, Canada",
      date: "October 2025",
      description:
        "Early childhood communication coaching and parent-guided adaptive speech development, ensuring every child finds their voice.",
    },
    {
      id: 7,
      title: "Interdisciplinary Medical & Specialist Council",
      category: "community",
      categoryLabel: "Field Team & Community",
      image: "/images/consulting-team.jpg",
      location: "Yaoundé & Calgary Collaboration",
      date: "September 2025",
      description:
        "Specialist medical advisors, therapists, and humanitarian coordinators collaborating on international program governance and healthcare standards.",
    },
    {
      id: 8,
      title: "All-Terrain Mobility Cart Distribution & Logistics",
      category: "mobility",
      categoryLabel: "Mobility & Health",
      image: "/images/deliveryboy.jpg",
      location: "Northwest Region, Cameroon",
      date: "August 2025",
      description:
        "Direct field logistics delivering rugged hand-powered carts designed for rough unpaved rural roads, enabling children to reach schools independently.",
    },
    {
      id: 9,
      title: "Community Partnership & Respite Livelihoods",
      category: "family",
      categoryLabel: "Caregiver Support",
      image: "/images/handshake.jpg",
      location: "Edmonton, Alberta, Canada",
      date: "July 2025",
      description:
        "Establishing partnerships with local support networks, distributing micro-seed grants for family enterprise, and fostering mutual solidarity.",
    },
    {
      id: 10,
      title: "Youth Advocacy & Disability Rights Engagement",
      category: "community",
      categoryLabel: "Field Team & Community",
      image: "/images/man-woman.jpg",
      location: "Toronto, Ontario, Canada",
      date: "June 2025",
      description:
        "Volunteer advocates and lived-experience leaders organizing community awareness campaigns to eliminate stigma and promote accessibility.",
    },
    {
      id: 11,
      title: "Inclusive Teacher Training & Stakeholder Roundtable",
      category: "education",
      categoryLabel: "Inclusive Classrooms",
      image: "/images/meeting.jpg",
      location: "Bamenda Learning Hub, Cameroon",
      date: "May 2025",
      description:
        "Workshops for mainstream school teachers on adaptive pedagogical methods, classroom accessibility modifications, and non-discriminatory education.",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "education", label: "Inclusive Classrooms" },
    { id: "mobility", label: "Mobility & Health" },
    { id: "family", label: "Caregiver Support" },
    { id: "community", label: "Field Team & Community" },
  ];

  return (
    <>
      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-white/20">
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X weight="bold" className="w-5 h-5" />
            </button>

            {/* Photo Container */}
            <div className="relative h-72 sm:h-96 w-full bg-gray-900">
              <Image
                src={activePhoto.image}
                alt={activePhoto.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="primary" className="font-bold shadow-md">
                  {activePhoto.categoryLabel}
                </Badge>
              </div>
            </div>

            {/* Photo Details */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-500">
                <span className="flex items-center gap-1.5 text-[var(--foundation-primary)]">
                  <MapPin weight="bold" className="w-4 h-4" />
                  {activePhoto.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CalendarBlank weight="bold" className="w-4 h-4" />
                  {activePhoto.date}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900">{activePhoto.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {activePhoto.description}
              </p>

              <div className="pt-4 border-t border-purple-50 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={activePhoto.image}
                  download={activePhoto.image.split("/").pop()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--foundation-primary)] hover:bg-[var(--foundation-primary-hover)] text-white text-sm font-bold shadow-sm transition-all"
                >
                  <Download weight="bold" className="w-4 h-4" />
                  Download High-Res Photo
                </a>
                <Button
                  onClick={() => setActivePhoto(null)}
                  variant="outline"
                  size="default"
                  className="font-bold border-gray-200"
                >
                  Close Viewer
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Hero */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 bg-gradient-to-b from-[var(--surface)] via-white to-white overflow-hidden">
        <div className="hero-mesh-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-[var(--foundation-primary)] text-xs font-extrabold uppercase tracking-wider">
              <ImageIcon weight="bold" className="w-4 h-4" />
              Media & Field Impact Gallery
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-gray-900">
              Witnessing Inclusion <br />
              <span className="text-gradient-primary">in Every Action</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Explore field photography, adaptive classroom breakthroughs, mobility distributions,
              and community stories from our ongoing humanitarian mission in Canada and Cameroon.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-10 flex flex-wrap gap-2.5 pt-4 border-t border-purple-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[var(--foundation-primary)] text-white shadow-md hover:bg-[var(--foundation-primary-hover)]"
                    : "bg-white hover:bg-purple-50 text-gray-700 border border-purple-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Gallery Grid */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="group relative bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-[0_4px_20px_-4px_rgba(123,2,246,0.06)] hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Photo Area */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-purple-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 rounded-full bg-white/90 text-[var(--foundation-primary)] shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <MagnifyingGlassPlus weight="bold" className="w-6 h-6" />
                    </span>
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-white/95 text-[var(--foundation-primary)] shadow-sm">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                      <MapPin weight="bold" className="w-3.5 h-3.5 text-[var(--foundation-accent)]" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[var(--foundation-primary)] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-purple-50 flex items-center justify-between text-xs font-bold text-[var(--foundation-primary)]">
                    <span>View Details</span>
                    <ArrowRight weight="bold" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Publications & Brand Kit Downloads */}
      <section className="py-16 lg:py-24 bg-[var(--background-alt)] border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <Badge variant="accent" className="font-bold">
              Publications & Assets
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Official Foundation Resources
            </h2>
            <p className="text-base text-gray-600">
              Download our official brand assets, bylaws summary, and audited reporting documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Official Logo Kit */}
            <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[var(--foundation-primary)] flex items-center justify-center font-bold">
                  <FileText weight="bold" className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Official Logo & Brand Assets</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Official high-resolution Vector SVG logo and full white-background mark for media, partners, and campaigns.
                </p>
              </div>

              <div className="pt-4 border-t border-purple-50 space-y-2.5">
                <a
                  href="/jovialogo.svg"
                  download="jovia-foundation-logo.svg"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[var(--foundation-primary)] hover:bg-[var(--foundation-primary-hover)] text-white text-xs font-bold transition-all shadow-sm"
                >
                  <Download weight="bold" className="w-4 h-4" />
                  Download Vector Logo (SVG)
                </a>
                <a
                  href="/fulllogojoviawhitebg.jpeg"
                  download="jovia-full-logo.jpeg"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-purple-50 hover:bg-purple-100 text-[var(--foundation-primary)] text-xs font-bold transition-all border border-purple-200"
                >
                  <Download weight="bold" className="w-4 h-4" />
                  Download Full Logo (JPEG)
                </a>
              </div>
            </div>

            {/* Card 2: Code of Conduct & Safeguarding */}
            <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <ShieldCheck weight="bold" className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Code of Conduct & Ethics</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Complete 10-article governing standards, child safeguarding rules, and confidential reporting channels.
                </p>
              </div>

              <div className="pt-4 border-t border-purple-50">
                <Button
                  href="/code-of-conduct"
                  variant="outline"
                  size="default"
                  className="w-full font-bold border-2 border-[var(--foundation-primary)] text-[var(--foundation-primary)]"
                >
                  <BookOpen weight="bold" className="w-4 h-4" />
                  Read Code of Conduct
                </Button>
              </div>
            </div>

            {/* Card 3: Proposed Bylaws & Annual Report */}
            <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <BookOpen weight="bold" className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Proposed Bylaws & Framework</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Complete 9-article governing framework under the Societies Act of Alberta, voting rights, and Board elections.
                </p>
              </div>

              <div className="pt-4 border-t border-purple-50">
                <Button
                  href="/bylaws"
                  variant="primary"
                  size="default"
                  className="w-full font-bold shadow-sm"
                >
                  <BookOpen weight="bold" className="w-4 h-4" />
                  Read & Print Bylaws
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
