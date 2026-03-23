import Image from "next/image";
import HeroImage from "/public/hero-image.png"

function ButtonLanguage({ label, style }) {
  const buttonStyle = "w-fit font-bold text-xl px-6 py-2 rounded-lg " + style;
  return <button className={buttonStyle}>{label}</button>;
}

function HeroSection() {
  const languages = [
    {
      label: "Golang",
      style: "bg-primaryOrange/70 text-black"
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
    <div className="relative px-12 py-4 h-screen flex flex-col justify-center">
      <div className="absolute top-0 w-52 h-52 bg-primaryOrange blur-[8rem] rounded-full"></div>
      <div className="absolute bottom-8 left-12 grid grid-cols-2 gap-y-4 gap-x-0">{languages.map((language, index) => <ButtonLanguage key={index} {...language} />)}</div>
      <Image priority src={HeroImage} alt="hero image" className="absolute top-0 right-0 w-[750px] h-auto object-contain" />
      <div className="flex flex-col z-10 animate-fade-in-up">
        <h1 className="flex flex-col text-5xl md:text-6xl text-black mt-24 gap-3">
          <span className="font-light">My name is</span>
          <span className="font-semibold">Didi Prasetyo</span>
        </h1>
        <p className="text-slate-500 mt-8 text-lg md:text-xl max-w-lg">
          I am a professional programmer with more<br></br>than 5 years of experience
        </p>
        <a href="#contact" className="mt-10 w-fit px-10 py-3 rounded-full text-white bg-primaryOrange font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
          Hire Me
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
