// src/components/About.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaBullseye, FaStar, FaInfoCircle, FaLightbulb, FaHandshake, FaTrophy } from 'react-icons/fa';

// This object holds all the content for our tabs. It makes the code cleaner.
const tabContent = {
  mission: {
    id: 'mission',
    icon: FaBullseye,
    title: 'Our Mission',
    content: "The IEEE IAS Student Branch Chapter at Uva Wellassa University aims to be the foremost link between our students and the global industrial sector. We are committed to fostering technical innovation, leadership skills, and professional growth by providing a platform for hands-on learning, networking, and knowledge sharing."
  },
  vision: {
    id: 'vision',
    icon: FaEye,
    title: 'Our Vision',
    content: "To be the leading student platform in Sri Lanka for nurturing industry-ready engineers who are not only technically proficient but also innovative leaders, capable of solving real-world challenges and driving technological advancement for the benefit of humanity."
  },
  values: {
    id: 'values',
    icon: FaStar,
    title: 'Our Core Values',
    // We use JSX here for a custom list format
    content: (
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <FaLightbulb className="text-[#00A39C] mt-1 flex-shrink-0" size={20} />
          <span><strong>Innovation:</strong> We champion creative thinking and the courage to build new solutions.</span>
        </li>
        <li className="flex items-start gap-3">
          <FaHandshake className="text-[#00A39C] mt-1 flex-shrink-0" size={20} />
          <span><strong>Collaboration:</strong> We believe in the power of teamwork and building strong professional networks.</span>
        </li>
        <li className="flex items-start gap-3">
          <FaTrophy className="text-[#00A39C] mt-1 flex-shrink-0" size={20} />
          <span><strong>Excellence:</strong> We are dedicated to upholding the highest standards in all our technical and professional endeavors.</span>
        </li>
      </ul>
    )
  },
  ias: {
    id: 'ias',
    icon: FaInfoCircle,
    title: 'What is IEEE IAS?',
    content: "The IEEE Industry Applications Society is a global community of engineers focusing on the practical application of electrical and electronic theory for the development, design, and manufacture of systems and equipment for industry and commerce."
  }
};

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const tabs = [tabContent.mission, tabContent.vision, tabContent.values, tabContent.ias];

  return (
    <section name="about" className="w-full py-24 bg-[#F0F7F7] px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D2D2D] mb-4">Our Identity</h2>
          <p className="text-lg text-[#555555]">Discover the principles that drive our chapter forward.</p>
        </motion.div>

        {/* --- Tab Buttons --- */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 md:px-6 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1
                ${activeTab === tab.id
                  ? 'bg-[#00629B] text-white shadow-lg'
                  : 'bg-white text-gray-700'
                }`}
            >
              <tab.icon />
              {tab.title}
            </button>
          ))}
        </div>

        {/* --- Tab Content with Animation --- */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-full"
            >
              <h3 className="text-3xl font-bold text-[#00A39C] mb-6">{tabContent[activeTab].title}</h3>
              <div className="text-lg text-[#555555] leading-relaxed">
                {tabContent[activeTab].content}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default About;