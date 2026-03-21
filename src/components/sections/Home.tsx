import { ArrowDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface HomeProps {
  id: string;
  setActiveSection: (section: string) => void;
}

const descriptors = [
  "AI and Cloud",
  "Machine Learning Enthusiast",
  "Tech Explorer",
];

const Home: React.FC<HomeProps> = ({ id, setActiveSection }) => {
  // State for typing animation
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentDescriptorIndex, setCurrentDescriptorIndex] = useState(0);
  const typingSpeed = 80; // Typing speed (milliseconds)
  const deletingSpeed = 40; // Deleting speed (milliseconds)
  const delayBeforeDelete = 1500; // Delay before deleting (milliseconds)
  const typingRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Typing and backspace animation
  useEffect(() => {
    let currentIndex = 0;
    let direction = "typing";
    let timeoutId: number | null = null;
    const currentDescriptor = descriptors[currentDescriptorIndex];

    const handleTyping = () => {
      if (direction === "typing") {
        if (currentIndex <= currentDescriptor.length) {
          setText(currentDescriptor.substring(0, currentIndex));
          currentIndex++;
          typingRef.current = window.setTimeout(handleTyping, typingSpeed);
          setIsTyping(true);
        } else {
          timeoutId = window.setTimeout(() => {
            direction = "deleting";
            typingRef.current = window.setTimeout(handleTyping, deletingSpeed);
          }, delayBeforeDelete);
        }
      } else {
        if (currentIndex > 0) {
          setText(currentDescriptor.substring(0, currentIndex - 1));
          currentIndex--;
          typingRef.current = window.setTimeout(handleTyping, deletingSpeed);
          setIsTyping(false);
        } else {
          direction = "typing";
          setCurrentDescriptorIndex((prev) => (prev + 1) % descriptors.length);
          timeoutId = window.setTimeout(() => {
            typingRef.current = window.setTimeout(handleTyping, typingSpeed);
          }, 500);
        }
      }
    };

    typingRef.current = window.setTimeout(handleTyping, typingSpeed);

    return () => {
      if (typingRef.current) window.clearTimeout(typingRef.current);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [currentDescriptorIndex]);

  // Removed tilt animation for less flashy UI
  useEffect(() => {
    // No-op - removed mouse move tilt animation
    return () => {};
  }, []);

  // Smooth scroll to About section
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
      setActiveSection("about");
    }
  };

  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#141820] to-[#0f1216]"
    >
      {/* Subtle background blobs - reduced opacity and blur */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[rgb(120,198,187)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-16 w-72 h-72 bg-[rgb(120,198,187)]/8 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[rgb(120,198,187)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animation-delay-4000"></div>
      </div>

      {/* Main content container */}
      <div
        ref={containerRef}
        className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10 bg-black/40 backdrop-blur-sm rounded-lg shadow-lg p-8 sm:p-12"
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
              Divyansh Pansari
            </span>
          </motion.h1>

          {/* Typing animation container */}
          <div className="h-10 mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-teal-300">
              {text}
              <span
                className={`inline-block w-1 h-6 ml-1 bg-teal-400 ${
                  isTyping ? "animate-blink" : ""
                }`}
              ></span>
            </h2>
          </div>

          {/* Description */}
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Crafting innovative digital solutions that seamlessly blend elegant
            design, high performance, and intuitive usability to tackle
            real-world challenges.
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-600 transition-colors duration-300"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-teal-500 text-teal-400 font-semibold rounded-lg hover:bg-teal-500/10 transition-colors duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll down button */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button
            onClick={handleScroll}
            className="p-3 rounded-full bg-black/40 border border-teal-500/40 hover:bg-black/60 transition-colors duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 text-teal-400" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
