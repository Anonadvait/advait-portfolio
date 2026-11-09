"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-8 w-full">
        <div>
          <span className="inline-flex rounded-full border border-[#D1E0EC] bg-[#EBF2F7] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#2A527A]">
            Flagship Research Project
          </span>

          <h1 className="mt-6 text-5xl font-medium tracking-tight text-[#181E25] sm:text-7xl md:text-8xl lg:text-[6.5rem] leading-[1.0]">
            CrimeLens AI
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#4A5565] sm:text-xl">
            An AI-assisted investigative intelligence platform developed during my research internship at Rashtriya Raksha University. The project explores how collaborative AI agents can organize digital evidence, analyze cybercrime cases, correlate legal statutes, and assist law enforcement with structured investigative intelligence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div className="editorial-card p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#828E9E]">
              Organization
            </p>
            <h3 className="mt-2 text-base font-medium text-[#181E25]">
              Rashtriya Raksha University
            </h3>
          </div>

          <div className="editorial-card p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#828E9E]">
              Duration
            </p>
            <h3 className="mt-2 text-base font-medium text-[#181E25]">
              June 2026 — July 2026
            </h3>
          </div>

          <div className="editorial-card p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#828E9E]">
              Domain
            </p>
            <h3 className="mt-2 text-base font-medium text-[#181E25]">
              AI × Cybersecurity
            </h3>
          </div>

          <div className="editorial-card p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#828E9E]">
              Status
            </p>
            <h3 className="mt-2 text-base font-medium text-[#181E25]">
              Research Prototype
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
