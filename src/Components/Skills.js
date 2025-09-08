import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaJs, FaPython, FaGitAlt, FaDatabase, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiNextdotjs, SiKubernetes, SiTerraform, SiJenkins, SiAmazonaws, SiMicrosoftazure } from 'react-icons/si';

const Skills = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Dynamic skill categorization from API data
  const categorizeSkills = (skills) => {
    if (!skills) return [];
    
    const uniqueSkills = [...new Set(skills.map(skill => skill.name))];
    
    const categories = {
      'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'Azure', 'Azure DevOps', 'CICD', 'Gitlab CI', 'Harness CD'],
      'Infrastructure': ['EC2', 'S3', 'Lambda', 'Lamba', 'IAM', 'VPC', 'EKS', 'ECS', 'Route53', 'AKS', 'AAD'],
      'Development': ['ReactJS', 'Javascript', 'Python', 'Java', 'C', 'Html', 'CSS', 'Bootstrap', 'SCSS'],
      'Monitoring & Data': ['Datadog', 'Splunk', 'AWS CloudWatch', 'MongoDB Atlas', 'MySQL', 'Kafka'],
      'Tools & Others': ['GIT', 'Linux', 'Bash', 'MS Office']
    };
    
    return Object.entries(categories).map(([title, categorySkills]) => {
      const matchedSkills = uniqueSkills.filter(skill => 
        categorySkills.some(catSkill => 
          skill.toLowerCase().includes(catSkill.toLowerCase()) || 
          catSkill.toLowerCase().includes(skill.toLowerCase())
        )
      );
      return { title, skills: matchedSkills };
    }).filter(category => category.skills.length > 0);
  };

  const skillCategories = categorizeSkills(data);
  
  const getIconForCategory = (title, skills) => {
    if (skills.some(skill => skill.toLowerCase().includes('azure'))) {
      return <SiMicrosoftazure />;
    }
    const icons = {
      'Cloud & DevOps': <FaAws />,
      'Infrastructure': <SiAmazonaws />,
      'Development': <FaReact />,
      'Monitoring & Data': <FaDatabase />,
      'Tools & Others': <FaGitAlt />
    };
    return icons[title] || <FaGitAlt />;
  };

  // Dynamic certifications from API
  const getCertifications = (data) => {
    if (!data?.certificates) return [];
    return data.certificates.map(cert => ({
      name: cert.name,
      issuer: cert.issuer,
      date: cert.date
    }));
  };

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
    <section id="skills" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} className="card skill-category" variants={itemVariants}>
              <div style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                {getIconForCategory(category.title, category.skills)}
              </div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                {category.title}
              </h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {(data?.certificates?.length > 0 || true) && (
          <motion.div 
            className="certifications"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ marginTop: '4rem' }}
          >
            <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              Certifications
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {data?.certificates?.length > 0 ? (
                data.certificates.map((cert, index) => (
                  <div key={index} className="card" style={{ textAlign: 'center', border: '2px solid var(--primary)' }}>
                    <div style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                      {cert.name.toLowerCase().includes('aws') ? <SiAmazonaws /> : 
                       cert.name.toLowerCase().includes('azure') ? <SiMicrosoftazure /> : 
                       cert.name.toLowerCase().includes('docker') ? <FaDocker /> : <FaAws />}
                    </div>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
                      {cert.name}
                    </h4>
                    <p style={{ color: 'var(--text-muted)' }}>
                      {cert.issuer}
                    </p>
                    {cert.date && (
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        {new Date(cert.date).getFullYear()}
                      </p>
                    )}
                  </div>
                ))
              ) : (
                // Default certifications
                <>
                  <div className="card" style={{ textAlign: 'center', border: '2px solid var(--primary)' }}>
                    <div style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                      <SiAmazonaws />
                    </div>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
                      AWS Solutions Architect
                    </h4>
                    <p style={{ color: 'var(--text-muted)' }}>
                      Associate Level
                    </p>
                  </div>
                  <div className="card" style={{ textAlign: 'center', border: '2px solid var(--cloud-blue)' }}>
                    <div style={{ fontSize: '3rem', color: 'var(--cloud-blue)', marginBottom: '1rem' }}>
                      <FaDocker />
                    </div>
                    <h4 style={{ color: 'var(--cloud-blue)', marginBottom: '0.5rem' }}>
                      Docker Certified
                    </h4>
                    <p style={{ color: 'var(--text-muted)' }}>
                      Associate Level
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}


      </div>
    </section>
  );
};

export default Skills;