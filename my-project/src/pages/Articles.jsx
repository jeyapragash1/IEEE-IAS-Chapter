// src/pages/Articles.jsx
import React from 'react';
import { articlesData } from '../data';
import ArticleCard from '../components/ArticleCard';
import { motion } from 'framer-motion';

const Articles = () => {
  return (
    <div className="pt-32 pb-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-slate-800">The Archive</h1>
          <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto">Explore our complete collection of articles, from deep dives into AI to the latest in web technology.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {articlesData.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Articles;