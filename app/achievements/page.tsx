import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AchievementOrbit from "@/components/achievements/AchievementOrbit";

export const metadata: Metadata = {
  title: "Achievements Orbit — Advait Awasthi",
  description:
    "An interactive orbit of verified academic, industry, and workshop certifications achieved by Advait Awasthi across Artificial Intelligence, Cybersecurity, and Software Engineering.",
};

export default function AchievementsPage() {
  return (
    <div className="relative min-h-screen text-[#1A1D20]">
      <Navbar />

      <main>
        <AchievementOrbit />
      </main>

      <Footer />
    </div>
  );
}
