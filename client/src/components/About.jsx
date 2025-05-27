import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { textVariant, fadeIn } from '../utils/motion';
import profilePlaceholder from '../assets/PIC.jpg'; // Placeholder image

const About = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.h2 variants={textVariant()} className="section-title">
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Photo */}
        <motion.div
          variants={fadeIn('right', 'spring', 0.3, 0.8)} // Spring animation
          className="flex-shrink-0 w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80"
        >
          {/* !!! REPLACE with actual photo URL or keep placeholder !!! */}
          <img
             src={profilePlaceholder}
             alt="R Mohamed Nishan"
             className="profile-photo w-full h-full rounded-full object-cover shadow-lg dark:shadow-violet-500/20"
             // If using URL:
             // onerror="this.onerror=null; this.src='${profilePlaceholder}';"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          variants={fadeIn('left', 'spring', 0.4, 0.9)}
          className="text-lg leading-relaxed text-center md:text-left text-light-text dark:text-dark-text max-w-2xl" // Max width for text
        >
          <p className="mb-5">
            I'm a final-year Computer Science and Engineering student at <strong className="font-semibold text-light-heading dark:text-dark-heading">Lovely Professional University</strong> (CGPA: 7.92), passionate about building robust and scalable software solutions.
          </p>
           <p className="mb-5">
            With a strong foundation in <strong className="font-semibold text-light-primary dark:text-dark-primary">C++, Java, Python, and JavaScript</strong>, I focus on full-stack development using frameworks like <strong className="font-semibold text-light-primary dark:text-dark-primary">Node.js & Express.js</strong> alongside modern frontend tools including <strong className="font-semibold text-light-primary dark:text-dark-primary">Tailwind CSS</strong>. I also have experience with databases like <strong className="font-semibold text-light-primary dark:text-dark-primary">MySQL and MongoDB</strong>.
          </p>
          <p className="mb-5">
            I've gained practical experience deploying applications on <strong className="font-semibold text-light-primary dark:text-dark-primary">AWS</strong> and developed crucial soft skills like <strong className="font-semibold text-gray-700 dark:text-gray-300">communication, adaptability, and problem-solving</strong> through my internship at Thozhamai.
          </p>
          <p>
            I'm eager to contribute to innovative projects and continuously expand my technical horizons.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// Wrap component with HOC for scroll animations and ID
export default SectionWrapper(About, 'about'); // Default alternating background
