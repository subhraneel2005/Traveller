"use client"

import { useEffect } from 'react';

export default function PaymentSuccess({ searchParams: { amount, name, image } }) {

    return (
        <div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center text-black">
            <h1 className="text-4xl font-bold mb-4">Payment Successful</h1>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                <img src={image} alt={name} className="w-full h-64 object-cover" />
            </div>
            <h1 className="text-3xl mb-8">{name}</h1>
            
            <p className="text-lg">Amount Paid ₹{amount}</p>
        </div>
    );
}
