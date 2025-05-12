import { Code, Paintbrush, Laptop, MoveHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import myPhoto from "../../assets/myphoto.jpeg";

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

  { name: "AWS", icon: "☁️", color: "rgb(120,198,187)" },
  { name: "Git", icon: "📦", color: "rgb(120,198,187)" },
  { name: "Tailwind", icon: "🌊", color: "rgb(120,198,187)" },

  { name: "Python", icon: "🐍", color: "rgb(120,198,187)" },
  { name: "OpenCV", icon: "🖼️", color: "rgb(120,198,187)" },
  { name: "TensorFlow", icon: "🤖", color: "rgb(120,198,187)" },
  { name: "Keras", icon: "📚", color: "rgb(120,198,187)" },
  { name: "PyTorch", icon: "🧠", color: "rgb(120,198,187)" },
  { name: "Scikit-learn", icon: "📊", color: "rgb(120,198,187)" },
  { name: "OpenAI", icon: "💡", color: "rgb(120,198,187)" },
  { name: "Computer Vision", icon: "👁️", color: "rgb(120,198,187)" },
  { name: "Image Processing", icon: "🖼️🔧", color: "rgb(120,198,187)" },
  { name: "Object Detection", icon: "🎯", color: "rgb(120,198,187)" },
  { name: "Machine Learning", icon: "📈", color: "rgb(120,198,187)" },
];

const SkillBadge: React.FC<SkillProps> = ({ name, icon, color }) => {
  return (
    <motion.div
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-black border border-[rgb(120,198,187)]/30"
      whileHover={{ scale: 1.05, borderColor: color }}
      transition={{ duration: 0.2 }}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-bold text-white">{name}</span>
    </motion.div>
  );
};

const InfiniteScroll: React.FC<{ direction: 1 | -1 }> = ({ direction }) => {
  return (
    <div className="relative flex gap-4 py-4 overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction > 0 ? [0, -1920] : [-1920, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {skills.map((skill, i) => (
          <SkillBadge key={`${skill.name}-${i}`} {...skill} />
        ))}
      </motion.div>
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction > 0 ? [1920, 0] : [0, 1920],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {skills.map((skill, i) => (
          <SkillBadge key={`${skill.name}-duplicate-${i}`} {...skill} />
        ))}
      </motion.div>
    </div>
  );
};

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 px-6 bg-black">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(120,198,187)]">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[rgb(120,198,187)] mx-auto mb-8"></div>
          <p className="text-white font-bold max-w-3xl mx-auto text-lg">
            I'm a passionate developer skilled in Machine Learning, Web
            Development, and DSA problem solving. I enjoy turning ideas into
            real-world solutions through code and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Tilt
            perspective={1000}
            scale={1.02}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            className="transform-gpu"
          >
            <motion.div
              className="animate-border-glow glass-effect p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-[rgb(120,198,187)]">
                My Journey
              </h3>
              <p className="text-white font-bold mb-4">
                I began my journey as a self-taught developer, driven by
                curiosity and a love for building things on the internet. Over
                time, I gained hands-on experience working with startups,
                agencies, and passionate teams.
              </p>
              <p className="text-white font-bold">
                Today, I focus on crafting accessible, responsive, and
                user-friendly web applications. My goal is to create seamless
                digital experiences that are both visually appealing and
                technically robust.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href="https://leetcode.com/u/Divyansh798/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black border border-[rgb(120,198,187)]/30 hover:border-[rgb(120,198,187)] transition text-white font-bold"
                >
                  <span className="text-xl">🧠</span> View My LeetCode
                </a>
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
              className="relative overflow-hidden rounded-xl h-[650px] w-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={myPhoto}
                alt="My Photo"
                className="absolute top-1/4 left-1/2 w-[50%] h-[50%] object-cover transform -translate-x-1/2 -translate-y-1/2"
              />
            </motion.div>
          </Tilt>
        </div>

        <div className="mb-16">
          <motion.h3
            className="text-2xl font-semibold mb-8 text-center text-[rgb(120,198,187)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Tech Stack
          </motion.h3>

          <div className="overflow-hidden">
            <InfiniteScroll direction={1} />
            <InfiniteScroll direction={-1} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Frontend Development",
              icon: <Code className="w-5 h-5 text-[rgb(120,198,187)]" />,
              skills: ["HTML/CSS", "JavaScript", "React", "TypeScript"],
            },
            {
              title: "Machine Learning",
              icon: <Paintbrush className="w-5 h-5 text-[rgb(120,198,187)]" />,
              skills: ["OpenCV", "YOLO", "Computer Vision", "Generative AI"],
            },
            {
              title: "AWS Cloud",
              icon: <Laptop className="w-5 h-5 text-[rgb(120,198,187)]" />,
              skills: ["EC2 Instances", "Storage S3", "RDS Instances"],
            },
            {
              title: "Other",
              icon: (
                <MoveHorizontal className="w-5 h-5 text-[rgb(120,198,187)]" />
              ),
              skills: ["Git/GitHub", "Performance", "Accessibility", "Testing"],
            },
          ].map((group) => (
            <Tilt
              key={group.title}
              perspective={1000}
              scale={1.02}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              className="transform-gpu"
            >
              <motion.div
                className="animate-border-glow glass-effect p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-black rounded-lg mr-3 border border-[rgb(120,198,187)]/30">
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
                      className="px-3 py-1 bg-black rounded-full text-sm font-bold text-white border border-[rgb(120,198,187)]/30"
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
