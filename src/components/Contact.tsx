import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { useState, useEffect } from "react";
import Toast from "./UI/Toast";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  useEffect(() => {
    emailjs.init({ publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY });
  }, []);

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
    isVisible: boolean;
  }>({
    message: "",
    type: "success",
    isVisible: false,
  });

  const socialLinks = [
    {
      name: "LinkedIn",
      handle: "in/gahbriehel",
      link: "https://linkedin.com/in/gahbriehel",
      icon: <FaLinkedin className="text-lg" />,
    },
    {
      name: "GitHub",
      handle: "@Gahbriehel",
      link: "https://github.com/Gahbriehel",
      icon: <FaGithub className="text-lg" />,
    },
    {
      name: "Twitter / X",
      handle: "@Gahbriehel1",
      link: "https://twitter.com/Gahbriehel1",
      icon: <FaTwitter className="text-lg" />,
    },
    {
      name: "Direct Email",
      handle: "babatise002@gmail.com",
      link: "mailto:babatise002@gmail.com",
      icon: <FaEnvelope className="text-lg" />,
    },
  ];

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type, isVisible: true });
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800/80"
    >
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />

      {/* Editorial Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 font-mono-meta text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-3">
          <span className="w-2 h-2 rounded-full bg-amber-500 inline-block animate-pulse"></span>
          <span>[ 04 // INITIATE DIALOGUE ]</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-zinc-900 dark:text-stone-100">
            Let's Build{" "}
            <span className="italic font-normal text-amber-600 dark:text-amber-400">
              Together.
            </span>
          </h2>
          <p className="font-mono-meta text-xs text-zinc-500 dark:text-zinc-400 max-w-md uppercase tracking-wider leading-relaxed">
            Available for select frontend architecture, design engineering
            contracts & full-time positions.
          </p>
        </div>
      </div>

      {/* Split Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info & Social Matrix */}
        <div className="lg:col-span-5 space-y-8">
          {/* Status Card */}
          <div className="p-6 bg-zinc-50 dark:bg-[#0E0E12] border border-zinc-200 dark:border-zinc-800 rounded-none relative">
            <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-amber-500"></span>
            <div className="font-mono-meta text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
              CURRENT STATUS
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-stone-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Open to New Projects & Contracts
            </div>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
              Currently accepting inquiry calls for web application development,
              interactive UI systems, and design system engineering.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 font-mono-meta text-xs">
            <div className="flex justify-between items-center py-3 border-b border-zinc-200 dark:border-zinc-800">
              <span className="text-zinc-400 dark:text-zinc-500 uppercase">
                Location
              </span>
              <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                Remote / UTC+1
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-zinc-200 dark:border-zinc-800">
              <span className="text-zinc-400 dark:text-zinc-500 uppercase">
                Response Time
              </span>
              <span className="text-amber-600 dark:text-amber-400 font-medium">
                &lt; 24 Hours
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-zinc-200 dark:border-zinc-800">
              <span className="text-zinc-400 dark:text-zinc-500 uppercase">
                Direct Mail
              </span>
              <a
                href="mailto:babatise002@gmail.com"
                className="text-zinc-800 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer transition-colors font-medium"
              >
                babatise002@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links Matrix */}
          <div>
            <h3 className="font-mono-meta text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
              // CONNECT ON SOCIAL
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-zinc-50 dark:bg-[#0E0E12] border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 cursor-pointer transition-all relative z-10"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-500 dark:text-zinc-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {item.icon}
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-zinc-800 dark:text-stone-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {item.name}
                      </div>
                      <div className="font-mono-meta text-[10px] text-zinc-400 dark:text-zinc-500">
                        {item.handle}
                      </div>
                    </div>
                  </div>
                  <FaArrowUpRightFromSquare className="text-[10px] text-zinc-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: High-Craft Editorial Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-zinc-50 dark:bg-[#0B0B0E] border border-zinc-200 dark:border-zinc-800 p-8 md:p-10 relative"
          >
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-8">
              <h3 className="font-serif text-2xl text-zinc-900 dark:text-stone-100 font-light">
                Send a Message
              </h3>
              <span className="font-mono-meta text-[10px] text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                [ FORM // 01 ]
              </span>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const btn = form.querySelector(
                  'button[type="submit"]',
                ) as HTMLButtonElement;
                const originalText = btn.innerText;

                btn.innerText = "SENDING INQUIRY...";
                btn.disabled = true;

                emailjs
                  .sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                    form,
                  )
                  .then(
                    () => {
                      showToast("Message sent successfully!", "success");
                      form.reset();
                    },
                    (error) => {
                      console.error("FAILED...", error);
                      showToast("Failed to send message.", "error");
                    },
                  )
                  .finally(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                  });
              }}
              className="space-y-6"
            >
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono-meta text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-[#141419] border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-stone-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors font-sans"
                    placeholder="e.g. Sarah Jenkins"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono-meta text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-[#141419] border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-stone-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors font-sans"
                    placeholder="s.jenkins@company.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-mono-meta text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2"
                >
                  Subject / Inquiry Type *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-[#141419] border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-stone-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors font-sans"
                  placeholder="Frontend Development / Design System Consulting"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono-meta text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2"
                >
                  Message Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-[#141419] border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-stone-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors resize-none font-sans"
                  placeholder="Please describe project scope, timelines, or role details..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-zinc-900 dark:bg-stone-100 hover:bg-amber-600 dark:hover:bg-amber-400 text-stone-100 dark:text-zinc-900 hover:text-white dark:hover:text-zinc-900 font-mono-meta text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>SEND INQUIRY</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
