import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            We're here to help you succeed in your export journey
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Information */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Visit Us',
                info: 'Bahrain Financial Harbor, East Tower, Level 14, King Faisal Highway, Manama'
              },
              {
                icon: Phone,
                title: 'Call Us',
                info: '+973 1738 3999'
              },
              {
                icon: Mail,
                title: 'Email Us',
                info: 'info@export.bh'
              },
              {
                icon: Clock,
                title: 'Working Hours',
                info: 'Sunday - Thursday\n7:30 AM - 3:30 PM'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="w-12 h-12 text-[#C92536] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{item.info}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C92536]"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C92536]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C92536]"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C92536]"
                  placeholder="Enter message subject"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message *</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C92536] h-32"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-[#C92536] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#a61e2c] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-bold mb-6">Our Location</h2>
            <div className="h-[500px] bg-gray-200 rounded-lg">
              {/* Replace with actual map component */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Map Component Here
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How can I start exporting my products?',
                answer: 'We provide comprehensive guidance on starting your export journey. Contact us to schedule a consultation with our export specialists.'
              },
              {
                question: 'What support services do you offer?',
                answer: 'We offer export facilitation, market research, logistics support, and various other services to help businesses export successfully.'
              },
              {
                question: 'Do you provide training programs?',
                answer: 'Yes, we offer regular training programs on various aspects of exporting, including documentation, compliance, and market entry strategies.'
              },
              {
                question: 'How can I join your network?',
                answer: "You can join our network by registering through our website or contacting our office directly. We'll guide you through the process."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-gray-50 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest export news and opportunities
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C92536]"
                placeholder="Enter your email address"
              />
              <motion.button
                className="bg-[#C92536] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#a61e2c] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
