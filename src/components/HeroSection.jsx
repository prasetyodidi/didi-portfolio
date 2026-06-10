
function ButtonLanguage({ label, style }) {
  const buttonStyle = "w-fit font-bold text-sm md:text-xl px-4 md:px-6 py-2 rounded-lg shadow-sm " + style;
  return <button className={buttonStyle}>{label}</button>;
}

function HeroSection() {
  const languages = [
    {
      label: "Golang",
      style: "bg-primaryOrange/90 md:bg-primaryOrange/70 text-black"
    },
    {
      label: "KOTLIN",
      style: "bg-primaryOrange text-white"
    },
    {
      label: "PHP",
      style: "bg-slate-900 text-white"
    },
    {
      label: "Javascript",
      style: "bg-slate-200 text-black"
    }
  ]
  return (
    <div className="relative px-6 md:px-12 py-4 min-h-[90vh] md:h-screen flex flex-col justify-start md:justify-center overflow-hidden">
      <div className="absolute top-0 right-0 md:left-0 w-52 h-52 bg-primaryOrange blur-[6rem] md:blur-[8rem] rounded-full opacity-50 md:opacity-100"></div>

      {/* Decorative Hero Image */}
      <div className="absolute right-[-45%] bottom-[-5%] md:top-0 md:right-0 h-[100%] w-[150%] md:w-[750px] z-0 opacity-100 pointer-events-none flex justify-end items-center">
        <img fetchpriority="high" src="/hero-image.webp" alt="hero image" className="object-contain w-auto h-[120%] md:h-full" />
      </div>

      <div className="flex flex-col z-10 animate-fade-in-up mt-[-10vh] md:mt-0 relative">
        <h1 className="flex flex-col text-4xl sm:text-5xl md:text-6xl text-black mt-20 md:mt-24 gap-1 md:gap-3">
          <span className="font-light">My name is</span>
          <span className="font-semibold">Didi Prasetyo</span>
        </h1>
        <p className="text-slate-600 md:text-slate-500 mt-6 md:mt-8 text-base sm:text-lg md:text-xl max-w-lg leading-relaxed">
          I am a professional programmer with more<br className="hidden sm:block" /> than 5 years of experience.
        </p>
        <a href="#contact" className="mt-8 md:mt-10 w-fit px-8 md:px-10 py-3 md:py-4 rounded-full text-white bg-primaryOrange font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
          Hire Me
        </a>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-6 md:left-12 flex flex-wrap gap-2 md:grid md:grid-cols-2 md:gap-y-4 md:gap-x-0 z-20 w-full md:w-auto pr-6 md:pr-0">
        {languages.map((language, index) => <ButtonLanguage key={index} {...language} />)}
      </div>
    </div>
  );
}

export default HeroSection;
