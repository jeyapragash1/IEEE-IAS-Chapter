// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
// 1. IMPORT THE LINK COMPONENT FOR SMOOTH SCROLLING
import { Link } from 'react-scroll';
import iasLogo from '../assets/images/logo/logo-ias.png';

const Footer = () => {
  return (
    <footer
      name="contact"
      // Using your selected light blue background color
      className="w-full bg-[#E0F2FF] text-[#2D2D2D] py-12 px-4"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

        {/* --- Column 1: Brand & Affiliation (REORDERED) --- */}
        <div>
          <img
            src={iasLogo}
            alt="IEEE IAS Chapter Logo"
            className="h-35 w-auto rounded-lg transition-all duration-300 hover:scale-105"/>         
          <h3 className="font-bold text-xl mb-2">Official Affiliation</h3>
          <p className="text-sm text-[#555555]">An official student branch chapter of the</p>
          <p className="font-bold text-[#00A39C]">IEEE Industry Applications Society</p>
        </div>

        {/* --- Column 2: Quick Links (REORDERED & FIXED) --- */}
        <div>
          <h3 className="font-bold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {/* CHANGED: Replaced <a> tags with <Link> for smooth scrolling */}
            <li>
              <Link to="about" smooth={true} duration={500} offset={-80} className="hover:text-[#00A39C] cursor-pointer transition-colors duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link to="events" smooth={true} duration={500} offset={-80} className="hover:text-[#00A39C] cursor-pointer transition-colors duration-200">
                Events
              </Link>
            </li>
            <li>
              <Link to="team" smooth={true} duration={500} offset={-80} className="hover:text-[#00A39C] cursor-pointer transition-colors duration-200">
                Our Team
              </Link>
            </li>
            <li>
              {/* CORRECTED: Link text and target to "Projects" */}
              <Link to="projects" smooth={true} duration={500} offset={-80} className="hover:text-[#00A39C] cursor-pointer transition-colors duration-200">
                Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Column 3: Follow Us --- */}
        <div>
          <h3 className="font-bold text-xl mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="#" className="text-gray-500 hover:text-[#00A39C] transition-colors duration-300">
              <FaLinkedin size={30} />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#00A39C] transition-colors duration-300">
              <FaFacebook size={30} />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#00A39C] transition-colors duration-300">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>

        {/* --- Column 4: Contact Us --- */}
        <div>
          <h3 className="font-bold text-xl mb-4">Contact Us</h3>
          <p>Uva Wellassa University of Sri Lanka</p>
          <p>Badulla, Sri Lanka</p>
          <p className="mt-2">
            Email:{' '}
            <a href="mailto:ias.uwu@ieee.org" className="text-[#00A39C] hover:underline">
              ias.uwu@ieee.org
            </a>
          </p>
        </div>
      </div>

      {/* --- Copyright Bar --- */}
      <div className="text-center text-gray-500 pt-8 mt-8 border-t border-gray-300">
        <p>
          © {new Date().getFullYear()} UWU IEEE IAS Student Branch Chapter. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;