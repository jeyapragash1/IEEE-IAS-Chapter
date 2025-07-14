// src/components/Resources.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const resources = [
    { title: 'IEEE Xplore Digital Library', link: 'https://ieeexplore.ieee.org/' },
    { title: 'Official IEEE IAS Website', link: 'https://ias.ieee.org/' },
    { title: 'IEEE Student Membership', link: 'https://www.ieee.org/membership/students/index.html' },
    { title: 'IEEE Sri Lanka Section', link: 'https://ieee.lk/' },
];

const Resources = () => {
  return (
    <div name="resources" className="w-full py-16 md:py-24 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ieee-blue mb-4">Member Resources</h2>
          <p className="text-lg text-gray-600">Quick links to valuable IEEE resources.</p>
        </motion.div>
        <div className="space-y-4">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-200 transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">{resource.title}</span>
                <FaExternalLinkAlt className="text-ieee-blue" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;