// src/components/Team.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Team = () => {
  const teamData = [{ name: 'Your Name', position: 'Chapter Chair', img: 'https://i.pravatar.cc/150?img=68' }, { name: 'Friend Name 1', position: 'Vice Chair', img: 'https://i.pravatar.cc/150?img=60' }, { name: 'Friend Name 2', position: 'Treasurer', img: 'https://i.pravatar.cc/150?img=32' }, { name: 'Friend Name 3', position: 'Secretary', img: 'https://i.pravatar.cc/150?img=20' }];

  return (
    <section name="team" className="w-full py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">Our People</h2>
          <p className="text-lg text-[#555555]">The dedicated students and faculty leading our chapter.</p>
        </div>
        
        <h3 className="text-3xl font-bold text-center text-[#00A39C] mb-12">Executive Committee</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {teamData.map((member, index) => (
            <motion.div 
              key={index} 
              className="group relative bg-gray-100 rounded-xl shadow-lg p-6 text-center transform transition-transform duration-300 hover:-translate-y-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-md" />
              <h4 className="text-xl font-bold text-[#2D2D2D]">{member.name}</h4>
              <p className="text-[#00629B] font-semibold">{member.position}</p>
              <div className="absolute inset-0 bg-black/70 rounded-xl flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="text-white hover:text-[#00A39C]"><FaLinkedin size={30} /></a>
                <a href="#" className="text-white hover:text-[#00A39C]"><FaTwitter size={30} /></a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center bg-[#F0F7F7] p-10 rounded-xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-[#00A39C] mb-2">Our Faculty Advisor</h3>
          <p className="text-2xl font-semibold text-[#2D2D2D]">Prof. / Dr. [Advisor's Name]</p>
          <p className="text-lg text-[#555555]">[Advisor's Department]</p>
        </motion.div>
      </div>
    </section>
  );
};
export default Team;