"use client";

import React, { useState } from "react";
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare, 
  Video, 
  MapPin, 
  FileText,
  CalendarDays
} from "lucide-react";
import confetti from "canvas-confetti";

const CONSULTATION_TYPES = [
  {
    id: "in-person",
    title: "VIP On-Site Private Viewing",
    desc: "Private walkthrough of the property with a Senior Broker. Complete architectural & privacy tour.",
    duration: "60 mins",
    icon: MapPin,
  },
  {
    id: "virtual-3d",
    title: "Live 3D Virtual Walkthrough",
    desc: "High-definition remote 3D interactive walkthrough and live question session with your specialist.",
    duration: "45 mins",
    icon: Video,
  },
  {
    id: "portfolio-call",
    title: "Strategic Portfolio & Acquisition Call",
    desc: "Private consultation discussing budget allocation, yield projections, and off-market parcels.",
    duration: "30 mins",
    icon: Sparkles,
  },
  {
    id: "land-zoning",
    title: "Land & Zoning Feasibility Review",
    desc: "Technical review of parcel boundaries, soil tests, development permits, and municipal zoning.",
    duration: "45 mins",
    icon: FileText,
  },
];

const TIME_SLOTS = [
  "09:30 AM", "11:00 AM", "01:30 PM", "03:00 PM", "04:30 PM", "06:00 PM"
];

const AGENTS = [
  {
    id: "marcus",
    name: "Marcus Vance",
    role: "Managing Principal & Ultra-High-Net-Worth Advisory",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    specialty: "Luxury Estates > $2.5M",
  },
  {
    id: "elena",
    name: "Elena Rostova",
    role: "Penthouses & Architectural Estates",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    specialty: "$1M - $2.5M Penthouses",
  },
  {
    id: "sarah",
    name: "Sarah Jenkins",
    role: "Senior Residential & Waterfront Specialist",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    specialty: "$250K - $1M Homes",
  },
  {
    id: "david",
    name: "David Chen",
    role: "Acquisitions & Land Development Associate",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    specialty: "Land & Starter Parcels < $250K",
  },
];

const UPCOMING_DATES = [
  { iso: "2026-10-28", dayName: "Wed", dayNum: 28, monthName: "Oct" },
  { iso: "2026-10-29", dayName: "Thu", dayNum: 29, monthName: "Oct" },
  { iso: "2026-10-30", dayName: "Fri", dayNum: 30, monthName: "Oct" },
  { iso: "2026-10-31", dayName: "Sat", dayNum: 31, monthName: "Oct" },
  { iso: "2026-11-01", dayName: "Sun", dayNum: 1, monthName: "Nov" },
  { iso: "2026-11-02", dayName: "Mon", dayNum: 2, monthName: "Nov" },
  { iso: "2026-11-03", dayName: "Tue", dayNum: 3, monthName: "Nov" },
  { iso: "2026-11-04", dayName: "Wed", dayNum: 4, monthName: "Nov" },
  { iso: "2026-11-05", dayName: "Thu", dayNum: 5, monthName: "Nov" },
  { iso: "2026-11-06", dayName: "Fri", dayNum: 6, monthName: "Nov" },
];

export default function AppointmentBooking() {
  const [selectedType, setSelectedType] = useState(CONSULTATION_TYPES[0].id);
  const [selectedDate, setSelectedDate] = useState("2026-10-28");
  const [selectedTime, setSelectedTime] = useState("11:00 AM");
  const [selectedAgent, setSelectedAgent] = useState(AGENTS[0].id);

  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [isBooked, setIsBooked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const datesList = UPCOMING_DATES;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#0284c7", "#059669", "#d4af37"],
      });
    } catch {}

    setTimeout(() => {
      setIsLoading(false);
      setIsBooked(true);
    }, 700);
  };

  const activeConsultation = CONSULTATION_TYPES.find((c) => c.id === selectedType) || CONSULTATION_TYPES[0];
  const activeAgent = AGENTS.find((a) => a.id === selectedAgent) || AGENTS[0];

  return (
    <div className="w-full">
      {isBooked ? (
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 text-center shadow-xl max-w-2xl mx-auto animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Appointment Confirmed
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#080d1e] mt-3">
            You are Scheduled with {activeAgent.name}!
          </h3>
          <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
            A calendar invitation and WhatsApp direct confirmation have been dispatched to <strong>{clientPhone || "+1 (Client)"}</strong>.
          </p>

          {/* Booking Summary Box */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 mt-6 text-left space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <span className="text-xs font-semibold text-slate-500">Service:</span>
              <span className="text-sm font-bold text-slate-900">{activeConsultation.title}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <span className="text-xs font-semibold text-slate-500">Date & Time:</span>
              <span className="text-sm font-bold text-slate-900">{selectedDate} at {selectedTime}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">Assigned Broker:</span>
              <div className="flex items-center gap-2">
                <img src={activeAgent.avatar} alt={activeAgent.name} className="w-6 h-6 rounded-full object-cover" />
                <span className="text-sm font-bold text-slate-900">{activeAgent.name}</span>
              </div>
            </div>
          </div>

          {/* Outbound WhatsApp Notification Alert */}
          <div className="mt-5 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mb-1">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Simulated WhatsApp Reminder:</span>
            </div>
            <p className="text-xs text-emerald-950 font-sans italic bg-white/80 p-2.5 rounded-lg border border-emerald-100">
              &ldquo;Hello {clientName || "Valued Client"}, your appointment for {activeConsultation.title} with {activeAgent.name} is confirmed for {selectedDate} at {selectedTime}. Need to reschedule? Reply RESCHEDULE.&rdquo;
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/18004389687?text=${encodeURIComponent(
                `Hello ${activeAgent.name}, I just confirmed my appointment for ${activeConsultation.title} on ${selectedDate} at ${selectedTime}. Looking forward to connecting!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open in WhatsApp</span>
            </a>
            <button
              onClick={() => setIsBooked(false)}
              className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
            >
              Book Another Session
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleBookingSubmit} className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xl space-y-8">
          {/* Step 1: Select Consultation Type */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-[#080d1e] text-white text-xs font-bold flex items-center justify-center">1</span>
              <h4 className="text-base sm:text-lg font-extrabold text-[#080d1e]">
                Choose Appointment Type
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {CONSULTATION_TYPES.map((type) => {
                const IconComponent = type.icon;
                const isSelected = selectedType === type.id;
                return (
                  <div
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`cursor-pointer rounded-2xl p-4 border transition-all ${
                      isSelected
                        ? "border-[#0284c7] bg-sky-50/70 ring-2 ring-[#0284c7]/20 shadow-sm"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2.5 rounded-xl ${isSelected ? "bg-[#0284c7] text-white" : "bg-slate-100 text-slate-600"}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-bold text-slate-900">{type.title}</p>
                          <span className="text-[11px] font-semibold text-slate-400 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                            {type.duration}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {type.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 2: Date & Time Slot Picker */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-[#080d1e] text-white text-xs font-bold flex items-center justify-center">2</span>
              <h4 className="text-base sm:text-lg font-extrabold text-[#080d1e]">
                Select Date & Time Slot
              </h4>
            </div>

            {/* Horizontal Date Pills */}
            <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
              {datesList.map((d) => {
                const isSelected = selectedDate === d.iso;
                return (
                  <button
                    type="button"
                    key={d.iso}
                    onClick={() => setSelectedDate(d.iso)}
                    className={`flex-shrink-0 flex flex-col items-center justify-center w-16 py-3 rounded-2xl border transition-all ${
                      isSelected
                        ? "bg-[#080d1e] text-white border-[#080d1e] shadow-md"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold tracking-wider opacity-75">{d.dayName}</span>
                    <span className="text-lg font-extrabold my-0.5">{d.dayNum}</span>
                    <span className="text-[10px] opacity-75">{d.monthName}</span>
                  </button>
                );
              })}
            </div>

            {/* Time Slot Buttons */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 mt-4">
              {TIME_SLOTS.map((time) => {
                const isSelected = selectedTime === time;
                return (
                  <button
                    type="button"
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      isSelected
                        ? "bg-[#0284c7] text-white border-[#0284c7] shadow-sm"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Select Dedicated Advisor */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-[#080d1e] text-white text-xs font-bold flex items-center justify-center">3</span>
              <h4 className="text-base sm:text-lg font-extrabold text-[#080d1e]">
                Choose Property Advisor
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {AGENTS.map((agent) => {
                const isSelected = selectedAgent === agent.id;
                return (
                  <div
                    key={agent.id}
                    onClick={() => setSelectedAgent(agent.id)}
                    className={`cursor-pointer rounded-2xl p-3.5 border flex items-center gap-3 transition-all ${
                      isSelected
                        ? "border-[#0284c7] bg-sky-50/80 ring-2 ring-[#0284c7]/20 shadow-sm"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <img
                      src={agent.avatar}
                      alt={agent.name}
                      className="w-11 h-11 rounded-full object-cover border border-slate-200"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-900 truncate">{agent.name}</p>
                      <p className="text-[10px] text-slate-500 truncate">{agent.specialty}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 4: Client Contact Details */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-[#080d1e] text-white text-xs font-bold flex items-center justify-center">4</span>
              <h4 className="text-base sm:text-lg font-extrabold text-[#080d1e]">
                Your Details for SMS & WhatsApp Confirmation
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  required
                  type="text"
                  placeholder="Your Full Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  required
                  type="tel"
                  placeholder="Mobile / WhatsApp Number"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20"
                />
              </div>
            </div>

            <div className="mt-3">
              <input
                type="text"
                placeholder="Optional: Specific property link, address, or questions you wish to review during the tour..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 px-4 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20"
              />
            </div>
          </div>

          {/* Submit Appointment Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 rounded-full bg-[#080d1e] hover:bg-[#0284c7] text-white py-4 px-8 text-sm font-bold shadow-lg transition-all duration-300 hover:shadow-sky-500/25 disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Confirming Booking & Dispatching Alerts...</span>
              </>
            ) : (
              <>
                <CalendarDays className="w-4 h-4" />
                <span>Confirm Appointment & Receive WhatsApp Alert</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
