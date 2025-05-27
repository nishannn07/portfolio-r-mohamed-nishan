import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { experience } from '../data/portfolioData'; // Import experience data
import { textVariant, fadeIn } from '../utils/motion';
import { FaBriefcase } from 'react-icons/fa'; // Example Icon

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.3, 0.75)} // Staggered spring animation
    className="relative pl-10 pb-8 border-l-2 border-violet-200 dark:border-violet-700"
  >
    {/* Timeline Dot */}
    <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-violet-200 dark:bg-violet-700">
      <span className="h-2 w-2 rounded-full bg-light-primary dark:bg-dark-primary" />
    </span>

    {/* Card Content */}
    <div className="ml-4">
      <h3 className="text-xl font-semibold text-light-heading dark:text-dark-heading mb-1">{exp.title}</h3>
      <p className="text-md font-medium text-light-primary dark:text-dark-primary mb-1">{exp.company}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.duration}</p>
      <ul className="list-disc list-outside ml-5 space-y-1 text-light-text dark:text-dark-text text-base">
        {exp.description.map((point, i) => (
          <li key={`exp-point-${index}-${i}`}>{point}</li>
        ))}
      </ul>
       {exp.skillsDeveloped && exp.skillsDeveloped.length > 0 && (
            <div className="mt-4">
                <h4 className="text-sm font-semibold mb-1 text-gray-600 dark:text-gray-400">Skills Developed:</h4>
                <div className="flex flex-wrap gap-2">
                    {exp.skillsDeveloped.map((skill) => (
                        <span key={skill} className="skill-tag !text-xs !px-2 !py-0.5"> {/* Smaller tags */}
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        )}
    </div>
  </motion.div>
);


const Experience = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.h2 variants={textVariant()} className="section-title">
        Internship Experience
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        {experience.map((exp, index) => (
          <ExperienceCard key={`experience-${index}`} exp={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'experience', 'bg-light-background dark:bg-dark-background'); // Ensure correct background
