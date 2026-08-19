export type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github: string;
  live: string;
  figma?: string;
};

export const projects: Project[] = [

  {
    id: 1,
    title: "GetHired – AI Career Platform",
    subtitle: "Full-Stack MERN + AI Platform",
    description:
      "A full-stack AI-powered career platform that helps job seekers discover opportunities, optimize resumes with ATS analysis, prepare for interviews with AI mock workspaces, and manage applications in one unified workspace.",
    image: "/projects/gethired.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini AI",
      "Zustand",
    ],
    features: [
      "AI Resume Analysis & ATS Score",
      "AI Mock Interview Workspace",
      "AI Career Assistant & Job Match",
      "Kanban Application Tracker",
      "Analytics Dashboard & JWT Auth",
      "Light/Dark Theme & Responsive UI",
    ],
    github: "https://github.com/pohh09/gethired",
    live: "https://gethired-sigma.vercel.app",
  },

  {
    id: 2,
    title: "Design System",
    subtitle: "Figma to Code Implementation",
    description:
      "A pixel-perfect frontend implementation of a modern Figma design using React, TypeScript, Tailwind CSS, and Motion. Focused on reusable components, responsive layouts, smooth animations, and clean UI architecture.",

    image: "/projects/design-system.png",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Figma",
    ],

    features: [
      "Pixel-Perfect UI",
      "Reusable Components",
      "Responsive Design",
      "Smooth Animations",
      "Modern Design System",
      "Figma to Code",
    ],

    github: "https://github.com/pohh09/react-design-system.git",
    live: "https://react-design-system-umber.vercel.app/",
    figma: "https://www.figma.com/design/q3ND2vCKyM6q9ckcTkCd1E/Design-Systems?t=3eeIRiZMSmXrxYRf-1",
  },

  {
    id: 3,
    title: "Personal Developer Portfolio",
    subtitle: "Interactive Engineering Portfolio",
    description:
      "A modern developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Showcases full-stack applications, interactive devkit consoles, design-to-code workflows, and high-performance micro-interactions.",

    image: "/projects/portfolio-showcase.png",

    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    features: [
      "Dynamic Intro Splash Experience",
      "Interactive Developer Console",
      "Repeatable Scroll Triggers",
      "Ultra-Wide 85% Responsive Canvas",
      "Zero-Scrollbar Cyber-Luxe Theme",
      "100% Lighthouse Performance",
    ],

    github: "https://github.com/pohh09",
    live: "https://portfolio-poojas-project.vercel.app/",
  },

  {
    id: 4,
    title: "Gym Website",
    subtitle: "Frontend React Application",
    description:
      "A modern and responsive fitness website built with React and Tailwind CSS. Designed to showcase gym services, membership plans, trainers, and interactive fitness tools with a mobile-first user experience.",

    image: "/projects/gym.png",

    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
    ],

    features: [
      "Responsive Landing Page",
      "Membership Plans",
      "Trainer Profiles",
      "BMI Calculator",
      "Class Schedule",
      "Mobile-First Design",
    ],

    github: "https://github.com/pohh09/gym-website.git",
    live: "https://gym-website-three-sable.vercel.app/",
  }
];