import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { successStories } from './successData';

const SuccessSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // Use RAF for smoother animations
  useEffect(() => {
    let rafId: number;
    let lastTime = performance.now();
    const interval = 6000;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;

      if (deltaTime >= interval) {
        nextSlide();
        lastTime = currentTime;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % successStories.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + successStories.length) % successStories.length);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "tween", duration: 0.5, ease: "easeOut" },
        opacity: { duration: 0.3 }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: "tween", duration: 0.5, ease: "easeIn" },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <div className="relative bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center inline-block">Success Stories</h2>
          <p className="text-xl text-gray-600 mt-8">
            See how businesses like yours achieved global success
          </p>
        </motion.div>

        <div className="relative h-[600px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
              style={{
                willChange: 'transform, opacity',
                backfaceVisibility: 'hidden',
                perspective: 1000,
                WebkitFontSmoothing: 'subpixel-antialiased'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                <motion.div 
                  className="relative overflow-hidden rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <img 
                    src={successStories[currentSlide].image} 
                    alt={successStories[currentSlide].companyName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>

                <motion.div 
                  className="flex flex-col justify-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <img 
                    src={successStories[currentSlide].logo} 
                    alt="Company Logo" 
                    className="h-32 w-48 object-contain mb-6"
                  />
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {successStories[currentSlide].companyName}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {successStories[currentSlide].description}
                  </p>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-600">Industry</span>
                      <span className="font-semibold">{successStories[currentSlide].industry}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-600">Achievement</span>
                      <span className="font-semibold text-[#C92536]">
                        {successStories[currentSlide].achievement}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Year</span>
                      <span className="font-semibold">{successStories[currentSlide].year}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-50 z-10"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-50 z-10"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight className="w-6 h-6" />
          </motion.button>

          {/* Progress Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
            {successStories.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-[#C92536]' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SuccessSlider);
