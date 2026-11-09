"use client";

import { motion } from "framer-motion";
import {
  Database,
  Upload,
  BrainCircuit,
  Scale,
  Shield,
  SearchCheck,
  FileText,
} from "lucide-react";

const agents = [
  {
    title: "Legal Agent",
    icon: Scale,
    color: "text-[#2A527A]",
  },
  {
    title: "Cyber Agent",
    icon: Shield,
    color: "text-cyan-400",
  },
  {
    title: "Intelligence Agent",
    icon: BrainCircuit,
    color: "text-violet-400",
  },
];

export default function Architecture() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-40">

      <motion.div
        
        
        
      >

        <p className="uppercase tracking-[0.35em] text-[#2A527A]">
          Architecture
        </p>

        <h2 className="mt-6 text-6xl font-black">
          System Architecture
        </h2>

        <p className="mt-10 max-w-5xl text-xl leading-10 text-[#525D6B]">
          CrimeLens AI follows a modular architecture where each AI
          agent focuses on a specialised responsibility before their
          outputs are combined into a unified investigation report.
        </p>

      </motion.div>

      <div className="mt-24">

        <div className="grid gap-8">

          {/* Upload */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mx-auto flex w-[320px] flex-col items-center rounded-3xl border border-[#EAE4D8] bg-[#FFFFFF] p-8 backdrop-blur-xl"
          >
            <Upload className="h-10 w-10 text-[#2A527A]" />

            <h3 className="mt-5 text-2xl font-bold">
              Evidence Upload
            </h3>

            <p className="mt-3 text-center text-[#525D6B]">
              FIRs • PDFs • Images • Videos • URLs • Logs
            </p>

          </motion.div>

          <div className="mx-auto h-16 w-[2px] bg-[#2A527A]" />

          {/* Processing */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mx-auto flex w-[340px] flex-col items-center rounded-3xl border border-[#EAE4D8] bg-[#FFFFFF] p-8 backdrop-blur-xl"
          >

            <Database className="h-10 w-10 text-[#2A527A]" />

            <h3 className="mt-5 text-2xl font-bold">
              Evidence Processing
            </h3>

            <p className="mt-3 text-center text-[#525D6B]">
              Classification • Validation • Preparation
            </p>

          </motion.div>

          <div className="mx-auto h-16 w-[2px] bg-[#2A527A]" />

          {/* Agents */}

          <div className="grid gap-8 md:grid-cols-3">

            {agents.map((agent) => {

              const Icon = agent.icon;

              return (

                <motion.div
                  key={agent.title}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="rounded-3xl border border-[#EAE4D8] bg-[#FFFFFF] p-8 backdrop-blur-xl"
                >

                  <Icon className={`h-10 w-10 ${agent.color}`} />

                  <h3 className="mt-6 text-2xl font-bold">
                    {agent.title}
                  </h3>

                </motion.div>

              );

            })}

          </div>

          <div className="mx-auto h-16 w-[2px] bg-[#2A527A]" />

          {/* Final Agent */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mx-auto flex w-[360px] flex-col items-center rounded-3xl border border-[#2A527A]/30 bg-[#EBF2F7] p-10 backdrop-blur-xl"
          >

            <SearchCheck className="h-12 w-12 text-[#2A527A]" />

            <h3 className="mt-6 text-3xl font-bold">
              Investigative Agent
            </h3>

            <p className="mt-4 text-center text-[#384554]">
              Combines outputs from every specialised AI agent.
            </p>

          </motion.div>

          <div className="mx-auto h-16 w-[2px] bg-[#2A527A]" />

          {/* Output */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mx-auto flex w-[400px] flex-col items-center rounded-3xl border border-[#EAE4D8] bg-[#FFFFFF] p-10 backdrop-blur-xl"
          >

            <FileText className="h-12 w-12 text-green-400" />

            <h3 className="mt-6 text-3xl font-bold">
              Investigation Report
            </h3>

            <p className="mt-5 text-center text-[#525D6B]">

              Case Summary

              <br />

              Evidence Correlation

              <br />

              Legal References

              <br />

              Suggested Next Steps

            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}