
function ExperienceItem({ year, role, company, description, projects, filterTag }) {
  const visibleProjects = projects ? projects.slice(0, 3) : [];
  const extraCount = projects ? projects.length - 3 : 0;

  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Timeline Line */}
      <div className="absolute left-4 sm:left-[7.5rem] top-0 bottom-0 w-px bg-slate-200 group-last:bg-gradient-to-b group-last:from-slate-200 group-last:to-transparent"></div>

      {/* Timeline Dot */}
      <div className="absolute left-[calc(1rem-4px)] sm:left-[calc(7.5rem-4px)] top-8 w-2 h-2 rounded-full bg-primaryOrange outline outline-4 outline-white"></div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 items-start">
        <div className="text-orange-700 font-bold text-sm sm:w-20 pt-1 flex-shrink-0">{year}</div>
        <div>
          <h3 className="text-xl font-bold text-slate-800">{role}</h3>
          <h4 className="text-md font-medium text-slate-500 mb-3">{company}</h4>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">{description}</p>

          {visibleProjects.length > 0 && (
            <div className="mt-4">
              <h5 className="text-sm font-bold text-slate-800 mb-2">Key Projects:</h5>
              <ul className="list-disc pl-5 space-y-1">
                {visibleProjects.map((proj, idx) => (
                  <li key={idx} className="text-sm text-slate-600 leading-relaxed">
                    {filterTag ? (
                      <a href={`/projects?tag=${encodeURIComponent(filterTag)}`} className="hover:underline hover:text-orange-700 transition-colors">
                        {proj}
                      </a>
                    ) : (
                      proj
                    )}
                  </li>
                ))}
              </ul>
              {extraCount > 0 && filterTag && (
                <a
                  href={`/projects?tag=${encodeURIComponent(filterTag)}`}
                  className="inline-block mt-3 text-sm font-bold text-orange-700 hover:text-orange-600 transition-colors"
                >
                  See {extraCount} more related project{extraCount > 1 ? 's' : ''} →
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      year: "2021 - Present",
      role: "Freelance Web Developer",
      company: "Self-Employed",
      description: "Developing custom web applications, backend architectures, and responsive frontend interfaces for various clients. Accumulated professional experience handling complex integrations.",
      projects: [
        "Insurance Accounting System",
        "Large-Scale Event Management (Muktamar)",
        "Roster Web App",
        "SKPM Web App"
      ],
      filterTag: "Self-Employed"
    },
    {
      year: "2025 - 2026",
      role: "Software Engineer",
      company: "PT Pusat Teknologi Nusantara",
      description: "Architected scalable backend services, managed monolithic MVP development, and implemented direct hardware-to-software biometric integrations.",
      projects: [
        "Social Media Platform MVP",
        "Centralized Auth & API Services",
        "MinIO Object Storage Infrastructure",
        "HR Attendance System Integration"
      ],
      filterTag: "PT Pusat Teknologi Nusantara"
    },
    {
      year: "2022 - 2026",
      role: "Computer Science Student",
      company: "University",
      description: "Pursuing a degree in Computer Science. Actively engaged in machine learning research, IoT prototyping, and capstone projects.",
      projects: [
        "SEHAT? (Bangkit Academy Capstone)",
        "Predictive Modeling (Undergraduate Thesis)",
        "IoT Automatic Gate System",
        "IITC Backend Platform",
        "Weddingnesia (SaaS Digital Invitation)"
      ],
      filterTag: "University"
    },
    {
      year: "2021 - 2022",
      role: "Android Developer Intern",
      company: "CV Nurvindo",
      description: "Developed 'Kos App', a native Android application for boarding house management. The app enables tenants to track payment due dates and communicate directly with landlords.",
      projects: [
        "Kos App"
      ],
      filterTag: "CV Nurvindo"
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-white min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">Experience & Education</h2>
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50">
          <div className="relative">
            {experiences.map((exp, idx) => (
              <ExperienceItem key={idx} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
