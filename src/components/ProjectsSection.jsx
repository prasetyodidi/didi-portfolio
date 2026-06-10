import { projects } from "../data/projects";

function ProjectCard({ label, description, image, tags, slug }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col">
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <img src={image} alt={label} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-3 text-slate-800">{label}</h3>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <a href={`/projects/${slug}`} className="text-primaryOrange font-bold hover:text-orange-600 transition-colors inline-flex items-center text-sm group-hover:gap-1">
          View Details <span className="transition-all opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1">→</span>
        </a>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const featuredProjects = projects.slice(0, 2); // Show only top 2 features

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-slate-50 min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-black mb-4 text-center">Featured Portfolio</h2>
        <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">A showcase of the complex backend systems, engaging mobile apps, and beautiful web interfaces I&apos;ve built.</p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
        
        <div className="text-center">
          <a href="/projects" className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl shadow-sm hover:border-slate-900 hover:text-slate-900 transition-all hover:-translate-y-1">
            View All Projects 
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
