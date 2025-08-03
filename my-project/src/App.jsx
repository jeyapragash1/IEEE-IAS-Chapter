// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Competition from './components/Competition';
import Categories from './components/Categories';
import ArticleFeed from './components/ArticleFeed';
import Team from './components/Team';
import Vision from './components/Vision';
import Submit from './components/Submit';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="bg-[#030712]">
      <Navbar />
      <main>
        <Hero />
        <Competition />
        <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <ArticleFeed selectedCategory={selectedCategory} />
        <Team />
        <Vision />
        <Submit />
      </main>
      <Footer />
    </div>
  );
}
export default App;