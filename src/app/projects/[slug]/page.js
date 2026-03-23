import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, projects } from "../../../data/projects";
import { notFound } from "next/navigation";
import FooterSection from "../../components/FooterSection";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Simple Header */}
      <header className="sticky top-0 z-50 flex items-center px-6 md:px-12 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <Link href="/" className="font-bold text-xl text-black flex items-center gap-2 hover:text-primaryOrange transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Home
        </Link>
      </header>

      {/* Hero Content */}
      <article className="flex-grow">
        <div className="max-w-4xl mx-auto w-full px-6 py-12 md:py-20">
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{project.label}</h1>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-primaryOrange/10 text-primaryOrange rounded-full text-sm font-semibold">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {project.description}
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-16 border-8 border-white bg-slate-100">
            {project.image && <Image src={project.image} alt={project.label} className="object-cover w-full h-full" priority />}
          </div>

          <div className="prose prose-lg prose-slate max-w-none text-slate-700">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Project Overview</h2>
            <p className="leading-relaxed mb-12">
              {project.content}
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Links & Resources</h2>
            <div className="flex flex-wrap gap-4">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-lg">
                View Source on GitHub
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-slate-200 text-slate-700 rounded-xl font-medium hover:border-primaryOrange hover:text-primaryOrange transition-colors">
                Visit Live Site
              </a>
            </div>
          </div>
        </div>
      </article>

      <FooterSection />
    </main>
  );
}
