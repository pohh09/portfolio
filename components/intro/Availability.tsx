"use client";

import { motion } from "framer-motion";

const fraunces = { className: "font-serif" };

const items = [
  "🟢 Available for Full-Time",
  "Freelance",
  "Remote",
  "Frontend Developer",
  "Full Stack Developer",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Open to Opportunities",
];

export default function Availability() {
  const marquee = [...items, ...items];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#FFF8F5] py-20 sm:py-24 lg:py-32">
      <div className="w-full">
        <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1600px] px-2 sm:px-6">
          {/* Marquee */}
          <div
            className="overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 35, ease: "linear", repeat: Infinity }}
              className="flex w-max gap-3 sm:gap-4 lg:gap-5"
            >
              {marquee.map((item, index) => (
                <div
                  key={index}
                  className="
                    whitespace-nowrap rounded-full border-2 border-[#EADDE3] bg-white
                    px-4 py-2 text-xs font-bold text-[#302535] shadow-xs transition
                    hover:-translate-y-1 hover:border-[#F29AB2] hover:text-[#E85D8B]
                    sm:px-6 sm:py-2.5 sm:text-sm
                  "
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-20 max-w-5xl text-center sm:mt-24"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FCE8E8] border border-[#F8D2D9] px-4 py-1 text-xs font-kalam font-bold text-[#E85D8B] shadow-xs mx-auto w-fit">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              AVAILABLE FOR WORK
            </span>

            <h2
              className="font-kalam font-bold mt-8 text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] tracking-tight text-[#302535]"
            >
              Let&apos;s Build
              <br />
              <span className="text-[#E85D8B]">
                Something Amazing. ♡
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl px-4 text-base leading-relaxed text-[#756875] sm:text-lg">
              I&apos;m actively seeking opportunities where I can build scalable web applications,
              craft responsive and fluid user experiences, and collaborate with talented teams.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}