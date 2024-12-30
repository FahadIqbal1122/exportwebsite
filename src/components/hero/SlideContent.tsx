import React from 'react';
import { motion } from 'framer-motion';

export interface SlideData {
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const SlideContent: React.FC<SlideData> = ({
  image,
  title,
  description,
  ctaText,
  ctaLink
}) => {
  return (
    <div
      className="relative h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <motion.h2
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description}
          </motion.p>
          <motion.a
            href={ctaLink}
            className="inline-block bg-[#C92536] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#a61e2c] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {ctaText}
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideContent);