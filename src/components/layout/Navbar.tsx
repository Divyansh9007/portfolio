import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Github, Linkedin } from "lucide-react";

import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <motion.a
            href="#home"
            className="text-2xl font-bold text-[rgb(120,198,187)]"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`text-sm font-bold relative pb-1 transition-colors hover:text-[rgb(120,198,187)] ${
                      activeSection === link.href.substring(1)
                        ? "text-[rgb(120,198,187)] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[rgb(120,198,187)]"
                        : "text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4">
              <motion.a
                href="https://github.com/Divyansh9007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="w-5 h-5 text-[rgb(120,198,187)]" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/divyansh-pansari-896a90234/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="w-5 h-5 text-[rgb(120,198,187)]" />
              </motion.a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md bg-black border border-[rgb(120,198,187)]/30"
              aria-label="Open menu"
              whileHover={{ scale: 1.1 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[rgb(120,198,187)]" />
              ) : (
                <Menu className="w-6 h-6 text-[rgb(120,198,187)]" />
              )}
            </motion.button>
          </div>
        </nav>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-black shadow-lg py-4 px-6 z-50 border-t border-[rgb(120,198,187)]/30"
          >
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`block py-2 text-base font-bold ${
                      activeSection === link.href.substring(1)
                        ? "text-[rgb(120,198,187)]"
                        : "text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-6 mt-6 pt-6 border-t border-[rgb(120,198,187)]/30">
              <a
                href="https://github.com/Divyansh9007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-[rgb(120,198,187)]" />
              </a>
              <a
                href="https://www.linkedin.com/in/divyansh-pansari-896a90234/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[rgb(120,198,187)]" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
