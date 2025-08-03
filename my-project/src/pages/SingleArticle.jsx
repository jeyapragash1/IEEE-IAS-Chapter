// src/pages/SingleArticle.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articlesData } from '../data';
import { motion } from 'framer-motion';

const SingleArticle = () => {
  const { slug } = useParams();
  const article = articlesData.find(art => art.slug === slug);

  if (!article) {
    return (
      <div className="text-center py-40">
        <h1 className="text-4xl font-bold">404 - Article Not Found</h1>
        <Link to="/articles" className="text-[#00629B] mt-4 inline-block">← Back to Articles</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-semibold text-[#00A39C] mb-2">{article.category}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-4 leading-tight">{article.title}</h1>
          <div className="flex items-center gap-4 text-gray-500 mb-8 border-b border-gray-200 pb-4">
            <img src={article.authorImage} alt={article.author} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-slate-700">{article.author}</p>
              <p className="text-sm">{article.date} • {article.readingTime}</p>
            </div>
          </div>
          <img src={article.featuredImage} alt={article.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-12 shadow-lg" />
        </motion.div>
        
        <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
        
        <div className="mt-16 border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">About the Author</h3>
            <div className="flex items-center gap-4 bg-slate-100 p-6 rounded-lg">
                <img src={article.authorImage} alt={article.author} className="w-16 h-16 rounded-full object-cover" />
                <div>
                    <h4 className="font-bold text-xl text-slate-800">{article.author}</h4>
                    <p className="text-gray-500">A passionate student contributor to the IAS UWU Blog.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default SingleArticle;