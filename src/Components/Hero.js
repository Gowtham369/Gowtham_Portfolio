import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaAws, FaDocker } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiJenkins, SiAmazonaws } from 'react-icons/si';
import photo from '../Assets/LinkedinPhoto.jpg';

const Hero = ({ data }) => {
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
    <>
      <div className="floating-particles">
        {[...Array(9)].map((_, i) => <div key={i} className="particle" />)}
      </div>
      <section id="hero" className="hero">
        <div className="devops-icons">
          <div className="floating-icon"><FaAws /></div>
          <div className="floating-icon"><FaDocker /></div>
          <div className="floating-icon"><SiKubernetes /></div>
          <div className="floating-icon"><SiTerraform /></div>
          <div className="floating-icon"><SiJenkins /></div>
          <div className="floating-icon"><SiAmazonaws /></div>
        </div>
        <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>
            Hi, I'm {data?.name || 'Gowtham'}
          </motion.h1>
          
          <motion.div className="hero-subtitle" variants={itemVariants}>
            <TypeAnimation
              sequence={[
                'DevOps Engineer',
                2000,
                'AWS Solutions Architect',
                2000,
                'Cloud Infrastructure Expert',
                2000,
                'CI/CD Specialist',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.p className="hero-description" variants={itemVariants}>
            {data?.summary || 'Passionate DevOps engineer specializing in AWS cloud infrastructure, containerization, and CI/CD pipelines. I automate, optimize, and scale applications for maximum efficiency and reliability.'}
          </motion.p>
          
          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#contact" className="btn btn-primary">
              <FaEnvelope />
              Get In Touch
            </a>
            <a 
              href={data?.profiles?.find(p => p.network === 'GitHub')?.url || '#'} 
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              View Work
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.5
          }}
        >
          <img src={photo} alt="Gowtham" />
        </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;