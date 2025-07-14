// src/components/Team.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Import all our data sources for this section
import { teamData, facultyAdvisorData, juniorCommitteeData } from '../data';

// A reusable card component for committee members, styled for a LIGHT theme
const CommitteeCard = ({ name, position, img, delay }) => (
  <motion.div 
    className="group relative bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
  >
    {/* Animated border that appears on hover */}
    <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-[#00A39C] transition-all duration-300 pointer-events-none" />

    <img src={img} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200 transition-colors duration-300 group-hover:border-[#00A39C]" />
    <h4 className="text-xl font-bold text-[#2D2D2D]">{name}</h4>
    <p className="text-[#00629B] font-semibold">{position}</p>
    
    {/* Social links fade in from the bottom on hover, no dark overlay needed */}
    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
      <a href="#" className="text-[#00A39C] hover:text-[#00629B]"><FaLinkedin size={24} /></a>
      <a href="#" className="text-[#00A39C] hover:text-[#00629B]"><FaEnvelope size={24} /></a>
    </div>
  </motion.div>
);

// Main Team Component
const Team = () => {
  return (
    // CHANGED: Using your light blue background and dark text colors
    <section name="team" className="w-full py-24 bg-[#E0F2FF] text-[#555555] px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* CHANGED: Text color for the light theme */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D2D2D] mb-4">Our People</h2>
          <p className="text-lg text-[#555555]">The dedicated students and faculty leading our chapter to success.</p>
        </motion.div>
        
        {/* --- 1. Faculty Advisor Section (Styled for light theme) --- */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center text-[#2D2D2D] mb-12">
            Our <span className="text-[#00A39C]">Faculty Advisor</span>
          </h3>
          {/* A "frosted glass" effect on the light blue background */}
          <div className="grid md:grid-cols-3 gap-8 items-center bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
            <motion.div
              className="md:col-span-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img src={facultyAdvisorData.img} alt={facultyAdvisorData.name} className="w-48 h-48 rounded-full border-4 border-[#00A39C] shadow-lg" />
            </motion.div>
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {/* CHANGED: Text colors for the light theme */}
              <h4 className="text-3xl font-bold text-[#2D2D2D]">{facultyAdvisorData.name}</h4>
              <p className="text-xl text-[#00A39C] font-semibold">{facultyAdvisorData.title}</p>
              <p className="text-gray-500 mb-4">{facultyAdvisorData.department}</p>
              <p className="text-[#555555] leading-relaxed">{facultyAdvisorData.bio}</p>
            </motion.div>
          </div>
        </div>

        {/* --- 2. Executive Committee --- */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center text-[#2D2D2D] mb-12">
            <span className="text-[#00A39C]">Executive</span> Committee
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <CommitteeCard key={`exec-${index}`} {...member} delay={index} />
            ))}
          </div>
        </div>

        {/* --- 3. Junior Committee --- */}
        <div>
          <h3 className="text-3xl font-bold text-center text-[#2D2D2D] mb-12">
            Our <span className="text-[#00A39C]">Junior</span> Committee
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {juniorCommitteeData.map((member, index) => (
              <CommitteeCard key={`junior-${index}`} {...member} delay={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;