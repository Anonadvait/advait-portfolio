"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Certificate } from "@/data/achievements";
import { motion, AnimatePresence } from "motion/react";

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key & lock body scroll
  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus the modal for accessibility
    modalRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  const categoryColor = {
    Internship: "bg-[#EBF2F7] text-[#2A527A] border-[#D1E0EC]",
    Course: "bg-[#F3F0EA] text-[#4A5565] border-[#E2DBD0]",
    Workshop: "bg-[#EDF5F2] text-[#2D6653] border-[#D4E6DF]",
  }[certificate.category];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#161C24]/50 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          ref={modalRef}
          tabIndex={-1}
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[#E8E2D8] bg-[#FAF8F5] shadow-2xl z-10 my-auto focus:outline-none"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#EAE4D8] bg-[#FFFFFF] px-6 py-4 md:px-8">
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-semibold uppercase tracking-wider ${categoryColor}`}
              >
                {certificate.category}
              </span>
              <span className="text-xs text-[#828E9E]">
                {certificate.dateOrDuration}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate details"
              className="group flex h-8 w-8 items-center justify-center rounded-full border border-[#E6E0D4] bg-[#FAF8F5] text-[#525D6B] transition hover:bg-[#EDE8DE] hover:text-[#181E25]"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-8 md:gap-10">
            {/* Left: Certificate Preview Document */}
            <div className="flex flex-col justify-center">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E2DBD0] bg-[#FFFFFF] shadow-sm">
                <Image
                  src={certificate.previewImage}
                  alt={`Certificate for ${certificate.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-contain p-2"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-xs text-[#828E9E]">
                Official Certificate Preview • Verified Milestone
              </p>
            </div>

            {/* Right: Detailed Metadata & Actions */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A527A]">
                  {certificate.organization}
                </p>

                <h3
                  id="modal-title"
                  className="mt-2 text-2xl font-medium tracking-tight text-[#181E25] sm:text-3xl"
                >
                  {certificate.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#525D6B]">
                  {certificate.description}
                </p>

                {/* Relevant Skills / Topics */}
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#828E9E]">
                    Core Skills & Topics
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#E6E0D4] bg-[#FFFFFF] px-3 py-1 text-xs font-medium text-[#384554]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#EAE4D8] flex flex-wrap items-center gap-3">
                <a
                  href={certificate.originalDocument}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#181E25] px-6 py-2.5 text-xs font-medium text-[#FAF7F2] transition hover:bg-[#2A3440] shadow-sm"
                >
                  <span>View Original Certificate</span>
                  <span className="text-xs">↗</span>
                </a>

                <a
                  href={certificate.originalDocument}
                  download
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#D5CEBF] bg-[#FFFFFF] px-4 py-2.5 text-xs font-medium text-[#525D6B] transition hover:border-[#181E25] hover:text-[#181E25]"
                >
                  <span>Download</span>
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

