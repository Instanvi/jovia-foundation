"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Heart,
  ShieldCheck,
  CheckCircle,
  Lock,
  CreditCard,
  DeviceMobile,
  Bank,
  Globe,
  Users,
  GraduationCap,
  Heartbeat,
  Wheelchair,
  Sparkle,
  ArrowRight,
  HandHeart,
  CurrencyDollar,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export default function DonatePage() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [currency, setCurrency] = useState<"CAD" | "USD" | "EUR" | "XAF">("CAD");
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedCause, setSelectedCause] = useState<string>(
    "Where Needed Most (General Inclusion Fund)"
  );
  const [paymentMethod, setPaymentMethod] = useState<"card" | "interac" | "momo" | "bank">("card");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const effectiveAmount =
    selectedAmount === "custom" ? Number(customAmount) || 0 : selectedAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 sm:py-24 bg-[var(--background-alt)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Title & Mission Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-[var(--foundation-primary)] text-xs font-extrabold uppercase tracking-wider">
            <Heart weight="fill" className="w-4 h-4 text-rose-500 fill-rose-500 animate-heart-beat" />
            Support JOVIA Foundation
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight">
            Empower a Child. <br className="hidden sm:inline" />
            <span className="text-gradient-primary">Transform Possibility.</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
            Your generous contribution delivers specialized pediatric wheelchairs, clinical physical therapy,
            inclusive education textbooks, and caregiver family respite care for children with disabilities globally.
          </p>
        </div>

        {/* Main Donation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Giving Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-purple-100 shadow-xl space-y-8">
              {submitted ? (
                <div className="text-center space-y-6 py-10 animate-fade-in">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle weight="fill" className="w-12 h-12" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
                      Thank You, {donorName || "Generous Supporter"}!
                    </h2>
                    <p className="text-base text-[var(--foreground-muted)] max-w-lg mx-auto leading-relaxed">
                      Your commitment of{" "}
                      <strong className="text-[var(--foundation-primary)]">
                        {currency} ${effectiveAmount || 50}
                      </strong>{" "}
                      ({frequency === "monthly" ? "Monthly Sustaining Gift" : "One-Time Donation"}) for{" "}
                      <strong>{selectedCause}</strong> brings direct, tangible transformation.
                    </p>
                    <p className="text-xs text-gray-500">
                      An official charitable tax receipt and impact confirmation will be sent to{" "}
                      <strong>{donorEmail || "your email address"}</strong>.
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      size="default"
                      className="font-bold border-2 border-[var(--foundation-primary)] text-[var(--foundation-primary)]"
                    >
                      Make Another Donation
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Frequency & Currency Strip */}
                  <div className="space-y-3">
                    <Label className="block text-sm font-bold text-[var(--foreground)]">
                      1. Choose Giving Frequency
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFrequency("one-time")}
                        className={`py-3.5 px-4 rounded-2xl border-2 text-sm font-bold transition-all text-center ${
                          frequency === "one-time"
                            ? "border-[var(--foundation-primary)] bg-[var(--foundation-primary-light)] text-[var(--foundation-primary)] shadow-sm"
                            : "border-gray-200 bg-white text-gray-700 hover:border-purple-200"
                        }`}
                      >
                        One-Time Donation
                      </button>
                      <button
                        type="button"
                        onClick={() => setFrequency("monthly")}
                        className={`py-3.5 px-4 rounded-2xl border-2 text-sm font-bold transition-all text-center ${
                          frequency === "monthly"
                            ? "border-[var(--foundation-primary)] bg-[var(--foundation-primary)] text-white shadow-md"
                            : "border-gray-200 bg-white text-gray-700 hover:border-purple-200"
                        }`}
                      >
                        Monthly Sustaining Partner
                      </button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-bold text-[var(--foreground)]">
                        2. Select Donation Amount
                      </Label>
                      <div className="flex items-center gap-1 bg-purple-50 p-1 rounded-xl border border-purple-100 text-xs font-bold">
                        {(["CAD", "USD", "EUR", "XAF"] as const).map((c) => (
                          <button
                            key={c}
                            type="button"
                            onClick={() => setCurrency(c)}
                            className={`px-2 py-0.5 rounded-lg transition-all ${
                              currency === c
                                ? "bg-[var(--foundation-primary)] text-white shadow-xs"
                                : "text-gray-600 hover:text-[var(--foundation-primary)]"
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[25, 50, 100, 250].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amt);
                            setCustomAmount("");
                          }}
                          className={`py-4 px-3 rounded-2xl border-2 text-center transition-all ${
                            selectedAmount === amt
                              ? "border-[var(--foundation-primary)] bg-[var(--foundation-primary-light)] text-[var(--foundation-primary)] font-extrabold shadow-sm scale-102"
                              : "border-gray-200 bg-white text-gray-700 font-bold hover:border-gray-300"
                          }`}
                        >
                          <div className="text-xl font-bold">
                            {currency === "XAF" ? `${amt * 500} XAF` : `$${amt}`}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="relative pt-1">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-bold">
                        {currency} $
                      </span>
                      <Input
                        type="number"
                        min="5"
                        placeholder="Or enter custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount("custom");
                        }}
                        className="pl-14 py-4 font-bold border-2 rounded-2xl"
                      />
                    </div>
                  </div>

                  {/* Cause Designation */}
                  <div className="space-y-3">
                    <Label htmlFor="cause-select" className="block text-sm font-bold text-[var(--foreground)]">
                      3. Direct Your Donation
                    </Label>
                    <select
                      id="cause-select"
                      value={selectedCause}
                      onChange={(e) => setSelectedCause(e.target.value)}
                      className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-2xl text-sm font-semibold text-gray-700 focus:outline-none focus:border-[var(--foundation-primary)] transition-all cursor-pointer"
                    >
                      <option value="Where Needed Most (General Inclusion Fund)">
                        Where Needed Most (General Inclusion Fund)
                      </option>
                      <option value="Adaptive Classrooms & Inclusive Literacy">
                        Adaptive Classrooms & Inclusive Literacy
                      </option>
                      <option value="Pediatric Wheelchairs & All-Terrain Mobility Carts">
                        Pediatric Wheelchairs & All-Terrain Mobility Carts
                      </option>
                      <option value="Pediatric Clinical Care & Physical Therapy">
                        Pediatric Clinical Care & Physical Therapy
                      </option>
                      <option value="Mother & Caregiver Respite Livelihoods">
                        Mother & Caregiver Respite Livelihoods
                      </option>
                      <option value="Douala Regional Learning & Rehabilitation Hub (Cameroon)">
                        Douala Regional Learning & Rehabilitation Hub (Cameroon)
                      </option>
                    </select>
                  </div>

                  {/* Payment Method Selector */}
                  <div className="space-y-3">
                    <Label className="block text-sm font-bold text-[var(--foreground)]">
                      4. Select Payment Channel
                    </Label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`p-3 rounded-2xl border-2 flex flex-col items-center gap-1.5 text-xs font-bold transition-all ${
                          paymentMethod === "card"
                            ? "border-[var(--foundation-primary)] bg-purple-50 text-[var(--foundation-primary)] shadow-xs"
                            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        <CreditCard weight="bold" className="w-5 h-5" />
                        <span>Credit / Debit</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("interac")}
                        className={`p-3 rounded-2xl border-2 flex flex-col items-center gap-1.5 text-xs font-bold transition-all ${
                          paymentMethod === "interac"
                            ? "border-[var(--foundation-primary)] bg-purple-50 text-[var(--foundation-primary)] shadow-xs"
                            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        <Bank weight="bold" className="w-5 h-5" />
                        <span>Interac e-Transfer</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("momo")}
                        className={`p-3 rounded-2xl border-2 flex flex-col items-center gap-1.5 text-xs font-bold transition-all ${
                          paymentMethod === "momo"
                            ? "border-[var(--foundation-primary)] bg-purple-50 text-[var(--foundation-primary)] shadow-xs"
                            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        <DeviceMobile weight="bold" className="w-5 h-5" />
                        <span>Mobile Money</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("bank")}
                        className={`p-3 rounded-2xl border-2 flex flex-col items-center gap-1.5 text-xs font-bold transition-all ${
                          paymentMethod === "bank"
                            ? "border-[var(--foundation-primary)] bg-purple-50 text-[var(--foundation-primary)] shadow-xs"
                            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        <Globe weight="bold" className="w-5 h-5" />
                        <span>Wire Transfer</span>
                      </button>
                    </div>

                    {paymentMethod === "momo" && (
                      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1 animate-fade-in">
                        <p className="font-bold">MTN MoMo & Orange Money (Cameroun / Afrique Centrale):</p>
                        <p>Transferts directs disponibles au <strong>+237 670 000 000</strong> (Nom de compte: Fondation JOVIA). Un reçu officiel sera émis immédiatement.</p>
                      </div>
                    )}

                    {paymentMethod === "interac" && (
                      <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-xs text-purple-950 space-y-1 animate-fade-in">
                        <p className="font-bold">Interac e-Transfer (Canada):</p>
                        <p>Send e-Transfers directly to <strong>donations@joviafoundation.org</strong> with auto-deposit enabled.</p>
                      </div>
                    )}
                  </div>

                  {/* Donor Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="donor-name" className="text-xs font-bold text-gray-700">
                        Full Name / Organization *
                      </Label>
                      <Input
                        id="donor-name"
                        required
                        placeholder="Jane Doe"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="py-3 rounded-xl"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="donor-email" className="text-xs font-bold text-gray-700">
                        Email for Tax Receipt *
                      </Label>
                      <Input
                        id="donor-email"
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        className="py-3 rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="xl"
                    className="w-full font-extrabold text-base sm:text-lg py-5 shadow-xl hover:shadow-2xl transition-all"
                  >
                    <Heart weight="fill" className="w-5 h-5 fill-white" />
                    Complete Donation: {currency} ${effectiveAmount || 50}{" "}
                    {frequency === "monthly" ? "/ Month" : ""}
                  </Button>

                  {/* Security & Non-profit Transparency */}
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs text-gray-500 border-t border-gray-100">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck weight="fill" className="w-4 h-4 text-emerald-600" />
                      Encrypted & Secure
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600" />
                      Official Tax Receipt Issued
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1.5">
                      <Heart weight="fill" className="w-4 h-4 text-[var(--foundation-primary)]" />
                      100% Directed to Programs
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Impact Tiers & Accountability (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Impact Tier Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-lg space-y-5">
              <h3 className="text-xl font-extrabold text-[var(--foreground)]">
                Where Your Gift Goes
              </h3>
              <div className="space-y-3.5">
                {[
                  {
                    icon: GraduationCap,
                    color: "bg-purple-100 text-[var(--foundation-primary)]",
                    tier: "$25 - $50",
                    title: "Adaptive Learning & Literacy",
                    desc: "Provides large-print textbooks, tactile learning aids, and assistive communication boards for children in inclusive classrooms.",
                  },
                  {
                    icon: Heartbeat,
                    color: "bg-amber-100 text-amber-700",
                    tier: "$100 - $150",
                    title: "Clinical Pediatric Therapy",
                    desc: "Funds qualified physiotherapy evaluations, posture corrections, and home rehabilitation exercises.",
                  },
                  {
                    icon: Wheelchair,
                    color: "bg-emerald-100 text-emerald-700",
                    tier: "$250 - $350",
                    title: "Pediatric Mobility Freedom",
                    desc: "Funds the custom assembly and terrain-specific fitting of an all-terrain pediatric wheelchair.",
                  },
                  {
                    icon: Users,
                    color: "bg-rose-100 text-rose-700",
                    tier: "$500+",
                    title: "Caregiver Respite & Douala Hub",
                    desc: "Supports caregiver peer support circles, livelihood micro-seed grants, and development of the Douala Regional Hub.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-start gap-3.5"
                  >
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                      <item.icon weight="bold" className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-[var(--foundation-primary)]">
                          {item.tier}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Giving / Corporate / Wire Details */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#120126] to-[#25034B] text-white space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-wider">
                <Bank weight="bold" className="w-4 h-4" />
                Institutional & Major Gifts
              </div>
              <h4 className="text-lg font-bold text-white">
                Wire Transfers & Donor-Advised Funds
              </h4>
              <p className="text-xs text-purple-200 leading-relaxed">
                For major benefactors, corporate matching programs, foundation grants, or estate bequests, please contact our Board and Finance Directorate directly:
              </p>
              <div className="pt-2">
                <a
                  href="mailto:donations@joviafoundation.org"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all border border-white/20"
                >
                  donations@joviafoundation.org
                  <ArrowRight weight="bold" className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
