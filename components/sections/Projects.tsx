import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-8 py-40"
    >
      <SectionTitle
        subtitle="Research & Engineering Portfolio"
        title="Selected Projects"
      />

      {/* =======================
          FEATURED PROJECT
      ======================== */}

      <div className="mb-10">

        <ProjectCard
          title="CrimeLens AI"
          description="An AI-assisted investigative intelligence platform developed during my research internship at Rashtriya Raksha University. The system combines cybercrime research, intelligent evidence analysis, AI-assisted investigation workflows, and modular agent-based architecture to support modern cybercrime investigations."
          status="⭐ Flagship Research Project"
          stack={[
            "Next.js",
            "React",
            "Prisma",
            "PostgreSQL",
            "Docker",
            "Gemini",
            "AI Agents",
          ]}
        />

      </div>

      {/* =======================
          OTHER PROJECTS
      ======================== */}

      <div className="grid gap-10 lg:grid-cols-2">

        <ProjectCard
          title="Robin AI"
          description="A modular desktop AI assistant focused on local execution, intelligent automation, voice interaction, and future hardware integration."
          status="Independent Research Project"
          stack={[
            "Python",
            "PySide6",
            "OpenWakeWord",
            "Gemini",
          ]}
        />

        <ProjectCard
          title="ThreatSight"
          description="Desktop phishing detection platform capable of detecting phishing indicators, brand impersonation, and explainable threat analysis."
          status="Cybersecurity Project"
          stack={[
            "Python",
            "CustomTkinter",
            "RapidFuzz",
          ]}
        />

      </div>
    </section>
  );
}