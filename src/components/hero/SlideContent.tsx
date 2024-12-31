import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      className="relative h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <motion.h2
            className="text-5xl font-bold mb-4 text-[#f8fafc]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-[#f1f5f9] font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to={ctaLink}
              className="inline-block bg-[#C92536] text-[#ffffff] px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#a61e2c] transition-colors"
            >
              {ctaText}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideContent);