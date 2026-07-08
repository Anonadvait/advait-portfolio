"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  stack: string[];
  status: string;
}

export default function ProjectCard({
  title,
  description,
  stack,
  status,
}: Props) {
  const projectLink =
    title === "Robin AI"
      ? "/projects/robin"
      : title === "CrimeLens AI"
      ? "/projects/crimelens"
      : "/projects/threatsight";

  return (
    <Link href={projectLink} className="block perspective-[1200px]">
      <motion.div
        whileHover={{
          y: -12,
          rotateX: 6,
          rotateY: -6,
          scale: 1.02,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        {/* Glow */}
        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

        {/* Border Animation */}
        <div className="absolute inset-0 rounded-3xl border border-transparent transition duration-500 group-hover:border-blue-500/40" />

        <div className="relative z-10 flex h-full flex-col">

          {/* Header */}

          <div className="flex items-center justify-between">

            <h3 className="text-3xl font-bold tracking-tight">
              {title}
            </h3>

            <ArrowUpRight
              className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-400"
            />

          </div>

          {/* Description */}

          <p className="mt-6 leading-8 text-gray-400">
            {description}
          </p>

          {/* Tech Stack */}

          <div className="mt-8 flex flex-wrap gap-3">

            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
              >
                {tech}
              </span>
            ))}

          </div>

          <div className="flex-grow" />

          {/* Footer */}

          <div className="mt-10 flex items-center justify-between">

            <p className="text-sm font-medium text-blue-400">
              {status}
            </p>

            <p className="text-sm text-gray-500 transition group-hover:text-white">
              View Project →
            </p>

          </div>

        </div>
      </motion.div>
    </Link>
  );
}