import React, { useEffect } from 'react';
import { useCountUp } from './useCountUp';
import type { Achievement } from './achievementsData';

interface AchievementCardProps extends Achievement {
  startCounting: boolean;
}

export default function AchievementCard({ value, suffix, label, duration, startCounting }: AchievementCardProps) {
  const { count, startAnimation } = useCountUp({
    end: value,
    duration,
  });

  useEffect(() => {
    if (startCounting) {
      startAnimation();
    }
  }, [startCounting, startAnimation]);

  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:shadow-gray-800/30 transition-colors">
      <div className="text-4xl md:text-5xl font-bold text-[#C92536] dark:text-[#E93546] mb-2">
        {count}
        <span className="ml-1">{suffix}</span>
      </div>
      <p className="text-[#54585A] dark:text-gray-300">{label}</p>
    </div>
  );
}