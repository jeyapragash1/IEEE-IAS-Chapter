// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../data'; // Make sure this is imported

const Testimonials = () => {
  return (
    <section name="testimonials" className="w-full py-24 bg-gray-100 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ieee-blue mb-4">What Our Members Say</h2>
          <p className="text-lg text-light-text max-w-2xl mx-auto">
            Real experiences from students who have benefited from being part of our chapter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 border-4 border-ieee-green"
              />
              <p className="text-light-text italic text-lg mb-4">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <h4 className="font-bold text-dark-text text-xl">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.major}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// This line is the key to fixing the error
export default Testimonials;