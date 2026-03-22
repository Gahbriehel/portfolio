"use client";

import { motion, useScroll } from "framer-motion";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import { ChristmasEffects } from "react-christmas-effects";
import "react-christmas-effects/dist/index.css";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative bg-gradient-to-br from-gray-300 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300 min-h-screen">
      <ParticlesBackground />
      <ChristmasEffects
        showText={false}
        fireworks={false}
        snowflakeCount={50}
      />
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          originX: 0,
          backgroundColor: "#12294bff",
          zIndex: 9999,
        }}
      />
      <Navbar />
      {children}
    </div>
  );
}
