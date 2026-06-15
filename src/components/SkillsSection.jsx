function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <svg className="w-8 h-8 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>,
      skills: ["Python", "Golang", "PHP", "JavaScript", "C++", "Rust"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Frameworks & Libraries",
      icon: <svg className="w-8 h-8 mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>,
      skills: ["Laravel", "React.js", "Next.js", "Gin", "TensorFlow", "Keras", "Scikit-Learn"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Infrastructure & Tools",
      icon: <svg className="w-8 h-8 mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>,
      skills: ["Nginx", "PostgreSQL", "MySQL", "MQTT", "MinIO", "AWS", "Git"],
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "Hardware / IoT",
      icon: <svg className="w-8 h-8 mb-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>,
      skills: ["ESP8266", "Arduino", "Actuators", "Biometric Scanners"],
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
