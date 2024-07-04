import React from 'react';
import Head from 'next/head';
import { FaSearch, FaStar, FaPercent } from 'react-icons/fa';
import Navbar from './Navbar';

export default function HomePage() {
  return (
    <div>
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/bgImg2.jpg')" }}>
        <div className="absolute inset-0 bg-blue-900 w-full min-h-screen bg-opacity-50 flex flex-col justify-center items-center">
            <Navbar/>
          <h1 className="text-4xl font-bold text-white">Explore the World with Us</h1>
          <p className="text-lg font-semibold text-gray-300 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit jhfkjdw kw</p>
          <div className="flex items-center bg-white rounded-md shadow-md overflow-hidden max-w-md w-full">
            <input
              type="text"
              placeholder="Search tours and destinations"
              className="px-4 py-2 text-sky-700 flex-grow outline-none"
            />
            <button className="px-4 py-2 text-blue-600">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
