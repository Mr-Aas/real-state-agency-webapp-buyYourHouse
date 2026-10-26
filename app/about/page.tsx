"use client";

import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Building2, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare,
  Globe,
  Briefcase
} from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "Marcus Vance",
      role: "Managing Principal & Ultra-HNW Advisory",
      tier: "Ultra Luxury Estates (> $2.5M)",
      bio: "Former luxury development director with over 18 years negotiating marquee acquisitions in Beverly Hills, Aspen, and London.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Elena Rostova",
      role: "Penthouses & Architectural Estates Lead",
      tier: "High-Rise Penthouses ($1M - $2.5M)",
      bio: "Specializing in prime Manhattan and Dubai luxury skyline developments with deep access to unlisted off-market penthouses.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Sarah Jenkins",
      role: "Senior Residential & Waterfront Specialist",
      tier: "Executive Residences ($250K - $1M)",
      bio: "Over 12 years connecting families and executives with verified waterfront homes in Miami, Austin, and coastal sanctuaries.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "David Chen",
      role: "Acquisitions & Land Development Associate",
      tier: "Land & Starter Parcels (< $250K)",
      bio: "Expert in raw land valuation, zoning ordinances, topography due diligence, and residential subdivision planning.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-100/80 via-white to-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>The getYourHouse Story</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-[#080d1e] tracking-tight max-w-3xl mx-auto">
            Re-engineering Real Estate With <span className="text-gradient-blue">Integrity & Speed</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We founded <strong>getYourHouse</strong> to solve a universal frustration: buying or investing in property should not subject you to spam, aggressive robocalls, or unvetted brokers.
          </p>
        </div>
      </section>

      {/* Narrative & Mission */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="getYourHouse Modern Brokerage Headquarters"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm font-bold">Confidential Advisory Suite</p>
                <p className="text-xs text-slate-200">New York • Beverly Hills • Miami • London</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#080d1e] tracking-tight">
                Why Automated Validation Changes Everything
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                In traditional real estate portals, your contact information is sold as an &ldquo;unvetted lead&rdquo; to dozens of brokers, generating spam, cold calls, and wasted time. Meanwhile, serious buyers with real project budgets wait days for authentic answers.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                At <strong>getYourHouse</strong>, we engineered an autonomous lead validation engine that filters disposable emails and bots in real time. We instantly map your project budget tier directly to an assigned Senior Broker, dispatching personalized WhatsApp and Twilio dossiers in under 120 seconds.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/80">
                  <p className="text-2xl font-black text-[#080d1e]">100%</p>
                  <p className="text-xs text-slate-500 font-medium">Direct Broker Alignment</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/80">
                  <p className="text-2xl font-black text-[#0284c7]">120s</p>
                  <p className="text-xs text-slate-500 font-medium">Average Response SLA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Advisory Team */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Specialized Advisors
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#080d1e] tracking-tight mt-3">
              Meet Our Senior Broker Leadership
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Each advisor leads a dedicated budget tier to provide tailored market acumen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="luxury-card rounded-3xl overflow-hidden bg-white border border-slate-200/80 flex flex-col"
              >
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                      {member.tier}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-2">
                      {member.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mb-2.5">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <Link
                      href="/contact"
                      className="text-xs font-bold text-[#0284c7] hover:text-[#080d1e] flex items-center gap-1.5 transition-colors"
                    >
                      <span>Inquire Directly</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-3xl bg-[#080d1e] text-white p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="relative max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Partner with getYourHouse on Your Next Move
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether seeking starter development land or an ultra-luxury residence over $2.5M, our automated validation guarantees prompt, confidential service.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-[#0284c7] hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  Submit Property Request
                </Link>
                <Link
                  href="/appointment"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm transition-all"
                >
                  Book Private Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
