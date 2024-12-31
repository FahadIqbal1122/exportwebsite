import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Globe, Award, TrendingUp, Shield } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About Export Bahrain
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Empowering Bahraini businesses to succeed in global markets
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Target className="w-12 h-12 text-[#C92536] mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To facilitate and promote exports from Bahrain by providing comprehensive support services, 
                market intelligence, and strategic guidance to Bahraini businesses.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Globe className="w-12 h-12 text-[#C92536] mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
              Support Exporters in Bahrain to identify and capture global market opportunities.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'Striving for the highest standards in all our services',
                icon: Award
              },
              {
                title: 'Innovation',
                description: 'Embracing new ideas and solutions for export growth',
                icon: TrendingUp
              },
              {
                title: 'Integrity',
                description: 'Operating with transparency and ethical standards',
                icon: Shield
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-gray-50 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <value.icon className="w-12 h-12 text-[#C92536] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Businesses Supported' },
              { number: '50+', label: 'Countries Reached' },
              { number: '$100M+', label: 'Export Value Generated' },
              { number: '1000+', label: 'Jobs Created' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-[#C92536] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Safa Sharif A Khaliq',
                position: 'Chief Executive Officer',
                bio: 'Over 20 years of experience in international trade and economic development'
              },
              {
                name: 'Fatima Rostam',
                position: 'Executive Director',
                bio: 'Expert in export facilitation and trade logistics'
              },
              {
                name: 'Marwa Mohammed',
                position: 'Human Resource & Finance Control Manager',
                bio: 'Specialist in international market expansion and trade relations'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-[#C92536] mb-2">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 h-24 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-gray-400">Partner Logo</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's work together to take your business to global markets
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

export default AboutUs;
