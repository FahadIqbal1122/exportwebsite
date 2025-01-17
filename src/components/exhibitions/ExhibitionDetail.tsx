import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { exhibitions } from './ExhibitionList';

const ExhibitionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    numberOfAttendees: '1',
    specialRequirements: ''
  });

  const exhibition = exhibitions.find(e => e.id === Number(id));

  if (!exhibition) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Exhibition not found</h1>
          <button
            onClick={() => navigate('/exhibitions')}
            className="mt-4 text-[#C92536] hover:text-[#A61E2B] dark:text-[#E93546] dark:hover:text-[#ff4d5e]"
          >
            ← Back to Exhibitions
          </button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Registration submitted:', formData);
    // You would typically send this to your backend
    alert('Registration submitted successfully!');
    setIsRegistering(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/exhibitions')}
          className="mb-8 text-[#C92536] hover:text-[#A61E2B] dark:text-[#E93546] dark:hover:text-[#ff4d5e] flex items-center"
        >
          ← Back to Exhibitions
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-800/30 overflow-hidden">
          <div className="relative h-96">
            <img
              src={exhibition.image}
              alt={exhibition.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-[#C92536] dark:bg-[#E93546] text-white px-4 py-2 rounded-full">
              {exhibition.category}
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{exhibition.title}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold dark:text-white">Date</p>
                    <p>{new Date(exhibition.date).toLocaleDateString()} - {new Date(exhibition.endDate).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold dark:text-white">Location</p>
                    <p>{exhibition.location}</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Clock className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold dark:text-white">Registration Deadline</p>
                    <p>{new Date(exhibition.registrationDeadline).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Quick Information</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• Exhibition Duration: 3 Days</li>
                  <li>• Expected Visitors: 5000+</li>
                  <li>• Exhibition Space: 10,000 sqm</li>
                  <li>• Participating Countries: 25+</li>
                </ul>
              </div>
            </div>

            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">About the Exhibition</h2>
              <p className="text-gray-600 dark:text-gray-300">{exhibition.description}</p>
            </div>

            {!isRegistering ? (
              <button
                onClick={() => setIsRegistering(true)}
                className="w-full md:w-auto bg-[#C92536] dark:bg-[#E93546] text-white px-8 py-3 rounded-lg hover:bg-[#A61E2B] dark:hover:bg-[#ff4d5e] transition-colors duration-300"
              >
                Register for this Exhibition
              </button>
            ) : (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-6 dark:text-white">Registration Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C92536] dark:focus:ring-[#E93546] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C92536] dark:focus:ring-[#E93546] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C92536] dark:focus:ring-[#E93546] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C92536] dark:focus:ring-[#E93546] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Number of Attendees
                      </label>
                      <input
                        type="number"
                        name="numberOfAttendees"
                        min="1"
                        required
                        value={formData.numberOfAttendees}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C92536] dark:focus:ring-[#E93546] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Special Requirements
                    </label>
                    <textarea
                      name="specialRequirements"
                      rows={4}
                      value={formData.specialRequirements}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C92536] dark:focus:ring-[#E93546] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="bg-[#C92536] dark:bg-[#E93546] text-white px-8 py-3 rounded-lg hover:bg-[#A61E2B] dark:hover:bg-[#ff4d5e] transition-colors duration-300"
                    >
                      Submit Registration
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsRegistering(false)}
                      className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionDetail;
