'use client';

import React, { useState } from 'react';
import { Dancing_Script, Work_Sans, Poppins } from 'next/font/google';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';


// Initialize fonts
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  weight: ['400', '700'],
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['300', '400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
});

// Sample wishlist data (replace with API fetch in production)
const wishlistItems = [
  {
    id: 1,
    name: 'Patek Philippe Grandmaster Chime',
    price: '₹31,000,000',
    image: '/Brand/patek.jpg',
  },
  {
    id: 2,
    name: 'Richard Mille RM 56-02 Sapphire',
    price: '₹15,000,000',
    image: '/Brand/Richard.png',
  },
  {
    id: 3,
    name: 'Audemars Piguet Royal Oak',
    price: '₹4,500,000',
    image: '/Brand/audamars.png',
  },
  {
    id: 4,
    name: 'Vacheron Constantin Overseas',
    price: '₹3,200,000',
    image: '/Brand/vacheron.png',
  },
];

export default function WishlistPage() {
  const [items, setItems] = useState(wishlistItems);

  const handleRemoveFromWishlist = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className={`min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 ${workSans.variable} ${poppins.variable} ${dancingScript.variable}`}>
      <div className="container mx-auto">
        <h1
          className="text-5xl font-bold text-center text-gray-900 mb-12 tracking-wide"
          style={{ fontFamily: 'var(--font-dancing-script)' }}
        >
          Your Wishlist ✨
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-lg">
            <p className="text-xl text-gray-600 mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
              Your wishlist is empty.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-all duration-300 hover:shadow-lg"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
              >
                <div className="relative w-full h-[250px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => (e.target.src = '/fallback-image.jpg')}
                  />
                  <button
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-amber-100 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    aria-label="Remove from Wishlist"
                  >
                    <FaHeart className="text-red-500" />
                  </button>
                </div>
                <div className="p-4">
                  <h3
                    className="text-lg font-semibold text-gray-800 truncate"
                    style={{ fontFamily: 'var(--font-dancing-script)' }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-gray-600 font-medium" style={{ fontFamily: 'var(--font-work-sans)' }}>
                    {item.price}
                  </p>
                  <div className="flex gap-2 mt-4">
                    <button
                      className="flex-1 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-all duration-300 hover:shadow-md"
                      style={{ fontFamily: 'var(--font-work-sans)' }}
                    >
                      Add to Cart
                    </button>
                    <Link
                      href={`/product/${item.id}`}
                      className="flex-1 text-center bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-all duration-300"
                      style={{ fontFamily: 'var(--font-work-sans)' }}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}