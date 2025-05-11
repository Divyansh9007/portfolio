import { Briefcase, GraduationCap } from "lucide-react";
import { experienceData, educationData } from "../../data/experience";
import Tilt from "react-parallax-tilt";
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
        <div className="absolute top-6 left-4 w-0.5 h-full bg-[rgb(120,198,187)]/30 group-hover:bg-[rgb(120,198,187)] transition-colors duration-300"></div>
      )}

      {/* Icon */}
      <div className="bg-black p-2 rounded-full border-2 border-[rgb(120,198,187)]/30 z-10 mr-4 group-hover:border-[rgb(120,198,187)] transition-colors duration-300">
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <Tilt
          perspective={1000}
          scale={1.02}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          className="transform-gpu"
        >
          <div className="bg-black p-6 rounded-lg border border-[rgb(120,198,187)]/30 transition-transform duration-300 hover:border-[rgb(120,198,187)]">
            <span className="text-sm font-bold text-[rgb(120,198,187)] bg-black/50 px-3 py-1 rounded-full border border-[rgb(120,198,187)]/30">
              {date}
            </span>
            <h3 className="text-xl font-semibold mt-3 mb-1 text-[rgb(120,198,187)]">
              {title}
            </h3>
            <h4 className="text-[rgb(120,198,187)] font-medium mb-3">
              {organization}
            </h4>
            <p className="text-white font-bold">{description}</p>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 px-6 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(120,198,187)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Experience & Education
          </motion.h2>
          <div className="w-20 h-1 bg-[rgb(120,198,187)] mx-auto mb-8"></div>
          <motion.p
            className="text-white font-bold max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My professional journey and educational background in the fields of
            web development and design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-[rgb(120,198,187)]">
              <Briefcase className="w-6 h-6 text-[rgb(120,198,187)] mr-2" />
              Work Experience
            </h3>
            <div className="ml-2">
              {experienceData.map((item, index) => (
                <TimelineItem
                  key={index}
                  date={item.date}
                  title={item.title}
                  organization={item.organization}
                  description={item.description}
                  icon={
                    <Briefcase className="w-5 h-5 text-[rgb(120,198,187)]" />
                  }
                  isLast={index === experienceData.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-[rgb(120,198,187)]">
              <GraduationCap className="w-6 h-6 text-[rgb(120,198,187)] mr-2" />
              Education
            </h3>
            <div className="ml-2">
              {educationData.map((item, index) => (
                <TimelineItem
                  key={index}
                  date={item.date}
                  title={item.degree}
                  organization={item.institution}
                  description={item.description}
                  icon={
                    <GraduationCap className="w-5 h-5 text-[rgb(120,198,187)]" />
                  }
                  isLast={index === educationData.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Resume Download */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="https://drive.google.com/uc?export=download&id=1q839eR0Yxa1Bx1D7ES7SlwmEoSn81col"
            className="inline-flex items-center px-6 py-3 bg-[rgb(120,198,187)] text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
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
