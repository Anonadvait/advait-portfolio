"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { certificates, Certificate } from "@/data/achievements";
import CertificateModal from "@/components/achievements/CertificateModal";

export default function AchievementsSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="achievements" className="mx-auto max-w-5xl px-6 py-28 md:px-8 md:py-36">
      {/* Section Header */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2A527A]">
          Milestones & Credentials
        </p>

        <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#181E25] sm:text-4xl md:text-5xl">
          Verified research, internships, and certifications.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#525D6B]">
          Documented technical credentials across institutional research at Rashtriya Raksha
          University, cybersecurity industry internships, and professional workshops.
        </p>
      </div>

      {/* Featured Orbit Launcher Banner */}
      <div className="mt-12 overflow-hidden rounded-2xl border border-[#D5E0EA] bg-gradient-to-r from-[#F0F6FA] via-[#FFFFFF] to-[#F5F2EB] p-8 shadow-[0_2px_12px_rgba(42,82,122,0.05)] md:p-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2A527A]/20 bg-[#FFFFFF] px-3 py-1 text-xs font-medium text-[#2A527A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2A527A] animate-pulse" />
              <span>Interactive 3D / Celestial Experience</span>
            </div>

            <h3 className="mt-4 text-2xl font-medium tracking-tight text-[#181E25] sm:text-3xl">
              The Achievement Orbit
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#525D6B] sm:text-base">
              Explore all six credentials arranged in an astronomical spiral formation with
              smooth orbital physics, real-time hover controls, and interactive document inspections.
            </p>
          </div>

          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 rounded-full bg-[#181E25] px-6 py-3.5 text-sm font-medium text-[#FAF7F2] transition hover:bg-[#2A3440] shadow-[0_2px_8px_rgba(24,30,37,0.1)] shrink-0"
          >
            <span>Launch Achievement Orbit</span>
            <span className="text-[#AEC2D6] font-semibold">→</span>
          </Link>
        </div>
      </div>

      {/* 6 Certificates Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="group cursor-pointer flex flex-col justify-between rounded-2xl border border-[#EAE5DC] bg-[#FFFFFF] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#2A527A]/40 hover:shadow-[0_8px_24px_rgba(24,30,37,0.06)]"
          >
            <div>
              {/* Certificate Preview Thumbnail */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#EAE4D8] bg-[#F7F4EE]">
                <Image
                  src={cert.previewImage}
                  alt={cert.title}
                  fill
                  className="object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="rounded-md border border-[#FFFFFF]/80 bg-[#FFFFFF]/90 px-2 py-0.5 text-[11px] font-medium text-[#2A527A] backdrop-blur-sm shadow-xs">
                    {cert.category}
                  </span>
                </div>
              </div>

              {/* Title & Organization */}
              <div className="mt-4">
                <h4 className="text-base font-semibold tracking-tight text-[#181E25] group-hover:text-[#2A527A] transition-colors">
                  {cert.title}
                </h4>
                <p className="mt-1 text-xs text-[#525D6B]">
                  {cert.organization}
                </p>
                <p className="mt-1 text-xs font-mono text-[#828E9E]">
                  {cert.dateOrDuration}
                </p>
              </div>

              {/* Skills Pills */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {cert.skills.slice(0, 2).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#E8E2D8] bg-[#FAF8F5] px-2 py-0.5 text-[10px] text-[#525D6B]"
                  >
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 2 && (
                  <span className="rounded-full border border-[#E8E2D8] bg-[#FAF8F5] px-1.5 py-0.5 text-[10px] text-[#828E9E]">
                    +{cert.skills.length - 2}
                  </span>
                )}
              </div>
            </div>

            {/* Inspect Link */}
            <div className="mt-5 flex items-center justify-between border-t border-[#F2ECE1] pt-3 text-xs font-medium text-[#2A527A]">
              <span>Inspect Credential</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Viewer */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}

