import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const icons = [
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/gahbriehel", color: "#0077B5" },
    { icon: <FaGithub />, link: "https://github.com/Gahbriehel", color: "#171515" },
    { icon: <FaTwitter />, link: "https://twitter.com/Gahbriehel1", color: "#1DA1F2" },
    { icon: <FaEnvelope />, link: "mailto:babatise002@gmail.com", color: "#D44638" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 text-gray-800 dark:text-gray-200 font-signika p-0 transition-colors duration-300">
      {/* Heading Text Animation */}
      <motion.h1
        className="relative-content text-4xl md:text-5xl lg:text-5xl mb-10 text-center p-0"
        initial={{ opacity: 0, y: 50 }}  // Initially offscreen and hidden
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 1 }}
        viewport={{ once: true }}  // Trigger animation only once
      >
        Want to work with me?
        <br />
        Let's Connect
      </motion.h1>
      
      {/* Icons Animation */}
      <div className="relative-content flex flex-wrap justify-center gap-8 md:gap-12">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}  // Initially offscreen
            whileInView={{ opacity: 1, y: 0 }}  // Animate when in view
            transition={{ duration: 0.4, delay: index * 0.2 }}  // Stagger delay for each icon
            whileHover={{ scale: 1.4, color: item.color }}
            whileTap={{ scale: 0.9 }}
            className="text-3xl md:text-4xl cursor-pointer"  // Adjusted icon size here
            style={{ transition: "all 0.3s ease" }}
            onClick={() => window.open(item.link, "_blank")}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;