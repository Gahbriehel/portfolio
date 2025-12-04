import { FaReact, FaSass, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaWrench, FaCode } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiRedux, SiMui, SiPostman, SiVite, SiVercel, SiFramer } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiStackLine } from "react-icons/ri";



const ToolkitPage = () => {
  const coreSkills = [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Scss", icon: FaSass, color: "text-red-600" },
  ];

  const frameworks = [
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900 dark:text-white" },
    { name: "Framer motion", icon: SiFramer, color: "text-blue-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Material UI", icon: SiMui, color: "text-blue-600" },
  ];

  const tools = [
    { name: "Git", icon: FaGitAlt, color: "text-orange-400" },
    { name: "Redux", icon: SiRedux, color: "text-orange-400" },
    { name: "Vercel", icon: SiVercel, color: "text-gray-900 dark:text-white" },
    { name: "Firebase", icon: IoLogoFirebase, color: "text-yellow-500" },
    { name: "Vite", icon: SiVite, color: "text-purple-500" },
    { name: "Postman", icon: SiPostman, color: "text-orange-600" },
  ];

  const cardData = [
    {
      id: 1,
      title: "Core",
      icon: FaCode,
      description: "Building blocks of modern web development",
      items: coreSkills,
      headerClass: "bg-gradient-to-r from-blue-500 to-purple-600",
      shadowColor: "shadow-blue-500/40 hover:shadow-purple-600/30"
    },
    {
      id: 2,
      title: "Frameworks & Libraries",
      icon: RiStackLine,
      description: "Powerful tools for efficient development",
      items: frameworks,
      headerClass: "bg-gradient-to-r from-emerald-500 to-teal-600",
      shadowColor: "shadow-emerald-500/40 hover:shadow-teal-600/30"
    },
    {
      id: 3,
      title: "Tools & Platforms",
      icon: FaWrench,
      description: "Infrastructure and deployment solutions",
      items: tools,
      headerClass: "bg-gradient-to-r from-orange-500 to-rose-600",
      shadowColor: "shadow-orange-500/40 hover:shadow-rose-600/30"
    },
  ];

  return (
    <div className="relative z-10 dark:bg-gray-900 min-h-screen p-4">
      <div>
        <h1 className="relative-content text-4xl font-semibold text-gray-800 dark:text-gray-200 pt-10 ml-6 font-signika">
          Tech Toolkit
        </h1>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto mt-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${card.shadowColor}`}
            >
              {/* Card Header */}
              <div className={`p-6 text-white shadow-lg rounded-t-2xl	 ${card.headerClass} flex items-center gap-4`}>
                <div><card.icon className="text-5xl"/></div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                  <p className="text-sm opacity-90">{card.description}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="space-y-3">
                  {card.items.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700  dark:hover:border-gray-600 hover:scale-105 hover:translate-y-1 transition-all duration-200 bg-gray-50 dark:bg-gray-700/50 shadow hover:shadow-eal-100/40 cursor-pointer"
                      >
                        <div className="text-2xl">
                          <IconComponent className={item.color} />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolkitPage;