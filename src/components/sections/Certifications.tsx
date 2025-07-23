import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../../data/certifications";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

interface CertificationsProps {
  id: string;
}

const Certifications: React.FC<CertificationsProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 px-6 bg-gradient-to-r from-[#060a0e] via-[#181e29] to-[#0f1216]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[rgb(202,208,207)] via-cyan-400 to-[rgb(8,50,35)] bg-clip-text text-transparent drop-shadow-lg tracking-tight">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-[rgb(120,198,187)] mx-auto mb-8"></div>
          <p className="text-white font-bold max-w-3xl mx-auto text-lg">
            Professional certifications and achievements that demonstrate my
            expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Tilt
              key={cert.id}
              perspective={1000}
              scale={1.02}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              className="transform-gpu"
            >
              <motion.div
                className="animate-border-glow glass-effect p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-black rounded-lg mr-3 border border-[rgb(120,198,187)]/30">
                    <Award className="w-5 h-5 text-[rgb(120,198,187)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-[rgb(120,198,187)]">
                      {cert.title}
                    </h3>
                    <p className="text-white font-bold text-sm">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>

                <p className="text-white font-bold mb-4">{cert.description}</p>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 mt-2 bg-[rgb(120,198,187)]/10 border border-[rgb(120,198,187)] rounded-lg text-[rgb(120,198,187)] font-medium cursor-pointer transition-all duration-200 hover:bg-[rgb(120,198,187)] hover:text-black hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[rgb(120,198,187)]"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
