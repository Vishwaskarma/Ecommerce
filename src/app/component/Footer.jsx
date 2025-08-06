// components/Footer.tsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { BsShieldCheck, BsHeadset, BsTruck, BsArrowRepeat } from 'react-icons/bs';
import Head from 'next/head';

const Footer = () => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <footer className="font-sans bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800" style={{ fontFamily: "'Work Sans', sans-serif" }}>
        {/* Premium Services Banner */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-gradient-to-r from-gray-800 to-gray-750 rounded-xl p-8 shadow-2xl">
            {[
              { icon: <BsTruck className="text-3xl text-amber-400" />, title: "Free Worldwide Shipping", desc: "On orders over ₹10,000" },
              { icon: <BsArrowRepeat className="text-3xl text-amber-400" />, title: "Easy Returns", desc: "30-day return policy" },
              { icon: <BsShieldCheck className="text-3xl text-amber-400" />, title: "Authenticity Guaranteed", desc: "Certified luxury watches" },
              { icon: <BsHeadset className="text-3xl text-amber-400" />, title: "24/7 Customer Care", desc: "Dedicated support" }
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-4 group transition-transform duration-300 hover:scale-105">
                <div className="transition-transform duration-300">
                  {service.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg group-hover:text-amber-400 transition-colors" style={{ fontFamily: "'Work Sans', sans-serif" }}>{service.title}</h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors" style={{ fontFamily: "'Work Sans', sans-serif" }}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
            {/* About */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-amber-400 tracking-tight">KANIDHI STORE</h3>
              <p className="text-gray-400 mb-4 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                The world's premier destination for luxury timepieces. Curating exceptional watches since 2010.
              </p>
              <div className="flex gap-4 mt-6">
                {[
                  { icon: <FaFacebookF />, name: "Facebook" },
                  { icon: <FaInstagram />, name: "Instagram" },
                  { icon: <FaTwitter />, name: "Twitter" },
                  { icon: <FaPinterest />, name: "Pinterest" },
                  { icon: <FaYoutube />, name: "YouTube" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="bg-gray-700 hover:bg-amber-500 transition-all duration-300 p-3 rounded-full hover:rotate-12 hover:shadow-lg"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Shop */}
            <div>
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider text-gray-300">Shop</h3>
              <ul className="space-y-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {['New Arrivals', 'Best Sellers', 'Limited Editions', 'Vintage Collection', 'Pre-Owned', 'Clearance'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-all duration-300"></span>
                      <span style={{ fontFamily: "'Work Sans', sans-serif" }}>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider text-gray-300">Customer Service</h3>
              <ul className="space-y-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {['Contact Us', 'FAQs', 'Shipping Policy', 'Returns & Exchanges', 'Product Care', 'Warranty'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-all duration-300"></span>
                      <span style={{ fontFamily: "'Work Sans', sans-serif" }}>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider text-gray-300">About Us</h3>
              <ul className="space-y-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {['Our Story', 'Boutiques', 'Sustainability', 'Careers', 'Press', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-all duration-300"></span>
                      <span style={{ fontFamily: "'Work Sans', sans-serif" }}>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider text-gray-300">Stay Connected</h3>
              <p className="text-gray-400 mb-4 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Subscribe for exclusive offers, new arrivals, and insider updates.
              </p>
              <div className="flex mb-4 rounded-lg overflow-hidden shadow-lg">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 text-white px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-500"
                />
                <button className="bg-amber-600 hover:bg-amber-700 px-6 transition-all duration-300 hover:px-8">
                  <span className="hidden md:inline">Subscribe</span>
                  <span className="md:hidden">→</span>
                </button>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm bg-gray-800 p-3 rounded-lg">
                <RiSecurePaymentLine className="text-xl text-amber-400" />
                <span>Secure Payment Gateway</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap gap-4 justify-center">
                {['visa', 'mastercard', 'amex', 'paypal', 'apple-pay', 'google-pay'].map((method) => (
                  <div 
                    key={method} 
                    className="bg-gray-800 rounded-lg p-2 w-16 h-10 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-md"
                  >
                    <img 
                      src={`/payment-${method}.svg`} 
                      alt={method} 
                      className="h-6 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
              <div className="text-gray-400 text-sm text-center md:text-right">
                <p>© {new Date().getFullYear()} Kanidhi Store. All rights reserved.</p>
                <div className="flex gap-4 justify-center md:justify-end mt-2">
                  <a href="#" className="hover:text-amber-400 transition-colors duration-300">Privacy Policy</a>
                  <span className="text-gray-600">|</span>
                  <a href="#" className="hover:text-amber-400 transition-colors duration-300">Terms of Service</a>
                  <span className="text-gray-600">|</span>
                  <a href="#" className="hover:text-amber-400 transition-colors duration-300">Accessibility</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
