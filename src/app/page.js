import Link from "next/link";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-white">
      <Navbar />

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
