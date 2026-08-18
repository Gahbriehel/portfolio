"use client";

import { motion } from "framer-motion";
import About from "../components/About";
import Dsvg from "../components/Dsvg";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ToolkitPage from "../components/Toolkit";

export default function Home() {
  return (
    <>
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 sm:pt-24 pb-16 min-h-[75vh] flex flex-col justify-between">
        {/* Editorial Sub-header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-mono-meta text-xs tracking-widest text-amber-600 dark:text-amber-400 uppercase mb-6"
        >
          <span className="h-px w-8 bg-amber-500/60"></span>
          <span>SYSTEMS & FRONT-END ARCHITECT</span>
          <span className="text-zinc-400 dark:text-zinc-600">—</span>
          <span className="text-zinc-500 dark:text-zinc-400">EST. 2026</span>
        </motion.div>

        {/* Oversized Serif Editorial Title */}
        <div className="my-auto">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.08] max-w-5xl"
          >
            Crafting High-Performance Systems &{" "}
            <span className="italic font-normal text-amber-600 dark:text-amber-400">
              Web Architecture
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed font-sans"
          >
            I architect resilient software systems, optimizing performance,
            maintainability, and end-to-end user experiences.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4 font-mono-meta text-xs tracking-wider uppercase"
          >
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-full bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-semibold hover:bg-amber-600 dark:hover:bg-amber-500 dark:hover:text-zinc-900 transition-colors shadow-sm flex items-center gap-2 group"
            >
              <span>EXPLORE SELECTED WORK</span>
              <span className="transform group-hover:translate-y-0.5 transition-transform">
                ↓
              </span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-2"
            >
              <span>INITIATE CONTACT</span>
              <span>→</span>
            </a>
          </motion.div>
        </div>

        {/* Minimalist Metadata Grid Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 mt-12 border-t border-zinc-200 dark:border-zinc-800/80 font-mono-meta text-xs"
        >
          <div>
            <span className="block text-zinc-400 dark:text-zinc-500 uppercase mb-1">
              01 // SPECIALIZATION
            </span>
            <span className="text-zinc-800 dark:text-zinc-200 font-medium">
              Front-End & Systems Engineering
            </span>
          </div>
          <div>
            <span className="block text-zinc-400 dark:text-zinc-500 uppercase mb-1">
              02 // ARCHITECTURE
            </span>
            <span className="text-zinc-800 dark:text-zinc-200 font-medium">
              TypeScript, Next.js, Cloud APIs
            </span>
          </div>
          <div>
            <span className="block text-zinc-400 dark:text-zinc-500 uppercase mb-1">
              03 // AVAILABILITY
            </span>
            <span className="text-amber-600 dark:text-amber-400 font-medium">
              Open for Senior & Lead Roles
            </span>
          </div>
        </motion.div>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Dsvg />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="toolkit">
        <ToolkitPage />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
