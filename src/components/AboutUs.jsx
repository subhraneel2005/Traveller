import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-8">
      {/* Hero Section */}
      <div className="relative h-80 bg-cover bg-center mb-12" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">About Us</h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl text-blue-900 font-semibold mb-6">Who We Are</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to our travel website! We are dedicated to helping you explore the world and create unforgettable experiences. Our team is passionate about travel and committed to providing you with the best travel deals and information.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 mb-12 mt-10">
        <div className="flex-1">
          <img src="/mission.jpg" alt="Our Mission" className="w-full h-64 object-cover rounded-lg shadow-lg"/>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl text-blue-900 font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to make travel accessible and enjoyable for everyone. We strive to offer the best travel packages, guides, and tips to help you make the most of your adventures. Whether you're planning a family vacation, a solo trip, or a romantic getaway, we're here to assist you every step of the way.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mb-12 mt-10">
        <h2 className="text-3xl md:text-4xl text-blue-900 font-semibold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/team1.jpg" alt="Team Member 1" className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600 mt-2">CEO & Founder</p>
              <p className="text-gray-700 mt-2">John is the visionary behind our travel company, with over 20 years of experience in the industry.</p>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/team2.jpg" alt="Team Member 2" className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600 mt-2">Head of Marketing</p>
              <p className="text-gray-700 mt-2">Jane leads our marketing team with a passion for travel and a knack for creative strategies.</p>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/team3.jpg" alt="Team Member 3" className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Alice Johnson</h3>
              <p className="text-gray-600 mt-2">Travel Consultant</p>
              <p className="text-gray-700 mt-2">Alice helps our clients plan the perfect trip with her extensive knowledge of travel destinations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 mb-12 mt-10">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl text-blue-900 font-semibold mb-6">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our vision is to be the leading travel company, recognized for our commitment to customer satisfaction and innovation. We aim to inspire people to explore new destinations and embrace different cultures, fostering a global community of travelers.
          </p>
        </div>
        <div className="flex-1">
          <img src="/vision.jpg" alt="Our Vision" className="w-full h-64 object-cover rounded-lg shadow-lg"/>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10">
          {/* Left section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="flex flex-col md:flex-row gap-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Destinations</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
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

export default AboutUs;
