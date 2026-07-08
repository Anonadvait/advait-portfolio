"use client";

import { motion } from "framer-motion";
import {
  Upload,
  Database,
  Scale,
  Shield,
  BrainCircuit,
  SearchCheck,
  FileText,
} from "lucide-react";

const pipeline = [
  {
    icon: Upload,
    title: "Evidence Upload",
    description:
      "FIRs, screenshots, PDFs, videos, URLs, emails, logs and other digital evidence are uploaded into CrimeLens.",
  },
  {
    icon: Database,
    title: "Evidence Processing",
    description:
      "Evidence is organised, classified and prepared for downstream AI analysis before entering the investigation pipeline.",
  },
  {
    icon: BrainCircuit,
    title: "Multi-Agent Analysis",
    description:
      "Specialised AI agents independently analyse legal, technical and investigative aspects of the uploaded evidence.",
  },
  {
    icon: SearchCheck,
    title: "Evidence Correlation",
    description:
      "Information from multiple evidence sources is connected together to discover hidden relationships and investigative leads.",
  },
  {
    icon: FileText,
    title: "Investigation Report",
    description:
      "CrimeLens generates investigation summaries, findings, confidence indicators, missing information and recommended next steps.",
  },
];

const agents = [
  {
    icon: Scale,
    title: "Legal Agent",
    role: "Relevant Acts • IPC • IT Act • Procedures",
  },
  {
    icon: Shield,
    title: "Cyber Agent",
    role: "Attack Analysis • Malware • Phishing • Infrastructure",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence Agent",
    role: "Pattern Recognition • Evidence Correlation",
  },
  {
    icon: SearchCheck,
    title: "Investigative Agent",
    role: "Decision Support • Final Investigation Summary",
  },
];

export default function Workflow() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-40">

      <motion.div
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
      >

        <p className="uppercase tracking-[0.35em] text-blue-400">
          System Architecture
        </p>

        <h2 className="mt-6 text-6xl font-black">
          How CrimeLens AI Works
        </h2>

        <p className="mt-10 max-w-5xl text-xl leading-10 text-gray-400">

          CrimeLens follows a structured investigative workflow where
          digital evidence passes through multiple specialised AI
          systems before a unified investigation report is generated.

        </p>

      </motion.div>

      {/* PIPELINE */}

      <div className="mt-24 space-y-10">

        {pipeline.map((step,index)=>{

          const Icon = step.icon;

          return(

            <motion.div
              key={step.title}
              initial={{opacity:0,x:index%2===0?-50:50}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="relative"
            >

              <div className="rounded-[34px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

                <div className="flex items-center gap-8">

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-500/10">

                    <Icon
                      size={34}
                      className="text-blue-400"
                    />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
                      STEP {index+1}
                    </p>

                    <h3 className="mt-3 text-4xl font-bold">
                      {step.title}
                    </h3>

                  </div>

                </div>

                <p className="mt-8 max-w-5xl text-lg leading-9 text-gray-400">
                  {step.description}
                </p>

              </div>

              {index !== pipeline.length-1 && (

                <div className="mx-auto h-16 w-1 rounded-full bg-gradient-to-b from-blue-500 to-transparent" />

              )}

            </motion.div>

          )

        })}

      </div>

      {/* AI AGENTS */}

      <div className="mt-36">

        <h3 className="text-center text-5xl font-bold">
          Multi-Agent Intelligence Layer
        </h3>

        <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-9 text-gray-400">

          Instead of relying on a single AI model, CrimeLens distributes
          responsibilities across specialised AI agents. Each agent
          focuses on a dedicated investigative domain before their
          outputs are combined into a unified investigation report.

        </p>

        <div className="mt-20 grid gap-8 lg:grid-cols-4">

          {agents.map((agent,index)=>{

            const Icon = agent.icon;

            return(

              <motion.div
                key={agent.title}
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{delay:index*.08}}
                whileHover={{
                  y:-10,
                  scale:1.03
                }}
                className="group rounded-[30px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-500/10">

                  <Icon
                    size={34}
                    className="text-blue-400"
                  />

                </div>

                <h4 className="mt-8 text-2xl font-bold">
                  {agent.title}
                </h4>

                <p className="mt-6 leading-8 text-gray-400">
                  {agent.role}
                </p>

              </motion.div>

            )

          })}

        </div>

      </div>

      {/* FINAL OUTPUT */}

      <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        className="mt-36 rounded-[40px] border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-white/5 to-blue-500/10 p-20"
      >

        <h3 className="text-center text-5xl font-black">
          Final Output
        </h3>

        <p className="mx-auto mt-10 max-w-5xl text-center text-xl leading-10 text-gray-400">

          CrimeLens consolidates insights from every specialised AI agent
          into a single investigation report containing evidence
          summaries, legal references, cyber intelligence findings,
          confidence indicators, missing information, and recommended
          next investigative actions for law enforcement personnel.

        </p>

      </motion.div>

    </section>
  );
}