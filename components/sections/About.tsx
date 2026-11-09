"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const researchInterests = [
  "Artificial Intelligence",
  "Cybersecurity",
  "Intelligent Systems",
  "Research Engineering",
  "Human-Computer Interaction",
  "Workflow Automation",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28 md:px-8 md:py-36">
      <ScrollReveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2A527A]">
          About
        </p>

        <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#191B1F] sm:text-4xl md:text-5xl md:leading-[1.15]">
          Developing intelligent software systems grounded in Artificial Intelligence,
          applied Cybersecurity, and disciplined software engineering.
        </h2>
      </ScrollReveal>

      {/* Main Narrative & Background Context */}
      <div className="mt-16 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <ScrollReveal delay={0.1}>
          <div className="space-y-6 text-base leading-relaxed text-[#4A5565]">
            <p>
              I am a B.Tech Computer Science student specializing in Cyber Security at
              SRM Institute of Science and Technology. My technical interests center on
              applied machine intelligence, security automation, and building systems
              that address tangible real-world problems.
            </p>

            <p>
              My work focuses on AI-assisted cybercrime investigation systems, local-first
              desktop automation agents, and explainable phishing detection tools. I value
              practical engineering: writing clean code, designing thoughtful workflows,
              and evaluating solutions against real institutional challenges.
            </p>

            <p>
              Looking ahead, my research aspirations encompass intelligent agent architectures,
              secure operational software, and exploring the future interplay between intelligent
              algorithms and specialized hardware.
            </p>
          </div>
        </ScrollReveal>

        {/* Background Meta Card */}
        <ScrollReveal delay={0.2}>
          <div className="editorial-card p-8 h-fit">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#828E9E]">
              Background
            </p>

            <div className="mt-6 space-y-5 text-sm">
              <div>
                <p className="text-xs text-[#828E9E]">Education</p>
                <p className="mt-1 font-medium text-[#191B1F]">
                  B.Tech in Computer Science
                </p>
                <p className="text-xs text-[#525D6B]">Specialization in Cyber Security</p>
              </div>

              <div className="border-t border-[#F0EBE1] pt-4">
                <p className="text-xs text-[#828E9E]">Institution</p>
                <p className="mt-1 font-medium text-[#191B1F]">
                  SRM Institute of Science and Technology
                </p>
              </div>

              <div className="border-t border-[#F0EBE1] pt-4">
                <p className="text-xs text-[#828E9E]">Primary Focus</p>
                <p className="mt-1 font-medium text-[#191B1F]">
                  AI Research & Applied Cybersecurity
                </p>
              </div>

              <div className="border-t border-[#F0EBE1] pt-4">
                <p className="text-xs text-[#828E9E]">Location</p>
                <p className="mt-1 font-medium text-[#191B1F]">
                  Ahmedabad / Chennai, India
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Research Interests */}
      <ScrollReveal delay={0.15}>
        <div className="mt-20 border-t border-[#EAE4D8] pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#828E9E]">
            Research Interests
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {researchInterests.map((interest) => (
              <span key={interest} className="editorial-pill">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Three Pillars */}
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <ScrollReveal delay={0.1}>
          <div className="editorial-card p-8 h-full transition-all duration-300 hover:border-[#D6CEC1] hover:shadow-md">
            <h3 className="text-lg font-medium text-[#191B1F]">
              Artificial Intelligence
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525D6B]">
              Designing collaborative multi-agent architectures, local LLM orchestration,
              and task-specific pipelines tailored to complex data synthesis.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="editorial-card p-8 h-full transition-all duration-300 hover:border-[#D6CEC1] hover:shadow-md">
            <h3 className="text-lg font-medium text-[#191B1F]">
              Cybersecurity
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525D6B]">
              Investigating digital evidence pipelines, phishing heuristics, brand
              impersonation telemetry, and forensic analysis frameworks.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="editorial-card p-8 h-full transition-all duration-300 hover:border-[#D6CEC1] hover:shadow-md">
            <h3 className="text-lg font-medium text-[#191B1F]">
              Intelligent Systems
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525D6B]">
              Engineering local-first, privacy-conscious desktop systems that balance
              low-latency interaction with reliable autonomous task handling.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
