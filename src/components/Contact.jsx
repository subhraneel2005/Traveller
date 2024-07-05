import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-8">
      {/* Hero Section */}
      <div className="relative h-60 bg-cover bg-center mb-12" style={{ backgroundImage: "url('/hero2.jpeg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl md:text-4xl text-blue-900 font-semibold mb-6 text-center">Get in Touch</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-700 text-lg mb-2">Name</label>
            <input 
              type="text" 
              className="text-gray-800 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 text-lg mb-2">Email</label>
            <input 
              type="email" 
              className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label className="text-gray-700 text-lg mb-2">Message</label>
            <textarea 
              className="px-4 py-2 rounded-md text-gray-800 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="6"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex justify-center col-span-1 md:col-span-2">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700">
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Company Details Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl md:text-4xl text-blue-900 font-semibold mb-6 text-center">Company Details</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold text-gray-700">Address</h3>
            <p className="text-gray-600 mt-2">123 Main Street, City, Country</p>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
            <p className="text-gray-600 mt-2">+123 456 7890</p>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold text-gray-700">Email</h3>
            <p className="text-gray-600 mt-2">info@example.com</p>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-12">
        <div className="relative h-80">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509425!2d144.95373631531644!3d-37.816279742021735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727ef0efb3d8a3!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1622498458972!5m2!1sen!2sau" 
            width="100%" 
            height="100%" 
            allowFullScreen="" 
            loading="lazy"
            className="absolute inset-0 border-none"
          ></iframe>
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
              <li><a href="/contacts" className="hover:underline">Contact</a></li>
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

export default Contact;
