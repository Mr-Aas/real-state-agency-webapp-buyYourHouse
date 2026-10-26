"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  Bot, 
  Cpu, 
  MessageSquare, 
  Smartphone, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Filter,
  DollarSign,
  UserCheck
} from "lucide-react";

export default function AutomationWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Lead Capture & Honeypot",
      desc: "Captures lead details across web, portal, or API while silently monitoring bot traps & hidden honeypots.",
      icon: Filter,
      status: "Active Trap",
      badge: "Zero Latency",
    },
    {
      title: "2. Anti-Spam & Domain Check",
      desc: "Instantly checks disposable emails, validates phone country formats, and calculates lead integrity score.",
      icon: ShieldCheck,
      status: "100% Filtered",
      badge: "Real-time Heuristics",
    },
    {
      title: "3. Budget Tier Classification",
      desc: "Categorizes project budget (< $100K to > $2.5M) and matches intent with specialized regional broker teams.",
      icon: DollarSign,
      status: "Smart Routing",
      badge: "<T / >T Tiers",
    },
    {
      title: "4. Twilio & WhatsApp Dispatch",
      desc: "Generates tailored VIP dossier messages and sends directly via WhatsApp and Twilio SMS in under 120 seconds.",
      icon: MessageSquare,
      status: "Instant Delivery",
      badge: "Twilio & WhatsApp APIs",
    },
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white border-y border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5 text-sky-600" />
            <span>Behind The Scenes Automation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#080d1e] tracking-tight">
            How getYourHouse <span className="text-[#0284c7]">Eliminates Spam</span> & Routes VIP Leads
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Traditional real estate portals take days to reply and get flooded by spambots. Our autonomous validation pipeline connects verified buyers with direct personalized broker channels instantly.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.title}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 relative border flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-[#0284c7] shadow-xl ring-2 ring-[#0284c7]/20 -translate-y-1"
                    : "bg-white/80 border-slate-200/80 hover:border-slate-300 hover:bg-white shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isSelected ? "bg-[#080d1e] text-white" : "bg-sky-50 text-[#0284c7]"
                    }`}>
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#080d1e] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {step.status}
                  </span>
                  <span className="text-slate-400 font-bold">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Service Architecture Callout */}
        <div className="mt-12 rounded-3xl bg-[#080d1e] text-white p-6 sm:p-8 border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Twilio SMS & Meta WhatsApp Business Cloud Integrations</p>
              <p className="text-xs text-slate-300 mt-0.5">Automated delivery payload generated dynamically based on client project size and location.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
            <div className="flex items-center gap-2 text-xs bg-white/10 px-4 py-2 rounded-full border border-white/10 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>SLA &lt; 120s Response Time</span>
            </div>
            <a
              href="#lead-capture-form"
              className="px-5 py-2 rounded-full bg-[#0284c7] hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-md"
            >
              Test Live Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
