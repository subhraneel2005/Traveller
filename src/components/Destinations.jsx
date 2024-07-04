import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

function Destinations() {
  return (
    <div className="min-h-screen w-full bg-sky-200 flex flex-col justify-center items-center p-4">
      <div className="py-8 px-10 bg-green-600 rounded-[14px] flex flex-col md:flex-row justify-evenly items-center w-full max-w-4xl gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <label className="text-white mb-1 flex items-center text-lg">
            <FaCalendarAlt className="mr-2" /> Start Date
          </label>
          <input 
            type="date" 
            className="px-4 py-2 rounded-md bg-white text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <label className="text-white mb-1 text-lg">Number of Adults</label>
          <input 
            type="number" 
            min="1" 
            className="px-4 py-2 rounded-md bg-white text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <label className="text-white mb-1 flex items-center text-lg">
            <FaCalendarAlt className="mr-2" /> End Date
          </label>
          <input 
            type="date" 
            className="px-4 py-2 rounded-md bg-white text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/img3.jpg" alt="Destination 1" className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold">Destination 1</h3>
            <p className="text-gray-600 mt-2">Explore the beauty of this amazing destination.</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/img2.jpeg" alt="Destination 2" className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold">Destination 2</h3>
            <p className="text-gray-600 mt-2">Discover the wonders of this unique place.</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/img1.jpeg" alt="Destination 3" className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold">Destination 3</h3>
            <p className="text-gray-600 mt-2">Experience the adventure in this beautiful spot.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
