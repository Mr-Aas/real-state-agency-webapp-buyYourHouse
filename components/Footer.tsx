"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Lock,
  ExternalLink
} from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes("@")) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="bg-[#080d1e] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Overview (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0284c7] to-sky-400 flex items-center justify-center text-white shadow-lg">
                <Home className="w-5 h-5 text-white stroke-[2.2]" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                getYour<span className="text-[#0284c7]">House</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The premier modern real estate brokerage engineered with intelligent lead capture, instant spam validation, and personalized WhatsApp & Twilio automated dispatch.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-300">
              <a href="tel:+18004389687" className="flex items-center gap-2.5 hover:text-[#0284c7] transition-colors">
                <Phone className="w-4 h-4 text-[#0284c7]" />
                <span>+1 (800) 438-9687 (Toll-Free Priority Line)</span>
              </a>
              <a href="https://wa.me/18004389687" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp VIP Concierge (+1 800 438 9687)</span>
              </a>
              <a href="mailto:inquiry@getyourhouse.com" className="flex items-center gap-2.5 hover:text-[#0284c7] transition-colors">
                <Mail className="w-4 h-4 text-[#0284c7]" />
                <span>inquiry@getyourhouse.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-white transition-colors">Properties Portfolio</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About getYourHouse</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Market Insights & Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/appointment" className="hover:text-white transition-colors">Book Private Appointment</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Property Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Property Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/properties?type=house" className="hover:text-white transition-colors">Single Family Houses</Link>
              </li>
              <li>
                <Link href="/properties?type=appartment" className="hover:text-white transition-colors">Luxury Apartments</Link>
              </li>
              <li>
                <Link href="/properties?type=villa" className="hover:text-white transition-colors">Waterfront Villas</Link>
              </li>
              <li>
                <Link href="/properties?type=penthouse" className="hover:text-white transition-colors">Sky Penthouses</Link>
              </li>
              <li>
                <Link href="/properties?type=land" className="hover:text-white transition-colors">Land & Development Parcels</Link>
              </li>
              <li>
                <Link href="/properties?type=commercial" className="hover:text-white transition-colors">Commercial Real Estate</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Anti-Spam */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Private Market Wire
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Get off-market listings matching your budget before public release.
            </p>

            {subscribed ? (
              <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3 text-xs text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Subscribed! Check WhatsApp or Email for verified deals.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full rounded-full bg-slate-900 border border-slate-700 px-4 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-[#0284c7]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 rounded-full bg-[#0284c7] hover:bg-sky-500 text-white text-xs font-semibold flex items-center justify-center transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>100% Anti-spam protected. No third-party sharing.</span>
                </div>
              </form>
            )}

            {/* Office Locations */}
            <div className="pt-4 text-[11px] text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">Offices:</p>
              <p>Beverly Hills • Manhattan • Miami • London</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 getYourHouse Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/about" className="hover:text-slate-400 transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Anti-Spam Policy</Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Privacy & Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
