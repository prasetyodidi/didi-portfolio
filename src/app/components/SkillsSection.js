function SkillsSection() {
  const skillCategories = [
    {
      title: "Backend & Systems",
      icon: <svg className="w-8 h-8 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>,
      skills: ["Golang", "PHP", "Rust", "Node.js"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Mobile Development",
      icon: <svg className="w-8 h-8 mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>,
      skills: ["Android Native", "Kotlin", "Flutter"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Frontend & Web",
      icon: <svg className="w-8 h-8 mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
      skills: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "UI/UX & Tools",
      icon: <svg className="w-8 h-8 mb-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>,
      skills: ["Figma", "Git", "Postman", "Linux"],
      color: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">Skills & Tech Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all bg-white hover:-translate-y-1">
              {cat.icon}
              <h3 className="text-xl font-bold mb-4 text-slate-800 border-b border-slate-100 pb-2">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${cat.color}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
