"use client";

import { useState } from "react";
import { education } from "../data/education.js";
import FooterSection from "./FooterSection.jsx";

export default function AllEducationPage() {
  const allCategories = ["All", ...Array.from(new Set(education.map(e => e.category))).sort()];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEducation = activeCategory === "All" 
    ? education 
    : education.filter(e => e.category === activeCategory);

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="sticky top-0 z-50 flex flex-wrap gap-4 items-center justify-between px-6 md:px-12 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <a href="/" className="font-bold text-xl text-black flex items-center gap-2 hover:text-orange-700 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Home
        </a>
        <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Credentials Archive</span>
      </header>

      <section className="flex-grow py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Education & Certifications</h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              A comprehensive archive of my academic journey and professional certifications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {allCategories.map((cat, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
              >
                {cat === 'All' ? 'All Credentials' : cat}
              </button>
            ))}
          </div>

           {filteredEducation.length === 0 && (
             <div className="text-center py-20 text-slate-400">
               No credentials found for this category.
             </div>
           )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEducation.map((edu, idx) => (
              <a href={`/education/${edu.slug}`} key={idx} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-48 w-full bg-slate-100 flex items-center justify-center p-8 overflow-hidden relative">
                  <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-orange-100 to-rose-100 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 w-full h-full group-hover:scale-105 transition-transform duration-500">
                    {edu.coverImages?.map((img, i) => (
                      <img 
                        key={i}
                        src={img} 
                        alt={`${edu.title} logo ${i}`} 
                        className={`object-contain drop-shadow-md transition-all ${edu.coverImages.length === 1 ? 'max-h-36 max-w-[80%]' : 'max-h-20 max-w-[45%]'}`} 
                        onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">{edu.category}</span>
                  <h3 className="font-bold text-xl text-slate-900 mb-2 leading-tight group-hover:text-orange-700 transition-colors">{edu.title}</h3>
                  <p className="text-slate-500 text-sm font-medium mb-4">{edu.issuer}</p>
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-sm font-bold text-slate-400 group-hover:text-orange-700 transition-colors">
                    View Detail <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
