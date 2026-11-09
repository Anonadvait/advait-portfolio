"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Motion variants with full accessibility fallback
  const heroEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] md:min-h-[calc(100vh-4.5rem)] items-center justify-center px-6 pt-28 pb-16 sm:px-8 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left Column: Editorial Introduction */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {/* Phase 2: Name Reveal with Masked Upward Slide */}
            <div className="overflow-hidden py-1">
              <motion.h1
                initial={shouldReduceMotion ? false : { y: "115%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.85,
                  delay: 0.15,
                  ease: heroEase,
                }}
                className="text-[clamp(2.75rem,6.5vw,5.5rem)] font-medium tracking-[-0.04em] text-[#191B1F] leading-[0.96] text-balance select-none"
              >
                Advait Awasthi
              </motion.h1>
            </div>

            {/* Phase 3: Subtitle Reveal */}
            <div className="overflow-hidden">
              <motion.p
                initial={shouldReduceMotion ? false : { y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.45,
                  ease: heroEase,
                }}
                className="mt-4 text-base sm:text-lg font-medium tracking-wide text-[#5A6878]"
              >
                Building. Exploring. Securing.
              </motion.p>
            </div>

            {/* Phase 3: Introduction Paragraph */}
            <motion.p
              initial={shouldReduceMotion ? false : { y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.75,
                delay: 0.65,
                ease: heroEase,
              }}
              className="mt-6 max-w-xl text-[clamp(1.05rem,1.8vw,1.25rem)] font-normal leading-relaxed text-[#525D6B] text-pretty"
            >
              Computer Science student exploring cybersecurity, intelligent
              systems, and technology that solves real problems.
            </motion.p>

            {/* Phase 5: Action Buttons with Staggered Entrance & Micro-Interactions */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.85, ease: heroEase }}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="#projects"
                  className="inline-flex h-11 sm:h-12 items-center justify-center rounded-full bg-[#191B1F] px-6 sm:px-7 text-xs sm:text-sm font-medium text-[#FAF8F5] transition-all duration-200 hover:bg-[#2C323B] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#191B1F] shadow-[0_2px_8px_rgba(25,27,31,0.08)]"
                >
                  Selected Projects
                </Link>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.95, ease: heroEase }}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/achievements"
                  className="inline-flex h-11 sm:h-12 items-center justify-center rounded-full border border-[#D8D0C3] bg-[#FFFFFF]/90 px-6 sm:px-7 text-xs sm:text-sm font-medium text-[#191B1F] transition-all duration-200 hover:border-[#2A527A] hover:bg-[#FFFFFF] hover:text-[#2A527A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A527A] shadow-[0_1px_3px_rgba(25,27,31,0.02)]"
                >
                  Achievements
                </Link>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.05, ease: heroEase }}
                whileHover={shouldReduceMotion ? undefined : { y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="/Advait_Awasthi_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 sm:h-12 items-center justify-center px-3 sm:px-5 text-xs sm:text-sm font-medium text-[#525D6B] transition-colors duration-200 hover:text-[#191B1F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#191B1F]"
                >
                  View CV
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Personal Portrait Reveal (Phase 4) & Parallax Glow (Phase 1) */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
              {/* Phase 1: Ambient Background Breath */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0.3, scale: 0.92 }}
                animate={{ opacity: 0.75, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#F0D0B4]/60 via-transparent to-[#C5DDF4]/70 blur-2xl"
                aria-hidden="true"
              />

              {/* Phase 4: Refined Editorial Frame & Smooth Mask Reveal */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.95,
                  delay: 0.4,
                  ease: heroEase,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.015,
                        boxShadow: "0 25px 60px -12px rgba(25, 27, 31, 0.12)",
                        transition: { duration: 0.35, ease: "easeOut" },
                      }
                }
                className="relative rounded-[2rem] border border-[#E8E2D8]/80 bg-white/40 p-2.5 sm:p-3 shadow-[0_20px_50px_-15px_rgba(25,27,31,0.07)] backdrop-blur-sm transition-shadow duration-300"
              >
                {/* Image Mask Clip-Path Reveal: Bottom to Top */}
                <motion.div
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          clipPath: "inset(100% 0% 0% 0% round 1.5rem)",
                          scale: 1.04,
                        }
                  }
                  animate={{
                    clipPath: "inset(0% 0% 0% 0% round 1.5rem)",
                    scale: 1.0,
                  }}
                  transition={{
                    duration: 1.15,
                    delay: 0.55,
                    ease: heroEase,
                  }}
                  className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-[#F5F4F0]"
                >
                  <Image
                    src="/images/advait-portrait-headshot.png"
                    alt="Advait Awasthi — Speaking on Intelligent Systems & Cybersecurity"
                    width={800}
                    height={1000}
                    priority
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
