import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface SliderControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  onDotClick: (index: number) => void;
  isAutoPlaying: boolean;
  onToggleAutoPlay: () => void;
}

const SliderControls: React.FC<SliderControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrevClick,
  onNextClick,
  onDotClick,
  
}) => {
  return (
    <>
      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <motion.button
          className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors"
          onClick={onPrevClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors"
          onClick={onNextClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => onDotClick(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </>
  );
};

export default React.memo(SliderControls);