import { useState } from "react";
import { Send, Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
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

  return (
    <section id={id} className="py-20 px-6 bg-black">
      <Toaster position="bottom-right" />
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(120,198,187)]">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[rgb(120,198,187)] mx-auto mb-8"></div>
          <p className="text-white font-bold max-w-3xl mx-auto text-lg">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Tilt
              perspective={1000}
              scale={1.02}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              className="transform-gpu"
            >
              <motion.div
                className="animate-border-glow glass-effect p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-[rgb(120,198,187)]">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {/* TODO: Update email address */}
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg mr-4 border border-[rgb(120,198,187)]/30">
                      <Mail className="w-5 h-5 text-[rgb(120,198,187)]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-[rgb(120,198,187)]">
                        Email
                      </h4>
                      <a
                        href="mailto:divyanshpansari123@gmail.com"
                        className="text-white font-bold hover:text-[rgb(120,198,187)] transition-colors"
                      >
                        divyanshpansari123@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* TODO: Update location */}
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg mr-4 border border-[rgb(120,198,187)]/30">
                      <MapPin className="w-5 h-5 text-[rgb(120,198,187)]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-[rgb(120,198,187)]">
                        Location
                      </h4>
                      <p className="text-white font-bold">
                        Kolkata,West Bengal
                      </p>
                    </div>
                  </div>

                  {/* TODO: Update phone number */}
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg mr-4 border border-[rgb(120,198,187)]/30">
                      <Phone className="w-5 h-5 text-[rgb(120,198,187)]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-[rgb(120,198,187)]">
                        Phone
                      </h4>
                      <a
                        href="tel:+11234567890"
                        className="text-white font-bold hover:text-[rgb(120,198,187)] transition-colors"
                      >
                        +919007485220
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Tilt>

            <Tilt
              perspective={1000}
              scale={1.02}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              className="transform-gpu"
            >
              <motion.div
                className="animate-border-glow glass-effect p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-6 text-[rgb(120,198,187)]">
                  Connect With Me
                </h3>

                {/* TODO: Update social media links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/divyansh-pansari-896a90234/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg border border-[rgb(120,198,187)]/30 hover:border-[rgb(120,198,187)] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-[rgb(120,198,187)] mr-2" />
                    <span className="text-white font-bold">LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/Divyansh9007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg border border-[rgb(120,198,187)]/30 hover:border-[rgb(120,198,187)] transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-[rgb(120,198,187)] mr-2" />
                    <span className="text-white font-bold">GitHub</span>
                  </a>
                </div>
              </motion.div>
            </Tilt>
          </div>

          {/* Contact Form */}
          <Tilt
            perspective={1000}
            scale={1.02}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            className="transform-gpu"
          >
            <motion.div
              className="animate-border-glow glass-effect p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-[rgb(120,198,187)]">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[rgb(120,198,187)] mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-black border border-[rgb(120,198,187)]/30 rounded-lg focus:ring-2 focus:ring-[rgb(120,198,187)] focus:border-[rgb(120,198,187)] text-white font-bold"
                      placeholder="Enter Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[rgb(120,198,187)] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-black border border-[rgb(120,198,187)]/30 rounded-lg focus:ring-2 focus:ring-[rgb(120,198,187)] focus:border-[rgb(120,198,187)] text-white font-bold"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[rgb(120,198,187)] mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-black border border-[rgb(120,198,187)]/30 rounded-lg focus:ring-2 focus:ring-[rgb(120,198,187)] focus:border-[rgb(120,198,187)] text-white font-bold"
                  >
                    <option value="" className="bg-black">
                      Select a subject
                    </option>
                    <option value="Project Inquiry" className="bg-black">
                      Project Inquiry
                    </option>
                    <option value="Job Opportunity" className="bg-black">
                      Job Opportunity
                    </option>
                    <option value="Collaboration" className="bg-black">
                      Collaboration
                    </option>
                    <option value="Other" className="bg-black">
                      Other
                    </option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[rgb(120,198,187)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-black border border-[rgb(120,198,187)]/30 rounded-lg focus:ring-2 focus:ring-[rgb(120,198,187)] focus:border-[rgb(120,198,187)] text-white font-bold"
                    placeholder="Let me know how I can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[rgb(120,198,187)] text-black font-bold rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-70"
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
                </button>
              </form>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Contact;
