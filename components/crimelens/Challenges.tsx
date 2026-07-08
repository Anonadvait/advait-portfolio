"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

const challenges = [
  {
    challenge: "Information Overload",
    solution:
      "CrimeLens organises evidence into structured workflows before AI analysis begins.",
  },
  {
    challenge: "Evidence Correlation",
    solution:
      "Multiple AI agents correlate evidence across different sources instead of analysing documents independently.",
  },
  {
    challenge: "Legal + Technical Analysis",
    solution:
      "Separate Legal and Cyber Agents specialise in different investigative domains.",
  },
  {
    challenge: "Explainability",
    solution:
      "Every recommendation is generated through specialised agents rather than a single opaque AI response.",
  },
  {
    challenge: "Scalability",
    solution:
      "The modular architecture allows future AI capabilities to be integrated without redesigning the system.",
  },
  {
    challenge: "Human Oversight",
    solution:
      "Investigators remain responsible for every operational decision while AI acts as an assistant.",
  },
];

export default function Challenges() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-40">

      <motion.div
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
      >

        <p className="uppercase tracking-[0.35em] text-blue-400">
          Challenges
        </p>

        <h2 className="mt-6 text-6xl font-black">
          Challenges & Solutions
        </h2>

        <p className="mt-10 max-w-5xl text-xl leading-10 text-gray-400">
          CrimeLens AI was designed around real investigative challenges
          identified during research rather than hypothetical problems.
        </p>

      </motion.div>

      <div className="mt-24 space-y-8">

        {challenges.map((item,index)=>(

          <motion.div
            key={item.challenge}
            initial={{opacity:0,y:40}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{delay:index*0.08}}
            className="grid gap-6 lg:grid-cols-2"
          >

            <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-10">

              <div className="flex items-center gap-4">

                <AlertTriangle className="text-red-400"/>

                <h3 className="text-2xl font-bold">
                  {item.challenge}
                </h3>

              </div>

            </div>

            <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-10">

              <div className="flex items-center gap-4">

                <CheckCircle2 className="text-green-400"/>

                <h3 className="text-xl font-semibold">
                  {item.solution}
                </h3>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}