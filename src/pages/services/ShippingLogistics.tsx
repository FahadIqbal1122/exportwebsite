import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Truck, Plane } from 'lucide-react';

const ShippingLogistics = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8 space-x-4">
            <Ship className="w-16 h-16 text-[#C92536]" />
            <Truck className="w-12 h-12 text-[#C92536]" />
            <Plane className="w-16 h-16 text-[#C92536]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Shipping & Logistics Solutions
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Comprehensive shipping and logistics solutions for seamless international trade
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sea Freight',
                description: 'Full container and consolidated shipping solutions',
                icon: Ship
              },
              {
                title: 'Air Freight',
                description: 'Express and standard air cargo services',
                icon: Plane
              },
              {
                title: 'Land Transport',
                description: 'Regional road freight and distribution',
                icon: Truck
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
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Real-time Tracking',
                description: 'Monitor your shipments 24/7'
              },
              {
                title: 'Customs Clearance',
                description: 'Hassle-free documentation and clearance'
              },
              {
                title: 'Insurance Coverage',
                description: 'Comprehensive cargo insurance options'
              },
              {
                title: 'Door-to-Door Service',
                description: 'Complete logistics solutions'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-gray-50 p-6 rounded-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rates Calculator */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Shipping Rates Calculator</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Origin</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C92536]"
                  placeholder="Enter origin city"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Destination</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C92536]"
                  placeholder="Enter destination city"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Weight (kg)</label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C92536]"
                  placeholder="Enter weight"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Service Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C92536]">
                  <option>Sea Freight</option>
                  <option>Air Freight</option>
                  <option>Land Transport</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <motion.button
                  className="w-full bg-[#C92536] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#a61e2c] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Calculate Rate
                </motion.button>
              </div>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Shipping Quote?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with our logistics experts for a customized solution
          </p>
          <motion.button
            className="bg-[#C92536] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#a61e2c] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Quote
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ShippingLogistics;
