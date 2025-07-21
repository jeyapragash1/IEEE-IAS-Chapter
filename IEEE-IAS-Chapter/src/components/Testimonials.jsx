// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import Swiper components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import your new, corrected data
import { testimonialsData } from '../data';

const Testimonials = () => {
  return (
    <section name="testimonials" className="w-full py-24 bg-[#F0F7F7] px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D2D2D] mb-4">What Our Members Say</h2>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto">
            Real experiences from students who have benefited from being part of our chapter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
              delay: 5000, // Slides change every 5 seconds
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="relative"
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <motion.div 
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
                    animate={{ scale: isActive ? 1 : 0.95, opacity: isActive ? 1 : 0.7 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaQuoteLeft className="text-[#00A39C] text-5xl mx-auto mb-6" />
                    
                    <p className="text-lg md:text-xl italic text-[#555555] leading-relaxed mb-8 min-h-[120px]">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex flex-col items-center">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full mb-4 border-4 border-[#00A39C] shadow-md"
                      />
                      <h4 className="font-bold text-[#2D2D2D] text-xl">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.major}</p>
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
            
            {/* Custom Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button className="swiper-button-prev-custom testimonial-swiper-button">
                <FaArrowLeft />
              </button>
              <button className="swiper-button-next-custom testimonial-swiper-button">
                <FaArrowRight />
              </button>
            </div>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;