// src/components/Stats.jsx
import React, { useEffect, useRef } from 'react';
// 1. IMPORT `motion` HERE
import { useInView, useMotionValue, useSpring, animate, motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaLightbulb } from 'react-icons/fa';

// Reusable animated number component
function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 300 });
  const isInView = useInView(ref, { once: true });

 useEffect(() => {
  if (isInView) {
    animate(0, value, {
      duration: 2.5,
      onUpdate(latest) {
        motionValue.set(parseInt(latest.toFixed(0)));
      }
    });
  }
}, [isInView, value, motionValue]);

  
  // 2. CHANGE `<span>` TO `motion.span` HERE
  return <motion.span ref={ref}>{springValue}</motion.span>;
}

const Stats = () => {
  const statsData = [
    { id: 1, icon: FaUsers, number: 50, label: 'Active Members' },
    { id: 2, icon: FaCalendarAlt, number: 15, label: 'Events Hosted' },
    { id: 3, icon: FaLightbulb, number: 5, label: 'Projects Completed' },
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
        {statsData.map((stat) => (
          <div key={stat.id}>
            <stat.icon className="text-[#00A39C] text-5xl mx-auto mb-4" />
            <div className="text-6xl font-extrabold gradient-text">
              <AnimatedNumber value={stat.number} />+
            </div>
            <p className="text-lg text-[#555555] mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;