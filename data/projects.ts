export type Project = {
  id: number;
  slug?: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github: string;
  live: string;
  figma?: string;
  caseStudy?: {
    problem: string;
    decisions: { title: string; detail: string }[];
    challenges: { title: string; detail: string }[];
    nextSteps: string[];
  };
};

export const projects: Project[] = [

  {
    id: 1,
    slug: "gethired",
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
    live: "https://gethired-aicareerplatform.vercel.app/",
    caseStudy: {
      problem:
        "Job seekers often juggle multiple disconnected tools — one for resume building, another for interview prep, another for tracking applications. GetHired brings these into a single workspace: AI-assisted resume/ATS analysis, mock interview preparation, job-match guidance, and application tracking in one place.",
      decisions: [
        {
          title: "State management",
          detail:
            "Used Zustand for lightweight global state (auth, session data) and TanStack Query for server-state — caching, refetching, and loading/error handling — kept separate from local UI state.",
        },
        {
          title: "Authentication",
          detail:
            "Built JWT-based authentication to protect routes and persist sessions across the dashboard.",
        },
        {
          title: "AI integration structure",
          detail:
            "Structured the Gemini AI integration as a dedicated service layer so resume analysis, job-match scoring, and cover letter generation each call the model with tailored prompts, instead of one monolithic AI call.",
        },
      ],
      challenges: [
        {
          title: "Aggregating jobs from 9 external APIs",
          detail:
            "Providers like Adzuna, Jooble, RemoteOK, Greenhouse, and Lever return inconsistent data shapes, rate-limit unpredictably, and often list the same job twice. Built a shared provider abstraction with a query normalizer, ran requests concurrently with Promise.allSettled so one slow API doesn't block the rest, and added caching plus deduplication to merge results cleanly.",
        },
        {
          title: "Making AI features reliable, not fragile",
          detail:
            "Gemini responses sometimes came back as malformed JSON or wrapped in markdown, and calls could time out. Built a fallback path: if the AI call fails, the app switches to a local heuristic scoring method and shows which mode produced the result (AI vs Fallback), so nothing fails silently.",
        },
        {
          title: "Parsing real-world resumes",
          detail:
            "Uploaded resumes come in messy formats — multi-column PDFs, scanned images, inconsistent headers/footers. Built a parsing pipeline (pdf-parse plus mammoth for Word docs) with cleanup logic to strip artifacts like page-number headers, and early detection for scanned PDFs so users get a clear message instead of a silent failure.",
        },
        {
          title: "Keeping state in sync across views",
          detail:
            "The same application data shows up in a Kanban board, table view, and calendar, with AI actions triggerable from any of them. Used Zustand for UI/session state and TanStack Query with optimistic updates, so drag-and-drop status changes feel instant while staying consistent with the database.",
        },
        {
          title: "Multi-round AI mock interviews",
          detail:
            "Interview sessions needed to stay coherent across multiple questions and score open-ended answers against a rubric (accuracy, relevance, clarity). Structured the AI prompts to carry conversation context across turns so scoring and follow-ups stay consistent with what was already asked.",
        },
      ],
      nextSteps: [
        "Move job caching from an in-memory Map to Redis — the current cache resets on every server restart and doesn't scale across multiple instances, so results and provider health metrics don't persist.",
        "Switch from eager 3-page concurrent requests to lazy, cursor-based pagination per provider, since most users only view the top few results and the current approach burns API quota unnecessarily.",
        "Add mocked unit tests that simulate Gemini API failures (429s, timeouts) to verify the heuristic fallback produces the exact same JSON shape the frontend expects — current tests only run against the live API.",
      ],
    },
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
    live: "https://reactdesignsystem.vercel.app/",
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
    live: "https://poojadaki-portfoliowebsite.vercel.app/",
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