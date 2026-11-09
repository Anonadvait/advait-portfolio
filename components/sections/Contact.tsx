"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, useReducedMotion } from "motion/react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const copyEmail = () => {
    navigator.clipboard.writeText("awasthiadvait27@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-32">
      <ScrollReveal>
        <div className="rounded-3xl border border-[#E8E2D8] bg-[#FFFFFF] p-8 md:p-14 shadow-[0_8px_30px_rgba(26,29,32,0.02)]">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2A527A]">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#191B1F] sm:text-4xl md:text-5xl">
            Initiate a conversation.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#525D6B]">
            Whether discussing research opportunities in AI and cybercrime investigation,
            inquiring about technical architecture, or exploring software collaborations,
            I welcome thoughtful correspondence.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {/* Email */}
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              className="flex flex-col justify-between rounded-2xl border border-[#ECE6DC] bg-[#FAF8F5] p-6 transition-all duration-200 hover:border-[#2A527A]/40 hover:shadow-sm"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#828E9E]">
                  Direct Email
                </p>
                <a
                  href="mailto:awasthiadvait27@gmail.com"
                  className="mt-3 block text-sm font-medium text-[#191B1F] hover:text-[#2A527A] transition break-all"
                >
                  awasthiadvait27@gmail.com
                </a>
              </div>

              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-[#EAE3D6]">
                <a
                  href="mailto:awasthiadvait27@gmail.com"
                  className="text-xs font-semibold text-[#2A527A] hover:underline"
                >
                  Send Message →
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="text-xs text-[#828E9E] hover:text-[#191B1F] transition cursor-pointer"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </motion.div>

            {/* GitHub */}
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              className="flex flex-col justify-between rounded-2xl border border-[#ECE6DC] bg-[#FAF8F5] p-6 transition-all duration-200 hover:border-[#2A527A]/40 hover:shadow-sm"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#828E9E]">
                  Source Code
                </p>
                <p className="mt-3 text-sm font-medium text-[#191B1F]">
                  GitHub Repositories
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE3D6]">
                <a
                  href="https://github.com/Anonadvait"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#2A527A] hover:underline"
                >
                  Visit Profile ↗
                </a>
              </div>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              className="flex flex-col justify-between rounded-2xl border border-[#ECE6DC] bg-[#FAF8F5] p-6 transition-all duration-200 hover:border-[#2A527A]/40 hover:shadow-sm"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#828E9E]">
                  Professional
                </p>
                <p className="mt-3 text-sm font-medium text-[#191B1F]">
                  LinkedIn Network
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE3D6]">
                <a
                  href="https://www.linkedin.com/in/advait-awasthi-444849381/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#2A527A] hover:underline"
                >
                  Connect ↗
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
