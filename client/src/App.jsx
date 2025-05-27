import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience'; // Added Experience
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { useTheme } from './context/ThemeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200); // Slightly longer load time simulation

    // Apply theme class to html element for Tailwind dark: prefix
    document.documentElement.className = theme;

    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <AnimatePresence>
      {isLoading ? (
         <motion.div key="loader">
             <LoadingScreen />
         </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`App ${theme} flex flex-col min-h-screen`} // Ensure footer sticks to bottom
        >
          <Header />
          <main className="flex-grow"> {/* Allow main content to grow */}
            <Hero />
            <About />
            <Skills />
            <Experience /> {/* Added Experience Section */}
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
