// src/components/ArticleCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ArticleCard = ({ article, index, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={() => onClick(article)}
      className="cursor-pointer"
    >
      <div className="group bg-[#111827] rounded-xl border border-gray-800 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:shadow-[#00A39C]/20 hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={article.authorImage}
              alt={article.author}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-gray-400">{article.author}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-[#00A39C] transition-colors h-14">
            {article.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold bg-gray-700 text-gray-300 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
