import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#54585A] to-[#3a3d3f] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <img src="/logo.png" alt="Export Bahrain Logo" className="h-16 w-auto mb-6" />
            <p className="text-gray-300 mb-6">
              Empowering Bahraini businesses to reach global markets and achieve international success.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="bg-white/10 p-2 rounded-full hover:bg-[#C92536] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-white/10 p-2 rounded-full hover:bg-[#C92536] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-white/10 p-2 rounded-full hover:bg-[#C92536] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-white/10 p-2 rounded-full hover:bg-[#C92536] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-xl mb-6 text-[#C92536]">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Contact'].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-xl mb-6 text-[#C92536]">Services</h3>
            <ul className="space-y-3">
              {[
                'Market Access',
                'Export Solutions',
                'Business Development',
                'Growth Support'
              ].map((service) => (
                <motion.li key={service} whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-xl mb-6 text-[#C92536]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#C92536]" />
                <span className="text-gray-300">Manama, Kingdom of Bahrain</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C92536]" />
                <span className="text-gray-300">+973 1738 3999</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#C92536]" />
                <span className="text-gray-300">info@export.bh</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Bottom Bar */}
        <motion.div 
          className="mt-16 pt-8 border-t border-white/10 text-center text-gray-300"
          variants={itemVariants}
        >
          <p>&copy; {new Date().getFullYear()} Export Bahrain. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}