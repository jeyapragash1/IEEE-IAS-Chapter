// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Player } from "@lottiefiles/react-lottie-player";

const Hero = () => {
  return (
    <section
      name="home"
      className="relative h-screen flex flex-col justify-center items-center text-center p-4 overflow-hidden"
    >
      {/* —✅ Reliable Video Background */}
      <video
        src="https://static.videezy.com/system/resources/previews/000/012/942/original/AI_Futuristic_Circuit_Background.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* — Dark overlay */}
      <div className="absolute inset-0 bg-black/65 z-10" />

      {/* — Lottie particle animation */}
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/packages/lf20_zrqthn6o.json"
        style={{
          height: "200px",
          width: "200px",
          position: "absolute",
          top: "10%",
          right: "10%",
          zIndex: 30,
          opacity: 0.5,
        }}
      />

      {/* — H1 and text */}
      <motion.h1
        className="text-4xl md:text-7xl font-extrabold mb-4 z-20 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Have a Tech Story to Tell?
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl max-w-3xl mb-8 text-gray-300 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Get ready to showcase your ideas and insights! IEEE IAS UWU Blog launching soon.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="z-20"
      >
        <Link to="competition" smooth={true} duration={500} offset={-80}>
          <button className="bg-[#00A39C] text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-teal-700 transition-all transform hover:scale-110 shadow-xl">
            Join the Competition
          </button>
        </Link>
      </motion.div>

      {/* — Floating down arrow */}
      <motion.div
        className="absolute bottom-10"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
