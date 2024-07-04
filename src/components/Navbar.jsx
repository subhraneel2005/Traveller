import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="flex justify-between py-6 px-10 bg-transparent w-full z-10 top-0">
        <h1 className="text-3xl font-bold text-gray-100 cursor-pointer">
            <Link href="/">Travello</Link>
        </h1>
        <div className="flex gap-4">
            <Link href="/" className="text-sky-300 font-bold text-lg hover:text-sky-500 duration-300">Home</Link>
            <Link href="/" className="text-sky-300 font-bold text-lg hover:text-sky-500 duration-300">About Us</Link>
            <Link href="/" className="text-sky-300 font-bold text-lg hover:text-sky-500 duration-300">Destinations</Link>
            <Link href="/" className="text-sky-300 font-bold text-lg hover:text-sky-500 duration-300">Bookings</Link>
        </div>
    </div>
  )
}

export default Navbar