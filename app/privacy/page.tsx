import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, EnvelopeSimple, CheckCircle } from "@phosphor-icons/react/dist/ssr";

export default function PrivacyPage() {
  return (
    <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[var(--background-alt)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-[var(--foundation-primary)] hover:text-[var(--foundation-primary-hover)] transition-colors mb-8 group"
        >
          <ArrowLeft weight="bold" className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white p-8 sm:p-12 lg:p-14 rounded-3xl border border-purple-100 shadow-xl space-y-10">
          {/* Header */}
          <div className="space-y-3 border-b border-purple-100 pb-8">
            <Badge variant="default" className="font-bold">
              Legal & Data Protection
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Privacy & Safeguarding Policy
            </h1>
            <p className="text-sm font-semibold text-gray-500">
              Effective Date: January 2026 • Applies to Canada & Cameroon Operations
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8 text-gray-700 leading-relaxed text-base">
            {/* 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-[var(--foundation-primary)] flex items-center justify-center shrink-0">
                  <ShieldCheck weight="bold" className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  1. Our Commitment to Privacy & Child Safeguarding
                </h2>
              </div>
              <p className="text-gray-700 pl-12 leading-relaxed">
                At JOVIA Foundation, we place the highest priority on protecting the privacy, dignity,
                and safety of our donors, volunteers, staff, and especially the children and youth with
                disabilities we serve. We strictly adhere to Canadian privacy legislation (PIPEDA) and all
                applicable data protection and child protection laws in Cameroon.
              </p>
            </div>

            {/* 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Eye weight="bold" className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  2. Information We Collect
                </h2>
              </div>
              <div className="pl-12 space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  We only collect personal information that is reasonably necessary to fulfill our charitable
                  purposes and ensure transparent governance. This includes:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <span>Contact details (name, email, phone number, and physical mailing address).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <span>Donation and receipting details processed through secure payment gateways.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <span>Volunteer and membership applications submitted via our platform.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <span>Newsletter preferences and non-identifying aggregate website traffic analytics.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Lock weight="bold" className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  3. How We Protect and Use Your Data
                </h2>
              </div>
              <div className="pl-12 space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  Your personal and financial information is never sold, rented, or traded with third
                  parties. We implement robust physical, technical, and managerial safeguards to protect your data
                  from unauthorized access, loss, or misuse.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All online donation transactions are encrypted end-to-end using 256-bit SSL protocols.
                  Access to sensitive records is restricted exclusively to authorized personnel who have signed our
                  confidentiality agreement.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-[var(--foundation-primary)] flex items-center justify-center shrink-0">
                  <FileText weight="bold" className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  4. Privacy Inquiries & Data Requests
                </h2>
              </div>
              <div className="pl-12 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  You have the right to request access to your personal information or ask for corrections.
                  For questions regarding our privacy compliance or to reach our Privacy Officer, please contact:
                </p>
                <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-100 space-y-1">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                    <EnvelopeSimple weight="bold" className="w-4 h-4 text-[var(--foundation-primary)]" />
                    Privacy & Safeguarding Officer
                  </div>
                  <p className="text-sm font-semibold text-[var(--foundation-primary)]">
                    privacy@joviafoundation.org • info@joviafoundation.org
                  </p>
                  <p className="text-xs text-gray-500">
                    JOVIA Foundation Governance Committee • Canada & Cameroon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
