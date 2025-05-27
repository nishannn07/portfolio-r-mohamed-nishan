import React from 'react';
// Import both motion AND AnimatePresence from framer-motion
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full text-light-heading dark:text-dark-heading bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-light-card dark:ring-offset-dark-card focus:ring-light-primary dark:focus:ring-dark-primary"
      whileHover={{ scale: 1.1, rotate: theme === 'light' ? 15 : -15 }}
      whileTap={{ scale: 0.9 }}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'} // Tooltip
      style={{ overflow: 'hidden' }} // Prevents icon jump during animation
    >
      {/* Use AnimatePresence to manage the enter/exit animation */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme} // Key change triggers the animation
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: 'inline-block' }} // Prevents layout shift
        >
          {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
