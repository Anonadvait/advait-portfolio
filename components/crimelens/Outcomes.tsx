"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  BrainCircuit,
  ShieldCheck,
  Boxes,
  Presentation,
  FileText,
} from "lucide-react";

const outcomes = [
  {
    icon: BrainCircuit,
    title: "AI Investigation Workflow",
    description:
      "Designed a complete AI-assisted investigation workflow covering evidence ingestion, specialised AI analysis, and investigation report generation.",
  },
  {
    icon: Boxes,
    title: "Modular Architecture",
    description:
      "Developed a scalable multi-agent architecture capable of supporting future AI modules, forensic tools, and intelligent investigation capabilities.",
  },
  {
    icon: ShieldCheck,
    title: "Cybercrime Research",
    description:
      "Conducted extensive research on cybercrime trends, NCRB reports, Smart Policing initiatives, and investigator workflows to guide system design.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description:
      "Prepared implementation plans, technical documentation, architecture descriptions, and research reports throughout development.",
  },
  {
    icon: Presentation,
    title: "Research Presentation",
    description:
      "Presented the project, architectural decisions, and research findings during the internship.",
  },
  {
    icon: CheckCircle2,
    title: "Foundation for Future Work",
    description:
      "Established a research prototype that can evolve into a production-ready investigative intelligence platform.",
  },
];

export default function Outcomes() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-40">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <p className="uppercase tracking-[0.35em] text-blue-400">
          Outcomes
        </p>

        <h2 className="mt-6 text-6xl font-black">
          Research Outcomes
        </h2>

        <p className="mt-10 max-w-5xl text-xl leading-10 text-gray-400">
          The internship resulted in both a functional research prototype
          and a structured foundation for future AI-driven cybercrime
          investigation systems.
        </p>

      </motion.div>

      <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {outcomes.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
            >

              <Icon
                size={34}
                className="text-blue-400"
              />

              <h3 className="mt-8 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-6 leading-9 text-gray-400">
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
        className="mt-28 rounded-[40px] border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-white/5 to-blue-500/10 p-16"
      >

        <h3 className="text-center text-4xl font-bold">
          CrimeLens AI is not the final destination.
        </h3>

        <p className="mx-auto mt-8 max-w-5xl text-center text-lg leading-9 text-gray-400">

          The project establishes the architectural, research, and
          technical foundation for future intelligent investigation
          systems capable of assisting cybercrime investigators through
          trustworthy and explainable Artificial Intelligence.

        </p>

      </motion.div>

    </section>
  );
}