// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const googleFormLink = "https://forms.gle/A5K4WozmuZxkqDzw9";

  return (
    <section name="submit" className="py-24 px-4 bg-[#0A0F19]">
      <motion.div 
        className="max-w-4xl mx-auto bg-gradient-to-r from-[#00A39C] to-[#00629B] rounded-2xl p-12 text-center text-white shadow-2xl"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-extrabold mb-4">Ready to Share Your Story?</h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          Your article could be the next to be featured. Click the button below to access our submission form and guidelines.
        </p>
        <a 
          href={googleFormLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#00A39C] font-bold px-10 py-4 rounded-full text-xl hover:bg-gray-200 transition-colors transform hover:scale-105"
        >
          Submit Now
        </a>
      </motion.div>
    </section>
  );
};
export default Contact;