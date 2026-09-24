"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  BookOpen,
  FolderSimple,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  CaretDown,
  CaretUp,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function ResourcesPage() {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"bylaws" | "conduct" | "reports">("bylaws");
  const [openBylawArticle, setOpenBylawArticle] = useState<number | null>(1);

  const handleDownload = (filename: string) => {
    setDownloadNotice(`Downloading "${filename}"...`);
    setTimeout(() => {
      setDownloadNotice(null);
    }, 3000);
  };

  const bylawArticles = [
    {
      article: "Part A — Organizational Identity",
      title: "Name, Slogan, Vision, Mission & 8 Core Values",
      content:
        "Name: JOVIA Foundation (Joseph’s Opportunities, Values, Inclusion & Ability). Primary Slogan: 'Every Child. Every Ability. Every Opportunity.' Supporting Statement: 'Every Child Deserves a Chance to Thrive.' Core values include Dignity, Opportunity, Compassion, Integrity, Equity, Inclusion, Ability, and Accountability.",
    },
    {
      article: "Part B — Charitable Objects",
      title: "5 Proposed Governing Purposes & Restrictions",
      content:
        "1. Relieve poverty among children with disabilities. 2. Advance inclusive education and literacy. 3. Promote health, mobility and physical rehabilitation. 4. Benefit the community and relieve caregiver isolation. 5. Advance public understanding and anti-stigma education. The Foundation operates strictly without purpose of gain and for the public benefit in Canada and Cameroon.",
    },
    {
      article: "Article 2 — Membership Structure",
      title: "Eligibility, Rights, Renewal & CAD $100 Annual Fee",
      content:
        "One voting class of membership: Individual Voting Members (age 18+, agreement with bylaws and vision). Annual membership fee is CAD $100 per member. Members in good standing have voting rights at the AGM and participate in democratic governance. Includes written procedure for resignation, suspension, and procedural fairness for termination.",
    },
    {
      article: "Article 4 & 5 — Board of Directors & Officers",
      title: "Composition, Election, 2-Year Terms & Separation of Roles",
      content:
        "Governed by 5 to 11 directors elected for staggered 2-year terms (max 3 consecutive terms). Officers include Chair, Vice-Chair, Secretary, and Treasurer. Chair and Treasurer roles must be held by separate individuals. Directors serve without remuneration.",
    },
    {
      article: "Article 9 & 14 — Safeguarding & International Operations",
      title: "Mandatory Child Safeguarding & Canada-Cameroon Delivery",
      content:
        "Mandatory screening and background checks for all representatives. Zero tolerance for abuse or exploitation. Strict accounting and monitoring for international transfers to Cameroon in full compliance with Canadian charity law and CRA qualifying disbursement rules.",
    },
    {
      article: "Article 17 — Dissolution & Asset Distribution",
      title: "Protection of Charitable Assets",
      content:
        "Upon dissolution and after payment of all debts, remaining assets shall not be distributed to any member or director, but transferred strictly to one or more qualified donees under the Income Tax Act or charitable organizations with similar purposes.",
    },
  ];

  const conductArticles = [
    {
      num: "01",
      title: "Purpose & Scope",
      desc: "Applies to all directors, officers, members, employees, volunteers, contractors, and partners acting for JOVIA Foundation in Canada, Cameroon, or elsewhere.",
    },
    {
      num: "02",
      title: "Child and Vulnerable-Person Safeguarding",
      desc: "Zero tolerance for abuse, exploitation, or mistreatment. Strict boundaries, photographic consent rules, and immediate mandatory escalation of any safeguarding concern.",
    },
    {
      num: "03",
      title: "Financial Integrity & Truth in Fundraising",
      desc: "Transparent handling of all funds. Expenses must be legitimate and documented. Beneficiaries must never be portrayed in a degrading or exploitative manner.",
    },
    {
      num: "04",
      title: "Conflicts of Interest & Anti-Corruption",
      desc: "Foundation opportunities, beneficiary relationships, and resources shall never be used for private business, partisan politics, or personal financial advantage.",
    },
    {
      num: "05",
      title: "Political & Religious Neutrality",
      desc: "Charitable programs are delivered unconditionally without requiring beneficiaries to support any political party, candidate, or religious organization.",
    },
    {
      num: "06",
      title: "Non-Retaliation & Whistleblower Protection",
      desc: "Fair, confidential reporting process. Retaliation against any person raising genuine concerns in good faith is strictly prohibited.",
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 bg-gradient-to-b from-[var(--surface)] to-white overflow-hidden">
        <div className="hero-mesh-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 animate-fade-in">
            <Badge variant="default" className="font-bold">
              Governance, Bylaws & Safeguarding
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Governance & <br />
              <span className="text-gradient-primary">Public Accountability</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--foreground-muted)] leading-relaxed">
              Access the complete governing documents, proposed bylaws, code of conduct, child
              safeguarding policies, and audited annual reports of JOVIA Foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Download Alert Notice */}
      {downloadNotice && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-[var(--foundation-primary)] text-white shadow-2xl flex items-center gap-3 animate-fade-in">
          <CheckCircle weight="fill" className="w-5 h-5 text-amber-300" />
          <span className="text-sm font-bold">{downloadNotice}</span>
        </div>
      )}

      {/* Interactive Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveTab("bylaws")}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === "bylaws"
                  ? "bg-[var(--foundation-primary)] text-white shadow-md shadow-purple-500/20"
                  : "bg-[var(--surface)] text-[var(--foreground)] hover:bg-purple-100"
              }`}
            >
              Proposed Bylaws & Framework
            </button>
            <button
              onClick={() => setActiveTab("conduct")}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === "conduct"
                  ? "bg-[var(--foundation-primary)] text-white shadow-md shadow-purple-500/20"
                  : "bg-[var(--surface)] text-[var(--foreground)] hover:bg-purple-100"
              }`}
            >
              Code of Conduct & Safeguarding
            </button>
            <button
              onClick={() => setActiveTab("reports")}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === "reports"
                  ? "bg-[var(--foundation-primary)] text-white shadow-md shadow-purple-500/20"
                  : "bg-[var(--surface)] text-[var(--foreground)] hover:bg-purple-100"
              }`}
            >
              Audited Annual Reports & Media
            </button>
          </div>

          {/* TAB 1: BYLAWS */}
          {activeTab === "bylaws" && (
            <div id="bylaws" className="space-y-8 animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 rounded-3xl bg-[var(--surface)] border border-purple-100">
                <div>
                  <Badge variant="default" className="mb-2">
                    Alberta Societies Act Compliant
                  </Badge>
                  <h3 className="text-2xl font-bold text-[var(--foreground)]">
                    JOVIA Foundation Proposed Bylaws & Framework
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)] mt-1">
                    Formal 20-Article Constitution establishing Canada and Cameroon operations, CAD $100 membership, and public benefit governance.
                  </p>
                </div>
                <Button
                  onClick={() => handleDownload("JOVIA_Foundation_Proposed_Bylaws.pdf")}
                  variant="primary"
                  size="default"
                  className="font-bold shrink-0"
                >
                  <Download weight="bold" className="w-4 h-4 mr-1.5" />
                  Download Bylaws (PDF)
                </Button>
              </div>

              {/* Accordion List of Bylaw Key Articles */}
              <div className="space-y-4">
                {bylawArticles.map((b, idx) => {
                  const isOpen = openBylawArticle === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-purple-100 bg-white overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => setOpenBylawArticle(isOpen ? null : idx)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-[var(--surface)] transition-colors"
                      >
                        <div>
                          <span className="text-xs font-bold text-[var(--foundation-primary)] uppercase tracking-wider">
                            {b.article}
                          </span>
                          <h4 className="text-lg font-bold text-[var(--foreground)] mt-0.5">
                            {b.title}
                          </h4>
                        </div>
                        {isOpen ? (
                          <CaretUp weight="bold" className="w-5 h-5 text-[var(--foundation-primary)]" />
                        ) : (
                          <CaretDown weight="bold" className="w-5 h-5 text-gray-400" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-2 text-sm text-[var(--foreground-muted)] leading-relaxed border-t border-purple-50">
                          {b.content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: CODE OF CONDUCT */}
          {activeTab === "conduct" && (
            <div id="conduct" className="space-y-8 animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 rounded-3xl bg-[var(--surface)] border border-purple-100">
                <div>
                  <Badge variant="accent" className="mb-2 font-bold">
                    Zero Tolerance Safeguarding
                  </Badge>
                  <h3 className="text-2xl font-bold text-[var(--foreground)]">
                    JOVIA Foundation Code of Conduct & Safeguarding
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)] mt-1">
                    Setting minimum standards of behavior for all directors, staff, volunteers, contractors, and field partners.
                  </p>
                </div>
                <Button
                  onClick={() => handleDownload("JOVIA_Foundation_Code_of_Conduct.pdf")}
                  variant="primary"
                  size="default"
                  className="font-bold shrink-0"
                >
                  <Download weight="bold" className="w-4 h-4 mr-1.5" />
                  Download Code of Conduct (PDF)
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {conductArticles.map((c, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-3xl bg-white border border-purple-100 shadow-sm space-y-3"
                  >
                    <span className="text-xs font-bold text-[var(--foundation-primary)]">
                      ARTICLE {c.num}
                    </span>
                    <h4 className="text-lg font-bold text-[var(--foreground)]">{c.title}</h4>
                    <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: AUDITED REPORTS & MEDIA */}
          {activeTab === "reports" && (
            <div id="reports" className="space-y-12 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
                  Annual Impact & Financial Reports
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { year: "2025", title: "Annual Report 2025", size: "2.8 MB" },
                    { year: "2024", title: "Annual Report 2024", size: "2.4 MB" },
                    { year: "2023", title: "Founding Progress Report 2023", size: "1.9 MB" },
                  ].map((r, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-3xl bg-[var(--surface)] border border-purple-100 space-y-4 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-2xl font-extrabold text-[var(--foundation-primary)]">
                            {r.year}
                          </span>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white text-gray-500">
                            {r.size}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-[var(--foreground)]">{r.title}</h4>
                        <p className="text-xs text-[var(--foreground-muted)] mt-1">
                          Audited financials, field numbers and governance reports.
                        </p>
                      </div>

                      <Button
                        onClick={() => handleDownload(r.title)}
                        variant="outline"
                        size="sm"
                        className="w-full font-bold bg-white"
                      >
                        <Download weight="bold" className="w-4 h-4 mr-1" />
                        Download PDF
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Logo & Brand Pack */}
              <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-50 to-amber-50 border border-purple-100 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <Badge variant="default" className="mb-2">
                      Brand Identity Kit
                    </Badge>
                    <h4 className="text-xl font-bold text-[var(--foreground)]">
                      Official JOVIA Logos & Media Assets
                    </h4>
                    <p className="text-xs sm:text-sm text-[var(--foreground-muted)]">
                      High-resolution vector assets (SVG, PNG, JPG) with the official color palette.
                    </p>
                  </div>
                  <Button
                    onClick={() => handleDownload("JOVIA_Logo_Package.zip")}
                    variant="primary"
                    size="default"
                    className="font-bold shrink-0"
                  >
                    <Download weight="bold" className="w-4 h-4 mr-1.5" />
                    Download Logo Kit (.ZIP)
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
