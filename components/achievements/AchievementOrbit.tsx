"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { certificates, Certificate } from "@/data/achievements";
import CertificateModal from "./CertificateModal";
import { motion, AnimatePresence } from "motion/react";

export default function AchievementOrbit() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [hoveredCertId, setHoveredCertId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Orbital angles state
  const angleRef = useRef(0);
  const [angle, setAngle] = useState(0);
  const reqAnimRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Check reduced motion preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) setIsPlaying(false);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
        if (e.matches) setIsPlaying(false);
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Animation loop with requestAnimationFrame
  const animate = useCallback(
    (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      // When hovered, slow down movement to 15% speed for effortless interaction
      const speedMultiplier = hoveredCertId ? 0.15 : 1.0;
      const degreesPerSecond = 3.0 * speedMultiplier; // Graceful ~120-second revolution

      if (isPlaying && !prefersReducedMotion) {
        angleRef.current = (angleRef.current + degreesPerSecond * delta) % 360;
        setAngle(angleRef.current);
      }

      reqAnimRef.current = requestAnimationFrame(animate);
    },
    [isPlaying, hoveredCertId, prefersReducedMotion]
  );

  useEffect(() => {
    reqAnimRef.current = requestAnimationFrame(animate);
    return () => {
      if (reqAnimRef.current) cancelAnimationFrame(reqAnimRef.current);
    };
  }, [animate]);

  // Generous Orbit Dimensions (Desktop)
  // Inner track: radiusX = 340, radiusY = 230
  // Outer track: radiusX = 500, radiusY = 335
  const getCoordinates = (cert: Certificate) => {
    const isInner = cert.orbitTrack === "inner";
    const rx = isInner ? 340 : 500;
    const ry = isInner ? 230 : 335;

    // Inner moves clockwise, outer counter-clockwise for harmonious movement
    const currentAngleDeg = isInner
      ? (cert.initialAngle + angle) % 360
      : (cert.initialAngle - angle * 0.75 + 360) % 360;

    const rad = (currentAngleDeg * Math.PI) / 180;
    const x = Math.cos(rad) * rx;
    const y = Math.sin(rad) * ry;

    return { x, y, angle: currentAngleDeg };
  };

  // Filtered certificates for mobile
  const filteredCertificates = certificates.filter(
    (c) => filterCategory === "All" || c.category === filterCategory
  );

  return (
    <section className="relative min-h-[92vh] overflow-hidden px-4 pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background radial ambiance */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_48%,rgba(42,82,122,0.04)_0%,transparent_65%)]" />

      {/* Orbit Container (Desktop - lg screens and up) */}
      <div className="relative mx-auto hidden min-h-[820px] w-full max-w-7xl items-center justify-center lg:flex">
        {/* Orbital SVG Paths */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="-620 -420 1240 840"
          fill="none"
        >
          <defs>
            <linearGradient id="orbitGradInner" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2A527A" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#2A527A" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#2A527A" stopOpacity="0.22" />
            </linearGradient>
            <linearGradient id="orbitGradOuter" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2A527A" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#2A527A" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#2A527A" stopOpacity="0.18" />
            </linearGradient>
          </defs>

          {/* Outer Orbit Path */}
          <ellipse
            cx="0"
            cy="0"
            rx="500"
            ry="335"
            stroke="url(#orbitGradOuter)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />

          {/* Inner Orbit Path */}
          <ellipse
            cx="0"
            cy="0"
            rx="340"
            ry="230"
            stroke="url(#orbitGradInner)"
            strokeWidth="1.5"
            strokeDasharray="3 5"
          />
        </svg>

        {/* Central Exhibition Plaque */}
        <div className="relative z-10 flex max-w-[340px] flex-col items-center rounded-3xl border border-[#EAE5DC] bg-[#FFFFFF]/95 p-8 text-center shadow-[0_8px_32px_-4px_rgba(26,29,32,0.04)] backdrop-blur-md">
          <span className="rounded-full border border-[#D5E2EC] bg-[#EDF4F9] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2A527A]">
            Verified Milestones
          </span>

          <h1 className="mt-4 text-2xl font-medium tracking-tight text-[#1A1D20] sm:text-[1.65rem] leading-snug">
            This is all of my achievements so far.
          </h1>

          <p className="mt-2.5 text-xs italic leading-relaxed text-[#525D6B]">
            Every experience. Every milestone. Every step forward.
          </p>

          <div className="mt-5 flex items-center gap-2.5 border-t border-[#F0EBE1] pt-3.5 text-[11px] text-[#828E9E]">
            <span>6 Credentials</span>
            <span>•</span>
            <span>Hover to Pause</span>
            <span>•</span>
            <span>Click to Inspect</span>
          </div>

          {/* Controls: Play/Pause */}
          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#E4DDD0] bg-[#FAF8F5] px-3.5 py-1 text-[11px] font-medium text-[#525D6B] transition hover:bg-[#EFE9DE] hover:text-[#1A1D20]"
              aria-label={isPlaying ? "Pause orbit rotation" : "Resume orbit rotation"}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${isPlaying ? "bg-[#2A527A]" : "bg-[#828E9E]"}`} />
              <span>{isPlaying ? "Pause Motion" : "Resume Orbit"}</span>
            </button>
          </div>
        </div>

        {/* 6 Orbital Certificate Nodes */}
        {certificates.map((cert) => {
          const { x, y } = getCoordinates(cert);
          const isHovered = hoveredCertId === cert.id;

          return (
            <div
              key={cert.id}
              style={{
                transform: `translate(${x}px, ${y}px)`,
                zIndex: isHovered ? 40 : 20,
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-linear"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                onMouseEnter={() => setHoveredCertId(cert.id)}
                onMouseLeave={() => setHoveredCertId(null)}
                onClick={() => setSelectedCert(cert)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View certificate for ${cert.title} from ${cert.organization}`}
                className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-[#FFFFFF] p-2.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2A527A] focus:ring-offset-2 ${
                  isHovered
                    ? "border-[#2A527A] shadow-[0_16px_36px_-6px_rgba(42,82,122,0.22)]"
                    : "border-[#E8E2D8] shadow-[0_6px_20px_-2px_rgba(26,29,32,0.06)]"
                }`}
                style={{ width: "160px" }}
              >
                {/* Certificate Preview Thumbnail */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#FAF8F5] border border-[#F0ECE4]">
                  <Image
                    src={cert.previewImage}
                    alt={cert.title}
                    fill
                    sizes="160px"
                    className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Card Label */}
                <div className="mt-2 text-center">
                  <span className="block truncate text-[11px] font-semibold text-[#1A1D20] group-hover:text-[#2A527A] transition">
                    {cert.title}
                  </span>
                  <span className="block truncate text-[9.5px] text-[#828E9E]">
                    {cert.organization}
                  </span>
                </div>

                {/* Floating Tooltip Pill on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#1A1D20] px-3 py-1 text-[10px] font-medium text-[#FAF8F5] shadow-md z-50"
                    >
                      Click to inspect milestone ↗
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Responsive View (Mobile & Tablet - below lg screens) */}
      <div className="mx-auto block max-w-3xl lg:hidden">
        {/* Mobile Header */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-[#D5E2EC] bg-[#EDF4F9] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2A527A]">
            Verified Milestones
          </span>

          <h1 className="mt-4 text-3xl font-medium tracking-tight text-[#1A1D20] sm:text-4xl">
            This is all of my achievements so far.
          </h1>

          <p className="mt-3 text-sm italic leading-relaxed text-[#525D6B]">
            Every experience. Every milestone. Every step forward.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {["All", "Internship", "Course", "Workshop"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilterCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                  filterCategory === cat
                    ? "bg-[#1A1D20] text-[#FAF8F5] shadow-sm"
                    : "border border-[#E2DBD0] bg-[#FFFFFF] text-[#525D6B] hover:text-[#1A1D20]"
                }`}
              >
                {cat === "All" ? "All (6)" : `${cat}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Card Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedCert(cert);
                }
              }}
              tabIndex={0}
              role="button"
              className="editorial-card group flex cursor-pointer flex-col justify-between p-5 transition focus:outline-none focus:ring-2 focus:ring-[#2A527A]"
            >
              <div>
                {/* Preview Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#EAE4D8] bg-[#FAF8F5]">
                  <Image
                    src={cert.previewImage}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-contain p-2 transition group-hover:scale-102"
                  />
                </div>

                {/* Meta */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2A527A]">
                    {cert.category}
                  </span>
                  <span className="text-xs text-[#828E9E]">
                    {cert.dateOrDuration}
                  </span>
                </div>

                <h3 className="mt-2 text-lg font-medium text-[#1A1D20] group-hover:text-[#2A527A] transition">
                  {cert.title}
                </h3>

                <p className="mt-1 text-xs text-[#525D6B]">
                  {cert.organization}
                </p>

                <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-[#626E7E]">
                  {cert.description}
                </p>
              </div>

              <div className="mt-5 border-t border-[#F2ECE3] pt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#2A527A]">
                  Inspect Certificate →
                </span>
                <span className="text-xs text-[#828E9E] uppercase font-mono">
                  {cert.documentType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Accessible Certificate Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
