import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe2, Search, Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { serviceCategories } from './services/serviceData';
import MediaMegaMenu from './media/MediaMegaMenu';
import { useTheme } from '../context/ThemeContext';
import '../styles/navbar.css';

const Navbar = () => {
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isMediaMenuOpen, setIsMediaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { t, i18n } = useTranslation();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className={`fixed w-full z-50 bg-white dark:bg-gray-900 shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left - Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                className="h-12 w-auto"
                src="/logo.png"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Middle - Main Navigation */}
          <div className="hidden lg:flex lg:items-center lg:justify-center flex-1 px-8">
            <div className="flex space-x-4">
              <Link to="/" className="nav-link">
                {t('navigation.home')}
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServiceMenuOpen(true)}
                  onMouseLeave={() => setIsServiceMenuOpen(false)}
                  className="nav-link flex items-center"
                >
                  <span>{t('navigation.services')}</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                <AnimatePresence>
                  {isServiceMenuOpen && (
                    <motion.div
                      className="absolute left-0 mt-2 w-screen max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-700"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onMouseEnter={() => setIsServiceMenuOpen(true)}
                      onMouseLeave={() => setIsServiceMenuOpen(false)}
                    >
                      <div className="py-1 grid grid-cols-1 gap-2 p-4">
                        {serviceCategories.map((service) => (
                          <Link
                            key={service.title}
                            to={service.link}
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-150"
                            onClick={() => setIsServiceMenuOpen(false)}
                          >
                            <service.icon className="mr-3 h-5 w-5 text-gray-400 dark:text-gray-300 group-hover:text-[#C92536] dark:group-hover:text-[#E93546]" />
                            <div>
                              <p className="font-medium">{service.title}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/directory" className="nav-link">
                {t('navigation.exportersDirectory')}
              </Link>

              <Link to="/exhibitions" className="nav-link">
                {t('navigation.exhibitions')}
              </Link>

              {/* Media Center Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setIsMediaMenuOpen(true)}
                onMouseLeave={() => setIsMediaMenuOpen(false)}
              >
                <button
                  className="nav-link flex items-center"
                >
                  <span>{t('navigation.mediaCenter')}</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                <AnimatePresence>
                  {isMediaMenuOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-white dark:bg-gray-900 shadow-lg z-50"
                    >
                      <MediaMegaMenu
                        isOpen={isMediaMenuOpen}
                        onClose={() => setIsMediaMenuOpen(false)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/about-us" className="nav-link">
                {t('navigation.aboutUs')}
              </Link>

              <Link to="/contact-us" className="nav-link">
                {t('navigation.contactUs')}
              </Link>
            </div>
          </div>

          {/* Right Section - Language and Search */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-[#C92536] transition-colors"
              aria-label="Toggle search"
            >
              {isSearchOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Search className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-[#C92536] transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-[#C92536] transition-colors"
            >
              <Globe2 className="h-5 w-5" />
              <span className="ml-2 text-sm font-medium">العربية</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full pl-4 pr-12 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C92536] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-[#C92536]"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-100 dark:border-gray-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="mobile-nav-link">
                {t('navigation.home')}
              </Link>
              <Link to="/services" className="mobile-nav-link">
                {t('navigation.services')}
              </Link>
              <Link to="/directory" className="mobile-nav-link">
                {t('navigation.exportersDirectory')}
              </Link>
              <Link to="/exhibitions" className="mobile-nav-link">
                {t('navigation.exhibitions')}
              </Link>
              <Link to="/media" className="mobile-nav-link">
                {t('navigation.mediaCenter')}
              </Link>
              <Link to="/about-us" className="mobile-nav-link">
                {t('navigation.aboutUs')}
              </Link>
              <Link to="/contact-us" className="mobile-nav-link">
                {t('navigation.contactUs')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;