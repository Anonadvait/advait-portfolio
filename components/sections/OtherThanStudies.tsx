"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, useReducedMotion } from "motion/react";

interface ActivityItem {
  tag: string;
  title: string;
  status?: string;
  description: string;
  focus: string[];
}

const activities: ActivityItem[] = [
  {
    tag: "Club Involvement",
    title: "IE(I) — Institutional Chapter",
    description:
      "A member of the IE(I) (Institution of Engineers India) club at my university, participating in community activities, technical forums, and peer initiatives beyond standard academics.",
    focus: ["Student Chapter", "Campus Activities", "Technical Forums"],
  },
  {
    tag: "Volunteer Support",
    title: "Event Volunteering",
    description:
      "Contributed as an active volunteer, helping manage and support club events. Assisted with on-ground coordination, logistics support, and session operations.",
    focus: ["Event Coordination", "Volunteer Support", "Logistics"],
  },
  {
    tag: "Creative Media",
    title: "Media Team",
    status: "Current",
    description:
      "Currently part of the media team, working on video editing and photo editing to produce clean visual media and session documentation for club communications.",
    focus: ["Video Editing", "Photo Editing", "Media Production"],
  },
];

export default function OtherThanStudies() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="other-than-studies"
      className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-32"
    >
      <ScrollReveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2A527A]">
          Other Than Studies
        </p>

        <p className="mt-3 text-base sm:text-lg font-normal italic text-[#5A6878]">
          Learning, contributing and creating beyond the classroom.
        </p>

        <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#191B1F] sm:text-4xl md:text-5xl md:leading-[1.15]">
          Extracurricular involvement, event volunteering, and creative contributions.
        </h2>
      </ScrollReveal>

      {/* Three Editorial Cards */}
      <div className="mt-14 grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-3 md:gap-6 lg:gap-8">
        {activities.map((item, idx) => (
          <ScrollReveal key={item.title} delay={idx * 0.12}>
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
              className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#E8E2D8] bg-white/75 p-7 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#C5DDF4] hover:bg-white/95 hover:shadow-[0_16px_36px_-6px_rgba(25,27,31,0.07)]"
            >
              <div>
                {/* Top Tag & Status */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2A527A]">
                    {item.tag}
                  </span>
                  {item.status && (
                    <span className="inline-flex items-center rounded-full bg-[#EBF3FB] px-2.5 py-0.5 text-[11px] font-medium text-[#2A527A] border border-[#D0E3F7]">
                      {item.status}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-medium tracking-tight text-[#191B1F] transition-colors group-hover:text-[#2A527A]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3.5 text-sm leading-relaxed text-[#525D6B]">
                  {item.description}
                </p>
              </div>

              {/* Focus Tags */}
              <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-[#F0ECE1]">
                {item.focus.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center rounded-full bg-[#F5F4F0] px-2.5 py-1 text-xs text-[#525D6B] transition-colors group-hover:border-[#D8D2C5]"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
