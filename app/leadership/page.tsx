'use client';

import React, { useRef, useEffect } from 'react';
import { 
  Building2, Award, Shield, Heart, Target, 
  TrendingUp, Crown, Quote, ArrowUpRight, CheckCircle2, Star, Zap
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LeadershipPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const leaders = [
    {
      name: 'Shri Hanuman Chand Bothra',
      role: 'Correspondent',
      icon: Crown,
      quote: 'Education is the chisel we use to shape the future. We build character, not just careers.',
    },
    {
      name: 'Shri Daljeet Singh Dadha',
      role: 'Secretary',
      icon: Shield,
      quote: 'Excellence is an attitude. We cultivate that attitude in every student, every day.',
    },
    {
      name: 'Dr. K. Jayashree',
      role: 'Headmistress',
      credential: 'Ph.D., M.Com',
      icon: Award,
      quote: 'Nurturing minds with discipline and love to create global citizens of tomorrow.',
    }
  ];

  const committee = [
    'Prasan Chordia', 'Sajjan Raj Mehta', 'Rajesh Betala', 
    'Bohra G C', 'Surendra Kumar Singhvi', 'Suresh Chand Bokdia', 'Goutham Chand Gothi'
  ];

  const history = [
    { name: 'Shri Goutham Chand Gothi', period: '2023-2025' },
    { name: 'Shri L. Ashok Bhandari', period: '2022-2023' },
    { name: 'Shri R. Prakash Chand Bohra', period: '2012-2022' },
    { name: 'Shri Shanti Kumbhat', period: '2011-2012' },
    { name: 'Shri Vimal Galada', period: '1991-2011' }
  ];

  useGSAP(() => {
    // 1. Initial State
    gsap.set('.animate-item', { opacity: 0, y: 40 });
    gsap.set('.hero-title-word', { y: '100%' });

    // 2. Cinematic Hero Reveal
    const heroTl = gsap.timeline();
    heroTl.to('.hero-title-word', {
      y: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'expo.out'
    }).fromTo('.hero-sub', 
      { opacity: 0, y: 10 }, 
      { opacity: 1, y: 0, duration: 1 }, 
      "-=0.8"
    );

    // 3. Magnetic Hover Effect for Cards
    const cards = document.querySelectorAll('.magnetic-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e: any) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(card, {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
      });
    });

    // 4. Batch Scroll Animation (Optimized)
    ScrollTrigger.batch('.animate-item', {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          overwrite: true
        });
      },
      start: 'top 88%'
    });

    // 5. Parallax Background Text
    gsap.to('.bg-parallax-text', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2
      },
      xPercent: -20
    });

    // 6. Liquid Timeline Filling
    gsap.to('.timeline-line-fill', {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline-section',
        start: 'top 40%',
        end: 'bottom 60%',
        scrub: 1.5
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-white text-[#0A192F] font-[family-name:var(--font-poppins)] selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* Decorative Background Layer */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] mix-blend-multiply z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="bg-parallax-text fixed top-1/2 left-0 text-[25vw] font-black text-slate-100/40 whitespace-nowrap -z-10 select-none uppercase tracking-tighter">
        Heritage • Vision • Excellence •
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="hero-sub mb-8 inline-flex items-center gap-3 px-4 py-2 bg-blue-50/50 border border-blue-100 rounded-full backdrop-blur-md">
            <Zap className="w-3 h-3 text-blue-500 fill-blue-500" />
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em]">Legacy Since 1940</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-10">
            <div className="overflow-hidden py-1">
              <span className="hero-title-word inline-block">Guardians</span>
            </div>
            <div className="overflow-hidden py-1 flex">
              <span className="hero-title-word inline-block text-blue-500">of Excellence</span>
              <div className='sm:h-5 sm:w-5 h-3 w-3 rounded-4xl bg-green-600 mt-3'></div>
            </div>
          </h1>

          <p className="hero-sub text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed font-light">
            Steering the institution with 85 years of <span className="text-[#0A192F] font-semibold">integrity</span>, 
            modern <span className="text-[#0A192F] font-semibold">foresight</span>, and a commitment to 
            holistic character building.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="px-6 py-24 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <div key={i} className="animate-item magnetic-card group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-500">
              <div className="w-16 h-16 bg-slate-50 text-[#0A192F] group-hover:bg-blue-500 group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 transform group-hover:rotate-6">
                <leader.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-1 tracking-tight">{leader.name}</h3>
              <p className="text-xs font-black text-blue-500 uppercase tracking-widest mb-8">{leader.role}</p>
              
              <div className="pt-8 border-t border-slate-50 relative">
                <Quote className="absolute -top-3 left-0 w-8 h-8 text-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-slate-600 leading-relaxed italic text-base">"{leader.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Governance Bento */}
      <section className="py-32 bg-[#0A192F] px-6 text-white overflow-hidden rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 animate-item">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest pl-2">Governance</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
                Architects of <br /> Our <span className="text-blue-500">Future.</span>
              </h2>
              <p className="text-blue-100/60 text-lg mb-10 max-w-md">
                A distinguished management committee dedicated to maintaining the highest standards of academic and moral leadership.
              </p>
              <button className="group flex items-center gap-4 bg-white text-[#0A192F] px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all duration-500">
                Strategic Roadmap
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {committee.map((name, i) => (
                <div key={i} className="animate-item group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-500">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3B82F6]"></div>
                    <span className="text-sm font-bold tracking-wide group-hover:text-blue-400 transition-colors">{name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Section (Optimized Tight Spacing) */}
      <section className="timeline-section py-32 px-6 relative bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24 animate-item">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Our Legacy</h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="w-12 h-[2px] bg-slate-100"></div>
              <span className="text-blue-500 text-xs font-black uppercase tracking-[0.3em]">Historical Leaders</span>
              <div className="w-12 h-[2px] bg-slate-100"></div>
            </div>
          </div>

          <div className="relative">
            {/* The Unified Central Track */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-50 md:-translate-x-1/2 overflow-hidden">
               <div className="timeline-line-fill absolute top-0 left-0 w-full h-full bg-blue-500 origin-top scale-y-0 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            </div>

            <div className="space-y-12">
              {history.map((item, i) => (
                <div key={i} className="animate-item relative flex items-start md:items-center">
                  
                  {/* Circle Node */}
                  <div className="absolute left-[16px] md:left-1/2 w-[10px] h-[10px] bg-white border-2 border-blue-500 rounded-full md:-translate-x-1/2 z-20 mt-1 md:mt-0 shadow-sm" />

                  {/* Content Layout */}
                  <div className={`w-full flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Period Label */}
                    <div className={`pl-12 md:pl-0 md:w-[50%] flex ${i % 2 === 0 ? 'md:justify-end md:pr-10' : 'md:justify-start md:pl-10'}`}>
                      <span className="text-[11px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        {item.period}
                      </span>
                    </div>

                    {/* Name Label (Ultra-tight horizontal spacing) */}
                    <div className={`pl-12 md:pl-0 md:w-[50%] mt-2 md:mt-0 ${i % 2 === 0 ? 'md:pl-10' : 'md:text-right md:pr-10'}`}>
                      <h4 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight leading-none">{item.name}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">Correspondent</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values */}
      <section className="py-24 px-6 bg-slate-50 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: 'Vision', d: 'Foresight for generations.', i: Target },
              { t: 'Compassion', d: 'Focus on student welfare.', i: Heart },
              { t: 'Evolution', d: 'Modern yet traditional.', i: TrendingUp },
              { t: 'Honor', d: 'Transparent governance.', i: Shield },
            ].map((v, i) => (
              <div key={i} className="animate-item group p-8 bg-white rounded-[2rem] border border-slate-100 hover:border-blue-500/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <v.i className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold mb-2">{v.t}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}