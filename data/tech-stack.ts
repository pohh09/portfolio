import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaDocker,
  FaAws,
  FaPaw,
} from "react-icons/fa";

import { RiNextjsFill } from "react-icons/ri";

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVercel,
  SiGit,
  SiJest,
  SiPostgresql,
  SiTanstack,
  SiFramer,
  SiGreensock,
  SiRender,
  SiGooglegemini,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export type TechCategory = {
  title: string;
  color: string;
  items: {
    name: string;
    icon: React.ElementType;
    color: string;
  }[];
};

export const techStack: TechCategory[] = [
  {
    title: "Frontend & UI Core",
    color: "from-violet-500 to-fuchsia-500",
    items: [
      {
        name: "React.js",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: RiNextjsFill,
        color: "#000000",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
      },
      {
        name: "Redux Toolkit",
        icon: SiRedux,
        color: "#764ABC",
      },
      {
        name: "Zustand",
        icon: FaPaw,
        color: "#E85D8B",
      },
      {
        name: "TanStack Query",
        icon: SiTanstack,
        color: "#FF4154",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: "#0055FF",
      },
      {
        name: "GSAP",
        icon: SiGreensock,
        color: "#88CE02",
      },
    ],
  },

  {
    title: "Backend & Database",
    color: "from-emerald-500 to-teal-500",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#3C873A",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#444444",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },
    ],
  },

  {
    title: "Tools & Workflow",
    color: "from-cyan-500 to-sky-500",
    items: [
      {
        name: "VS Code",
        icon: VscVscode,
        color: "#007ACC",
      },
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#181717",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
      },
      {
        name: "Figma",
        icon: FaFigma,
        color: "#A259FF",
      },
    ],
  },

  {
    title: "Deployment & AI",
    color: "from-indigo-500 to-violet-500",
    items: [
      {
        name: "Vercel",
        icon: SiVercel,
        color: "#000000",
      },
      {
        name: "Render",
        icon: SiRender,
        color: "#46E3B7",
      },
      {
        name: "Gemini AI",
        icon: SiGooglegemini,
        color: "#1A73E8",
      },
    ],
  },

  {
    title: "Currently Exploring",
    color: "from-amber-500 to-orange-500",
    items: [
      {
        name: "Docker",
        icon: FaDocker,
        color: "#2496ED",
      },
      {
        name: "AWS",
        icon: FaAws,
        color: "#FF9900",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
      },
      {
        name: "Jest Testing",
        icon: SiJest,
        color: "#C21325",
      },
    ],
  },
];