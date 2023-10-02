import Link from "next/link";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import FooterSection from "./components/FooterSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  const headerLinkStyle = "hover:underline hover:cursor-pointer underline-offset-2 decoration-orange-500 decoration-2";
  return (
    <main className="realtive flex min-h-screen flex-col bg-white">
      <header className="z-10 absolute top-0 flex flex-row gap-3 text-black px-12 py-4">
        <Link href={"#"} className={headerLinkStyle}>About Me</Link>
        <Link href={"#"} className={headerLinkStyle}>Portofolio</Link>
        <Link href={"#"} className={headerLinkStyle}>Corporation</Link>
      </header>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}
