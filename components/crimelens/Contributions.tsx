"use client";

import { motion } from "framer-motion";
import {
  Search,
  FileBarChart2,
  BrainCircuit,
  Boxes,
  ClipboardList,
  Presentation,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const contributions = [
  {
    icon: Search,
    title: "Cybercrime Research",
    description:
      "Conducted detailed research on cybercrime trends using NCRB reports, Smart Policing initiatives, and existing investigation workflows to understand real-world investigative challenges.",
  },
  {
    icon: FileBarChart2,
    title: "Technical Documentation",
    description:
      "Prepared research reports, technical documentation, implementation plans, architecture notes, and supporting material throughout the development lifecycle.",
  },
  {
    icon: BrainCircuit,
    title: "AI Workflow Design",
    description:
      "Designed the logical workflow connecting evidence processing, AI agents, investigation pipeline, report generation, and decision-support mechanisms.",
  },
  {
    icon: Boxes,
    title: "System Architecture",
    description:
      "Designed the modular architecture for CrimeLens AI, defining the responsibilities of each component and ensuring future scalability for additional AI capabilities.",
  },
  {
    icon: ClipboardList,
    title: "Implementation Planning",
    description:
      "Prepared detailed implementation plans for major development phases, defining features, priorities, architecture evolution, and development milestones.",
  },
  {
    icon: CheckCircle2,
    title: "AI-assisted Development",
    description:
      "Used AI-assisted development tools to accelerate implementation while personally planning the architecture, validating generated code, refining prompts, reviewing outputs, and making design decisions throughout the project.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Review",
    description:
      "Reviewed the platform from a cybersecurity perspective, identifying improvements related to evidence integrity, auditability, modularity, access control, and investigation reliability.",
  },
  {
    icon: Presentation,
    title: "Research Presentation",
    description:
      "Presented research findings, project progress, architectural decisions, and system concepts throughout the internship to mentors and faculty members.",
  },
];

export default function Contributions() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-40">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <p className="uppercase tracking-[0.35em] text-blue-400">
          My Contribution
        </p>

        <h2 className="mt-6 text-6xl font-black">
          What I Worked On
        </h2>

        <p className="mt-10 max-w-5xl text-xl leading-10 text-gray-400">

          While CrimeLens AI was developed as a collaborative research
          project, my primary responsibilities extended beyond software
          implementation. I contributed to research, architecture,
          planning, AI workflow design, technical documentation, and
          validation of AI-assisted development throughout the internship.

        </p>

      </motion.div>

      <div className="mt-24 grid gap-8 md:grid-cols-2">

        {contributions.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
              }}
              whileHover={{
                y: -6,
              }}
              className="group rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
            >

              <div className="flex items-center gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">

                  <Icon
                    size={28}
                    className="text-blue-400"
                  />

                </div>

                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>

              </div>

              <p className="mt-8 leading-9 text-gray-400">
                {item.description}
              </p>

            </motion.div>

          );

        })}

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 rounded-[40px] border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-white/5 to-blue-500/10 p-16"
      >

        <h3 className="text-center text-4xl font-bold">
          Research wasn't just writing reports.
        </h3>

        <p className="mx-auto mt-8 max-w-5xl text-center text-lg leading-9 text-gray-400">

          The internship involved understanding real investigative
          challenges, translating those findings into system design,
          planning implementation phases, validating AI-assisted
          development, and ensuring that the platform remained practical,
          scalable, and aligned with the needs of cybercrime
          investigations.

        </p>

      </motion.div>

    </section>
  );
}