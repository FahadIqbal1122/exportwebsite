import React from 'react';
import { latestNews } from './newsData';
import NewsCard from './NewsCard';

export default function LatestNews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54585A]">Latest News</h2>
          <p className="mt-4 text-lg text-gray-600">
            Stay updated with the latest developments in international trade
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/news"
            className="inline-flex items-center px-6 py-3 bg-[#C92536] text-white rounded-md hover:bg-[#a61e2c] transition-colors"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
}