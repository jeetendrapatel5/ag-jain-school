'use client';

import { useState } from 'react';
import Image from "next/image";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 flex flex-col">
      <div className="top flex flex-col md:flex-row items-center justify-between px-4 md:px-6 gap-4 my-5 lg:my-0">
        <div className="left flex-shrink-0">
          <Image 
            src="/logo/logo-main.png" 
            alt="AG Jain School Logo" 
            width={200} 
            height={200} 
            className="w-35 h-25 md:w-30 md:h-30 lg:w-50 lg:h-50 object-contain"
          />
        </div>
        
        <div className="middle text-center flex-grow">
          <h2 className="text-lg md:text-2xl lg:text-4xl font- font-extrabold text-blue-900 [word-spacing:0.35rem]">
            Shree Amoluckchand Galada Jain
          </h2>
          <h3 className="text-base md:text-xl lg:text-2xl text-blue-800 font-semibold">
            Higher Secondary School
          </h3>
          <h4 className="text-xs md:text-sm lg:text-base text-blue-800 hidden md:block">
            A unit of Sri S.S. Jain Educational Society (Religious Linguistic Minority Society)
          </h4>
          <h4 className="text-xs md:text-sm lg:text-base text-blue-800 hidden md:block">
            Recognised by Tamil Naidu State Board
          </h4>
          <h4 className="text-xs md:text-sm lg:text-base text-blue-600">
            19, Tholasingam Street, Sowcarpet, Chennai - 600 079
          </h4>
        </div>
        
        <div className="right flex-shrink-0">
          <a 
            href="/admissions" 
            className="bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 text-sm md:text-base whitespace-nowrap"
          >
            Admission
          </a>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="bottom hidden lg:flex justify-between px-8 bg-blue-900 text-white py-3">
        <a href="/" className="hover:text-blue-200 transition-colors">Home</a>
        <a href="/amenities" className="hover:text-blue-200 transition-colors">Amenities</a>
        <a href="/why-us" className="hover:text-blue-200 transition-colors">Why Us</a>
        <a href="/school-calendar" className="hover:text-blue-200 transition-colors">School Calendar</a>
        <a href="/sports" className="hover:text-blue-200 transition-colors">Sports</a>
        <a href="/gallery" className="hover:text-blue-200 transition-colors">Gallery</a>
        <a href="/contact" className="hover:text-blue-200 transition-colors">Contact</a>
        <a href="/leadership" className="hover:text-blue-200 transition-colors">Leadership</a>
        <a href="/academics" className="hover:text-blue-200 transition-colors">Academics</a>
        <a href="/lifeagjs" className="hover:text-blue-200 transition-colors">Life @AGJS</a>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden bg-blue-900">
        <button
          onClick={toggleMenu}
          className="w-full text-white px-6 py-3 flex items-center justify-between"
          aria-label="Toggle menu"
        >
          <span className="font-semibold">Menu</span>
          <svg
            className={`w-6 h-6 transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu Items */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col bg-blue-500 text-white">
            <a href="/home" className="px-6 py-3 hover:bg-blue-700 border-b border-blue-700">Home</a>
            <a href="/amenities" className="px-6 py-3 hover:bg-blue-700 border-b border-blue-700">Amenities</a>
            <a href="/why-us" className="px-6 py-3 hover:bg-blue-700 border-b border-blue-700">Why Us</a>
            <a href="/school-calendar" className="px-6 py-3 hover:bg-blue-700 border-b border-blue-700">School Calendar</a>
            <a href="/sports" className="px-6 py-3 hover:bg-blue-700 border-b border-blue-700">Sports</a>
            <a href="/gallery" className="px-6 py-3 hover:bg-blue-700 border-b border-blue-700">Gallery</a>
            <a href="/contact" className="px-6 py-3 hover:bg-blue-700 border-b border-blue-700">Contact</a>
            <a href="/leadership" className="px-6 py-3 hover:bg-blue-700 border-b border-blue-700">Leadership</a>
            <a href="/academics" className="px-6 py-3 hover:bg-blue-700 border-b border-blue-700">Academics</a>
            <a href="/lifeagjs" className="px-6 py-3 hover:bg-blue-700">Life @AGJS</a>
          </div>
        </div>
      </div>
    </nav>
  );
}