"use client";

import { useState } from "react";

export default function ProjectLinks({ githubLink, liveLink }) {
  const [modalState, setModalState] = useState({ isOpen: false, type: "" });

  const handleClick = (e, link, type) => {
    if (!link) {
      e.preventDefault();
      setModalState({ isOpen: true, type });
    }
  };

  const closeModal = () => setModalState({ isOpen: false, type: "" });

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <a 
          href={githubLink || "#"} 
          target={githubLink ? "_blank" : "_self"} 
          rel={githubLink ? "noopener noreferrer" : ""} 
          onClick={(e) => handleClick(e, githubLink, "github")}
          className={`px-6 py-3 rounded-xl font-medium transition-all shadow-lg text-center flex-1 sm:flex-none ${
            githubLink 
              ? 'bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5' 
              : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
          }`}
        >
          View Source on GitHub
        </a>
        <a 
          href={liveLink || "#"} 
          target={liveLink ? "_blank" : "_self"} 
          rel={liveLink ? "noopener noreferrer" : ""} 
          onClick={(e) => handleClick(e, liveLink, "live")}
          className={`px-6 py-3 rounded-xl font-medium transition-all text-center flex-1 sm:flex-none ${
            liveLink 
              ? 'border-2 border-primaryOrange text-orange-700 hover:bg-primaryOrange hover:text-white hover:-translate-y-0.5' 
              : 'border-2 border-slate-300 text-slate-500 hover:bg-slate-50 hover:border-slate-400'
          }`}
        >
          Visit Live Site
        </a>
      </div>

      {modalState.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={closeModal}>
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl transform transition-all translate-y-0 opacity-100" onClick={e => e.stopPropagation()}>
            <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">Not Publicly Available</h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-center">
              {modalState.type === "github" 
                ? "The source code for this project is private or bound by a confidentiality agreement (NDA)." 
                : "The live site for this project is currently offline, internal-only, or requires authorization."}
            </p>
            <button 
              onClick={closeModal}
              className="w-full py-3 bg-primaryOrange text-white rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/30"
            >
              Understand & Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
