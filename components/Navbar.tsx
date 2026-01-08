"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Why Us', href: '/why-us' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Academics', href: '/academics' },
  { name: 'Infrastructure', href: '/infrastructure' },
  { name: 'Sports', href: '/sports' },
  { name: 'Contact', href: '/contact' },
  { name: 'Amenities', href: '/amenities' },
  { name: 'Calendar', href: '/school-calendar' },
  { name: 'Gallery', href: '/gallery' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 h-[80px] lg:h-[100px] bg-white/85 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center rounded-lg">
             {/* Increased logo size */}
             <Image 
              src="/logo/logo-main.png" 
              alt="AG Jain School Logo" 
              width={100} 
              height={100} 
              className="w-14 h-14 md:w-16 md:h-16 lg:w-25 lg:h-25 object-contain"
            />
          </div>
          <div>
            <span className="block text-sm md:text-base lg:text-lg font-bold text-navy-900 leading-none group-hover:text-brand-600 transition-colors">
              AG Jain School
            </span>
            <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-medium mt-1">
              Est. 1940 • Chennai
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-navy-900 hover:bg-slate-50 rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/admissions"
            className="ml-2 flex items-center gap-2 px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-sm font-medium rounded-full transition-colors shadow-lg shadow-navy-900/20"
          >
            Admissions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 text-navy-900 hover:bg-slate-100 rounded-lg"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full bg-white border-b border-slate-100 shadow-xl py-6 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-navy-900 border-b border-slate-50 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/admissions"
            onClick={() => setIsOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-navy-900 text-white text-lg font-bold rounded-xl shadow-lg"
          >
            Admissions <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </nav>
  );
}