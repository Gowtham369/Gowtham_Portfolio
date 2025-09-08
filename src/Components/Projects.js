import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {data && data.length > 0 ? (
            data.map((project, index) => (
              <motion.div key={index} className="card project-card" variants={itemVariants}>
                <div className="project-content">
                  <h3>{project.displayName || project.name}</h3>
                  <p>{project.summary || project.description || 'A showcase of modern development techniques and best practices.'}</p>
                  <div className="project-tech">
                    {project.languages && project.languages.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.libraries && project.libraries.map((lib, libIndex) => (
                      <span key={libIndex} className="tech-tag">
                        {lib}
                      </span>
                    ))}
                  </div>
                </div>
                {(project.url || project.githubUrl || project.repositoryUrl) && (
                  <div className="project-links">
                    {project.url && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                    {(project.githubUrl || project.repositoryUrl) && (
                      <a 
                        href={project.githubUrl || project.repositoryUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        <FaGithub />
                        Code
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))
          ) : (
            // Default projects if no data from API
            [
              {
                name: 'E-Commerce Platform',
                summary: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
                technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
                demoUrl: '#',
                githubUrl: '#'
              },
              {
                name: 'Task Management App',
                summary: 'Collaborative task management tool with real-time updates',
                technologies: ['React', 'Socket.io', 'PostgreSQL', 'Redux'],
                demoUrl: '#',
                githubUrl: '#'
              },
              {
                name: 'Weather Dashboard',
                summary: 'Interactive weather dashboard with data visualization',
                technologies: ['JavaScript', 'Chart.js', 'Weather API', 'CSS3'],
                demoUrl: '#',
                githubUrl: '#'
              }
            ].map((project, index) => (
              <motion.div key={index} className="card project-card" variants={itemVariants}>
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                </div>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoUrl} className="btn btn-outline">
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="btn btn-outline">
                    <FaGithub />
                    Code
                  </a>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;