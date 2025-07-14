// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const aboutImage = "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=1470";

  return (
    <section name="about" className="relative w-full py-24 bg-[#F0F7F7] px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6 leading-tight">Our Mission</h2>
          <p className="text-lg text-[#555555] leading-relaxed">
            The IEEE IAS Student Branch Chapter at Uva Wellassa University aims to be the foremost link between our students and the global industrial sector. We are committed to fostering technical innovation, leadership skills, and professional growth by providing a platform for hands-on learning, networking, and knowledge sharing.
          </p>
        </motion.div>
        
        <motion.div
          className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-bold text-[#00629B] mb-4">What is IEEE IAS?</h3>
          <p className="text-[#555555] leading-relaxed">
            The IEEE Industry Applications Society is a global community of engineers focusing on the practical application of electrical and electronic theory for the development, design, and manufacture of systems and equipment for industry and commerce.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;