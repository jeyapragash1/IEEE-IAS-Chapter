// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Using react-scroll for single-page navigation
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CORRECTED: Added the "Contact" link to this array
  const links = [
    { id: 'home', title: 'Home' },
    { id: 'competition', title: 'Competition' },
    { id: 'articles', title: 'Articles' },
    { id: 'team', title: 'The Team' },
    { id: 'vision', title: 'Our Vision' },
    { id: 'contact', title: 'Contact' }, // <-- "Contact" is now included
  ];
  
  const activeLinkClass = "text-[#00A39C]";
  const navClass = `fixed w-full h-20 z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'}`;

  return (
    <motion.nav
      className={navClass}
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-4 text-white">
        <Link to="home" smooth={true} duration={500} className="text-xl md:text-2xl font-bold cursor-pointer">
          IAS UWU Blog
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-gray-300">
          {links.map(link => (
            <Link key={link.id} to={link.id} spy={true} smooth={true} duration={500} offset={-80} activeClass={activeLinkClass} className="hover:text-white cursor-pointer transition-colors">
              {link.title}
            </Link>
          ))}
          <Link to="submit" smooth={true} duration={500} offset={-80}>
            <button className="bg-[#00A39C] text-white px-5 py-2 rounded-full font-bold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105">
              Submit Article
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="text-white">
            <FaBars size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-slate-900 shadow-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setMobileMenuOpen(false)} className="text-white"><FaTimes size={24} /></button>
              </div>
              <nav className="flex flex-col items-center gap-8 text-2xl font-semibold text-gray-300">
                {links.map(link => (
                  <Link key={link.id} to={link.id} spy={true} smooth={true} duration={500} offset={-80} activeClass={activeLinkClass} onClick={() => setMobileMenuOpen(false)}>
                    {link.title}
                  </Link>
                ))}
                <Link to="submit" smooth={true} duration={500} offset={-80} onClick={() => setMobileMenuOpen(false)} className="bg-[#00A39C] text-white px-6 py-3 rounded-full font-bold mt-4">
                  Submit Article
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
export default Navbar;