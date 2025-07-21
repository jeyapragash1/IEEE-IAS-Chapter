// src/components/Team.jsx
import React from 'react';
import { motion } from 'framer-motion';

// 1. IMPORT facultyAdvisorData along with the others
import { seniorCommitteeData, committeeMembersData, facultyAdvisorData } from '../data';

// A reusable, beautifully styled Member Card component (No changes here)
const MemberCard = ({ name, position, img, delay }) => (
  <motion.div
    className="flex flex-col items-center text-center w-48"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay * 0.1, ease: 'easeOut' }}
    whileHover={{ scale: 1.05, y: -5 }}
  >
    <div className="relative mb-3">
      <img
        src={img}
        alt={name}
        className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
      />
      <div className="absolute inset-0 rounded-full border-2 border-transparent transition-all duration-300 group-hover:border-[#00A39C]"></div>
    </div>
    <div className="bg-[#00A39C] text-white font-bold px-4 py-1 rounded-md text-sm shadow-md">
      {name}
    </div>
    <p className="text-gray-500 mt-1 text-sm">{position}</p>
  </motion.div>
);

// Main Team Component with the new structure and style
const Team = () => {
  const chairperson = seniorCommitteeData[0];
  const otherSeniors = seniorCommitteeData.slice(1);

  return (
    <section name="team" className="w-full py-24 bg-[#E0F2FF] px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D2D2D] mb-2 tracking-wide">
            INDUSTRY APPLICATIONS SOCIETY CHAPTER
          </h2>
        </motion.div>

        {/* ====================================================================== */}
        {/* --- NEW: FACULTY ADVISOR SECTION --- */}
        <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-[#2D2D2D] mb-12">
              Our <span className="text-[#00A39C]">Guiding Mentor</span>
            </h3>
            <motion.div
                className="grid md:grid-cols-3 gap-8 items-center bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="md:col-span-1 flex justify-center">
                <img src={facultyAdvisorData.img} alt={facultyAdvisorData.name} className="w-48 h-48 rounded-full border-4 border-[#00A39C] shadow-lg" />
                </div>
                <div className="md:col-span-2 text-center md:text-left">
                <h4 className="text-3xl font-bold text-[#2D2D2D]">{facultyAdvisorData.name}</h4>
                <p className="text-xl text-[#00629B] font-semibold">{facultyAdvisorData.title}</p>
                <p className="text-gray-500 mb-4">{facultyAdvisorData.department}</p>
                <p className="text-[#555555] leading-relaxed">{facultyAdvisorData.bio}</p>
                </div>
            </motion.div>
        </div>
        {/* ====================================================================== */}


        {/* --- Senior Committee Section --- */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-[#2D2D2D] mb-12">SENIOR COMMITTEE MEMBERS</h3>
          
          <motion.div
            className="grid md:grid-cols-3 gap-8 items-center mb-16 bg-gray-200/70 p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center md:justify-end">
              <img
                src={chairperson.img}
                alt={chairperson.name}
                className="w-48 h-48 rounded-full object-cover border-4 border-[#00A39C] shadow-lg"
              />
            </div>
            <div className="md:col-span-2 bg-gray-600 p-6 rounded-lg text-white text-center md:text-left">
              <h4 className="text-3xl font-bold text-[#00A39C]">{chairperson.name}</h4>
              <p className="text-xl font-semibold">{chairperson.position}</p>
              <p className="text-gray-400">Industry Applications Society Chapter</p>
            </div>
          </motion.div>
          
          <div className="flex justify-center flex-wrap gap-8">
            {otherSeniors.map((member, index) => (
              <MemberCard key={`senior-${index}`} {...member} delay={index} />
            ))}
          </div>
        </div>

        {/* --- Committee Members Section --- */}
        <div>
          <h3 className="text-3xl font-bold text-center text-[#2D2D2D] mb-12">COMMITTEE MEMBERS</h3>
          
          <div className="flex justify-center flex-wrap gap-8">
            {committeeMembersData.map((member, index) => (
              <MemberCard key={`junior-${index}`} {...member} delay={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;