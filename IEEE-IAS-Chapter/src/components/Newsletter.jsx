// src/components/Newsletter.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section name="newsletter" className="w-full py-24 bg-ieee-blue">
      <div className="max-w-4xl mx-auto text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest updates on our events, workshops, and chapter news directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-2/3 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-ieee-green"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-ieee-green text-white font-bold py-3 px-8 rounded-full hover:bg-teal-700 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;