import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, fadeIn, slideIn } from '../utils/motion'; // Import animation variants
import { contactInfo } from '../data/portfolioData'; // Import data

const Hero = () => {
  return (
    // Using section tag directly as it has unique background/styling
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 md:pt-16 text-center overflow-hidden">
       {/* Optional: Animated background elements */}
       {/* Example: Subtle floating shapes */}
       <motion.div
         className="absolute top-1/4 left-[15%] w-12 h-12 bg-violet-400/20 dark:bg-violet-600/20 rounded-full filter blur-lg animate-float"
         style={{ animationDelay: '0s', animationDuration: '5s' }} // Slower animation
         variants={fadeIn('down', 'tween', 1, 1)} initial="hidden" animate="show"
       />
       <motion.div
         className="absolute bottom-[20%] right-[10%] w-16 h-16 bg-pink-400/10 dark:bg-pink-600/10 rounded-xl filter blur-xl animate-float"
         style={{ animationDelay: '1.5s', animationDuration: '6s' }}
         variants={fadeIn('up', 'tween', 1.2, 1)} initial="hidden" animate="show"
        />
        <motion.div
         className="absolute top-1/3 right-[20%] w-10 h-10 bg-teal-400/15 dark:bg-teal-600/15 rounded-full filter blur-md animate-float"
         style={{ animationDelay: '0.8s', animationDuration: '4s' }}
         variants={fadeIn('left', 'tween', 1.4, 1)} initial="hidden" animate="show"
        />


      <div className="container mx-auto px-6 z-10 relative"> {/* Ensure content is above background */}
        <motion.h1
          variants={textVariant(0.2)}
          initial="hidden"
          animate="show"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4"
        >
          R Mohamed Nishan
        </motion.h1>
        <motion.p
          variants={textVariant(0.4)}
          initial="hidden"
          animate="show"
          className="text-xl md:text-2xl font-semibold mb-8 text-violet-200 dark:text-violet-300" // Adjusted color
        >
          Software Developer | Full-Stack Engineer | Cloud Enthusiast
        </motion.p>
        <motion.p
          variants={fadeIn('up', 'tween', 0.6, 0.8)}
          initial="hidden"
          animate="show"
          className="max-w-2xl mx-auto text-lg md:text-xl mb-10 text-gray-100 dark:text-gray-200" // Adjusted color
        >
          Passionate Computer Science student specializing in building scalable web applications and leveraging cloud technologies. Seeking challenging opportunities to apply my skills.
        </motion.p>
        <motion.div
          variants={fadeIn('up', 'tween', 0.8, 0.8)}
          initial="hidden"
          animate="show"
          className="space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <motion.a
             href="#projects"
             className="btn btn-primary"
             whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
             whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
             href={contactInfo.linkedin} // Link to LinkedIn
             target="_blank"
             rel="noopener noreferrer"
             className="btn btn-secondary"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
             whileTap={{ scale: 0.95 }}
          >
            Connect on LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; // No HOC needed
