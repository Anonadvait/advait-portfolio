export interface Certificate {
  id: string;
  title: string;
  organization: string;
  category: "Internship" | "Course" | "Workshop";
  dateOrDuration: string;
  description: string;
  skills: string[];
  previewImage: string;
  originalDocument: string;
  documentType: "pdf" | "png";
  orbitTrack: "inner" | "outer";
  initialAngle: number; // in degrees
}

export const certificates: Certificate[] = [
  {
    id: "rru-internship",
    title: "SMART Policing Lab Internship",
    organization: "Rashtriya Raksha University",
    category: "Internship",
    dateOrDuration: "1 June – 3 July 2026",
    description:
      "Completed an intensive 30-day research internship at the SMART Policing Lab under the School of Internal Security and SMART Policing (SISSP), Rashtriya Raksha University (An Institution of National Importance, Ministry of Home Affairs, Government of India). Investigated cybercrime trends, digital evidence management, and designed AI multi-agent investigative architectures that contributed to CrimeLens AI.",
    skills: [
      "AI for Law Enforcement",
      "Cybercrime Intelligence",
      "Digital Evidence Analysis",
      "SMART Policing",
      "Multi-Agent Architectures",
    ],
    previewImage: "/achievement-assets/rru-internship.jpg",
    originalDocument: "/achievement-assets/rru-internship.pdf",
    documentType: "pdf",
    orbitTrack: "inner",
    initialAngle: 0,
  },
  {
    id: "edufy-internship",
    title: "Cybersecurity Internship",
    organization: "Edufy Tech Solutions",
    category: "Internship",
    dateOrDuration: "1 March – 1 May 2026",
    description:
      "Successfully completed a two-month technical internship in Cybersecurity at Edufy Tech Solutions (MSME, ISO 9001:2015, Ministry of Corporate Affairs registered). Engaged in hands-on security evaluations, vulnerability assessments, network defense fundamentals, and applied information security workflows.",
    skills: [
      "Cybersecurity Fundamentals",
      "Vulnerability Assessment",
      "Threat Mitigation",
      "Network Defense",
      "Applied Security Tools",
    ],
    previewImage: "/achievement-assets/edufy-internship.jpg",
    originalDocument: "/achievement-assets/edufy-internship.pdf",
    documentType: "pdf",
    orbitTrack: "outer",
    initialAngle: 60,
  },
  {
    id: "web-design-course",
    title: "Web Design & Development",
    organization: "NSDC / Skill India Digital Hub",
    category: "Course",
    dateOrDuration: "16 January 2026",
    description:
      "Certified online skilling course on modern Web Design & Development offered by the National Skill Development Corporation (NSDC) through Skill India Digital Hub (SIDH). Covered responsive layouts, semantic frontend architecture, modern styling, and design accessibility standards.",
    skills: [
      "Web Design & Architecture",
      "Responsive Layouts",
      "Modern Frontend Standards",
      "UI/UX Principles",
    ],
    previewImage: "/achievement-assets/web-design-course.jpg",
    originalDocument: "/achievement-assets/web-design-course.pdf",
    documentType: "pdf",
    orbitTrack: "inner",
    initialAngle: 120,
  },
  {
    id: "cybersecurity-course",
    title: "Cybersecurity",
    organization: "Tech Mahindra Foundation / Skill India",
    category: "Course",
    dateOrDuration: "9 January 2026 • 10 Hours",
    description:
      "Completed a specialized 10-hour skilling course in Cybersecurity delivered by the Tech Mahindra Foundation through Skill India Digital Hub. Focused on cybersecurity governance, incident handling concepts, common threat vectors, and defensive safeguards.",
    skills: [
      "Threat Prevention",
      "Incident Response Concepts",
      "Network Protection",
      "Security Protocols",
    ],
    previewImage: "/achievement-assets/cybersecurity-course.jpg",
    originalDocument: "/achievement-assets/cybersecurity-course.pdf",
    documentType: "pdf",
    orbitTrack: "outer",
    initialAngle: 180,
  },
  {
    id: "spatial-forge-workshop",
    title: "Spatial Forge: Hack Strategies & Spatial AI",
    organization: "Club InnoSphere — SRMIST",
    category: "Workshop",
    dateOrDuration: "4 November 2026",
    description:
      "Participated in the specialized 'Spatial Forge: Hack Strategies & Spatial AI' workshop organized by Club InnoSphere under the Department of Electronics and Communication Engineering at SRM Institute of Science and Technology. Explored spatial artificial intelligence concepts, computer vision pipelines, and rapid prototyping hackathon strategies.",
    skills: [
      "Spatial AI",
      "Computer Vision",
      "Hackathon Strategy",
      "Rapid Prototyping",
      "Applied Machine Learning",
    ],
    previewImage: "/achievement-assets/spatial-forge-workshop.jpg",
    originalDocument: "/achievement-assets/spatial-forge-workshop.pdf",
    documentType: "pdf",
    orbitTrack: "inner",
    initialAngle: 240,
  },
  {
    id: "github-workshop",
    title: "Code to GitHub: Build Your Digital Portfolio",
    organization: "Women in Tech Club — SRMIST",
    category: "Workshop",
    dateOrDuration: "14 October 2026",
    description:
      "Participated in the hands-on technical workshop 'Code to GitHub: Build Your Digital Portfolio' organized by Women in Tech Club under the Department of Networking and Communications, School of Computing at SRMIST. Practiced Git version control, GitHub collaboration, open-source portfolio publishing, and CI/CD deployment principles.",
    skills: [
      "Git & GitHub",
      "Portfolio Engineering",
      "Version Control",
      "Open Source Delivery",
    ],
    previewImage: "/achievement-assets/github-workshop.png",
    originalDocument: "/achievement-assets/github-workshop.png",
    documentType: "png",
    orbitTrack: "outer",
    initialAngle: 300,
  },
];

