'use client';
import { useState, useEffect } from 'react';

const desktopImages = [
  "https://www.hrmexports.com/assets/images/backgrounds/Welcome-Banner1.webp",
  "https://www.hrmexports.com/assets/images/backgrounds/banner02.webp",
  "https://www.hrmexports.com/assets/images/backgrounds/banner03.webp",
  "https://www.hrmexports.com/assets/images/backgrounds/banner04.webp"
];

const mobileImages = [
  "https://www.hrmexports.com/assets/images/backgrounds/mobilebann102.jpg",
  "https://www.hrmexports.com/assets/images/backgrounds/mobilebanner1.jpg",
  "https://www.hrmexports.com/assets/images/backgrounds/mobile3.webp",
  "https://www.hrmexports.com/assets/images/backgrounds/mobile4.webp"
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === desktopImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden group">
      
      {/* Desktop Images */}
      {desktopImages.map((src, index) => (
        <div 
          key={`desktop-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out hidden md:block ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img src={src} alt={`Banner ${index + 1}`} className="w-full h-full object-cover object-center" />
        </div>
      ))}

      {/* Mobile Images */}
      {mobileImages.map((src, index) => (
        <div 
          key={`mobile-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out md:hidden ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img src={src} alt={`Mobile Banner ${index + 1}`} className="w-full h-full object-cover object-center" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-0 z-20 flex justify-between items-center px-4 md:px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? desktopImages.length - 1 : prev - 1))}
          className="bg-black/30 hover:bg-[#0B5C32] text-white rounded-full p-3 md:p-4 transition-all hover:scale-110"
          aria-label="Previous Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev === desktopImages.length - 1 ? 0 : prev + 1))}
          className="bg-black/30 hover:bg-[#0B5C32] text-white rounded-full p-3 md:p-4 transition-all hover:scale-110"
          aria-label="Next Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-20 flex justify-center space-x-3">
        {desktopImages.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all rounded-full ${index === currentSlide ? 'w-8 h-2.5 bg-[#B4D333]' : 'w-2.5 h-2.5 bg-white/60 hover:bg-white'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
    </section>
  );
}
