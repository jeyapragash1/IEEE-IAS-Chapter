// src/components/Vision.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaGlobe, FaStar } from 'react-icons/fa';

const Vision = () => {
  // Abstract background image for a tech vibe
  const bgImageUrl = 'https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=1470';

  return (
    <section
      name="vision"
      className="relative py-24 bg-cover bg-fixed px-4"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      {/* Dark overlay with blur for that sleek glassmorphism */}
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-extrabold text-white mb-6">Our Vision</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            The <strong>IAS UWU Blog</strong> is a student-driven initiative to create a dynamic, inclusive, and high-impact platform for knowledge sharing and professional development.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-start gap-4 bg-white/5 p-4 rounded-lg">
            <FaBullseye className="text-3xl text-[#00A39C] mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-white text-xl">Our Mission</h3>
              <p className="text-gray-400">
                To showcase original articles and research from students across all faculties, bridging disciplines and fostering a culture of excellence.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white/5 p-4 rounded-lg">
            <FaGlobe className="text-3xl text-[#00A39C] mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-white text-xl">International Standard</h3>
              <p className="text-gray-400">
                We are committed to maintaining a professional platform that reflects the high standards of IEEE and our global community.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white/5 p-4 rounded-lg">
            <FaStar className="text-3xl text-[#00A39C] mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-white text-xl">Excellence & Innovation</h3>
              <p className="text-gray-400">
                Driving continuous innovation and excellence in everything we publish and share.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
