"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { projects } from "../../data/projects";
import FooterSection from "../components/FooterSection";

export default function AllProjectsPage({ searchParams }) {
  // Extract unique tags from all projects
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();
  
  const [activeTag, setActiveTag] = useState("All");

  // If a ?tag query param is passed, we can catch it inside a useEffect
  useEffect(() => {
    // Basic catch if we parse searchParams on client
    const search = new URLSearchParams(window.location.search);
    const tagFromUrl = search.get("tag");
    if (tagFromUrl && allTags.includes(decodeURIComponent(tagFromUrl))) {
      setActiveTag(decodeURIComponent(tagFromUrl));
    }
  }, [allTags]);

  const filteredProjects = activeTag === "All" 
    ? projects 
    : projects.filter(p => p.tags.includes(activeTag));

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Simple Header */}
      <header className="sticky top-0 z-50 flex flex-wrap gap-4 items-center justify-between px-6 md:px-12 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <Link href="/" className="font-bold text-xl text-black flex items-center gap-2 hover:text-primaryOrange transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Home
        </Link>
        <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Project Archive</span>
      </header>

      <section className="flex-grow py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">All Projects</h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              A complete catalog of my independent ventures, freelance solutions, and academic developments.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button 
              onClick={() => setActiveTag("All")}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTag === "All" ? 'bg-primaryOrange text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
            >
              All Projects
            </button>
            {allTags.map((tag, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTag === tag ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
              >
                {tag}
              </button>
            ))}
          </div>

           {filteredProjects.length === 0 && (
             <div className="text-center py-20 text-slate-400">
               No projects found bearing the selected tag.
             </div>
           )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="group rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col">
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image src={project.image} alt={project.label} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-3 text-slate-800">{project.label}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} onClick={(e) => { e.stopPropagation(); setActiveTag(tag); }} className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md cursor-pointer hover:bg-primaryOrange hover:text-white transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.slug}`} className="text-primaryOrange font-bold hover:text-orange-600 transition-colors inline-flex items-center text-sm group-hover:gap-1">
                    View Details <span className="transition-all opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
