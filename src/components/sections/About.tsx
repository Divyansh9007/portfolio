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
import Tilt from "react-parallax-tilt";
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
  { name: "AI/ML", icon: "🤖", color: "rgb(120,198,187)" },
  { name: "Blockchain", icon: "⛓️", color: "rgb(120,198,187)" },
  { name: "AWS", icon: "☁️", color: "rgb(120,198,187)" },
  { name: "Git", icon: "📦", color: "rgb(120,198,187)" },
  { name: "Tailwind", icon: "🌊", color: "rgb(120,198,187)" },
  { name: "Python", icon: "🐍", color: "rgb(120,198,187)" },
  { name: "OpenCV", icon: "🖼️", color: "rgb(120,198,187)" },
  { name: "OpenAI", icon: "💡", color: "rgb(120,198,187)" },
  { name: "Image Processing", icon: "🖼️🔧", color: "rgb(120,198,187)" },
  { name: "Object Detection", icon: "🎯", color: "rgb(120,198,187)" },
  { name: "Machine Learning", icon: "📈", color: "rgb(120,198,187)" },
  { name: "DBMS", icon: "🗄️", color: "rgb(120,198,187)" },
  { name: "Computer Networks", icon: "🌐", color: "rgb(120,198,187)" },
  { name: "Operating Systems", icon: "💻", color: "rgb(120,198,187)" },
  { name: "OOPS", icon: "🧩", color: "rgb(120,198,187)" },
];

const SkillBadge: React.FC<SkillProps> = ({ name, icon, color }) => {
  return (
    <motion.div
      className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-br from-black/70 to-black/50 border border-[rgb(120,198,187)]/30"
      whileHover={{
        scale: 1.05,
        borderColor: color,
        shadow: "0 0 24px rgba(120,198,187,0.4)",
      }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-base font-bold text-white">{name}</span>
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
      className="py-20 px-6 bg-gradient-to-r from-[#060a0e] via-[#181e29] to-[#0f1216] hover:shadow-[0_0_20px_rgb(6,182,212,0.3)] transition-shadow duration-300"
    >
      <div className="container mx-auto flex flex-col items-center ">
        <motion.div
          className="relative mb-16 max-w-4xl w-full bg-black/70 backdrop-blur-md rounded-2xl shadow-xl border border-[rgb(120,198,187)]/20 p-10 transition-all duration-300 group hover:shadow-[0_0_48px_12px_rgba(120,198,187,0.35)] hover:border-[rgb(120,198,187)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.06 }}
          viewport={{ once: true }}
        >
          {/* Glossy overlay on hover */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,255,255,0.08) 0%, rgba(120,198,187,0.08) 100%)",
              boxShadow: "0 4px 32px 0 rgba(120,198,187,0.10)",
              zIndex: 1,
            }}
          />
          {/* Vertical accent bar */}
          <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-[rgb(120,198,187)]/80 via-cyan-400/60 to-transparent rounded-full opacity-80 z-10"></div>
          {/* Decorative icon and heading */}
          <div className="flex items-center mb-4 relative z-10">
            <span className="text-4xl mr-3 animate-bounce">👨‍💻</span>
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[rgb(120,198,187)] via-cyan-400 to-white bg-clip-text text-transparent drop-shadow-lg tracking-tight">
              About Me
            </h2>
          </div>
          <div className="w-20 h-1 bg-[rgb(120,198,187)] mx-auto mb-8 rounded"></div>
          {/* Floating animated accent bar */}
          <motion.p
            className="text-gray-200 font-medium text-lg leading-relaxed font-sans text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I am a final year BTech student in Computer Science, passionate
            about coding, problem-solving, and web development. I enjoy turning
            complex challenges into efficient, innovative, and scalable
            solutions.
            <br />
            <br />I have solved over{" "}
            <span className="font-semibold text-[rgb(90,140,132)]">
              300+
            </span>{" "}
            data structure and algorithm problems across platforms like{" "}
            <a
              href="https://leetcode.com/u/Divyansh798/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-[rgb(90,140,132)] underline hover:text-purple-500 transition-colors duration-200"
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
          <Tilt
            perspective={1000}
            scale={1.03}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            className="transform-gpu md:ml-8"
          >
            <motion.div
              className="relative bg-black/70 backdrop-blur-md rounded-2xl shadow-xl border border-[rgb(120,198,187)]/20 p-6 md:p-12 min-h-[24rem] md:min-h-[34rem] h-auto w-full flex flex-col justify-center overflow-hidden transition-all duration-300 group hover:shadow-[0_0_48px_12px_rgba(120,198,187,0.35)] hover:border-[rgb(120,198,187)]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.04 }}
              viewport={{ once: true }}
            >
              {/* Glossy overlay on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0.08) 0%, rgba(120,198,187,0.08) 100%)",
                  boxShadow: "0 4px 32px 0 rgba(120,198,187,0.10)",
                  zIndex: 1,
                }}
              />
              {/* Vertical accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-[rgb(120,198,187)]/80 via-cyan-400/60 to-transparent rounded-full opacity-80 z-10"></div>

              {/* Decorative icon and heading */}
              <div className="flex items-center mb-4 relative z-10">
                <span className="text-4xl mr-3 animate-bounce">🚀</span>
                <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[rgb(120,198,187)] via-cyan-400 to-white bg-clip-text text-transparent drop-shadow-lg tracking-tight">
                  My Journey
                </h3>
              </div>
              <div className="w-20 h-1 bg-[rgb(120,198,187)] mx-auto mb-8 rounded"></div>
              <p className="text-gray-200 text-lg font-medium mb-6 leading-relaxed relative z-10">
                My journey began as a self-taught developer, driven by curiosity
                and a genuine passion for building things on the internet. What
                started as a hobby soon turned into a deeper exploration of web
                technologies and problem-solving through code.
              </p>
              <p className="text-gray-200 text-lg font-medium leading-relaxed relative z-10">
                Over time, I had the opportunity to work with startups,
                agencies, and enthusiastic teams, gaining practical experience
                and sharpening my skills in real-world projects. Today, I focus
                on building responsive, accessible, and user-centric web
                applications — combining thoughtful design with clean, robust
                code to deliver seamless digital experiences.
              </p>
            </motion.div>
          </Tilt>

          <Tilt
            perspective={1000}
            scale={1.04}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            className="flex items-center justify-center"
          >
            <img
              src={myPhoto}
              alt="My Photo"
              className="w-96 h-96 object-cover rounded-full border-8 border-[rgb(120,198,187)] shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_64px_16px_rgba(120,198,187,0.35)]"
              style={{ boxShadow: "0 12px 48px 0 rgba(120,198,187,0.18)" }}
            />
          </Tilt>
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
            🚀 My Tech Stack
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
            <Tilt
              key={group.title}
              perspective={1000}
              scale={1.04}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className="transform-gpu"
            >
              <motion.div
                className="max-w-[400px] bg-black/70 backdrop-blur-md rounded-xl shadow-xl p-7 border border-[rgb(120,198,187)]/20 transition-all duration-300 hover:shadow-3xl hover:border-[rgb(120,198,187)] group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg mr-3 border border-[rgb(120,198,187)]/30 bg-gradient-to-br from-[rgb(120,198,187)]/20 to-black group-hover:from-[rgb(120,198,187)]/40 transition-all duration-300">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[rgb(120,198,187)]">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-black rounded-full text-sm font-medium text-white border border-[rgb(120,198,187)]/30 transition-all duration-200 "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
