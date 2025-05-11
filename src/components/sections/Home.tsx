import { ArrowDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface HomeProps {
  id: string;
  setActiveSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ id, setActiveSection }) => {
  // State for typing animation
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  // Update this text to change the typing animation
  const fullText = "Tech Explorer";
  const typingSpeed = 100; // Adjust typing speed (milliseconds)
  const deletingSpeed = 50; // Adjust deleting speed (milliseconds)
  const delayBeforeDelete = 2000; // Delay before text starts deleting (milliseconds)
  const typingRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse move effect for 3D rotation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const moveX = ((clientX - innerWidth / 2) / innerWidth) * 20;
      const moveY = ((clientY - innerHeight / 2) / innerHeight) * 20;

      containerRef.current.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    let direction = "typing";
    let timeoutId: number | null = null;

    const handleTyping = () => {
      if (direction === "typing") {
        if (currentIndex <= fullText.length) {
          setText(fullText.substring(0, currentIndex));
          currentIndex++;
          typingRef.current = window.setTimeout(handleTyping, typingSpeed);
        } else {
          timeoutId = window.setTimeout(() => {
            direction = "deleting";
            typingRef.current = window.setTimeout(handleTyping, deletingSpeed);
          }, delayBeforeDelete);
        }
      } else {
        if (currentIndex > 0) {
          setText(fullText.substring(0, currentIndex - 1));
          currentIndex--;
          typingRef.current = window.setTimeout(handleTyping, deletingSpeed);
        } else {
          direction = "typing";
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-5 w-72 h-72 bg-[rgb(120,198,187)]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[rgb(120,198,187)]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[rgb(120,198,187)]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[rgb(120,198,187)]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      </div>

      {/* Main content container */}
      <div
        ref={containerRef}
        className="container mx-auto px-6 relative z-10 transition-transform duration-300 preserve-3d"
      >
        <motion.div
          className="text-center transform translate-z-50 animate-border glass-effect rounded-2xl p-8 shadow-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main heading - Update with your name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-[rgb(120,198,187)]"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm{" "}
            <span className="text-[rgb(120,198,187)]">Divyansh Pansari</span>
          </motion.h1>

          {/* Typing animation container */}
          <div className="h-8 sm:h-10 mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl text-white font-bold inline-block">
              {text}
              <span
                className={`inline-block w-1 h-6 ml-1 bg-[rgb(120,198,187)] ${
                  isTyping ? "animate-blink" : ""
                }`}
              ></span>
            </h2>
          </div>

          {/* Description - Update with your intro */}
          <motion.p
            className="text-white font-bold max-w-2xl mx-auto mb-10 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            I build digital solutions that blend design, performance, and
            usability to solve real-world problems.
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-[rgb(120,198,187)] text-black font-bold rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-[rgb(120,198,187)] text-white font-bold rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll down button */}
        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button
            onClick={handleScroll}
            className="p-3 rounded-full animate-border glass-effect shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 text-[rgb(120,198,187)]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
