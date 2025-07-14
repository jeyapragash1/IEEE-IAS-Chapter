// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data'; // Ensure this is imported

const Projects = () => {
  return (
    <section name="projects" className="w-full py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ieee-blue mb-4">Our Technical Projects</h2>
          <p className="text-lg text-light-text max-w-2xl mx-auto">
            Putting theory into practice. Here are some of the innovative projects our members have worked on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={project.img} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-text mb-2">{project.title}</h3>
                <p className="text-light-text">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// This line fixes the error by exporting the component
export default Projects;