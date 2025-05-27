import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, level, delay = 0 }) => {
  const barContainerVariants = {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { delay: delay, duration: 0.4 } }
  };

  const barFillVariants = {
    hidden: { scaleX: 0, originX: 0 }, // Animate width using scaleX
    show: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1], // Smooth ease-out cubic bezier
        delay: delay + 0.3, // Delay fill animation slightly after container appears
      },
    },
  };

  const percentageTextVariants = {
      hidden: { opacity: 0, x: 10 },
      show: { opacity: 1, x: 0, transition: { delay: delay + 0.7, duration: 0.4 } }
  }

  return (
    <motion.div
        className="mb-4 w-full"
        variants={barContainerVariants}
        // No need for whileInView here if parent section handles it
    >
      <div className="flex justify-between mb-1 items-baseline">
        <span className="text-sm font-medium text-light-heading dark:text-dark-heading">{skill}</span>
        <motion.span
            className="text-xs font-semibold text-light-primary dark:text-dark-primary"
            variants={percentageTextVariants}
        >
            {level}%
        </motion.span>
      </div>
      {/* Background of the bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
         {/* Animated fill */}
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r from-violet-400 to-violet-600 dark:from-violet-300 dark:to-violet-500`} // Gradient fill
          style={{ width: `${level}%` }} // Set width directly
          variants={barFillVariants}
          // No initial/animate needed here if controlled by parent's whileInView
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
