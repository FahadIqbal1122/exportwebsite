import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Newspaper, Image, Video, FileText } from 'lucide-react';
import { mediaItems, latestNews, photoGallery, videoGallery, publications } from './mediaData';

interface MediaMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MediaMegaMenu: React.FC<MediaMegaMenuProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState('news');

  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 w-full max-w-6xl bg-white shadow-lg z-50 mt-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
    >
      <div className="mx-auto">
        <div className="flex min-h-[350px]">
          {/* Left Sidebar */}
          <div className="w-[180px] bg-gray-50/50 py-2">
            <nav>
              {mediaItems.map((item) => (
                <button
                  key={item.id}
                  className={`w-full flex items-center px-6 py-2.5 text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'bg-white text-[#C92536]'
                      : 'text-gray-600 hover:bg-white hover:text-[#C92536]'
                  }`}
                  onMouseEnter={() => setActiveSection(item.id)}
                >
                  <item.icon className={`w-4 h-4 mr-3 ${
                    activeSection === item.id ? 'text-[#C92536]' : 'text-gray-400'
                  }`} />
                  <span className="text-sm font-medium whitespace-nowrap">{item.title}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 p-6 bg-white">
            {activeSection === 'news' && (
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {latestNews.map((news) => (
                  <Link key={news.id} to={`/news/${news.id}`} className="group">
                    <div className="aspect-[16/9] rounded overflow-hidden bg-gray-100">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="mt-3 text-sm font-medium text-gray-900 group-hover:text-[#C92536] line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">{news.excerpt}</p>
                  </Link>
                ))}
              </div>
            )}

            {activeSection === 'images' && (
              <div className="grid grid-cols-3 gap-4">
                {photoGallery.slice(0, 3).map((photo) => (
                  <Link key={photo.id} to={`/gallery/${photo.id}`} className="group">
                    <div className="aspect-square rounded overflow-hidden bg-gray-100">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-1">{photo.title}</p>
                  </Link>
                ))}
              </div>
            )}

            {activeSection === 'videos' && (
              <div className="grid grid-cols-2 gap-8">
                {videoGallery.slice(0, 2).map((video) => (
                  <Link key={video.id} to={`/videos/${video.id}`} className="group">
                    <div className="relative aspect-video rounded overflow-hidden bg-gray-100">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                          <Video className="w-5 h-5 text-[#C92536]" />
                        </div>
                      </div>
                    </div>
                    <h4 className="mt-2 text-sm font-medium text-gray-900 group-hover:text-[#C92536] line-clamp-2">
                      {video.title}
                    </h4>
                  </Link>
                ))}
              </div>
            )}

            {activeSection === 'publications' && (
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {publications.map((pub) => (
                  <Link key={pub.id} to={pub.downloadUrl} className="group">
                    <div className="flex space-x-4">
                      <div className="w-20 h-28 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                        <img
                          src={pub.cover}
                          alt={pub.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 group-hover:text-[#C92536] line-clamp-2">
                          {pub.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-3">{pub.description}</p>
                        <p className="mt-2 text-xs text-[#C92536]">{pub.type}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MediaMegaMenu;
