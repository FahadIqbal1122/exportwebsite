import { motion } from 'framer-motion';
import { Target, Globe, Award, TrendingUp, Shield } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Export Bahrain
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Empowering Bahraini businesses to expand globally through innovative export solutions
            </p>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
            >
              <Globe className="w-12 h-12 text-[#C92536] mb-4 mx-auto" />
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Support Exporters in Bahrain to identify and capture global market opportunities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
            >
              <Target className="w-12 h-12 text-[#C92536] mb-4 mx-auto" />
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300">
                To facilitate and promote exports from Bahrain by providing comprehensive support services, 
                market intelligence, and strategic guidance to Bahraini businesses.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
            >
              <Award className="w-12 h-12 text-[#C92536] mb-4 mx-auto" />
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Values</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Excellence, Innovation, Integrity
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Our Core Values</h2>
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center"
              >
                <value.icon className="w-12 h-12 text-[#C92536] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Businesses Supported' },
              { number: '50+', label: 'Countries Reached' },
              { number: '$100M+', label: 'Export Value Generated' },
              { number: '1000+', label: 'Jobs Created' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#C92536] dark:text-[#E93546] mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Leadership Team
          </h2>
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-[#C92536] dark:text-[#E93546] mb-2">{member.position}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-100 dark:bg-gray-700 h-24 rounded-lg flex items-center justify-center"
              >
                <div className="text-gray-400 dark:text-gray-500">Partner Logo</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Join Our Mission</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Let's work together to take your business to global markets
        </p>
        <motion.button
          className="bg-[#C92536] dark:bg-[#E93546] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#a61e2c] dark:hover:bg-[#c51a3a] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </section>
    </div>
  );
};

export default AboutUs;
