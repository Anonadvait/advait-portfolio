"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
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
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x);
  const mouseY = useSpring(y);

  const projectLink = `/projects/${title
    .toLowerCase()
    .replace(" ai", "")
    .replace(/\s+/g, "")}`;

  return (
    <Link href={projectLink} className="block">
      <motion.div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - rect.left);
          y.set(e.clientY - rect.top);
        }}
        whileHover={{
          y: -12,
          rotateX: 4,
          rotateY: -4,
          scale: 1.015,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 20,
        }}
        className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
      >
        <motion.div
          style={{
            left: mouseX,
            top: mouseY,
          }}
          className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[90px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div className="relative z-10">

          <div className="flex items-center justify-between">

            <h3 className="text-3xl font-bold">
              {title}
            </h3>

            <ArrowUpRight className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

          </div>

          <p className="mt-6 leading-8 text-gray-400">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm transition group-hover:border-blue-400"
              >
                {tech}
              </span>
            ))}

          </div>

          <p className="mt-8 font-medium text-blue-400">
            {status}
          </p>

        </div>

      </motion.div>
    </Link>
  );
}