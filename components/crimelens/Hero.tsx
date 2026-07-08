"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[220px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#050505)]" />

      <div className="relative z-20 mx-auto max-w-7xl px-8">

        <Link
          href="/"
          className="text-gray-400 transition hover:text-white"
        >
          ← Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="mt-16 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm uppercase tracking-[0.3em] text-blue-400">

            Flagship Research Project

          </span>

          <h1 className="mt-10 text-7xl font-black leading-[0.9] tracking-[-0.05em] md:text-[10rem]">

            CrimeLens
            <br />
            AI

          </h1>

          <p className="mt-12 max-w-4xl text-2xl leading-10 text-gray-400">

            CrimeLens AI is an AI-assisted investigative intelligence
            platform developed during my research internship at
            Rashtriya Raksha University.

            <br /><br />

            The project explores how Artificial Intelligence can assist
            investigators by organizing digital evidence, analyzing
            cybercrime cases, providing legal and cyber intelligence,
            and generating investigation-ready insights through
            collaborative AI agents.

          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 grid gap-6 md:grid-cols-4"
        >

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <p className="text-sm uppercase tracking-widest text-blue-400">
              Organization
            </p>

            <h3 className="mt-5 text-xl font-semibold">
              Rashtriya Raksha University
            </h3>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <p className="text-sm uppercase tracking-widest text-blue-400">
              Duration
            </p>

            <h3 className="mt-5 text-xl font-semibold">
              Jun 2026 — Jul 2026
            </h3>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <p className="text-sm uppercase tracking-widest text-blue-400">
              Domain
            </p>

            <h3 className="mt-5 text-xl font-semibold">
              AI × Cybersecurity
            </h3>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <p className="text-sm uppercase tracking-widest text-blue-400">
              Status
            </p>

            <h3 className="mt-5 text-xl font-semibold">
              Research Prototype
            </h3>

          </div>

        </motion.div>

      </div>

    </section>
  );
}