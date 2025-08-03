// src/components/ArticleFeed.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { articlesData } from '../data';
import ArticleCard from './ArticleCard';
import ArticleModal from './ArticleModal';

const ArticleFeed = ({ selectedCategory }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles =
    selectedCategory === 'All'
      ? articlesData
      : articlesData.filter(article => article.category === selectedCategory);

  return (
    <>
      <section
        name="articles"
        className="py-24 bg-[#0A0F19] px-4 min-h-[50vh]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white text-center mb-16">
            From the Archive
          </h2>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredArticles.map((article, index) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  index={index}
                  onClick={setSelectedArticle}
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
