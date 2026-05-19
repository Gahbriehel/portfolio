import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import Toast from "./UI/Toast";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

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

  const icons = [
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/gahbriehel",
      color: "#0077B5",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/Gahbriehel",
      color: "#171515",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/Gahbriehel1",
      color: "#1DA1F2",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:babatise002@gmail.com",
      color: "#D44638",
    },
  ];

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type, isVisible: true });
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  return (
    <>
      <div className="relative z-10 dark:bg-gray-900 min-h-screen p-4">
        <div>
          <h1 className="relative-content text-4xl font-semibold text-gray-800 dark:text-gray-200 pt-10 ml-6 font-signika text-4xl">
            Let's Connect
          </h1>
        </div>

        <div className="min-h-screen flex flex-col items-center text-gray-800 dark:text-gray-200 font-signika p-4 md:p-8 transition-colors duration-300 ">
          <Toast
            message={toast.message}
            type={toast.type}
            isVisible={toast.isVisible}
            onClose={closeToast}
          />

          {/* Header Section */}
          <motion.div
            className="text-center w-full lg:w-2/3 mb-12 mt-10 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              I'm always excited to work on new projects and collaborate with
              amazing people. Whether you have a project in mind, need technical
              consultation, or just want to say hello, I'd love to hear from
              you!
            </p>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 bg-white/30 dark:bg-black/20 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200/20 mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Send a Message
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const btn = form.querySelector(
                  'button[type="submit"]',
                ) as HTMLButtonElement;
                const originalText = btn.innerText;

                btn.innerText = "Sending...";
                btn.disabled = true;

                console.log("KEY:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

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
              className="flex flex-col gap-8"
            >
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 pl-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-4 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0077B5] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 pl-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-4 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0077B5] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2 pl-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full p-4 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0077B5] transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 pl-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full p-4 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0077B5] transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-[#0077B5] hover:bg-[#006097] text-white font-bold text-sm p-4 rounded-lg transition-colors duration-300 transform hover:scale-[1.01] shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Reach Me Section */}
          <motion.div
            className="flex flex-col items-center gap-6 mb-12 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold opacity-80 uppercase tracking-widest">
              Reach Me
            </h3>
            <div className="flex gap-8 md:gap-12">
              {icons.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, color: item.color }}
                  whileTap={{ scale: 0.9 }}
                  className="text-4xl md:text-5xl cursor-pointer text-gray-500 dark:text-gray-400"
                  style={{ transition: "color 0.3s ease" }}
                  onClick={() => window.open(item.link, "_blank")}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
