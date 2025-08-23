// src/components/ArticleFeed.jsx
import React from 'react'; // CORRECTED: The import is now written correctly.
import { motion, AnimatePresence } from 'framer-motion';
import { articlesData } from '../data';
import ArticleCard from './ArticleCard';
import ArticleModal from './ArticleModal';

const ArticleFeed = ({ selectedCategory, selectedArticle, setSelectedArticle }) => {
  const filteredArticles = selectedCategory === 'All'
    ? articlesData
    : articlesData.filter(article => article.category === selectedCategory);

  return (
    <>
      <section name="articles" className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">Explore Our Articles</h2>
            <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
              Dive into our archive of student-written articles, from deep dives into AI to the latest in web technology and power systems.
            </p>
          </motion.div>
          
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredArticles.map((article, index) => (
                <ArticleCard 
                  key={article.slug} 
                  article={article} 
                  index={index}
                  onClick={() => setSelectedArticle(article)} 
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedArticle && (
          <ArticleModal 
            article={selectedArticle} 
            onClose={() => setSelectedArticle(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};
export default ArticleFeed;