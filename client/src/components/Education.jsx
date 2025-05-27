import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { education } from '../data/portfolioData'; // Import education data
import { textVariant, fadeIn } from '../utils/motion';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa'; // Example Icons

const EducationCard = ({ edu, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.2, 0.7)} // Staggered spring animation
    className="relative pl-10 pb-8 border-l-2 border-violet-200 dark:border-violet-700 last:pb-0 last:border-l-transparent" // Style last item differently
  >
    {/* Timeline Dot */}
    <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-violet-200 dark:bg-violet-700 ring-4 ring-light-background dark:ring-dark-background">
      <span className="h-2 w-2 rounded-full bg-light-primary dark:bg-dark-primary" />
    </span>

    {/* Card Content */}
    <div className="ml-4 p-4 rounded-lg bg-light-card dark:bg-dark-card shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
        <h3 className="text-lg font-semibold text-light-heading dark:text-dark-heading">{edu.institution}</h3>
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">{edu.duration}</p>
      </div>
      <p className="text-md font-medium text-light-primary dark:text-dark-primary mb-1">{edu.degree}</p>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
         <FaMapMarkerAlt className="w-3 h-3 mr-1.5 flex-shrink-0" />
         <span>{edu.location}</span>
      </div>
      {edu.details && (
          <p className="text-sm text-gray-600 dark:text-gray-300 bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded inline-block">{edu.details}</p>
      )}
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.h2 variants={textVariant()} className="section-title">
        Education
      </motion.h2>

      <div className="max-w-2xl mx-auto">
        {education.map((edu, index) => (
          <EducationCard key={`education-${index}`} edu={edu} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, 'education', 'bg-light-background dark:bg-dark-background');
