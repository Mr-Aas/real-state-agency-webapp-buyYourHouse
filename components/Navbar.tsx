"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Building2, 
  PhoneCall, 
  Calendar, 
  Menu, 
  X, 
  ShieldCheck, 
  MessageSquare,
  Sparkles,
  ChevronRight
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6">
      <div className={`mx-auto max-w-7xl transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-[0_12px_36px_rgba(15,23,42,0.12)] border border-slate-200/90" 
          : "bg-white/90 backdrop-blur-sm shadow-[0_4px_20px_rgba(15,23,42,0.06)] border border-slate-200/60"
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#080d1e] to-[#0284c7] flex items-center justify-center text-white shadow-md shadow-sky-900/20 group-hover:scale-105 transition-transform duration-300">
              <Home className="w-5 h-5 text-white stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#080d1e] leading-none">
                getYour<span className="text-[#0284c7]">House</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400 mt-0.5">
                Real Estate & AI Lead Engine
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? "text-[#0284c7] bg-sky-50 font-semibold"
                      : "text-slate-700 hover:text-[#080d1e] hover:bg-slate-100/70"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#0284c7] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct WhatsApp Quick Chat */}
            <a
              href="https://wa.me/18004389687?text=Hello%20getYourHouse%2C%20I%20am%20interested%20in%20property%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 rounded-full border border-emerald-200 transition-colors"
              title="Chat on WhatsApp"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>

            {/* Book Appointment CTA */}
            <Link
              href="/appointment"
              className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#080d1e] hover:bg-[#0284c7] rounded-full shadow-md shadow-slate-900/15 hover:shadow-sky-500/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/appointment"
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-[#080d1e] rounded-full"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#080d1e] rounded-full hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-auto max-w-7xl mt-2 rounded-2xl bg-white border border-slate-200 shadow-xl p-5 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                    isActive ? "bg-sky-50 text-[#0284c7] font-semibold" : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="https://wa.me/18004389687?text=Hello%20getYourHouse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-50 text-emerald-700 font-semibold text-sm border border-emerald-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#080d1e] text-white font-semibold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment & Tour</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
