import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import LoadingSpinner from './Components/LoadingSpinner';
import './Assets/Style.css';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://gitconnected.com/v1/portfolio/gowtham369');
        setPortfolioData(response.data);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (!portfolioData) return <div className="error">Failed to load portfolio data</div>;

  return (
    <motion.div 
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main>
        <Hero data={portfolioData.basics} />
        <About data={portfolioData} />
        <Skills data={portfolioData.skills} />
        <Projects data={portfolioData.projects} />
        <Experience data={portfolioData.work} />
        <Contact data={portfolioData.basics} />
      </main>
    </motion.div>
  );
}

export default App;
