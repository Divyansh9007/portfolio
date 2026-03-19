import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <footer
      ref={ref}
      className="relative bg-black py-16 mt-20 overflow-hidden border-t border-gray-800"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Portfolio Section */}
          <motion.div
            variants={itemVariants}
            className="rounded-lg bg-black/50 border border-gray-700 hover:border-teal-500/50 p-8 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-teal-400">
              Portfolio
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Building beautiful, functional websites and applications with a
              focus on exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/Divyansh9007"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-black/50 border border-gray-700 hover:border-teal-500 text-gray-400 hover:text-teal-400 transition-all duration-300"
                aria-label="GitHub"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/divyansh-pansari-896a90234/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-black/50 border border-gray-700 hover:border-teal-500 text-gray-400 hover:text-teal-400 transition-all duration-300"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            variants={itemVariants}
            className="rounded-lg bg-black/50 border border-gray-700 hover:border-teal-500/50 p-8 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-teal-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Experience", "Contact"].map(
                (link) => (
                  <motion.li
                    key={link}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="flex items-center text-gray-300 font-medium hover:text-teal-400 transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={itemVariants}
            className="rounded-lg bg-black/50 border border-gray-700 hover:border-teal-500/50 p-8 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-teal-400">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <motion.a
                href="mailto:divyanshpansari123@gmail.com"
                className="flex items-center text-gray-300 font-medium hover:text-teal-400 transition-colors group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Mail className="w-5 h-5 mr-2 text-teal-400" />
                divyanshpansari123@gmail.com
              </motion.a>
              <p className="text-gray-300 font-medium">
                Available for freelance work and full-time positions.
              </p>
              <motion.button
                className="mt-4 px-4 py-2 bg-teal-500 text-black rounded-lg hover:bg-teal-600 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://drive.google.com/file/d/1T81lu_aXVzP3_nJs54bof2L-GXSVyQtN/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Download Resume
                </a>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-[rgb(120,198,187)]/20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-300 text-sm font-medium">
            © {currentYear} Divyansh Pansari. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
