// src/components/Competition.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { FaTrophy, FaPencilAlt, FaUsers } from 'react-icons/fa';

const CountdownItem = ({ value, label }) => (
  <div className="flex flex-col items-center bg-white/5 backdrop-blur-sm p-4 rounded-lg w-24">
    <span className="text-4xl font-bold text-white">{String(value).padStart(2, '0')}</span>
    <span className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{label}</span>
  </div>
);

const Competition = () => {
  const [days, hours, minutes, seconds] = useCountdown('2024-12-01T00:00:00');
  const googleFormLink = "https://forms.gle/A5K4WozmuZxkqDzw9";

  return (
    <section name="competition" className="py-24 bg-[#0A0F19] px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Join Our Launch Competition
        </h2>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          This is your moment to shine. We invite students from all faculties across Sri Lanka to share their voice and contribute to a growing community of innovators.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <FaPencilAlt className="text-3xl text-[#00A39C] mb-4" />
            <h3 className="font-bold text-xl text-white">Share Your Articles</h3>
            <p className="text-gray-400 mt-2">Submit your original technical articles, research, or opinions.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <FaUsers className="text-3xl text-[#00A39C] mb-4" />
            <h3 className="font-bold text-xl text-white">Get Featured</h3>
            <p className="text-gray-400 mt-2">Have your work published on our official international-standard platform.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <FaTrophy className="text-3xl text-[#00A39C] mb-4" />
            <h3 className="font-bold text-xl text-white">Win Exciting Rewards</h3>
            <p className="text-gray-400 mt-2">The best submissions during our launch month will be recognized and rewarded.</p>
          </div>
        </div>

        {days + hours + minutes + seconds > 0 ? (
          <div className="bg-slate-900 border border-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Competition Closes In:</h3>
            <div className="flex justify-center gap-4 md:gap-8">
              <CountdownItem value={days} label="Days" />
              <CountdownItem value={hours} label="Hours" />
              <CountdownItem value={minutes} label="Minutes" />
              <CountdownItem value={seconds} label="Seconds" />
            </div>
          </div>
        ) : (
          <p className="text-2xl text-white mb-12">The competition is live! Submit your articles now.</p>
        )}
      </div>
    </section>
  );
};

export default Competition;
