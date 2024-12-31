import React from 'react';
import { motion } from 'framer-motion';
import HeroSlider from './hero/HeroSlider';
import SuccessSlider from './success/SuccessSlider';
import { 
  Shield, 
  Handshake, 
  Ship, 
  ShoppingCart, 
  GraduationCap, 
  Store, 
  DollarSign, 
  Users, 
  Globe,
  Wrench,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSlider />

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Export Credit Insurance',
                description: 'Protect your business against non-payment risks in international trade',
                icon: Shield,
                link: '/services/export-credit'
              },
              {
                title: 'Export Facilitation',
                description: 'End-to-end support for successful export deals',
                icon: Handshake,
                link: '/services/export-facilitation'
              },
              {
                title: 'Shipping & Logistics',
                description: 'Comprehensive shipping and logistics solutions',
                icon: Ship,
                link: '/services/shipping-logistics'
              },
              {
                title: 'Retail Buyer Initiative',
                description: 'Connect with international retail buyers',
                icon: Store,
                link: '/services/retail-buyer'
              },
              {
                title: 'E-commerce Facilitation',
                description: 'Digital marketplace solutions for exporters',
                icon: ShoppingCart,
                link: '/services/e-commerce-facilitation'
              },
              {
                title: 'Internationalization & Export Advisory Support',
                description: 'Expert guidance for internationalization and export strategies',
                icon: Users,
                link: '/services/export-advisory'
              },
              {
                title: 'Export Market Intelligence',
                description: 'Market analysis and research for exporters',
                icon: Globe,
                link: '/services/market-intelligence'
              },
              {
                title: 'Export E-learning & Workshops',
                description: 'Professional training programs for exporters',
                icon: GraduationCap,
                link: '/services/export-training'
              },
              {
                title: 'Export Readiness Tools',
                description: 'Global marketing and promotion services',
                icon: Wrench,
                link: '/services/international-marketing'
              },
              {
                title: 'Export Financing',
                description: 'Financial solutions for export operations',
                icon: DollarSign,
                link: '/services/export-financing'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-[#C92536]" />
                  <h3 className="text-xl font-semibold ml-3 text-gray-900 dark:text-white">{service.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-[#C92536] hover:text-[#A91526] dark:hover:text-[#E93546]"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <SuccessSlider />
    </div>
  );
}
