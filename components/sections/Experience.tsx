"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const experiences = [
  {
    period: "June – July 2026",
    role: "Research Intern",
    organization: "SMART Policing Lab, Rashtriya Raksha University",
    category: "Institutional Research Internship",
    description:
      "Conducted foundational research on national cybercrime trends, digital evidence bottlenecks, and investigative methodologies under the School of Internal Security and SMART Policing. Spearheaded research workflows and designed the core architecture for CrimeLens AI to assist police investigators with automated evidence synthesis and structured legal reasoning.",
  },
  {
    period: "2026",
    role: "Lead Developer & Researcher",
    organization: "CrimeLens AI",
    category: "Flagship Multi-Agent System",
    description:
      "Designed and implemented an AI-assisted investigative platform featuring specialized agents for legal mapping, cyber threat correlation, and report generation. Focused on workflow transparency, chain-of-custody tracking, and reducing analysis turnaround for law enforcement practitioners.",
  },
  {
    period: "2026",
    role: "Project Developer",
    organization: "ThreatSight",
    category: "Cybersecurity Threat Analysis",
    description:
      "Created a standalone phishing detection application incorporating fuzzy brand matching via RapidFuzz, character spoofing detection, and heuristic URL parsing. Delivered explainable risk metrics to demystify classification results for non-technical users.",
  },
  {
    period: "Present",
    role: "System Designer & Builder",
    organization: "Robin AI Assistant",
    category: "Local Desktop Automation",
    description:
      "Architecting an open, modular desktop assistant prioritizing local execution, privacy-conscious conversation storage, and hands-free voice control via Whisper. Exploring local model integration and system automation hooks.",
  },
];

export default function Experience() {
  return (
    <section id="research" className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-32">
      <ScrollReveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2A527A]">
          Research & Experience
        </p>

        <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#191B1F] sm:text-4xl md:text-5xl">
          Academic inquiry and applied system development.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#525D6B]">
          A progressive track record spanning national security research,
          multi-agent intelligence systems, and applied cybersecurity tooling.
        </p>
      </ScrollReveal>

      {/* Editorial Timeline */}
      <div className="relative mt-16 border-l border-[#E6E0D4] pl-6 md:pl-10 space-y-12 ml-3 md:ml-4">
        {experiences.map((exp, idx) => (
          <ScrollReveal key={exp.role + exp.organization} delay={idx * 0.1}>
            <div className="relative group">
              {/* Timeline Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#FAF8F5] bg-[#2A527A] shadow-[0_0_0_2px_#E6E0D4] transition-transform duration-200 group-hover:scale-125" />

              {/* Meta Info */}
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2A527A]">
                  {exp.period}
                </span>
                <span className="text-xs text-[#828E9E]">/</span>
                <span className="text-xs font-medium text-[#525D6B]">
                  {exp.category}
                </span>
              </div>

              {/* Title & Organization */}
              <h3 className="mt-2 text-xl font-medium text-[#191B1F] sm:text-2xl">
                {exp.role}{" "}
                <span className="text-[#626E7E] font-normal">— {exp.organization}</span>
              </h3>

              {/* Description */}
              <p className="mt-3.5 max-w-3xl text-sm leading-relaxed text-[#525D6B] sm:text-base sm:leading-relaxed">
                {exp.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
