import React from 'react';
import { achievements } from './achievementsData';
import AchievementCard from './AchievementCard';
import { useIntersectionObserver } from './useIntersectionObserver';

export default function Achievements() {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '50px',
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors" ref={elementRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54585A] dark:text-white">Our Achievements</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Milestones that showcase our commitment to excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              {...achievement}
              startCounting={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}