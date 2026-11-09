"use client";

import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  Lightbulb,
  Boxes,
  Code2,
  Presentation,
} from "lucide-react";

const timeline = [
  {
    icon: Search,
    phase: "Week 1",
    title: "Research & Problem Identification",
    description:
      "Studied cybercrime investigation workflows, analysed NCRB reports, explored Smart Policing initiatives, and identified operational challenges that could benefit from AI-assisted investigation.",
  },
  {
    icon: BookOpen,
    phase: "Week 2",
    title: "Research Analysis",
    description:
      "Reviewed existing investigative platforms, identified gaps in current workflows, and documented requirements for an AI-assisted investigative intelligence system.",
  },
  {
    icon: Lightbulb,
    phase: "Week 3",
    title: "Architecture Design",
    description:
      "Designed the CrimeLens AI architecture including modular AI agents, evidence pipeline, investigation workflow, and overall system structure.",
  },
  {
    icon: Boxes,
    phase: "Week 4",
    title: "Planning & Validation",
    description:
      "Prepared implementation plans, refined AI workflows, validated system design, and organised development milestones for the research prototype.",
  },
  {
    icon: Code2,
    phase: "Development",
    title: "AI-Assisted Development",
    description:
      "Implemented the research prototype using AI-assisted development while continuously reviewing architecture, validating generated code, and refining the overall system.",
  },
  {
    icon: Presentation,
    phase: "Completion",
    title: "Presentation & Documentation",
    description:
      "Prepared technical reports, documented research findings, and presented the project along with architectural decisions and future development opportunities.",
  },
];

export default function Timeline() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-40">

      <motion.div
        
        
        
      >

        <p className="uppercase tracking-[0.35em] text-[#2A527A]">
          Development Journey
        </p>

        <h2 className="mt-6 text-6xl font-black">
          Project Timeline
        </h2>

        <p className="mt-10 max-w-5xl text-xl leading-10 text-[#525D6B]">

          CrimeLens AI evolved from research into a working prototype
          through multiple stages of investigation, planning,
          architecture design, AI-assisted development, and presentation.

        </p>

      </motion.div>

      <div className="relative mt-28">

        {/* Timeline Line */}

        <div className="absolute left-7 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 via-blue-400/40 to-transparent" />

        <div className="space-y-12">

          {timeline.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                
                
                
                transition={{
                  delay: index * 0.08,
                }}
                className="relative flex gap-8"
              >

                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#2A527A]/30 bg-[#0d1528]">

                  <Icon
                    size={26}
                    className="text-[#2A527A]"
                  />

                </div>

                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  className="flex-1 rounded-[30px] border border-[#EAE4D8] bg-[#FFFFFF] p-10 backdrop-blur-xl"
                >

                  <span className="rounded-full bg-[#EBF2F7] px-4 py-2 text-sm uppercase tracking-[0.25em] text-[#2A527A]">

                    {item.phase}

                  </span>

                  <h3 className="mt-6 text-3xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-lg leading-9 text-[#525D6B]">
                    {item.description}
                  </p>

                </motion.div>

              </motion.div>

            );

          })}

        </div>

      </div>

      <motion.div
        
        
        
        className="mt-28 rounded-[40px] border border-[#D1E0EC] bg-gradient-to-r from-[#FAF8F5] via-[#FFFFFF] to-[#FAF8F5] p-16"
      >

        <h3 className="text-center text-4xl font-bold">
          From Research to Prototype
        </h3>

        <p className="mx-auto mt-8 max-w-5xl text-center text-lg leading-9 text-[#525D6B]">

          CrimeLens AI was developed through an iterative research-driven
          approach where investigation challenges were studied first,
          followed by architectural planning, AI workflow design,
          implementation, validation, documentation, and presentation.

        </p>

      </motion.div>

    </section>
  );
}