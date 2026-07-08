"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-8 py-5 backdrop-blur-2xl">

        <a
          href="#home"
          className="text-xl font-bold tracking-tight transition hover:text-blue-400"
        >
          Advait Awasthi
        </a>

        <div className="flex items-center gap-8 text-sm">

          <a href="#about" className="transition hover:text-blue-400">
            About
          </a>

          <a href="#projects" className="transition hover:text-blue-400">
            Projects
          </a>

          <a href="#research" className="transition hover:text-blue-400">
            Research
          </a>

          <a href="#contact" className="transition hover:text-blue-400">
            Contact
          </a>

        </div>

      </div>
    </motion.header>
  );
}