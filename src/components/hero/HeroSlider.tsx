import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SlideContent from './SlideContent';
import SliderControls from './SliderControls';
import { slides } from './heroData';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(prev => !prev);
  }, []);

  // Use requestAnimationFrame for smoother animations
  useEffect(() => {
    if (!isAutoPlaying) return;

    let rafId: number;
    let lastTime = performance.now();
    const interval = 5000;

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
  }, [isAutoPlaying, nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "tween", duration: 0.5, ease: "easeOut" },
        opacity: { duration: 0.3 },
        scale: { duration: 0.5, ease: "easeOut" }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        x: { type: "tween", duration: 0.5, ease: "easeIn" },
        opacity: { duration: 0.3 }
      }
    })
  };

  const controls = useMemo(() => (
    <SliderControls
      currentSlide={currentSlide}
      totalSlides={slides.length}
      onPrevClick={prevSlide}
      onNextClick={nextSlide}
      onDotClick={goToSlide}
      isAutoPlaying={isAutoPlaying}
      onToggleAutoPlay={toggleAutoPlay}
    />
  ), [currentSlide, prevSlide, nextSlide, goToSlide, isAutoPlaying, toggleAutoPlay]);

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false} mode="wait" custom={direction}>
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
          <SlideContent {...slides[currentSlide]} />
        </motion.div>
      </AnimatePresence>
      {controls}
    </div>
  );
};

export default React.memo(HeroSlider);