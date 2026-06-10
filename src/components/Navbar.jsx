"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const desktopLinkStyle = "hover:text-orange-700 transition-colors decoration-orange-500 decoration-2 underline-offset-4 font-medium text-sm lg:text-base";
  const mobileLinkStyle = "hover:text-orange-700 transition-colors decoration-orange-500 decoration-2 underline-offset-4 font-bold text-2xl text-slate-900";

  const closeMenu = () => setIsOpen(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 flex flex-row justify-between items-center px-6 md:px-12 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-2 z-50">
          <img src="/didi-logo.png" alt="Didi Prasetyo Logo" width={40} height={40} className="rounded-full object-cover shadow-sm" />
          <span className="font-bold text-xl text-black ml-2">Didi Prasetyo</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-row gap-6 lg:gap-8 text-slate-800 items-center">
          <a href={"#home"} className={desktopLinkStyle}>Home</a>
          <a href={"#about"} className={desktopLinkStyle}>About</a>
          <a href={"#skills"} className={desktopLinkStyle}>Skills</a>
          <a href={"#portfolio"} className={desktopLinkStyle}>Portfolio</a>
          <a href={"#experience"} className={desktopLinkStyle}>Experience</a>
          <a href={"#contact"} className={desktopLinkStyle}>Contact</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-50 bg-slate-50 rounded-full border border-slate-100 shadow-sm"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-2' : '-translate-y-0.5'}`}></span>
          <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0.5'}`}></span>
        </button>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 transition-all duration-400 ease-in-out md:hidden flex flex-col items-center justify-center gap-6 pt-16 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        <a href={"#home"} onClick={closeMenu} className={mobileLinkStyle}>Home</a>
        <a href={"#about"} onClick={closeMenu} className={mobileLinkStyle}>About Me</a>
        <a href={"#skills"} onClick={closeMenu} className={mobileLinkStyle}>Skills</a>
        <a href={"#portfolio"} onClick={closeMenu} className={mobileLinkStyle}>Portfolio</a>
        <a href={"#experience"} onClick={closeMenu} className={mobileLinkStyle}>Experience</a>
        <a href={"#contact"} onClick={closeMenu} className={mobileLinkStyle}>Contact</a>
        
        <div className="mt-8 pt-8 border-t border-slate-200 flex gap-4 w-3/4 justify-center">
           <a href="https://github.com/prasetyodidi" target="_blank" rel="noreferrer" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:text-orange-700 hover:bg-orange-50 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
           </a>
        </div>
      </div>
    </>
  );
}
