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
      <header className="sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-3 md:py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 gap-3 md:gap-0">
        <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-start">
          {Logo && <Image src={Logo} alt="Didi Prasetyo Logo" width={36} height={36} className="rounded-full object-cover" />}
          <span className="font-bold text-lg md:text-xl text-black ml-2">Didi Prasetyo</span>
        </div>

        <nav className="flex flex-row overflow-x-auto w-full md:w-auto gap-5 md:gap-6 text-slate-800 pb-1 md:pb-0 hide-scrollbar justify-start md:justify-end px-2 md:px-0">
          <Link href={"#home"} className={`${headerLinkStyle} whitespace-nowrap`}>Home</Link>
          <Link href={"#about"} className={`${headerLinkStyle} whitespace-nowrap`}>About</Link>
          <Link href={"#skills"} className={`${headerLinkStyle} whitespace-nowrap`}>Skills</Link>
          <Link href={"#portfolio"} className={`${headerLinkStyle} whitespace-nowrap`}>Portfolio</Link>
          <Link href={"#experience"} className={`${headerLinkStyle} whitespace-nowrap`}>Experience</Link>
          <Link href={"#contact"} className={`${headerLinkStyle} whitespace-nowrap`}>Contact</Link>
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
