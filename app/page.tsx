"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  DollarSign, 
  Home, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Building2, 
  Trees, 
  Castle, 
  ChevronRight,
  TrendingUp,
  Award,
  Users
} from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import PropertyCard from "@/components/PropertyCard";
import AutomationWorkflow from "@/components/AutomationWorkflow";
import Testimonials from "@/components/Testimonials";
import { PROPERTIES, Property } from "@/lib/propertiesData";
import { BUDGET_OPTIONS, PROJECT_TYPES } from "@/lib/validation";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [heroSearchType, setHeroSearchType] = useState<string>("house");
  const [heroSearchBudget, setHeroSearchBudget] = useState<string>("$500K - $1M");

  const filteredProperties = selectedCategory === "all"
    ? PROPERTIES.slice(0, 6)
    : PROPERTIES.filter((p) => p.type === selectedCategory);

  const handlePropertyInquiry = (prop: Property) => {
    const el = document.getElementById("lead-capture-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pb-24 lg:pt-14 lg:pb-32">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-sky-200/35 rounded-full blur-3xl pointer-events-none hero-glow" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline & Search Widget */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-800">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-slate-600">Automated Lead Intelligence</span>
                <span className="h-3 w-px bg-slate-300" />
                <span className="text-[#0284c7] font-bold">Zero Broker Spam</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#080d1e] tracking-tight leading-[1.12]">
                Find, Validate & Acquire Your{" "}
                <span className="text-gradient-blue">Dream House</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                getYourHouse pairs your project budget with vetted properties across prime locations. Our automated engine screens spam and dispatches personalized WhatsApp & Twilio options in under 120 seconds.
              </p>

              {/* Hero Search & Quick Lead Trigger Bar */}
              <div className="rounded-3xl bg-white p-3 sm:p-4 border border-slate-200 shadow-[0_12px_40px_rgba(15,23,42,0.08)] max-w-2xl mx-auto lg:mx-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {/* Property Type Dropdown */}
                  <div className="rounded-2xl bg-slate-50 p-2.5 border border-slate-200/70 text-left">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Property Type
                    </label>
                    <select
                      value={heroSearchType}
                      onChange={(e) => setHeroSearchType(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-800 outline-none cursor-pointer mt-0.5"
                    >
                      <option value="house">House / Villa</option>
                      <option value="appartment">Apartment</option>
                      <option value="penthouse">Sky Penthouse</option>
                      <option value="land">Development Land</option>
                      <option value="commercial">Commercial Unit</option>
                    </select>
                  </div>

                  {/* Budget Selector */}
                  <div className="rounded-2xl bg-slate-50 p-2.5 border border-slate-200/70 text-left">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Budget Range
                    </label>
                    <select
                      value={heroSearchBudget}
                      onChange={(e) => setHeroSearchBudget(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-800 outline-none cursor-pointer mt-0.5"
                    >
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b.value} value={b.value}>
                          {b.value}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="#lead-capture-form-section"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-[#080d1e] hover:bg-[#0284c7] text-white font-bold text-xs sm:text-sm transition-all shadow-md p-3"
                  >
                    <span>Instant Match</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Micro Metrics */}
              <div className="pt-2 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-[#080d1e]">$450M+</p>
                  <p className="text-xs text-slate-500 font-medium">Vetted Volume</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-[#0284c7]">&lt; 120s</p>
                  <p className="text-xs text-slate-500 font-medium">WhatsApp SLA</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-emerald-600">0% Spam</p>
                  <p className="text-xs text-slate-500 font-medium">Fraud Block Rate</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.14)] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Luxury Residence getYourHouse"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d1e]/80 via-transparent to-transparent" />

                {/* Floating WhatsApp Live Alert Card */}
                <div className="absolute top-4 right-4 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-slate-100 shadow-xl max-w-[240px] animate-pulse-subtle">
                  <div className="flex items-center gap-2 text-emerald-600 mb-1">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-[11px] font-bold">Automated WhatsApp</span>
                  </div>
                  <p className="text-[11px] text-slate-700 leading-snug">
                    &ldquo;Personalized dossier matching your $1M-$2.5M budget sent.&rdquo;
                  </p>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 backdrop-blur-md p-4 border border-white/40 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284c7]">Featured Sanctuary</span>
                      <p className="text-sm font-bold text-slate-900">Bel Air Modernist Villa</p>
                      <p className="text-xs text-slate-500">Beverly Hills, CA • $3,850,000</p>
                    </div>
                    <Link
                      href="/appointment"
                      className="px-3.5 py-2 rounded-xl bg-[#080d1e] text-white text-xs font-semibold hover:bg-[#0284c7] transition-colors"
                    >
                      Book Tour
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES WITH CATEGORY TABS */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                Curated Listings
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#080d1e] tracking-tight mt-3">
                Featured Properties by <span className="text-[#0284c7]">Project Type</span>
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-xl">
                Every listing is verified with clear titles, direct architectural blueprints, and transparent pricing.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Properties" },
                { id: "house", label: "Houses" },
                { id: "appartment", label: "Apartments" },
                { id: "villa", label: "Villas" },
                { id: "penthouse", label: "Penthouses" },
                { id: "land", label: "Land Parcels" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === tab.id
                      ? "bg-[#080d1e] text-white shadow-sm"
                      : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((prop) => (
              <PropertyCard
                key={prop.id}
                property={prop}
                onInquire={handlePropertyInquiry}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-xs sm:text-sm font-bold text-slate-800 shadow-sm transition-all"
            >
              <span>Explore All Available Listings</span>
              <ChevronRight className="w-4 h-4 text-[#0284c7]" />
            </Link>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE & VALIDATION SYSTEM SECTION (MAIN FOCUS) */}
      <section id="lead-capture-form-section" className="py-20 sm:py-28 relative bg-[#fbfbfd]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>Core Automation System</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#080d1e] tracking-tight">
              Lead Capture & <span className="text-[#0284c7]">Validation Engine</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Experience our anti-spam filter in action. Fill in your project requirements below to see how our AI classifies your budget tier and generates your personalized WhatsApp & Twilio dispatch payload in real time.
            </p>
          </div>

          {/* Form Component */}
          <LeadCaptureForm
            initialProjectType={heroSearchType}
            initialBudget={heroSearchBudget}
          />
        </div>
      </section>

      {/* AUTOMATION WORKFLOW PIPELINE */}
      <AutomationWorkflow />

      {/* WHY GETYOURHOUSE COMPARISON */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#080d1e] tracking-tight">
              Why getYourHouse is the <span className="text-[#0284c7]">Smarter Way</span> to Buy
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              The real estate market is filled with noise. Here is how our automated lead intelligence changes the game.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Traditional Portals */}
            <div className="rounded-3xl p-7 border border-rose-200 bg-rose-50/30">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-3 py-1 rounded-full">
                Traditional Broker Portals
              </span>
              <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Your email is sold to 15+ random agents who cold-call repeatedly.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Inquiries sit in unmonitored broker inboxes for 48 to 72 hours.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Generic automated reply with zero property matching or zoning intelligence.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>High spam bot contamination clogging listing channels.</span>
                </li>
              </ul>
            </div>

            {/* getYourHouse Automated Model */}
            <div className="rounded-3xl p-7 border border-emerald-300 bg-emerald-50/40 shadow-lg ring-1 ring-emerald-400/20">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                getYourHouse Automated System
              </span>
              <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-800 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Encrypted anti-spam screening with 100% disposable email filter.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Personalized WhatsApp & Twilio SMS dispatched in under 120 seconds.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Dedicated Senior Broker assignment based precisely on your budget tier.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Direct confidential communication. Your data is never sold.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* APPOINTMENT BANNER SECTION */}
      <section className="py-16 sm:py-20 bg-[#080d1e] text-white relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 relative">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 p-8 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-md">
            <div className="max-w-2xl text-center lg:text-left space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 px-3 py-1 rounded-full border border-sky-800">
                Schedule Private Viewing
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to Walk Through Your Next Residence?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Book a private in-person viewing, live 3D virtual tour, or portfolio strategy call with our certified advisory team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link
                href="/appointment"
                className="px-8 py-4 rounded-full bg-[#0284c7] hover:bg-sky-500 text-white font-bold text-sm shadow-xl transition-all text-center"
              >
                Book Appointment & Tour
              </Link>
              <a
                href="https://wa.me/18004389687"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-all text-center flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
