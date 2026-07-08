import MouseGlow from "@/components/ui/mouseglow";
import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <MouseGlow />
      <Navbar />

      <main className="bg-[#050505] text-white">

        <Hero />

        <About />

        <Projects />

      </main>
    </>
  );
}