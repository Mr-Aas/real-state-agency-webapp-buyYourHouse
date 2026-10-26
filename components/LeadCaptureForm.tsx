"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Send, 
  Phone, 
  Mail, 
  User, 
  MapPin, 
  DollarSign, 
  Building, 
  Sparkles, 
  AlertCircle,
  MessageSquare,
  Smartphone,
  ExternalLink,
  ChevronRight,
  Clock,
  Home,
  Building2,
  Castle,
  Trees,
  Briefcase
} from "lucide-react";
import confetti from "canvas-confetti";
import { 
  LeadFormData, 
  validateLead, 
  ValidationResult, 
  BUDGET_OPTIONS, 
  PROJECT_TYPES, 
  POPULAR_LOCATIONS, 
  COUNTRY_CODES 
} from "@/lib/validation";

interface LeadCaptureFormProps {
  initialProjectType?: string;
  initialBudget?: string;
  className?: string;
}

export default function LeadCaptureForm({
  initialProjectType = "house",
  initialBudget = "$500K - $1M",
  className = "",
}: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    phoneCountryCode: "+1",
    phone: "",
    budget: initialBudget,
    location: "",
    projectType: initialProjectType,
    description: "",
    honeypot: "", // hidden anti-spam field
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<ValidationResult | null>(null);
  const [showLivePreview, setShowLivePreview] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Real-time calculation of validation and personalized messaging
  const liveValidation = validateLead(formData);

  const handleInputChange = (field: keyof LeadFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = validateLead(formData);

    if (!result.isValid || result.isSpam) {
      setFormErrors(result.errors);
      setIsSubmitting(false);
      return;
    }

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0284c7", "#059669", "#d4af37", "#080d1e"],
      });
    } catch {
      // Fallback if canvas-confetti is not loaded
    }

    setTimeout(() => {
      setSubmissionResult(result);
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 800);
  };

  const getProjectTypeIcon = (type: string) => {
    switch (type) {
      case "house": return <Home className="w-4 h-4" />;
      case "appartment": return <Building2 className="w-4 h-4" />;
      case "villa": return <Castle className="w-4 h-4" />;
      case "penthouse": return <Sparkles className="w-4 h-4" />;
      case "land": return <Trees className="w-4 h-4" />;
      case "commercial": return <Briefcase className="w-4 h-4" />;
      default: return <Building className="w-4 h-4" />;
    }
  };

  return (
    <div id="lead-capture-form" className={`relative w-full ${className}`}>
      {/* Background Glow */}
      <div className="absolute -top-12 -left-12 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Trust signals, Automation Info & Live Preview */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="rounded-3xl bg-white/90 backdrop-blur-md p-6 sm:p-8 border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>Smart Real Estate Lead System</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#080d1e] tracking-tight">
              Tell Us About Your <span className="text-[#0284c7]">Dream Property</span>
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Our automated capture & verification engine screens out junk spam and pairs your project budget with a specialized senior advisor in under 120 seconds.
            </p>

            {/* Value Guarantees (inspired by virtualnexgen contacts) */}
            <ul className="mt-6 space-y-3.5 border-t border-slate-100 pt-6">
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-sky-100/70 text-[#0284c7] shrink-0">
                  <Clock className="h-4 w-4" />
                </span>
                <span>Automated VIP WhatsApp & SMS dispatch within <strong>120 seconds</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-100/70 text-emerald-600 shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <span>Proprietary anti-spam & disposable email filter</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-amber-100/70 text-amber-700 shrink-0">
                  <Lock className="h-4 w-4" />
                </span>
                <span>100% confidential — direct private broker allocation</span>
              </li>
            </ul>
          </div>

          {/* Interactive Automation Preview Card */}
          <div className="rounded-3xl bg-gradient-to-br from-[#080d1e] to-[#121c3b] p-6 text-white shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs uppercase tracking-wider font-bold text-slate-300">
                  Automation Dispatch Preview
                </span>
              </div>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">
                {liveValidation.leadTier}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-slate-400">Assigned Specialist:</p>
                <div className="flex items-center gap-3 mt-1.5">
                  <img 
                    src={liveValidation.assignedBroker.avatar} 
                    alt={liveValidation.assignedBroker.name} 
                    className="w-10 h-10 rounded-full object-cover border-2 border-sky-400/60"
                  />
                  <div>
                    <p className="text-sm font-bold text-white">{liveValidation.assignedBroker.name}</p>
                    <p className="text-xs text-slate-300">{liveValidation.assignedBroker.role}</p>
                  </div>
                </div>
              </div>

              {/* Dynamic SMS/WhatsApp simulated notification */}
              <div className="rounded-2xl bg-white/10 p-3.5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-300">Automated WhatsApp Output:</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-mono italic">
                  &ldquo;{liveValidation.personalizedMessages.whatsapp}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>Twilio / WhatsApp Service Status</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active & Ready
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Lead Capture Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot anti-spam trap (invisible to genuine users) */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="website_url_check"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => handleInputChange("honeypot", e.target.value)}
                />
              </div>

              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alexander Vance"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`w-full rounded-xl border bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20 ${
                        formErrors.name ? "border-rose-400 bg-rose-50/30" : "border-slate-200"
                      }`}
                    />
                  </div>
                  {formErrors.name && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      required
                      type="email"
                      placeholder="alexander@domain.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`w-full rounded-xl border bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20 ${
                        formErrors.email ? "border-rose-400 bg-rose-50/30" : "border-slate-200"
                      }`}
                    />
                  </div>
                  {formErrors.email && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone with Country Code */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Direct Phone / WhatsApp <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[130px_1fr] gap-2">
                  <select
                    value={formData.phoneCountryCode}
                    onChange={(e) => handleInputChange("phoneCountryCode", e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-2.5 py-3 text-xs sm:text-sm font-semibold text-slate-800 outline-none focus:bg-white focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20 cursor-pointer"
                  >
                    {COUNTRY_CODES.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.flag} {item.code}
                      </option>
                    ))}
                  </select>

                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      required
                      type="tel"
                      placeholder="e.g. 555-019-2831"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`w-full rounded-xl border bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20 ${
                        formErrors.phone ? "border-rose-400 bg-rose-50/30" : "border-slate-200"
                      }`}
                    />
                  </div>
                </div>
                {formErrors.phone && (
                  <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {formErrors.phone}
                  </p>
                )}
              </div>

              {/* Row 3: Project Budget with explicit <T, >T ranges */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Project Budget Option <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    required
                    value={formData.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm font-medium text-slate-900 outline-none focus:bg-white focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20 cursor-pointer"
                  >
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {BUDGET_OPTIONS.map((opt) => (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => handleInputChange("budget", opt.value)}
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full transition-all ${
                        formData.budget === opt.value
                          ? "bg-[#080d1e] text-white shadow-sm"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {opt.value}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 4: Project Type (land, house, apartment, villa, penthouse, commercial) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Project Type <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {PROJECT_TYPES.map((type) => {
                    const isSelected = formData.projectType === type.value;
                    return (
                      <button
                        type="button"
                        key={type.value}
                        onClick={() => handleInputChange("projectType", type.value)}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                          isSelected
                            ? "border-[#0284c7] bg-sky-50 text-[#0284c7] shadow-sm ring-1 ring-[#0284c7]"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span className={`p-1 rounded-lg ${isSelected ? "bg-[#0284c7] text-white" : "bg-slate-100 text-slate-600"}`}>
                          {getProjectTypeIcon(type.value)}
                        </span>
                        <span className="capitalize">{type.value}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 5: Location */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Target Location / Region <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    required
                    type="text"
                    placeholder="e.g. Beverly Hills, CA or Manhattan, NY"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className={`w-full rounded-xl border bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20 ${
                      formErrors.location ? "border-rose-400 bg-rose-50/30" : "border-slate-200"
                    }`}
                  />
                </div>
                {/* Quick location pills */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="text-[11px] text-slate-400 self-center">Popular:</span>
                  {POPULAR_LOCATIONS.slice(0, 4).map((loc) => (
                    <button
                      type="button"
                      key={loc}
                      onClick={() => handleInputChange("location", loc)}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-600"
                    >
                      {loc.split(",")[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 6: Description */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Project Description & Special Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about desired square footage, architectural style, timeline to close, or specific investment criteria..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20 resize-none"
                />
              </div>

              {/* Anti-Spam Agreement & Direct Twilio/WhatsApp Consent */}
              <label className="flex items-start gap-3 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  required
                  defaultChecked
                  className="mt-0.5 h-4 w-4 rounded accent-[#0284c7]"
                />
                <span className="text-xs text-slate-500 leading-relaxed">
                  I consent to receive automated verification and personalized property options via WhatsApp and SMS from getYourHouse based on my budget tier. Message frequency varies.
                </span>
              </label>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#080d1e] to-[#0284c7] hover:from-[#0284c7] hover:to-[#080d1e] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-sky-900/20 transition-all duration-300 hover:shadow-sky-500/30 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Validating & Routing Lead...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit & Receive Instant Personalized Portfolio</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Zero spam guarantee. Validated with encrypted fraud-prevention rules.</span>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success & Automation Dispatch Modal */}
      {showSuccessModal && submissionResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
            >
              ✕
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-[#080d1e]">
                  Lead Captured & Verified!
                </h4>
                <p className="text-xs text-slate-500">
                  Ref Code: GYH-{Math.floor(1000 + Math.random() * 9000)} • Integrity Score: {submissionResult.spamScore}%
                </p>
              </div>
            </div>

            {/* Assigned Broker Card */}
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 flex items-center gap-4 mb-5">
              <img
                src={submissionResult.assignedBroker.avatar}
                alt={submissionResult.assignedBroker.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#0284c7]"
              />
              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 bg-sky-100/60 px-2 py-0.5 rounded-full">
                  {submissionResult.leadTier} Specialist
                </span>
                <p className="text-sm font-bold text-slate-900 mt-0.5">
                  {submissionResult.assignedBroker.name}
                </p>
                <p className="text-xs text-slate-600">
                  {submissionResult.assignedBroker.role}
                </p>
                <p className="text-[11px] text-emerald-600 font-semibold mt-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> SLA Response: {submissionResult.assignedBroker.responseTime}
                </p>
              </div>
            </div>

            {/* Simulated WhatsApp / Twilio Outbound Dispatch */}
            <div className="space-y-3 mb-6">
              <div className="rounded-2xl bg-emerald-50/80 border border-emerald-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Outbound WhatsApp Sent to {formData.phoneCountryCode} {formData.phone}:</span>
                  </div>
                  <span className="text-[10px] bg-emerald-200/80 text-emerald-900 font-bold px-2 py-0.5 rounded-full">
                    Delivered
                  </span>
                </div>
                <p className="text-xs text-emerald-950 leading-relaxed font-sans bg-white/70 p-3 rounded-xl border border-emerald-100">
                  {submissionResult.personalizedMessages.whatsapp}
                </p>
              </div>

              <div className="rounded-2xl bg-sky-50/80 border border-sky-200 p-3.5">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-900">
                    <Smartphone className="w-4 h-4 text-sky-600" />
                    <span>Twilio SMS Service Dispatch:</span>
                  </div>
                  <span className="text-[10px] bg-sky-200/80 text-sky-900 font-bold px-2 py-0.5 rounded-full">
                    Queued
                  </span>
                </div>
                <p className="text-xs text-sky-950 font-mono text-[11px] leading-relaxed bg-white/70 p-2.5 rounded-lg border border-sky-100">
                  {submissionResult.personalizedMessages.twilioSms}
                </p>
              </div>
            </div>

            {/* Direct Open in WhatsApp Action Button */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/18004389687?text=${encodeURIComponent(
                  `Hi getYourHouse! My name is ${formData.name}. I just submitted my property request for ${formData.projectType} in ${formData.location} (Budget: ${formData.budget}). Please connect me with ${submissionResult.assignedBroker.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 py-3.5 px-4 text-sm font-bold text-white shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Continue on WhatsApp Now</span>
              </a>
              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="rounded-full bg-slate-100 hover:bg-slate-200 py-3.5 px-6 text-sm font-semibold text-slate-700 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
