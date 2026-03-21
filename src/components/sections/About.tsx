import {
  Code,
  Laptop,
  MoveHorizontal,
  Server,
  ExternalLink,
  CloudIcon,
  BrainCircuit,
} from "lucide-react";
import { motion } from "framer-motion";
import myPhoto from "../../assets/myphoto.jpeg";
// import React, { useEffect, useRef, useState } from "react";

interface AboutProps {
  id: string;
}

interface SkillProps {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const skills: SkillProps[] = [
  { name: "React", icon: "⚛️", color: "rgb(120,198,187)" },
  { name: "TypeScript", icon: "TS", color: "rgb(120,198,187)" },
  { name: "MERN Stack", icon: "🌐", color: "rgb(120,198,187)" },
  { name: "Express.Js", icon: "🎯", color: "rgb(120,198,187)" },
  { name: "MongoDB", icon: "💡", color: "rgb(120,198,187)" },
  { name: "Python", icon: "🐍", color: "rgb(120,198,187)" },
  { name: "Databricks", icon: "📊", color: "rgb(120,198,187)" },
  { name: "MLflow", icon: "🔄", color: "rgb(120,198,187)" },
  { name: "Airflow", icon: "🛫", color: "rgb(120,198,187)" },
  { name: "AI/ML", icon: "🤖", color: "rgb(120,198,187)" },
  { name: "Tailwind", icon: "🌊", color: "rgb(120,198,187)" },
  { name: "AWS", icon: "☁️", color: "rgb(120,198,187)" },
  { name: "Git", icon: "�", color: "rgb(120,198,187)" },
  { name: "OpenCV", icon: "�️", color: "rgb(120,198,187)" },
  { name: "Image Processing", icon: "🖼️🔧", color: "rgb(120,198,187)" },
  { name: "Object Detection", icon: "🎯", color: "rgb(120,198,187)" },
  { name: "Machine Learning", icon: "📈", color: "rgb(120,198,187)" },
  { name: "DBMS", icon: "🗄️", color: "rgb(120,198,187)" },
  { name: "Computer Networks", icon: "🌐", color: "rgb(120,198,187)" },
  { name: "Operating Systems", icon: "💻", color: "rgb(120,198,187)" },
];

const SkillBadge: React.FC<SkillProps> = ({ name, icon, color }) => {
  return (
    <motion.div
      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-black/40 border border-gray-700 hover:border-teal-500 transition-all duration-300"
      whileHover={{
        scale: 1.02,
        borderColor: color,
      }}
      transition={{ duration: 0.3 }}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-base font-medium text-gray-300">{name}</span>
    </motion.div>
  );
};

const InfiniteScroll: React.FC<{ direction: 1 | -1 }> = ({ direction }) => {
  const duplicatedSkills = [...skills, ...skills]; // Duplicate for seamless scroll

  const totalWidth = duplicatedSkills.length * 100; // Assuming each skill takes 100px

  return (
    <div className="w-full overflow-hidden relative py-4">
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: direction > 0 ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: totalWidth / 20, // Adjust speed based on total width
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <SkillBadge key={`${skill.name}-${index}`} {...skill} />
        ))}
      </motion.div>
    </div>
  );
};

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="py-20 px-6 bg-gradient-to-br from-[#0a0e1a] via-[#141820] to-[#0f1216]"
    >
      <div className="container mx-auto flex flex-col items-center ">
        <motion.div
          className="relative mb-16 max-w-4xl w-full bg-black/50 rounded-xl shadow-lg border border-gray-700 p-10 transition-all duration-300 hover:border-teal-500/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Decorative icon and heading */}
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">👨‍💻</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              About Me
            </h2>
          </div>
          <div className="w-12 h-1 bg-teal-500 mb-8 rounded"></div>
          {/* About text */}
          <motion.p
            className="text-gray-300 font-medium text-lg leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I am a final year BTech student in Computer Science, passionate
            about coding, problem-solving, and building scalable solutions.
            Currently working as an MLOps Engineer at UPL, I focus on building
            efficient machine learning pipelines and automation workflows.
            <br />
            <br />I have solved over{" "}
            <span className="font-semibold text-teal-400">300+</span> data
            structure and algorithm problems across platforms like{" "}
            <a
              href="https://leetcode.com/u/Divyansh798/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-teal-400 hover:text-teal-300 transition-colors duration-200"
            >
              LeetCode
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
            {" , "}
            <a
              href="https://www.geeksforgeeks.org/user/divyanshpa48lv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-[rgb(90,140,132)] underline hover:text-green-600 transition-colors duration-200"
            >
              GeeksforGeeks
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
            . This experience has significantly sharpened my problem-solving and
            algorithmic thinking skills, helping me approach technical
            challenges with precision and efficiency.
          </motion.p>

          <div className="flex justify-center mt-4">
            <a
              href="https://codolio.com/profile/Divyansh9007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-full border border-[rgb(120,198,187)] text-[rgb(120,198,187)] font-semibold hover:bg-[rgb(120,198,187)] hover:text-black transition-all duration-200"
            >
              View My Codolio Profile
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ">
          <motion.div
            className="relative bg-black/50 rounded-xl shadow-lg border border-gray-700 p-10 transition-all duration-300 hover:border-teal-500/50"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Decorative icon and heading */}
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3"></span>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                My Journey
              </h3>
            </div>
            <div className="w-12 h-1 bg-teal-500 mb-8 rounded"></div>
            <p className="text-gray-300 text-lg font-medium mb-6 leading-relaxed">
              My journey began as a self-taught developer, driven by curiosity
              and a genuine passion for building things on the internet. What
              started as a hobby soon turned into a deeper exploration of web
              technologies and problem-solving through code.
            </p>
            <p className="text-gray-300 text-lg font-medium leading-relaxed">
              Over time, I had the opportunity to work with startups, agencies,
              and enthusiastic teams, gaining practical experience and
              sharpening my skills in real-world projects. Today, as an MLOps
              Engineer, I focus on building scalable machine learning pipelines
              and automation workflows while maintaining a passion for
              responsive, accessible, and user-centric applications.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={myPhoto}
              alt="My Photo"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-2 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>
        </div>

        <div className="mb-16">
          <motion.h3
            className="text-4xl md:text-5xl font-bold text-center mb-12 
             bg-clip-text text-transparent 
             bg-gradient-to-r from-teal-500 via-cyan-300 to-white 
             drop-shadow-[0_5px_15px_rgba(0,255,255,0.3)] tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Tech Stack
          </motion.h3>

          <div className="overflow-hidden border-t border-[rgb(120,198,187)]/20 pt-4">
            <InfiniteScroll direction={1} />
            <InfiniteScroll direction={-1} />
          </div>
        </div>
        <div className="flex flex-wrap gap-6 justify-center ">
          {[
            {
              title: "Frontend Development",
              icon: <Code className="w-5 h-5 text-[rgb(120,198,187)]" />,
              skills: [
                "HTML/CSS",
                "JavaScript",
                "React",
                "TypeScript",
                "Tailwind CSS",
              ],
            },
            {
              title: "Backend Development",
              icon: <Server className="w-5 h-5 text-[rgb(120,198,187)]" />,
              skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "SQL"],
            },
            {
              title: "AI/ML",
              icon: (
                <BrainCircuit className="w-5 h-5 text-[rgb(120,198,187)]" />
              ),
              skills: [
                "Machine Learning",
                "OpenCV",
                "Image Processing",
                "Object Detection",
                "OpenAI",
              ],
            },

            {
              title: "AWS Cloud",
              icon: <CloudIcon className="w-5 h-5 text-[rgb(120,198,187)]" />,
              skills: [
                "EC2 Instances",
                "Storage S3",
                "RDS Instances",
                "Lambda Functions",
                "CloudFront",
              ],
            },
            {
              title: "Other",
              icon: (
                <MoveHorizontal className="w-5 h-5 text-[rgb(120,198,187)]" />
              ),
              skills: [
                "Git/GitHub",
                "Performance",
                "Testing",
                "DevOps",
                "CI/CD",
                "Agile Methodologies",
              ],
            },
            {
              title: "CS Fundamentals",
              icon: <Laptop className="w-5 h-5 text-[rgb(120,198,187)]" />,
              skills: [
                "OOPS",
                "DBMS",
                "Computer Networks",
                "Operating Systems",
                "Data Structures and Algorithms",
              ],
            },
          ].map((group) => (
            <motion.div
              key={group.title}
              className="w-full max-w-sm bg-black/50 rounded-lg shadow-lg p-6 border border-gray-700 hover:border-teal-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg mr-3 border border-gray-700 bg-black/50">
                  {group.icon}
                </div>
                <h3 className="text-lg font-semibold text-teal-400">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-black/50 rounded-full text-xs md:text-sm font-medium text-gray-300 border border-gray-700 hover:border-teal-500/50 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
