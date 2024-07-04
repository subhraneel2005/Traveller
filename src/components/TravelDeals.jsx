import React from 'react';

function TravelDeals() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col justify-center items-center p-4">
      <h1 id="heroText" className="text-3xl md:text-5xl mt-12 font-bold text-blue-900 mb-8">Highlighted Travel Deals</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img src="/i1.jpg" alt="Travel Deal 1" className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-2xl font-semibold text-blue-900">Explore the Beaches of Bali</h3>
            <p className="text-gray-600 mt-2">Experience the serene beauty of Bali's beaches with our exclusive package. Enjoy sunbathing, water sports, and luxurious stays.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book Now</button>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img src="/i2.jpg" alt="Travel Deal 2" className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-2xl font-semibold text-blue-900">Discover the Alps</h3>
            <p className="text-gray-600 mt-2">Join our guided tours through the breathtaking Alps. Perfect for adventure enthusiasts and nature lovers.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book Now</button>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img src="/i3.jpg" alt="Travel Deal 3" className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-2xl font-semibold text-blue-900">Safari in Kenya</h3>
            <p className="text-gray-600 mt-2">Embark on an unforgettable safari adventure in Kenya. Witness the majestic wildlife and stunning landscapes.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelDeals;
