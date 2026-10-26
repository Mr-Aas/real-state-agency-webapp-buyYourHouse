"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  X,
  Share2,
  CheckCircle2,
  MessageSquare
} from "lucide-react";
import { BLOG_POSTS, BlogPost } from "@/lib/blogsData";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ["All", "Market Insights", "Buyer Guides", "Investment", "Luxury Architecture"];

  const filteredPosts = selectedCategory === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Blog Hero Header */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-slate-100/70 via-white to-white border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold mb-4">
            <BookOpen className="w-3.5 h-3.5 text-sky-600" />
            <span>The getYourHouse Intelligence Wire</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-[#080d1e] tracking-tight max-w-3xl mx-auto">
            Market Guides, Real Estate Insights & <span className="text-gradient-blue">Acquisition Trends</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Essential analysis on property valuation, zoning due diligence, mortgage budget structuring, and anti-spam real estate automation.
          </p>

          {/* Categories Pill Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#080d1e] text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-20 bg-[#fbfbfd]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="luxury-card rounded-3xl overflow-hidden bg-white border border-slate-200/80 flex flex-col group cursor-pointer"
                onClick={() => setActivePost(post)}
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-100 relative">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#080d1e] shadow-sm backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-[#080d1e] group-hover:text-[#0284c7] transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-9 h-9 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <p className="text-xs font-bold text-slate-900">{post.author.name}</p>
                        <p className="text-[10px] text-slate-500">{post.author.role}</p>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-[#0284c7] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Article Reading Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-3xl bg-white p-6 sm:p-10 shadow-2xl border border-slate-100 my-8 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            {/* Close */}
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 z-10"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              {activePost.category}
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-[#080d1e] mt-3 leading-snug">
              {activePost.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-slate-500 my-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {activePost.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {activePost.readTime}
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden my-6 aspect-[16/9] bg-slate-100">
              <img
                src={activePost.coverImage}
                alt={activePost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Author Profile in modal */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
              <img
                src={activePost.author.avatar}
                alt={activePost.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-sky-400"
              />
              <div>
                <p className="text-sm font-bold text-slate-900">{activePost.author.name}</p>
                <p className="text-xs text-slate-600">{activePost.author.role} • getYourHouse Advisory</p>
              </div>
            </div>

            {/* Article Content Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100 pt-6 font-sans">
              {activePost.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                Have questions regarding {activePost.category.toLowerCase()}?
              </p>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href="/contact"
                  onClick={() => setActivePost(null)}
                  className="px-6 py-2.5 rounded-full bg-[#080d1e] hover:bg-[#0284c7] text-white text-xs font-bold transition-all shadow-md text-center"
                >
                  Contact Author
                </Link>
                <button
                  onClick={() => setActivePost(null)}
                  className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
