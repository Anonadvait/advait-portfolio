"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Shield,
  Cpu,
  FlaskConical,
  GraduationCap,
  MapPin,
} from "lucide-react";

const interests = [
  "Artificial Intelligence",
  "Cybersecurity",
  "Intelligent Systems",
  "Research Engineering",
  "Human Computer Interaction",
  "Automation",
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-8 py-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <p className="uppercase tracking-[0.35em] text-blue-400">
          About
        </p>

        <h2 className="mt-6 max-w-5xl text-6xl font-black leading-tight">
          Building intelligent software systems that combine
          <span className="text-blue-400"> Artificial Intelligence</span>,
          <span className="text-blue-400"> Cybersecurity</span> and
          modern software engineering.
        </h2>

      </motion.div>

      <div className="mt-24 grid gap-8 lg:grid-cols-[1.5fr_1fr]">

        <motion.div
          whileHover={{ y: -6 }}
          className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >

          <p className="text-lg leading-9 text-gray-400">

            I am a B.Tech Computer Science (Cyber Security) student at
            SRM Institute of Science and Technology with a strong interest
            in Artificial Intelligence, intelligent software systems and
            applied cybersecurity research.

            <br /><br />

            I enjoy transforming research ideas into working software.
            My current work focuses on AI-assisted cybercrime
            investigation, desktop AI assistants, and cybersecurity
            applications that solve practical real-world problems.

            <br /><br />

            My long-term goal is to contribute to research in AI,
            cybersecurity and intelligent systems while eventually
            building both software and hardware solutions.

          </p>

        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >

          <h3 className="text-2xl font-bold">
            Currently
          </h3>

          <div className="mt-8 space-y-6">

            <div className="flex items-center gap-4">
              <GraduationCap className="text-blue-400" />
              <span>B.Tech • SRM IST</span>
            </div>

            <div className="flex items-center gap-4">
              <Shield className="text-blue-400" />
              <span>Cyber Security</span>
            </div>

            <div className="flex items-center gap-4">
              <FlaskConical className="text-blue-400" />
              <span>Research Projects</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400" />
              <span>Ahmedabad, India</span>
            </div>

          </div>

        </motion.div>

      </div>

      <div className="mt-20">

        <h3 className="text-3xl font-bold">
          Research Interests
        </h3>

        <div className="mt-10 flex flex-wrap gap-4">

          {interests.map((interest) => (

            <motion.div
              key={interest}
              whileHover={{
                y: -4,
                scale: 1.04,
              }}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-6 py-3"
            >
              {interest}
            </motion.div>

          ))}

        </div>

      </div>

      <div className="mt-24 grid gap-8 md:grid-cols-3">

        <motion.div
          whileHover={{ y: -6 }}
          className="rounded-[30px] border border-white/10 bg-white/5 p-8"
        >

          <BrainCircuit
            size={36}
            className="text-blue-400"
          />

          <h4 className="mt-6 text-2xl font-bold">
            Artificial Intelligence
          </h4>

          <p className="mt-4 leading-8 text-gray-400">
            Building AI-powered software systems focused on solving
            meaningful real-world problems.
          </p>

        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="rounded-[30px] border border-white/10 bg-white/5 p-8"
        >

          <Shield
            size={36}
            className="text-blue-400"
          />

          <h4 className="mt-6 text-2xl font-bold">
            Cybersecurity
          </h4>

          <p className="mt-4 leading-8 text-gray-400">
            Interested in cybercrime investigation, phishing detection,
            digital forensics and secure software systems.
          </p>

        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="rounded-[30px] border border-white/10 bg-white/5 p-8"
        >

          <Cpu
            size={36}
            className="text-blue-400"
          />

          <h4 className="mt-6 text-2xl font-bold">
            Intelligent Systems
          </h4>

          <p className="mt-4 leading-8 text-gray-400">
            Passionate about designing scalable intelligent systems that
            combine software engineering, AI and future hardware research.
          </p>

        </motion.div>

      </div>

    </section>
  );
}