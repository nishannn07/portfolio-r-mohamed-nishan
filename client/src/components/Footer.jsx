import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { contactInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-8 mt-auto"> {/* mt-auto pushes footer down */}
      <div className="container mx-auto px-6 text-center">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="GitHub"
            className="hover:text-light-primary dark:hover:text-dark-primary transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
            className="hover:text-light-primary dark:hover:text-dark-primary transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
           <a
            href={`mailto:${contactInfo.email}`}
            aria-label="Email"
            title="Email"
            className="hover:text-light-primary dark:hover:text-dark-primary transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          &copy; {currentYear} R Mohamed Nishan. All Rights Reserved.
        </p>
        {/* Optional: Add a small credit */}
        {/* <p className="text-xs mt-2">
          Designed & Built by R Mohamed Nishan (with AI assistance)
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
