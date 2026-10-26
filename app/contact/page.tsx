"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Lock, 
  ChevronDown, 
  Sparkles,
  ExternalLink
} from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How quickly will someone respond after I submit this form?",
      a: "Our automated dispatch engine generates and sends your personalized WhatsApp dossier and Twilio SMS verification in under 120 seconds. For Ultra Estate and Luxury VIP budget tiers (> $1M), you are connected directly to Managing Principal Marcus Vance or Elena Rostova immediately.",
    },
    {
      q: "How does the getYourHouse anti-spam and validation system work?",
      a: "We use a proprietary validation heuristic that inspects temporary/disposable email domains, traps automated bot submission crawlers via invisible honeypots, and verifies phone digit formatting. This keeps our platform 100% spam-free and protects our clients' privacy.",
    },
    {
      q: "Can I inquire about off-market or unlisted pocket properties?",
      a: "Yes. Many of our highest-tier villas, penthouses, and development parcels are held off-market for seller privacy. By selecting your target budget and location, our system matches you with the confidential portfolio.",
    },
    {
      q: "Is there any cost or commitment for the initial consultation?",
      a: "No. All initial consultations, 3D virtual walkthroughs, and portfolio reviews are 100% complimentary and obligation-free.",
    },
    {
      q: "Can I communicate exclusively through WhatsApp?",
      a: "Absolutely. When you submit your WhatsApp number, our system dispatches a personalized welcome message. You can conduct your property search, request floorplans, and schedule viewings entirely through WhatsApp.",
    },
  ];

  const offices = [
    {
      city: "Beverly Hills",
      address: "9600 Wilshire Boulevard, Suite 400",
      state: "Beverly Hills, CA 90212",
      phone: "+1 (310) 843-9601",
      email: "beverlyhills@getyourhouse.com",
    },
    {
      city: "New York",
      address: "500 Hudson Yards, 54th Floor",
      state: "New York, NY 10001",
      phone: "+1 (212) 940-8802",
      email: "nyc@getyourhouse.com",
    },
    {
      city: "Miami",
      address: "1000 Brickell Avenue, Suite 1200",
      state: "Miami, FL 33131",
      phone: "+1 (305) 520-7730",
      email: "miami@getyourhouse.com",
    },
    {
      city: "London",
      address: "1 Berkeley Street, Mayfair",
      state: "London W1J 8DJ, UK",
      phone: "+44 20 7946 0920",
      email: "london@getyourhouse.com",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fffaf3]">
      {/* Header Section (Inspired by virtualnexgen contacts) */}
      <section className="pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
          <div className="inline-block rounded-full bg-sky-100/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#080d1e] border border-sky-200">
            Contact getYourHouse
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#080d1e] sm:text-5xl lg:text-6xl">
            Tell Us About Your <span className="text-gradient-blue">Requirements</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Answer a few quick questions and our validation system will route you directly to the specialized regional broker.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <LeadCaptureForm />
        </div>
      </section>

      {/* Direct Global Offices */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Global Presence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#080d1e] tracking-tight mt-3">
              Visit Our Private Advisory Offices
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Direct access across major global residential and investment capitals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className="luxury-card rounded-3xl p-6 bg-slate-50/50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0284c7] shadow-sm mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{office.city}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {office.address}<br />{office.state}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 space-y-2 text-xs">
                  <a href={`tel:${office.phone}`} className="flex items-center gap-2 text-slate-700 hover:text-[#0284c7] font-semibold transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#0284c7]" />
                    <span>{office.phone}</span>
                  </a>
                  <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-slate-500 hover:text-[#0284c7] transition-colors truncate">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate">{office.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion (Inspired by inspiration page FAQ) */}
      <section className="py-16 sm:py-24 bg-[#fffaf3] border-t border-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7] bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
              Contact FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#080d1e] tracking-tight mt-3">
              Frequently Asked <span className="text-gradient-blue">Questions</span>
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Clear answers about our automated lead routing, broker allocation, and anti-spam protocols.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all hover:border-[#0284c7]/40 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#080d1e]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-[#0284c7]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 sm:px-6 border-t border-slate-100">
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
