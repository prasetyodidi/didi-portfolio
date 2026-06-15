export const featuredEducationSlugs = [
  "bangkit-academy-2024",
  "machine-learning-stanford",
  "dicoding-fundamental-android"
];

export const education = [
  {
    slug: "bangkit-academy-2024",
    title: "Bangkit Academy 2024 - Machine Learning",
    issuer: "Google, GoTo, Traveloka, Kemdikbudristek",
    description: "Lulus dengan predikat Full Graduate pada jalur Machine Learning. Menyelesaikan 12 sertifikasi materi dan Capstone Project.",
    category: "Formal/Program",
    coverImages: ["/logo/Bangkit-logo.png"],
    verificationUrl: "#"
  },
  {
    slug: "machine-learning-stanford",
    title: "Machine Learning",
    issuer: "Stanford University & DeepLearning.AI",
    description: "Pengenalan komprehensif tentang machine learning (Supervised & Unsupervised Learning), pengenalan pola statistik, dan praktik terbaik penerapan algoritma ML.",
    category: "Specialization",
    coverImages: ["/logo/stanford_online_original_size.webp", "/logo/DeepLearning-AI_idehB-9oh8_0.svg", "/logo/coursera-logo-full-rgb.svg"],
    verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/STIO9D8AV6MA"
  },
  {
    slug: "tf-data-and-deployment",
    title: "TensorFlow: Data and Deployment",
    issuer: "DeepLearning.AI",
    description: "Mempelajari cara men-deploy model machine learning di berbagai environment (browser, mobile/IoT dengan TensorFlow Lite, dan data pipeline dengan TFX).",
    category: "Specialization",
    coverImages: ["/logo/DeepLearning-AI_idehB-9oh8_0.svg", "/logo/coursera-logo-full-rgb.svg"],
    verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/NZLR5W1C2O42"
  },
  {
    slug: "tf-developer",
    title: "DeepLearning.AI TensorFlow Developer",
    issuer: "DeepLearning.AI",
    description: "Mempelajari penerapan machine learning menggunakan TensorFlow untuk membangun jaringan saraf tiruan (neural networks), computer vision, NLP, dan analisis time series.",
    category: "Specialization",
    coverImages: ["/logo/DeepLearning-AI_idehB-9oh8_0.svg", "/logo/coursera-logo-full-rgb.svg"],
    verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/SZ4H9N5GWDUM"
  },
  {
    slug: "p2mw-2023",
    title: "Program Pembinaan Mahasiswa Wirausaha (P2MW) 2023",
    issuer: "Kemdikbudristek",
    description: "Peserta program P2MW 2023 pada Kategori Bisnis Digital (Tahapan Awal) dengan nama usaha Wedding NEsia.",
    category: "Formal/Program",
    coverImages: ["/logo/logo_portal_p2mw_2025.png"],
    verificationUrl: "#"
  },
  {
    slug: "dicoding-fundamental-android",
    title: "Belajar Fundamental Aplikasi Android",
    issuer: "Dicoding",
    description: "Pelajari skill Android dengan kurikulum terlengkap yang dibutuhkan perusahaan. Mulai dari UI/UX, background process, API sampai database.",
    category: "Course",
    coverImages: ["/certificates/dicoding_certificate_placeholder.webp"],
    verificationUrl: "https://www.dicoding.com/certificates/N9ZOE9R30XG5"
  },
  {
    slug: "dicoding-fundamental-backend",
    title: "Belajar Fundamental Back-End dengan JavaScript",
    issuer: "Dicoding",
    description: "Pelajari teknologi dalam membangun RESTful API yang canggih seperti Database, Storage, hingga Authentication dan Authorization.",
    category: "Course",
    coverImages: ["/certificates/dicoding_certificate_placeholder.webp"],
    verificationUrl: "https://www.dicoding.com/certificates/6RPNWW3NQP2M"
  },
  {
    slug: "dicoding-architecting-aws",
    title: "Architecting on AWS (Membangun Arsitektur Cloud di AWS)",
    issuer: "Dicoding",
    description: "Pelajari cara membangun arsitektur cloud di AWS, dari yang sederhana dengan Amazon S3 hingga yang canggih dengan teknologi serverless.",
    category: "Course",
    coverImages: ["/certificates/dicoding_certificate_placeholder.webp"],
    verificationUrl: "https://www.dicoding.com/certificates/RVZKOL2QMPD5"
  }
];

export function getEducationBySlug(slug) {
  return education.find((edu) => edu.slug === slug);
}
