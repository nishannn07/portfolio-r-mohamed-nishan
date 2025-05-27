import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { ease: 'easeInOut', duration: 0.4 } }
  };

  // Animated logo (initials pulsing with color shift)
  const logoVariants = {
     initial: { scale: 1, opacity: 0.7 },
     animate: {
        scale: [1, 1.15, 1],
        opacity: [0.7, 1, 0.7],
        // Example: Color transition (sync with theme colors if possible)
        // color: ["#8b5cf6", "#a78bfa", "#8b5cf6"], // Light mode primary
        transition: {
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut"
        }
     }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-light-background dark:bg-dark-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
          className="text-6xl font-heading font-extrabold text-light-primary dark:text-dark-primary mb-5"
          variants={logoVariants}
          initial="initial"
          animate="animate"
      >
          RMN {/* Initials */}
      </motion.div>
      <motion.p
        className="text-lg text-light-text dark:text-dark-text tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Loading Portfolio...
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
