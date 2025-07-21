// src/data.js
import { FaUsers, FaCalendarAlt, FaLightbulb, FaNetworkWired, FaTools, FaBriefcase, FaHandshake } from 'react-icons/fa';

import kasunThilakarathnaImg from './assets/images/Members/Kasun L.png';
import fathimaRisnaImg from './assets/images/Members/Risna Sec.png';
import naveenDilimikaImg from './assets/images/Members/Naveen Tre.png';
import kishoJeyapragashImg from './assets/images/Members/jp web.png';
import sayuruBuddhimaImg from './assets/images/Members/Sayaru MD Head.png';
// Note: You will need to find and add images for the commented-out members
// import viniduKumarasiriImg from './assets/images/Members/vinidu-kumarasiri.jpg';
// import tashiyaTishaniImg from './assets/images/Members/tashiya-tishani.jpg';

// Committee Members
import nadunNimsaraImg from './assets/images/Members/nimsara VC juni.png';
import chamandiChandrasiriImg from './assets/images/Members/chandrasiri ASec.png';
import tharulJayasundaraImg from './assets/images/Members/JAYASUNDARA J.A.D.T.D.W.jpeg';
import hansikaParamiImg from './assets/images/Members/Hansika E mem ju.png';
// import gimhanaMadushankaImg from './assets/images/Members/gimhana-madushanka.jpg';
// import ravinduTharushaImg from './assets/images/Members/ravindu-tharusha.jpg';


// ... (keep all your existing data like teamData, statsData, etc.)

// NEW: Add data for the Faculty Advisor
export const facultyAdvisorData = {
  name: 'Ms. D.P. Jayathunga',
  title: 'Faculty Advisor, IEEE Student Branch',
  department: 'Department of Computer Science and Informatics',
  img: 'https://i.pravatar.cc/150?img=53', // Replace with your advisor's actual photo
  bio: 'With over 15 years of experience in power systems and renewable energy, our advisor provides invaluable guidance and mentorship, bridging the gap between academic theory and real-world industry application.'
};

// --- 4. TEAM & ADVISOR SECTION ---
// Your official committee data, structured correctly.
export const seniorCommitteeData = [
  { name: 'Kasun Thilakarathna', position: 'Chairperson', img: kasunThilakarathnaImg },
  { name: 'Fathima Risna', position: 'Secretary', img: fathimaRisnaImg },
  { name: 'Naveen Dilimika', position: 'Treasurer', img: naveenDilimikaImg },
  { name: 'Kisho Jeyapragash', position: 'Webmaster', img: kishoJeyapragashImg },
  { name: 'Sayuru Buddhima', position: 'MD Head', img: sayuruBuddhimaImg },
  // { name: 'Vinidu Kumarasiri', position: 'PV Head', img: ... },
  // { name: 'Tashiya Tishani', position: 'Editorial Head', img: ... },
];

export const committeeMembersData = [
  { name: 'Nadun Nimsara', position: 'Vice Chairperson', img: nadunNimsaraImg },
  { name: 'Chamandi Chandrasiri', position: 'Assistant Secretary', img: chamandiChandrasiriImg },
  { name: 'Tharul Jayasundara', position: 'PV Member', img: tharulJayasundaraImg },
  { name: 'Hansika Parami', position: 'Editorial Member', img: hansikaParamiImg },
  // { name: 'Gimhana Madushanka', position: 'PV Member', img: ... },
  // { name: 'Ravindu Tharusha', position: 'Editorial Member', img: ... },
];

// --- HERO SLIDES ---
// Using the advanced version that supports both video and images
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

// --- STATS SECTION ---
// CORRECTED: The `number` property is now a pure number for the animation to work correctly.
export const statsData = [
  { id: 1, icon: FaUsers, number: 50, label: 'Active Members' },
  { id: 2, icon: FaCalendarAlt, number: 15, label: 'Events Hosted' },
  { id: 3, icon: FaLightbulb, number: 5, label: 'Projects Completed' },
  { id: 4, icon: FaHandshake, number: 10, label: 'Industry Partners' } // ADDED: New stat
];

// --- WHY JOIN (BENEFITS) SECTION ---
export const benefitsData = [
  { icon: FaNetworkWired, title: 'Professional Networking', description: 'Connect with industry experts, academics, and peers from around the world.' },
  { icon: FaTools, title: 'Hands-On Workshops', description: 'Gain practical skills in PCB design, programming, and automation tools.' },
  { icon: FaBriefcase, title: 'Career Development', description: 'Access exclusive job boards, resume workshops, and industry tours.' },
];

// --- TEAM & ADVISOR SECTION ---
export const teamData = [
  { name: 'Your Name', position: 'Chapter Chair', img: 'https://i.pravatar.cc/150?img=68', linkedin: 'https://linkedin.com' },
  { name: 'Friend Name 1', position: 'Vice Chair', img: 'https://i.pravatar.cc/150?img=60', linkedin: 'https://linkedin.com' },
  { name: 'Friend Name 2', position: 'Treasurer', img: 'https://i.pravatar.cc/150?img=32', linkedin: 'https://linkedin.com' },
  { name: 'Friend Name 3', position: 'Secretary', img: 'https://i.pravatar.cc/150?img=20', linkedin: 'https://linkedin.com' },
];

// src/data.js

// ... (keep your other data like heroSlides, statsData, etc.)

// --- EVENTS SECTION (UPDATED) ---
export const upcomingEvents = [
    { 
        title: 'Advanced PLC Programming', 
        date: 'October 25, 2024', 
        description: 'Dive deep into ladder logic and structured text with industry-grade PLCs in this intensive workshop.',
        category: 'Workshop',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=147'
    },
    { 
        title: 'Industry Tour: Ceylon Electricity Board', 
        date: 'November 10, 2024', 
        description: 'An exclusive look at the national grid control center and its modern SCADA systems.',
        category: 'Industry Tour',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470'
    },
     { 
        title: 'Industry Tour: Ceylon Electricity Board', 
        date: 'November 10, 2024', 
        description: 'An exclusive look at the national grid control center and its modern SCADA systems.',
        category: 'Industry Tour',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470'
    },
     { 
        title: 'Industry Tour: Ceylon Electricity Board', 
        date: 'November 10, 2024', 
        description: 'An exclusive look at the national grid control center and its modern SCADA systems.',
        category: 'Industry Tour',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470'
    },
     { 
        title: 'Industry Tour: Ceylon Electricity Board', 
        date: 'November 10, 2024', 
        description: 'An exclusive look at the national grid control center and its modern SCADA systems.',
        category: 'Industry Tour',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470'
    },
     { 
        title: 'Industry Tour: Ceylon Electricity Board', 
        date: 'November 10, 2024', 
        description: 'An exclusive look at the national grid control center and its modern SCADA systems.',
        category: 'Industry Tour',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470'
    },
];

export const pastEvents = [
    { 
        title: 'Workshop on Altium Designer', 
        date: 'May 15, 2024', 
        shortDescription: 'A successful hands-on session on professional PCB design.',
        fullDescription: "Our comprehensive Altium Designer workshop guided over 40 students through the entire PCB design process, from schematic capture to generating Gerber files for manufacturing. Participants praised the hands-on approach and the expertise of our instructors.",
        category: 'Workshop',
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632",
        images: [
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632",
            "https://images.unsplash.com/photo-1606903351912-336338e3e46c?q=80&w=1470",
            "https://images.unsplash.com/photo-1579762715118-a6f3d4576365?q=80&w=1374"
        ]
    }, 
    { 
        title: 'Guest Lecture: Smart Grid Tech', 
        date: 'April 02, 2024', 
        shortDescription: 'Insightful talk by a senior engineer from Siemens.',
        fullDescription: "We were honored to host a senior power systems engineer from Siemens for an enlightening lecture on the future of Smart Grid technology. The session covered topics like grid automation, IoT integration, and cybersecurity, followed by an engaging Q&A session.",
        category: 'Guest Lecture',
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470",
        images: [
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470",
            "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=1470",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470"
        ]
    },
    { 
        title: 'Guest Lecture: Smart Grid Tech', 
        date: 'April 02, 2024', 
        shortDescription: 'Insightful talk by a senior engineer from Siemens.',
        fullDescription: "We were honored to host a senior power systems engineer from Siemens for an enlightening lecture on the future of Smart Grid technology. The session covered topics like grid automation, IoT integration, and cybersecurity, followed by an engaging Q&A session.",
        category: 'Guest Lecture',
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470",
        images: [
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470",
            "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=1470",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470"
        ]
    },
     { 
        title: 'Guest Lecture: Smart Grid Tech', 
        date: 'April 02, 2024', 
        shortDescription: 'Insightful talk by a senior engineer from Siemens.',
        fullDescription: "We were honored to host a senior power systems engineer from Siemens for an enlightening lecture on the future of Smart Grid technology. The session covered topics like grid automation, IoT integration, and cybersecurity, followed by an engaging Q&A session.",
        category: 'Guest Lecture',
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470",
        images: [
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470",
            "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=1470",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470"
        ]
    },
     { 
        title: 'Guest Lecture: Smart Grid Tech', 
        date: 'April 02, 2024', 
        shortDescription: 'Insightful talk by a senior engineer from Siemens.',
        fullDescription: "We were honored to host a senior power systems engineer from Siemens for an enlightening lecture on the future of Smart Grid technology. The session covered topics like grid automation, IoT integration, and cybersecurity, followed by an engaging Q&A session.",
        category: 'Guest Lecture',
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470",
        images: [
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470",
            "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=1470",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470"
        ]
    },
     { 
        title: 'Guest Lecture: Smart Grid Tech', 
        date: 'April 02, 2024', 
        shortDescription: 'Insightful talk by a senior engineer from Siemens.',
        fullDescription: "We were honored to host a senior power systems engineer from Siemens for an enlightening lecture on the future of Smart Grid technology. The session covered topics like grid automation, IoT integration, and cybersecurity, followed by an engaging Q&A session.",
        category: 'Guest Lecture',
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470",
        images: [
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470",
            "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=1470",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470"
        ]
    },
  
];

// src/data.js

// ... (keep all your other data arrays)

// NEW & EXPANDED: projectsData with tech stack and links
export const projectsData = [
  { 
    title: 'Automated Hydroponics System', 
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632',
    description: 'An IoT-based system to monitor and control nutrient levels, pH, and light cycles for efficient plant growth, all controlled via a web dashboard.',
    techStack: ['Raspberry Pi', 'Python', 'React', 'Firebase'],
    link: 'https://github.com' // Replace with your actual project link
  },
  { 
    title: 'Grid-Tied Solar Inverter Design', 
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632',
    description: 'A custom-designed and simulated pure sine wave inverter to safely feed solar power back into the local grid, focusing on efficiency and harmonic distortion reduction.',
    techStack: ['MATLAB', 'Simulink', 'Power Electronics', 'C++'],
    link: 'https://github.com'
  },
  {
    title: 'Object-Tracking Robotic Arm',
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632',
    description: 'A 4-axis robotic arm that uses computer vision via a webcam to detect, track, and interact with specific objects based on their color and shape.',
    techStack: ['OpenCV', 'Python', 'Arduino', '3D Printing'],
    link: 'https://github.com'
  }
];

export const testimonialsData = [
  { 
    quote: "Leading this chapter has been an incredible experience. IAS provides a unique platform to not only learn technically but also to grow as a leader and manage a team.", 
    name: "Kasun Thilakarathna", 
    major: "Chairperson", 
    img: kasunThilakarathnaImg 
  },
  { 
    quote: "The organizational skills I've gained as Secretary are invaluable. Coordinating events and managing communications has prepared me for the professional world.", 
    name: "Fathima Risna", 
    major: "Secretary", 
    img: fathimaRisnaImg 
  },
  { 
    quote: "Managing the chapter's budget taught me financial responsibility and resource allocation, skills that are crucial for any engineering project.", 
    name: "Naveen Dilimika", 
    major: "Treasurer", 
    img: naveenDilimikaImg
  },
  { 
    quote: "Building and maintaining our official website was a fantastic real-world project. I applied my web development skills to create something impactful for our community.", 
    name: "Kisho Jeyapragash", 
    major: "Webmaster", 
    img: kishoJeyapragashImg 
  },
  { 
    quote: "As MD Head, I learned how to market our events and grow our brand. It's amazing to see our membership increase because of the outreach we do.", 
    name: "Sayuru Buddhima", 
    major: "MD Head", 
    img: sayuruBuddhimaImg 
  },
];