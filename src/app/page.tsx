"use client";

import { motion } from "framer-motion";
import About from "../components/About";
import Dsvg from "../components/Dsvg";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ToolkitPage from "../components/Toolkit";

const animateWobbleAndHover = {
  hidden: { rotate: 0, scale: 1 },
  show: {
    rotate: [0, -1, 2, -1, 2, 0],
    scale: 1,
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
  hover: {
    scale: 1.15,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const animateOnLoad = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <>
      <div className="relative w-full flex flex-col items-center justify-center pt-10 min-h-[55vh] sm:pt-14 lg:pt-16">
        <h4 className="absolute left-[15%] top-[18%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light transform -translate-x-1/2 text-gray-800 dark:text-gray-200">
          <motion.span variants={animateOnLoad} initial="hidden" animate="show">
            Your
          </motion.span>
        </h4>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-panchang flex justify-center relative overflow-hidden text-center"
          style={{
            fontSize: "clamp(2rem, 8vw, 20rem)",
            lineHeight: "1.3",
            textShadow: "5px 4px 6px rgba(0, 0, 0, 0.3)",
            transform: "scaleY(1.4)",
            transformOrigin: "center",
          }}
        >
          {["F", "R", "O", "N", "T", "-", "E", "N", "D"].map(
            (letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={animateWobbleAndHover}
                initial="hidden"
                animate="show"
                whileHover="hover"
              >
                {letter}
              </motion.span>
            ),
          )}
        </h1>
        <h4 className="absolute right-[15%] bottom-[5%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light transform translate-x-1/2 text-gray-800 dark:text-gray-200">
          <motion.span variants={animateOnLoad} initial="hidden" animate="show">
            Dev
          </motion.span>
        </h4>
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
