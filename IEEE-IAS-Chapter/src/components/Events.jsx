// src/components/Events.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const EventCard = ({ title, date, description }) => (
  <motion.div 
    className="group relative bg-white rounded-xl shadow-2xl p-8 flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="absolute top-0 left-0 h-1 w-0 bg-[#00A39C] transition-all duration-500 group-hover:w-full" />
    <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">{title}</h3>
    <p className="text-[#00A39C] font-semibold mb-4">{date}</p>
    <p className="text-[#555555] flex-grow mb-6 leading-relaxed">{description}</p>
    <a href="#" className="mt-auto self-start bg-[#00A39C] text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 overflow-hidden transform hover:scale-105 transition-transform duration-300">
      Register
      <FaArrowRight className="transform -translate-x-8 group-hover:translate-x-0 transition-transform duration-300" />
    </a>
  </motion.div>
);

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const upcomingEvents = [{ title: 'Advanced PLC Programming', date: 'October 25, 2024', description: 'Dive deep into ladder logic and structured text with industry-grade PLCs.' }, { title: 'Industry Tour: Ceylon Electricity Board', date: 'November 10, 2024', description: 'An exclusive look at the national grid control center.' }];
  const pastEvents = [{ title: 'Workshop on Altium Designer', date: 'May 15, 2024', description: 'A successful hands-on session on professional PCB design.' }, { title: 'Guest Lecture: Smart Grid Tech', date: 'April 02, 2024', description: 'Insightful talk by an engineer from Siemens.' }];

  return (
    <section name="events" className="w-full py-24 bg-[#F0F7F7] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">Events & Workshops</h2>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={() => setActiveTab('upcoming')} className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'upcoming' ? 'bg-[#00629B] text-white shadow-lg' : 'bg-white text-gray-700'}`}>
              Upcoming
            </button>
            <button onClick={() => setActiveTab('past')} className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'past' ? 'bg-[#00629B] text-white shadow-lg' : 'bg-white text-gray-700'}`}>
              Past Events
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeTab === 'upcoming' && upcomingEvents.map((event, index) => <EventCard key={index} {...event} />)}
          {activeTab === 'past' && pastEvents.map((event, index) => <EventCard key={index} {...event} />)}
        </div>
      </div>
    </section>
  );
};

export default Events;