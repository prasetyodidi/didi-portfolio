const PlaceholderImage = "/confidential-placeholder.png";
const ImageRoster = "/image1.webp";

export const projects = [
  {
    slug: "guestbook-muktamar",
    label: "Guestbook Muktamar Al-Irsyad 2022",
    description: "An interactive guestbook platform integrated with WhatsApp API, a QR code reader, and scanner to streamline event registration and attendance tracking.",
    content: "This project successfully handled thousands of attendees seamlessly during the Muktamar event. By utilizing a QR code scanning mechanism, we reduced the registration bottleneck and provided instant WhatsApp notifications to the guests upon successful check-in. The backend architecture was built to handle high concurrency, ensuring zero downtime throughout the event's peak hours.",
    image: PlaceholderImage,
    gallery: [PlaceholderImage, PlaceholderImage],
    tags: ["WhatsApp API", "QR Code", "Backend", "Next.js"],
    platform: "web",
    githubLink: "",
    liveLink: ""
  },
  {
    slug: "roster-web-app",
    label: "Roster Web App",
    description: "Automated faculty-wide course scheduling system.",
    content: "Developed as a comprehensive internal tool suite, this application allows administration staff to assign rosters dynamically. The system features role-based access control, a rich dashboard for data visualization, and an optimized frontend for managing large tables without performance lags.",
    image: ImageRoster,
    gallery: [ImageRoster],
    tags: ["Laravel", "Tailwind CSS", "Web App"],
    platform: "web",
    githubLink: "",
    liveLink: ""
  },
  {
    slug: "skpm-web-app",
    label: "SKPM Web App",
    description: "Student engagement and extracurricular credit point management platform.",
    content: "Engineered to improve academic operational efficiency, this platform enables students to submit extracurricular achievements and administration staff to evaluate SKPM metrics seamlessly.",
    image: PlaceholderImage,
    gallery: [],
    tags: ["Laravel", "Tailwind CSS", "Web App"],
    platform: "web",
    githubLink: "",
    liveLink: ""
  },
  {
    slug: "weddingnesia",
    label: "Weddingnesia (Digital Invitation Platform)",
    description: "Scalable SaaS platform for digital wedding invitations.",
    content: "Developed a scalable SaaS platform for digital wedding invitations. Engineered a dynamic split-screen visual editor where users can customize invitation components with a real-time live preview. Architected a robust routing system using an Nginx reverse proxy that dynamically maps external custom domains to specific user slugs with strict security validation.",
    image: PlaceholderImage,
    gallery: [],
    tags: ["Laravel", "React.js", "Nginx", "SaaS"],
    platform: "web",
    githubLink: "",
    liveLink: ""
  },
  {
    slug: "iit-competition",
    label: "IITC (Intermedia Information Technology Competition)",
    description: "Robust backend architecture for a university-level technology competition platform.",
    content: "Designed and developed decoupled RESTful API services connecting the frontend to a PostgreSQL database. Implemented a comprehensive Role-Based Access Control (RBAC) system utilizing Laravel Sanctum tokens. Built backend logic to process transaction proof uploads into local server storage with robust file validations.",
    image: PlaceholderImage,
    gallery: [],
    tags: ["Backend", "Laravel", "PostgreSQL", "API"],
    platform: "web",
    githubLink: "",
    liveLink: "https://iitc.intermediaamikom.org/"
  },
  {
    slug: "kos-app",
    label: "Kos App",
    description: "Aplikasi manajemen kos untuk penyewa melihat jatuh tempo dan berinteraksi dengan pemilik.",
    content: "Aplikasi mobile yang dikembangkan selama masa internship. Aplikasi ini membantu penyewa atau penghuni kos untuk melihat tanggal jatuh tempo pembayaran sewa dan menyediakan fitur chat langsung dengan pemilik kos. Menggunakan Room DB untuk local storage dan Maps untuk integrasi lokasi.",
    image: "/kos-app/home-screen.webp",
    gallery: ["/kos-app/login-screen.webp", "/kos-app/register-screen.webp", "/kos-app/home-screen.webp", "/kos-app/sidebar.webp", "/kos-app/about-screen.webp", "/kos-app/splash-screen.webp"],
    tags: ["Android", "Kotlin", "Room DB", "Maps", "Internship Project"],
    platform: "mobile",
    githubLink: "https://github.com/prasetyodidi/kos-app",
    liveLink: ""
  },
  {
    slug: "aplikasi-pantau",
    label: "Aplikasi Pantau (Covid Information App)",
    description: "Aplikasi informasi statistik Covid-19, pencarian rumah sakit, dan nomor darurat berdasarkan daerah.",
    content: "Sebuah aplikasi yang berguna untuk melihat informasi statistik covid (positif, meninggal, sembuh) berdasarkan daerah (search provinsi dan kabupaten). Pengguna juga dapat mencari dan melihat daftar rumah sakit (kapasitas covid dan non covid, lokasi), daftar emergency number seperti nomor panggilan darurat, polisi, pemadam kebakaran, serta halaman daftar berita terkait covid.",
    image: "/covid-app/statistic-covid-screen.webp",
    gallery: ["/covid-app/statistic-covid-screen.webp", "/covid-app/hospital-screen.webp", "/covid-app/hospital-detail-screen.webp", "/covid-app/emergency-numbers-screen.webp", "/covid-app/news-screen.webp", "/covid-app/setting-screen.webp", "/covid-app/about-screen.webp"],
    tags: ["Android", "Kotlin", "Retrofit", "API", "Personal Project"],
    platform: "mobile",
    githubLink: "https://github.com/prasetyodidi/aplikasi-pantau",
    liveLink: ""
  },
  {
    slug: "github-user-app",
    label: "GitHub User App",
    description: "Aplikasi pencarian akun GitHub menggunakan GitHub API resmi.",
    content: "Aplikasi mobile yang menggunakan API resmi GitHub untuk mencari dan melihat detail akun GitHub pengguna lain secara real-time. Proyek ini membuktikan pemahaman dalam integrasi RESTful API menggunakan Retrofit dan pengelolaan state di Android.",
    image: PlaceholderImage,
    gallery: [],
    tags: ["Android", "Kotlin", "RESTful API", "Personal Project"],
    platform: "mobile",
    githubLink: "https://github.com/prasetyodidi/Github-User",
    liveLink: ""
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
