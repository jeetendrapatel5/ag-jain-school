'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { Heart, Layers, Feather, Leaf, ArrowRight, ArrowUpRight, Sparkles, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // ========== ALL ANIMATIONS ARE SCROLL-TRIGGERED ==========

    // 1. HERO SECTION - Badge Animation (Scroll Triggered)
    gsap.fromTo('.hero-badge',
      { scale: 0, opacity: 0, rotate: -180 },
      { 
        scale: 1, 
        opacity: 1, 
        rotate: 0, 
        duration: 0.8, 
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 2. HERO - Text Reveal (Scroll Triggered)
    gsap.fromTo('.char-reveal', 
      { yPercent: 110, skewY: 7, opacity: 0 },
      { 
        yPercent: 0, 
        skewY: 0, 
        opacity: 1, 
        duration: 1.2, 
        stagger: 0.08, 
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 3. HERO - Subtitle (Scroll Triggered)
    gsap.fromTo('.hero-sub',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.hero-sub',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 4. HERO - Buttons (Scroll Triggered)
    gsap.fromTo('.hero-btn',
      { scale: 0.8, opacity: 0, y: 20 },
      { 
        scale: 1, 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.hero-btn',
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 5. HERO - Image Reveal (Scroll Triggered)
    gsap.fromTo(heroImageRef.current,
      { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.2, opacity: 0 },
      { 
        clipPath: 'inset(0% 0% 0% 0%)', 
        scale: 1, 
        opacity: 1,
        duration: 1.5, 
        ease: 'expo.out',
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 6. HERO - Floating Badge on Image (Scroll Triggered)
    gsap.fromTo('.hero-floating-badge',
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.hero-floating-badge',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 7. Floating Particles Animation (Continuous)
    gsap.to('.floating-particle', {
      y: 'random(-30, 30)',
      x: 'random(-20, 20)',
      duration: 'random(3, 6)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: {
        each: 0.2,
        from: 'random'
      }
    });

    // 8. Parallax on Hero Image (Scroll-based)
    gsap.to(heroImageRef.current, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    // 9. Legacy Box - Slide Up (Scroll Triggered)
    gsap.fromTo('.legacy-box',
      { y: 100, opacity: 0, rotateX: 15 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.legacy-box',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 10. Stats Wrapper - Slide In (Scroll Triggered)
    gsap.fromTo('.stats-wrapper',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.stats-wrapper',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 11. Individual Stat Cards - Stagger (Scroll Triggered)
    gsap.fromTo('.stat-card',
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: '.stats-wrapper',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 12. Section Headers - Each triggers independently (Scroll Triggered)
    gsap.utils.toArray('.section-header').forEach((header: any) => {
      gsap.fromTo(header,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // 13. Timeline Line Drawing (Scroll-based Scrub)
    gsap.fromTo('.timeline-track-fill',
      { height: '0%' },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '#timeline',
          start: 'top center',
          end: 'bottom center',
          scrub: 1.5
        }
      }
    );

    // 14. Timeline Events - Alternating Slide (Scroll Triggered)
    gsap.utils.toArray('.timeline-event').forEach((event: any, i) => {
      const isEven = i % 2 === 0;
      gsap.fromTo(event,
        { x: isEven ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: event,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // 15. Timeline Dots - Scale In (Scroll Triggered)
    gsap.utils.toArray('.timeline-dot').forEach((dot: any) => {
      gsap.fromTo(dot,
        { scale: 0 },
        {
          scale: 1,
          duration: 0.6,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: dot,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // 16. Timeline Years (Scroll Triggered)
    gsap.utils.toArray('.timeline-year').forEach((year: any) => {
      gsap.fromTo(year,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: year,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // 17. Value Cards - Stagger Animation (Scroll Triggered)
    gsap.utils.toArray('.value-card').forEach((card: any, i) => {
      gsap.fromTo(card,
        { y: 120, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // 18. Vegetarian Badge - Pop In (Scroll Triggered)
    gsap.fromTo('.veg-badge',
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: '.veg-badge',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 19. Stats Counter Animation (Scroll Triggered)
    const stats = gsap.utils.toArray('.stat-counter');
    stats.forEach((stat: any) => {
      const target = parseInt(stat.getAttribute('data-target'));
      ScrollTrigger.create({
        trigger: stat,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(stat, {
            innerText: target,
            duration: 2.5,
            snap: { innerText: 1 },
            ease: 'power2.out',
            onUpdate: function() {
              stat.innerText = Math.ceil(this.targets()[0].innerText) + (stat.getAttribute('data-suffix') || '');
            }
          });
        },
        once: true
      });
    });

    // 20. Background Elements Parallax (Scroll-based)
    gsap.to('.parallax-slow', {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom top',
        scrub: 2
      }
    });

    gsap.to('.parallax-medium', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#FAFAFA] min-h-screen text-slate-900 font-[family-name:var(--font-poppins)] selection:bg-[#0A192F] selection:text-[#C5A059] overflow-x-hidden">
      
      {/* Cinematic Grain Overlay - FIXED */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-multiply"
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
      </div>

      {/* Floating Particles (Decorative) */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="floating-particle absolute top-1/4 left-[10%] w-2 h-2 bg-[#C5A059]/20 rounded-full blur-sm"></div>
        <div className="floating-particle absolute top-1/3 right-[15%] w-3 h-3 bg-[#0A192F]/10 rounded-full blur-sm"></div>
        <div className="floating-particle absolute top-2/3 left-[20%] w-2 h-2 bg-[#C5A059]/15 rounded-full blur-sm"></div>
        <div className="floating-particle absolute bottom-1/4 right-[25%] w-3 h-3 bg-[#0A192F]/10 rounded-full blur-sm"></div>
        <div className="floating-particle absolute top-1/2 left-[70%] w-2 h-2 bg-[#C5A059]/20 rounded-full blur-sm"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <header id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="parallax-slow absolute top-[-20%] right-[-10%] w-[900px] h-[900px] bg-gradient-to-br from-[#E6E8EB] via-[#F5F5F5] to-transparent rounded-full blur-[140px] -z-10 opacity-60"></div>
        <div className="parallax-medium absolute bottom-[-10%] left-[-15%] w-[700px] h-[700px] bg-gradient-to-tr from-[#C5A059]/10 to-transparent rounded-full blur-[120px] -z-10"></div>
        
        <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          
          {/* Left: Typography */}
          <div className="lg:col-span-7 z-20">
            {/* Badge */}
            <div className="mb-6 flex items-center gap-3 overflow-hidden">   
                <span className="char-reveal block text-[#1363cc] font-bold tracking-[0.2em] text-xm uppercase">
                  Est. 1940
                </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-3xl md:text-6xl lg:text-[6rem] font-bold leading-[0.92] tracking-tight text-[#0A192F] mb-6 sm:mb-8">
              <div className="overflow-hidden pb-1 sm:pb-2">
                <span className="char-reveal block">Where</span>
              </div>
              <div className="overflow-hidden pb-1 sm:pb-2">
                <span className="char-reveal block bg-clip-text text-transparent bg-gradient-to-r from-[#0A192F] via-[#1a2f4a] to-[#0A192F]">Learning</span>
              </div>
              <div className="overflow-hidden pb-1 sm:pb-2">
                <span className="char-reveal block text-transparent bg-clip-text bg-gradient-to-r from-[#0a58ff] via-[#008cff] to-[#0787ff] animate-gradient">
                  Meets Legacy.
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <p className="hero-sub text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 font-light leading-relaxed max-w-xl mb-8 sm:mb-12">
              Empowering minds in the heart of Chennai. A legacy of excellence built on 
              <span className="font-semibold text-[#0061f1]"> character</span>, 
              <span className="font-semibold text-[#0061f1]"> innovation</span>, and 
              <span className="font-semibold text-[#007add]"> 85 years of trust</span>.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
              <Link href="/whyus" className="hero-btn group relative px-7 sm:px-9 py-5 sm:py-6 bg-[#096afd] text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#0A192F]/40 hover:-translate-y-2 hover:scale-105 text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#57aef5] to-[#46b5ff] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <span className="relative font-semibold flex items-center justify-center gap-3 text-sm sm:text-base">
                  Explore Our Story 
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-2 group-hover:scale-110" />
                </span>
              </Link>
              
              <Link href="/academics" className="hero-btn group relative px-7 sm:px-9 py-5 sm:py-6 bg-white text-[#0A192F] rounded-full border-2 border-[#0A192F]/10 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#C5A059] hover:scale-105 text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5] to-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <span className="relative font-semibold flex items-center justify-center gap-3 text-sm sm:text-base">
                  Our Academics
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5 relative pb-10 mt-12 lg:mt-0 rounded-3xl overflow-hidden">
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C5A059]/20 to-[#0A192F]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              {/* Image Container */}
              <div ref={heroImageRef} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
                <img 
                  src="/images/IMG-20260107-WA0003.jpg" 
                  alt="Students learning"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="hero-floating-badge absolute bottom-6 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 bg-transparent backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-xl transform transition-all duration-500 group-hover:translate-y-[-8px]">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1ea3fc] to-[#71d468] rounded-full flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-[#ececec]">85+ Years</div>
                      <div className="text-xs sm:text-sm text-white/90">of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* --- LEGACY SECTION --- */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="parallax-slow absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-[#FAFAFA] -z-10"></div>
        
        <div className="max-w-[1400px] mx-auto">
           {/* Legacy Content */}
           <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left: Legacy Box */}
              <div className="lg:col-span-5 relative">
                <div className="legacy-box relative p-8 sm:p-12 bg-gradient-to-br from-[#0A192F] to-[#1a2f4a] rounded-3xl shadow-2xl overflow-hidden">
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C5A059] rounded-full blur-3xl"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-white/60 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 sm:mb-6">Our Foundation</div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                      Built on Trust & Unity
                    </h3>
                    <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                      From humble beginnings to Chennai's most diverse institution.
                      <span className="block mt-4 text-[#C5A059] font-semibold text-lg sm:text-xl">
                        Unity in Diversity
                      </span>
                      <span className="text-white/70"> isn't just our principle it's our lived reality.</span>
                    </p>

                    {/* Decorative Line */}
                    <div className="h-1 w-90 sm:w-110 bg-gradient-to-r from-[#C5A059] to-transparent rounded-full mb-6 sm:mb-8"></div>

                    <div className="flex items-center gap-3 sm:gap-4 text-white/60">
                      <Leaf className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                      <span className="text-xs sm:text-sm">Nurturing Excellence Since 1940</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Stats */}
              <div className="lg:col-span-7">
                <div className="stats-wrapper grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                  {/* Stat 1 */}
                  <div className="stat-card group hover:text-white text-[#C5A059] text-center lg:text-left p-6 sm:p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:bg-blue-400 transition-all duration-500 hover:-translate-y-2">
                    <div className="relative inline-block">
                      <div className="stat-counter text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text" data-target="1940"><p>1940</p></div>
                      <div className="absolute -inset-2 bg-[#C5A059]/10 rounded-lg blur-xl -z-10 group-hover:bg-[#C5A059]/20 transition-all duration-500"></div>
                    </div>
                    <div className="text-xs sm:text-sm font-bold uppercase tracking-widest mt-3 sm:mt-4"><p className='text-slate-600'>Founded</p></div>
                  </div>

                  {/* Stat 2 */}
                  <div className="stat-card group text-center lg:text-left p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0A192F] to-[#1a2f4a] text-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">State</div>
                    <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/60">Board</div>
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/20">
                      <div className="text-xs text-white/70">Recognized Excellence</div>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="text-[#C5A059] hover:text-white hover:bg-blue-400 stat-card group text-center lg:text-left p-6 sm:p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative inline-block">
                      <div className="stat-counter text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text" data-target="100" data-suffix="%">0%</div>
                      <div className="absolute -inset-2 bg-[#C5A059]/10 rounded-lg blur-xl -z-10 group-hover:bg-[#C5A059]/20 transition-all duration-500"></div>
                    </div>
                    <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-600 mt-3 sm:mt-4">Results</div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- TIMELINE SECTION --- */}
      <section id="timeline" className="py-20 sm:py-32 px-4 sm:px-6 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="parallax-medium absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-l from-[#F5F5F5] to-transparent rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="section-header text-center mb-16 sm:mb-24">
            <div className="inline-block mb-4 px-4 sm:px-6 py-2 bg-[#c0e6f5] rounded-full">
              <span className="text-[#008deb] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">Evolution</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#0A192F] mt-3 mb-4">The Journey</h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto px-4">Milestones that shaped our legacy of excellence</p>
          </div>

          <div className="relative">
             {/* Center Line Track */}
            <div className="absolute left-[20px] sm:left-[28px] md:left-1/2 top-0 bottom-0 w-[3px] bg-slate-200 -ml-[1.5px] rounded-full">
              <div className="timeline-track-fill w-full bg-gradient-to-b from-[#C5A059] via-[#d4b068] to-[#C5A059] h-0 rounded-full shadow-lg shadow-[#C5A059]/50"></div>
            </div>

            {/* Event 1 - 1940 */}
            <div className="timeline-event relative grid md:grid-cols-2 gap-8 sm:gap-12 mb-20 sm:mb-32 items-center group">
               {/* Year (Desktop) */}
               <div className="hidden md:block md:text-right md:pr-16">
                  <h3 className="timeline-year text-6xl sm:text-7xl md:text-8xl font-bold text-slate-100 group-hover:text-[#0A192F] transition-all duration-700 group-hover:scale-110 transform origin-right">1940</h3>
               </div>
               
               {/* Dot */}
               <div className="timeline-dot absolute left-[20px] sm:left-[28px] md:left-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-white border-4 border-[#0A192F] rounded-full z-10 -translate-x-1/2 shadow-xl group-hover:scale-150 group-hover:shadow-2xl group-hover:shadow-[#0A192F]/30 transition-all duration-500">
                 <div className="absolute inset-0 bg-[#0A192F] rounded-full animate-ping opacity-20"></div>
               </div>
               
               {/* Content */}
               <div className="pl-12 sm:pl-16 md:pl-16">
                  {/* Year (Mobile) */}
                  <h3 className="timeline-year md:hidden text-5xl sm:text-6xl font-bold text-slate-200 mb-4 group-hover:text-[#0A192F] transition-colors duration-700">1940</h3>
                  
                  <div className="bg-gradient-to-br from-white to-slate-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-slate-100">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A192F] rounded-full flex items-center justify-center mb-4">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#C5A059]" />
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-[#0A192F] mb-3 sm:mb-4">The Beginning</h4>
                    <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                      Founded by visionary philanthropists <span className="font-semibold text-[#0A192F]">Shri Amoluckchand Galada</span> and <span className="font-semibold text-[#0A192F]">Shri Inderchand Galada</span> with a mission to serve and empower.
                    </p>
                  </div>
               </div>
            </div>

            {/* Event 2 - 1992 */}
            <div className="timeline-event relative grid md:grid-cols-2 gap-8 sm:gap-12 mb-20 sm:mb-32 items-center group">
               {/* Content (Order 1 on mobile, switches on desktop) */}
               <div className="pl-12 sm:pl-16 md:pl-0 md:pr-16 md:text-right order-2 md:order-1">
                  {/* Year (Mobile) */}
                  <h3 className="timeline-year md:hidden text-5xl sm:text-6xl font-bold text-slate-200 mb-4 group-hover:text-[#C5A059] transition-colors duration-700">1992</h3>
                  
                  <div className="bg-gradient-to-br from-[#0A192F] to-[#1a2f4a] p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 text-white">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C5A059] rounded-full flex items-center justify-center mb-4 md:ml-auto">
                      <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Digital Pioneer</h4>
                    <p className="text-white/80 leading-relaxed text-base sm:text-lg">
                      We introduced <span className="font-semibold text-[#C5A059]">Computer Education</span>, becoming one of the first schools in the region to embrace the digital future.
                    </p>
                  </div>
               </div>
               
               {/* Dot */}
               <div className="timeline-dot absolute left-[20px] sm:left-[28px] md:left-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-white border-4 border-[#C5A059] rounded-full z-10 -translate-x-1/2 shadow-xl group-hover:scale-150 group-hover:shadow-2xl group-hover:shadow-[#C5A059]/30 transition-all duration-500 order-1 md:order-2">
                 <div className="absolute inset-0 bg-[#C5A059] rounded-full animate-ping opacity-20"></div>
               </div>
               
               {/* Year (Desktop) */}
               <div className="hidden md:block order-3 pl-16">
                 <h3 className="timeline-year text-6xl sm:text-7xl md:text-8xl font-bold text-slate-100 group-hover:text-[#1b2c52] transition-all duration-700 group-hover:scale-110 transform origin-left">1992</h3>
               </div>
            </div>

             {/* Event 3 - 2025 */}
             <div className="timeline-event relative grid md:grid-cols-2 gap-8 sm:gap-12 items-center group">
               {/* Year (Desktop) */}
               <div className="hidden md:block md:text-right md:pr-16">
                  <h3 className="timeline-year text-6xl sm:text-7xl md:text-8xl font-bold text-slate-100 group-hover:text-[#0A192F] transition-all duration-700 group-hover:scale-110 transform origin-right">2025</h3>
               </div>
               
               {/* Dot */}
               <div className="timeline-dot absolute left-[20px] sm:left-[28px] md:left-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[#0A192F] to-[#1a2f4a] border-4 border-[#C5A059] rounded-full z-10 -translate-x-1/2 shadow-[0_0_0_12px_rgba(197,160,89,0.1)] group-hover:shadow-[0_0_0_20px_rgba(197,160,89,0.2)] transition-all duration-500">
                 <div className="absolute inset-0 bg-[#C5A059] rounded-full animate-pulse"></div>
               </div>
               
               {/* Content */}
               <div className="pl-12 sm:pl-16 md:pl-16">
                  {/* Year (Mobile) */}
                  <h3 className="timeline-year md:hidden text-5xl sm:text-6xl font-bold text-slate-200 mb-4 group-hover:text-[#0A192F] transition-colors duration-700">2025</h3>
                  
                  <div className="bg-gradient-to-br from-[#006fd6] via-[#0071ce] to-[#0089d8] p-8 sm:p-10 rounded-3xl text-white shadow-2xl hover:shadow-[#C5A059]/30 hover:-translate-y-3 transition-all duration-700 relative overflow-hidden group-hover:scale-105">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                        <Star className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white" />
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-bold mb-4">Excellence Today</h4>
                      <p className="text-white/90 leading-relaxed text-base sm:text-lg mb-6">
                        Celebrating <span className="font-bold text-xl sm:text-2xl">85 years</span> of transforming lives. Creating a safe, welcoming environment that nurtures excellence and character.
                      </p>
                      <div className="flex items-center gap-3 text-white/80 text-xs sm:text-sm">
                        <div className="h-px flex-1 bg-white/30"></div>
                        <span className="font-semibold">The Journey Continues</span>
                        <div className="h-px flex-1 bg-white/30"></div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#FAFAFA] to-white relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="parallax-slow absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-l from-slate-100 to-transparent rounded-full blur-[120px]"></div>
        <div className="parallax-medium absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-[#C5A059]/5 to-transparent rounded-full blur-[100px]"></div>

        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center justify-center">
          {/* Section Header */}
          <div className="section-header flex flex-col justify-center items-center text-center mb-16 sm:mb-20 gap-8">
             <div className="max-w-2xl">
                <div className="inline-block mb-4 px-4 sm:px-6 py-2 bg-[#dcf0f8] rounded-full">
                  <span className="text-[#249ae9] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">Philosophy</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#0A192F] leading-tight">
                  Values That <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0088e2] to-[#33a7eb]">Guide Us</span>
                </h2>
             </div>
             <div className="mt-8 md:mt-0 max-w-sm">
                <p className="text-slate-600 text-center sm:text-lg  leading-relaxed">Timeless principles that define our character and shape extraordinary students.</p>
             </div>
          </div>

          {/* Value Cards Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
             {/* Card 1 - Ahimsa */}
             <div className="value-card group p-8 sm:p-10 lg:p-12 bg-white rounded-[2rem] sm:rounded-[2.5rem] hover:bg-gradient-to-br hover:from-[#0A192F] hover:to-[#1a2f4a] transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-3 border border-slate-100 hover:border-transparent relative overflow-hidden">
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0a64b8] to-[#0c8cd6] rounded-2xl flex items-center justify-center text-white mb-6 sm:mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                     <Heart className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] group-hover:text-white mb-2 sm:mb-3 transition-colors duration-500">Ahimsa</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#237fd4] mb-4 sm:mb-6 transition-colors duration-500">Non-Violence</p>
                  <p className="text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500 text-sm sm:text-base">
                    Compassion for all living beings. Kindness in thought, action, and word for a harmonious world.
                  </p>
                </div>
             </div>

             {/* Card 2 - Anekant */}
             <div className="value-card group p-8 sm:p-10 lg:p-12 bg-white rounded-[2rem] sm:rounded-[2.5rem] hover:bg-gradient-to-br hover:from-[#0A192F] hover:to-[#1a2f4a] transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-3 border border-slate-100 hover:border-transparent relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0a64b8] to-[#0c8cd6] rounded-2xl flex items-center justify-center text-white mb-6 sm:mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                     <Layers className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] group-hover:text-white mb-2 sm:mb-3 transition-colors duration-500">Anekant</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#237fd4] mb-4 sm:mb-6 transition-colors duration-500">Pluralism</p>
                  <p className="text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500 text-sm sm:text-base">
                    Respecting diverse perspectives and valuing every individual's contribution to the collective journey.
                  </p>
                </div>
             </div>

             {/* Card 3 - Aparigraha */}
             <div className="value-card group p-8 sm:p-10 lg:p-12 bg-white rounded-[2rem] sm:rounded-[2.5rem] hover:bg-gradient-to-br hover:from-[#0A192F] hover:to-[#1a2f4a] transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-3 border border-slate-100 hover:border-transparent relative overflow-hidden sm:col-span-2 md:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0a64b8] to-[#0c8cd6] rounded-2xl flex items-center justify-center text-white mb-6 sm:mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                     <Feather className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] group-hover:text-white mb-2 sm:mb-3 transition-colors duration-500">Aparigraha</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#237fd4] mb-4 sm:mb-6 transition-colors duration-500">Non-Possession</p>
                  <p className="text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500 text-sm sm:text-base">
                    Simplicity and contentment. Finding joy in being, not having. Freedom from material attachments.
                  </p>
                </div>
             </div>
          </div>

          {/* Vegetarian Badge */}
          <div className="veg-badge value-card p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] border-2 border-green-200 bg-gradient-to-br from-green-50 via-white to-green-50/30 flex flex-col sm:flex-row items-start gap-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
             {/* Animated Background */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
             
             <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6 w-full">
               <div className="p-4 sm:p-5 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl text-white shadow-lg shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                 <Leaf className="w-6 h-6 sm:w-8 sm:h-8" />
               </div>
               <div className="flex-1">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#0A192F] mb-2">Vegetarian Campus</h4>
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                    Strictly vegetarian food is permitted on our campus, fostering respect for all living beings and promoting a healthy, sustainable lifestyle.
                  </p>
               </div>
               <div className="hidden lg:block w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border-4 border-green-500 flex items-center justify-center">
                   <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full"></div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for Animations - FIXED */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>

    </div>
  );
}
