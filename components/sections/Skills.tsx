"use client";

import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Shield,
  Globe,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      "Python",
      "Java",
      "C++",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    skills: [
      "LLMs",
      "Prompt Engineering",
      "OpenAI",
      "NVIDIA NIM",
      "Whisper",
      "AI Agents",
    ],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: [
      "OSINT",
      "Phishing Detection",
      "Threat Analysis",
      "Linux",
      "Networking",
      "Digital Investigation",
    ],
  },
  {
    title: "Web & Tools",
    icon: Globe,
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Git",
      "GitHub",
      "Docker",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-8 py-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <p className="uppercase tracking-[0.35em] text-blue-400">
          Technical Skills
        </p>

        <h2 className="mt-6 text-6xl font-black">
          Technologies I Work With
        </h2>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-gray-400">
          A growing toolkit focused on Artificial Intelligence,
          Cybersecurity and Full Stack Software Development.
        </p>

      </motion.div>

      <div className="mt-24 grid gap-8 md:grid-cols-2">

        {skillGroups.map((group) => {

          const Icon = group.icon;

          return (

            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="rounded-[34px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
            >

              <div className="flex items-center gap-5">

                <div className="rounded-2xl bg-blue-500/10 p-4">

                  <Icon
                    size={30}
                    className="text-blue-400"
                  />

                </div>

                <h3 className="text-3xl font-bold">
                  {group.title}
                </h3>

              </div>

              <div className="mt-10 flex flex-wrap gap-4">

                {group.skills.map((skill) => (

                  <motion.div
                    key={skill}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-sm"
                  >
                    {skill}
                  </motion.div>

                ))}

              </div>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}