"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  Link,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-8 py-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-16 backdrop-blur-xl"
      >
        <p className="uppercase tracking-[0.35em] text-blue-400">
          Contact
        </p>

        <h2 className="mt-6 text-6xl font-black leading-tight">
          Let's build something
          <br />
          impactful together.
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400">
          Whether it's research, cybersecurity, Artificial Intelligence,
          or an interesting software project, I'm always excited to
          collaborate and learn.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <motion.a
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            href="mailto:awasthiadvait27@gmail.com"
            className="rounded-[30px] border border-white/10 bg-black/20 p-8 transition"
          >
            <Mail className="text-blue-400" size={34} />

            <h3 className="mt-6 text-2xl font-bold">
              Email
            </h3>

            <p className="mt-4 break-all text-gray-400">
              awasthiadvait27@gmail.com
            </p>

            <ArrowUpRight className="mt-8" />
          </motion.a>

          <motion.a
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            href="https://github.com/Anonadvait"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[30px] border border-white/10 bg-black/20 p-8 transition"
          >
            <GitBranch className="text-blue-400" size={34} />

            <h3 className="mt-6 text-2xl font-bold">
              GitHub
            </h3>

            <p className="mt-4 text-gray-400">
              github.com/Anonadvait
            </p>

            <ArrowUpRight className="mt-8" />
          </motion.a>

          <motion.a
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            href="https://www.linkedin.com/in/advait-awasthi-444849381/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[30px] border border-white/10 bg-black/20 p-8 transition"
          >
            <Link className="text-blue-400" size={34} />

            <h3 className="mt-6 text-2xl font-bold">
              LinkedIn
            </h3>

            <p className="mt-4 text-gray-400">
              Connect with me
            </p>

            <ArrowUpRight className="mt-8" />
          </motion.a>

        </div>
      </motion.div>
    </section>
  );
}