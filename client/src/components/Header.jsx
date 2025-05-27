import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import MobileNav from './MobileNav';
import { contactInfo } from '../data/portfolioData'; // Import data

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo/Initials */}
          <motion.a
             href="#home"
             className="text-2xl md:text-3xl font-heading font-extrabold text-light-heading dark:text-dark-heading hover:text-light-primary dark:hover:text-dark-primary transition-colors"
             whileHover={{ scale: 1.05 }}
             title="R Mohamed Nishan - Home"
          >
            RMN {/* Initials */}
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
             {navLinks.map((link) => (
               <motion.a
                 key={link.name}
                 href={link.href}
                 className="text-sm font-medium text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                 whileHover={{ y: -2 }}
               >
                 {link.name}
               </motion.a>
             ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
             <ThemeToggle />
             <motion.button
                onClick={toggleMobileMenu}
                className="text-light-heading dark:text-dark-heading focus:outline-none z-50 p-1 rounded focus:ring-2 ring-light-primary dark:ring-dark-primary"
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle Menu"
             >
               {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
             </motion.button>
          </div>
        </div>
      </motion.header>
       {/* Mobile Navigation Menu */}
       <MobileNav isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} navLinks={navLinks} />
    </>
  );
};

export default Header;
