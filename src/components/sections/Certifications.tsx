import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../../data/certifications";
import { motion } from "framer-motion";

interface CertificationsProps {
  id: string;
}

const Certifications: React.FC<CertificationsProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 px-6 bg-gradient-to-br from-[#0a0e1a] via-[#141820] to-[#0f1216]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Professional certifications and achievements that demonstrate my
            expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              className="bg-black/50 rounded-lg border border-gray-700 hover:border-teal-500/50 transition-all duration-300 p-6"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-black rounded-lg mr-3 border border-gray-700">
                  <Award className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-teal-300">
                    {cert.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 mt-2 bg-teal-500/20 border border-teal-500/50 rounded-lg text-teal-300 font-medium cursor-pointer transition-all duration-200 hover:bg-teal-500 hover:text-black hover:border-teal-500"
              >
                View Certificate
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
