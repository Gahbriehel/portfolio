import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current.querySelectorAll(".about-fade"),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 px-6 md:px-12 border-t border-zinc-200 dark:border-zinc-800/80 bg-stone-100/50 dark:bg-[#0B0B0E]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Index Header */}
        <div className="about-fade flex items-center justify-between mb-16 pb-6 border-b border-zinc-200 dark:border-zinc-800/80 font-mono-meta text-xs">
          <span className="text-amber-600 dark:text-amber-400 uppercase tracking-widest font-semibold">
            01 // ENGINEERING PHILOSOPHY
          </span>
          <span className="text-zinc-400 dark:text-zinc-600">
            SYSTEMS & ARCHITECTURE
          </span>
        </div>

        {/* Editorial Split Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Callout Headline */}
          <div className="about-fade lg:col-span-5">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              Architecting systems designed for resilience, velocity & scale.
            </h2>
            <p className="mt-6 text-sm font-mono-meta text-zinc-500 dark:text-zinc-400 leading-relaxed uppercase tracking-wider">
              [ CRAFTING THE MODERN WEB WITH TYPE-SAFETY & LOW LATENCY ]
            </p>
          </div>

          {/* Right Narrative Paragraphs */}
          <div className="about-fade lg:col-span-7 space-y-6 text-zinc-700 dark:text-zinc-300 font-sans text-lg sm:text-xl leading-relaxed">
            <p>
              I engineer{" "}
              <strong className="font-semibold text-zinc-900 dark:text-zinc-50 underline decoration-amber-500/60 underline-offset-4">
                scalable, secure systems
              </strong>{" "}
              using{" "}
              <strong className="font-semibold text-zinc-900 dark:text-zinc-50 underline decoration-amber-500/60 underline-offset-4">
                modern architectural patterns
              </strong>{" "}
              that prioritize performance, maintainability, and strict type
              safety.
            </p>
            <p>
              I go beyond simple implementation to architect complex web
              solutions — from optimizing client rendering pipelines to
              designing modular microservices and push notification engines.
            </p>
            <p className="text-zinc-900 dark:text-zinc-100 font-serif text-xl sm:text-2xl italic pt-2 border-l-2 border-amber-500 pl-4">
              "Building software that defines the future of the web."
            </p>
          </div>
        </div>

        {/* 3 Editorial Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-zinc-200 dark:border-zinc-800/80">
          {[
            {
              num: "01",
              title: "System Architecture",
              desc: "Designing modular, decoupled TypeScript applications with predictable state, strict schema boundaries, and extensible patterns.",
            },
            {
              num: "02",
              title: "Performance Tuning",
              desc: "Minimizing re-renders, optimizing bundle sizes, utilizing edge streaming, and delivering sub-second interaction speed.",
            },
            {
              num: "03",
              title: "Product Craft",
              desc: "Fusing robust backend microservices with sleek, accessible user interfaces and micro-interactions.",
            },
          ].map((pillar) => (
            <div
              key={pillar.num}
              className="about-fade group p-6 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-900/30 hover:border-amber-500/50 transition-colors"
            >
              <span className="font-mono-meta text-xs text-amber-600 dark:text-amber-400 font-medium">
                // {pillar.num}
              </span>
              <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-3 mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
