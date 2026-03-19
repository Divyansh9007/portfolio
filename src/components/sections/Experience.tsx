import { Briefcase, GraduationCap } from "lucide-react";
import { experienceData, educationData } from "../../data/experience";
import { motion } from "framer-motion";

interface ExperienceProps {
  id: string;
}

interface TimelineItemProps {
  date: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  organization,
  description,
  icon,
  isLast = false,
}) => {
  return (
    <div className="relative flex items-start group">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-6 left-4 w-0.5 h-full bg-gray-700 group-hover:bg-teal-500 transition-colors duration-300"></div>
      )}

      {/* Icon */}
      <div className="bg-black p-2 rounded-full border-2 border-gray-700 group-hover:border-teal-500 transition-colors duration-300 z-10 mr-4">
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="bg-black/50 p-6 rounded-lg border border-gray-700 hover:border-teal-500/50 transition-all duration-300">
          <span className="text-sm font-medium text-teal-400 bg-black/50 px-3 py-1 rounded-full border border-gray-700">
            {date}
          </span>
          <h3 className="text-lg font-semibold mt-3 mb-1 text-teal-300">
            {title}
          </h3>
          <h4 className="text-teal-400 font-medium mb-3">
            {organization}
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="py-20 px-6 bg-gradient-to-br from-[#0a0e1a] via-[#141820] to-[#0f1216] min-h-screen font-sans"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experience & Education
          </motion.h2>
          <div className="w-12 h-1 bg-teal-500 mx-auto mb-6 rounded"></div>
          <motion.p
            className="text-gray-300 font-normal max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My professional journey and educational background in web development and design.
          </motion.p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl mx-auto flex flex-col gap-12">
            {/* Work Experience */}
            <motion.div
              className="bg-black/40 rounded-lg shadow-lg p-8 border border-gray-700 hover:border-teal-500/50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center text-teal-400">
                <Briefcase className="w-6 h-6 text-teal-400 mr-2" />
                Work Experience
              </h3>
              <div>
                {experienceData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    date={item.date}
                    title={item.title}
                    organization={item.organization}
                    description={item.description}
                    icon={
                      <Briefcase className="w-5 h-5 text-teal-400" />
                    }
                    isLast={index === experienceData.length - 1}
                  />
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="bg-black/40 rounded-lg shadow-lg p-8 border border-gray-700 hover:border-teal-500/50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center text-teal-400">
                <GraduationCap className="w-6 h-6 text-teal-400 mr-2" />
                Education
              </h3>
              <div>
                {educationData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    date={item.date}
                    title={item.degree}
                    organization={item.institution}
                    description={item.description}
                    icon={
                      <GraduationCap className="w-5 h-5 text-teal-400" />
                    }
                    isLast={index === educationData.length - 1}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Resume Download */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://drive.google.com/file/d/1T81lu_aXVzP3_nJs54bof2L-GXSVyQtN/view?usp=sharing"
            className="inline-flex items-center px-6 py-3 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-600 transition-colors duration-300 shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
