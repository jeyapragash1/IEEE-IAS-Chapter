// src/components/Gallery.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { galleryData } from '../data';

const Gallery = () => {
  return (
    <div name="gallery" className="w-full py-16 md:py-24 bg-gray-100 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ieee-blue mb-4">Chapter in Action</h2>
          <p className="text-lg text-gray-600">A glimpse into our events, workshops, and tours.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryData.map((image) => (
            <motion.div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;