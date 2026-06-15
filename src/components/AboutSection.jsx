
function AboutSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center gap-8 text-black px-6 md:px-12 py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
            <p>
              <span className="font-semibold text-orange-700">Fullstack Engineer</span> with 4+ years of hands-on experience building scalable architectures, reliable API services, and robust data infrastructures. Adept at navigating complex business logic, from distributed backend services using Golang and Python to monolithic MVPs with Laravel.
            </p>
            <p>
              Proven track record of architecting high-concurrency event management systems and integrating hardware with software solutions. Possess a strong foundation in Artificial Intelligence and Machine Learning pipelines, backed by predictive modeling research and global certifications.
            </p>
            <p>
              Passionate about modern development workflows, low-level system design (Rust, Web3), and delivering scalable, high-performance solutions in fast-paced environments.
            </p>
          </div>
          <div className="relative h-[26rem] w-full rounded-2xl overflow-hidden shadow-2xl group border-4 border-white">
            <div className="absolute inset-0 bg-gradient-to-tr from-primaryOrange/20 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"></div>
            <img 
              fetchpriority="high"
              src="/didi-profesional-foto.webp"
              alt="Didi Prasetyo" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
