// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../data';

const Projects = () => {
  return (
    <section name="projects" className="w-full py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D2D2D] mb-4">Our Technical Projects</h2>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto">
            Putting theory into practice. Here are some of the innovative projects our members have brought to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="group relative h-96 w-full rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            >
              {/* --- Background Image with Zoom Effect --- */}
              <img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              
              {/* --- Gradient Overlay --- */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 group-hover:from-black/90 group-hover:via-black/60" />

              {/* --- Content Overlay --- */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

                {/* Description with Fade-in Animation on Hover */}
                <p className="text-gray-300 text-sm leading-relaxed h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:h-auto group-hover:opacity-100 group-hover:mb-4">
                  {project.description}
                </p>

                {/* Button with Slide-up Animation on Hover */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#00A39C] py-2 px-4 rounded-full self-start transform translate-y-12 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <FaGithub />
                  <span>View Project</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;