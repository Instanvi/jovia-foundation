import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Scales,
  Heart,
  Users,
  Eye,
  Lock,
  WarningCircle,
  FileText,
  EnvelopeSimple,
  Phone,
  ArrowLeft,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";

export default function CodeOfConductPage() {
  const conductSections = [
    {
      num: "01",
      title: "Purpose & Scope",
      icon: FileText,
      color: "bg-purple-100 text-[var(--foundation-primary)]",
      summary: "Universal standard of behaviour for all foundation representatives.",
      content:
        "This Code of Conduct applies to every person acting for, representing, volunteering with, working for, or governing JOVIA Foundation across Canada, Cameroon, or elsewhere. Every director, officer, member, employee, volunteer, contractor, and operational partner must adhere strictly to these principles.",
    },
    {
      num: "02",
      title: "Core Ethical Principles",
      icon: Heart,
      color: "bg-rose-100 text-rose-700",
      summary: "Dignity, Opportunity, Compassion, Integrity, Equity, Inclusion, Ability, and Accountability.",
      content:
        "Every representative must act with honesty, fairness, empathy, and respect. Programs are centered on the strengths and potential of children with disabilities rather than defining them solely by limitation. Resources must be governed transparently for the public benefit.",
    },
    {
      num: "03",
      title: "Child & Vulnerable-Person Safeguarding (Zero Tolerance)",
      icon: ShieldCheck,
      color: "bg-emerald-100 text-emerald-700",
      summary: "Absolute zero tolerance for abuse, exploitation, neglect, or harm.",
      content:
        "JOVIA Foundation enforces an uncompromising zero-tolerance policy against any form of physical, emotional, or sexual abuse, sexual exploitation, corporal punishment, neglect, or humiliation. Representatives must avoid unmonitored one-on-one situations with children, obtain written guardian consent before capturing photography, and preserve children's dignity at all times.",
    },
    {
      num: "04",
      title: "Dignity, Respect & Anti-Harassment",
      icon: Users,
      color: "bg-amber-100 text-amber-700",
      summary: "Safe, inclusive environment free from bullying, discrimination, or tribal bias.",
      content:
        "We are committed to environments free from discrimination, intimidation, harassment, sexual harassment, and bullying. Discrimination based on disability, race, tribe, gender, religion, national origin, or social status is strictly prohibited.",
    },
    {
      num: "05",
      title: "Financial Integrity & Anti-Bribery",
      icon: Scales,
      color: "bg-blue-100 text-blue-700",
      summary: "Complete transparency and documented legitimacy for every dollar spent.",
      content:
        "Foundation funds and property must be used exclusively to advance official charitable objects. Bribery, kickbacks, unauthorized gifts, embezzlement, and falsification of records are strictly prohibited. All financial transactions in Canada and Cameroon must be fully accounted for and receipted.",
    },
    {
      num: "06",
      title: "Conflicts of Interest & Private Benefit",
      icon: Eye,
      color: "bg-purple-100 text-[var(--foundation-primary)]",
      summary: "No director or volunteer may profit from foundation opportunities.",
      content:
        "Representatives must promptly disclose any actual, perceived, or potential conflict of interest. Directors serve without remuneration and cannot use their position to secure private contracts, jobs for family members, or commercial advantages.",
    },
    {
      num: "07",
      title: "Political & Religious Neutrality",
      icon: Lock,
      color: "bg-amber-100 text-amber-700",
      summary: "Humanitarian assistance delivered unconditionally.",
      content:
        "JOVIA Foundation is non-partisan and non-sectarian. Charitable assistance, mobility carts, and scholarships are provided based on need and eligibility, never conditioned upon supporting any political candidate, party, or religious faith.",
    },
    {
      num: "08",
      title: "Confidentiality & Privacy",
      icon: Lock,
      color: "bg-emerald-100 text-emerald-700",
      summary: "Protection of sensitive medical, child, and donor records.",
      content:
        "Representatives must protect confidential information concerning beneficiaries, medical conditions, family hardship, donor records, and internal governance. Information must never be shared publicly without lawful authorization.",
    },
    {
      num: "09",
      title: "Mandatory Reporting & Whistleblower Protection",
      icon: WarningCircle,
      color: "bg-rose-100 text-rose-700",
      summary: "Safe reporting channel with strict protection against retaliation.",
      content:
        "Any person who observes or suspects a violation of this Code, particularly regarding child safeguarding or financial fraud, must report it immediately. The Foundation guarantees confidentiality and strictly prohibits any retaliation against individuals raising concerns in good faith.",
    },
    {
      num: "10",
      title: "Enforcement, Sanctions & Legal Referrals",
      icon: Scales,
      color: "bg-purple-100 text-[var(--foundation-primary)]",
      summary: "Disciplinary actions up to dismissal and law enforcement referral.",
      content:
        "Violations will be investigated promptly and impartially. Sanctions include written reprimands, suspension, termination of employment or volunteer status, removal from the Board, and mandatory immediate referral to child welfare authorities and police where criminal conduct is suspected.",
    },
  ];

  return (
    <div className="pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[var(--background-alt)] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-[var(--foundation-primary)] hover:text-[var(--foundation-primary-hover)] transition-colors mb-8 group"
        >
          <ArrowLeft weight="bold" className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header Hero Card */}
        <div className="bg-white p-8 sm:p-12 lg:p-14 rounded-3xl border border-purple-100 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-[var(--foundation-primary)] text-xs font-extrabold uppercase tracking-wider">
                <ShieldCheck weight="bold" className="w-4 h-4" />
                Official Governance & Safeguarding Policy
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
                Code of Conduct & <br className="hidden sm:inline" />
                <span className="text-gradient-primary">Safeguarding Standards</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                JOVIA Foundation is committed to creating safe, respectful, and inclusive environments for
                children and youth with disabilities, their families, volunteers, staff, and communities
                in Canada, Cameroon, and worldwide.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 border-t border-purple-50">
                <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600" />
                  Approved by the Board of Directors
                </span>
                <span>•</span>
                <span>Societies Act of Alberta</span>
                <span>•</span>
                <span>Zero-Tolerance Protection</span>
              </div>
            </div>

            <div className="lg:col-span-4 relative">
              <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden shadow-lg border border-purple-100 ring-4 ring-purple-50">
                <Image
                  src="/images/nursechild.avif"
                  alt="Child Protection and Clinical Safeguarding"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white">
                    Protecting Every Child with Dignity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-6 mb-14">
          {conductSections.map((sec, idx) => {
            const IconComponent = sec.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 sm:p-10 rounded-3xl border border-purple-100 shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl ${sec.color} flex items-center justify-center shrink-0 shadow-inner`}
                    >
                      <IconComponent weight="bold" className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[var(--foundation-primary)] uppercase tracking-wider">
                        Article {sec.num}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{sec.title}</h2>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-purple-50 text-[var(--foundation-primary)] rounded-full self-start sm:self-auto">
                    {sec.summary}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed pl-0 sm:pl-16">
                  {sec.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* Confidential Whistleblower & Incident Reporting Box */}
        <div className="bg-gradient-to-br from-[#120126] to-[#25034A] text-white p-8 sm:p-12 rounded-3xl shadow-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-extrabold uppercase tracking-wider">
            <WarningCircle weight="bold" className="w-4 h-4 text-amber-400" />
            Confidential Reporting Channel
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Report a Safeguarding Concern or Breach of Conduct
          </h3>
          <p className="text-sm sm:text-base text-purple-100 leading-relaxed max-w-3xl">
            If you witness, suspect, or experience any mistreatment, abuse, harassment, or financial
            misconduct involving JOVIA Foundation programs, you may report it in strict confidence.
            Retaliation of any kind is strictly prohibited.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <EnvelopeSimple weight="bold" className="w-4 h-4" />
                Confidential Email
              </div>
              <p className="text-sm font-semibold text-white">
                safeguarding@joviafoundation.org
              </p>
              <p className="text-xs text-purple-200">
                Direct to Governance & Ethics Committee
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <Phone weight="bold" className="w-4 h-4" />
                Urgent Escalation Hotline
              </div>
              <p className="text-sm font-semibold text-white">
                +1 (800) 123-4567 / +237 670 000 000
              </p>
              <p className="text-xs text-purple-200">
                Available 24/7 for urgent child protection matters
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button
              href="/contact"
              variant="accent"
              size="lg"
              className="font-bold shadow-lg"
            >
              Contact Ethics Committee
            </Button>
            <Button
              href="/resources"
              variant="outline"
              size="lg"
              className="font-bold bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              View Media & Field Gallery
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
