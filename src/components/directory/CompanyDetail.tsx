import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Globe, Instagram, FileText, Send } from 'lucide-react';
import { companies } from './ExportersDirectory';

const CompanyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<null | {
    name: string;
    description: string;
  }>(null);

  const company = companies.find(c => c.id === Number(id));

  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Company not found</h1>
          <button
            onClick={() => navigate('/directory')}
            className="mt-4 text-[#C92536] hover:text-[#A61E2B] dark:text-[#E93546] dark:hover:text-[#FF4D5E]"
          >
            ← Back to Directory
          </button>
        </div>
      </div>
    );
  }

  const handleInquiry = (productName: string, productDescription: string) => {
    setSelectedProduct({ name: productName, description: productDescription });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Banner Image */}
      <div className="relative h-96 w-full">
        <img
          src={company.banner}
          alt={`${company.name} banner`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Company Logo and Basic Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="w-32 h-32 object-contain bg-white dark:bg-gray-700 rounded-lg shadow-md"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{company.name}</h1>
              <span className="inline-block bg-[#C92536] text-white text-sm px-3 py-1 rounded-full mb-4">
                {company.sector}
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">{company.description}</p>
              
              {/* Quick Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#C92536] hover:text-[#A61E2B] dark:text-[#E93546] dark:hover:text-[#FF4D5E]"
                >
                  <Globe className="h-5 w-5" />
                  <span>Website</span>
                </a>
                <a
                  href={company.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#C92536] hover:text-[#A61E2B] dark:text-[#E93546] dark:hover:text-[#FF4D5E]"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href={company.bookletUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#C92536] hover:text-[#A61E2B] dark:text-[#E93546] dark:hover:text-[#FF4D5E]"
                >
                  <FileText className="h-5 w-5" />
                  <span>Download Company Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.products.map((product, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                <button
                  onClick={() => handleInquiry(product.name, product.description)}
                  className="flex items-center gap-2 text-white bg-[#C92536] hover:bg-[#A61E2B] dark:bg-[#E93546] dark:hover:bg-[#FF4D5E] px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <Send className="h-4 w-4" />
                  Inquire Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Inquire about {selectedProduct.name}
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-[#C92536] dark:focus:ring-[#E93546] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-[#C92536] dark:focus:ring-[#E93546] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-[#C92536] dark:focus:ring-[#E93546] focus:border-transparent"
                  rows={4}
                  defaultValue={`I'm interested in ${selectedProduct.name}. ${selectedProduct.description}`}
                  required
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#C92536] hover:bg-[#A61E2B] dark:bg-[#E93546] dark:hover:bg-[#FF4D5E] text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  Send Inquiry
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDetail;
