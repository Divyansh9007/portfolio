import { projects } from "../../data/projects";
import { useState, useEffect } from "react";
import { ExternalLink, Github, Search, Tags } from "lucide-react";
import { ProjectData } from "../../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProjectsProps {
  id: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const hoverVariants = {
    rest: { y: 0 },
    hover: { y: -10 },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.03 },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover="hover"
      className="relative group overflow-hidden rounded-xl bg-black/70 backdrop-blur-md border border-[#2a303c] hover:border-[rgb(120,198,187)]/50 transition-all duration-300 shadow-2xl"
    >
      {/* Wavy background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[rgb(120,198,187)]/10 rounded-full filter blur-xl"></div>
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-[rgb(120,198,187)]/10 rounded-full filter blur-xl"></div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[rgb(120,198,187)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <motion.div
        variants={hoverVariants}
        initial="rest"
        transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
        className="h-full flex flex-col overflow-hidden"
      >
        <div className="relative overflow-hidden aspect-video flex items-center justify-center bg-black/10">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-auto h-auto min-w-full min-h-full object-cover"
            variants={imageVariants}
            initial="rest"
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[rgb(120,198,187)] transition-colors duration-300">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-[rgb(120,198,187)]/20 text-[rgb(120,198,187)] rounded-full backdrop-blur-sm border border-[rgb(120,198,187)]/30"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <p className="text-[#b3bac7] mb-6 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex items-center space-x-3 mt-auto pt-4 border-t border-[#2a303c] group-hover:border-[rgb(120,198,187)]/30 transition-colors duration-300">
            {project.repoUrl && (
              <motion.a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-white hover:text-[rgb(120,198,187)] transition-colors rounded-lg backdrop-blur-sm bg-[#1a1f29]/80 border border-[#2a303c] hover:border-[rgb(120,198,187)] group-hover:bg-[#1a1f29]/90"
                whileHover={{
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                <span className="text-sm font-medium">Source</span>
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-white hover:text-[rgb(120,198,187)] transition-colors rounded-lg backdrop-blur-sm bg-[#1a1f29]/80 border border-[#2a303c] hover:border-[rgb(120,198,187)] group-hover:bg-[#1a1f29]/90"
                whileHover={{
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const filtered = projects.filter((project) => {
      const matchesFilter = filter === "all" || project.tags.includes(filter);
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesFilter && matchesSearch;
    });
    setFilteredProjects(filtered);
  }, [filter, searchTerm]);

  const allTags = [
    "all",
    ...new Set(projects.flatMap((project) => project.tags)),
  ];

  return (
    <section
      id={id}
      ref={ref}
      className="py-20 px-6 bg-gradient-to-r from-[#060a0e] via-[#181e29] to-[#0f1216]"
    >
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[rgb(202,208,207)] via-cyan-400 to-[rgb(8,50,35)] bg-clip-text text-transparent drop-shadow-lg tracking-tight">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[rgb(120,198,187)] mx-auto mb-8"></div>
          <p className="text-white font-bold max-w-3xl mx-auto text-lg">
            Here are some of my recent projects showcasing my skills and
            experience.
          </p>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-black text-white border border-[rgb(120,198,187)]/30 rounded-lg focus:ring-2 focus:ring-[rgb(120,198,187)]"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[rgb(120,198,187)] w-5 h-5" />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {allTags.map((tag, index) => (
                <motion.button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    filter === tag
                      ? "bg-[rgb(120,198,187)] text-black"
                      : "border border-[rgb(120,198,187)]/30 text-white hover:border-[rgb(120,198,187)]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Tags className="w-16 h-16 text-[rgb(120,198,187)] mx-auto mb-4" />
            <p className="text-white font-bold">
              No projects found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
