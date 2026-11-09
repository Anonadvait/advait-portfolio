import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OtherThanStudies from "@/components/sections/OtherThanStudies";

export const metadata: Metadata = {
  title: "Other Than Studies — Advait Awasthi",
  description:
    "Extracurricular involvement, institutional event volunteering, and creative media contributions by Advait Awasthi.",
};

export default function OtherThanStudiesPage() {
  return (
    <div className="relative min-h-screen text-[#191B1F]">
      <Navbar />

      <main className="pt-16">
        <OtherThanStudies />
      </main>

      <Footer />
    </div>
  );
}

