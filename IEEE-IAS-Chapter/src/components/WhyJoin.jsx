// src/components/WhyJoin.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaTools, FaBriefcase } from 'react-icons/fa';

const WhyJoin = () => {
  const benefitsData = [
    { icon: FaNetworkWired, title: 'Professional Networking', description: 'Connect with industry experts, academics, and peers from around the world.' },
    { icon: FaTools, title: 'Hands-On Workshops', description: 'Gain practical skills in PCB design, programming, and automation tools.' },
    { icon: FaBriefcase, title: 'Career Development', description: 'Access exclusive job boards, resume workshops, and industry tours that launch careers.' },
  ];

  const cardVariants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <section name="why-join" className="w-full py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#00629B] mb-4">Elevate Your Career</h2>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto">Launch your professional journey with exclusive member benefits designed for success.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ y: -15, scale: 1.05, rotateX: 10, rotateY: index === 1 ? 0 : (index === 0 ? -10 : 10) }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#F0F7F7] p-8 rounded-xl shadow-lg text-center border border-gray-200"
            >
              <benefit.icon className="text-[#00A39C] text-6xl mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-3">{benefit.title}</h3>
              <p className="text-[#555555] leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;