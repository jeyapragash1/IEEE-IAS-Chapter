// src/components/Newsletter.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <section 
      name="newsletter" 
      // CHANGED: Using a clean white background
      className="w-full py-24 px-4 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* NEW: The main container with the colorful shadow effect */}
        <motion.div 
          className="relative bg-white rounded-2xl p-8 md:p-12 shadow-[0_10px_60px_-15px_rgba(0,163,156,0.3)]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative icon */}
          <FaPaperPlane className="absolute -top-6 -left-6 text-7xl text-[#00A39C]/10 transform -rotate-12" />

          <div className="text-center">
            {/* CHANGED: Text colors for the light theme */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D2D2D] mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-[#555555] mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get the latest updates on our events, workshops, and chapter news directly in your inbox.
            </p>

            <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                // NEW: Sleek input styling
                className="w-full bg-transparent border-b-2 border-gray-300 px-2 py-3 text-lg text-[#2D2D2D] placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-[#00A39C] transition-colors duration-300"
                required
              />
              <button
                type="submit"
                // NEW: Gradient button with killer hover effect
                className="w-full sm:w-auto flex-shrink-0 bg-gradient-to-r from-[#00A39C] to-[#00629B] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;