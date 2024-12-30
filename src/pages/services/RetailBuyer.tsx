import React from 'react';
import { motion } from 'framer-motion';
import { Store, Users, Globe2, TrendingUp } from 'lucide-react';

const RetailBuyer = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Store className="w-16 h-16 text-[#C92536]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Retail Buyer Initiative
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Connect with global retail buyers and expand your market reach
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Direct Access',
                description: 'Connect directly with international retail buyers',
                icon: Users
              },
              {
                title: 'Market Insights',
                description: 'Gain valuable retail market intelligence',
                icon: Globe2
              },
              {
                title: 'Growth Opportunities',
                description: 'Expand your retail presence globally',
                icon: TrendingUp
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <benefit.icon className="w-12 h-12 text-[#C92536] mb-4" />
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Program Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Program Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Buyer Matchmaking',
                description: 'Personalized introductions to relevant retail buyers'
              },
              {
                title: 'Market Research',
                description: 'Detailed insights into retail market trends and opportunities'
              },
              {
                title: 'Product Showcasing',
                description: 'Digital and physical product showcase opportunities'
              },
              {
                title: 'Networking Events',
                description: 'Access to exclusive retail industry networking events'
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

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: 'Local Artisans Co.',
                achievement: 'Secured contracts with 3 major European retailers',
                description: 'Expanded their handcrafted products to international markets'
              },
              {
                company: 'Organic Foods Ltd.',
                achievement: 'Entered 5 new markets in 6 months',
                description: 'Successfully launched product line in premium retail chains'
              }
            ].map((story, index) => (
              <motion.div
                key={story.company}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{story.company}</h3>
                <p className="text-[#C92536] font-medium mb-2">{story.achievement}</p>
                <p className="text-gray-600">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How to Join</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Apply',
                description: 'Submit your application'
              },
              {
                step: '2',
                title: 'Assessment',
                description: 'Product and business evaluation'
              },
              {
                step: '3',
                title: 'Matching',
                description: 'Buyer matching and introductions'
              },
              {
                step: '4',
                title: 'Support',
                description: 'Ongoing support and guidance'
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

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Initiative</h2>
          <p className="text-xl text-gray-600 mb-8">
            Take your products to global retail markets
          </p>
          <motion.button
            className="bg-[#C92536] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#a61e2c] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default RetailBuyer;
