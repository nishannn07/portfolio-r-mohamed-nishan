import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNav = ({ isOpen, toggleMenu, navLinks }) => {
  const menuVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
      transition: { type: 'tween', ease: 'easeIn', duration: 0.3, staggerChildren: 0.05, staggerDirection: -1 },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'tween', ease: 'easeOut', duration: 0.3, staggerChildren: 0.07 },
    },
  };

  const linkVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'tween', ease: 'easeOut' } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-40 bg-light-card dark:bg-dark-card md:hidden"
          onClick={toggleMenu} // Close on backdrop click
        >
          <motion.nav
             className="flex flex-col items-center justify-center h-full space-y-6 pt-20"
             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside nav
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                variants={linkVariants}
                className="text-2xl font-medium text-light-heading dark:text-dark-heading hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                onClick={toggleMenu} // Close menu on link click
              >
                {link.name}
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
