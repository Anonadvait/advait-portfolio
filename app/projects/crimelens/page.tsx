import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/crimelens/Hero";
import Summary from "@/components/crimelens/Summary";
import Problem from "@/components/crimelens/Problem";
import WhyCrimeLens from "@/components/crimelens/WhyCrimeLens";
import Workflow from "@/components/crimelens/Workflow";
import Architecture from "@/components/crimelens/Architecture";
import Agents from "@/components/crimelens/Agents";
import Contributions from "@/components/crimelens/Contributions";
import Challenges from "@/components/crimelens/Challenges";
import Outcomes from "@/components/crimelens/Outcomes";
import Future from "@/components/crimelens/Future";
import Timeline from "@/components/crimelens/Timeline";

export const metadata = {
  title: "CrimeLens AI — Flagship Research Project",
  description:
    "An AI-assisted cybercrime investigation and intelligence platform developed during Advait Awasthi's research internship at Rashtriya Raksha University.",
};

export default function CrimeLensPage() {
  return (
    <div className="relative min-h-screen text-[#1A1D20]">
      <Navbar />

      <main className="pt-24 md:pt-28">
        <div className="mx-auto max-w-7xl px-8 pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#525D6B] hover:text-[#2A527A] transition"
          >
            <span>← Back to Selected Projects</span>
          </Link>
        </div>

        <Hero />
        <Summary />
        <Problem />
        <WhyCrimeLens />
        <Workflow />
        <Architecture />
        <Agents />
        <Contributions />
        <Challenges />
        <Outcomes />
        <Future />
        <Timeline />
      </main>

      <Footer />
    </div>
  );
}
