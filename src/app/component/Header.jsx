'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiShoppingBag, FiHeart, FiUser , FiX, FiMenu } from 'react-icons/fi';
import { Parisienne } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { Montserrat } from 'next/font/google';

// Premium cursive font for logo
const parisienne = Parisienne({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-parisienne',
});

// Elegant serif font for headings
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

// Clean sans-serif font for text
const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);
  const menuTimeoutRef = useRef(null);

  // Simulate search suggestions
  const searchSuggestions = [
    'Rolex Daytona',
    'Patek Philippe Nautilus',
    'Audemars Piguet Royal Oak',
    'Omega Speedmaster',
    'Cartier Tank',
    'Vacheron Constantin',
    'Breguet Classique',
    'Jaeger-LeCoultre Reverso'
  ];

  // Handle scroll for sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredSuggestions = searchSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMenuEnter = (menu) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setActiveMenu(menu);
    setIsMenuOpen(true);
  };

  const handleMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 300);
  };

  const cancelMenuLeave = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
  };

  const menuItems = [
    { name: 'HOME', link: '/' },
    { name: 'ABOUT US', link: '/about' },
    { name: 'BRANDS', link: '/brands' },
    { name: 'ACCESSORIES', link: '/accessories' },
    { name: 'CONTACT US', link: '/contact' },
    { 
      name: 'NEW ARRIVALS', 
      content: {
        sections: [
          {
            title: 'Latest Releases',
            items: ['Spring Collection 2024', 'Limited Editions', 'Collaborations', 'Pre-Order Now']
          },
          {
            title: 'Trending Now',
            items: ['Blue Dial Watches', 'Skeleton Designs', 'Ultra-Thin Models', 'Green Dial Classics']
          }
        ],
        featuredImage: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        featuredText: 'Discover Our Latest Masterpieces'
      }
    },
    // ... (other menu items remain unchanged)
  ];

  const actionItems = [
    { icon: <FiUser  />, label: 'Account' },
    { icon: <FiHeart />, label: 'Wishlist', badge: 3 },
    { icon: <FiShoppingBag />, label: 'Cart', badge: 2 },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-sm border-b border-gray-100'
          : 'bg-gradient-to-b from-black/90 to-gray-900/90'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          <div className="relative group order-1 md:order-none mx-auto md:mx-0">
            <div className="relative flex items-center">
              <span className={`${parisienne.variable} font-parisienne text-5xl ${isScrolled ? 'text-gray-900' : 'text-white'} tracking-wide`}>
                Kanidhi
              </span>
              <span className={`${playfair.variable} font-playfair italic font-light text-lg ${isScrolled ? 'text-gray-600' : 'text-amber-400'} ml-2 mt-2`}>
                store
              </span>
            </div>
          </div>

          <div className="hidden md:block relative w-full md:w-[500px] lg:w-[600px] group" ref={searchRef}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              placeholder="Search for timepieces, collections, or brands..."
              className={`w-full py-3 px-5 pr-12 rounded-md border ${isScrolled ? 'border-gray-200' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent font-montserrat text-sm ${isScrolled ? 'text-gray-800 bg-white' : 'text-white bg-black/30'} placeholder-gray-400 transition-all duration-300`}
            />
            <button
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 ${isScrolled ? 'text-gray-600 hover:text-amber-600' : 'text-amber-400 hover:text-white'} transition-colors duration-200`}
            >
              <FiSearch className="text-lg" />
            </button>
            {isSearchFocused && searchQuery && filteredSuggestions.length > 0 && (
              <div className={`absolute w-full mt-1 shadow-xl z-20 ${isScrolled ? 'bg-white border border-gray-200' : 'bg-gray-900 border border-gray-700'} rounded-md overflow-hidden`}>
                {filteredSuggestions.map((suggestion, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`block px-4 py-3 text-sm font-montserrat ${isScrolled ? 'text-gray-800 hover:bg-amber-50' : 'text-gray-200 hover:bg-gray-800'} transition-colors duration-200 border-b ${isScrolled ? 'border-gray-100' : 'border-gray-800'} last:border-0`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSearchQuery(suggestion);
                    }}
                  >
                    {suggestion}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 order-2 md:order-none">
            {actionItems.map(({ icon, label, badge }, index) => (
              <div key={index} className="relative group">
                <button className="flex flex-col items-center">
                  <div className={`text-xl ${isScrolled ? 'text-gray-700 group-hover:text-amber-600' : 'text-white group-hover:text-amber-400'} transition-all duration-300`}>
                    {icon}
                  </div>
                  <span className={`text-[10px] mt-1 tracking-widest ${isScrolled ? 'text-gray-600 group-hover:text-amber-600' : 'text-gray-300 group-hover:text-amber-400'} transition-all font-montserrat font-light uppercase`}>
                    {label}
                  </span>
                  {badge && (
                    <span className={`absolute -top-1 -right-1 ${isScrolled ? 'bg-amber-600' : 'bg-amber-500'} text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-montserrat font-bold`}>
                      {badge}
                    </span>
                  )}
                </button>
                <span className={`absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-max px-3 py-1 text-xs ${isScrolled ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 ${isScrolled ? 'bg-white' : 'bg-gray-900'} transition-all duration-300`}>
            {/* Mobile Search */}
            <div className="relative w-full mb-4" ref={searchRef}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder="Search our collection..."
                className={`w-full py-3 px-5 pr-12 rounded-md border ${isScrolled ? 'border-gray-200 bg-white' : 'border-gray-600 bg-gray-800'} focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent font-montserrat text-sm ${isScrolled ? 'text-gray-800' : 'text-white'} placeholder-gray-400`}
              />
              <button
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 ${isScrolled ? 'text-gray-600' : 'text-amber-400'}`}
              >
                <FiSearch className="text-lg" />
              </button>
              {isSearchFocused && searchQuery && filteredSuggestions.length > 0 && (
                <div className={`absolute w-full mt-1 shadow-xl z-20 ${isScrolled ? 'bg-white border border-gray-200' : 'bg-gray-900 border border-gray-700'} rounded-md overflow-hidden`}>
                  {filteredSuggestions.map((suggestion, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`block px-4 py-3 text-sm font-montserrat ${isScrolled ? 'text-gray-800 hover:bg-amber-50' : 'text-gray-200 hover:bg-gray-800'} transition-colors duration-200 border-b ${isScrolled ? 'border-gray-100' : 'border-gray-800'} last:border-0`}
                      onClick={(e) => {
                        e.preventDefault();
                        setSearchQuery(suggestion);
                      }}
                    >
                      {suggestion}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  <a
                    href={item.link || '#'}
                    className={`w-full text-left py-2 px-4 flex justify-between items-center ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-gray-200 hover:bg-gray-800'} transition-colors duration-200`}
                  >
                    <span className="font-montserrat font-light tracking-widest text-xs uppercase">
                      {item.name}
                    </span>
                  </a>
                </div>
              ))}
            </nav>
          </div>
        )}

        {/* Desktop Mega Menu Navigation */}
        <nav className="hidden md:block relative mt-4">
          <div
            className="flex justify-center space-x-6 lg:space-x-10 overflow-x-auto py-3 scrollbar-hide"
            onMouseLeave={handleMenuLeave}
          >
            {menuItems.map((item) => (
              <button
                key={item.name}
                onMouseEnter={() => handleMenuEnter(item.name)}
                onMouseLeave={handleMenuLeave}
                className={`text-xs font-montserrat font-light tracking-widest uppercase whitespace-nowrap ${
                  isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-gray-300 hover:text-white'
                } transition-all duration-300 relative group`}
              >
                <a href={item.link || '#'}>{item.name}</a>
                <span className={`absolute left-0 bottom-0 w-0 h-px ${
                  isScrolled ? 'bg-amber-600' : 'bg-white'
                } transition-all duration-500 group-hover:w-full rounded-full`}></span>
              </button>
            ))}
          </div>
          
          {/* Mega Menu Dropdown */}
          {isMenuOpen && activeMenu && (
            <div
              className={`absolute top-full left-0 w-full ${
                isScrolled ? 'bg-white border-t border-gray-100' : 'bg-gray-900 border-t border-gray-800'
              } shadow-xl p-8 grid grid-cols-4 gap-8 z-20`}
              onMouseEnter={cancelMenuLeave}
              onMouseLeave={handleMenuLeave}
            >
              {menuItems
                .filter(item => item.name === activeMenu)
                .map((item) => (
                  <React.Fragment key={item.name}>
                    {item.content && item.content.sections.map((section, index) => (
                      <div key={index}>
                        <h4 className={`font-playfair text-lg ${
                          isScrolled ? 'text-gray-900' : 'text-white'
                        } mb-4`}>
                          {section.title}
                        </h4>
                        <ul className="space-y-3">
                          {section.items.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href="#"
                                className={`font-montserrat text-sm ${
                                  isScrolled ? 'text-gray-600 hover:text-amber-600' : 'text-gray-400 hover:text-white'
                                } transition-colors duration-200`}
                              >
                                {subItem}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {item.content && (
                      <div className="relative overflow-hidden rounded-md">
                        <img
                          src={item.content.featuredImage}
                          alt={item.content.featuredText}
                          className="w-full h-full object-cover rounded-md"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                          <span className="text-white font-playfair text-lg">
                            {item.content.featuredText}
                          </span>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
            </div>
          )}
        </nav>
      </div>

      {/* Add to globals.css */}
      <style jsx global>{`
        .font-parisienne {
          font-family: var(--font-parisienne), cursive;
        }
        .font-playfair {
          font-family: var(--font-playfair), serif;
        }
        .font-montserrat {
          font-family: var(--font-montserrat), sans-serif;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
};

export default Header;
