"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-8 py-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.35em] text-blue-400">
          Featured Projects
        </p>

        <h2 className="mt-6 text-6xl font-black">
          Research.
          <br />
          Engineering.
          <br />
          Innovation.
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400">
          Every project represents a step toward building intelligent,
          secure and impactful software systems.
        </p>
      </motion.div>

      <div className="mt-24 grid gap-8">

        <ProjectCard
          title="CrimeLens AI"
          description="An AI-assisted cybercrime investigation platform developed during my research internship. CrimeLens combines intelligent agents, evidence management and investigative workflows into a unified system for law enforcement."
          stack={[
            "Next.js",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "AI Agents",
            "Cybersecurity",
          ]}
          status="⭐ Flagship Research Project"
        />

        <div className="grid gap-8 lg:grid-cols-2">

          <ProjectCard
            title="Robin"
            description="A desktop AI assistant focused on productivity, automation, local AI workflows and intelligent research assistance."
            stack={[
              "Python",
              "PySide6",
              "Whisper",
              "LLMs",
            ]}
            status="🚧 Currently Building"
          />

          <ProjectCard
            title="ThreatSight"
            description="A phishing detection and brand impersonation analysis platform capable of explainable threat scoring and URL analysis."
            stack={[
              "Python",
              "Cybersecurity",
              "CustomTkinter",
              "RapidFuzz",
            ]}
            status="✅ Completed"
          />

        </div>

      </div>
    </section>
  );
}