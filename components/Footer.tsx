'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin,
  ArrowUp, ArrowRight, Sparkles, GraduationCap
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Floating Animation for background elements
    gsap.to('.floating-blob', {
      y: 40,
      x: 20,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 2
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo('.stagger-reveal',
      { y: 50, opacity: 0, skewY: 2 },
      { y: 0, opacity: 1, skewY: 0, duration: 1, stagger: 0.1, ease: 'expo.out' }
    );
  }, { scope: footerRef });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer ref={footerRef} className="relative bg-[#0A192F] pt-24 pb-12 overflow-hidden font-[family-name:var(--font-poppins)]">

      {/* --- 1. The "Negative Space" Top Divider --- */}
      <div className="absolute top-0 left-0 w-full h-24 bg-white rounded-b-[50px] sm:rounded-b-[50px] z-10 shadow-xl"></div>

      {/* --- 2. Dynamic Background Layers --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e3a8a_0%,#0A192F_100%)]"></div>

        {/* Animated Blobs */}
        <div className="floating-blob absolute top-[20%] left-[10%] w-64 h-64 bg-blue-400/40 rounded-full blur-[100px]"></div>
        <div className="floating-blob absolute bottom-[10%] right-[10%] w-96 h-96 bg-[#598cc579] rounded-full blur-[120px]"></div>

        {/* Fine Mesh Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 mt-12">

        {/* --- 3. Main Footer Grid --- */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start pb-20">

          {/* Brand Column */}
          <div className="lg:col-span-5 stagger-reveal mt-9">
            <div className="flex flex-col items-center gap-3 mb-8">
              <h2 className="text-3xl text-center font-bold text-white pb-5">Shree Amoluckchand Galada Jain</h2>
              <p className='text-xl font-semibold text-zinc-200'>Higher Secondary School</p>
              <p className='text-xs  text-zinc-200'>A unit of Sri S.S. Jain Educational Society (Religious Linguistic Minority Society)</p>
              <p className='font-bold text-zinc-200'>Recognised by Tamil Naidu State Board</p>
              <p className="text-blue-100/90 text-center leading-relaxed mb-10 max-w-md italic">
                "Building foundations of character and excellence since 1940."
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <button key={idx} className="w-12 h-12 rounded-4xl bg-white/3 border border-white/1 flex items-center justify-center text-white hover:bg-blue-500 hover:text-green-300 hover:-translate-y-2 transition-all duration-500">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Nav Lists */}
          <div className="lg:col-span-2 sm:col-span-6 stagger-reveal mt-11">
            <h4 className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em] mb-8">Institution</h4>
            <ul className="space-y-5">
              {['History', 'Vision', 'Leadership', 'Academics'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-blue-100/90 hover:text-white transition-all text-sm flex items-center group">
                    {item}
                    <ArrowRight className="w-0 h-4 ml-0 group-hover:w-4 group-hover:ml-2 transition-all text-[#C5A059]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Glass Contact Panel */}
          <div className="lg:col-span-5 stagger-reveal">
            <div className="relative p-1 rounded-[32px] bg-gradient-to-br from-white/20 via-white/5 to-transparent shadow-2xl">
              <div className="bg-[#0A192F]/80 backdrop-blur-2xl rounded-[31px] p-8 sm:p-10 border border-white/5">
                <div className="flex items-center gap-2 mb-8 text-[#C5A059]">
                  <span className="text-xs font-bold uppercase tracking-widest">Connect with us</span>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6 items-start group">
                    <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Our Location</p>
                      <p className="text-sm text-blue-100/50 leading-relaxed">123, Mint Street, Sowcarpet, Chennai - 600001</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-center group">
                    <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Email Enquiries</p>
                      <p className="text-sm text-blue-100/50">admissions@agjain.edu.in</p>
                    </div>
                  </div>
                </div>

                <Link href="/contact" className="mt-10 w-full py-4 bg-white text-[#0A192F] hover:text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#4a89ff] transition-all group">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* --- 4. Bottom Footer --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 stagger-reveal">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p className="text-[11px] text-white/30 uppercase tracking-[0.2em]">
              © 2026 AG JAIN SCHOOL
            </p>
            <div className="hidden sm:block w-1 h-1 bg-white/10 rounded-full"></div>
            <div className="flex items-center gap-1">
              <p className="text-[11px] text-white/30 uppercase tracking-[0.2em]">Quality Education Since 1940</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-6 mr-4">
              <Link href="#" className="text-[11px] text-white/30 hover:text-[#C5A059] transition-colors uppercase tracking-widest">Privacy</Link>
              <Link href="#" className="text-[11px] text-white/30 hover:text-[#C5A059] transition-colors uppercase tracking-widest">Terms</Link>
            </div>
            <button
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#0A192F] transition-all duration-500 shadow-xl"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}