
import { useEffect, useState } from 'react';

export const useFixedCameraScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
      
      // Determine current section based on scroll progress
      const totalSections = 8; // Hero, Problem, Solution, Features, Testimonials, Pricing, FAQ, Footer
      const sectionProgress = progress * totalSections;
      setCurrentSection(Math.floor(sectionProgress));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollProgress, currentSection };
};
