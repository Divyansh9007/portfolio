import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        isScrolled ? "bg-black/90 backdrop-blur-lg shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-[rgb(120,198,187)] to-cyan-400 bg-clip-text text-transparent"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`relative px-4 py-2 text-sm font-bold rounded-lg transition-all ${
                      activeSection === link.href.substring(1)
                        ? "text-white bg-[rgb(120,198,187)]/10 border border-[rgb(120,198,187)] shadow-lg shadow-[rgb(120,198,187)]/20"
                        : "text-white/80 hover:text-white hover:bg-black/30 hover:border hover:border-[rgb(120,198,187)]/30"
                    }`}
                  >
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <motion.span
                        className="absolute inset-0 border border-[rgb(120,198,187)] rounded-lg"
                        layoutId="activeNavItem"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Social Icons - Now Larger */}
            <div className="flex items-center space-x-4 ml-4">
              <motion.a
                href="https://github.com/Divyansh9007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full bg-[#1a1f29] border border-[#2a303c] hover:border-[rgb(120,198,187)] text-white transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
                <span className="absolute inset-0 bg-[rgb(120,198,187)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/divyansh-pansari-896a90234/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full bg-[#1a1f29] border border-[#2a303c] hover:border-[rgb(120,198,187)] text-white transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
                <span className="absolute inset-0 bg-[rgb(120,198,187)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="https://instagram.com/divyansh22_11/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 rounded-full bg-[#1a1f29] border border-[#2a303c] hover:border-[rgb(120,198,187)] text-white transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-6 h-6" />
                <span className="absolute inset-0 bg-[rgb(120,198,187)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <div className="flex space-x-3 md:space-x-4">
              <motion.a
                href="https://github.com/Divyansh9007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 md:p-3 rounded-full bg-[#1a1f29] border border-[#2a303c] text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5 md:w-6 md:h-6" />
              </motion.a>
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 md:p-3 rounded-full bg-black/50 border border-[rgb(120,198,187)]/30 backdrop-blur-sm"
                aria-label="Open menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 md:w-6 md:h-6 text-[rgb(120,198,187)]" />
                ) : (
                  <Menu className="w-5 h-5 md:w-6 md:h-6 text-[rgb(120,198,187)]" />
                )}
              </motion.button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg shadow-2xl py-6 px-6 z-50 border-t border-[rgb(120,198,187)]/30"
            >
              <ul className="space-y-5">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className={`block px-4 py-3 text-lg font-bold rounded-lg transition-all ${
                        activeSection === link.href.substring(1)
                          ? "text-white bg-[rgb(120,198,187)]/10 border border-[rgb(120,198,187)]"
                          : "text-white/80 hover:text-white hover:bg-black/30 hover:border hover:border-[rgb(120,198,187)]/30"
                      }`}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-[rgb(120,198,187)]/30">
                <motion.a
                  href="https://github.com/Divyansh9007"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-full bg-[#1a1f29] border border-[#2a303c] hover:border-[rgb(120,198,187)] text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/divyansh-pansari-896a90234/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-full bg-[#1a1f29] border border-[#2a303c] hover:border-[rgb(120,198,187)] text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/divyansh22_11/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="Instagram"
                  className="p-3 rounded-full bg-[#1a1f29] border border-[#2a303c] hover:border-[rgb(120,198,187)] text-white transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
