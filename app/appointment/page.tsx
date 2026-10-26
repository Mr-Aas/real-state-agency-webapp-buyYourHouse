"use client";

import React from "react";
import { 
  Calendar, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Video, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare,
  Phone
} from "lucide-react";
import AppointmentBooking from "@/components/AppointmentBooking";

export default function AppointmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fbfbfd]">
      {/* Appointment Hero Banner */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-slate-100/70 via-white to-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold mb-4">
            <Calendar className="w-3.5 h-3.5 text-sky-600" />
            <span>Private Real Estate Consultations</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#080d1e] tracking-tight max-w-3xl mx-auto">
            Book a Viewing or <span className="text-gradient-blue">Portfolio Strategy Session</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Select your preferred consultation format below. Our automated system will sync your calendar and dispatch immediate confirmation via SMS & WhatsApp.
          </p>

          {/* Quick Perks */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              100% Free & Obligation-Free
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Automated WhatsApp & SMS Reminder
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Assigned Specialist by Budget Tier
            </span>
          </div>
        </div>
      </section>

      {/* Main Interactive Appointment Booking Flow */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <AppointmentBooking />
        </div>
      </section>

      {/* Support Direct Line Box */}
      <section className="py-12 bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h3 className="text-lg font-bold text-slate-900">Need Immediate Same-Day Viewing?</h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            For urgent same-day walkthroughs or confidential off-market parcels, contact our 24/7 concierge directly:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-5">
            <a
              href="tel:+18004389687"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>Call: +1 (800) 438-9687</span>
            </a>
            <a
              href="https://wa.me/18004389687?text=Hello%20getYourHouse%2C%20I%20would%20like%20to%20request%20an%20urgent%20same-day%20viewing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Instant WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
