import React, { useState } from 'react';
import { Search } from 'lucide-react';

// Mock data for companies (replace with actual data later)
const mockCompanies = [
  { id: 1, name: 'Company A', sector: 'Manufacturing', description: 'Manufacturing company specializing in aluminum products' },
  { id: 2, name: 'Company B', sector: 'Food & Beverage', description: 'Food processing and export company' },
  { id: 3, name: 'Company C', sector: 'Technology', description: 'Software development and IT services' },
  // Add more mock companies as needed
];

const sectors = ['All', 'Manufacturing', 'Food & Beverage', 'Technology', 'Textiles', 'Chemicals'];

const ExportersDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');

  const filteredCompanies = mockCompanies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = selectedSector === 'All' || company.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Exporter's Directory</h1>
          <p className="text-xl text-gray-600 mb-12">
            Find and connect with Bahrain's leading exporters across various sectors
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search companies..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C92536] focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C92536] focus:border-transparent"
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
          >
            {sectors.map(sector => (
              <option key={sector} value={sector}>{sector}</option>
            ))}
          </select>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map(company => (
            <div
              key={company.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{company.name}</h3>
              <span className="inline-block bg-[#C92536] text-white text-sm px-3 py-1 rounded-full mb-3">
                {company.sector}
              </span>
              <p className="text-gray-600">{company.description}</p>
              <button className="mt-4 text-[#C92536] hover:text-[#A61E2B] font-medium">
                View Details →
              </button>
            </div>
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No companies found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExportersDirectory;
