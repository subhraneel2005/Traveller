import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-900 text-gray-200 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10">
        {/* Left section */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="flex flex-col md:flex-row gap-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Destinations</a></li>
            <li><a href="/aboutus" className="hover:underline">About Us</a></li>
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
  );
}

export default Footer;