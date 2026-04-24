'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50 font-sans">
      {/* Top Bar */}
      <div className="bg-[#0B5C32] text-white text-sm py-2 px-4 md:px-8 hidden md:flex justify-between items-center shadow-md relative z-20">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <i className="fas fa-phone-square"></i>
            <a href="tel:+91 73 5700 0031" className="hover:text-[#B4D333] transition-colors">+91 73 5700 0031</a>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-envelope"></i>
            <a href="mailto:info@hrmexports.com" className="hover:text-[#B4D333] transition-colors">info@hrmexports.com</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/hrmexport" className="hover:text-[#B4D333] transition-colors"><i className="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/company/hrmexports/" className="hover:text-[#B4D333] transition-colors"><i className="fab fa-linkedin"></i></a>
            <a href="https://instagram.com/hrmexports" className="hover:text-[#B4D333] transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="https://www.twitter.com/hrm" className="hover:text-[#B4D333] transition-colors"><i className="fab fa-twitter"></i></a>
          </div>
          <div id="google_translate_element" className="ml-3"></div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white md:bg-white/90 md:backdrop-blur-md w-full z-10 shadow-lg border-b-4 border-[#B4D333]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-0">
          
          {/* Logo */}
          <div className="flex-shrink-0 relative bg-white md:px-6 md:pb-4 rounded-b-xl shadow-sm z-30">
            <Link href="/">
              <img src="https://www.hrmexports.com/assets/images/resources/logo-1.png" className="w-40 md:w-48 object-contain" alt="HRM Exports" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-gray-800 font-semibold text-[15px]">
            <Link href="/" className="hover:text-[#0B5C32] py-8 transition-colors">Home</Link>
            
            <div className="relative group py-8">
              <a href="#" className="hover:text-[#0B5C32] flex items-center transition-colors">Company <i className="fas fa-chevron-down text-[10px] ml-1"></i></a>
              <ul className="absolute top-[80px] left-0 w-56 bg-white shadow-xl rounded-md py-2 invisible opacity-0 translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50 border-t-2 border-[#0B5C32]">
                <li><Link href="/about" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#0B5C32]">About Us</Link></li>
                <li><Link href="/history" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#0B5C32]">History</Link></li>
                <li><Link href="/infrastructure" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#0B5C32]">Infrastructure</Link></li>
                <li><Link href="/certificates" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#0B5C32]">Certifications</Link></li>
              </ul>
            </div>

            <Link href="/brand" className="hover:text-[#0B5C32] py-8 transition-colors">Behrouz Brand</Link>

            <div className="relative group py-8">
              <a href="#" className="hover:text-[#0B5C32] flex items-center transition-colors">Products <i className="fas fa-chevron-down text-[10px] ml-1"></i></a>
              <ul className="absolute top-[80px] left-0 w-64 bg-white shadow-xl rounded-md py-2 invisible opacity-0 translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50 border-t-2 border-[#0B5C32]">
                <li className="relative group/sub">
                  <Link href="/indian-basmati-rice.html" className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 hover:text-[#0B5C32]">
                    INDIAN BASMATI RICE <i className="fas fa-chevron-right text-[10px]"></i>
                  </Link>
                  <ul className="absolute top-0 left-full w-64 bg-white shadow-xl rounded-md py-2 invisible opacity-0 -translate-x-4 group-hover/sub:visible group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-300 z-50 border-t-2 border-[#0B5C32]">
                    <li><Link href="/1121-basmati-rice.html" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#0B5C32]">1121 BASMATI RICE</Link></li>
                    <li><Link href="/1718-basmati-rice.html" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#0B5C32]">1718 BASMATI RICE</Link></li>
                    <li><Link href="/1509-basmati-rice.html" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#0B5C32]">1509 BASMATI RICE</Link></li>
                  </ul>
                </li>
                <li><Link href="/indian-non-basmati-rice.html" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#0B5C32]">INDIAN NON BASMATI RICE</Link></li>
                <li><Link href="/pesticide-residue-free-rice.html" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#0B5C32]">PESTICIDE RESIDUE FREE RICE</Link></li>
              </ul>
            </div>

            <Link href="/quality-control" className="hover:text-[#0B5C32] py-8 transition-colors">Quality Control</Link>
            <Link href="/recipes" className="hover:text-[#0B5C32] py-8 transition-colors">Recipes</Link>
            <Link href="/contact" className="hover:text-[#0B5C32] py-8 transition-colors">Contact Us</Link>
          </div>

          {/* E-Brochure Button & Mobile Toggle */}
          <div className="flex items-center space-x-4 pr-2">
            <a href="https://www.hrmexports.com/assets/images/hrm_exports_catalogue.pdf" download className="hidden lg:block bg-[#B4D333] hover:bg-[#9cbd28] text-white px-6 py-3 rounded-sm font-semibold transition-colors shadow-md">
              E-Brochure
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-2xl text-gray-800 p-2">
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white px-6 flex flex-col space-y-4 text-gray-800 font-semibold">
            <Link href="/" className="border-b border-gray-100 pb-2 hover:text-[#0B5C32]">Home</Link>
            <Link href="/about" className="border-b border-gray-100 pb-2 hover:text-[#0B5C32]">Company</Link>
            <Link href="/brand" className="border-b border-gray-100 pb-2 hover:text-[#0B5C32]">Behrouz Brand</Link>
            <Link href="/products" className="border-b border-gray-100 pb-2 hover:text-[#0B5C32]">Products</Link>
            <Link href="/quality-control" className="border-b border-gray-100 pb-2 hover:text-[#0B5C32]">Quality Control</Link>
            <Link href="/recipes" className="border-b border-gray-100 pb-2 hover:text-[#0B5C32]">Recipes</Link>
            <Link href="/contact" className="pb-2 hover:text-[#0B5C32]">Contact Us</Link>
            <a href="https://www.hrmexports.com/assets/images/hrm_exports_catalogue.pdf" download className="bg-[#B4D333] text-white text-center px-6 py-3 rounded-md font-bold w-full shadow-md">
              Download E-Brochure
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
