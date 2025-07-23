import { useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Instagram,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useInView } from "react-intersection-observer";

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace these with your EmailJS credentials
      // Get these from your EmailJS dashboard:
      // 1. YOUR_SERVICE_ID: Email service ID (e.g., gmail, custom SMTP)
      // 2. YOUR_TEMPLATE_ID: Email template ID
      // 3. YOUR_PUBLIC_KEY: Your public key
      const result = await emailjs.send(
        "service_vjco5wi",
        "template_ocdr4yb",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "TDQTn0t6Shv42HQQw"
      );

      if (result.status === 200) {
        toast.success("Message sent successfully!");
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id={id}
      ref={ref}
      className="py-20 px-6 bg-gradient-to-r from-[#060a0e] via-[#181e29] to-[#0f1216]"
    >
      <Toaster position="bottom-right" />
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[rgb(120,198,187)] via-cyan-400 to-white bg-clip-text text-transparent drop-shadow-lg tracking-tight">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[rgb(120,198,187)] mx-auto mb-8"></div>
          <p className="text-white font-bold max-w-3xl mx-auto text-lg">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Contact Info */}
          <div className="space-y-6">
            <Tilt
              perspective={1000}
              scale={1.02}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#78c6bb"
              glarePosition="all"
              glareBorderRadius="12px"
              className="transform-gpu"
            >
              <motion.div
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0d1117]/80 to-[#1a1f29]/80 border border-[#2a303c] hover:border-[rgb(120,198,187)]/50 p-8 backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,198,187,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-[rgb(120,198,187)] transition-colors duration-300">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {/* Email */}
                  <motion.div
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="p-3 rounded-lg mr-4 border border-[rgb(120,198,187)]/30 group-hover:bg-[rgb(120,198,187)]/10 transition-colors duration-300">
                      <Mail className="w-5 h-5 text-[rgb(120,198,187)] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-[rgb(120,198,187)]">
                        Email
                      </h4>
                      <a
                        href="mailto:atulmangla210503@gmail.com"
                        className="text-white font-bold hover:text-[rgb(120,198,187)] transition-colors"
                      >
                        divyanshpansari123@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="p-3 rounded-lg mr-4 border border-[rgb(120,198,187)]/30 group-hover:bg-[rgb(120,198,187)]/10 transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-[rgb(120,198,187)] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-[rgb(120,198,187)]">
                        Location
                      </h4>
                      <p className="text-white font-bold">Kolkata, India</p>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="p-3 rounded-lg mr-4 border border-[rgb(120,198,187)]/30 group-hover:bg-[rgb(120,198,187)]/10 transition-colors duration-300">
                      <Phone className="w-5 h-5 text-[rgb(120,198,187)] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-[rgb(120,198,187)]">
                        Phone
                      </h4>
                      <a
                        href="tel:+918307387430"
                        className="text-white font-bold hover:text-[rgb(120,198,187)] transition-colors"
                      >
                        +91 9007485220
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </Tilt>

            {/* Social Links */}
            <Tilt
              perspective={1000}
              scale={1.02}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#78c6bb"
              glarePosition="all"
              glareBorderRadius="12px"
              className="transform-gpu w-full"
            >
              <motion.div
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0d1117]/80 to-[#1a1f29]/80 border border-[#2a303c] hover:border-[rgb(120,198,187)]/50 p-8 backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                {/* Subtle pulse animation */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  animate={{
                    boxShadow: [
                      "0 0 0 0px rgba(120, 198, 187, 0)",
                      "0 0 0 2px rgba(120, 198, 187, 0.1)",
                      "0 0 0 0px rgba(120, 198, 187, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-[rgb(120,198,187)] transition-colors duration-300">
                  Connect With Me
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* LinkedIn */}
                  <motion.a
                    href="https://www.linkedin.com/in/divyansh-pansari-896a90234/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center gap-3 p-4 rounded-xl bg-[#1a1f29]/60 border border-[#2a303c] hover:border-[rgb(120,198,187)] transition-all duration-300 group overflow-hidden"
                    whileHover={{
                      y: -3,
                      backgroundColor: "rgba(120, 198, 187, 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="LinkedIn"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,198,187,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="p-2 rounded-lg bg-[#0077b5]/20 group-hover:bg-[#0077b5]/30 transition-colors duration-300 z-10">
                      <Linkedin className="w-5 h-5 text-[#0077b5]" />
                    </div>
                    <span className="text-white font-medium z-10">
                      LinkedIn
                    </span>
                    <ExternalLink className="w-4 h-4 ml-auto text-[#b3bac7] group-hover:text-[rgb(120,198,187)] z-10" />
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    href="https://github.com/Divyansh9007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center gap-3 p-4 rounded-xl bg-[#1a1f29]/60 border border-[#2a303c] hover:border-[rgb(120,198,187)] transition-all duration-300 group overflow-hidden"
                    whileHover={{
                      y: -3,
                      backgroundColor: "rgba(120, 198, 187, 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="GitHub"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,198,187,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="p-2 rounded-lg bg-[#333]/20 group-hover:bg-[#333]/30 transition-colors duration-300 z-10">
                      <Github className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium z-10">GitHub</span>
                    <ExternalLink className="w-4 h-4 ml-auto text-[#b3bac7] group-hover:text-[rgb(120,198,187)] z-10" />
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                    href="https://www.instagram.com/divyansh22_11/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="relative flex items-center gap-3 p-4 rounded-xl bg-[#1a1f29]/60 border border-[#2a303c] hover:border-[rgb(120,198,187)] transition-all duration-300 group overflow-hidden"
                    whileHover={{
                      y: -3,
                      backgroundColor: "rgba(120, 198, 187, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Instagram"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,198,187,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="p-2 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#dc2743]/20 group-hover:from-[#f09433]/30 group-hover:via-[#e6683c]/30 group-hover:to-[#dc2743]/30 transition-colors duration-300 z-10">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium z-10">
                      Instagram
                    </span>
                    <ExternalLink className="w-4 h-4 ml-auto text-[#b3bac7] group-hover:text-[rgb(120,198,187)] z-10" />
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:divyanshpansari123@gmail.com"
                    className="relative flex items-center gap-3 p-4 rounded-xl bg-[#1a1f29]/60 border border-[#2a303c] hover:border-[rgb(120,198,187)] transition-all duration-300 group overflow-hidden"
                    whileHover={{
                      y: -3,
                      backgroundColor: "rgba(120, 198, 187, 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Email"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,198,187,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="p-2 rounded-lg bg-[#D44638]/20 group-hover:bg-[#D44638]/30 transition-colors duration-300 z-10">
                      <Mail className="w-5 h-5 text-[#D44638]" />
                    </div>
                    <span className="text-white font-medium z-10">Email</span>
                    <ExternalLink className="w-4 h-4 ml-auto text-[#b3bac7] group-hover:text-[rgb(120,198,187)] z-10" />
                  </motion.a>
                </div>
              </motion.div>
            </Tilt>
          </div>

          {/* Contact Form */}
          <motion.div
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0d1117]/80 to-[#1a1f29]/80 border border-[#2a303c] hover:border-[rgb(120,198,187)]/50 p-8 backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
          >
            {/* Form glow effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,198,187,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-[rgb(120,198,187)] transition-colors duration-300">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6"
                variants={containerVariants}
              >
                {/* Name Field */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[rgb(120,198,187)] mb-2"
                  >
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#2a303c] rounded-lg focus:ring-2 focus:ring-[rgb(120,198,187)] focus:border-[rgb(120,198,187)] text-white font-bold transition-all duration-300"
                    placeholder="Enter Your Name"
                    whileFocus={{
                      boxShadow: "0 0 0 2px rgba(120, 198, 187, 0.3)",
                      backgroundColor: "#0d1117",
                    }}
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[rgb(120,198,187)] mb-2"
                  >
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#2a303c] rounded-lg focus:ring-2 focus:ring-[rgb(120,198,187)] focus:border-[rgb(120,198,187)] text-white font-bold transition-all duration-300"
                    placeholder="Enter your email"
                    whileFocus={{
                      boxShadow: "0 0 0 2px rgba(120, 198, 187, 0.3)",
                      backgroundColor: "#0d1117",
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Subject Field */}
              <motion.div variants={itemVariants} className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[rgb(120,198,187)] mb-2"
                >
                  Subject
                </label>
                <motion.select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0d1117] border border-[#2a303c] rounded-lg focus:ring-2 focus:ring-[rgb(120,198,187)] focus:border-[rgb(120,198,187)] text-white font-bold transition-all duration-300"
                  whileFocus={{
                    boxShadow: "0 0 0 2px rgba(120, 198, 187, 0.3)",
                    backgroundColor: "#0d1117",
                  }}
                >
                  <option value="" className="bg-[#0d1117]">
                    Select a subject
                  </option>
                  <option value="Project Inquiry" className="bg-[#0d1117]">
                    Project Inquiry
                  </option>
                  <option value="Job Opportunity" className="bg-[#0d1117]">
                    Job Opportunity
                  </option>
                  <option value="Collaboration" className="bg-[#0d1117]">
                    Collaboration
                  </option>
                  <option value="Other" className="bg-[#0d1117]">
                    Other
                  </option>
                </motion.select>
              </motion.div>

              {/* Message Field */}
              <motion.div variants={itemVariants} className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[rgb(120,198,187)] mb-2"
                >
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0d1117] border border-[#2a303c] rounded-lg focus:ring-2 focus:ring-[rgb(120,198,187)] focus:border-[rgb(120,198,187)] text-white font-bold transition-all duration-300"
                  placeholder="Let me know how I can help you..."
                  whileFocus={{
                    boxShadow: "0 0 0 2px rgba(120, 198, 187, 0.3)",
                    backgroundColor: "#0d1117",
                  }}
                ></motion.textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[rgb(120,198,187)] to-cyan-400 text-black font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center disabled:opacity-70 relative overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 5px 15px rgba(120, 198, 187, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                  {/* Button shine effect */}
                  <span
                    className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      clipPath: "polygon(10% 0, 3 0% 0, 20% 100%, 0% 100%)",
                      transform: "translateX(-100%)",
                    }}
                  />
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
