import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="animate-border glass-effect p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-4 text-[rgb(120,198,187)]">
              Portfolio
            </h3>
            <p className="text-white font-bold mb-4 max-w-md">
              Building beautiful, functional websites and applications with a
              focus on user experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Divyansh9007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(120,198,187)] hover:text-[rgb(120,198,187)]/80 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/divyansh-pansari-896a90234/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(120,198,187)] hover:text-[rgb(120,198,187)]/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="animate-border glass-effect p-6 rounded-xl"
          >
            <h3 className="text-lg font-semibold mb-4 text-[rgb(120,198,187)]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-white font-bold hover:text-[rgb(120,198,187)] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white font-bold hover:text-[rgb(120,198,187)] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white font-bold hover:text-[rgb(120,198,187)] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-white font-bold hover:text-[rgb(120,198,187)] transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white font-bold hover:text-[rgb(120,198,187)] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="animate-border glass-effect p-6 rounded-xl"
          >
            <h3 className="text-lg font-semibold mb-4 text-[rgb(120,198,187)]">
              Contact
            </h3>
            <div className="space-y-2">
              <p className="flex items-center text-white font-bold">
                <Mail className="w-5 h-5 mr-2 text-[rgb(120,198,187)]" />
                <span>divyanshpansari123@gmail.com</span>
              </p>
              <p className="text-white font-bold">
                Available for freelance work and full-time positions.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgb(120,198,187)]/30 text-center">
          <p className="text-white font-bold text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
