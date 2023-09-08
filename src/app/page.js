import Link from "next/link";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="realtive flex min-h-screen flex-col bg-white">
      <header className="absolute top-0 flex flex-row gap-3 text-black px-12 py-4">
        <Link href={"#"}>About Me</Link>
        <Link href={"#"}>Portofolio</Link>
        <Link href={"#"}>Corporation</Link>
      </header>
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
