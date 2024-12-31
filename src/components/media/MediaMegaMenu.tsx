import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Video } from 'lucide-react';
import { mediaItems, latestNews, photoGallery, videoGallery, publications } from './mediaData';

interface MediaMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MediaMegaMenu: React.FC<MediaMegaMenuProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState('news');
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse enter and leave to show and hide the menu
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Automatically close when not hovered and isOpen is false
  useEffect(() => {
    if (!isHovered && !isOpen) {
      onClose(); // Close the menu when not hovered and isOpen is false
    }
  }, [isHovered, isOpen, onClose]);

  return (
    <div
      className={`w-[1000px] -ml-[400px] ${isOpen || isHovered ? 'block' : 'hidden'} `} // Hide menu if not open or not hovered
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex bg-white dark:bg-gray-900 shadow-lg">
        {/* Left Sidebar */}
        <div className="w-64 bg-gray-50 py-6 dark:bg-gray-800">
          <nav className="space-y-1">
            {mediaItems.map((item) => (
              <button
                key={item.id}
                className={`w-full flex items-center px-6 py-3 text-left transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-white dark:bg-gray-700 text-[#C92536] shadow-sm relative after:absolute after:top-0 after:right-0 after:w-[3px] after:h-full after:bg-[#C92536]'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-[#C92536]'
                }`}
                onMouseEnter={() => setActiveSection(item.id)}
              >
                <item.icon className={`w-5 h-5 mr-3 ${activeSection === item.id ? 'text-[#C92536]' : 'text-gray-400 dark:text-gray-500'}`} />
                <span className="text-sm font-medium">{item.title}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 p-8 border-l border-gray-100 dark:border-gray-700">
          {activeSection === 'news' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Latest News</h2>
                <Link to="/news" className="text-sm font-medium text-[#C92536] hover:text-[#A61E2B] transition-colors">
                  View all news
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {latestNews.slice(0, 2).map((news) => (
                  <Link key={news.id} to={`/news/${news.id}`} className="group">
                    <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-base font-medium text-gray-900 dark:text-white group-hover:text-[#C92536] transition-colors line-clamp-2 mb-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">{news.excerpt}</p>
                    <span className="inline-flex items-center text-sm font-medium text-[#C92536] group-hover:translate-x-1 transition-transform">
                      Read more
                      <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'images' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Photo Gallery</h2>
                <Link to="/gallery" className="text-sm font-medium text-[#C92536] hover:text-[#A61E2B] transition-colors">
                  View all photos
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {photoGallery.map((photo) => (
                  <Link key={photo.id} to={`/gallery/${photo.id}`} className="group">
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white text-sm font-medium">{photo.title}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'videos' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Featured Videos</h2>
                <Link to="/videos" className="text-sm font-medium text-[#C92536] hover:text-[#A61E2B] transition-colors">
                  View all videos
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {videoGallery.slice(0, 2).map((video) => (
                  <Link key={video.id} to={`/videos/${video.id}`} className="group">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                          <Video className="w-7 h-7 text-[#C92536]" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-base font-medium text-gray-900 dark:text-white group-hover:text-[#C92536] transition-colors mb-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{video.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'publications' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Latest Publications</h2>
                <Link to="/publications" className="text-sm font-medium text-[#C92536] hover:text-[#A61E2B] transition-colors">
                  View all publications
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {publications.slice(0, 2).map((publication) => (
                  <div key={publication.id} className="flex space-x-6 group">
                    <div className="flex-shrink-0 w-36">
                      <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-md">
                        <img
                          src={publication.cover}
                          alt={publication.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-gray-900 dark:text-white mb-2">{publication.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">{publication.description}</p>
                      <a
                        href={publication.downloadUrl}
                        className="inline-flex items-center text-sm font-medium text-[#C92536] hover:text-[#A61E2B] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download PDF
                        <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaMegaMenu;
