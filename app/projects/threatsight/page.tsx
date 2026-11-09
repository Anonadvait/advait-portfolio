"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ThreatSightPage() {
  const analysisLayers = [
    {
      title: "URL Heuristic Parsing",
      desc: "Extracts structural URL signals including sub-domain depth, suspicious path keywords, uncommon TLDs, and IP-formatted hosts.",
    },
    {
      title: "Brand Impersonation Matching",
      desc: "Uses RapidFuzz token matching to detect typo-squatted, homoglyph, and lookalike domains masquerading as established financial and tech brands.",
    },
    {
      title: "Explainable Risk Scoring",
      desc: "Calculates an itemized threat rating, articulating transparent reasons for every flagged indicator rather than producing an arbitrary black-box label.",
    },
    {
      title: "Stand-Alone Desktop Utility",
      desc: "Packaged as a lightweight workstation tool with CustomTkinter, allowing security analysts and users to vet suspect links without third-party API exposure.",
    },
  ];

  const technologies = [
    "Python",
    "CustomTkinter",
    "RapidFuzz",
    "Regular Expressions",
    "URL Heuristics",
    "Threat Intelligence",
  ];

  return (
    <div className="relative min-h-screen text-[#1A1D20]">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 pt-36 pb-24 md:px-8 md:pt-44 md:pb-32">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#525D6B] hover:text-[#2A527A] transition"
          >
            <span>← Back to Selected Projects</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E2DBD0] bg-[#F4EFE6] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#384554]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2A527A]" />
            <span>Completed Research • Cybersecurity</span>
          </div>

          <h1 className="mt-6 text-4xl font-medium tracking-tight text-[#181E25] sm:text-6xl md:text-7xl">
            ThreatSight
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#525D6B] sm:text-xl">
            A standalone phishing detection platform capable of inspecting URLs,
            detecting brand impersonation vectors, and delivering explainable risk scores.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/Anonadvait/ThreatSight"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#181E25] px-6 py-2.5 text-xs font-medium text-[#FAF7F2] transition hover:bg-[#2A3440] shadow-sm"
            >
              <span>View Source on GitHub</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* Project Meta Details */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-y border-[#EAE4D8] py-8 sm:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#828E9E]">Status</p>
            <p className="mt-1 text-sm font-medium text-[#181E25]">Completed Project</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-[#828E9E]">Domain</p>
            <p className="mt-1 text-sm font-medium text-[#181E25]">Cyber Threat Analysis</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-[#828E9E]">Methodology</p>
            <p className="mt-1 text-sm font-medium text-[#181E25]">Explainable Heuristics</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-[#828E9E]">Code Repository</p>
            <p className="mt-1 text-sm font-medium text-[#2A527A]">Open Source</p>
          </div>
        </div>

        {/* Overview Section */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2A527A]">
            Overview
          </p>
          <h2 className="mt-3 text-2xl font-medium text-[#181E25] sm:text-3xl">
            Addressing deceptive social engineering vectors.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-[#525D6B]">
            <p>
              Phishing remains the most prevalent initial access vector in modern cyber intrusions.
              While automated reputation lookups often fail against zero-day campaign domains,
              structural patterns in domain naming and URL layout can reveal malicious intent early.
            </p>
            <p>
              ThreatSight implements heuristic inspection algorithms that unpack obfuscated URLs,
              flag misleading brand prefixes, and score deceptive strings against canonical brand
              dictionaries using fuzzy string matching. Every flagged factor is presented with clear
              rationales, empowering users to understand why a given link warrants caution.
            </p>
          </div>
        </section>

        {/* Inspection Capabilities */}
        <section className="mt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2A527A]">
            Analytical Methodologies
          </p>
          <h2 className="mt-3 text-2xl font-medium text-[#181E25] sm:text-3xl">
            Multi-factor threat inspection.
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {analysisLayers.map((layer) => (
              <div
                key={layer.title}
                className="editorial-card p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-medium text-[#181E25]">
                    {layer.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-[#525D6B]">
                    {layer.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mt-24 border-t border-[#EAE4D8] pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2A527A]">
            Technologies & Tools
          </p>
          <h2 className="mt-3 text-2xl font-medium text-[#181E25]">
            Technical foundations.
          </h2>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {technologies.map((tech) => (
              <span key={tech} className="editorial-pill">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
