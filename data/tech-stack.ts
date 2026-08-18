import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaDocker,
  FaRobot,
  FaAws,
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
  SiNetlify,
  SiPrisma,
  SiGit,
  SiJest,
  SiPostgresql,
  SiTanstack,
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
    title: "Development",
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
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
      },
    ],
  },


  {
    title: "Tools",
    color: "from-cyan-500 to-sky-500",

    items: [
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
        name: "VS Code",
        icon: VscVscode,
        color: "#007ACC",
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
    title: "Deployment & DevOps",
    color: "from-indigo-500 to-violet-500",

    items: [
      {
        name: "Vercel",
        icon: SiVercel,
        color: "#000000",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        color: "#00C7B7",
      },
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
    ],
  },


  {
    title: "Currently Exploring",
    color: "from-emerald-500 to-cyan-500",

    items: [
      {
        name: "AI Integration",
        icon: FaRobot,
        color: "#10A37F",
      },
      {
        name: "TanStack Query",
        icon: SiTanstack,
        color: "#FF4154",
      },
      {
        name: "Jest Testing",
        icon: SiJest,
        color: "#C21325",
      },
      {
        name: "AWS",
        icon: FaAws,
        color: "#FF9900",
      },
    ],
  },

];