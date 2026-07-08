"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-8"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/30 blur-[220px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_75%)]" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex rounded-full border border-blue-500/20 bg-white/5 px-5 py-2 backdrop-blur-xl"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-blue-400">
            AI • Cybersecurity • Research
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="mt-8 text-7xl font-black leading-[0.9] tracking-[-0.06em] md:text-[10rem]"
        >
          Advait
          <br />
          Awasthi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 max-w-3xl text-2xl leading-10 text-gray-300"
        >
          Exploring the intersection of Artificial Intelligence,
          Cybersecurity, Intelligent Systems, and software engineering
          through research-driven projects and real-world applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {[
            ["3+", "Flagship Projects"],
            ["AI", "Research Focus"],
            ["Cyber", "Security"],
            ["2026", "Research Internship"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <h3 className="text-3xl font-bold text-blue-400">
                {number}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap gap-5"
        >
          <a
            href="/Advait_Awasthi_CV.pdf"
            download
            className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]"
          >
            Download CV
          </a>

          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-8 py-4 font-semibold transition-all duration-300 hover:border-blue-500 hover:bg-white/5"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}