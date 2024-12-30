import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const ExportCredit = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <ShieldCheck className="w-16 h-16 text-[#C92536]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Export Credit Insurance
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Protect your business against non-payment risks and expand confidently into international markets
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Risk Protection',
                description: 'Safeguard against commercial and political risks in international trade'
              },
              {
                title: 'Enhanced Financing',
                description: 'Improve access to working capital and trade finance'
              },
              {
                title: 'Market Expansion',
                description: 'Confidently enter new markets with reduced risk exposure'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Apply',
                description: 'Submit your application for credit insurance coverage'
              },
              {
                step: '2',
                title: 'Assessment',
                description: 'We evaluate your business and trade risks'
              },
              {
                step: '3',
                title: 'Coverage',
                description: 'Receive your tailored insurance policy'
              },
              {
                step: '4',
                title: 'Trade Confidently',
                description: "Export with peace of mind knowing you're protected"
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
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Protect your exports and grow your international business with confidence
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

export default ExportCredit;
