"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, useReducedMotion } from "motion/react";

const skillCategories = [
  {
    title: "Programming Languages",
    description: "Core languages used for system scripting, application engineering, and performance-sensitive logic.",
    skills: ["Python", "C++", "Java", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Artificial Intelligence & Agents",
    description: "Multi-agent orchestration, model integration, speech pipelines, and contextual reasoning workflows.",
    skills: ["AI Agents", "LLM Integration", "Whisper", "NVIDIA NIM", "Prompt Engineering", "OpenAI API"],
  },
  {
    title: "Cybersecurity & Investigation",
    description: "Practical security disciplines including threat detection, OSINT intelligence, and forensic protocols.",
    skills: ["OSINT", "Phishing Detection", "Threat Analysis", "Digital Forensics", "Network Security", "Linux Systems"],
  },
  {
    title: "Frameworks & Development Tools",
    description: "Full-stack web architecture, database design, containerization, and modern development tools.",
    skills: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "Docker", "Git & GitHub"],
  },
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-32">
      <ScrollReveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2A527A]">
          Technical Capabilities
        </p>

        <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#191B1F] sm:text-4xl md:text-5xl">
          Core toolkits, frameworks, and methodologies.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#525D6B]">
          A focused technical repertoire honed through research internships,
          full-stack engineering, and cybersecurity project implementations.
        </p>
      </ScrollReveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {skillCategories.map((category, idx) => (
          <ScrollReveal key={category.title} delay={idx * 0.1}>
            <motion.div
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -4,
                      transition: { duration: 0.25, ease: "easeOut" },
                    }
              }
              className="editorial-card p-8 flex flex-col justify-between h-full transition-all duration-300 hover:border-[#C5DDF4] hover:shadow-[0_16px_36px_-6px_rgba(26,29,32,0.06)]"
            >
              <div>
                <h3 className="text-xl font-medium text-[#191B1F]">
                  {category.title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#626E7E]">
                  {category.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-[#F2ECE3]">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="editorial-pill text-xs font-normal transition-colors hover:border-[#C5DDF4]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
