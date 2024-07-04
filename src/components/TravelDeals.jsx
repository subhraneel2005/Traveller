import React from 'react';

function TravelDeals() {
  return (
    <div className="min-h-screen w-full bg-sky-200 flex flex-col justify-center items-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/284x160" alt="Travel Deal 1" className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold">Travel Deal 1</h3>
            <p className="text-gray-600 mt-2">Dimensions: 284x160 pixels</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/284x160" alt="Travel Deal 2" className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold">Travel Deal 2</h3>
            <p className="text-gray-600 mt-2">Dimensions: 284x160 pixels</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/284x160" alt="Travel Deal 3" className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold">Travel Deal 3</h3>
            <p className="text-gray-600 mt-2">Dimensions: 284x160 pixels</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelDeals;
