"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  FileText,
  Scales,
  ShieldCheck,
  Printer,
  ArrowLeft,
  CheckCircle,
  Users,
  Bank,
  Building,
  Lock,
} from "@phosphor-icons/react/dist/ssr";

export default function BylawsPage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const bylawsArticles = [
    {
      num: "01",
      title: "Name, Constitution & Acronym Meaning",
      icon: Building,
      color: "bg-purple-100 text-[var(--foundation-primary)]",
      summary: "Societies Act of Alberta registration and corporate name.",
      content: [
        "The official corporate name of the organization is JOVIA FOUNDATION, an acronym standing for Joseph’s Opportunities, Values, Inclusion & Ability.",
        "The Foundation is incorporated as a non-profit society under the Societies Act of Alberta, Canada, and operates exclusively for the public benefit of children and youth with disabilities and their families.",
        "Motto: Every Child. Every Ability. Every Opportunity. — Every Child Deserves a Chance to Thrive.",
      ],
    },
    {
      num: "02",
      title: "Charitable Objects & Non-Profit Purpose",
      icon: ShieldCheck,
      color: "bg-emerald-100 text-emerald-700",
      summary: "Five official charitable mandates in Canada, Cameroon, and worldwide.",
      content: [
        "Object 1 (Poverty Relief): Relieving poverty among children with disabilities and their families in Canada, Cameroon, and globally by providing food, clothing, assistive devices, and basic hardship relief.",
        "Object 2 (Inclusive Education): Providing adaptive learning tools, accessible classroom equipment, communication aids, literacy programs, and inclusive teacher training.",
        "Object 3 (Health & Mobility Promotion): Facilitating access to pediatric physiotherapy, rehabilitation therapies, wheelchairs, and all-terrain mobility carts.",
        "Object 4 (Caregiver & Community Respite): Reducing family isolation through peer caregiver support circles, respite care navigation, and livelihood micro-grants.",
        "Object 5 (Public Education & Anti-Stigma): Conducting non-partisan workshops and awareness campaigns regarding disability rights, inclusion, and dignity.",
      ],
    },
    {
      num: "03",
      title: "Membership Classification & Voting Rights",
      icon: Users,
      color: "bg-amber-100 text-amber-700",
      summary: "Voting Members (Community/yr), Associate Members, and Honorary Members.",
      content: [
        "Voting Members: Any individual who supports the Foundation’s objects, is approved by the Board, and pays the annual membership fee of Community.00. Each Voting Member holds one (1) vote at General Meetings.",
        "Associate / Beneficiary Members: Children, families, and recipients of programs who participate in activities without paying membership fees (non-voting).",
        "Honorary Members: Conferred by the Board of Directors upon distinguished advocates or donors (non-voting unless also holding active voting membership).",
        "Termination & Discipline: Membership ceases upon written resignation, special resolution of the Board for conduct detrimental to the Foundation.",
      ],
    },
    {
      num: "04",
      title: "Meetings of Members & Democratic Governance",
      icon: FileText,
      color: "bg-blue-100 text-blue-700",
      summary: "Annual General Meetings (AGM), notice periods, quorum, and voting procedures.",
      content: [
        "Annual General Meeting (AGM): Held within six (6) months of fiscal year-end in Alberta or via secure electronic communication.",
        "Business at AGM: Receipt of annual financial statements and auditor/financial review report; election of the Board of Directors; appointment of auditors/accountants; review of annual program reports.",
        "Notice: Written notice sent via electronic mail at least twenty-one (21) days prior to the meeting date.",
        "Quorum: A quorum at any general meeting consists of a minimum of five (5) Voting Members present in person or electronically.",
        "Decisions: Ordinary resolutions require a simple majority (>50%). Special resolutions (amending bylaws or dissolving) require at least 75% approval.",
      ],
    },
    {
      num: "05",
      title: "Board of Directors & Qualifications",
      icon: Scales,
      color: "bg-purple-100 text-[var(--foundation-primary)]",
      summary: "Composition of 3 to 9 Directors, 2-year staggered terms, and statutory duties.",
      content: [
        "Composition: The society shall be managed by a Board of Directors comprising not fewer than three (3) and not more than nine (9) directors elected by voting members.",
        "Director Qualifications: Must be at least 18 years of age, mentally competent, un-discharged from bankruptcy, have passed a Vulnerable Sector background check, and possess dedication to disability inclusion.",
        "Term of Office: Directors serve staggered terms of two (2) years and may be re-elected for up to three (3) consecutive terms.",
        "Vacancies: The Board may appoint a qualified voting member to fill a mid-term vacancy until the next AGM.",
        "Meetings & Quorum: The Board meets at least quarterly. Quorum requires a majority (>50%) of serving directors.",
      ],
    },
    {
      num: "06",
      title: "Executive Officers & Responsibilities",
      icon: Lock,
      color: "bg-emerald-100 text-emerald-700",
      summary: "President/Chair, Vice-President, Secretary, and Treasurer.",
      content: [
        "President / Board Chair: Presides over all member and director meetings, oversees general operations, and serves as official spokesperson.",
        "Vice-President: Assumes the duties of the President in their absence or disability and leads special strategic committees.",
        "Secretary: Responsible for issuing meeting notices, recording official minutes, maintaining the register of members, and filing annual returns under the Societies Act.",
        "Treasurer: Oversees financial administration, banking deposits, budget preparation, receipting compliance, and presentation of audited statements.",
      ],
    },
    {
      num: "07",
      title: "Financial Management, CRA Compliance & Audit",
      icon: Bank,
      color: "bg-rose-100 text-rose-700",
      summary: "Fiscal year, banking controls, zero director remuneration, and public accountability.",
      content: [
        "Fiscal Year: The financial year of the Foundation commences on January 1 and ends on December 31 of each year.",
        "Prohibition on Director Remuneration: Directors and officers shall serve without remuneration for their board governance duties. Reasonable out-of-pocket expenses incurred on official business may be reimbursed upon verified receipts.",
        "Dual Signing Authority: All cheques, electronic banking transfers, and financial commitments above CAD $500 require dual authorization.",
        "Financial Review & Books: The financial records shall be inspected annually by an independent accountant or qualified committee appointed at the AGM.",
      ],
    },
    {
      num: "08",
      title: "Amendment of Bylaws & Special Resolutions",
      icon: FileText,
      color: "bg-amber-100 text-amber-700",
      summary: "75% majority requirement and statutory registration.",
      content: [
        "These Bylaws may only be rescinded, altered, or added to by a Special Resolution passed by not less than seventy-five percent (75%) of voting members present at an AGM or Special General Meeting.",
        "No amendment takes effect until formally submitted to and approved by Corporate Registry under the Societies Act of Alberta.",
      ],
    },
    {
      num: "09",
      title: "Dissolution & Distribution of Assets",
      icon: ShieldCheck,
      color: "bg-purple-100 text-[var(--foundation-primary)]",
      summary: "Irrevocable transfer to registered Canadian charities upon winding up.",
      content: [
        "In the event of dissolution or winding up of JOVIA Foundation, all remaining assets after satisfaction of debts and liabilities shall be transferred to one or more registered Canadian charitable organizations having similar purposes.",
        "Under no circumstances shall any asset, property, or fund be distributed to members, directors, or private individuals upon dissolution.",
      ],
    },
  ];

  return (
    <div className="pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[var(--background-alt)] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumbs & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--foundation-primary)] hover:text-[var(--foundation-primary-hover)] transition-colors group"
          >
            <ArrowLeft weight="bold" className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Foundation Resources
          </Link>

          <Button
            onClick={handlePrint}
            variant="outline"
            size="default"
            className="gap-2 font-bold bg-white border-2 border-[var(--foundation-primary)] text-[var(--foundation-primary)] shadow-sm print:hidden"
          >
            <Printer weight="bold" className="w-4 h-4" />
            Print / Save as PDF
          </Button>
        </div>

        {/* Header Hero Card */}
        <div className="bg-white p-8 sm:p-12 lg:p-14 rounded-3xl border border-purple-100 shadow-xl space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-[var(--foundation-primary)] text-xs font-extrabold uppercase tracking-wider">
            <Scales weight="bold" className="w-4 h-4 text-[var(--foundation-primary)]" />
            Governing Bylaws & Corporate Constitution
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
            Official Bylaws & <br className="hidden sm:inline" />
            <span className="text-gradient-primary">Governing Framework</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            Complete governing articles adopted under the Societies Act of Alberta, Canada, defining
            membership rights, Board of Directors elections, financial integrity, and CRA non-profit compliance.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 border-t border-purple-50">
            <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
              <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600" />
              Societies Act of Alberta
            </span>
            <span>•</span>
            <span>100% Non-Profit Public Benefit</span>
            <span>•</span>
            <span>Canada & Cameroon Governance</span>
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-6 mb-14">
          {bylawsArticles.map((article, idx) => {
            const IconComponent = article.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 sm:p-10 rounded-3xl border border-purple-100 shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl ${article.color} flex items-center justify-center shrink-0 shadow-inner`}
                    >
                      <IconComponent weight="bold" className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[var(--foundation-primary)] uppercase tracking-wider">
                        Article {article.num}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {article.title}
                      </h2>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-purple-50 text-[var(--foundation-primary)] rounded-full self-start sm:self-auto">
                    {article.summary}
                  </span>
                </div>

                <div className="space-y-2.5 pl-0 sm:pl-16">
                  {article.content.map((paragraph, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--foundation-primary)] mt-2 shrink-0" />
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Actions Banner */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-purple-100 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 print:hidden">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-gray-900">Have Questions About Our Governance?</h3>
            <p className="text-sm text-gray-600">
              Contact our Board of Directors or apply for the Community annual voting membership.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact#membership" variant="primary" size="default" className="font-bold">
              Apply for Community Membership
            </Button>
            <Button onClick={handlePrint} variant="outline" size="default" className="font-bold border-gray-200">
              <Printer weight="bold" className="w-4 h-4" />
              Print Bylaws
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
