import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  RefreshCw,
  FileText,
  MessageSquare,
  Network
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Footer from "@/components/layout/Footer";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects
    .filter((p) => p.slug || p.caseStudy)
    .map((p) => ({
      slug: p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find(
    (p) => (p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")) === slug
  );

  if (!project) return { title: "Project Case Study" };

  return {
    title: `${project.title} — Case Study | Pooja Daki`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find(
    (p) => (p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")) === slug
  );

  if (!project || !project.caseStudy) {
    notFound();
  }

  const { caseStudy } = project;

  const decisionIcons = [Layers, ShieldCheck, Sparkles];
  const challengeIcons = [Network, Zap, FileText, RefreshCw, MessageSquare];

  return (
    <div className="min-h-screen bg-[#FFF8F5] text-[#302535] selection:bg-[#FCE8E8] selection:text-[#E85D8B]">
      {/* Top Floating Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-[#F0DCE3] transition-all">
        <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1500px] py-3.5 flex items-center justify-between">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-[#EADDE3] bg-white px-4 py-1.5 text-xs font-bold text-[#302535] shadow-2xs transition-all hover:border-[#F29AB2] hover:bg-[#FFF5F7] hover:text-[#E85D8B]"
          >
            <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </Link>

          <div className="flex items-center gap-2">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#EADDE3] bg-white px-3.5 py-1.5 text-xs font-bold text-[#302535] shadow-2xs hover:bg-[#F3F1F5] transition-all"
              >
                <FaGithub size={13} />
                <span>GitHub Repo</span>
              </a>
            )}

            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#E85D8B] text-white px-4 py-1.5 text-xs font-bold shadow-xs hover:bg-[#D44776] transition-all hover:-translate-y-0.5"
              >
                <span>Live Platform</span>
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero / Overview Header */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 overflow-hidden border-b border-[#F0DCE3]/80">
        <div className="pointer-events-none absolute -top-20 right-10 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#FFF0F4]/90 via-white/40 to-transparent blur-3xl opacity-80 select-none -z-10" />
        <div className="pointer-events-none absolute -bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#E8DDF7]/40 via-[#FFF0F4]/60 to-transparent blur-3xl opacity-75 select-none -z-10" />

        <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1500px]">
          <div className="max-w-4xl text-left">
            <div className="inline-flex items-center gap-2 mb-4 rounded-full bg-[#FCE8E8] border border-[#F8D2D9] px-3.5 py-1 text-xs font-kalam font-bold text-[#E85D8B] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#E85D8B] animate-pulse" />
              <span>PROJECT CASE STUDY</span>
            </div>

            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#302535] font-kalam leading-[1.12]"
              style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
            >
              {project.title}
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#6D5D70] leading-relaxed max-w-3xl">
              {project.description}
            </p>

            {/* Tech Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-2 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white border border-[#EADDE3] px-3 py-1 text-xs font-bold text-[#302535] shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Quick Links Banner */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E85D8B] to-[#F29AB2] text-white px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-extrabold shadow-[0_8px_20px_-4px_rgba(232,93,139,0.38)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-4px_rgba(232,93,139,0.48)]"
                >
                  <span>Open Live Application</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#EADDE3] bg-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-extrabold text-[#302535] shadow-2xs hover:border-[#F29AB2] hover:bg-[#FFF5F7] hover:text-[#E85D8B] transition-all"
                >
                  <FaGithub size={14} />
                  <span>Explore Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1500px] py-14 sm:py-20 space-y-16 sm:space-y-24">
        {/* Section 1: The Problem */}
        <section className="space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FCE8E8] text-[#E85D8B] border border-[#F8D2D9] shadow-2xs">
              <AlertTriangle size={16} />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E85D8B]">
                01 &bull; CONTEXT &amp; MOTIVATION
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#302535] font-kalam leading-tight"
                style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
              >
                The Problem
              </h2>
            </div>
          </div>

          <div className="rounded-[24px] sm:rounded-[28px] bg-gradient-to-br from-[#FFFDFC] via-[#FFF9FA] to-[#FAF7FE] border-2 border-[#F0DCE3] p-6 sm:p-8 lg:p-10 shadow-[0_12px_36px_-12px_rgba(232,93,139,0.1)]">
            <p className="text-sm sm:text-base lg:text-[17px] text-[#4A3E52] leading-relaxed font-normal">
              {caseStudy.problem}
            </p>
          </div>
        </section>

        {/* Section 2: Key Architectural & Technical Decisions */}
        <section className="space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E8DDF7] text-[#8B72D8] border border-[#D6C4F0] shadow-2xs">
              <Layers size={16} />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8B72D8]">
                02 &bull; SYSTEM ARCHITECTURE
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#302535] font-kalam leading-tight"
                style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
              >
                Key Architectural Decisions
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {caseStudy.decisions.map((decision, idx) => {
              const Icon = decisionIcons[idx % decisionIcons.length];
              return (
                <div
                  key={decision.title}
                  className="rounded-[22px] bg-white border-2 border-[#F0DCE3] p-5 sm:p-6 shadow-2xs hover:border-[#F29AB2] hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF5F7] text-[#E85D8B] border border-[#F8D2D9] shadow-2xs">
                        <Icon size={16} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#A396A3]">
                        DECISION 0{idx + 1}
                      </span>
                    </div>

                    <h3
                      className="text-base sm:text-lg font-bold text-[#302535] font-kalam leading-snug mb-2"
                      style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                    >
                      {decision.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6D5D70] leading-relaxed">
                      {decision.detail}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#F5E6EB] flex items-center justify-between text-[10px] font-mono text-[#27AE60] font-bold">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={12} />
                      Implemented in production
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Engineering Challenges & Technical Solutions */}
        <section className="space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FCE8E8] text-[#E85D8B] border border-[#F8D2D9] shadow-2xs">
              <Cpu size={16} />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E85D8B]">
                03 &bull; IN-DEPTH IMPLEMENTATION
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#302535] font-kalam leading-tight"
                style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
              >
                Engineering Challenges &amp; Solutions
              </h2>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {caseStudy.challenges.map((challenge, idx) => {
              const Icon = challengeIcons[idx % challengeIcons.length];
              return (
                <div
                  key={challenge.title}
                  className="rounded-[22px] sm:rounded-[26px] bg-white border-2 border-[#F0DCE3] p-5 sm:p-7 shadow-2xs hover:border-[#F29AB2] hover:shadow-xs transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFF5F7] to-[#FFF0F4] text-[#E85D8B] border border-[#F8D2D9] shadow-2xs">
                      <Icon size={18} />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3
                          className="text-base sm:text-lg font-bold text-[#302535] font-kalam leading-tight"
                          style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                        >
                          {challenge.title}
                        </h3>

                        <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#FCE8E8] text-[#E85D8B] border border-[#F8D2D9]">
                          Challenge 0{idx + 1}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#5A4D5D] leading-relaxed font-normal">
                        {challenge.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 4: What's Next */}
        <section className="space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#DDF5F8] text-[#0A66C2] border border-[#C5EDF2] shadow-2xs">
              <Sparkles size={16} />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0A66C2]">
                04 &bull; CONTINUOUS EVOLUTION
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#302535] font-kalam leading-tight"
                style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
              >
                What&apos;s Next
              </h2>
            </div>
          </div>

          <div className="rounded-[24px] sm:rounded-[28px] bg-white border-2 border-[#F0DCE3] p-6 sm:p-8 shadow-2xs">
            {caseStudy.nextSteps && caseStudy.nextSteps.length > 0 ? (
              <div className="space-y-3.5">
                {caseStudy.nextSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="rounded-[18px] bg-[#FFFDFC] border border-[#F0DCE3] p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs hover:border-[#F29AB2] transition-colors"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[#FFF5F7] text-[#E85D8B] border border-[#F8D2D9] text-xs font-mono font-bold">
                      0{idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A3E52] leading-relaxed font-normal pt-0.5">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#302535] font-kalam">
                    Roadmap &amp; Planned Enhancements
                  </h3>
                  <p className="text-xs sm:text-sm text-[#756875] mt-1">
                    Actively testing user workflows, refining interview rubric heuristics, and preparing additional integration endpoints.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#E85D8B] font-bold bg-[#FFF5F7] border border-[#F8D2D9] px-3 py-1 rounded-full shrink-0">
                  In Active Development 🌱
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Bottom Callout & Navigation */}
        <section className="rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#FFFDFC] via-[#FFF9FA] to-[#FAF7FE] border-2 border-[#F0DCE3] p-6 sm:p-10 shadow-[0_16px_45px_-15px_rgba(232,93,139,0.15)] text-center space-y-5">
          <div className="max-w-xl mx-auto space-y-2">
            <h3
              className="text-2xl sm:text-3xl font-bold text-[#302535] font-kalam"
              style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
            >
              Interested in seeing more?
            </h3>
            <p className="text-xs sm:text-sm text-[#756875] leading-relaxed">
              Explore the live GetHired web platform or check out the rest of the projects in the portfolio.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#E85D8B] text-white px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-bold shadow-xs hover:bg-[#D44776] transition-all hover:-translate-y-0.5"
              >
                <span>Try GetHired Live</span>
                <ArrowUpRight size={14} />
              </a>
            )}

            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-[#EADDE3] bg-white px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-bold text-[#302535] shadow-2xs hover:border-[#F29AB2] hover:bg-[#FFF5F7] hover:text-[#E85D8B] transition-all"
            >
              <ArrowLeft size={14} />
              <span>Back to All Projects</span>
            </Link>
          </div>
        </section>
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}
