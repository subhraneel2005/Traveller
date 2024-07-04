import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

function Destinations() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col justify-center items-center p-4">
      <h1 id="heroText" className="text-4xl md:text-6xl font-bold text-blue-900 mt-12 mb-8">Plan Your Perfect Trip</h1>
      <div className="py-8 px-10 bg-green-700 rounded-[14px] flex flex-col md:flex-row justify-evenly items-center w-full max-w-6xl gap-8 shadow-xl">
        <div className="flex flex-col items-center md:items-start gap-4">
          <label className="text-sky-100 mb-1 flex items-center text-lg">
            <FaCalendarAlt className="mr-2" /> Start Date
          </label>
          <input 
            type="date" 
            className="px-4 py-2 rounded-md bg-white text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <label className="text-sky-100 mb-1 text-lg">Number of Adults</label>
          <input 
            type="number" 
            min="1" 
            className="px-4 py-2 rounded-md bg-white text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <label className="text-sky-100 mb-1 flex items-center text-lg">
            <FaCalendarAlt className="mr-2" /> End Date
          </label>
          <input 
            type="date" 
            className="px-4 py-2 rounded-md bg-white text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-24 max-w-6xl py-5">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img src="/img1.jpeg" alt="Destination 1" className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-2xl font-semibold text-green-800">Tropical Paradise</h3>
            <p className="text-gray-600 mt-2">Escape to a tropical paradise with crystal clear waters and white sandy beaches. Perfect for relaxation and adventure. Enjoy scuba diving, snorkeling, and island hopping. Indulge in luxurious beachfront resorts and savor exotic local cuisine.</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Learn More</button>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img src="/img2.jpeg" alt="Destination 2" className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-2xl font-semibold text-green-800">Mountain Retreat</h3>
            <p className="text-gray-600 mt-2">Discover the tranquility of the mountains. Enjoy hiking, skiing, and breathtaking views. Perfect for adventure enthusiasts and nature lovers. Experience cozy cabins, mountain lodges, and gourmet dining. Witness stunning sunrises and sunsets over the peaks.</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Learn More</button>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img src="/img3.jpg" alt="Destination 3" className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-2xl font-semibold text-green-800">City Exploration</h3>
            <p className="text-gray-600 mt-2">Experience the excitement of the city with its vibrant culture, food, and nightlife. Perfect for urban adventurers. Visit iconic landmarks, museums, and galleries. Shop at trendy boutiques and enjoy diverse dining options. Stay in chic hotels and enjoy the bustling nightlife.</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Learn More</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Destinations;
