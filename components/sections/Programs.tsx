'use client';

import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Palette, Atom, ArrowUpRight, Sparkles, Star } from 'lucide-react';

export default function FlagshipPrograms() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    script.async = true;
    
    script.onload = () => {
      const gsap = window.gsap;
      
      // Enhanced entrance sequence
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.from(badgeRef.current, {
        opacity: 0,
        scale: 0.5,
        y: -30,
        duration: 0.8,
        ease: 'back.out(1.7)'
      })
      .from(titleRef.current?.children || [], {
        opacity: 0,
        y: 80,
        x: -20,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power4.out'
      }, '-=0.4')
      .from(subtitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.8')
      .from(statsRef.current?.children || [], {
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.7)'
      }, '-=0.6');

      // Enhanced cards entrance with 3D effect
      gsap.from(cardsRef.current.filter(Boolean), {
        opacity: 0,
        y: 120,
        scale: 0.85,
        rotateX: 25,
        rotateY: 10,
        duration: 1.4,
        stagger: {
          amount: 0.8,
          from: 'start'
        },
        ease: 'power4.out',
        delay: 0.6,
        transformPerspective: 1200
      });

      // CTA animation
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 1.2,
        ease: 'power3.out',
        delay: 1.4
      });

      // Floating animation for badge
      gsap.to(badgeRef.current, {
        y: -8,
        rotation: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Subtle parallax on scroll - NO FADE OUT
      const handleGSAPScroll = () => {
        const scrolled = window.scrollY;
        
        // Only slight movement, no opacity change
        gsap.to(headerRef.current, {
          y: scrolled * 0.15,
          duration: 0.5,
          ease: 'power2.out'
        });

        // Subtle parallax for cards
        cardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: scrolled * (0.05 + i * 0.02),
              duration: 0.6,
              ease: 'power2.out'
            });
          }
        });
      };

      window.addEventListener('scroll', handleGSAPScroll);
      return () => window.removeEventListener('scroll', handleGSAPScroll);
    };

    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleCardHover = (program, isEntering) => {
    setHoveredCard(isEntering ? program.id : null);
    
    if (window.gsap && cardsRef.current[program.id]) {
      const card = cardsRef.current[program.id];
      const icon = card.querySelector('.icon-container');
      const arrow = card.querySelector('.arrow-icon');
      const accentLine = card.querySelector('.accent-line');
      const content = card.querySelector('.card-content');
      const badge = card.querySelector('.stats-badge');
      const glow = card.querySelector('.glow-effect');
      const title = card.querySelector('.card-title');
      
      if (isEntering) {
        window.gsap.to(card, {
          y: -16,
          scale: 1.03,
          duration: 0.7,
          ease: 'power2.out'
        });
        
        window.gsap.to(icon, {
          scale: 1.2,
          rotation: 12,
          duration: 0.7,
          ease: 'elastic.out(1, 0.5)'
        });

        window.gsap.to(arrow, {
          x: 8,
          y: -8,
          rotation: 10,
          scale: 1.1,
          duration: 0.5,
          ease: 'power2.out'
        });

        window.gsap.to(accentLine, {
          scaleX: 1,
          duration: 0.9,
          ease: 'power2.out'
        });

        window.gsap.to(content, {
          y: -6,
          duration: 0.6,
          ease: 'power2.out'
        });

        window.gsap.to(badge, {
          scale: 1.15,
          y: -2,
          duration: 0.5,
          ease: 'back.out(2)'
        });

        window.gsap.to(glow, {
          opacity: 0.6,
          scale: 1.2,
          duration: 0.6,
          ease: 'power2.out'
        });

        window.gsap.to(title, {
          scale: 1.02,
          duration: 0.4,
          ease: 'power2.out'
        });
      } else {
        window.gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power2.out'
        });
        
        window.gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.7,
          ease: 'power2.out'
        });

        window.gsap.to(arrow, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out'
        });

        window.gsap.to(accentLine, {
          scaleX: 0,
          duration: 0.7,
          ease: 'power2.out'
        });

        window.gsap.to(content, {
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        });

        window.gsap.to(badge, {
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        });

        window.gsap.to(glow, {
          opacity: 0.2,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out'
        });

        window.gsap.to(title, {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        });
      }
    }
  };

  const programs = [
    {
      id: 'commerce',
      title: 'Commerce',
      icon: TrendingUp,
      description: 'Master the art of business strategy and financial innovation through comprehensive training in accounting, finance, and entrepreneurship.',
      stats: '12 Courses',
      students: '2.4k Students',
      accent: 'bg-emerald-500',
      accentGradient: 'from-emerald-400 via-emerald-500 to-teal-500',
      hoverBg: 'group-hover:bg-emerald-50/40',
      glowColor: 'shadow-emerald-500/50'
    },
    {
      id: 'arts',
      title: 'Arts',
      icon: Palette,
      description: 'Unleash creative potential in an environment celebrating imagination, from visual arts to performing arts and digital media.',
      stats: '18 Courses',
      students: '3.2k Students',
      accent: 'bg-violet-500',
      accentGradient: 'from-violet-400 via-violet-500 to-purple-500',
      hoverBg: 'group-hover:bg-violet-50/40',
      glowColor: 'shadow-violet-500/50'
    },
    {
      id: 'science',
      title: 'Science',
      icon: Atom,
      description: 'Explore scientific frontiers combining theoretical knowledge with hands-on research to solve tomorrow\'s challenges.',
      stats: '15 Courses',
      students: '2.8k Students',
      accent: 'bg-blue-500',
      accentGradient: 'from-blue-400 via-blue-500 to-indigo-500',
      hoverBg: 'group-hover:bg-blue-50/40',
      glowColor: 'shadow-blue-500/50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden relative">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            top: '5%',
            left: '0%',
            transform: `translate(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) * 0.03}px, ${(mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) * 0.03}px)`
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            bottom: '0%',
            right: '0%',
            transform: `translate(${-(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) * 0.04}px, ${-(mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) * 0.04}px)`
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            top: '40%',
            left: '50%',
            transform: `translate(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) * 0.025}px, ${(mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) * 0.025}px)`
          }}
        />
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 ">
        {/* Header - Always Visible */}
        <div ref={headerRef} className="max-w-4xl mb-24 sm:mb-32">
          <div 
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-10 text-xs font-semibold tracking-wider uppercase text-slate-700 bg-white/90 backdrop-blur-md border border-slate-300/50 rounded-full shadow-lg shadow-slate-200/50"
          >
            <Sparkles className="w-4 h-4 text-violet-500" />
            <span>Flagship Programs</span>
          </div>
          
          <div ref={titleRef} className="mb-10">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extralight text-slate-900 tracking-tight leading-none">
              Transform Your
            </h1>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-semibold bg-gradient-to-r from-slate-900 via-violet-900 to-slate-900 bg-clip-text text-transparent tracking-tight leading-none mt-2">
              Future
            </h1>
          </div>
          
          <p 
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mb-8"
          >
            Discover programs tailored to sculpt your future, from cutting-edge technology to enriching humanities.
          </p>

          {/* Stats */}
          <div ref={statsRef} className="flex flex-wrap gap-8 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Star className="w-6 h-6 text-white" fill="white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">8,000+</div>
                <div className="text-sm text-slate-600">Active Students</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">95%</div>
                <div className="text-sm text-slate-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Grid - Row on Large, Column on Small */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            
            return (
              <div
                key={program.id}
                ref={el => cardsRef.current[program.id] = el}
                className="group cursor-pointer lg:flex-1"
                onMouseEnter={() => handleCardHover(program, true)}
                onMouseLeave={() => handleCardHover(program, false)}
              >
                <div className={`relative h-full bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-2xl transition-all duration-700 hover:border-slate-300 hover:shadow-2xl ${program.glowColor} ${program.hoverBg} overflow-hidden`}>
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.accentGradient} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-700`} />
                  
                  {/* Accent line with gradient */}
                  <div className={`accent-line absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${program.accentGradient} transform origin-left scale-x-0 shadow-lg`} />
                  
                  <div className="relative p-12 sm:p-14">
                    {/* Icon */}
                    <div className="mb-14 relative">
                      <div className={`glow-effect absolute inset-0 ${program.accent} opacity-20 blur-2xl scale-110 transition-all duration-500`} />
                      
                      <div className={`icon-container relative w-20 h-20 bg-gradient-to-br ${program.accentGradient} rounded-2xl flex items-center justify-center shadow-xl ${program.glowColor} transition-all duration-500`}>
                        <Icon 
                          className="w-10 h-10 text-white" 
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="card-content space-y-8">
                      <div>
                        <h3 className="card-title text-4xl font-light text-slate-900 mb-4 tracking-tight">
                          {program.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <div className={`stats-badge inline-block px-4 py-1.5 text-xs font-bold bg-gradient-to-r ${program.accentGradient} text-white rounded-full shadow-lg`}>
                            {program.stats}
                          </div>
                          <div className="inline-block px-4 py-1.5 text-xs font-semibold text-slate-600 bg-slate-100 rounded-full">
                            {program.students}
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 text-lg leading-relaxed font-light">
                        {program.description}
                      </p>

                      {/* CTA */}
                      <div className="pt-4">
                        <div className="inline-flex items-center gap-3 text-base font-bold text-slate-900 group-hover:text-violet-700 transition-colors duration-300">
                          <span>Explore Program</span>
                          <div className={`arrow-icon w-10 h-10 bg-gradient-to-br ${program.accentGradient} rounded-full flex items-center justify-center shadow-lg ${program.glowColor}`}>
                            <ArrowUpRight 
                              className="w-5 h-5 text-white" 
                              strokeWidth={2.5}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA */}
        <div ref={ctaRef} className="mt-32 sm:mt-40">
          <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-12 sm:p-16 rounded-3xl shadow-2xl shadow-slate-900/50 overflow-hidden">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-blue-600/20 opacity-50" />
            
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="text-4xl sm:text-5xl font-light text-white mb-4 tracking-tight">
                  Ready to begin?
                </h3>
                <p className="text-xl text-slate-300 font-light leading-relaxed">
                  Join thousands transforming their futures with our world-class programs
                </p>
              </div>
              <button className="group px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-xl transition-all duration-300 hover:bg-slate-50 hover:shadow-2xl hover:shadow-white/30 flex items-center gap-3 hover:scale-105 active:scale-95">
                <span>Get Started</span>
                <ArrowUpRight 
                  className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                  strokeWidth={2.5}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}