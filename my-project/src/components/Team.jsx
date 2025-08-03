// src/components/Team.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { blogTeamData } from '../data';

const Team = () => {
  return (
    <section name="team" className="py-24 bg-gray-50 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-slate-800">Meet the Team</h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            The dedicated student organizers behind the IAS UWU Blog initiative.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogTeamData.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-slate-50 border border-gray-200 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover shadow-xl border-4 border-white mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-slate-800">{member.name}</h3>
              <p className="text-md font-semibold text-[#00A39C] mb-4">{member.role}</p>
              <p className="text-gray-500 leading-relaxed text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
