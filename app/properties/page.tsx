"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Building, 
  Search, 
  Filter, 
  MapPin, 
  DollarSign, 
  SlidersHorizontal,
  Home,
  CheckCircle2
} from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTIES, Property } from "@/lib/propertiesData";
import { BUDGET_OPTIONS, PROJECT_TYPES } from "@/lib/validation";

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedBudget, setSelectedBudget] = useState<string>("all");

  const filtered = PROPERTIES.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.city.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = selectedType === "all" || item.type === selectedType;
    const matchesBudget = selectedBudget === "all" || item.budgetCategory === selectedBudget;

    return matchesSearch && matchesType && matchesBudget;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#fbfbfd]">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-100/70 via-white to-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Verified Real Estate Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#080d1e] tracking-tight mt-3">
              Explore Available <span className="text-gradient-blue">Sanctuaries & Parcels</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Filter by exact budget tier, project type, and metropolitan location. Every listing is verified for clear title and immediate acquisition.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="mt-8 rounded-3xl bg-white p-4 sm:p-5 border border-slate-200 shadow-md max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Search input */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search city, address or title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-[#0284c7]"
                />
              </div>

              {/* Type Select */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 px-4 text-xs sm:text-sm font-semibold text-slate-800 outline-none focus:bg-white focus:border-[#0284c7] cursor-pointer"
              >
                <option value="all">All Property Types</option>
                <option value="house">Houses & Single Family</option>
                <option value="appartment">Apartments & Condos</option>
                <option value="villa">Luxury Villas</option>
                <option value="penthouse">Sky Penthouses</option>
                <option value="land">Development Land Parcels</option>
                <option value="commercial">Commercial Assets</option>
              </select>

              {/* Budget Range Select */}
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 px-4 text-xs sm:text-sm font-semibold text-slate-800 outline-none focus:bg-white focus:border-[#0284c7] cursor-pointer"
              >
                <option value="all">All Budget Tiers</option>
                {BUDGET_OPTIONS.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs sm:text-sm font-bold text-slate-700">
              Showing <span className="text-[#0284c7] font-black">{filtered.length}</span> verified properties
            </p>
            {(selectedType !== "all" || selectedBudget !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedType("all");
                  setSelectedBudget("all");
                  setSearchQuery("");
                }}
                className="text-xs font-semibold text-rose-500 hover:underline"
              >
                Reset All Filters
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-white border border-slate-200 p-12 text-center max-w-md mx-auto my-12">
              <Building className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No Direct Matches Found</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                We have off-market inventory not shown publicly. Submit your specific criteria through our lead validation engine to receive pocket options.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-block px-6 py-2.5 rounded-full bg-[#080d1e] text-white text-xs font-bold hover:bg-[#0284c7] transition-colors"
              >
                Request Custom Search
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
