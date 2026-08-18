import {
  Code2,
  Database,
  Server,
  Palette,
  Globe,
  Layers3,
  Boxes,
  Workflow,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const technologies = [
  {
    name: "React",
    description: "Modern UI Development",
    icon: Code2,
    color: "from-sky-500 to-cyan-500",
  },
  {
    name: "Next.js",
    description: "Full Stack Framework",
    icon: Globe,
    color: "from-slate-700 to-slate-900",
  },
  {
    name: "TypeScript",
    description: "Type Safety",
    icon: Layers3,
    color: "from-blue-600 to-sky-500",
  },
  {
    name: "Node.js",
    description: "Backend Runtime",
    icon: Server,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "MongoDB",
    description: "NoSQL Database",
    icon: Database,
    color: "from-green-600 to-lime-500",
  },
  {
    name: "Express",
    description: "REST APIs",
    icon: Workflow,
    color: "from-zinc-700 to-zinc-900",
  },
  {
    name: "Tailwind",
    description: "Utility CSS",
    icon: Palette,
    color: "from-cyan-500 to-sky-400",
  },
  {
    name: "GitHub",
    description: "Version Control",
    icon: FaGithub,
    color: "from-slate-700 to-black",
  },
  {
    name: "shadcn/ui",
    description: "Accessible Components",
    icon: Boxes,
    color: "from-violet-500 to-fuchsia-500",
  },
];