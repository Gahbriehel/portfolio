const Footer = () => {
  return (
    <footer className="relative z-10 w-full border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-[#08080A] py-12 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono-meta text-xs text-zinc-500 dark:text-zinc-400">
        <div className="flex items-center gap-3">
          <span className="font-serif font-bold text-sm tracking-tight text-zinc-900 dark:text-stone-100">
            GB.
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">|</span>
          <span className="uppercase tracking-wider text-[11px]">
            Design-Engineer Portfolio
          </span>
        </div>

        <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest relative z-20">
          <a
            href="https://github.com/Gahbriehel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer transition-colors relative z-20"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/gahbriehel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer transition-colors relative z-20"
          >
            LinkedIn
          </a>
          <a
            href="mailto:babatise002@gmail.com"
            className="hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer transition-colors relative z-20"
          >
            Email
          </a>
        </div>

        <div className="text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} GABRIEL. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
