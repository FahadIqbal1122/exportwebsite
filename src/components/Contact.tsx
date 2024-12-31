import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#54585A] dark:text-white">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Ready to take your business global? Contact us today and let's discuss how we can help you expand your reach.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-[#C92536] dark:text-[#E93546]" />
                </div>
                <div>
                  <div className="font-medium text-[#54585A] dark:text-white">Phone</div>
                  <div className="text-gray-600 dark:text-gray-300">+973 1738 3999</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-[#C92536] dark:text-[#E93546]" />
                </div>
                <div>
                  <div className="font-medium text-[#54585A] dark:text-white">Email</div>
                  <div className="text-gray-600 dark:text-gray-300">info@export.bh</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-[#C92536] dark:text-[#E93546]" />
                </div>
                <div>
                  <div className="font-medium text-[#54585A] dark:text-white">Location</div>
                  <div className="text-gray-600 dark:text-gray-300">Manama, Kingdom of Bahrain</div>
                </div>
              </div>
            </div>
          </div>
          
          <form className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg dark:shadow-gray-800/30">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#54585A] dark:text-white">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-[#C92536] focus:ring focus:ring-[#C92536] focus:ring-opacity-50 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-[#E93546] dark:focus:ring-[#E93546]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#54585A] dark:text-white">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-[#C92536] focus:ring focus:ring-[#C92536] focus:ring-opacity-50 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-[#E93546] dark:focus:ring-[#E93546]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#54585A] dark:text-white">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-[#C92536] focus:ring focus:ring-[#C92536] focus:ring-opacity-50 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-[#E93546] dark:focus:ring-[#E93546]"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#C92536] text-white px-6 py-3 rounded-md hover:bg-[#a61e2c] dark:bg-[#E93546] dark:hover:bg-[#ff4d5e] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}