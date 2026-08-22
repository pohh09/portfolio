"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { FaGithub, FaFigma } from "react-icons/fa";
import { Project } from "@/data/projects";

type Props = { project: Project; reverse?: boolean };

export default function ProjectCard({ project, reverse = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`grid items-center gap-8 lg:gap-12 lg:grid-cols-12 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="lg:col-span-6 group relative overflow-hidden rounded-[22px] border border-slate-200/90 bg-white/90 p-2.5 sm:p-3 backdrop-blur-2xl shadow-[0_15px_35px_rgba(100,116,139,0.12)] transition-all duration-500 hover:border-pink-300 hover:shadow-[0_20px_40px_rgba(236,72,153,0.15)]"
      >

        <div className="mb-2.5 flex items-center justify-between px-2">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500 animate-pulse" />
            <span className="truncate max-w-[180px]">{project.github.replace("https://github.com/", "")}</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 relative group-hover:border-pink-300 transition-colors">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={675}
            className="aspect-[16/9.5] w-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span className="text-[11px] font-semibold text-white bg-pink-600/90 px-3 py-1 rounded-full backdrop-blur-md shadow-md flex items-center gap-1.5">
              <span>View Project</span>
              <ArrowUpRight size={13} />
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-6 flex flex-col justify-center"
      >
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-pink-600">
          {project.subtitle}
        </span>

        <h3 className="mt-1.5 font-black leading-tight tracking-tight text-slate-900 text-xl sm:text-2xl lg:text-3xl font-heading">
          {project.title}
        </h3>

        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-white/90 px-2.5 py-0.5 text-[10.5px] font-semibold text-slate-700 shadow-2xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 space-y-1.5 border-t border-slate-200/80 pt-4">
          {project.features.slice(0, 5).map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600 border border-pink-200 p-0.5">
                <Check size={10} />
              </div>
              <span className="text-xs font-medium text-slate-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group !px-4 !py-2 !text-xs"
            >
              Live Demo
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}

          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-slate-300 bg-white/90 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-xs transition-all hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50"
            >
              <FaGithub size={13} />
              Source Code
            </a>
          )}

          {project.figma && (
            <a
              href={project.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-pink-200 bg-pink-50 px-3.5 py-2 text-xs font-semibold text-pink-700 shadow-xs transition-all hover:border-pink-300 hover:bg-pink-100"
            >
              <FaFigma size={13} />
              Figma Spec
            </a>
          )}

          {project.caseStudy && (
            <Link
              href={`/projects/${project.slug || "gethired"}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#F8D2D9] bg-[#FFF5F7] px-3.5 py-2 text-xs font-bold text-[#E85D8B] shadow-2xs transition-all hover:border-[#E85D8B] hover:bg-[#FFE8EE]"
            >
              <span>Read Full Case Study</span>
              <span>&rarr;</span>
            </Link>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}