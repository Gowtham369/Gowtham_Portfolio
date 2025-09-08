import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = ({ data }) => {
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="experience-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {data && data.length > 0 ? (
            data.map((job, index) => (
              <motion.div key={index} className="card experience-card" variants={itemVariants}>
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{job.position}</h3>
                    <div className="experience-company">
                      <FaBriefcase />
                      {job.name || job.company}
                    </div>
                  </div>
                  <div className="experience-duration">
                    <FaCalendarAlt style={{ marginRight: '0.5rem' }} />
                    {formatDate(job.startDate)} - {formatDate(job.endDate)}
                  </div>
                </div>
                
                {job.location && (
                  <div className="experience-location">
                    <FaMapMarkerAlt />
                    {job.location}
                  </div>
                )}
                
                <div className="experience-summary">
                  {job.summary || 'Contributed to various projects and gained valuable experience in software development.'}
                </div>
                
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="experience-highlights">
                    {job.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))
          ) : (
            // Default experience if no data from API
            [
              {
                position: 'Full Stack Developer',
                company: 'Tech Solutions Inc.',
                startDate: '2022-01-01',
                endDate: null,
                location: 'Remote',
                summary: 'Developing and maintaining web applications using modern technologies like React, Node.js, and MongoDB.',
                highlights: [
                  'Built responsive web applications serving 10,000+ users',
                  'Improved application performance by 40% through optimization',
                  'Collaborated with cross-functional teams using Agile methodologies'
                ]
              },
              {
                position: 'Frontend Developer',
                company: 'Digital Agency',
                startDate: '2021-06-01',
                endDate: '2021-12-31',
                location: 'New York, NY',
                summary: 'Focused on creating engaging user interfaces and improving user experience across multiple client projects.',
                highlights: [
                  'Developed pixel-perfect responsive designs',
                  'Implemented modern JavaScript frameworks',
                  'Mentored junior developers'
                ]
              }
            ].map((job, index) => (
              <motion.div key={index} className="card experience-card" variants={itemVariants}>
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{job.position}</h3>
                    <div className="experience-company">
                      <FaBriefcase />
                      {job.company}
                    </div>
                  </div>
                  <div className="experience-duration">
                    <FaCalendarAlt style={{ marginRight: '0.5rem' }} />
                    {formatDate(job.startDate)} - {formatDate(job.endDate)}
                  </div>
                </div>
                
                <div className="experience-location">
                  <FaMapMarkerAlt />
                  {job.location}
                </div>
                
                <div className="experience-summary">
                  {job.summary}
                </div>
                
                <ul className="experience-highlights">
                  {job.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;