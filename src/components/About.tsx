import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    if (profileRef.current) {
      gsap.fromTo(
        profileRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: profileRef.current,
            start: "top 80%", // Trigger when the element is 80% in view
            toggleActions: "play none none reverse", // Reverse on scroll back
          },
        },
      );
    }

    // Animate text paragraphs
    textRefs.current.forEach((text, index) => {
      if (text) {
        gsap.fromTo(
          text,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.2, // Stagger animation
            ease: "power3.out",
            scrollTrigger: {
              trigger: text,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });
  }, []);

  const hoverEffect = {
    scale: 1.3,
    transition: { type: "spring", stiffness: 200 },
  };

  const cursorStyle = {
    cursor: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="red" /></svg>') 20 20, auto`,
  };

  return (
    <div
      className={`transition-colors duration-500 bg-gradient-to-br from-gray-300 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen p-6`}
    >
      {/* Profile Picture */}
      <div className="relative-content flex justify-center items-center">
        <div
          ref={profileRef}
          className="flex justify-center items-center bg-slate-300 dark:bg-slate-700 rounded-full w-72 h-72 overflow-hidden"
        >
          <img src="/IMG_0606.jpg" alt="Profile" className="w-full h-full" />
        </div>
      </div>

      {/* Text Content */}
      <section className="relative-content py-10 px-4 max-w-full text-center mx-auto text-gray-800 dark:text-gray-200">
        <p
          ref={(el) => textRefs.current.push(el!)}
          className="text-2xl md:text-2xl leading-relaxed mx-auto max-w-3xl"
        >
          I engineer{" "}
          <motion.span
            whileHover={hoverEffect}
            style={cursorStyle}
            className="font-bold text-gray-800 dark:text-gray-200 text-2xl md:text-2xl"
          >
            scalable, secure systems
          </motion.span>{" "}
          using{" "}
          <motion.span
            whileHover={hoverEffect}
            style={cursorStyle}
            className="font-bold text-gray-800 dark:text-gray-200 text-2xl md:text-2xl"
          >
            modern architectural patterns
          </motion.span>{" "}
          that prioritize performance, maintainability, and type safety.
        </p>
        <p
          ref={(el) => textRefs.current.push(el!)}
          className="text-2xl md:text-2xl leading-relaxed mt-8 mx-auto max-w-3xl"
        >
          I go beyond simple implementation to{" "}
          <motion.span
            whileHover={hoverEffect}
            style={cursorStyle}
            className="font-bold text-gray-800 dark:text-gray-200 text-2xl md:text-2xl"
          >
            architect complex solutions
          </motion.span>
          . From{" "}
          <motion.span
            whileHover={hoverEffect}
            style={cursorStyle}
            className="font-bold text-gray-900 dark:text-gray-100 text-2xl md:text-2xl"
          >
            optimizing rendering performance
          </motion.span>{" "}
          to designing modular component systems, I ensure technical excellence
          at every layer of the stack.
        </p>

        <p
          ref={(el) => textRefs.current.push(el!)}
          className="text-2xl md:text-2xl leading-relaxed mt-8 mx-auto max-w-3xl"
        >
          Let’s build software that determines the{" "}
          <motion.span
            whileHover={hoverEffect}
            style={cursorStyle}
            className="font-bold text-gray-900 dark:text-gray-100 text-3xl md:text-3xl"
          >
            future of the web
          </motion.span>{" "}
        </p>
      </section>
    </div>
  );
};

export default About;
