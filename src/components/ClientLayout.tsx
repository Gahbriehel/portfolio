"use client";

import { motion, useScroll } from "framer-motion";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative bg-stone-50 dark:bg-[#0B0B0E] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 min-h-screen">
      <ParticlesBackground />
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          originX: 0,
          backgroundColor: "#f59e0b",
          zIndex: 9999,
        }}
      />
      <Navbar />
      {children}
    </div>
  );
}
