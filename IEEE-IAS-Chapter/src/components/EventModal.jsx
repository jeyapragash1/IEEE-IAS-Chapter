// src/components/EventModal.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

// Import Swiper for the image gallery inside the modal
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.2, type: 'spring', stiffness: 120 } },
};

const EventModal = ({ event, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 w-full h-full flex items-center justify-center z-50 p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside it
      >
        {/* --- Image Slider --- */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="w-full"
            loop={true}
          >
            {event.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`${event.title} image ${index + 1}`} className="w-full h-64 object-cover rounded-t-2xl" />
              </SwiperSlide>
            ))}
          </Swiper>
          <button onClick={onClose} className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black transition-colors z-10">
            <FaTimes size={20} />
          </button>
        </div>

        {/* --- Content --- */}
        <div className="p-8">
          <p className="font-semibold text-[#00A39C] mb-2">{event.date}</p>
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">{event.title}</h2>
          <p className="text-[#555555] leading-relaxed">
            {event.fullDescription}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventModal;