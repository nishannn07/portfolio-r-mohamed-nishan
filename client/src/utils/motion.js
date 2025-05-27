// /client/src/utils/motion.js

/**
 * Defines reusable animation variants for Framer Motion.
 */

export const textVariant = (delay = 0) => ({
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, duration: 1, delay },
    },
  });
  
  export const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { type, delay, duration, ease: 'easeOut' },
    },
  });
  
  export const zoomIn = (delay, duration) => ({
      hidden: { scale: 0.8, opacity: 0 }, // Start slightly smaller
      show: {
          scale: 1,
          opacity: 1,
          transition: { type: "tween", delay, duration, ease: 'easeOut' }
      }
  });
  
  export const slideIn = (direction, type, delay, duration) => ({
      hidden: {
          x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
          y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0, // Usually from bottom
          opacity: 0,
      },
      show: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: { type, delay, duration, ease: [0.25, 0.25, 0.25, 0.75] } // Custom ease
      }
  });
  
  // Stagger container variant for animating children sequentially
  export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
      hidden: {},
      show: {
          transition: {
              staggerChildren,
              delayChildren,
          }
      }
  });
  
  // Simple fade in for individual items within a staggered container
  export const itemFadeIn = {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };
  
  // Card flip animation (example)
  export const cardFlip = {
      hidden: { rotateY: 90, opacity: 0 },
      show: { rotateY: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15, duration: 0.6 } }
  };
  
  