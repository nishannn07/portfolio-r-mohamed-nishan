import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData'; // Import project data
import { textVariant, fadeIn, staggerContainer } from '../utils/motion';

const Projects = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.h2 variants={textVariant()} className="section-title">
        My Projects
      </motion.h2>

      <motion.p
        variants={fadeIn('up', 'tween', 0.1, 0.8)}
        className="text-center max-w-3xl mx-auto mb-12 md:mb-16 text-lg text-light-text dark:text-dark-text"
      >
        Here are a few projects I've worked on, showcasing my skills in full-stack development, cloud deployment, and frontend technologies.
      </motion.p>

      {/* Stagger container for project cards */}
      <motion.div
        variants={staggerContainer(0.3, 0.2)} // Adjust stagger timing
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index} // Pass index for staggered animation delay
            {...project} // Spread project data as props
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects'); // Default alternating background
