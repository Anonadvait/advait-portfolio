"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const screenshots = [
  {
    image: "/crimelens/dashboard.png",
    title: "Dashboard",
  },
  {
    image: "/crimelens/cases.png",
    title: "Case Management",
  },
  {
    image: "/crimelens/evidence.png",
    title: "Evidence Upload",
  },
  {
    image: "/crimelens/agents.png",
    title: "AI Agents",
  },
  {
    image: "/crimelens/report.png",
    title: "Investigation Report",
  },
  {
    image: "/crimelens/architecture.png",
    title: "Architecture",
  },
];

export default function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-40">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <p className="uppercase tracking-[0.35em] text-blue-400">
          Project Gallery
        </p>

        <h2 className="mt-6 text-6xl font-black">
          Screenshots
        </h2>

        <p className="mt-10 max-w-5xl text-xl leading-10 text-gray-400">

          The following screenshots showcase different parts of the
          CrimeLens AI research prototype. Replace these placeholder
          images with actual application screenshots as development
          progresses.

        </p>

      </motion.div>

      <div className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        {screenshots.map((shot, index) => (

          <motion.div
            key={shot.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl"
          >

            <div className="relative aspect-video overflow-hidden">

              <Image
                src={shot.image}
                alt={shot.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

            </div>

            <div className="p-8">

              <h3 className="text-2xl font-bold">
                {shot.title}
              </h3>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}