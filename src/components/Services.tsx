import React from 'react';
import { Globe, BadgeCheck, Users, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8 text-[#C92536]" />,
    title: 'Market Access',
    description: 'Connect with international buyers and explore new market opportunities worldwide.'
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-[#C92536]" />,
    title: 'Export Solutions',
    description: 'Comprehensive support for logistics, documentation, and compliance requirements.'
  },
  {
    icon: <Users className="w-8 h-8 text-[#C92536]" />,
    title: 'Business Development',
    description: 'Expert guidance to develop your export strategy and business capabilities.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#C92536]" />,
    title: 'Growth Support',
    description: 'Financial solutions and resources to fuel your international expansion.'
  }
];

export default function Services() {
  return (
    <div id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54585A]">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end support to make your export journey successful
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#54585A] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}