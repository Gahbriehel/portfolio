import { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    title: "Sales, Inventory, production Management Application",
    description:
      "A comprehensive retail management system enabling seamless inventory tracking, sales analytics, supplier management, production management, target setting, and real-time reporting across multiple branches.",
    tools: ["NextJs", "TypeScript", "TailwindCSS", "Redux", "Tanstack"],
    images: [
      "/images/oneflare01.png",
      "/images/oneflare02.png",
      "/images/oneflare03.png",
    ],
    projectUrl: "https://pos.oneflaretech.com",
  },
  {
    title: "Comprehensive Retail Management System for Oil & Gas",
    description:
      "Comprehensive retail management system featuring performance analytics, expense tracking, and workflow coordination. Streamline operations via a centralized dashboard with smart reporting, role-based access, and secure document management for invoices and receipts.",
    tools: ["React", "TypeScript", "TailwindCSS", "Jest", "Radix", "MUI"],
    images: [
      "/images/bizsuit01.png",
      "/images/bizsuit02.png",
      "/images/bizsuit03.png",
    ],
    projectUrl: "https://bizsuiteone.vercel.app",
  },
  {
    title: "Bellgold consulting Website",
    description:
      "A professional consulting agency website with modern design, built for showcasing services with smooth animations.",
    tools: ["HTML", "Tailwind", "Vanilla Js", "Vercel"],
    images: ["/bellgold.png"],
    projectUrl: "https://bellgold-gn1o.vercel.app/",
  },
  {
    title: "SKU Generator Microservice",
    description:
      "A specialized microservice designed to help e-commerce businesses generate and manage Stock Keeping Units (SKUs) effectively and reliably.",
    tools: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    images: ["/crow.png"],
    projectUrl: "https://crow-7nyj.vercel.app/",
  },
  // {
  //   title: "Ecommerce",
  //   description:
  //     "An intuitive and fast e-commerce platform built with React, focusing on delivering an excellent user shopping experience and seamless navigation.",
  //   tools: ["React.js", "Tailwind"],
  //   images: ["/onecommerce.png"],
  //   projectUrl: "https://ecommerce-test0.vercel.app/",
  // },
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
      className={`project-card-${index} bg-white dark:bg-[#121212] border border-green-700 dark:border-green-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full group/card`}
    >
      {/* Image Carousel */}
      <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-900 overflow-hidden group mb-4 border-b border-green-700 dark:border-gray-800">
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
                alt={`${project.title} - Image ${i + 1}`}
                width={800}
                height={450}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>
          {/* Live demo overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 z-10 flex items-center justify-center">
            <span className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center gap-2">
              Live demo <FaArrowRight />
            </span>
          </div>
        </a>

        {project.images.length > 1 && (
          <div className="z-20 relative h-full pointer-events-none">
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 pointer-events-auto"
              aria-label="Previous Image"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 pointer-events-auto"
              aria-label="Next Image"
            >
              <FaChevronRight size={16} />
            </button>
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 pointer-events-auto">
              {project.images.map((_: string, i: number) => (
                <button
                  key={i}
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(i);
                  }}
                  className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${i === currentImageIndex ? "bg-white w-6 md:w-8" : "bg-white/50 w-1.5 md:w-2 hover:bg-white/80"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content Layer */}
      <div className="p-5 flex flex-col flex-grow">
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block group-hover/card:text-green-500 transition-colors duration-300"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2 md:mb-3 font-signika decoration-2 decoration-green-500 underline-offset-4 group-hover/card:underline">
            {project.title}
          </h3>
        </a>
        <p className="text-gray-600 dark:text-gray-400 mb-5 flex-grow leading-relaxed text-sm md:text-base">
          {project.description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800/60">
          {project.tools.map((tool: string, idx: number) => (
            <span
              key={idx}
              className="text-[10px] md:text-xs font-semibold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-400/10 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full dark:border dark:border-green-400/20"
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
  useEffect(() => {
    const ctx = gsap.context(() => {
      projects.forEach((_, index) => {
        gsap.fromTo(
          `.project-card-${index}`,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: `.project-card-${index}`,
              start: "top 90%", // Trigger animation when top of card is 90% in viewport
              end: "bottom 20%",
              scrub: true,
              once: true,
            },
            duration: 0.8,
            ease: "power3.out",
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-900 min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header section */}
        <div className="mb-14 text-center">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 dark:text-gray-200 font-signika z-10 relative">
              My work
            </h2>
            {/* Minimal accent matching the style */}
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-green-500 rounded-full opacity-80"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
