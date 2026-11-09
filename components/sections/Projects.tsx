"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-32">
      <ScrollReveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2A527A]">
          Selected Projects
        </p>

        <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#191B1F] sm:text-4xl md:text-5xl">
          Research, engineering, and purposeful systems.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#525D6B]">
          Each initiative explores a concrete problem across cybercrime analysis,
          desktop automation, or threat intelligence, emphasizing architectural clarity
          and real-world utility.
        </p>
      </ScrollReveal>

      <div className="mt-16 space-y-8">
        {/* Flagship Project: CrimeLens AI */}
        <ScrollReveal delay={0.1}>
          <ProjectCard
            title="CrimeLens AI"
            description="An AI-assisted investigative intelligence platform developed during my research internship at Rashtriya Raksha University. The system synthesizes digital evidence, orchestrates multi-agent analytical workflows, correlates legal references, and assists law enforcement with structured investigative summaries."
            stack={[
              "Next.js",
              "TypeScript",
              "PostgreSQL",
              "Prisma",
              "Multi-Agent AI",
              "Digital Forensics",
            ]}
            status="Flagship Research Project"
            isFeatured={true}
            link="/projects/crimelens"
          />
        </ScrollReveal>

        {/* Secondary Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          <ScrollReveal delay={0.15}>
            <ProjectCard
              title="Robin"
              description="A research-oriented desktop assistant built for local execution, intelligent task automation, and hands-free interaction, featuring modular agent plug-ins and persistent memory."
              stack={["Python", "PySide6", "Whisper", "Local LLMs", "Automation"]}
              status="Active Development"
              link="/projects/robin"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <ProjectCard
              title="ThreatSight"
              description="A phishing detection platform capable of inspecting URLs, identifying lookalike domain spoofing, and generating explainable threat scores for suspicious digital communications."
              stack={["Python", "CustomTkinter", "RapidFuzz", "Heuristic Analysis", "Cybersecurity"]}
              status="Completed Research"
              link="/projects/threatsight"
              githubUrl="https://github.com/Anonadvait/ThreatSight"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
