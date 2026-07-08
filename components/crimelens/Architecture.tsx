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
    color: "text-blue-400",
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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <p className="uppercase tracking-[0.35em] text-blue-400">
          Architecture
        </p>

        <h2 className="mt-6 text-6xl font-black">
          System Architecture
        </h2>

        <p className="mt-10 max-w-5xl text-xl leading-10 text-gray-400">
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
            className="mx-auto flex w-[320px] flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <Upload className="h-10 w-10 text-blue-400" />

            <h3 className="mt-5 text-2xl font-bold">
              Evidence Upload
            </h3>

            <p className="mt-3 text-center text-gray-400">
              FIRs • PDFs • Images • Videos • URLs • Logs
            </p>

          </motion.div>

          <div className="mx-auto h-16 w-[2px] bg-blue-500" />

          {/* Processing */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mx-auto flex w-[340px] flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <Database className="h-10 w-10 text-blue-400" />

            <h3 className="mt-5 text-2xl font-bold">
              Evidence Processing
            </h3>

            <p className="mt-3 text-center text-gray-400">
              Classification • Validation • Preparation
            </p>

          </motion.div>

          <div className="mx-auto h-16 w-[2px] bg-blue-500" />

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
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >

                  <Icon className={`h-10 w-10 ${agent.color}`} />

                  <h3 className="mt-6 text-2xl font-bold">
                    {agent.title}
                  </h3>

                </motion.div>

              );

            })}

          </div>

          <div className="mx-auto h-16 w-[2px] bg-blue-500" />

          {/* Final Agent */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mx-auto flex w-[360px] flex-col items-center rounded-3xl border border-blue-500/30 bg-blue-500/10 p-10 backdrop-blur-xl"
          >

            <SearchCheck className="h-12 w-12 text-blue-400" />

            <h3 className="mt-6 text-3xl font-bold">
              Investigative Agent
            </h3>

            <p className="mt-4 text-center text-gray-300">
              Combines outputs from every specialised AI agent.
            </p>

          </motion.div>

          <div className="mx-auto h-16 w-[2px] bg-blue-500" />

          {/* Output */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mx-auto flex w-[400px] flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >

            <FileText className="h-12 w-12 text-green-400" />

            <h3 className="mt-6 text-3xl font-bold">
              Investigation Report
            </h3>

            <p className="mt-5 text-center text-gray-400">

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