import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { FileText, Shield, Medal, ArrowLeft, EnvelopeSimple, Scales } from "@phosphor-icons/react/dist/ssr";

export default function TermsPage() {
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
              Legal Governance & Framework
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Terms of Use & Governance
            </h1>
            <p className="text-sm font-semibold text-gray-500">
              Effective Date: January 2026 • JOVIA Foundation (Canada & Cameroon)
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8 text-gray-700 leading-relaxed text-base">
            {/* 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-[var(--foundation-primary)] flex items-center justify-center shrink-0">
                  <FileText weight="bold" className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  1. Acceptance of Terms
                </h2>
              </div>
              <p className="text-gray-700 pl-12 leading-relaxed">
                By accessing and using this official website of JOVIA Foundation (Joseph’s Opportunities,
                Values, Inclusion & Ability), you agree to comply with and be bound by these Terms of Use,
                our Privacy Policy, and our governing framework under the <em>Societies Act of Alberta</em>.
              </p>
            </div>

            {/* 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Shield weight="bold" className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  2. Charitable Mandate & Public Benefit
                </h2>
              </div>
              <p className="text-gray-700 pl-12 leading-relaxed">
                JOVIA Foundation operates strictly for the public benefit of eligible children and youth
                with disabilities and their families in Canada and Cameroon. All resources, content, and
                publications are shared to foster inclusion, educational access, and disability rights advocacy.
              </p>
            </div>

            {/* 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Medal weight="bold" className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  3. Donations, Receipts & Memberships
                </h2>
              </div>
              <div className="pl-12 space-y-2 text-gray-700">
                <p>
                  All charitable contributions made through our secure giving platforms are receipted in
                  accordance with Canadian and international non-profit regulations.
                </p>
                <p>
                  Annual voting memberships (CAD $100) are subject to Board approval under Article 3 of the
                  JOVIA Foundation Bylaws.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-[var(--foundation-primary)] flex items-center justify-center shrink-0">
                  <Scales weight="bold" className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  4. Governance & Legal Inquiries
                </h2>
              </div>
              <div className="pl-12 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  For official inquiries regarding foundation governance, bylaws, or audited financial
                  disclosures, please contact our Board Secretariat:
                </p>
                <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-100 space-y-1">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                    <EnvelopeSimple weight="bold" className="w-4 h-4 text-[var(--foundation-primary)]" />
                    Board of Directors & Legal Governance
                  </div>
                  <p className="text-sm font-semibold text-[var(--foundation-primary)]">
                    governance@joviafoundation.org • info@joviafoundation.org
                  </p>
                  <p className="text-xs text-gray-500">
                    JOVIA Foundation Administrative Office • Alberta / Ontario, Canada & Bamenda, Cameroon
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
