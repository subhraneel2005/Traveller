import React from 'react';
import Head from 'next/head';
import { FiSearch } from 'react-icons/fi';
import Navbar from './Navbar';

export default function HomePage() {
  return (
    <div className="min-h-screen w-full relative select-none bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/bgImg3.jpg')" }}>
      <Navbar />
      <div className="absolute top-[80px] inset-0 flex items-center justify-center z-0">
        <div className="h-full w-full flex flex-col justify-center items-center text-center px-4">
          <h2 id="heroText" className="font-extrabold text-5xl mb-3 text-sky-400">Explore the World with <span className="text-green-600 text-7xl">Travello</span></h2>
          <p className="mb-7 text-xl text-gray-400">Your ultimate travel companion for unforgettable adventures and seamless journeys.</p>

          <div id="searchbox" className="py-4 md:px-12 px-4 bg-sky-200 rounded-[24px] flex justify-between">
            <input className="outline-none border-none bg-transparent text-green-800" placeholder="Search your destination here"/>
            <FiSearch size={30} className="text-sky-400 cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
}
