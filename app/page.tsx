import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import OtherThanStudies from "@/components/sections/OtherThanStudies";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-[#191B1F]">
      <Navbar />

      <main className="w-full overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <OtherThanStudies />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
