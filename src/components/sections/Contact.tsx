import { useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
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
      className="py-20 px-6 bg-gradient-to-br from-[#0a0e1a] via-[#141820] to-[#0f1216]"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
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
            <motion.div
              className="relative overflow-hidden rounded-lg bg-black/50 border border-gray-700 hover:border-teal-500/50 p-8 transition-all duration-300"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="p-3 rounded-lg mr-4 border border-gray-700 group-hover:bg-teal-500/10 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-teal-300">
                      Email
                    </h4>
                    <a
                      href="mailto:divyanshpansari123@gmail.com"
                      className="text-gray-300 hover:text-teal-400 transition-colors"
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
                  <div className="p-3 rounded-lg mr-4 border border-gray-700 group-hover:bg-teal-500/10 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-teal-300">
                      Location
                    </h4>
                    <p className="text-gray-300">Kolkata, India</p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="p-3 rounded-lg mr-4 border border-gray-700 group-hover:bg-teal-500/10 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-teal-300">
                      Phone
                    </h4>
                    <a
                      href="tel:+919007485220"
                      className="text-gray-300 hover:text-teal-400 transition-colors"
                    >
                      +91 9007485220
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="relative overflow-hidden rounded-lg bg-black/50 border border-gray-700 hover:border-teal-500/50 p-8 transition-all duration-300"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                Connect With Me
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/divyansh-pansari-896a90234/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-black/50 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="LinkedIn"
                >
                  <div className="p-2 rounded-lg bg-[#0077b5]/20 group-hover:bg-[#0077b5]/30 transition-colors duration-300">
                    <Linkedin className="w-5 h-5 text-[#0077b5]" />
                  </div>
                  <span className="text-gray-300 font-medium">
                    LinkedIn
                  </span>
                  <ExternalLink className="w-4 h-4 ml-auto text-gray-500 group-hover:text-teal-400" />
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/Divyansh9007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-black/50 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="GitHub"
                >
                  <div className="p-2 rounded-lg bg-[#333]/20 group-hover:bg-[#333]/30 transition-colors duration-300">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 font-medium">GitHub</span>
                  <ExternalLink className="w-4 h-4 ml-auto text-gray-500 group-hover:text-teal-400" />
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:divyanshpansari123@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg bg-black/50 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Email"
                >
                  <div className="p-2 rounded-lg bg-[#D44638]/20 group-hover:bg-[#D44638]/30 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-[#D44638]" />
                  </div>
                  <span className="text-gray-300 font-medium">Email</span>
                  <ExternalLink className="w-4 h-4 ml-auto text-gray-500 group-hover:text-teal-400" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="relative overflow-hidden rounded-lg bg-black/50 border border-gray-700 hover:border-teal-500/50 p-8 transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
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
                    className="block text-sm font-medium text-teal-300 mb-2"
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
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-teal-500 focus:outline-none text-white transition-all duration-300"
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
