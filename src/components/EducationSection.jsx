import { education, featuredEducationSlugs } from "../data/education.js";

export default function EducationSection() {
  // Map featured slugs to actual education objects, fallback to first 3 if empty
  const topEducation = (featuredEducationSlugs && featuredEducationSlugs.length > 0)
    ? featuredEducationSlugs.map(slug => education.find(e => e.slug === slug)).filter(Boolean)
    : education.slice(0, 3);

  return (
    <div className="bg-slate-50 py-20 px-6 md:px-12 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Education & Certifications</h2>
            <p className="text-slate-500 max-w-2xl text-lg">A timeline of my formal education, specialized training, and professional certifications from world-class institutions.</p>
          </div>
          <a href="/education" className="hidden md:inline-flex mt-6 md:mt-0 items-center justify-center px-6 py-3 bg-white text-slate-800 font-bold rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm hover:shadow-md">
            View All Credentials
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topEducation.map((edu, idx) => (
            <a href={`/education/${edu.slug}`} key={idx} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 w-full bg-slate-100 flex items-center justify-center p-8 overflow-hidden relative">
                {/* Abstract Glassmorphism Background Pattern */}
                <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-orange-100 to-rose-100 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 w-full h-full group-hover:scale-105 transition-transform duration-500">
                  {edu.coverImages?.map((img, i) => (
                    <img 
                      key={i}
                      src={img} 
                      alt={`${edu.title} logo ${i}`} 
                      className={`object-contain drop-shadow-md transition-all ${edu.coverImages.length === 1 ? 'max-h-36 max-w-[80%]' : 'max-h-20 max-w-[45%]'}`} 
                      onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                    />
                  ))}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">{edu.category}</span>
                <h3 className="font-bold text-xl text-slate-900 mb-2 leading-tight group-hover:text-orange-700 transition-colors">{edu.title}</h3>
                <p className="text-slate-500 text-sm font-medium mb-4">{edu.issuer}</p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-sm font-bold text-slate-400 group-hover:text-orange-700 transition-colors">
                  View Detail <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 md:hidden text-center">
          <a href="/education" className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-800 font-bold rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm">
            View All Credentials
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
