"use client";

import { motion } from "framer-motion";
import {
  Scale,
  Shield,
  BrainCircuit,
  SearchCheck,
} from "lucide-react";

const agents = [
  {
    icon: Scale,
    title: "Legal Agent",
    subtitle: "Legal Intelligence",
    description:
      "The Legal Agent assists investigators by identifying applicable legal provisions, cyber laws, IT Act sections, jurisdictional considerations, procedural requirements, and investigation guidelines relevant to the available evidence. Its objective is to reduce the time spent searching legal references while ensuring investigators retain complete decision-making authority.",
  },
  {
    icon: Shield,
    title: "Cyber Agent",
    subtitle: "Technical Analysis",
    description:
      "The Cyber Agent performs technical analysis of cyber incidents by examining attack techniques, phishing attempts, malicious infrastructure, malware indicators, suspicious domains, IP addresses, digital artefacts, and technical evidence collected throughout the investigation.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence Agent",
    subtitle: "Pattern Discovery",
    description:
      "The Intelligence Agent correlates information collected from multiple evidence sources, discovers hidden relationships, identifies behavioural patterns, highlights recurring incidents, and generates investigative leads that may otherwise remain unnoticed during manual analysis.",
  },
  {
    icon: SearchCheck,
    title: "Investigative Agent",
    subtitle: "Decision Support",
    description:
      "The Investigative Agent acts as the orchestrator of the platform. It combines outputs from all specialised agents into a unified investigation summary, presents key findings, highlights missing information, estimates confidence, and suggests possible next investigative steps for officers.",
  },
];

export default function Agents() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-40">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <p className="uppercase tracking-[0.35em] text-blue-400">
          AI Architecture
        </p>

        <h2 className="mt-6 text-6xl font-black">
          Specialized AI Agents
        </h2>

        <p className="mt-10 max-w-5xl text-xl leading-10 text-gray-400">

          CrimeLens AI follows a modular multi-agent architecture.
          Rather than assigning every task to a single AI model,
          responsibilities are distributed across specialised agents.
          Each agent focuses on a particular investigative domain,
          improving explainability, scalability, and maintainability.

        </p>

      </motion.div>

      <div className="mt-24 grid gap-8 lg:grid-cols-2">

        {agents.map((agent, index) => {

          const Icon = agent.icon;

          return (

            <motion.div
              key={agent.title}
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
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
            >

              <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

              <div className="relative z-10">

                <div className="flex items-center gap-6">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">

                    <Icon
                      size={30}
                      className="text-blue-400"
                    />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                      {agent.subtitle}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold">
                      {agent.title}
                    </h3>

                  </div>

                </div>

                <p className="mt-10 leading-9 text-gray-400">
                  {agent.description}
                </p>

              </div>

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
          Why a Multi-Agent System?
        </h3>

        <p className="mx-auto mt-8 max-w-5xl text-center text-lg leading-9 text-gray-400">

          Separating responsibilities across multiple specialised agents
          enables each component to focus on a clearly defined objective.
          This approach improves transparency, allows independent
          enhancement of individual agents, and provides a scalable
          foundation for integrating future capabilities such as OCR,
          speech processing, malware analysis, threat intelligence,
          forensic automation, and additional investigative modules.

        </p>

      </motion.div>

    </section>
  );
}