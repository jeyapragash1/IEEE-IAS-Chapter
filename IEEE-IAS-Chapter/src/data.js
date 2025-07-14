// src/data.js
import { FaUsers, FaCalendarAlt, FaLightbulb, FaNetworkWired, FaTools, FaBriefcase } from 'react-icons/fa';

export const statsData = [
  { id: 1, icon: FaUsers, number: '50+', label: 'Active Members' },
  { id: 2, icon: FaCalendarAlt, number: '15+', label: 'Events Hosted' },
  { id: 3, icon: FaLightbulb, number: '5+', label: 'Projects Completed' },
];

export const benefitsData = [
  { icon: FaNetworkWired, title: 'Professional Networking', description: 'Connect with industry experts, academics, and peers from around the world.' },
  { icon: FaTools, title: 'Hands-On Workshops', description: 'Gain practical skills in PCB design, programming, and automation tools.' },
  { icon: FaBriefcase, title: 'Career Development', description: 'Access exclusive job boards, resume workshops, and industry tours.' },
];

export const teamData = [
  { name: 'Your Name', position: 'Chapter Chair', img: 'https://i.pravatar.cc/150?img=68' },
  { name: 'Friend Name 1', position: 'Vice Chair', img: 'https://i.pravatar.cc/150?img=60' },
  { name: 'Friend Name 2', position: 'Treasurer', img: 'https://i.pravatar.cc/150?img=32' },
  { name: 'Friend Name 3', position: 'Secretary', img: 'https://i.pravatar.cc/150?img=20' },
];

export const upcomingEvents = [
    { title: 'Advanced PLC Programming', date: 'October 25, 2024', description: 'Dive deep into ladder logic and structured text with industry-grade PLCs.' },
    { title: 'Industry Tour: Ceylon Electricity Board', date: 'November 10, 2024', description: 'An exclusive look at the national grid control center.' },
];

export const pastEvents = [
    { title: 'Workshop on Altium Designer', date: 'May 15, 2024', description: 'A successful hands-on session on professional PCB design.' },
    { title: 'Guest Lecture: Smart Grid Tech', date: 'April 02, 2024', description: 'Insightful talk by an engineer from Siemens.' },
];

export const projectsData = [
  { title: 'Automated Hydroponics System', img: 'https://images.unsplash.com/photo-1617192433045-361414d9a2d3?w=500', description: 'An IoT-based system to monitor and control nutrient levels for plant growth.' },
  { title: 'Grid-Tied Solar Inverter', img: 'https://images.unsplash.com/photo-1508558936510-0af1e3454aa6?w=500', description: 'A custom-designed inverter to feed solar power back into the local grid.' },
];

export const testimonialsData = [
  { quote: "Joining IAS was the best decision of my university life. The industry connections are invaluable.", name: "Kavindu Perera", major: "Electrical Engineering, 4th Year", img: 'https://i.pravatar.cc/150?img=11' },
  { quote: "The hands-on workshops gave me practical skills that I used to land my internship.", name: "Fathima Rilwan", major: "Computer Engineering, 3rd Year", img: 'https://i.pravatar.cc/150?img=3' },
];

// src/data.js

// Add this new array for the hero slideshow
export const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1470", // A professional team meeting
    title: "Collaborate & Innovate",
    subtitle: "Join a community of forward-thinking engineers and designers."
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80", // A tech/lab environment
    title: "Hands-On Technical Experience",
    subtitle: "Gain practical skills in our workshops and projects."
  },
  {
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=80", // A presentation/networking event
    title: "Connect With Industry Leaders",
    subtitle: "Our events bridge the gap between academia and the professional world."
  }
];

// ... keep your other data like teamData, eventsData, etc. below