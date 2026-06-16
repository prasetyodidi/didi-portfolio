export const featuredProjectSlugs = [
  "insurance-accounting-system",
  "sehat-bangkit-capstone"
];

const PlaceholderImage = "/confidential-placeholder.webp";
const ImageRoster = "/image1.webp";

export const projects = [
  {
    slug: "sehat-bangkit-capstone",
    label: "SEHAT? (Bangkit Academy Capstone)",
    description: "An integrated mental health application featuring an NLP model for mental state classification and a K-Means based music recommendation system.",
    contribution: "Built a Deep Learning NLP model using TensorFlow and Keras implementing an LSTM network with TextVectorization to classify mental states across 7 categories. Engineered a personalized music recommendation system using Scikit-Learn with K-Means clustering and PCA, applying Cosine Similarity to suggest tailored music based on user's predicted mood.",
    caseStudy: {
      problem: "Sekitar 1 dari 10 orang di Indonesia mengalami gangguan mental. Sebagian besar aplikasi kesehatan hanya berfokus pada satu aspek tanpa pendekatan holistik. Dibutuhkan solusi digital terintegrasi untuk fisik dan mental.",
      approach: "Membangun aplikasi SEHAT? untuk mengelola kesehatan fisik dan mental secara bersamaan.",
      tech: "Pengembangan NLP menggunakan LSTM, TextVectorization, PCA, dan K-Means Clustering untuk klasifikasi dan rekomendasi musik.",
      outcome: "Secara teknis, model klasifikasi berbasis NLP berhasil diimplementasikan untuk menganalisis kondisi pengguna. Proyek ini sukses diwujudkan menjadi aplikasi fungsional yang mampu mengidentifikasi dan memecahkan masalah kesehatan mental-fisik secara nyata dan terintegrasi."
    },
    image: PlaceholderImage,
    gallery: [],
    tags: ["Python", "TensorFlow", "Keras", "Machine Learning", "University"],
    platform: "web",
    githubLink: "",
    liveLink: "",
    role: "AI / Machine Learning Engineer",
    duration: "September 2024 – December 2024",
    relatedCertificates: ["Bangkit Academy 2024 - Machine Learning"]
  },
  {
    slug: "predictive-modeling-thesis",
    label: "Predictive Modeling (Undergraduate Thesis)",
    description: "An end-to-end multi-label classification pipeline to predict student learning behaviors using ELS activity logs.",
    contribution: "Engineered an end-to-end multi-label classification pipeline to predict student learning behaviors. Resolved extreme dataset class imbalance via Random Oversampling and handled missing data using median imputation. Conducted rigorous hyperparameter tuning and model evaluation using Nested Cross-Validation, demonstrating that Random Forest outperformed XGBoost.",
    caseStudy: {
      problem: "Prediksi gaya belajar di ELS saat ini terbatas pada pendekatan single-label, padahal mahasiswa memiliki kombinasi gaya belajar (FSLSM) simultan. Data log juga mengalami class imbalance ekstrem (17.5:1).",
      approach: "Menerapkan pendekatan multi-label classification dengan imputasi median dan Random Oversampling untuk menyeimbangkan data.",
      tech: "Pengujian algoritma Random Forest, XGBoost, SVM, dan RBF Network, divalidasi dengan Nested Cross-Validation.",
      outcome: "Random Forest terbukti paling akurat (F1-Macro 0.7063) dan stabil (standar deviasi ±0.0794) dibandingkan algoritma lainnya."
    },
    image: PlaceholderImage,
    gallery: [],
    tags: ["Python", "Machine Learning", "Random Forest", "Data Science", "University"],
    platform: "web",
    githubLink: "",
    liveLink: "",
    role: "Machine Learning Researcher",
    duration: "2022 - 2026"
  },
  {
    slug: "iot-automatic-gate",
    label: "IoT Automatic Gate System",
    description: "An end-to-end IoT smart gate platform allowing automated access through secure QR code scanning.",
    contribution: "Architected the backend infrastructure using Golang and Gin for RESTful API delivery. Built and deployed a custom high-performance MQTT Broker using the mochi-mqtt library. Engineered the hardware prototype using an ESP8266 microcontroller and 180-degree servo motor. Designed a secure authentication flow with a web-based QR code (Next.js) for instantaneous gate actuation.",
    caseStudy: {
      problem: "Karyawan sering tertinggal kartu akses fisik. Perusahaan juga kesulitan melacak, memberikan, atau memutus akses karyawan baru/keluar secara instan.",
      approach: "Menerapkan sistem pintu tanpa kartu fisik yang dikontrol via protokol MQTT agar respons gerbang sangat cepat (< 1 detik).",
      tech: "Golang (Gin), Custom Mochi-MQTT Broker, C++ (ESP8266), Next.js.",
      outcome: "Akses keluar masuk menjadi seamless bagi karyawan maupun HR, dengan waktu respons aktuator gerbang hitungan milidetik."
    },
    image: PlaceholderImage,
    gallery: [],
    tags: ["Golang", "MQTT", "ESP8266", "IoT", "Next.js", "University"],
    platform: "web",
    githubLink: "",
    liveLink: "",
    role: "Go Backend Engineer & Hardware Prototyper",
    duration: "2023"
  },
  {
    slug: "insurance-accounting-system",
    label: "Insurance Accounting System",
    description: "Comprehensive financial system with complex accounting logic and enterprise integrations.",
    contribution: "Built a comprehensive financial system using Laravel and React.js. Translated complex financial logic (Chart of Accounts, General Ledger, Balance Sheets) into precise backend architecture and integrated the platform seamlessly with other enterprise workflows.",
    caseStudy: {
      problem: "Perlu pencatatan keuangan tersentralisasi secara end-to-end untuk perusahaan skala Holding (Holding -> Perusahaan -> Cabang -> Mitra), tanpa kebocoran data antar entitas (data bleeding).",
      approach: "Menerapkan Data Office sebagai first-class citizen. Setiap fitur akan terikat dengan struktur hierarki office tertinggi (Holding), mendukung arsitektur multi-tenant untuk banyak holding sekaligus.",
      tech: "Laravel, PostgreSQL, Redis (Caching report & static data), Docker, CI/CD via GitHub Actions, AWS S3 Storage, Integrasi Core System Asuransi.",
      outcome: "Pencatatan keuangan (target, pendapatan, pengeluaran) terjamin akurasinya secara end-to-end dengan isolasi data yang sangat ketat antar level entitas perusahaan."
    },
    image: PlaceholderImage,
    gallery: [],
    tags: ["Laravel", "React.js", "Backend", "Web App", "Self-Employed"],
    platform: "web",
    githubLink: "",
    liveLink: "",
    role: "Lead Backend Developer",
    duration: "February 2025 – December 2025"
  },
  {
    slug: "social-media-platform-mvp",
    label: "Social Media Platform MVP",
    description: "Monolithic MVP for a new social media platform driven from initial concept to a fully functional prototype.",
    contribution: "Spearheaded the development of a monolithic MVP using Laravel for a new social media platform, driving the product from initial concept to a fully functional prototype.",
    caseStudy: {
      problem: "Instansi membutuhkan platform portal informasi dan blogging yang resmi, namun semudah menggunakan Facebook, tanpa kurva pelatihan pengguna.",
      approach: "Membangun MVP Media Sosial dengan dukungan custom domain agar blog setiap instansi terlihat resmi dan memiliki tingkat kredibilitas tinggi.",
      tech: "Laravel (Fullstack), PostgreSQL, Docker.",
      outcome: "Platform MVP berhasil diluncurkan dengan cepat, memungkinkan instansi untuk mandiri membagikan konten edukasi/informasi dengan identitas brand mereka sendiri."
    },
    image: PlaceholderImage,
    gallery: [],
    tags: ["Laravel", "PostgreSQL", "Docker", "Backend", "Web App", "CV Pusat Teknologi Nusantara"],
    platform: "web",
    githubLink: "",
    liveLink: "",
    role: "Fullstack Software Engineer",
    duration: "January 2025 – January 2026"
  },
  {
    slug: "centralized-auth-api-services",
    label: "Centralized Auth & API Services",
    description: "Scalable backend services for high-performance API delivery and centralized authentication.",
    contribution: "Architected and deployed scalable backend services using Golang for high-performance API delivery. Developed Python microservices for centralized authentication across multiple related enterprise applications.",
    caseStudy: {
      problem: "Karyawan harus melakukan otentikasi berulang kali untuk mengakses layanan internal perusahaan yang berbeda-beda.",
      approach: "Mengimplementasikan Single Sign-On (SSO) terpusat menggunakan proyek open-source Authentik secara self-hosted.",
      tech: "Golang, Python, Authentik (goauthentik.io), OIDC/SAML.",
      outcome: "Perusahaan memiliki sistem SSO mandiri yang mempermudah akses user. Sistem ini juga scalable dan bisa diintegrasikan dengan external service karena menggunakan standar internasional."
    },
    image: PlaceholderImage,
    gallery: [],
    tags: ["Golang", "Python", "API", "Backend", "CV Pusat Teknologi Nusantara"],
    platform: "web",
    githubLink: "",
    liveLink: "",
    role: "Backend & Security Engineer",
    duration: "January 2025 – January 2026"
  },
  {
    slug: "minio-object-storage-infrastructure",
    label: "MinIO Object Storage Infrastructure",
    description: "Robust object storage infrastructure optimized for data retrieval and system reliability.",
    contribution: "Engineered and independently managed a robust object storage infrastructure using MinIO, optimizing data retrieval and system reliability for enterprise-scale usage.",
    caseStudy: {
      problem: "Perusahaan memiliki berbagai layanan yang menyimpan data sensitif dan butuh penyimpanan terpusat yang aman, namun solusi Cloud S3 memakan biaya operasional yang tinggi.",
      approach: "Menjalankan self-hosted S3 service menggunakan MinIO yang kencang, aman untuk data sensitif, dan mendukung hingga skala multi-terabyte tanpa melanggar kepatuhan data.",
      tech: "MinIO, S3 Compatible APIs.",
      outcome: "Seluruh aplikasi di perusahaan kini tersentralisasi ke satu wadah storage dengan kemudahan akses setara AWS S3, menghemat biaya operasional secara massal."
    },
    image: PlaceholderImage,
    gallery: [],
    tags: ["MinIO", "Infrastructure", "Cloud", "CV Pusat Teknologi Nusantara"],
    platform: "web",
    githubLink: "",
    liveLink: "",
    role: "Cloud Infrastructure Engineer",
    duration: "January 2025 – January 2026"
  },
  {
    slug: "hr-attendance-system-integration",
    label: "HR Attendance System Integration",
    description: "Seamless hardware-to-software integration connecting attendance systems with biometric fingerprint devices.",
    contribution: "Developed a seamless hardware-to-software integration by connecting a human resource attendance system directly with biometric fingerprint and facial recognition devices via APIs.",
    caseStudy: {
      problem: "Pencatatan kehadiran karyawan sering menjadi kendala bagi instansi klien maupun internal perusahaan, terutama mencari metode presensi yang paling pas untuk dinamika staf lapangan vs kantor.",
      approach: "Membangun sistem layanan SaaS (Business-to-Business) berarsitektur omnichannel. Ini memberikan opsi fleksibilitas bagi klien instansi untuk memilih input presensi yang sesuai kebutuhan mereka (Mobile, Web, atau Mesin).",
      tech: "Laravel (Admin & Web), PostgreSQL, Android Mobile Client, API Integrasi Mesin Biometrik (Sidik Jari & Wajah).",
      outcome: "Sistem ini sukses di-maintenance dan diandalkan sebagai layanan service perusahaan untuk eksternal klien maupun pemakaian internal, menyatukan rekapitulasi data kehadiran dalam Single Source of Truth."
    },
    image: PlaceholderImage,
    gallery: [],
    tags: ["Hardware Integration", "Backend", "CV Pusat Teknologi Nusantara"],
    platform: "web",
    githubLink: "",
    liveLink: "",
    role: "Backend API Engineer",
    duration: "January 2025 – January 2026"
  },
  {
    slug: "guestbook-muktamar",
    label: "Guestbook Muktamar Al-Irsyad 2022",
    description: "An interactive guestbook platform integrated with WhatsApp API, a QR code reader, and scanner to streamline event registration and attendance tracking.",
    contribution: "Architected real-time event platforms managing massive registration workflows, QR code access control, digital guestbooks, and live attendance reporting. The system successfully handled high-concurrency traffic during major events, including the national-scale 10000 Lengger Bicara (2024) and Muktamar Al Irsyad (2022).",
    image: PlaceholderImage,
    gallery: [PlaceholderImage, PlaceholderImage],
    tags: ["WhatsApp API", "QR Code", "Backend", "Next.js", "Self-Employed"],
    platform: "web",
    githubLink: "",
    liveLink: "",
    role: "Full-Stack Developer Freelance",
    duration: "2022 - 2024"
  },
  {
    slug: "roster-web-app",
    label: "Roster Web App",
    description: "Automated faculty-wide course scheduling system.",
    contribution: "Engineered an automated faculty-wide course scheduling system and developed a role-based access control architecture. Built a rich dashboard for data visualization and an optimized frontend capable of managing large data tables without performance lags, significantly improving academic operational efficiency.",
    image: ImageRoster,
    gallery: [ImageRoster],
    tags: ["Laravel", "Tailwind CSS", "Web App", "Self-Employed"],
    platform: "web",
    githubLink: "",
    liveLink: "",
    role: "Full-Stack Developer Freelance",
    duration: "August 2022 – October 2022"
  },
  {
    slug: "skpm-web-app",
    label: "SKPM Web App",
    description: "Student engagement and extracurricular credit point management platform.",
    contribution: "Engineered a student engagement and extracurricular credit point management platform to improve academic operational efficiency. Enabled students to submit achievements and administration staff to evaluate SKPM metrics seamlessly.",
    image: PlaceholderImage,
    gallery: [],
    tags: ["Laravel", "Tailwind CSS", "Web App", "Self-Employed"],
    platform: "web",
    githubLink: "",
    liveLink: "",
    role: "Full-Stack Developer Freelance",
    duration: "August 2022 – October 2022"
  },
  {
    slug: "weddingnesia",
    label: "Weddingnesia (Digital Invitation Platform)",
    description: "Scalable SaaS platform for digital wedding invitations.",
    contribution: "Engineered a dynamic split-screen visual editor where users can customize digital wedding invitation components with a real-time live preview. Architected a robust routing system using an Nginx reverse proxy that dynamically maps external custom domains to specific user slugs with strict security validation.",
    caseStudy: {
      problem: "Undangan fisik tidak efisien (boros kertas) dan menyulitkan pengelola acara maupun tamu.",
      approach: "Membangun SaaS Undangan Digital multi-tenant. Menerapkan dynamic routing via Nginx karena lebih efisien dan cepat untuk memproses custom domain tiap klien.",
      tech: "Laravel, React.js, Nginx Reverse Proxy.",
      outcome: "Sistem berhasil dibangun, berjalan secara live, dan menjadi salah satu proyek yang berhasil menerima hibah pendanaan tingkat nasional (P2MW Kemdikbudristek 2023)."
    },
    image: PlaceholderImage,
    gallery: [],
    tags: ["Laravel", "React.js", "Nginx", "SaaS", "University"],
    platform: "web",
    githubLink: "",
    liveLink: "",
    role: "Full-Stack Developer & Founder (P2MW Grantee)",
    duration: "2023 – 2024",
    relatedCertificates: ["Program Pembinaan Mahasiswa Wirausaha (P2MW) 2023"]
  },
  {
    slug: "iit-competition",
    label: "IITC (Intermedia Information Technology Competition)",
    description: "Robust backend architecture for a university-level technology competition platform.",
    contribution: "Designed and developed decoupled RESTful API services connecting the frontend to a PostgreSQL database. Implemented a comprehensive Role-Based Access Control (RBAC) system utilizing Laravel Sanctum tokens and built robust backend logic to process transaction proof uploads seamlessly. Maintained high backend stability to handle complex workflows for participant registrations and live announcements.",
    caseStudy: {
      problem: "Aplikasi sebelumnya (monolitik) mengalami masalah waktu respons (lambat) ketika digunakan oleh ratusan peserta secara bersamaan.",
      approach: "Memisahkan tanggung jawab (Decoupling) menjadi Backend dan Frontend agar lebih bebas memilih teknologi spesifik dan menyebarkan beban server.",
      tech: "Laravel REST API, PostgreSQL, Sanctum RBAC.",
      outcome: "Sistem berhasil menangani ratusan peserta dengan waktu respons yang jauh lebih cepat, proses pembayaran lancar, dan tampilan UI yang lebih fresh."
    },
    image: PlaceholderImage,
    gallery: [],
    tags: ["Backend", "Laravel", "PostgreSQL", "API", "University"],
    platform: "web",
    githubLink: "",
    liveLink: "https://iitc.intermediaamikom.org/",
    role: "Backend Developer",
    duration: "2023 – 2024",
    community: "Intermedia Student Activity Unit (UKM Intermedia)"
  },
  {
    slug: "kos-app",
    label: "Kos App",
    description: "Aplikasi manajemen kos untuk penyewa melihat jatuh tempo dan berinteraksi dengan pemilik.",
    contribution: "Dikembangkan selama masa internship, membangun aplikasi mobile untuk membantu penyewa kos memantau jatuh tempo pembayaran sewa dan berinteraksi melalui fitur chat langsung dengan pemilik kos. Mengimplementasikan Room DB untuk local storage dan mengintegrasikan Google Maps API untuk lokasi kos.",
    image: "/kos-app/home-screen.webp",
    gallery: ["/kos-app/login-screen.webp", "/kos-app/register-screen.webp", "/kos-app/home-screen.webp", "/kos-app/sidebar.webp", "/kos-app/about-screen.webp", "/kos-app/splash-screen.webp"],
    tags: ["Android", "Kotlin", "Room DB", "Maps", "Internship Project", "CV Nurvindo"],
    platform: "mobile",
    githubLink: "https://github.com/prasetyodidi/kos-app",
    liveLink: "",
    role: "Android Developer Intern",
    duration: "Internship Project",
    community: "CV Nurvindo"
  },
  {
    slug: "aplikasi-pantau",
    label: "Aplikasi Pantau (Covid Information App)",
    description: "Aplikasi informasi statistik Covid-19, pencarian rumah sakit, dan nomor darurat berdasarkan daerah.",
    contribution: "Membangun aplikasi Android natif untuk menampilkan informasi statistik Covid-19 berdasarkan daerah dengan fitur pencarian rumah sakit dan integrasi nomor telepon darurat terdekat.",
    image: "/covid-app/statistic-covid-screen.webp",
    gallery: ["/covid-app/statistic-covid-screen.webp", "/covid-app/hospital-screen.webp", "/covid-app/hospital-detail-screen.webp", "/covid-app/emergency-numbers-screen.webp", "/covid-app/news-screen.webp", "/covid-app/setting-screen.webp", "/covid-app/about-screen.webp"],
    tags: ["Android", "Kotlin", "Retrofit", "API", "Personal Project"],
    platform: "mobile",
    githubLink: "https://github.com/prasetyodidi/aplikasi-pantau",
    liveLink: "",
    role: "Mobile Developer",
    duration: "Personal Project"
  },
  {
    slug: "github-user-app",
    label: "GitHub User App",
    description: "Aplikasi pencarian akun GitHub menggunakan GitHub API resmi.",
    contribution: "Membangun aplikasi mobile pencarian akun GitHub menggunakan GitHub API resmi untuk menampilkan detail pengguna secara real-time. Proyek ini mendemonstrasikan kemampuan integrasi RESTful API menggunakan library Retrofit dan pengelolaan state management yang baik di Android.",
    image: PlaceholderImage,
    gallery: [],
    tags: ["Android", "Kotlin", "RESTful API", "Personal Project"],
    platform: "mobile",
    githubLink: "https://github.com/prasetyodidi/Github-User",
    liveLink: "",
    role: "Mobile Developer",
    duration: "Personal Project"
  },
  {
    slug: "web-gis",
    label: "Web GIS",
    description: "Aplikasi Web GIS untuk memetakan wilayah administratif, tutupan lahan, jalan, dan rawan banjir dengan integrasi KML Import dinamis.",
    contribution: "Membangun aplikasi Web GIS berarsitektur spasial tinggi menggunakan Laravel dan PostGIS untuk memetakan batas wilayah tingkat RT hingga akumulasi Kabupaten. Merancang parser KML dinamis dari nol untuk otomatisasi integrasi data spasial langsung ke dalam database, serta mengkonfigurasi GeoServer sebagai mesin rendering peta mandiri. Mengawal proyek secara end-to-end mulai dari fase rancangan arsitektur, pengembangan, hingga deployment ke server produksi.",
    caseStudy: {
      problem: "Pendataan aset wilayah spasial sering tidak sinkron dan rawan terjadi tumpang tindih (overlapping) batas antar RT, RW, hingga batas desa. Masyarakat dan instansi juga kesulitan mengakses visualisasi data geospasial yang akurat untuk mendukung pengambilan keputusan.",
      approach: "Mengawinkan framework Laravel dengan PostGIS untuk kalkulasi geometri spasial. Karena rendering peta spasial berukuran masif sangat berat jika diproses di sisi aplikasi utama, arsitektur dipecah dengan mengkonfigurasi server independen (GeoServer) untuk bertugas merender layer peta. Membangun fitur KML Import dinamis agar petugas administrasi dapat secara mandiri mengunggah batas wilayah dan atribut spasial lainnya.",
      tech: "Laravel (Fullstack), PostgreSQL dengan ekstensi PostGIS, Redis (untuk optimasi caching), Docker (kontainerisasi), GeoServer, dan algoritma KML Parsing.",
      outcome: "Masyarakat dan instansi kini memiliki akses mudah dan terpusat ke informasi geospasial yang akurat. Keputusan batas teritorial menjadi lebih jelas berkat visualisasi peta hierarkis (RT -> Kecamatan), dan sistem sukses meminimalisir serta mendeteksi area wilayah yang berpotensi tumpang tindih secara otomatis."
    },
    image: "/web-gis/homepage.png",
    gallery: ["/web-gis/homepage.png"],
    tags: ["Laravel", "PostgreSQL", "PostGIS", "Redis", "Docker", "GeoServer", "GIS", "Web App", "CV Pusat Teknologi Nusantara"],
    platform: "web",
    githubLink: "",
    liveLink: "",
    role: "Fullstack Developer",
    duration: "January 2025 – January 2026"
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
