"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RobinPage() {
  const features = [
    { title: "Wake Word Detection", desc: "Low-latency voice activation using OpenWakeWord without continuous cloud streaming." },
    { title: "Local Execution", desc: "Designed for privacy-first operations, retaining conversational history and telemetry locally." },
    { title: "Voice Interaction", desc: "Integrated speech transcription via OpenAI Whisper models for accurate query input." },
    { title: "Conversation Memory", desc: "Structured local SQLite storage maintaining contextual session history." },
    { title: "Modular AI Agents", desc: "Decoupled task workers handling research synthesis, file lookups, and system queries." },
    { title: "Desktop Automation", desc: "Extensible Python hooks to trigger local workflows, scripts, and productivity tasks." },
  ];

  const techStack = [
    "Python",
    "PySide6",
    "OpenWakeWord",
    "Whisper",
    "NVIDIA NIM",
    "SQLite",
    "Modular Agents",
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
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D5E2EC] bg-[#EDF4F9] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2A527A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2A527A]" />
            <span>Active Development • Desktop Automation</span>
          </div>

          <h1 className="mt-6 text-4xl font-medium tracking-tight text-[#181E25] sm:text-6xl md:text-7xl">
            Robin AI Assistant
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#525D6B] sm:text-xl">
            A research-oriented desktop assistant built for privacy-conscious local execution,
            ambient voice interaction, and modular automation.
          </p>
        </div>

        {/* Project Meta Details */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-y border-[#EAE4D8] py-8 sm:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#828E9E]">Status</p>
            <p className="mt-1 text-sm font-medium text-[#181E25]">Active Development</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-[#828E9E]">Architecture</p>
            <p className="mt-1 text-sm font-medium text-[#181E25]">Local-First Desktop</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-[#828E9E]">Primary Language</p>
            <p className="mt-1 text-sm font-medium text-[#181E25]">Python 3.11+</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-[#828E9E]">Target Environment</p>
            <p className="mt-1 text-sm font-medium text-[#181E25]">Cross-Platform Desktop</p>
          </div>
        </div>

        {/* Overview Section */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2A527A]">
            Overview
          </p>
          <h2 className="mt-3 text-2xl font-medium text-[#181E25] sm:text-3xl">
            Why build a local desktop assistant?
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-[#525D6B]">
            <p>
              Contemporary AI voice assistants often require persistent internet telemetry,
              continuous audio streaming to cloud endpoints, and opaque processing loops.
              Robin explores an alternative approach: orchestrating specialized lightweight models
              directly on personal workstation hardware.
            </p>
            <p>
              The system separates audio detection, speech processing, and execution into isolated
              modular agents. By keeping conversational context within local storage and exposing
              explicit automation hooks, Robin provides users with transparent utility without
              surrendering data privacy.
            </p>
          </div>
        </section>

        {/* System Capabilities */}
        <section className="mt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2A527A]">
            Architecture & Features
          </p>
          <h2 className="mt-3 text-2xl font-medium text-[#181E25] sm:text-3xl">
            Key system capabilities.
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="editorial-card p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-medium text-[#181E25]">
                    {feat.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-[#525D6B]">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mt-24 border-t border-[#EAE4D8] pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2A527A]">
            Technologies & Frameworks
          </p>
          <h2 className="mt-3 text-2xl font-medium text-[#181E25]">
            Engineered with modern tools.
          </h2>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
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
