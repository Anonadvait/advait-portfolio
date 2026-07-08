"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Building2,
  BrainCircuit,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const timeline = [
  {
    year: "2026",
    title: "Research Intern",
    company: "Rashtriya Raksha University",
    icon: Building2,
    description:
      "Worked on AI-assisted cybercrime investigation systems. Designed research workflows, studied national cybercrime challenges, and contributed towards CrimeLens AI.",
  },
  {
    year: "2026",
    title: "CrimeLens AI",
    company: "Flagship Research Project",
    icon: BrainCircuit,
    description:
      "Designed a multi-agent AI platform for assisting investigators with evidence analysis, legal reasoning, cybercrime investigation workflows, and intelligent report generation.",
  },
  {
    year: "2026",
    title: "ThreatSight",
    company: "Cybersecurity Project",
    icon: ShieldCheck,
    description:
      "Developed a phishing detection platform capable of brand impersonation analysis, risk scoring, and explainable threat detection using Python.",
  },
  {
    year: "Present",
    title: "Robin",
    company: "Desktop AI Assistant",
    icon: Cpu,
    description:
      "Currently developing an intelligent desktop assistant focused on productivity, AI automation, research assistance, and local-first workflows.",
  },
];

export default function Experience() {
  return (
    <section
      id="research"
      className="mx-auto max-w-7xl px-8 py-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.35em] text-blue-400">
          Research & Experience
        </p>

        <h2 className="mt-6 text-6xl font-black">
          Building Through
          <br />
          Research.
        </h2>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-gray-400">
          My work combines Artificial Intelligence, Cybersecurity,
          and Software Engineering through research-driven projects
          focused on solving practical problems.
        </p>
      </motion.div>

      <div className="relative mt-28">

        <div className="absolute left-7 top-0 h-full w-px bg-white/10" />

        <div className="space-y-12">

          {timeline.map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
                className="relative flex gap-8"
              >

                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 shadow-lg shadow-blue-500/20">

                  <Icon size={26} />

                </div>

                <div className="flex-1 rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                  <div className="flex flex-wrap items-center gap-4">

                    <span className="flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">

                      <Calendar size={16} />

                      {item.year}

                    </span>

                    <span className="text-gray-500">
                      {item.company}
                    </span>

                  </div>

                  <h3 className="mt-5 text-3xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}