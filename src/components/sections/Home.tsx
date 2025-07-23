import { ArrowDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface HomeProps {
  id: string;
  setActiveSection: (section: string) => void;
}

const descriptors = ["Full-Stack Developer", "Problem Solver", "Tech Explorer"];

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

  // Tilt animation on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const moveX = ((clientX - innerWidth / 2) / innerWidth) * 15;
      const moveY = ((clientY - innerHeight / 2) / innerHeight) * 15;

      containerRef.current.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (containerRef.current) {
        containerRef.current.style.transform =
          "perspective(1000px) rotateY(0deg) rotateX(0deg)";
      }
    };
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-[#060a0e] via-[#181e29] to-[#0f1216] "
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-8 w-80 h-80 bg-[rgb(120,198,187)]/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
        <div className="absolute top-32 right-12 w-80 h-80 bg-[rgb(120,198,187)]/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-16 left-16 w-80 h-80 bg-[rgb(120,198,187)]/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-12 right-16 w-80 h-80 bg-[rgb(120,198,187)]/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      </div>

      {/* Main content container */}
      <div
        ref={containerRef}
        className="container mx-auto max-w-7xl px-2 sm:px-4 relative z-10 bg-black/60 backdrop-blur-md rounded-xl shadow-xl p-10  hover:shadow-[0_8px_32px_0_rgba(120,198,187,0.15)] transition-shadow duration-300"
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:scale-105 hover:drop-shadow-[0_0_8px_rgb(6,182,212,0.5)] transition-all duration-300">
              Divyansh Pansari
            </span>
          </motion.h1>

          {/* Typing animation container */}
          <div className="h-8 sm:h-10 mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold inline-block bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-teal-800">
              {text}
              <span
                className={`inline-block w-1 h-6 ml-1 bg-teal-500 ${
                  isTyping ? "animate-blink" : ""
                }`}
              ></span>
            </h2>
          </div>

          {/* Description */}
          <motion.p
            className="text-gray-300 max-w-xl mx-auto mb-8 sm:mb-10 text-base sm:text-lg"
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
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-teal-500 text-black font-semibold rounded-lg shadow-[0_0_10px_rgb(20,184,166,0.5)] hover:bg-emerald-600 hover:shadow-[0_0_15px_rgb(5,150,105,0.7)] hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border-2 border-teal-500 text-teal-500 font-semibold rounded-lg shadow-[0_0_10px_rgb(20,184,166,0.5)] hover:bg-teal-500/10 hover:shadow-[0_0_15px_rgb(6,182,212,0.7)] hover:scale-105 transition-all duration-300"
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
            className="p-3 rounded-full bg-black/30 backdrop-blur-md border border-teal-500/20 hover:scale-110 hover:rotate-12 hover:shadow-[0_0_12px_rgb(6,182,212,0.5)] transition-all duration-300 animate-bounce-slow"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 text-teal-500" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
