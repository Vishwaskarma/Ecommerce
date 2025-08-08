'use client';

import React, { useState } from 'react';
import { Dancing_Script, Work_Sans, Poppins } from 'next/font/google';
import Image from 'next/image';
import { FaHeart, FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
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

// Sample cart data (replace with API fetch in production)
const initialCartItems = [
  {
    id: 1,
    name: 'Patek Philippe Grandmaster Chime',
    price: 31000000,
    image: '/Brand/patek.jpg',
    quantity: 1,
    inWishlist: false,
  },
  {
    id: 2,
    name: 'Richard Mille RM 56-02 Sapphire',
    price: 15000000,
    image: '/Brand/Richard.png',
    quantity: 1,
    inWishlist: true,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, delta) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleToggleWishlist = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, inWishlist: !item.inWishlist } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
    });
  };

  return (
    <div className={`min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 ${workSans.variable} ${poppins.variable} ${dancingScript.variable}`}>
      <div className="container mx-auto">
        <h1
          className="text-5xl font-bold text-center text-gray-900 mb-12 tracking-wide"
          style={{ fontFamily: 'var(--font-dancing-script)' }}
        >
          Your Cart 🛒
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-lg">
            <p className="text-xl text-gray-600 mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
              Your cart is empty. Discover our luxury collection!
            </p>
            <Link
              href="/shop"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-all duration-300 hover:shadow-lg"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center gap-4 py-4 border-b border-gray-200 last:border-b-0 group"
                  >
                    <div className="relative w-[150px] h-[150px] flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => (e.target.src = '/fallback-image.jpg')}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg font-semibold text-gray-800 truncate"
                        style={{ fontFamily: 'var(--font-dancing-script)' }}
                      >
                        {item.name}
                      </h3>
                      <p
                        className="text-gray-600 font-medium"
                        style={{ fontFamily: 'var(--font-work-sans)' }}
                      >
                        {item.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-300"
                          disabled={item.quantity === 1}
                        >
                          <FaMinus className="text-sm text-gray-600" />
                        </button>
                        <span
                          className="px-4 text-gray-800"
                          style={{ fontFamily: 'var(--font-work-sans)' }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-300"
                        >
                          <FaPlus className="text-sm text-gray-600" />
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleToggleWishlist(item.id)}
                        className={`p-2 rounded-full shadow-md transition-all duration-300 ${
                          item.inWishlist ? 'bg-amber-100 text-red-500' : 'bg-white hover:bg-amber-100'
                        }`}
                        aria-label={item.inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                      >
                        <FaHeart />
                      </button>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="p-2 bg-white rounded-full shadow-md hover:bg-red-100 transition-all duration-300"
                        aria-label="Remove from Cart"
                      >
                        <FaTrash className="text-red-500" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <h2
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  style={{ fontFamily: 'var(--font-dancing-script)' }}
                >
                  Order Summary
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span style={{ fontFamily: 'var(--font-work-sans)' }}>
                      Subtotal ({cartItems.length} items)
                    </span>
                    <span style={{ fontFamily: 'var(--font-work-sans)' }}>
                      {calculateTotal()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ fontFamily: 'var(--font-work-sans)' }}>Shipping</span>
                    <span style={{ fontFamily: 'var(--font-work-sans)' }}>Free</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between font-semibold">
                    <span style={{ fontFamily: 'var(--font-work-sans)' }}>Total</span>
                    <span style={{ fontFamily: 'var(--font-work-sans)' }}>{calculateTotal()}</span>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  className="block w-full bg-amber-600 text-white text-center py-3 rounded-lg mt-6 hover:bg-amber-700 transition-all duration-300 hover:shadow-lg"
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}