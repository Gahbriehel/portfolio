import { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Nudger",
    description:
      "A production-grade productivity web app that goes beyond basic to-do lists by emphasizing behavioral nudges and cognitive support. It features a powerful recurrence engine, subtask tracking, and unique 'cognitive memory cues' designed to reduce the friction of starting real-world tasks. To keep users focused and on track, it utilizes proactive push notifications and an 'Urgent Nudges' dashboard widget that deep-links directly to high-priority items.",
    tools: [
      "NextJs",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "Web Push",
      "Cron Job",
    ],
    images: [
      "/images/nudger1.png",
      "/images/nudger2.png",
      "/images/nudger3.png",
      "/images/nudger4.png",
    ],
    projectUrl: "https://nudger.gdome.xyz",
    featured: true,
    features: [
      "Behavioral nudges and cognitive support routines to reduce start-friction.",
      "Powerful recurrence engine for tracking multi-step dynamic tasks.",
      "Proactive push notification service with cron job synchronization.",
      "Interactive dashboard with an 'Urgent Nudges' priority widget.",
    ],
  },
  {
    title: "Qrow - Universal QR & SKU Generator",
    description:
      "An all-in-one suite of professional utility tools designed for generating highly customizable vector QR codes and print-ready SKU labels. Built for e-commerce, warehousing, and general branding. Features dynamic color templates, visual alignment guides, SVG/PNG exporting, and thermal printing presets.",
    tools: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "html2canvas-pro",
      "JsBarcode",
      "qrcode.react",
      "react-to-print",
    ],
    images: ["/images/qrow1.png", "/images/qrow2.png"],
    projectUrl: "https://qrow.gdome.xyz",
    featured: true,
    features: [
      "Universal QR generator supporting URLs, Wi-Fi setup, email formats, and raw text.",
      "Customizable QR badges with multiple layout styles, custom frames, and logo overlays.",
      "SKU Label generator yielding professional Code 128 barcodes or custom QR formats.",
      'Thermal printer layouts calibrated for industry-standard 2" × 1" sticker labels.',
      "High-resolution canvas rendering for vector SVG and scaled PNG downloads.",
    ],
  },
  {
    title: "OneflarePOS",
    description:
      "A comprehensive retail management system enabling seamless inventory tracking, sales analytics, supplier management, production management, target setting, and real-time reporting across multiple branches.",
    tools: ["NextJs", "TypeScript", "TailwindCSS", "Redux", "Tanstack"],
    images: [
      "/images/oneflare01.png",
      "/images/oneflare02.png",
      "/images/oneflare03.png",
    ],
    projectUrl: "https://pos.oneflaretech.com",
    featured: true,
    features: [
      "Multi-branch data coordination and real-time operations reporting.",
      "Seamless inventory control, sales metrics, and automated alerts.",
      "Supplier management workflows with production target monitoring.",
      "Interactive data visualizations and detailed analytics panels.",
    ],
  },
  {
    title: "Bizsuite - Retail Management System",
    description:
      "Comprehensive retail management system featuring performance analytics, expense tracking, and workflow coordination. Streamline operations via a centralized dashboard with smart reporting, role-based access, and secure document management for invoices and receipts.",
    tools: ["React", "TypeScript", "TailwindCSS", "Jest", "Radix", "MUI"],
    images: [
      "/images/bizsuit01.png",
      "/images/bizsuit02.png",
      "/images/bizsuit03.png",
    ],
    projectUrl: "https://bizsuiteone.vercel.app",
    featured: true,
    features: [
      "Centralized performance analytics and expense tracking dashboards.",
      "Granular role-based access control (RBAC) protecting internal routes.",
      "Secure document management for invoicing, receipts, and statements.",
      "Automated reporting exports and clean data-table integrations.",
    ],
  },
  {
    title: "Bellgold consulting Website",
    description:
      "A professional consulting agency website with modern design, built for showcasing services with smooth animations.",
    tools: ["HTML", "Tailwind", "Vanilla Js", "Vercel"],
    images: ["/bellgold.png"],
    projectUrl: "https://bellgold-gn1o.vercel.app/",
    featured: false,
    features: [
      "Modern, responsive consulting showcase optimized for speed and SEO.",
      "Interactive GSAP and CSS animations for premium brand feel.",
      "Clean vanilla JavaScript architecture requiring zero heavy framework bloat.",
    ],
  },
];

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  project,
  index,
}: {
  project: {
    title: string;
    description: string;
    tools: string[];
    images: string[];
    projectUrl: string;
    featured?: boolean;
    features?: string[];
  };
  index: number;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [project.images.length]);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  };

  return (
    <div
      className={`project-card-${index} bg-white dark:bg-[#111116] border border-zinc-200/90 dark:border-zinc-800/90 rounded-2xl overflow-hidden shadow-sm hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 flex flex-col h-full group/card`}
    >
      {/* Image Carousel Header */}
      <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-950 overflow-hidden group border-b border-zinc-200/80 dark:border-zinc-800/80">
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 block z-0"
        >
          <div
            className="flex h-full w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {project.images.map((img: string, i: number) => (
              <Image
                key={i}
                src={img}
                alt={`${project.title} - Screenshot ${i + 1}`}
                width={800}
                height={450}
                className="w-full h-full object-cover flex-shrink-0"
                unoptimized
              />
            ))}
          </div>
          {/* Live demo overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 z-10 flex items-center justify-center">
            <span className="bg-amber-500 hover:bg-amber-600 text-zinc-950 font-mono-meta text-xs uppercase tracking-wider px-5 py-2.5 rounded-full font-semibold opacity-0 transform translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md flex items-center gap-2">
              LAUNCH LIVE SYSTEM <FaArrowRight size={12} />
            </span>
          </div>
        </a>

        {project.images.length > 1 && (
          <div className="z-20 relative h-full pointer-events-none">
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-amber-500 hover:text-zinc-950 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 pointer-events-auto"
              aria-label="Previous Image"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-amber-500 hover:text-zinc-950 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 pointer-events-auto"
              aria-label="Next Image"
            >
              <FaChevronRight size={14} />
            </button>
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 pointer-events-auto">
              {project.images.map((_: string, i: number) => (
                <button
                  key={i}
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(i);
                  }}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentImageIndex
                      ? "bg-amber-500 w-6"
                      : "bg-white/40 w-2 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content Layer */}
      <div className="p-6 flex flex-col flex-grow">
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block group-hover/card:text-amber-600 dark:group-hover/card:text-amber-400 transition-colors duration-300"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl md:text-2xl font-bold font-serif text-zinc-900 dark:text-zinc-50">
              {project.title}
            </h3>
            <span className="font-mono-meta text-xs text-zinc-400 group-hover/card:text-amber-500">
              ↗
            </span>
          </div>
        </a>

        <div className="flex flex-col flex-grow mb-6">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans text-sm md:text-base mb-4">
            {project.description}
          </p>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="mt-2">
              <h4 className="text-xs font-mono-meta font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2.5">
                Key Capabilities
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-600 dark:text-zinc-400 font-sans leading-snug"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Tech Stack Metadata Badges */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
          {project.tools.map((tool: string, idx: number) => (
            <span
              key={idx}
              className="text-[11px] font-mono-meta font-medium text-amber-700 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<"featured" | "all">("featured");

  useEffect(() => {
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      const activeProjects =
        activeTab === "featured"
          ? projects.filter((p) => p.featured)
          : projects;
      activeProjects.forEach((project) => {
        const originalIndex = projects.findIndex(
          (p) => p.title === project.title,
        );
        gsap.fromTo(
          `.project-card-${originalIndex}`,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: `.project-card-${originalIndex}`,
              start: "top 90%",
              once: true,
            },
            duration: 0.6,
            ease: "power3.out",
          },
        );
      });
    });

    return () => ctx.revert();
  }, [activeTab]);

  const displayedProjects =
    activeTab === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section
      id="projects"
      className="bg-stone-50 dark:bg-[#0B0B0E] py-24 px-6 md:px-12 border-t border-zinc-200 dark:border-zinc-800/80"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-zinc-200 dark:border-zinc-800/80 gap-6">
          <div>
            <span className="font-mono-meta text-xs text-amber-600 dark:text-amber-400 uppercase tracking-widest font-semibold block mb-2">
              02 // SELECTED WORK
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              System Architecture & Applications
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex p-1 bg-zinc-200/60 dark:bg-zinc-900/60 backdrop-blur-md rounded-full border border-zinc-300/40 dark:border-zinc-800/80 font-mono-meta text-xs">
            <button
              onClick={() => setActiveTab("featured")}
              className={`relative px-5 py-2 uppercase tracking-wider font-medium rounded-full transition-colors duration-300 z-10 focus:outline-none ${
                activeTab === "featured"
                  ? "text-zinc-950 dark:text-zinc-950"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              FEATURED ({projects.filter((p) => p.featured).length})
              {activeTab === "featured" && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-amber-500 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`relative px-5 py-2 uppercase tracking-wider font-medium rounded-full transition-colors duration-300 z-10 focus:outline-none ${
                activeTab === "all"
                  ? "text-zinc-950 dark:text-zinc-950"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              ALL SYSTEMS ({projects.length})
              {activeTab === "all" && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-amber-500 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
          {displayedProjects.map((project) => {
            const originalIndex = projects.findIndex(
              (p) => p.title === project.title,
            );
            return (
              <ProjectCard
                key={originalIndex}
                project={project}
                index={originalIndex}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
