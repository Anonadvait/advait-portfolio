"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        style={{
          x,
          y,
        }}
        className="pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-[140px]"
      />

      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_45%)]" />

      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.08),transparent_35%)]" />
    </>
  );
}