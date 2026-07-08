"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-8"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

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
          className="mt-10 text-7xl font-black leading-[0.9] tracking-[-0.05em] md:text-[9rem]"
        >
          Advait
          <br />
          Awasthi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 max-w-2xl text-xl leading-9 text-gray-400"
        >
          Exploring the intersection of Artificial Intelligence,
          Cybersecurity, Intelligent Systems, and software engineering
          through research-driven projects and real-world applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-14 flex flex-wrap gap-5"
        >
          <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]">
            Download CV
          </button>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-blue-500 hover:bg-white/10">
            View Projects
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}