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
  // State is now managed here, at the top level
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Competition />
        {/* Pass the state and setter function to Categories */}
        <Categories 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
        {/* Pass the state and setter function to ArticleFeed */}
        <ArticleFeed 
          selectedCategory={selectedCategory} 
          selectedArticle={selectedArticle} 
          setSelectedArticle={setSelectedArticle}
        />
        <Team />
        <Vision />
        <Submit />
      </main>
      <Footer />
    </div>
  );
}
export default App;