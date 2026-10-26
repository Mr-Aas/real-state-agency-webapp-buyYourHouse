"use client";

import React from "react";
import Link from "next/link";
import { Bed, Bath, Maximize, MapPin, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { Property } from "@/lib/propertiesData";

interface PropertyCardProps {
  property: Property;
  onInquire?: (property: Property) => void;
}

export default function PropertyCard({ property, onInquire }: PropertyCardProps) {
  const handleInquireClick = () => {
    if (onInquire) {
      onInquire(property);
    } else {
      const element = document.getElementById("lead-capture-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="luxury-card group rounded-3xl overflow-hidden flex flex-col bg-white border border-slate-200/80">
      {/* Property Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#080d1e] shadow-sm backdrop-blur-md">
            {property.tag}
          </span>
          {property.featured && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#0284c7] text-white shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Featured
            </span>
          )}
        </div>

        {/* Budget Category Pill */}
        <div className="absolute top-3.5 right-3.5">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#080d1e]/80 text-white backdrop-blur-md border border-white/20">
            {property.budgetCategory}
          </span>
        </div>

        {/* Price Tag Overlay at bottom of image */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between text-white">
          <div>
            <p className="text-xs font-medium text-slate-200 uppercase tracking-wider">Offered At</p>
            <p className="text-2xl font-black tracking-tight text-white">{property.price}</p>
          </div>
          <span className="text-xs bg-emerald-500/90 text-white px-2.5 py-1 rounded-full font-semibold backdrop-blur-sm flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Verified
          </span>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#0284c7] shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          <h3 className="text-lg font-bold text-[#080d1e] group-hover:text-[#0284c7] transition-colors line-clamp-1">
            {property.title}
          </h3>

          <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {property.description}
          </p>

          {/* Specs: Beds, Baths, Sqft */}
          <div className="grid grid-cols-3 gap-2 py-4 my-4 border-y border-slate-100 text-slate-700 text-xs">
            {property.beds !== undefined && (
              <div className="flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-slate-400" />
                <span>{property.beds} Beds</span>
              </div>
            )}
            {property.baths !== undefined && (
              <div className="flex items-center gap-1.5">
                <Bath className="w-4 h-4 text-slate-400" />
                <span>{property.baths} Baths</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Maximize className="w-4 h-4 text-slate-400" />
              <span>{property.sqft.toLocaleString()} Sq Ft</span>
            </div>
          </div>
        </div>

        {/* Card Actions */}
        <div className="flex items-center gap-2 pt-2">
          <button
            onClick={handleInquireClick}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#080d1e] hover:bg-[#0284c7] text-white text-xs font-bold transition-all shadow-sm"
          >
            <span>Inquire & Validate</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <Link
            href="/appointment"
            className="p-2.5 rounded-full border border-slate-200 hover:border-[#0284c7] hover:bg-sky-50 text-slate-700 hover:text-[#0284c7] transition-colors"
            title="Book a viewing"
          >
            <Sparkles className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
