"use client";

import { motion } from "framer-motion";

const stats = [
  {
    title: "Objective",
    value: "AI-Assisted Investigation",
    desc: "Assist investigators through intelligent evidence analysis and AI-driven workflows.",
  },
  {
    title: "Research Focus",
    value: "Cybercrime Intelligence",
    desc: "Research centered around cybercrime trends, digital evidence, and investigative intelligence.",
  },
  {
    title: "Primary Users",
    value: "Law Enforcement",
    desc: "Designed as a research prototype for investigators and cybercrime units.",
  },
  {
    title: "Project Type",
    value: "Research Prototype",
    desc: "Built to explore practical AI applications within modern investigations.",
  },
];

export default function Summary() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
      >

        <p className="uppercase tracking-[0.35em] text-blue-400">
          Executive Summary
        </p>

        <h2 className="mt-6 text-6xl font-bold tracking-tight">
          Understanding CrimeLens AI
        </h2>

        <p className="mt-10 max-w-5xl text-xl leading-10 text-gray-400">

          CrimeLens AI is an AI-assisted investigative intelligence
          platform designed to reduce the complexity of cybercrime
          investigations by combining multiple intelligent systems into
          a single workflow.

          <br /><br />

          Instead of replacing investigators, CrimeLens serves as an
          intelligent research assistant capable of organizing digital
          evidence, identifying investigative leads, correlating
          information across cases, assisting with legal references,
          and generating structured investigation summaries.

          <br /><br />

          The project was developed during my research internship at
          Rashtriya Raksha University after studying cybercrime trends,
          NCRB reports, and Smart Policing initiatives.

        </p>

      </motion.div>

      <div className="mt-24 grid gap-8 lg:grid-cols-2">

        {stats.map((item) => (

          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >

            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              {item.title}
            </p>

            <h3 className="mt-5 text-3xl font-bold">
              {item.value}
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              {item.desc}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}