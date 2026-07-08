import MouseGlow from "@/components/ui/mouseglow";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <MouseGlow />
      <Navbar />

      <main className="bg-[#050505] text-white">

        <Hero />

        <FadeIn>
          <About />
        </FadeIn>

        <FadeIn>
          <Projects />
        </FadeIn>

        <FadeIn>
          <Experience />
        </FadeIn>

        <FadeIn>
          <Skills />
        </FadeIn>

        <FadeIn>
          <Contact />
        </FadeIn>

      </main>

      <Footer />
    </>
  );
}