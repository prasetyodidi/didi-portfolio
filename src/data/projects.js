const Image1 = "/image1.webp";
const Image2 = "/didi-profesional-foto.webp";

export const projects = [
  {
    slug: "guestbook-muktamar",
    label: "Guestbook Muktamar Al-Irsyad 2022",
    description: "An interactive guestbook platform integrated with WhatsApp API, a QR code reader, and scanner to streamline event registration and attendance tracking.",
    content: "This project successfully handled thousands of attendees seamlessly during the Muktamar event. By utilizing a QR code scanning mechanism, we reduced the registration bottleneck and provided instant WhatsApp notifications to the guests upon successful check-in. The backend architecture was built to handle high concurrency, ensuring zero downtime throughout the event's peak hours.",
    image: Image1,
    gallery: [Image1, Image1], // Example of multiple images
    tags: ["WhatsApp API", "QR Code", "Backend", "Next.js"],
    githubLink: "https://github.com/prasetyodidi",
    liveLink: "" // Empty string simulates missing link
  },
  {
    slug: "roster-skpm",
    label: "Roster & SKPM Web App",
    description: "Innovative web solutions tailored for enhancing organizational efficiency and delivering an improved user experience for administrative tasks.",
    content: "Developed as a comprehensive internal tool suite, these applications allow administration staff to assign rosters dynamically and evaluate SKPM metrics. The system features role-based access control, a rich dashboard for data visualization, and an optimized frontend for managing large tables without performance lags.",
    image: Image1,
    gallery: [Image1],
    tags: ["Web App", "Frontend", "Backend", "React"],
    githubLink: "", // Empty string simulates missing github link
    liveLink: "https://github.com/prasetyodidi"
  },
  {
    slug: "iit-competition-weddingnesia",
    label: "IIT Competition & Weddingnesia",
    description: "Robust backend system architectures to support competition management and a platform for comprehensive wedding planning services.",
    content: "These two projects demonstrate my capacity to design robust, scalable backend systems. The IIT Competition backend was built to handle high concurrent traffic during user registration and quiz submission phases via robust RESTful APIs. For Weddingnesia, the system supports multi-tenant vendor management, automated invoice generation, and real-time availability synchronization.",
    image: Image1,
    gallery: [], // Empty gallery
    tags: ["Backend", "Database", "RESTful API", "Golang"],
    githubLink: "https://github.com/prasetyodidi",
    liveLink: "https://github.com/prasetyodidi"
  },
  {
    slug: "android-apps-collection",
    label: "Android Mobile Apps Collection",
    description: "A series of native Android applications, including GitHub User App, Kos App for housing needs, and a Covid Information App for real-time tracking.",
    content: "A dedicated showcase of native Android development utilizing Kotlin. The Covid App fetches live data from public APIs using Retrofit to provide real-time status updates globally. The Kos App features maps integration and local database caching via Room DB for a smooth offline user experience.",
    image: Image1,
    gallery: [Image1, Image2, Image1], // Multiple screenshots for Android
    tags: ["Android", "Kotlin", "Room DB", "Retrofit"],
    githubLink: "https://github.com/prasetyodidi",
    liveLink: "https://github.com/prasetyodidi"
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
