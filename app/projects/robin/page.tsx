import Link from "next/link";

export default function RobinPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* Hero */}

      <section className="relative overflow-hidden px-8 py-40">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl">

          <Link
            href="/"
            className="text-gray-400 hover:text-white transition"
          >
            ← Back
          </Link>

          <p className="mt-10 text-blue-400 uppercase tracking-[0.35em]">
            AI Assistant
          </p>

          <h1 className="mt-6 text-8xl font-black tracking-tight">
            Robin AI
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            A research-oriented desktop AI assistant focused on
            local execution, intelligent automation,
            voice interaction, and modular AI architecture.
          </p>

        </div>

      </section>

      {/* Overview */}

      <section className="mx-auto max-w-7xl px-8 py-32">

        <h2 className="text-5xl font-bold">
          Overview
        </h2>

        <p className="mt-10 max-w-4xl text-lg leading-9 text-gray-400">

          Robin is an ongoing research project exploring how modern AI
          assistants can operate locally while remaining modular,
          extensible, and privacy-focused.

          The long-term objective is to build a desktop assistant capable
          of intelligent conversations, desktop automation, memory,
          and future hardware integration.

        </p>

      </section>

      {/* Features */}

      <section className="mx-auto max-w-7xl px-8 py-32">

        <h2 className="text-5xl font-bold">
          Features
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {[
            "Wake Word Detection",
            "Floating Desktop UI",
            "Voice Interaction",
            "Conversation Memory",
            "Plugin System",
            "Desktop Automation",
            "Modular AI Agents",
            "Local Execution",
            "Future Vision Support",
          ].map((feature) => (
            <div
              key={feature}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              {feature}
            </div>
          ))}

        </div>

      </section>

      {/* Tech Stack */}

      <section className="mx-auto max-w-7xl px-8 py-32">

        <h2 className="text-5xl font-bold">
          Tech Stack
        </h2>

        <div className="mt-12 flex flex-wrap gap-4">

          {[
            "Python",
            "PySide6",
            "OpenWakeWord",
            "Gemini",
            "NVIDIA NIM",
            "SQLite",
            "Framer Motion",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-6 py-3"
            >
              {item}
            </span>
          ))}

        </div>

      </section>

    </main>
  );
}