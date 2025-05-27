import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { fadeIn } from '../utils/motion'; // Import animation variant

// Placeholder image function if needed
const placeholderImg = (w = 500, h = 300) => `https://placehold.co/${w}x${h}/4a5568/ffffff?text=Project`;

const ProjectCard = ({
  index,
  title,
  date,
  description,
  features,
  tech,
  github,
  live,
  imageUrl,
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.2, 0.75)} // Staggered spring animation
      className="card flex flex-col bg-light-card dark:bg-dark-card overflow-hidden h-full" // Ensure cards take full height if needed in grid
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 md:h-56">
        <img
          src={imageUrl || placeholderImg()} // Use provided image or placeholder
          alt={`${title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Group hover effect can be added if wrapping in a group div
          onError={(e) => { e.target.onerror = null; e.target.src = placeholderImg(); }} // Fallback on error
        />
        {/* Optional: Overlay on hover */}
        {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div> */}
      </div>

      {/* Project Info */}
      <div className="p-5 flex flex-col flex-grow"> {/* Use flex-grow to push links to bottom */}
        <h3 className="text-xl font-semibold mb-1 text-light-heading dark:text-dark-heading">{title}</h3>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">{date}</p>
        <p className="text-sm text-light-text dark:text-dark-text mb-4 flex-grow">{description}</p> {/* Allow description to grow */}

        {/* Features (Optional) */}
        {/* {features && features.length > 0 && (
            <div className="mb-4">
                <h4 className="text-sm font-semibold mb-1">Features:</h4>
                <ul className="list-disc list-inside text-xs space-y-0.5">
                    {features.map((feat, i) => <li key={i}>{feat}</li>)}
                </ul>
            </div>
        )} */}

        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <span key={t} className={`skill-tag !text-[10px] !px-2 !py-0.5 ${
                  t.includes('AWS') ? 'tech-aws' :
                  t.includes('Mongo') || t.includes('MySQL') ? 'tech-db' :
                  t.includes('Node') || t.includes('Express') ? 'tech-backend' :
                  t.includes('HTML') || t.includes('CSS') || t.includes('Tailwind') || t.includes('Bootstrap') || t.includes('JavaScript') ? 'tech-frontend' : ''
              }`}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-auto pt-4 border-t border-light-border dark:border-dark-border flex justify-end space-x-3">
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-light-primary dark:hover:text-dark-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="View Source Code on GitHub"
            >
              <FaGithub size={20} />
            </motion.a>
          )}
          {live && (
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-light-primary dark:hover:text-dark-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
               title="View Live Demo"
            >
              <FaExternalLinkAlt size={18} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
