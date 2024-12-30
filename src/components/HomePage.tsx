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

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSlider />

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
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
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <service.icon className="w-12 h-12 text-[#C92536] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <motion.a
                  href={service.link}
                  className="inline-flex items-center text-[#C92536] hover:text-[#a61e2c] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </motion.a>
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
