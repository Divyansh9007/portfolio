import { projects } from '../../data/projects';
import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Code2, Search, Tags } from 'lucide-react';
import { ProjectData } from '../../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProjectsProps {
  id: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="animate-border-glow glass-effect overflow-hidden"
    >
      <div className="relative overflow-hidden aspect-video">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-6"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <motion.span 
                  key={tag}
                  className="px-3 py-1 text-sm bg-[rgb(120,198,187)]/80 text-black font-bold rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              {project.liveUrl && (
                <motion.a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white hover:text-[rgb(120,198,187)] transition-colors bg-black/30 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              )}
              {project.repoUrl && (
                <motion.a 
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white hover:text-[rgb(120,198,187)] transition-colors bg-black/30 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="p-6">
        <motion.h3 
          className="text-xl font-semibold mb-2 text-[rgb(120,198,187)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {project.title}
        </motion.h3>
        <motion.p 
          className="text-white font-bold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {project.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    const filtered = projects.filter((project) => {
      const matchesFilter = filter === 'all' || project.tags.includes(filter);
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
    setFilteredProjects(filtered);
  }, [filter, searchTerm]);

  const allTags = ['all', ...new Set(projects.flatMap((project) => project.tags))];

  return (
    <section 
      id={id} 
      ref={ref}
      className="py-20 px-6 bg-black"
    >
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(120,198,187)]">Featured Projects</h2>
          <div className="w-20 h-1 bg-[rgb(120,198,187)] mx-auto mb-8"></div>
          <p className="text-white font-bold max-w-3xl mx-auto text-lg">
            Here are some of my recent projects showcasing my skills and experience.
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
                      ? 'bg-[rgb(120,198,187)] text-black'
                      : 'border border-[rgb(120,198,187)]/30 text-white hover:border-[rgb(120,198,187)]'
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
            <p className="text-white font-bold">No projects found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;