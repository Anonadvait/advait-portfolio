import Link from "next/link";
import Hero from "@/components/crimelens/Hero";
import Summary from "@/components/crimelens/Summary";
import Problem from "@/components/crimelens/Problem";
import WhyCrimeLens from "@/components/crimelens/WhyCrimeLens";
import Research from "@/components/crimelens/Research";
import Workflow from "@/components/crimelens/Workflow";
import Agents from "@/components/crimelens/Agents";
import Contributions from "@/components/crimelens/Contributions";
import Challenges from "@/components/crimelens/Challenges";
import Outcomes from "@/components/crimelens/Outcomes";
import Future from "@/components/crimelens/Future";
import Timeline from "@/components/crimelens/Timeline";
import Footer from "@/components/crimelens/Footer";
import Architecture from "@/components/crimelens/Architecture";


export default function CrimeLensPage() {
  return (
    <main className="bg-[#050505] text-white">
      <div className="px-8 pt-8">
        <Link href="/" className="text-gray-400 transition hover:text-white">
          Back to Portfolio
        </Link>
      </div>
      <Hero />
      <Summary />
      <Problem />
      <WhyCrimeLens />
      <Research />
      <Workflow />
      <Architecture />
      <Agents />
      <Contributions />
      <Challenges />
      <Outcomes />
      <Future />
      <Timeline />
      <Footer />
    </main>
  );
}