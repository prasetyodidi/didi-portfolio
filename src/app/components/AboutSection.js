function AboutSection() {
  const description = `Hello there! Welcome to my portfolio! 👋 My name is Didi Prasetyo, and
    I'm a Web Developer and UI/UX Designer based in Central Java, Indonesia.
    As a tech enthusiast and a computer science student, I'm deeply
    passionate about all things related to technology and constantly excited
    to explore new and fascinating topics in the field.`;
  const description2 = `In the realm of web development, I have contributed significantly to
    various projects. Notable among these is the Guestbook for Muktamar
    Al-Irsyad in 2022, where I integrated WhatsApp API, QR code reader, and
    scanner, creating an interactive and user-friendly platform.
    Additionally, I've developed innovative solutions such as the Roster Web
    App and SKPM Web App, both aimed at enhancing efficiency and user
    experience. My expertise also extends to backend development, as
    demonstrated in projects like the IIT Competition and Weddingnesia,
    where I created robust backend systems to support these ventures.`;
  const description3 = `In my journey as an Android developer, I've embarked on exciting side
    hustle projects. One of my notable creations is the GitHub User app,
    showcasing my proficiency in leveraging APIs and creating seamless user
    experiences. I've also developed the Kos App, addressing housing needs,
    and the Covid App, providing crucial information during these
    challenging times. These applications underscore my skills in crafting
    intuitive and functional mobile experiences.`;
  return (
    <div className="min-h-screen flex flex-col gap-3 text-black mx-14 pt-24">
      <h1 className="text-center text-2xl my-2">I will introduce my self</h1>
      <p className="text-lg">{description}</p>
      <p className="text-lg">{description2}</p>
      <p className="text-lg">{description3}</p>
    </div>
  );
}

export default AboutSection;
