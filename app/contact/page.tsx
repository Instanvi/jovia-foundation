"use client";

import React, { useState } from "react";
import {
  Envelope,
  Phone,
  MapPin,
  Clock,
  PaperPlaneRight,
  CheckCircle,
  Heart,
  Globe,
  Users,
  Handshake,
  ShieldCheck,
  FileText,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Label } from "@/components/ui/Label";
import { Badge } from "@/components/ui/Badge";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "general",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "general",
        subject: "",
        message: "",
      });
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 bg-gradient-to-b from-[var(--surface)] to-white overflow-hidden">
        <div className="hero-mesh-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 animate-fade-in">
            <Badge variant="default" className="font-bold">
              Canada & Cameroon Offices
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Connect With <br />
              <span className="text-gradient-primary">JOVIA Foundation</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--foreground-muted)] leading-relaxed">
              We welcome your inquiries, volunteer applications, partnership proposals, CAD $100
              voting membership submissions, and general questions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Dual Headquarters & Direct Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
                  Regional Headquarters
                </h2>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  Our foundation operates under Canadian corporate and charity standards with an
                  active grassroots operational hub in Cameroon.
                </p>
              </div>

              <div className="space-y-4">
                {/* Canada Office */}
                <div className="p-6 rounded-3xl bg-[var(--surface)] border border-purple-100 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-[var(--foundation-primary)]">
                    <Globe weight="bold" className="w-5 h-5 text-amber-500" />
                    Canada Governance Headquarters
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed pl-7">
                    Registered Society under the Societies Act of Alberta, Canada
                  </p>
                  <div className="pl-7 text-xs font-semibold text-[var(--foreground)]">
                    Toll-Free Phone: +1 (800) 123-4567
                  </div>
                </div>

                {/* Cameroon Office */}
                <div className="p-6 rounded-3xl bg-[var(--surface)] border border-purple-100 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-[var(--foundation-primary)]">
                    <MapPin weight="bold" className="w-5 h-5 text-emerald-600" />
                    Cameroon Field Program Hub
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed pl-7">
                    Commercial Avenue, P.O. Box 450, Bamenda / Yaoundé, Centre Region, Cameroon
                  </p>
                  <div className="pl-7 text-xs font-semibold text-[var(--foreground)]">
                    Field Line: +237 670 000 000
                  </div>
                </div>

                {/* Email & Support */}
                <div className="p-6 rounded-3xl bg-purple-50 border border-purple-100 space-y-3">
                  <div className="flex items-center gap-3">
                    <Envelope weight="bold" className="w-5 h-5 text-[var(--foundation-primary)]" />
                    <div>
                      <div className="text-xs text-[var(--foreground-subtle)]">Email Inquiries</div>
                      <a
                        href="mailto:info@joviafoundation.org"
                        className="text-sm font-bold text-[var(--foundation-primary)] hover:underline"
                      >
                        info@joviafoundation.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock weight="bold" className="w-5 h-5 text-[var(--foundation-primary)]" />
                    <div>
                      <div className="text-xs text-[var(--foreground-subtle)]">Working Hours</div>
                      <div className="text-sm font-bold text-[var(--foreground)]">
                        Monday – Friday: 8:00 AM – 5:00 PM
                      </div>
                    </div>
                  </div>
                </div>

                {/* Confidential Safeguarding Channel */}
                <div className="p-6 rounded-3xl bg-rose-50 border border-rose-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-800">
                    <ShieldCheck weight="fill" className="w-4 h-4 text-rose-600" />
                    Confidential Safeguarding Reporting Channel
                  </div>
                  <p className="text-xs text-rose-900/80 leading-relaxed">
                    Under Article 10 of our Code of Conduct, any safeguarding concern or suspected misconduct may be submitted confidentially to our designated officer:
                    <a href="mailto:safeguarding@joviafoundation.org" className="font-bold underline ml-1">
                      safeguarding@joviafoundation.org
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact & Application Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[var(--surface)] p-8 sm:p-10 lg:p-12 rounded-3xl border border-purple-100 shadow-sm">
                <div className="space-y-2 mb-8">
                  <h3 className="text-2xl font-bold text-[var(--foreground)]">
                    Send Us an Inquiry / Application
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Please fill in your details below and our team will respond within 24–48 hours.
                  </p>
                </div>

                {submitSuccess ? (
                  <div className="p-8 bg-white rounded-2xl border border-emerald-200 text-center space-y-4 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle weight="fill" className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-[var(--foreground)]">
                      Submission Received!
                    </h4>
                    <p className="text-sm text-[var(--foreground-muted)] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting JOVIA Foundation. Your inquiry has been routed to the appropriate department in Canada / Cameroon.
                    </p>
                    <Button
                      onClick={() => setSubmitSuccess(false)}
                      variant="primary"
                      size="default"
                      className="font-bold"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name">Full Legal Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="e.g. Marie Claire"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="name@domain.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="category">Category / Purpose *</Label>
                        <Select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                        >
                          <option value="general">General Inquiry</option>
                          <option value="membership">
                            Apply for Voting Membership (CAD $100/yr)
                          </option>
                          <option value="volunteer">Volunteer / Field Work</option>
                          <option value="partner">Organizational Partnership</option>
                          <option value="school_sponsorship">
                            Inclusive Classroom Sponsorship
                          </option>
                          <option value="safeguarding">Safeguarding / Policy Inquiry</option>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        placeholder="How can we assist or collaborate?"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message">Message / Application Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Please describe your background, interest in JOVIA Foundation, or specific questions..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full font-bold shadow-md hover:shadow-primary-glow"
                    >
                      {isSubmitting ? (
                        "Submitting to Foundation..."
                      ) : (
                        <>
                          <PaperPlaneRight weight="bold" className="w-4 h-4 mr-1.5" />
                          Submit Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Callout Cards for Action */}
      <section id="donate" className="py-16 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              id="membership"
              className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm text-center space-y-4 hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-50 text-[var(--foundation-primary)] flex items-center justify-center mx-auto">
                <FileText weight="bold" className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[var(--foreground)]">Voting Membership</h4>
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                Join our voting members (CAD $100/yr) to support our mission and vote at the Annual General Meeting.
              </p>
            </div>

            {/* Card 2 */}
            <div
              id="volunteer"
              className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm text-center space-y-4 hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-[var(--foundation-accent)] flex items-center justify-center mx-auto">
                <Users weight="bold" className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[var(--foreground)]">Volunteer</h4>
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                Contribute your time as a teacher, physical therapist, caregiver advocate, or field organizer.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm text-center space-y-4 hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
                <Heart weight="fill" className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[var(--foreground)]">Make a Donation</h4>
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                Directly fund mobility carts, accessible desks, and pediatric physiotherapy for disabled children.
              </p>
              <Button
                href="/#donate"
                variant="primary"
                size="sm"
                className="font-bold"
              >
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
