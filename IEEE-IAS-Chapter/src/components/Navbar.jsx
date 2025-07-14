// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

// Import your logo from the assets folder
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
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    };
  }, []);

  // Your navigation links
  const links = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'events', title: 'Events' },
    { id: 'team', title: 'Team' },
    { id: 'projects', title: 'Projects' },
  ];

  // Dynamic classes for navbar background and text color
const navClass = navBg ? 'bg-[#E0F2FF] shadow-md text-[#2D2D2D]' : 'bg-transparent text-white';

  // The style for the active link (green text with a green underline)
  const activeLinkClass = "text-[#00A39C] border-b-2 border-[#00A39C]";

  return (
    <header className={`fixed w-full h-[80px] flex justify-center items-center px-4 z-50 transition-all duration-300 ${navClass}`}>
      <div className="w-full max-w-7xl flex justify-between items-center">

    {/* --- 🔥 LOGO SECTION (Updated) --- */}
<div className="cursor-pointer">
 <Link to="home" smooth={true} duration={500}>
<img src={iasLogo} alt="IEEE IAS Chapter Logo" 
className="h-35 w-auto rounded-lg transition-all duration-300 hover:scale-105" />
</Link>
</div>


        {/* --- DESKTOP MENU --- */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center">
            {links.map(({ id, title }) => (
              <li key={id} className="h-[80px] flex items-center">
                <Link
                  spy={true}
                  activeClass={activeLinkClass}
                  to={id}
                  smooth={true}
                  duration={500}
                  offset={-80}
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
        <div onClick={handleNav} className="md:hidden z-10 cursor-pointer">
          {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <nav className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-white text-[#2D2D2D] flex flex-col justify-center items-center'}>
        <ul>
          {links.map(({ id, title }) => (
            <li key={id} className="py-6 text-3xl cursor-pointer">
              <Link
                spy={true}
                activeClass="text-[#00A39C]"
                onClick={handleNav}
                to={id}
                smooth={true}
                duration={500}
                offset={-80}
              >
                {title}
              </Link>
            </li>
          ))}
          <li className="py-6">
            <Link onClick={handleNav} to="why-join" smooth={true} duration={500} offset={-80}>
              <button className="text-white bg-[#00A39C] px-8 py-3 rounded-full text-2xl font-bold">
                Join Us
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;