"use client";

import { motion } from "framer-motion";
import {
  ScanSearch,
  Mic,
  Globe,
  Bot,
  Database,
  Cpu,
  Radar,
  Shield,
  Network,
} from "lucide-react";

const roadmap = [
  {
    phase: "Phase 1",
    title: "Short-Term Development",
    items: [
      {
        icon: ScanSearch,
        title: "OCR Pipeline",
        description: "Automatic extraction of information from scanned documents and PDFs.",
      },
      {
        icon: Database,
        title: "Evidence Database",
        description: "Centralized storage with indexing and intelligent search.",
      },
      {
        icon: Shield,
        title: "Authentication",
        description: "Role-based access control and investigator management.",
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Advanced Intelligence",
    items: [
      {
        icon: Mic,
        title: "Audio & Voice Analysis",
        description: "Speech transcription and conversational evidence analysis.",
      },
      {
        icon: Radar,
        title: "Threat Intelligence",
        description: "Integration with cyber threat feeds and IOC databases.",
      },
      {
        icon: Bot,
        title: "Smarter AI Agents",
        description: "Context-aware agents capable of collaborative reasoning.",
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "Long-Term Vision",
    items: [
      {
        icon: Globe,
        title: "National Deployment",
        description: "Research toward deployment across law enforcement agencies.",
      },
      {
        icon: Network,
        title: "Inter-Agency Collaboration",
        description: "Secure sharing of investigation intelligence across departments.",
      },
      {
        icon: Cpu,
        title: "Predictive Investigation",
        description: "Future research into AI-assisted crime pattern prediction and proactive investigation.",
      },
    ],
  },
];

export default function Future() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-40">

      <motion.div
        
        
        
      >

        <p className="uppercase tracking-[0.35em] text-[#2A527A]">
          Future Vision
        </p>

        <h2 className="mt-6 text-6xl font-black">
          Where CrimeLens Can Go
        </h2>

        <p className="mt-10 max-w-5xl text-xl leading-10 text-[#525D6B]">

          CrimeLens AI was designed as a scalable research platform.
          The modular architecture allows new capabilities to be added
          without redesigning the entire system.

        </p>

      </motion.div>

      <div className="mt-24 space-y-24">

        {roadmap.map((phase, index) => (

          <motion.div
            key={phase.phase}
            
            
            
            transition={{
              delay: index * 0.1,
            }}
          >

            <div className="flex items-center gap-6">

              <div className="rounded-full border border-[#D1E0EC] bg-[#EBF2F7] px-5 py-2 text-[#2A527A]">

                {phase.phase}

              </div>

              <h3 className="text-4xl font-bold">

                {phase.title}

              </h3>

            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-3">

              {phase.items.map((item) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className="rounded-[32px] border border-[#EAE4D8] bg-[#FFFFFF] p-10 backdrop-blur-xl"
                  >

                    <Icon
                      size={34}
                      className="text-[#2A527A]"
                    />

                    <h4 className="mt-8 text-2xl font-bold">
                      {item.title}
                    </h4>

                    <p className="mt-6 leading-9 text-[#525D6B]">
                      {item.description}
                    </p>

                  </motion.div>

                );

              })}

            </div>

          </motion.div>

        ))}

      </div>

      <motion.div
        
        
        
        className="mt-32 rounded-[42px] border border-[#D1E0EC] bg-gradient-to-r from-[#FAF8F5] via-[#FFFFFF] to-[#FAF8F5] p-20"
      >

        <h3 className="text-center text-5xl font-black">
          Long-Term Vision
        </h3>

        <p className="mx-auto mt-10 max-w-5xl text-center text-xl leading-10 text-[#525D6B]">

          CrimeLens AI represents the beginning of a broader vision:
          creating intelligent, explainable, and trustworthy AI systems
          that assist investigators in solving increasingly complex
          cybercrime cases while preserving transparency, accountability,
          and human oversight.

        </p>

      </motion.div>

    </section>
  );
}