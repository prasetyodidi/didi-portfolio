import Image from "next/image";
import HeroImage from "/public/hero-image.png"

function ButtonLanguage(language) {
  const buttonStyle = "w-fit font-bold text-xl px-6 py-2 rounded-lg " + language.style 
  return <button className={buttonStyle}>{language.label}</button>
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
    <div className="realtive px-12 py-4 h-screen">
      <div className="absolute top-0 w-52 h-52 bg-primaryOrange blur-[8rem] rounded-full"></div>
      <div className="absolute bottom-8 left-12 grid grid-cols-2 gap-y-4 gap-x-0">{languages.map((language) => ButtonLanguage(language))}</div>
      <Image src={HeroImage} alt="hero image" className="absolute top-0 right-0 w-[750px] h-auto" />
      <div className="flex flex-col">
        <h1 className="flex flex-col text-6xl text-black mt-24 gap-3">
          <span className="font-light">My name is</span>
          <span className="font-semibold">Didi Prasetyo</span>
        </h1>
        <p className="text-slate-500 mt-10">
          I am a professional programmer with more<br></br>than 2 years of experience
        </p>
        <button className="mt-10 w-fit px-10 py-3 rounded-full text-white bg-primaryOrange">
          Hire Me
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
