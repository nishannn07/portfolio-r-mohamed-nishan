import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SkillBar from './SkillBar';
import { skills as skillsData, skillLevels } from '../data/portfolioData'; // Import data
import { textVariant, fadeIn, itemFadeIn } from '../utils/motion'; // Import animations
import { FaCode, FaDatabase, FaCloud, FaUsers, FaTools, FaBrain } from 'react-icons/fa'; // Example Icons

const iconMap = {
    Languages: FaCode,
    Frameworks: FaTools,
    Databases: FaDatabase,
    Cloud: FaCloud,
    'Soft Skills': FaUsers,
    'Core Concepts': FaBrain, // Example for core skills
};

const Skills = () => {
  // Combine relevant skills for bars
  const technicalSkillsForBars = [
    { name: "C++", level: skillLevels["C++"] || 0 },
    { name: "JavaScript", level: skillLevels["JavaScript"] || 0 },
    { name: "Java", level: skillLevels["Java"] || 0 },
    { name: "Python", level: skillLevels["Python"] || 0 },
    { name: "Node.js/Express", level: (skillLevels["Node.js"] + skillLevels["Express.js"]) / 2 || 0 },
    { name: "HTML/CSS/Tailwind", level: (skillLevels["HTML"] + skillLevels["CSS"] + skillLevels["Tailwind"]) / 3 || 0 },
    { name: "MongoDB", level: skillLevels["MongoDB"] || 0 },
    { name: "AWS", level: skillLevels["AWS"] || 0 },
    // Add React if applicable
    // { name: "React.js", level: skillLevels["React.js"] || 0 },
  ];

   // Structure skills for card display
   const skillCategories = [
       { title: "Languages", skills: skillsData.languages, Icon: iconMap.Languages, delay: 0.1 },
       { title: "Frameworks & Libraries", skills: skillsData.frameworks, Icon: iconMap.Frameworks, delay: 0.2 },
       { title: "Databases", skills: skillsData.databases, Icon: iconMap.Databases, delay: 0.3 },
       { title: "Cloud Platforms", skills: skillsData.cloud.filter(s => !s.includes('S3') && !s.includes('Front') && !s.includes('Watch') && !s.includes('ACM')), Icon: iconMap.Cloud, delay: 0.4 }, // Filter out specific services shown elsewhere
       { title: "Soft Skills", skills: skillsData.softSkills, Icon: iconMap['Soft Skills'], delay: 0.5 },
       // Add core concepts if desired
       // { title: "Core Concepts", skills: ["Data Structures", "Algorithms", "Problem-Solving"], Icon: iconMap['Core Concepts'], delay: 0.6 },
   ];

  return (
    <div className="container mx-auto px-6">
      <motion.h2 variants={textVariant()} className="section-title">
        Skills & Expertise
      </motion.h2>

      {/* Skill Bars Section */}
       <motion.div
           variants={fadeIn('up', 'tween', 0.2, 0.8)}
           className="mb-16" // Margin below bars
       >
          <h3 className="text-2xl font-semibold mb-8 text-center text-light-heading dark:text-dark-heading">Technical Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {technicalSkillsForBars.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill.name}
                level={skill.level}
                delay={index * 0.05} // Slightly faster stagger
              />
            ))}
          </div>
        </motion.div>

      {/* Skill Categories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={fadeIn('up', 'spring', category.delay, 0.75)} // Spring animation for cards
            className="card p-6 glassmorphism-card hover:shadow-violet-500/20 dark:hover:shadow-violet-400/30" // Glassmorphism effect
          >
            <div className="flex items-center mb-4">
               {category.Icon && <category.Icon className="w-6 h-6 mr-3 text-light-primary dark:text-dark-primary" />}
               <h3 className="text-xl font-semibold text-light-heading dark:text-dark-heading">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, index) => (
                 <motion.span
                    key={skill}
                    variants={itemFadeIn} // Use simple fade-in for items within staggered container
                    className={`skill-tag ${
                        category.title === 'Frameworks & Libraries' ? 'tech-backend' :
                        category.title === 'Databases' ? 'tech-db' :
                        category.title === 'Cloud Platforms' ? 'tech-aws' : ''
                    }`}
                    // whileHover={{ scale: 1.05 }} // Already handled by class
                 >
                     {skill}
                 </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default SectionWrapper(Skills, 'skills', 'bg-light-background dark:bg-dark-background');
