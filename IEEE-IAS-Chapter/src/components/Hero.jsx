// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 1. Import Swiper components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// 2. Import Swiper's required CSS files
import 'swiper/css';

// 3. Import the slide data
import { heroSlides } from '../data';

const Hero = () => {
  // We need a reference to the main Swiper instance to control it
  const [swiperInstance, setSwiperInstance] = useState(null);

  // This effect manages the autoplay logic
  useEffect(() => {
    if (!swiperInstance) return;

    const handleSlideChange = () => {
      // Find the index of the video slide
      const videoSlideIndex = heroSlides.findIndex(slide => slide.type === 'video');
      
      // If the current slide is the video slide, STOP autoplay
      if (swiperInstance.realIndex === videoSlideIndex) {
        swiperInstance.autoplay.stop();
      } else {
        // Otherwise, make sure autoplay is RUNNING
        swiperInstance.autoplay.start();
      }
    };

    // Listen for slide changes
    swiperInstance.on('slideChange', handleSlideChange);
    
    // Initial check when the component loads
    handleSlideChange(); 

    // Cleanup the event listener
    return () => {
      swiperInstance.off('slideChange', handleSlideChange);
    };
  }, [swiperInstance]);

  // This function is called by the video when it finishes playing
  const handleVideoEnd = () => {
    if (swiperInstance) {
      swiperInstance.slideNext(); // Programmatically go to the next slide
    }
  };

  return (
    <section name="home" className="w-full h-screen relative">
      <Swiper
        // Get the Swiper instance when it's ready
        onSwiper={setSwiperInstance}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000, // Autoplay delay for IMAGE slides
          disableOnInteraction: false,
        }}
        // The arrows are removed by not including the Navigation module or prop
        className="w-full h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">

              {/* ---- CONDITIONAL RENDERING: VIDEO OR IMAGE ---- */}
              {slide.type === 'video' ? (
                <video
                  src={slide.videoSrc}
                  autoPlay  // Automatically start playing
                  muted     // MUST be muted for autoplay to work in browsers
                  playsInline
                  onEnded={handleVideoEnd} // Trigger slide change when video ends
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center slide-background-animate"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              )}
              {/* ----------------------------------------------- */}

              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Content for THIS slide */}
              <div className="relative w-full h-full flex items-center justify-center text-white z-10">
                <motion.div
                  className="text-center p-4"
                  key={slide.title} // Re-trigger animation on slide change
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
                    {slide.subtitle}
                  </p>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;