"use client";

import { motion } from "framer-motion";

const problems = [
  {
    number: "01",
    title: "Massive Volumes of Evidence",
    description:
      "Cybercrime investigations often involve thousands of files including screenshots, emails, chat logs, PDFs, videos, system logs, and digital forensic evidence. Organizing this information manually consumes significant investigation time.",
  },
  {
    number: "02",
    title: "Information Overload",
    description:
      "Investigators must correlate information from multiple sources while identifying meaningful relationships between people, devices, timelines, financial transactions, and digital evidence.",
  },
  {
    number: "03",
    title: "Legal & Technical Complexity",
    description:
      "Cybercrime investigations require both technical expertise and legal understanding. Investigators frequently switch between cyber analysis, legal provisions, procedural documentation, and case management.",
  },
  {
    number: "04",
    title: "Time-Critical Investigations",
    description:
      "Every delay can reduce the chances of identifying suspects, preserving evidence, or preventing additional attacks. Investigators need intelligent assistance rather than additional manual workload.",
  },
];

export default function Problem() {
  return (
    <section className="relative mx-auto max-w-7xl px-8 py-40">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <p className="uppercase tracking-[0.35em] text-blue-400">
          The Problem
        </p>

        <h2 className="mt-6 text-6xl font-black leading-tight">
          Why Traditional
          <br />
          Investigations Need AI
        </h2>

        <p className="mt-10 max-w-5xl text-xl leading-10 text-gray-400">

          Before designing CrimeLens AI, extensive research was conducted
          into cybercrime investigations, NCRB reports, Smart Policing
          initiatives, and existing investigative workflows.

          <br /><br />

          The research highlighted several recurring challenges that slow
          down investigations and increase the workload on investigators.

        </p>

      </motion.div>

      <div className="mt-28 grid gap-8 lg:grid-cols-2">

        {problems.map((problem) => (

          <motion.div
            key={problem.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{
              y: -8,
            }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >

            <span className="text-6xl font-black text-blue-500/30">
              {problem.number}
            </span>

            <h3 className="mt-6 text-3xl font-bold">
              {problem.title}
            </h3>

            <p className="mt-8 leading-9 text-gray-400">
              {problem.description}
            </p>

          </motion.div>

        ))}

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: .2 }}
        className="mt-32 rounded-[40px] border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-white/5 to-blue-500/10 p-14 text-center"
      >

        <h3 className="text-4xl font-bold">
          CrimeLens AI was created to reduce investigation effort —
          <span className="text-blue-400"> not replace investigators.</span>
        </h3>

      </motion.div>

    </section>
  );
}