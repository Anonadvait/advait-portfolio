"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

interface Props {
  title: string;
  description: string;
  stack: string[];
  status: string;
  isFeatured?: boolean;
  link?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  stack,
  status,
  isFeatured = false,
  link,
  githubUrl,
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  const defaultLink = `/projects/${title
    .toLowerCase()
    .replace(" ai", "")
    .replace(/\s+/g, "")}`;

  const destination = link || defaultLink;

  return (
    <motion.div
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -5,
              transition: { duration: 0.25, ease: "easeOut" },
            }
      }
      whileTap={shouldReduceMotion ? undefined : { scale: 0.995 }}
      className={`group relative flex flex-col justify-between rounded-2xl border border-[#EAE5DC] bg-[#FFFFFF] p-8 md:p-10 transition-all duration-300 hover:border-[#C5DDF4] hover:shadow-[0_16px_36px_-6px_rgba(26,29,32,0.07)] ${
        isFeatured ? "md:p-12 border-[#DDD6C8] bg-gradient-to-b from-[#FFFFFF] to-[#FAF8F5]" : ""
      }`}
    >
      <div>
        {/* Status indicator and link arrow */}
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A527A]">
            {status}
          </span>
          <div className="flex items-center gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs text-[#828E9E] hover:text-[#191B1F] transition"
                aria-label={`View ${title} source on GitHub`}
              >
                GitHub ↗
              </a>
            )}
            <Link
              href={destination}
              aria-label={`View details for ${title}`}
              className="text-sm font-medium text-[#828E9E] group-hover:text-[#2A527A] transition"
            >
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                Details →
              </span>
            </Link>
          </div>
        </div>

        {/* Project Title */}
        <h3
          className={`mt-4 font-medium tracking-tight text-[#191B1F] ${
            isFeatured ? "text-2xl sm:text-3xl md:text-4xl" : "text-2xl"
          }`}
        >
          <Link href={destination} className="hover:text-[#2A527A] transition">
            {title}
          </Link>
        </h3>

        {/* Project Description */}
        <p className="mt-4 text-base leading-relaxed text-[#525D6B]">
          {description}
        </p>
      </div>

      {/* Tech Stack & Footer Action */}
      <div className="mt-8 pt-6 border-t border-[#F2ECE3] flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#E8E2D6] bg-[#F7F5F0] px-3 py-1 text-xs font-medium text-[#4A5565] transition-colors group-hover:border-[#D8D2C5]"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={destination}
          className="text-xs font-semibold uppercase tracking-wider text-[#2A527A] hover:underline"
        >
          Read Project Study
        </Link>
      </div>
    </motion.div>
  );
}
