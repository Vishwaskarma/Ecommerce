// src/app/Banner/Banner.jsx
import React from 'react';
import { useRouter } from 'next/navigation';

const PromotionalBanner = () => {
  const router = useRouter();

  const handleBannerClick = () => {
    // Redirect to a special offers page or specific product
    router.push('/special-offers');
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl overflow-hidden mb-12">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0V0zm10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\' fill=\'%23ffffff\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Summer Sale <span className="text-yellow-300">50% OFF</span>
            </h2>
            <p className="text-lg text-white mb-6 opacity-90">
              Limited time offer on our best-selling products. Don't miss out!
            </p>
            <button
              onClick={handleBannerClick}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Shop Now
            </button>
          </div>

          {/* Image */}
          <div className="md:w-2/5">
            <div className="relative">
              <img
                src="https://placehold.co/500x300"
                alt="Summer sale promotion showing happy shoppers with packages"
                className="rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-xl shadow-lg">
                50% OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
