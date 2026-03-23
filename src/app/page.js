import Link from "next/link";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import Logo from "/public/didi-logo.png";

export default function Home() {
  const headerLinkStyle = "hover:text-primaryOrange transition-colors decoration-orange-500 decoration-2 underline-offset-4 font-medium text-sm lg:text-base";
  
  return (
    <main className="relative flex min-h-screen flex-col bg-white">
      {/* Sticky Header with Glassmorphism */}
      <header className="sticky top-0 z-50 flex flex-row justify-between items-center px-6 md:px-12 py-4 bg-white/70 backdrop-blur-md border-b border-gray-100">
        <div className="flex items-center gap-2">
          {Logo && <Image src={Logo} alt="Didi Prasetyo Logo" width={40} height={40} className="rounded-full object-cover" />}
          <span className="font-bold text-xl text-black ml-2">Didi Prasetyo</span>
        </div>
        
        <nav className="hidden md:flex flex-row gap-6 text-slate-800">
          <Link href={"#home"} className={headerLinkStyle}>Home</Link>
          <Link href={"#about"} className={headerLinkStyle}>About Me</Link>
          <Link href={"#skills"} className={headerLinkStyle}>Skills</Link>
          <Link href={"#portfolio"} className={headerLinkStyle}>Portfolio</Link>
          <Link href={"#experience"} className={headerLinkStyle}>Experience</Link>
          <Link href={"#contact"} className={headerLinkStyle}>Contact</Link>
        </nav>
      </header>

      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <SkillsSection />
      <div id="portfolio">
        <ProjectsSection />
      </div>
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
