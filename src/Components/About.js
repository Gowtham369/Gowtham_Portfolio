import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUser, FaCode, FaGraduationCap, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa';

const About = ({ data }) => {
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
    <section id="about" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '2rem' }}
        >
          <motion.div className="card" variants={itemVariants}>
            <div style={{ fontSize: '2rem', color: 'var(--aws-orange)', marginBottom: '1rem' }}>
              <FaUser />
            </div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>About Me</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              {data?.basics?.summary}
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
              <FaMapMarkerAlt />
              <span>{data?.basics?.location?.city}</span>
            </div>
          </motion.div>
          
          <motion.div className="card" variants={itemVariants}>
            <div style={{ fontSize: '2rem', color: 'var(--cloud-blue)', marginBottom: '1rem' }}>
              <FaUniversity />
            </div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Education</h3>
            {data?.education?.map((edu, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <h4 style={{ color: 'var(--aws-orange)', fontSize: '1rem', marginBottom: '0.5rem' }}>
                  {edu.studyType} in {edu.area}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  {edu.institution}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  {edu.start?.year} - {edu.end?.year || 'Present'}
                </p>
                {edu.gpa && edu.gpa !== 'NA' && (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    GPA: {edu.gpa}
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="languages-section"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ marginTop: '3rem' }}
        >
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-primary)' }}>
            Languages
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {data?.languages?.map((lang, index) => (
              <div key={index} className="card" style={{ minWidth: '150px', textAlign: 'center', padding: '1rem' }}>
                <h4 style={{ color: 'var(--aws-orange)', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  {lang.language}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  {lang.fluency}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
