import React from 'react';
import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';

const ExportFacilitation = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Handshake className="w-16 h-16 text-[#C92536]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Export Facilitation
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            End-to-end support for successful export deals and market entry
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
                title: 'Market Entry Strategy',
                description: 'Customized strategies for entering new markets successfully'
              },
              {
                title: 'Documentation Support',
                description: 'Assistance with export documentation and compliance'
              },
              {
                title: 'Business Matchmaking',
                description: 'Connect with reliable partners and buyers in target markets'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Consultation',
                description: 'Initial meeting to understand your export goals'
              },
              {
                step: '2',
                title: 'Strategy Development',
                description: 'Create a customized export plan'
              },
              {
                step: '3',
                title: 'Implementation',
                description: 'Execute the plan with our support'
              },
              {
                step: '4',
                title: 'Monitoring',
                description: 'Track progress and adjust strategy as needed'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-[#C92536] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: 'Tech Solutions Ltd.',
                market: 'Southeast Asia',
                achievement: '200% export growth in first year'
              },
              {
                company: 'Food Industries Co.',
                market: 'GCC Countries',
                achievement: 'Successfully entered 3 new markets'
              }
            ].map((story, index) => (
              <motion.div
                key={story.company}
                className="bg-gray-50 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{story.company}</h3>
                <p className="text-gray-600 mb-2">Market: {story.market}</p>
                <p className="text-[#C92536] font-medium">{story.achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Export?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us help you navigate the international market
          </p>
          <motion.button
            className="bg-[#C92536] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#a61e2c] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ExportFacilitation;
