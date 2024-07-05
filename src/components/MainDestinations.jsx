import React from 'react';

const MainDestinations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-8">
      {/* Hero Section */}
      <div className="relative h-80 bg-cover bg-center mb-12" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">Explore Our Destinations</h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl text-blue-900 font-semibold mb-6">Discover Your Next Adventure</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          From pristine beaches to bustling cities, we offer a wide range of destinations for every type of traveler. Explore our featured locations and start planning your dream trip today.
        </p>
      </div>

      {/* Destinations Highlights Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Destination 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/destination1.jpg" alt="Destination 1" className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold">Tropical Paradise</h3>
            <p className="text-gray-600 mt-2">Enjoy the sun, sand, and sea at our top beach destinations.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</button>
          </div>
        </div>
        {/* Destination 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/detination2.jpg" alt="Destination 2" className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold">Cultural Escape</h3>
            <p className="text-gray-600 mt-2">Immerse yourself in the rich history and culture of our destinations.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</button>
          </div>
        </div>
        {/* Destination 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/destination3.jpeg" alt="Destination 3" className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold">Urban Adventure</h3>
            <p className="text-gray-600 mt-2">Explore the vibrant nightlife and attractions of our city destinations.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</button>
          </div>
        </div>
      </div>

      {/* Placeholder for Booking Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl text-blue-900 font-semibold mb-6 text-center">Book Your Trip</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
          Ready to book your dream vacation? Our easy-to-use booking system allows you to plan your trip effortlessly.
        </p>
        <div className="flex justify-center">
          <button className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-700">
            Book Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10">
          {/* Left section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="flex flex-col md:flex-row gap-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/destinations" className="hover:underline">Destinations</a></li>
              <li><a href="/aboutus" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Right section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainDestinations;
