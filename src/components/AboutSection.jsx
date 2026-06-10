
function AboutSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center gap-8 text-black px-6 md:px-12 py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
            <p>
              Hello there! 👋 I&apos;m <span className="font-semibold text-primaryOrange">Didi Prasetyo</span>, an enthusiastic Web Developer and UI/UX Designer based in Central Java, Indonesia.
            </p>
            <p>
              With 5 years of professional experience, I have developed a strong passion for solving complex backend logic while simultaneously crafting intuitive, beautiful user interfaces on the frontend.
            </p>
            <p>
              As a Computer Science student, I continually explore fascinating new technologies. Whether I&apos;m designing systems in Golang or tracing pixel-perfect layouts in React, I am driven by the desire to build robust, scalable applications that deliver real value.
            </p>
          </div>
          <div className="relative h-[26rem] w-full rounded-2xl overflow-hidden shadow-2xl group border-4 border-white">
            <div className="absolute inset-0 bg-gradient-to-tr from-primaryOrange/20 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"></div>
            <img 
              priority
              src="/didi-profesional-foto.png"
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
