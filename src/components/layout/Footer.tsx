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
      className="relative bg-gradient-to-b from-[#0a0e12] to-black py-16 mt-20 overflow-hidden"
    >
      {/* Wavy background effect */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[rgb(120,198,187)]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[rgb(120,198,187)]/10 rounded-full filter blur-3xl"></div>

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
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0d1117]/80 to-[#1a1f29]/80 border border-[#2a303c] hover:border-[rgb(120,198,187)]/50 p-8 backdrop-blur-sm"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[rgb(120,198,187)]">
              Portfolio
            </h3>
            <p className="text-[#b3bac7] mb-6 max-w-md">
              Building beautiful, functional websites and applications with a
              focus on exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/Divyansh9007"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#1a1f29]/60 border border-[#2a303c] hover:border-[rgb(120,198,187)] text-[#b3bac7] hover:text-[rgb(120,198,187)] transition-all duration-300"
                aria-label="GitHub"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/divyansh-pansari-896a90234/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#1a1f29]/60 border border-[#2a303c] hover:border-[rgb(120,198,187)] text-[#b3bac7] hover:text-[rgb(120,198,187)] transition-all duration-300"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0d1117]/80 to-[#1a1f29]/80 border border-[#2a303c] hover:border-[rgb(120,198,187)]/50 p-8 backdrop-blur-sm"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[rgb(120,198,187)]">
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
                      className="flex items-center text-[#b3bac7] font-medium hover:text-[rgb(120,198,187)] transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 text-[rgb(120,198,187)] opacity-0 group-hover:opacity-100 transition-opacity" />
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
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0d1117]/80 to-[#1a1f29]/80 border border-[#2a303c] hover:border-[rgb(120,198,187)]/50 p-8 backdrop-blur-sm"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[rgb(120,198,187)]">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <motion.a
                href="mailto:divyanshpansari123@gmail.com"
                className="flex items-center text-[#b3bac7] font-medium hover:text-[rgb(120,198,187)] transition-colors group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Mail className="w-5 h-5 mr-2 text-[rgb(120,198,187)]" />
                divyanshpansari123@gmail.com
              </motion.a>
              <p className="text-[#b3bac7] font-medium">
                Available for freelance work and full-time positions.
              </p>
              <motion.button
                className="mt-4 px-4 py-2 bg-[rgb(120,198,187)]/10 border border-[rgb(120,198,187)]/30 text-[rgb(120,198,187)] rounded-lg hover:bg-[rgb(120,198,187)]/20 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://drive.google.com/file/d/1nz1jN3bfGR9x0748A48Y1jwrvRV-IBwk/view?usp=sharing"
                  download
                  target="_blank"
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
          <p className="text-[#b3bac7] text-sm font-medium">
            © {currentYear} Divyansh Pansari. All rights reserved.
          </p>
          <p className="text-[#6b7280] text-xs mt-2">
            Crafted with passion and attention to detail
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
