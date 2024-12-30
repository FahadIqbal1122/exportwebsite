import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe2, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { serviceCategories } from './services/serviceData';
import MediaMegaMenu from './media/MediaMegaMenu';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isMediaMenuOpen, setIsMediaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
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
                      className="absolute left-0 mt-2 w-screen max-w-md bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
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
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                            onClick={() => setIsServiceMenuOpen(false)}
                          >
                            <service.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-[#C92536]" />
                            <div>
                              <p className="font-medium">{service.title}</p>
                              <p className="text-sm text-gray-500">{service.description}</p>
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
                className="relative group"
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
                    <MediaMegaMenu
                      isOpen={isMediaMenuOpen}
                      onClose={() => setIsMediaMenuOpen(false)}
                    />
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

          {/* Right - Search & Language */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <button
              className="nav-icon-button"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
              className="nav-icon-button flex items-center space-x-2"
            >
              <Globe2 className="h-5 w-5" />
              <span>{t('navigation.language')}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
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

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.home')}
              </Link>

              <Link
                to="/services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.services')}
              </Link>

              <Link
                to="/directory"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.exportersDirectory')}
              </Link>

              <Link
                to="/exhibitions"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.exhibitions')}
              </Link>

              <Link
                to="/media-center"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.mediaCenter')}
              </Link>

              <Link
                to="/about-us"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.aboutUs')}
              </Link>

              <Link
                to="/contact-us"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.contactUs')}
              </Link>

              <button
                onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <Globe2 className="mr-3 h-5 w-5" />
                  <span>{t('navigation.language')}</span>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;