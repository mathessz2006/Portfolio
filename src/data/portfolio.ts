/**
 * ============================================
 *  PORTFOLIO DATA — Edit this file to update
 *  your personal info, projects, skills, etc.
 * ============================================
 */

// ---------- NAVIGATION ----------
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

// ---------- HERO ----------
export const hero = {
  name: "Mathesh K",
  role: "Front-End Web Developer",
  tagline: "Available for internships & junior roles",
  summary:
    "Front-End Web Developer crafting clean, responsive interfaces with React, JavaScript, and modern CSS.",
  bio: "BCA student at St. Joseph's College, Trichy. Ex-intern at Codebind Technologies. I love turning ideas into delightful web experiences.",
  // Set to a file path like "@/assets/mathesh-profile.jpeg" or a URL
  photo: "@/assets/mathesh-profile.jpeg",
  badge: {
    label: "Currently",
    value: "BCA · Final Year",
  },
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/mathessz2006",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/mathesh-k-dev",
    },
    {
      platform: "Email",
      url: "mailto:mathessz2006@gmail.com",
    },
  ],
};

// ---------- ABOUT ----------
export const about = {
  title: "A motivated front-end developer in the making",
  paragraphs: [
    "I'm a motivated BCA student with hands-on front-end web development experience, including a professional internship at Codebind Technologies. I'm passionate about creating clean, user-friendly interfaces and eager to contribute as a junior developer.",
    "I thrive on taking new challenges and transforming ideas into functional, responsive web applications using HTML, CSS, JavaScript and React.",
  ],
  education: {
    icon: "GraduationCap",
    title: "Education",
    lines: [
      "Bachelor of Computer Applications",
      "St. Joseph's College (Autonomous)",
      "Trichy – Expected 2026",
    ],
  },
  experience: {
    icon: "Briefcase",
    title: "Experience",
    lines: ["Web Development Intern", "Codebind Technologies", "May 2025 – Jun 2025"],
  },
  strengths: [
    {
      icon: "Zap",
      title: "Quick Learner",
      desc: "Fast adaptation to new technologies and frameworks.",
    },
    {
      icon: "Wrench",
      title: "Adaptable",
      desc: "Flexible approach to varied project requirements.",
    },
    {
      icon: "Lightbulb",
      title: "Problem Solver",
      desc: "Analytical mindset for debugging & optimization.",
    },
    {
      icon: "Users",
      title: "Team Player",
      desc: "Collaborative work style with dev teams.",
    },
  ],
};

// ---------- SKILLS ----------
export const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend & DB",
    items: [
      { name: "PHP", level: 70 },
      { name: "MySQL", level: 72 },
      { name: "MongoDB", level: 65 },
      { name: "Python", level: 65 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 92 },
      { name: "Firebase", level: 70 },
      { name: "Responsive Design", level: 88 },
    ],
  },
];

// ---------- PROJECTS ----------
export const projects = [
  {
    title: "Birthday Reminder WebApp",
    type: "Self Project",
    description:
      "Full-stack web app with Firebase auth, Firestore database, and Email/SMS reminders with 1–30 days advanced scheduling. Dashboard with search, filter, sort and upcoming birthday views.",
    tech: ["React.js", "Firebase", "Firestore", "GitHub Pages"],
    live: "https://mathessz2006.github.io/birthday-remind/",
    repo: "https://github.com/mathessz2006",
    icon: "Cake",
    gradient: "from-pink-500/20 via-rose-400/10 to-orange-300/20",
  },
  {
    title: "E-Learning Management System",
    type: "College Project",
    description:
      "Web platform supporting online education where admins, instructors, and students manage courses, learning materials and assessments in a centralized environment.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    live: "",
    repo: "https://github.com/mathessz2006",
    icon: "GraduationCap",
    gradient: "from-indigo-500/20 via-blue-400/10 to-cyan-300/20",
  },
];

// ---------- CERTIFICATES ----------
export const certificates = [
  {
    icon: "BadgeCheck",
    title: "Web Development Internship",
    issuer: "Codebind Technologies",
    year: "2025",
    // Replace with your certificate image path when ready:
    image: "",
  },
  {
    icon: "Code2",
    title: "JavaScript Fundamentals",
    issuer: "Online Certification",
    year: "2024",
    image: "",
  },
  {
    icon: "Code2",
    title: "Python Programming",
    issuer: "Online Certification",
    year: "2024",
    image: "",
  },
  {
    icon: "Keyboard",
    title: "Junior Grade English Typewriting",
    issuer: "First Class with Distinction",
    year: "2022",
    image: "",
  },
  {
    icon: "Trophy",
    title: "Hackathon Participant",
    issuer: "Full-Stack Web Suite at VDart",
    year: "2024",
    image: "",
  },
  {
    icon: "Award",
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    year: "2024",
    image: "",
  },
];

// ---------- CONTACT ----------
export const contact = {
  email: "mathessz2006@gmail.com",
  phone: "+91 86104 81578",
  location: "Trichy, Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/mathesh-k-dev",
  github: "https://github.com/mathessz2006",
};
