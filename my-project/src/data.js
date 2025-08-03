// src/data.js

import kasunThilakarathnaImg from './assets/images/kasun-thilakarathna.png';
import fathimaRisnaImg from './assets/images/fathima-risna.png';
import kishoJeyapragashImg from './assets/images/kisho-jeyapragash.png';

export const blogTeamData = [
  { 
    name: 'Kasun Thilakarathna', 
    role: 'Project Lead & Editor-in-Chief', 
    img: kasunThilakarathnaImg,
    bio: 'Overseeing the strategic direction and content quality of the IAS UWU Blog, ensuring it aligns with our chapter\'s mission of innovation and excellence.'
  },
  { 
    name: 'Fathima Risna', 
    role: 'Content & Community Manager', 
    img: fathimaRisnaImg,
    bio: 'Managing article submissions, coordinating with student authors, and fostering a vibrant community of writers and readers.'
  },
  { 
    name: 'Kisho Jeyapragash', 
    role: 'Lead Developer & Webmaster', 
    img: kishoJeyapragashImg,
    bio: 'Responsible for the design, development, and maintenance of the blog platform, ensuring a seamless and high-performance user experience.'
  },
];

export const articlesData = [
  {
    slug: 'the-future-of-renewable-energy',
    title: 'Sri Lanka\'s Untapped Potential in Renewable Energy Grids',
    author: 'Dr. Aruni Silva',
    authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300',
    date: 'November 10, 2023',
    category: 'Power Systems',
    tags: ['Renewable Energy', 'Smart Grids', 'Policy'],
    readingTime: '9 min read',
    featuredImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1470',
    shortDescription: 'A deep dive into the technical and policy challenges Sri Lanka faces in transitioning to a fully renewable energy grid.',
    content: `<h2>The Green Energy Imperative</h2><p>As an island nation, Sri Lanka is uniquely positioned to harness renewable energy sources like solar and wind...</p>`
  },
  {
    slug: 'practical-iot-for-agriculture',
    title: 'Practical IoT: Building a Smart Irrigation System with Arduino',
    author: 'Sanjay Kumar',
    authorImage: 'https://images.unsplash.com/photo-1581092921442-5a23c3a2c262?q=80&w=300',
    date: 'November 5, 2023',
    category: 'IoT',
    tags: ['Arduino', 'Sensors', 'Agriculture'],
    readingTime: '12 min read',
    featuredImage: 'https://images.unsplash.com/photo-1624555130581-2d99211341b6?q=80&w=1470',
    shortDescription: 'Step-by-step tutorial on creating an automated irrigation system using soil moisture sensors and an Arduino.',
    content: `<h2>Revolutionizing Agriculture</h2><p>Smart agriculture is key to ensuring food security...</p>`
  },
  {
    slug: 'getting-started-with-ai',
    title: 'A Student\'s Guide to Artificial Intelligence in 2024',
    author: 'Priya Sharma',
    authorImage: 'https://images.unsplash.com/photo-1546525848-37412b23a5b3?q=80&w=300',
    date: 'October 26, 2023',
    category: 'AI & ML',
    tags: ['Machine Learning', 'Python'],
    readingTime: '8 min read',
    featuredImage: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1470',
    shortDescription: 'Demystifying AI with a roadmap tailored for students and beginners.',
    content: `<h2>The Dawn of a New Era</h2><p>Artificial Intelligence (AI) is a transformative force reshaping industries...</p>`
  },
  {
    slug: 'modern-web-development-explained',
    title: 'Navigating the Landscape of Modern Web Development',
    author: 'David Chen',
    authorImage: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=300',
    date: 'October 20, 2023',
    category: 'Web Dev',
    tags: ['React', 'JavaScript'],
    readingTime: '7 min read',
    featuredImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470',
    shortDescription: 'Overview of essential tools and frameworks in modern web development.',
    content: `<h2>From Static Pages to Dynamic Apps</h2><p>Modern web development is about building interactive apps that work seamlessly on all devices...</p>`
  },
  {
    slug: 'cybersecurity-basics-for-students',
    title: 'Cybersecurity Basics Every Student Should Know',
    author: 'Meera Nandakumar',
    authorImage: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300',
    date: 'September 15, 2023',
    category: 'Cybersecurity',
    tags: ['Cyber Hygiene', 'Phishing', 'Passwords'],
    readingTime: '6 min read',
    featuredImage: 'https://images.unsplash.com/photo-1611222675450-261c3331b270?q=80&w=1470',
    shortDescription: 'Learn how to protect your digital life with practical security tips.',
    content: `<h2>Stay Safe Online</h2><p>In a digital-first world, understanding basic cybersecurity practices is a must...</p>`
  },
  {
    slug: 'research-methods-for-techies',
    title: 'Research Methods for Tech Enthusiasts',
    author: 'Akhil Fernando',
    authorImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300',
    date: 'August 30, 2023',
    category: 'Research',
    tags: ['Literature Review', 'Paper Writing'],
    readingTime: '10 min read',
    featuredImage: 'https://images.unsplash.com/photo-1532619187608-e5375cab36f3?q=80&w=1470',
    shortDescription: 'A beginner-friendly guide to starting and documenting your research process.',
    content: `<h2>Building Knowledge the Right Way</h2><p>Whether you're writing a thesis or exploring a tech project, solid research skills are a must...</p>`
  },
  {
    slug: 'future-of-robotics',
    title: 'What’s Next in Robotics: Trends to Watch in 2025',
    author: 'Liam Abeywickrama',
    authorImage: 'https://images.unsplash.com/photo-1520975918318-9c3db1373c5f?q=80&w=300',
    date: 'August 10, 2023',
    category: 'AI & ML',
    tags: ['Robotics', 'Automation'],
    readingTime: '11 min read',
    featuredImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470',
    shortDescription: 'From collaborative bots to medical automation—here’s what the future of robotics looks like.',
    content: `<h2>Rise of the Machines</h2><p>Robots are no longer a future dream; they’re becoming part of our daily lives...</p>`
  },
  {
    slug: 'ethical-hacking-overview',
    title: 'What is Ethical Hacking? A Beginner’s Primer',
    author: 'Nuwan Dissanayake',
    authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300',
    date: 'July 27, 2023',
    category: 'Cybersecurity',
    tags: ['Ethical Hacking', 'Pen Testing'],
    readingTime: '7 min read',
    featuredImage: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8d6?q=80&w=1470',
    shortDescription: 'Understand the basics of ethical hacking and how it helps protect modern systems.',
    content: `<h2>Good Hackers?</h2><p>Yes, they exist. Ethical hackers help find vulnerabilities before real attackers can exploit them...</p>`
  },
  {
    slug: 'building-smart-campus',
    title: 'Smart Campus Solutions: How IoT is Changing Universities',
    author: 'Ravindu Peiris',
    authorImage: 'https://images.unsplash.com/photo-1603415526974-3b3bfbfa25b0?q=80&w=300',
    date: 'July 10, 2023',
    category: 'IoT',
    tags: ['IoT', 'Smart Campus'],
    readingTime: '9 min read',
    featuredImage: 'https://images.unsplash.com/photo-1596496181898-4dc67f2df1ab?q=80&w=1470',
    shortDescription: 'Discover how universities are integrating sensors, data, and automation for better campus management.',
    content: `<h2>The Connected University</h2><p>From smart lighting to automated class schedules, IoT is transforming campus life...</p>`
  },
  {
    slug: 'green-software',
    title: 'Coding for the Planet: Introduction to Green Software',
    author: 'Ishara Madushani',
    authorImage: 'https://images.unsplash.com/photo-1541233349642-6e425fe6190e?q=80&w=300',
    date: 'June 25, 2023',
    category: 'Web Dev',
    tags: ['Green Tech', 'Sustainable Coding'],
    readingTime: '6 min read',
    featuredImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1470',
    shortDescription: 'Learn what green software is and how developers can write code that consumes less energy.',
    content: `<h2>Eco-Conscious Coding</h2><p>Green software is an emerging discipline focused on reducing carbon impact of software...</p>`
  }
];

export const categoriesData = [
  'All', 'AI & ML', 'IoT', 'Web Dev', 'Cybersecurity', 'Power Systems', 'Research'
];
