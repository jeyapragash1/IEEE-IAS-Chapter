// src/components/FeaturedSlider.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { articlesData } from '../data';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const FeaturedSlider = () => {
  const featuredArticles = articlesData.filter(art => art.isFeatured);

  return (
    <section name="featured" className="w-full py-24 bg-[#030712] px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-white">Editor's Picks</h2>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[EffectCoverflow, Navigation, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
            navigation={{
              nextEl: '.swiper-button-next-custom-featured',
              prevEl: '.swiper-button-prev-custom-featured',
            }}
            className="!py-10"
          >
            {featuredArticles.map((article) => (
              <SwiperSlide key={article.slug} className="!w-[300px] md:!w-[400px]">
                <div className="relative h-96 w-full rounded-xl shadow-lg overflow-hidden group">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <span className="bg-[#00A39C] text-xs font-bold px-2 py-1 rounded">{article.category}</span>
                    <h3 className="text-xl font-bold mt-2">{article.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="swiper-button-prev-custom-featured featured-swiper-button absolute top-1/2 -translate-y-1/2 left-0 z-10 hidden md:flex text-white text-2xl p-3 rounded-full bg-black/50 hover:bg-black transition"
            aria-label="Previous Slide"
          >
            <FaArrowLeft />
          </button>
          <button
            className="swiper-button-next-custom-featured featured-swiper-button absolute top-1/2 -translate-y-1/2 right-0 z-10 hidden md:flex text-white text-2xl p-3 rounded-full bg-black/50 hover:bg-black transition"
            aria-label="Next Slide"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSlider;
