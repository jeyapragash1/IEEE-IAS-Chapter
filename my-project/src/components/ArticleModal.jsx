// src/components/ArticleModal.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const backdropVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const modalVariants = {
  hidden: { y: "50%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { type: 'spring', stiffness: 150, damping: 25 } },
};

const ArticleModal = ({ article, onClose }) => {
  if (!article) return null;
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 w-full h-full flex items-center justify-center z-50 p-4"
      variants={backdropVariants} initial="hidden" animate="visible" exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-slate-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={article.featuredImage} alt={article.title} className="w-full h-80 object-cover rounded-t-2xl" />
          <button onClick={onClose} className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black transition-colors z-10">
            <FaTimes size={20} />
          </button>
        </div>
        <div className="p-8 md:p-12">
          <p className="font-semibold text-[#00A39C] mb-2">{article.category}</p>
          <h1 className="text-4xl font-extrabold text-white mb-4">{article.title}</h1>
          <p className="text-gray-400 mb-8">By <strong>{article.author}</strong> • Published on {article.date}</p>
          <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      </motion.div>
    </motion.div>
  );
};
export default ArticleModal;