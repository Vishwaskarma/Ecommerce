'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
// import rolex from '../../../public/Rolex/rolex_image.png';
import rolex2 from '../../../public/Rolex/rolex2.png';
// import rolex3 from '../../../public/Rolex/rolex3.png';
import rolex4 from '../../../public/Rolex/rolex4.png';
// import rolex6 from '../../../public/Rolex/rolex6.png';
import rolex3 from '../../../public/Rolex/watchone.png'
import rolex6 from '../../../public/Rolex/watch5.png'
 import rolex from '../../../public/Rolex/patek3.jpg'

const images = [rolex, rolex2, rolex3, rolex4, rolex6];

export default function WatchSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="relative w-full overflow-hidden group font-serif"
      style={{ height: '500px' }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

      {/* Text Overlay */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center text-white z-20">
        <h1 className="text-5xl tracking-wide">ROLEX</h1>
        <p className="text-xl mt-2">Oyster Perpetual</p>
        <button className="mt-4 px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition">
          DISCOVER MORE &gt;
        </button>
      </div>

      {/* WhatsApp Icon */}
      <div className="absolute bottom-4 right-4 text-white text-3xl z-20">
        <FaWhatsapp />
      </div>

      {/* Image Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          height: '100%',
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src.src}
            alt={`Watch ${index + 1}`}
            className="w-full flex-shrink-0 object-cover
            "
            style={{ height: '100%' }}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40 text-white px-3 py-2 rounded-full z-20"
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40 text-white px-3 py-2 rounded-full z-20"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
