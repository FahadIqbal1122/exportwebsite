import { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for companies (replace with actual data later)
export const companies = [
  {
    id: 1,
    name: 'Alba',
    sector: 'Manufacturing',
    description: 'One of the world\'s largest aluminium smelters.',
    logo: 'https://tse3.mm.bing.net/th/id/OIP.wRdV4Mqyu8anFSA0R6fBdQEsEs?rs=1&pid=ImgDetMain',
    banner: 'https://www.bahrainthisweek.com/wp-content/uploads/2021/06/WPnewsize-4-1068x601.jpg',
    image: 'https://www.bahrainthisweek.com/wp-content/uploads/2021/06/WPnewsize-4-1068x601.jpg',
    website: 'https://www.albasmelter.com',
    instagram: 'https://www.instagram.com/albasmelter',
    bookletUrl: '/company-profiles/alba-profile.pdf',
    products: [
      {
        name: 'Aluminium Billets',
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/HR/GZ/ZP/16656670/aluminum-extrusion-billet-1000x1000.jpg',
        description: 'High-quality aluminium billets for various industrial applications'
      },
      {
        name: 'Aluminium Slabs',
        image: 'https://tse3.mm.bing.net/th/id/OIP.DHeZ_wXW5oCWArIM67U3YQAAAA?rs=1&pid=ImgDetMain',
        description: 'Premium aluminium slabs for manufacturing needs'
      }
    ]
  },
  {
    id: 2,
    name: 'GPIC',
    sector: 'Chemicals',
    description: 'Leading producer of fertilizers and petrochemical products.',
    logo: 'https://tse1.mm.bing.net/th/id/OIP.5maslKZ7zu-jctZ90AE7-wAAAA?rs=1&pid=ImgDetMain',
    banner: 'https://www.gpca.org.ae/wp-content/uploads/2020/07/GPIC.jpg',
    image: 'https://www.gpca.org.ae/wp-content/uploads/2020/07/GPIC.jpg',
    website: 'https://www.gpic.com',
    instagram: 'https://www.instagram.com/gpicbahrain',
    bookletUrl: '/company-profiles/gpic-profile.pdf',
    products: [
      {
        name: 'Ammonia',
        image: 'https://tse3.mm.bing.net/th/id/OIP.Q5pwes7WgqWz4ZwpoZSVYQAAAA?rs=1&pid=ImgDetMain',
        description: 'High-purity ammonia for industrial use'
      },
      {
        name: 'Urea',
        image: 'https://tse4.mm.bing.net/th/id/OIP.g6trhAIonEwzCmb77Zoh0QHaHa?rs=1&pid=ImgDetMain',
        description: 'Premium quality urea fertilizer'
      }
    ]
  },
  {
    id: 3,
    name: 'Banz Group',
    sector: 'Food & Beverage',
    description: 'Leading food manufacturing and distribution company.',
    logo: 'https://images.squarespace-cdn.com/content/v1/60a60b51f86d4d759fb477fb/6c1587b8-45bc-4342-8867-995b5c820849/BTC+web-11.png',
    banner: 'https://images.squarespace-cdn.com/content/v1/60a60b51f86d4d759fb477fb/6c1587b8-45bc-4342-8867-995b5c820849/BTC+web-11.png',
    image: 'https://images.squarespace-cdn.com/content/v1/60a60b51f86d4d759fb477fb/6c1587b8-45bc-4342-8867-995b5c820849/BTC+web-11.png',
    website: 'https://www.banzgroup.com',
    instagram: 'https://www.instagram.com/banzgroup',
    bookletUrl: '/company-profiles/banz-profile.pdf',
    products: [
      {
        name: 'Dairy Products',
        image: 'https://tse4.mm.bing.net/th/id/OIP.2tZQhScciCQtQrZgawkdGQHaFK?rs=1&pid=ImgDetMain',
        description: 'Fresh and processed dairy products'
      },
      {
        name: 'Beverages',
        image: 'https://tse1.mm.bing.net/th/id/OIP.4muOY9iB3zdrQUmElQs2pwHaE7?rs=1&pid=ImgDetMain',
        description: 'Wide range of refreshing beverages'
      }
    ]
  }
];

const ExportersDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');

  const sectors = ['All', 'Manufacturing', 'Food & Beverage', 'Chemicals', 'Technology', 'Textiles'];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = selectedSector === 'All' || company.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-800 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Exporter's Directory</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Find and connect with Bahrain's leading exporters across various sectors
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search companies..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C92536] focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C92536] focus:border-transparent"
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
            <Link
              to={`/directory/${company.id}`}
              key={company.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="relative h-48">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-12 w-12 object-contain mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{company.name}</h3>
                    <span className="inline-block bg-[#C92536] text-white text-sm px-3 py-1 rounded-full">
                      {company.sector}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">{company.description}</p>
                
                <div className="text-[#C92536] dark:text-[#E93546] hover:text-[#A91526] dark:hover:text-[#C92536] font-medium">
                  View Details →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300">No companies found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExportersDirectory;
