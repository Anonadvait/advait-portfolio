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
        
        
        
        
      >

        <p className="uppercase tracking-[0.35em] text-[#2A527A]">
          The Problem
        </p>

        <h2 className="mt-6 text-6xl font-black leading-tight">
          Why Traditional
          <br />
          Investigations Need AI
        </h2>

        <p className="mt-10 max-w-5xl text-xl leading-10 text-[#525D6B]">

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
            
            
            
            
            whileHover={{
              y: -8,
            }}
            className="group rounded-3xl border border-[#EAE4D8] bg-[#FFFFFF] p-10 backdrop-blur-xl"
          >

            <span className="text-6xl font-black text-[#2A527A]/25">
              {problem.number}
            </span>

            <h3 className="mt-6 text-3xl font-bold">
              {problem.title}
            </h3>

            <p className="mt-8 leading-9 text-[#525D6B]">
              {problem.description}
            </p>

          </motion.div>

        ))}

      </div>

      <motion.div
        
        
        
        transition={{ delay: .2 }}
        className="mt-32 rounded-[40px] border border-[#D1E0EC] bg-gradient-to-r from-[#FAF8F5] via-[#FFFFFF] to-[#FAF8F5] p-14 text-center"
      >

        <h3 className="text-4xl font-bold">
          CrimeLens AI was created to reduce investigation effort —
          <span className="text-[#2A527A]"> not replace investigators.</span>
        </h3>

      </motion.div>

    </section>
  );
}