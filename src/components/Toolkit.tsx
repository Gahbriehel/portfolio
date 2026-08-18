import {
  FaReact,
  FaSass,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaWrench,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiMui,
  SiPostman,
  SiVite,
  SiVercel,
  SiFramer,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiStackLine } from "react-icons/ri";

const ToolkitPage = () => {
  const coreSkills = [
    { name: "TypeScript", icon: SiTypescript, level: "Advanced / Primary" },
    { name: "JavaScript (ESNext)", icon: FaJs, level: "Advanced" },
    { name: "HTML5 / Semantic", icon: FaHtml5, level: "Expert" },
    { name: "CSS3 / Architecture", icon: FaCss3Alt, level: "Expert" },
    { name: "SCSS / Sassy CSS", icon: FaSass, level: "Proficient" },
  ];

  const frameworks = [
    { name: "React 18 / 19", icon: FaReact, level: "Core Framework" },
    {
      name: "Next.js (App Router)",
      icon: SiNextdotjs,
      level: "Full-Stack Web",
    },
    { name: "Framer Motion", icon: SiFramer, level: "Animations" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: "Styling System" },
    { name: "Material UI", icon: SiMui, level: "UI Library" },
  ];

  const tools = [
    { name: "Git & Version Control", icon: FaGitAlt, level: "Workflows" },
    { name: "Redux Toolkit", icon: SiRedux, level: "State Management" },
    { name: "Vercel Platform", icon: SiVercel, level: "Deployment & Edge" },
    {
      name: "Firebase / Cloud",
      icon: IoLogoFirebase,
      level: "Auth & Database",
    },
    { name: "Vite Bundler", icon: SiVite, level: "Build Tooling" },
    { name: "Postman API", icon: SiPostman, level: "API Testing" },
  ];

  const cardData = [
    {
      id: "01",
      title: "Core Languages & Logic",
      icon: FaCode,
      description: "Foundational web standards & type systems",
      items: coreSkills,
    },
    {
      id: "02",
      title: "Frameworks & UI Engines",
      icon: RiStackLine,
      description: "Production-grade UI & application frameworks",
      items: frameworks,
    },
    {
      id: "03",
      title: "Tooling & Infrastructure",
      icon: FaWrench,
      description: "CI/CD, state management & cloud platforms",
      items: tools,
    },
  ];

  return (
    <section className="bg-stone-100/50 dark:bg-[#0B0B0E] py-24 px-6 md:px-12 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="pb-8 mb-12 border-b border-zinc-200 dark:border-zinc-800/80">
          <span className="font-mono-meta text-xs text-amber-600 dark:text-amber-400 uppercase tracking-widest font-semibold block mb-2">
            03 // ENGINEERING MATRIX
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Technical Stack & Ecosystem
          </h2>
        </div>

        {/* Matrix Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-white dark:bg-[#111116] rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 p-6 md:p-8 hover:border-amber-500/50 transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-200/80 dark:border-zinc-800/80">
                  <div>
                    <span className="font-mono-meta text-xs text-amber-600 dark:text-amber-400 font-semibold block mb-1">
                      MATRIX // {card.id}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-zinc-50">
                      {card.title}
                    </h3>
                  </div>
                  <card.icon className="text-zinc-400 dark:text-zinc-600 text-2xl" />
                </div>
                <p className="text-xs font-mono-meta text-zinc-500 dark:text-zinc-400 mb-6 uppercase tracking-wider">
                  {card.description}
                </p>

                {/* Tech Items List */}
                <div className="space-y-3">
                  {card.items.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={index}
                        className="group flex items-center justify-between p-3.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/40 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className="text-xl text-zinc-700 dark:text-zinc-300 group-hover:text-amber-500 transition-colors" />
                          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 font-sans">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono-meta text-zinc-400 dark:text-zinc-500 group-hover:text-amber-600 dark:group-hover:text-amber-400 uppercase tracking-wider">
                          {item.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between font-mono-meta text-[11px] text-zinc-400">
                <span>STATUS: VERIFIED</span>
                <span className="text-amber-600 dark:text-amber-400">
                  100% PRODUCTION READY
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolkitPage;
