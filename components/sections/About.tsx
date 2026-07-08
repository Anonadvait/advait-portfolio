import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-8 py-40"
    >
      <SectionTitle
        subtitle="About"
        title="Research Driven. Builder at Heart."
      />

      <div className="grid gap-20 lg:grid-cols-2">

        <p className="text-lg leading-9 text-gray-400">
          I'm a B.Tech Computer Science student specializing in
          Cyber Security at SRM Institute of Science and Technology.

          <br /><br />

          My work focuses on building intelligent systems that combine
          Artificial Intelligence, cybersecurity, and software
          engineering to solve practical problems.

          <br /><br />

          During my research internship at Rashtriya Raksha University,
          I contributed to CrimeLens AI, an AI-assisted cybercrime
          investigation platform while researching cybercrime,
          intelligent investigation systems, and smart policing.
        </p>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

          <h3 className="text-2xl font-semibold">
            Research Interests
          </h3>

          <div className="mt-8 flex flex-wrap gap-4">

            {[
              "Artificial Intelligence",
              "Cybersecurity",
              "Agent Systems",
              "Digital Forensics",
              "Human Computer Interaction",
              "Machine Learning",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}