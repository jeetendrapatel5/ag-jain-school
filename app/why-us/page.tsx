'use client';

import React, { useRef } from 'react';
import { 
  Award, Languages, Building2, Cpu, Heart, TrendingUp, 
  Users, Trophy, Scroll, Sparkles, Camera, Droplet, 
  Wind, Tablet, History, ArrowRight, Zap, Star
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyUsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const reasons = [
    { id: '01', icon: Award, title: '85 Years of Excellence', desc: 'A legacy that speaks through generations of successful alumni since our founding.', size: 'large' },
    { id: '02', icon: Languages, title: 'Tri-Lingual Advantage', desc: 'Hindi, Tamil, and English mediums, preparing students for a global landscape.' },
    { id: '03', icon: Building2, title: 'Smart Infrastructure', desc: '91+ CCTV, RO Water, AC Labs, and Smart Classrooms.', border: true },
    { id: '04', icon: Cpu, title: 'Digital Pioneers', desc: 'Integrating technology into curriculum since 1992.' },
    { id: '05', icon: Heart, title: 'Character-Driven', desc: 'Academics paired with values-based learning for ethical citizenship.' },
    { id: '06', icon: TrendingUp, title: 'Academic Results', desc: 'Consistent top performers in state board examinations.', accent: true },
    { id: '07', icon: Users, title: '360° Development', desc: 'NCC, NSS, Scouts, and specialized clubs for holistic growth.' },
    { id: '08', icon: Trophy, title: 'Sports & Wellness', desc: 'Yoga, Karate, Cricket, and professional athletic training.', dark: true },
    { id: '09', icon: Scroll, title: 'Awards Culture', desc: '42+ endowments recognizing excellence in every student\'s path.' },
    { id: '10', icon: Sparkles, title: 'Inclusive Environment', desc: 'Where every child belongs and every voice matters.', size: 'wide' },
  ];

  useGSAP(() => {
    // 1. Kinetic Hero Text
    const heroTl = gsap.timeline();
    heroTl.fromTo('.hero-title-word', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'expo.out' }
    ).fromTo('.hero-sub', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1 }, 
      "-=0.8"
    );

    // 2. Parallax Background Text
    gsap.to('.bg-parallax-text', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2
      },
      xPercent: -30
    });

    // 3. FIX: TypeScript Casting for GSAP toArray
    const cards = gsap.utils.toArray<HTMLElement>('.reason-card');
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i % 3 * 0.1,
          ease: 'power3.out'
        }
      );

      // Magnetic Effect
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(card, {
          x: x * 0.05,
          y: y * 0.05,
          duration: 0.4,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
      });
    });

    // 4. Glow Orb Following
    const orb = document.querySelector('.floating-orb');
    window.addEventListener('mousemove', (e) => {
      gsap.to(orb, {
        x: e.clientX,
        y: e.clientY,
        duration: 2,
        ease: 'power3.out'
      });
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-white text-[#0A192F] font-[family-name:var(--font-poppins)] overflow-x-hidden">
      
      {/* Cinematic Background Layer */}
      <div className="floating-orb fixed top-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="bg-parallax-text fixed top-1/2 left-0 text-[20vw] font-black text-slate-100/50 whitespace-nowrap -z-10 select-none uppercase tracking-tighter">
        Distinctive • Legendary • Future • 
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-center pt-32 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="hero-sub mb-8 inline-flex items-center gap-3 px-4 py-2 bg-blue-50/50 border border-blue-100 rounded-full backdrop-blur-md">
            <Zap className="w-3 h-3 text-blue-500 fill-blue-500" />
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em]">Why Choose AG Jain</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-12">
            <div className="overflow-hidden py-1">
              <span className="hero-title-word inline-block">Ten Pillars of</span>
            </div>
            <div className="overflow-hidden py-1">
              <span className="hero-title-word inline-block text-blue-500">Distinction.</span>
            </div>
          </h1>

          <p className="hero-sub text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed font-light">
            Blending an <span className="text-[#0A192F] font-semibold">85-year legacy</span> with 
            cutting-edge innovation to sculpt the <span className="text-[#0A192F] font-semibold">leaders of 2050</span>.
          </p>
        </div>
      </section>

      {/* Reasons Gallery */}
      <section className="px-6 py-20 relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div 
              key={i} 
              className={`reason-card group relative p-10 rounded-[2.5rem] transition-all duration-500 
                ${reason.size === 'large' ? 'lg:col-span-2 bg-blue-600 text-white shadow-2xl shadow-blue-500/20' : ''}
                ${reason.size === 'wide' ? 'md:col-span-2 bg-slate-50 border border-slate-100' : ''}
                ${reason.dark ? 'bg-[#0A192F] text-white shadow-2xl shadow-navy-900/40' : ''}
                ${!reason.size && !reason.dark ? 'bg-white border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/10' : ''}
                ${reason.border ? 'border-l-4 border-l-blue-500' : ''}
                ${reason.accent ? 'border-b-4 border-b-blue-500' : ''}
              `}
            >
              <div className="absolute top-6 right-10 text-7xl font-black opacity-[0.03] group-hover:opacity-10 transition-opacity">
                {reason.id}
              </div>

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-all duration-500
                ${reason.size === 'large' ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'}
                ${reason.dark ? 'bg-blue-500/20 text-blue-400' : ''}
              `}>
                <reason.icon className="w-7 h-7" />
              </div>

              <h3 className={`text-2xl font-bold mb-4 tracking-tight ${reason.size === 'large' ? 'text-4xl md:text-5xl' : ''}`}>
                {reason.title}
              </h3>
              
              <p className={`leading-relaxed font-light text-base
                ${reason.size === 'large' ? 'text-blue-50 max-w-md' : 'text-slate-500'}
                ${reason.dark ? 'text-slate-400' : ''}
              `}>
                {reason.desc}
              </p>

              {reason.size === 'large' && (
                <div className="mt-12 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(j => (
                      <div key={j} className="w-10 h-10 rounded-full border-2 border-blue-600 bg-blue-400 flex items-center justify-center text-[10px] font-bold">
                        {j}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-100">4 Generations of Alumni</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section (The "Liquid" Feel) */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-blue-500/5 blur-[150px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-15">
              Your future is <span className="text-blue-500">calling.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/admissions">
              <button className="group relative flex items-center gap-4 bg-[#0A192F] text-white px-10 py-5 rounded-full font-bold overflow-hidden">
                <div className="absolute inset-0 bg-blue-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10">Apply for 2025</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              </a>
              <button className="px-10 py-5 rounded-full border border-slate-200 font-bold hover:bg-slate-50 transition-colors">
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}