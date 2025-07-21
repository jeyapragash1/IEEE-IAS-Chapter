// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import WhyJoin from './components/WhyJoin';
import Events from './components/Events';
import Team from './components/Team';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <WhyJoin />
        <Testimonials />
        <Events />
        <Team />
        <Projects />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;