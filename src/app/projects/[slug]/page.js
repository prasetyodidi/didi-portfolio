import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, projects } from "../../../data/projects";
import { notFound } from "next/navigation";
import FooterSection from "../../components/FooterSection";
import ProjectLinks from "../../components/ProjectLinks";

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

          {/* Gallery Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center md:text-left">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Primary Image / Thumbnail */}
              <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 col-span-1 md:col-span-2">
                {project.image && <Image src={project.image} alt={`${project.label} Main`} className="object-cover w-full h-full" priority />}
              </div>
              
              {/* Additional Gallery Images */}
              {project.gallery && project.gallery.length > 0 && project.gallery.map((img, idx) => (
                <div key={idx} className="relative w-full h-[250px] rounded-3xl overflow-hidden shadow-md border-4 border-white bg-slate-100">
                  <Image src={img} alt={`${project.label} Gallery Image ${idx + 1}`} className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>

          <div className="prose prose-lg prose-slate max-w-none text-slate-700">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Project Overview</h2>
            <p className="leading-relaxed mb-12">
              {project.content}
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Links & Resources</h2>
            <ProjectLinks githubLink={project.githubLink} liveLink={project.liveLink} />
          </div>
        </div>
      </article>

      <FooterSection />
    </main>
  );
}
