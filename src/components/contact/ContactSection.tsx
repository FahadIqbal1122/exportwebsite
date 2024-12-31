import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">We're here to help you succeed in your export journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C92536]/10 dark:bg-[#E93546]/10 mb-4">
              <Phone className="w-6 h-6 text-[#C92536] dark:text-[#E93546]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Call Us</h3>
            <p className="text-gray-600 dark:text-gray-300">+973 1738 3999</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C92536]/10 dark:bg-[#E93546]/10 mb-4">
              <Mail className="w-6 h-6 text-[#C92536] dark:text-[#E93546]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
            <p className="text-gray-600 dark:text-gray-300">info@export.bh</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C92536]/10 dark:bg-[#E93546]/10 mb-4">
              <MapPin className="w-6 h-6 text-[#C92536] dark:text-[#E93546]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Visit Us</h3>
            <p className="text-gray-600 dark:text-gray-300">Manama, Kingdom of Bahrain</p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Start Your Export Journey?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get in touch with our expert team for personalized guidance and support for your export business.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#C92536] hover:bg-[#a61e2c] dark:bg-[#E93546] dark:hover:bg-[#ff4d63] transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/contact-illustration.svg"
                alt="Contact illustration"
                className="w-full max-w-md mx-auto filter dark:brightness-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
