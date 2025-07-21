// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion for animations
import iasLogo from '../assets/images/logo/logo-ias.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const handleNav = () => setNav(!nav);

  // This useEffect handles the navbar background change on scroll
  useEffect(() => {
    const changeNavBg = () => {
      if (window.scrollY >= 80) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener('scroll', changeNavBg);
    return () => window.removeEventListener('scroll', changeNavBg);
  }, []);

  const links = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'events', title: 'Events' },
    { id: 'team', title: 'Team' },
    { id: 'projects', title: 'Projects' },
  ];

  const navBgClass = navBg ? 'bg-[#E0F2FF] shadow-md' : 'bg-transparent';
  const activeLinkClass = "text-[#00A39C] border-b-2 border-[#00A39C]";
  
  // Animation variants for the slide-in menu
  const mobileMenuVariants = {
    open: { x: 0, transition: { type: "tween", ease: "easeOut", duration: 0.3 } },
    closed: { x: "100%", transition: { type: "tween", ease: "easeIn", duration: 0.3 } },
  };

  const linkContainerVariants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const linkVariants = {
    open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
    closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
  };

  return (
    <header className={`fixed w-full h-[80px] flex justify-center items-center px-4 z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="w-full max-w-7xl flex justify-between items-center">

        {/* --- LOGO SECTION (As you requested, no white background) --- */}
        <div className="cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            {/* CORRECTED: h-35 is not a valid class, using h-16 (64px) for a good size */}
            <img 
              src={iasLogo} 
              alt="IEEE IAS Chapter Logo" 
              className="h-16 w-auto transition-all duration-300 hover:scale-105" 
            />
          </Link>
        </div>

        {/* --- DESKTOP MENU --- */}
        <nav className={`hidden md:flex items-center ${navBg ? 'text-[#2D2D2D]' : 'text-white'}`}>
          {/* (Desktop menu code remains the same as it was working correctly) */}
          <ul className="flex items-center">
            {links.map(({ id, title }) => (
              <li key={id} className="h-[80px] flex items-center">
                <Link
                  spy={true} activeClass={activeLinkClass} to={id} smooth={true}
                  duration={500} offset={-80}
                  className="px-4 h-full flex items-center cursor-pointer font-medium hover:text-[#00A39C] transition-colors duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="why-join" smooth={true} duration={500} offset={-80}>
            <button className="ml-4 text-white bg-[#00A39C] px-5 py-2 rounded-full font-bold hover:bg-teal-700 transition-colors duration-300 transform hover:scale-105">
              Join Us
            </button>
          </Link>
        </nav>

        {/* --- HAMBURGER ICON --- */}
        <div onClick={handleNav} className={`md:hidden z-50 cursor-pointer ${navBg ? 'text-[#2D2D2D]' : 'text-white'}`}>
          {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>
      </div>

      {/* ====================================================================== */}
      {/* --- KILLER MOBILE MENU (Full-screen white box replaced with this) --- */}
      <AnimatePresence>
        {nav && (
          <>
            {/* Dark overlay behind the menu */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleNav} // Close menu when clicking overlay
            />
            {/* The slide-in menu drawer */}
            <motion.nav
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white/80 backdrop-blur-xl shadow-2xl z-50"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex justify-end p-6">
                <FaTimes size={25} onClick={handleNav} className="cursor-pointer text-[#2D2D2D]" />
              </div>
              <motion.ul
                className="flex flex-col items-center justify-center h-full text-[#2D2D2D] -mt-16"
                variants={linkContainerVariants}
              >
                {links.map(({ id, title }) => (
                  <motion.li key={id} variants={linkVariants} className="py-4 text-3xl font-semibold">
                    <Link
                      spy={true} activeClass="text-[#00A39C]" onClick={handleNav}
                      to={id} smooth={true} duration={500} offset={-80}
                    >
                      {title}
                    </Link>
                  </motion.li>
                ))}
                <motion.li variants={linkVariants} className="mt-8">
                  <Link onClick={handleNav} to="why-join" smooth={true} duration={500} offset={-80}>
                    <button className="text-white bg-[#00A39C] px-8 py-3 rounded-full text-2xl font-bold">
                      Join Us
                    </button>
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
      {/* ====================================================================== */}
    </header>
  );
};

export default Navbar;