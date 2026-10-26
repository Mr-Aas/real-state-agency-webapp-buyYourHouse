"use client";

import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Victoria Sterling",
      role: "Private Equity Partner",
      location: "Beverly Hills, CA",
      budgetTier: "> $2.5M Ultra Luxury",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      quote:
        "The automated response was unlike anything I've experienced in luxury real estate. Within 2 minutes of submitting my budget tier, I had an off-market Bel Air estate dossier on WhatsApp from Marcus Vance. No broker spam, no ghosting.",
    },
    {
      name: "Dr. Jonathan Reyes",
      role: "Chief of Surgery & Real Estate Investor",
      location: "Manhattan, NY",
      budgetTier: "$1M - $2.5M Penthouse",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      quote:
        "Most portals sell your email to 20 hungry brokers who call you repeatedly. getYourHouse's anti-spam engine paired me with Elena directly. We toured the Hudson Yards penthouse within 48 hours and closed effortlessly.",
    },
    {
      name: "Camilla & Ethan Wright",
      role: "Tech Founders & Homebuyers",
      location: "Miami Beach, FL",
      budgetTier: "$500K - $1M Waterfront",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      quote:
        "We were looking for land and single-family zoning around Biscayne Bay. The automated WhatsApp routing sent us zoning reports and dock permits right on our phones. Superb modern agency experience!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>Verified Client Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#080d1e] tracking-tight">
              What Homebuyers & Investors Say About <span className="text-[#0284c7]">getYourHouse</span>
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Proven results from clients across North America, Europe, and the Middle East.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={item.name}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border ${
                idx === currentIndex
                  ? "bg-white border-[#0284c7] shadow-xl ring-2 ring-[#0284c7]/15 -translate-y-1"
                  : "bg-white/70 border-slate-200/80 hover:bg-white shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                    {item.budgetTier}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-slate-100"
                />
                <div>
                  <p className="text-sm font-bold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role} • {item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
