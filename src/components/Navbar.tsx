import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BsMoon } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaCode, FaGitAlt, FaLaptopCode } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const fonts = ["font-serif", "font-signika", "font-sans"];
  const [currentFont, setCurrentFont] = useState(fonts[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [debugKey, setDebugKey] = useState(0);
  console.log(currentFont);

  const pathname = usePathname();
  const router = useRouter();

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
  }, []);

  // Apply theme to <html> and save to localStorage
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    // Force a key update to re-render (helps with any caching)
    setDebugKey((prev) => prev + 1);
  }, [theme]);

  // Change font quickly
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
      setCurrentFont(randomFont);
    }, 100);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 🧠 Scroll helper — ensures scroll works even after navigation
  const handleScrollNav = (section: string): void => {
    if (pathname !== "/") {
      router.push("/"); // Go to homepage first
      // Wait a tick for React to render home sections
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 500,
          smooth: true,
          offset: -50,
        });
      }, 400);
    } else {
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -50,
      });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      return newTheme;
    });
  };

  useEffect(() => {}, [debugKey]);

  return (
    <nav
      key={debugKey}
      className="sticky top-0 bg-stone-50/80 dark:bg-[#0B0B0E]/80 text-zinc-900 dark:text-zinc-100 backdrop-blur-md z-50 py-4 px-6 md:px-12 border-b border-zinc-200/60 dark:border-zinc-800/60 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logotype */}
        <div className="flex items-center gap-4">
          <Link href="/" className="group flex items-center gap-2">
            <span className="font-serif text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-amber-500 transition-colors">
              GAHBRIEHEL
            </span>
            <span className="font-mono-meta text-xs text-amber-600 dark:text-amber-400 font-medium">
              [IO]
            </span>
          </Link>

          {/* Availability Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-mono-meta">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span>AVAILABLE FOR WORK</span>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <BsMoon className="text-lg" />
            ) : (
              <span className="text-lg">☀️</span>
            )}
          </button>

          <button
            className="p-2 text-zinc-800 dark:text-zinc-200 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <motion.div
              className="w-6 h-0.5 bg-current mb-1.5"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 8 : 0,
              }}
              transition={{ duration: 0.25 }}
            ></motion.div>
            <motion.div
              className="w-6 h-0.5 bg-current mb-1.5"
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.25 }}
            ></motion.div>
            <motion.div
              className="w-6 h-0.5 bg-current"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
              }}
              transition={{ duration: 0.25 }}
            ></motion.div>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 font-sans text-sm font-medium tracking-wide">
            {[
              {
                name: "RESUME",
                link: "/resume",
                type: "router",
              },
              {
                name: "SELECTED WORK",
                link: "projects",
                type: "scroll",
              },
              {
                name: "TOOLKIT",
                link: "toolkit",
                type: "scroll",
              },
              {
                name: "CONTACT",
                link: "contact",
                type: "scroll",
              },
            ].map(({ name, link, type }) => (
              <li key={link} className="relative group">
                {type === "router" ? (
                  <Link
                    href={link}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors uppercase font-mono-meta text-xs tracking-wider"
                  >
                    <span>{name}</span>
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-amber-500 transition-all duration-300 ${
                        pathname === link ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleScrollNav(link)}
                    className="cursor-pointer text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors uppercase font-mono-meta text-xs tracking-wider"
                  >
                    <span>{name}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )}
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/40 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <BsMoon className="text-base" />
            ) : (
              <span className="text-base">☀️</span>
            )}
          </button>
        </div>

        {/* Mobile Menu — Side Drawer */}
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-[80%] max-w-xs flex flex-col md:hidden border-l border-zinc-200 dark:border-zinc-800"
              style={{ background: theme === "dark" ? "#0B0B0E" : "#FAFAFA" }}
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="flex items-center justify-between px-6 py-6 border-b border-zinc-200 dark:border-zinc-800">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-lg font-bold text-zinc-900 dark:text-zinc-100"
                >
                  GAHBRIEHEL
                  <span className="text-amber-500 font-mono-meta text-xs">
                    .IO
                  </span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <IoClose size={22} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center px-6 gap-2">
                {[
                  {
                    label: "RESUME",
                    icon: <FaLaptopCode />,
                    link: "/resume",
                    type: "router",
                  },
                  {
                    label: "SELECTED WORK",
                    icon: <FaGitAlt />,
                    link: "projects",
                    type: "scroll",
                  },
                  {
                    label: "TOOLKIT",
                    icon: <FaCode />,
                    link: "toolkit",
                    type: "scroll",
                  },
                  {
                    label: "CONTACT",
                    icon: <MdOutlineMail />,
                    link: "contact",
                    type: "scroll",
                  },
                ].map(({ label, icon, link, type }, i) => {
                  const itemClass =
                    "flex items-center gap-4 w-full px-4 py-4 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 transition-all font-mono-meta text-sm tracking-wider";
                  return (
                    <motion.div
                      key={link}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.05 + i * 0.05,
                        duration: 0.25,
                      }}
                    >
                      {type === "router" ? (
                        <Link
                          href={link}
                          className={itemClass}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="text-amber-500 text-lg">{icon}</span>
                          {label}
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleScrollNav(link)}
                          className={`cursor-pointer ${itemClass}`}
                        >
                          <span className="text-amber-500 text-lg">{icon}</span>
                          {label}
                        </button>
                      )}
                    </motion.div>
                  );
                })}
              </nav>

              <div className="px-6 py-6 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono-meta">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span>AVAILABLE FOR WORK</span>
                </div>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-mono-meta text-xs"
                >
                  {theme === "light" ? (
                    <>
                      <BsMoon className="text-base" />
                      <span>DARK MODE</span>
                    </>
                  ) : (
                    <>
                      <span className="text-base">☀️</span>
                      <span>LIGHT MODE</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
