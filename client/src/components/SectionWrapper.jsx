import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion'; // Import stagger variant

/**
 * Higher-Order Component (HOC) to wrap sections with scroll-triggered animations.
 * @param {React.ComponentType} Component - The component to wrap.
 * @param {string} idName - The ID for the section element (for navigation).
 * @param {string} [extraClasses=''] - Optional additional CSS classes for the section.
 * @returns {React.FC} - The wrapped component with animation capabilities.
 */
const SectionWrapper = (Component, idName, extraClasses = '') =>
  function HOC(props) { // Pass props down to the wrapped component
    return (
      <motion.section
        id={idName}
        variants={staggerContainer()} // Apply stagger effect to children
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }} // Trigger once, when 15% is visible
        className={`relative ${extraClasses}`} // Apply extra classes
      >
        {/* Anchor offset span for fixed header navigation */}
        <span className="absolute -top-[80px] md:-top-[100px]" id={`anchor-${idName}`}>&nbsp;</span>

        <Component {...props} /> {/* Render the wrapped component and pass props */}
      </motion.section>
    );
  };

export default SectionWrapper;
