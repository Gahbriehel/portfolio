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
      className="sticky top-0 bg-white/80 dark:bg-gray-900/80 text-gray-800 dark:text-gray-200 shadow-md z-50 p-4 md:px-10 border-b border-gray-200/50 dark:border-gray-800/50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="mt-2 text-2xl font flex items-center gap-1">
          {/* <span role="img" aria-label="Christmas hat" className="mr-2">
            🎅🏾
          </span> */}
          <Link href="/" className="flex items-center gap-1">
            gahbriehel.
            <motion.span
              className={`transition-all duration-10 ${currentFont}`}
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.2, 1],
                transition: {
                  duration: 0.5,
                  repeat: Infinity,
                },
              }}
            >
              io
            </motion.span>
          </Link>
        </h1>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="cursor-pointer text-2xl focus:outline-none p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <BsMoon className="text-xl" />
            ) : (
              <span className="text-xl">☀️</span>
            )}
          </button>

          <button
            className="text-3xl focus:outline-none relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <motion.div
              className="w-5 h-0.5 bg-current mb-1 rounded-full"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 6 : 0,
              }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            <motion.div
              className="w-5 h-0.5 bg-current mb-1 rounded-full"
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            <motion.div
              className="w-5 h-0.5 bg-current rounded-full"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -6 : 0,
              }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {[
            {
              name: (
                <>
                  <span className="flex items-center">
                    <FaLaptopCode className="inline mr-1 text-lg" /> Resume
                  </span>
                </>
              ),
              link: "/resume",
              type: "router",
            },
            {
              name: (
                <>
                  <span className="flex items-center">
                    <FaGitAlt className="inline mr-1 text-lg" /> Projects
                  </span>
                </>
              ),
              link: "projects",
              type: "scroll",
            },
            {
              name: (
                <>
                  <span className="flex items-center">
                    <FaCode className="inline mr-1 text-lg" /> Toolkit
                  </span>
                </>
              ),
              link: "toolkit",
              type: "scroll",
            },
            {
              name: (
                <>
                  <span className="flex items-center">
                    <MdOutlineMail className="inline mr-1 text-lg" />
                    Contact
                  </span>
                </>
              ),
              link: "contact",
              type: "scroll",
            },
          ].map(({ name, link, type }) => (
            <li key={link} className="relative group">
              {type === "router" ? (
                <Link
                  href={link}
                  className="hover:text-[#083050] dark:hover:text-gray-500 text-lg relative transition-colors"
                >
                  <span>{name}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                      pathname === link
                        ? "w-full bg-blue-100"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ) : (
                <button
                  onClick={() => handleScrollNav(link)}
                  className="cursor-pointer hover:text-[#083050] dark:hover:text-gray-500 text-lg relative transition-colors"
                >
                  <span>{name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu — Side Drawer */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-[75%] max-w-xs flex flex-col md:hidden"
              style={{ background: theme === "dark" ? "#0f172a" : "#ffffff" }}
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold tracking-tight text-gray-800 dark:text-gray-100"
                >
                  gahbriehel<span className="text-green-500">.io</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <IoClose size={22} />
                </button>
              </div>

              {/* Nav Items */}
              <nav className="flex-1 flex flex-col justify-center px-6 gap-1">
                {[
                  {
                    label: "Resume",
                    icon: <FaLaptopCode />,
                    link: "/resume",
                    type: "router",
                  },
                  {
                    label: "Projects",
                    icon: <FaGitAlt />,
                    link: "projects",
                    type: "scroll",
                  },
                  {
                    label: "Toolkit",
                    icon: <FaCode />,
                    link: "toolkit",
                    type: "scroll",
                  },
                  {
                    label: "Contact",
                    icon: <MdOutlineMail />,
                    link: "contact",
                    type: "scroll",
                  },
                ].map(({ label, icon, link, type }, i) => {
                  const itemClass =
                    "group flex items-center gap-4 w-full px-4 py-4 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-500/10 hover:text-green-600 dark:hover:text-green-400 transition-all duration-200 text-lg font-medium";
                  return (
                    <motion.div
                      key={link}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.06 + i * 0.055,
                        duration: 0.28,
                        ease: "easeOut",
                      }}
                    >
                      {type === "router" ? (
                        <Link
                          href={link}
                          className={itemClass}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="text-green-500 dark:text-green-400 text-xl flex-shrink-0">
                            {icon}
                          </span>
                          {label}
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleScrollNav(link)}
                          className={`cursor-pointer ${itemClass}`}
                        >
                          <span className="text-green-500 dark:text-green-400 text-xl flex-shrink-0">
                            {icon}
                          </span>
                          {label}
                        </button>
                      )}
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer Footer — Theme toggle */}
              <div className="px-6 py-5 border-t border-gray-100 dark:border-gray-800">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
                >
                  {theme === "light" ? (
                    <>
                      <BsMoon className="text-lg" />
                      <span>Switch to Dark Mode</span>
                    </>
                  ) : (
                    <>
                      <span className="text-lg">☀️</span>
                      <span>Switch to Light Mode</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </>
        )}

        {/* Desktop Theme Switcher */}
        <div
          className="hidden md:block cursor-pointer text-2xl"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <span role="img" aria-label="Switch to dark mode">
              <BsMoon />
            </span>
          ) : (
            <span role="img" aria-label="Switch to light mode">
              ☀️
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
