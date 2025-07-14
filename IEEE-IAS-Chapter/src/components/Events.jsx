// src/components/Events.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaInfoCircle } from 'react-icons/fa';
import { upcomingEvents, pastEvents } from '../data';
import EventModal from './EventModal'; // We still need our modal

// Reusable card component for Upcoming Events with killer styles
const UpcomingEventCard = ({ title, date, description, category, image }) => (
  <motion.div
    className="group bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <span className="absolute top-4 left-4 bg-[#00A39C] text-white text-xs font-bold px-3 py-1 rounded-full">{category}</span>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-[#555555] font-semibold mb-2">{date}</p>
      <h3 className="text-2xl font-bold text-[#2D2D2D] mb-3">{title}</h3>
      <p className="text-[#555555] flex-grow mb-6 leading-relaxed">{description}</p>
      <a href="#" className="mt-auto self-start bg-[#00A39C] text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 overflow-hidden transform hover:scale-105 transition-transform duration-300">
        Register
        <FaArrowRight className="transform -translate-x-8 group-hover:translate-x-0 transition-transform duration-300" />
      </a>
    </div>
  </motion.div>
);

// Reusable card component for Past Events with killer styles
const PastEventCard = ({ event, onMoreInfoClick }) => (
  <motion.div
    className="group bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="relative">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <span className="absolute top-4 left-4 bg-[#00629B] text-white text-xs font-bold px-3 py-1 rounded-full">{event.category}</span>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-[#555555] font-semibold mb-2">{event.date}</p>
      <h3 className="text-2xl font-bold text-[#2D2D2D] mb-3">{event.title}</h3>
      <p className="text-[#555555] flex-grow mb-6 leading-relaxed">{event.shortDescription}</p>
      <button 
        onClick={() => onMoreInfoClick(event)}
        className="mt-auto self-start bg-[#00629B] text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 overflow-hidden transform hover:scale-105 transition-transform duration-300"
      >
        More Info
        <FaInfoCircle className="transform scale-0 group-hover:scale-100 transition-transform duration-300" />
      </button>
    </div>
  </motion.div>
);

// Main Events Component
const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section name="events" className="w-full py-24 bg-[#F0F7F7] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">Events & Workshops</h2>
            <p className="text-lg text-[#555555] max-w-2xl mx-auto">Stay updated with our latest activities, from technical workshops to industry expert lectures.</p>
            <div className="flex justify-center gap-4 mt-8">
              <button onClick={() => setActiveTab('upcoming')} className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'upcoming' ? 'bg-[#00629B] text-white shadow-lg' : 'bg-white text-gray-700'}`}>
                Upcoming
              </button>
              <button onClick={() => setActiveTab('past')} className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'past' ? 'bg-[#00629B] text-white shadow-lg' : 'bg-white text-gray-700'}`}>
                Past Events
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === 'upcoming' && upcomingEvents.map((event, index) => <UpcomingEventCard key={index} {...event} />)}
            {activeTab === 'past' && pastEvents.map((event, index) => <PastEventCard key={index} event={event} onMoreInfoClick={handleOpenModal} />)}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && selectedEvent && (
          <EventModal event={selectedEvent} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Events;