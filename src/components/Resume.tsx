import { useState } from "react";
import {
  FaDownload,
  FaArrowUpRightFromSquare,
  FaFilePdf,
} from "react-icons/fa6";

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const resumeViewUrl = "/resume.pdf";

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8">
      {/* Top Header & Actions Toolbar */}
      <div className="w-full max-w-5xl mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-stone-100/80 dark:bg-zinc-900/60 p-4 sm:p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <FaFilePdf className="text-xl sm:text-2xl" />
          </div>
          <div>
            <h1 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Curriculum Vitae
            </h1>
            <p className="font-mono-meta text-xs text-zinc-500 dark:text-zinc-400">
              resume.pdf • Preview & Download
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href={resumeViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-zinc-750 font-mono-meta text-xs tracking-wider transition-all"
          >
            <FaArrowUpRightFromSquare className="text-xs" />
            <span>Open in Tab</span>
          </a>

          <a
            href={resumeViewUrl}
            download="Gahbriehel_Resume.pdf"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-stone-950 font-mono-meta text-xs tracking-wider font-semibold shadow-md shadow-amber-500/10 transition-all"
          >
            <FaDownload className="text-xs" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* PDF Container */}
      <div className="w-full max-w-5xl h-[78vh] sm:h-[82vh] relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl bg-white dark:bg-[#121216]">
        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-stone-50/90 dark:bg-[#0B0B0E]/90 backdrop-blur-sm transition-opacity duration-300">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative flex h-12 w-12 items-center justify-center">
                <div className="animate-spin absolute h-12 w-12 rounded-full border-4 border-amber-500/20 border-t-amber-500"></div>
                <FaFilePdf className="text-amber-500 text-lg animate-pulse" />
              </div>
              <div className="text-center space-y-1">
                <p className="font-mono-meta text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  Loading Resume PDF...
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Preparing interactive preview
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PDF Frame */}
        <iframe
          src={`${resumeViewUrl}#toolbar=1`}
          className="w-full h-full border-0"
          title="Resume PDF"
          onLoad={() => setIsLoading(false)}
        >
          <p className="p-6 text-center text-zinc-600 dark:text-zinc-400">
            Your browser does not support embedding PDF files. You can{" "}
            <a
              href={resumeViewUrl}
              download="Gahbriehel_Resume.pdf"
              className="text-amber-500 underline font-medium"
            >
              click here to download the PDF
            </a>
            .
          </p>
        </iframe>
      </div>
    </div>
  );
};

export default Resume;
