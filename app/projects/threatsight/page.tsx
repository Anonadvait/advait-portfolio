import Link from "next/link";

export default function ThreatSightPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <section className="relative overflow-hidden px-8 py-40">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl">

          <Link
            href="/"
            className="text-gray-400 hover:text-white transition"
          >
            Back to Portfolio
          </Link>

          <p className="mt-10 text-blue-400 uppercase tracking-[0.35em]">
            Cybersecurity Project
          </p>

          <h1 className="mt-6 text-8xl font-black tracking-tight">
            ThreatSight
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Desktop phishing detection platform capable of analysing URLs,
            detecting brand impersonation, and assigning explainable risk
            scores.
          </p>

          <a
            href="https://github.com/Anonadvait/ThreatSight"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex text-blue-400 transition hover:text-blue-300"
          >
            View on GitHub
          </a>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-8 py-32">

        <h2 className="text-5xl font-bold">
          Overview
        </h2>

        <p className="mt-10 max-w-4xl text-lg leading-9 text-gray-400">

          ThreatSight performs heuristic-based phishing analysis by
          inspecting suspicious keywords, IP-based URLs, lookalike domains,
          and brand impersonation attempts while providing explainable
          reasoning for every scan.

        </p>

      </section>

      <section className="mx-auto max-w-7xl px-8 py-32">

        <h2 className="text-5xl font-bold">
          Technologies
        </h2>

        <div className="mt-12 flex flex-wrap gap-4">

          {[
            "Python",
            "CustomTkinter",
            "RapidFuzz",
            "Regex",
            "CSV",
            "urllib",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-6 py-3"
            >
              {tech}
            </span>
          ))}

        </div>

      </section>

    </main>
  );
}