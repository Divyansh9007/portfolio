import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../../data/certifications';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

interface CertificationsProps {
  id: string;
}

const Certifications: React.FC<CertificationsProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 px-6 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(120,198,187)]">Certifications</h2>
          <div className="w-20 h-1 bg-[rgb(120,198,187)] mx-auto mb-8"></div>
          <p className="text-white font-bold max-w-3xl mx-auto text-lg">
            Professional certifications and achievements that demonstrate my expertise and commitment to continuous learning.
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
                    <h3 className="text-xl font-semibold mb-1 text-[rgb(120,198,187)]">{cert.title}</h3>
                    <p className="text-white font-bold text-sm">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
                
                <p className="text-white font-bold mb-4">
                  {cert.description}
                </p>
                
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[rgb(120,198,187)] hover:text-[rgb(120,198,187)]/80 transition-colors"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4 ml-1" />
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