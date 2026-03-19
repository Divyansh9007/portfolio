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

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative group overflow-hidden rounded-lg bg-black/50 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <motion.div
        className="h-full flex flex-col overflow-hidden"
      >
        <div className="relative overflow-hidden aspect-video flex items-center justify-center bg-black/20">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-auto h-auto min-w-full min-h-full object-cover group-hover:brightness-110 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors duration-300">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-700 group-hover:border-teal-500/30 transition-colors duration-300">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-teal-400 transition-colors rounded-lg bg-black/30 border border-gray-700 hover:border-teal-500/50"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm font-medium">Source</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-teal-400 transition-colors rounded-lg bg-black/30 border border-gray-700 hover:border-teal-500/50"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">Live Demo</span>
              </a>
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
      className="py-20 px-6 bg-gradient-to-br from-[#0a0e1a] via-[#141820] to-[#0f1216]"
    >
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
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
                className="w-full px-4 py-2 bg-black/50 text-white border border-gray-700 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {allTags.map((tag, index) => (
                <motion.button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    filter === tag
                      ? "bg-teal-500 text-black"
                      : "border border-gray-700 text-gray-300 hover:border-teal-500 hover:text-teal-400"
                  }`}
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
            <Tags className="w-16 h-16 text-teal-500 mx-auto mb-4" />
            <p className="text-gray-300">
              No projects found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
