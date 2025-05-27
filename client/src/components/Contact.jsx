import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'; // For making API requests
import SectionWrapper from './SectionWrapper';
import { contactInfo } from '../data/portfolioData';
import { slideIn, textVariant } from '../utils/motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' }); // Added honeypot
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear status message on new input
    if (formStatus.submitted) {
        setFormStatus({ submitted: false, success: false, message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic client-side validation (optional, server validation is key)
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ submitted: true, success: false, message: 'Please fill in all required fields.' });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
       setFormStatus({ submitted: true, success: false, message: 'Please enter a valid email address.' });
       return;
    }

    setIsLoading(true);
    setFormStatus({ submitted: false, success: false, message: '' }); // Reset status

    // Get API URL from environment variable (ensure it's set in .env.development)
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5002'}/api/contact`;
    // console.log("Submitting to:", apiUrl); // Debugging

    try {
      const response = await axios.post(apiUrl, formData);
      // console.log("Server Response:", response.data); // Debugging
      setFormStatus({ submitted: true, success: true, message: response.data.message || 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '', honeypot: '' }); // Clear form
    } catch (error) {
      console.error('Contact form submission error:', error.response?.data || error.message);
      setFormStatus({
        submitted: true,
        success: false,
        message: error.response?.data?.error || 'An error occurred. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6">
      <motion.h2 variants={textVariant()} className="section-title">
        Get In Touch
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-center">

        {/* Contact Info */}
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 0.8)}
          className="lg:w-1/3 space-y-6"
        >
            <h3 className="text-2xl font-semibold text-light-heading dark:text-dark-heading mb-4">Contact Information</h3>
            <p className="text-light-text dark:text-dark-text">
                Feel free to reach out via email, phone, or connect with me on social platforms.
            </p>
             <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-3 group text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                <FaEnvelope className="w-5 h-5 text-light-primary dark:text-dark-primary group-hover:scale-110 transition-transform"/>
                <span>{contactInfo.email}</span>
            </a>
             <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-3 group text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                <FaPhone className="w-5 h-5 text-light-primary dark:text-dark-primary group-hover:scale-110 transition-transform"/>
                <span>{contactInfo.phone}</span>
            </a>
            <div className="flex space-x-4 pt-4">
                 <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-500 hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                    <FaLinkedin size={24} />
                 </a>
                 <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="text-gray-500 hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                    <FaGithub size={24} />
                 </a>
            </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={slideIn('right', 'tween', 0.3, 0.9)}
          className="lg:w-1/2 w-full bg-light-card dark:bg-dark-card p-6 md:p-8 rounded-lg shadow-lg"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field - MUST be hidden from users */}
            <input type="text" name="honeypot" style={{ display: 'none' }} value={formData.honeypot} onChange={handleChange} tabIndex="-1" autoComplete="off" />

            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer block w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-light-primary dark:focus:border-dark-primary focus:outline-none focus:ring-0 transition-colors text-light-text dark:text-dark-text placeholder-transparent"
                placeholder="Your Name"
              />
              <label
                htmlFor="name"
                className="absolute left-3 -top-3.5 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-light-primary dark:peer-focus:text-dark-primary peer-focus:text-sm"
              >
                Your Name *
              </label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer block w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-light-primary dark:focus:border-dark-primary focus:outline-none focus:ring-0 transition-colors text-light-text dark:text-dark-text placeholder-transparent"
                placeholder="Your Email"
              />
               <label
                htmlFor="email"
                className="absolute left-3 -top-3.5 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-light-primary dark:peer-focus:text-dark-primary peer-focus:text-sm"
              >
                Your Email *
              </label>
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="peer block w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-light-primary dark:focus:border-dark-primary focus:outline-none focus:ring-0 transition-colors text-light-text dark:text-dark-text placeholder-transparent resize-none"
                placeholder="Your Message"
              />
              <label
                htmlFor="message"
                className="absolute left-3 -top-3.5 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-light-primary dark:peer-focus:text-dark-primary peer-focus:text-sm"
              >
                Your Message *
              </label>
            </div>

            {/* Submit Button & Status Message */}
            <div className="flex flex-col items-center space-y-4">
                 <motion.button
                    type="submit"
                    disabled={isLoading}
                    className={`btn btn-primary w-full md:w-auto flex items-center justify-center space-x-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    whileHover={!isLoading ? { scale: 1.05, y: -2 } : {}}
                    whileTap={!isLoading ? { scale: 0.95 } : {}}
                 >
                    {isLoading ? (
                         <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                         </>
                    ) : (
                        <>
                            <span>Send Message</span>
                            <FaPaperPlane />
                        </>
                    )}
                 </motion.button>

                 {formStatus.submitted && (
                    <motion.p
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       className={`text-sm font-medium ${formStatus.success ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
                    >
                       {formStatus.message}
                    </motion.p>
                 )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact'); // Default alternating background
