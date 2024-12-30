import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import type { NewsItem } from './newsData';

export default function NewsCard({ title, excerpt, date, image, category, readTime, slug }: NewsItem) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#C92536] text-white px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-[#54585A] mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        <a
          href={`/news/${slug}`}
          className="inline-flex items-center text-[#C92536] hover:text-[#a61e2c] transition-colors"
        >
          Read More <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}