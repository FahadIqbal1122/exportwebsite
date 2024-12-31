import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

// Mock data for exhibitions (replace with actual API data later)
export const exhibitions = [
  {
    id: 1,
    title: 'Autumn Fair Bahrain',
    date: '2024-02-15',
    endDate: '2024-02-17',
    location: 'Exhibition World Bahrain',
    image: 'https://tse2.mm.bing.net/th/id/OIP.SWUR3mOxR9VR71pf4R1MRwHaEK?rs=1&pid=ImgDetMain',
    description: 'The largest manufacturing and industry exhibition in Bahrain showcasing the latest technologies and innovations.',
    status: 'upcoming',
    registrationDeadline: '2024-02-10',
    category: 'Expo'
  },
  {
    id: 2,
    title: 'Retro Bahrain',
    date: '2024-03-20',
    endDate: '2024-03-22',
    location: 'Manama Souq',
    image: 'https://th.bing.com/th/id/R.35ddcd99b88be741536581c2e51ae64e?rik=t1jMphBVQ4WBuw&riu=http%3a%2f%2fwww.guideoftheworld.com%2fwp-content%2fuploads%2fphotos%2fbab_al_bahrain_square_manama.jpg&ehk=8rFWrbSxkjrG6ujPeUsKcNQWB8nBUFrbrQZF8kRTlQM%3d&risl=&pid=ImgRaw&r=0',
    description: 'Bringing back 80s vibes.',
    status: 'upcoming',
    registrationDeadline: '2024-03-15',
    category: 'Public Event'
  },
  // Add more exhibitions as needed
];

const ExhibitionList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', 'Manufacturing', 'Food & Beverage', 'Technology', 'Healthcare'];

  const filteredExhibitions = exhibitions.filter(exhibition => 
    selectedCategory === 'all' || exhibition.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Exhibitions</h1>
          <p className="text-xl text-gray-600">
            Discover and register for upcoming trade exhibitions and events
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex justify-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C92536] focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Exhibition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExhibitions.map((exhibition) => (
            <div key={exhibition.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={exhibition.image}
                  alt={exhibition.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#C92536] text-white px-3 py-1 rounded-full text-sm">
                  {exhibition.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {exhibition.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{new Date(exhibition.date).toLocaleDateString()} - {new Date(exhibition.endDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{exhibition.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Registration Deadline: {new Date(exhibition.registrationDeadline).toLocaleDateString()}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 line-clamp-2">
                  {exhibition.description}
                </p>

                <Link
                  to={`/exhibitions/${exhibition.id}`}
                  className="inline-block w-full text-center bg-[#C92536] text-white px-6 py-3 rounded-lg hover:bg-[#A61E2B] transition-colors duration-300"
                >
                  View Details & Register
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredExhibitions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No exhibitions found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExhibitionList;
