'use client';

import { useRef, useState } from 'react';
import { 
  Monitor, Cpu, FlaskConical, BookOpen, ShieldCheck, 
  HeartPulse, CheckCircle2, Wifi, ArrowRight, MousePointer2 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import LiquidEther from '@/components/LiquidEther'; 

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AmenitiesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Logic Helpers
  const handleTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (dampened)
    const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.02,
      duration: 0.5,
      ease: 'power2.out',
      transformPerspective: 1000,
      transformOrigin: 'center'
    });
    
    // Move the inner glow
    gsap.to(card.querySelector('.glow-effect'), {
      x: x,
      y: y,
      opacity: 0.4,
      duration: 0.5
    });
  };

  const handleTiltLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)'
    });
    gsap.to(e.currentTarget.querySelector('.glow-effect'), {
      opacity: 0,
      duration: 0.5
    });
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Hero Text Word Stagger
    // Note: We manually split text in the JSX for this to work without SplitText plugin
    tl.from('.hero-word', {
      y: 100,
      opacity: 0,
      rotation: 5,
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out'
    })
    .from('.hero-badge', { scale: 0, opacity: 0, ease: 'back.out(1.7)' }, '-=0.8')
    .from('.hero-desc', { opacity: 0, y: 20 }, '-=0.5');

    // 2. Continuous Floating Backgrounds (Science Section)
    gsap.to('.floating-blob', {
      y: -30,
      rotation: 10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // 3. Icon Spring Animation on Scroll
    gsap.utils.toArray('.spring-icon').forEach((icon: any) => {
      gsap.from(icon, {
        scale: 0,
        rotation: -45,
        opacity: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)',
        scrollTrigger: {
          trigger: icon,
          start: 'top 85%',
        }
      });
    });

    // 4. List Items Cascade
    gsap.utils.toArray('.list-stagger-group').forEach((group: any) => {
      gsap.from(group.querySelectorAll('li'), {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: group,
          start: 'top 90%',
        }
      });
    });

    // 5. Digital UI Simulation (CTA Section)
    // Animate bars growing
    gsap.to('.ui-bar', {
      width: '100%',
      duration: 2,
      stagger: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
    
    // Animate Pulse
    gsap.to('.ui-pulse', {
      scale: 1.5,
      opacity: 0,
      duration: 1.5,
      repeat: -1,
      ease: 'power1.out'
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-slate-900 text-white min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-70">
           {/* Your Liquid Background */}
           <LiquidEther
            colors={['#4338ca', '#6366f1', '#a855f7']}
            mouseForce={40}
            cursorSize={80}
            isViscous
            viscous={20}
            iterationsViscous={20}
            resolution={0.4}
            autoDemo
            autoSpeed={0.3}
            color0="#0f172a"
            color1="#312e81"
            color2="#4f46e5"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center perspective-[1000px] pt-10">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tight overflow-hidden p-2">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <span className="hero-word inline-block">Where</span>
              <span className="hero-word inline-block text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">Excellence</span>
              <span className="hero-word inline-block">Meets</span>
              <span className="hero-word inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Innovation</span>
            </div>
          </h1>
          
          <p className="hero-desc text-lg md:text-xl text-slate-300/80 max-w-2xl mx-auto font-light leading-relaxed">
            Crafting an environment where tradition blends seamlessly with cutting-edge technology.
          </p>

          <div className="mt-12 opacity-50 animate-bounce">
             <MousePointer2 className="w-6 h-6 mx-auto text-white/50" />
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-20">

        {/* Feature Cards with 3D Tilt */}
        <div className="grid md:grid-cols-2 gap-10 mb-32 perspective-[2000px]">
          
          {/* Card 1 */}
          <div 
            onMouseMove={handleTiltMove}
            onMouseLeave={handleTiltLeave}
            className="relative bg-white/90 backdrop-blur-xl p-10 rounded-[2rem] shadow-xl border border-white/40 group overflow-hidden"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Glow Element */}
            <div className="glow-effect absolute w-[300px] h-[300px] bg-blue-500/20 blur-[80px] rounded-full pointer-events-none -top-20 -left-20 opacity-0 mix-blend-multiply" />
            
            <div className="relative z-10 translate-z-[20px]">
              <div className="spring-icon w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
                <Monitor className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-800">Smart Learning</h3>
              <ul className="list-stagger-group space-y-4 text-slate-600">
                 {/* Reused list Logic */}
                 {["Air-conditioned smart classrooms", "Interactive touch-screen boards", "Multimedia projectors"].map((t, i) => (
                    <li key={i} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500"/>{t}</li>
                 ))}
              </ul>
            </div>
          </div>

           {/* Card 2 */}
           <div 
            onMouseMove={handleTiltMove}
            onMouseLeave={handleTiltLeave}
            className="relative bg-white/90 backdrop-blur-xl p-10 rounded-[2rem] shadow-xl border border-white/40 group overflow-hidden"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="glow-effect absolute w-[300px] h-[300px] bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none opacity-0 mix-blend-multiply" />
            
            <div className="relative z-10 translate-z-[20px]">
              <div className="spring-icon w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-colors duration-500">
                <Cpu className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-800">Advanced Computing</h3>
              <ul className="list-stagger-group space-y-4 text-slate-600">
                 {["Fully AC with Power Backup", "High-speed Fiber Internet", "Modern Development Tools"].map((t, i) => (
                    <li key={i} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500"/>{t}</li>
                 ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Floating Science Section */}
        <div className="relative bg-white rounded-[2.5rem] p-10 md:p-20 mb-32 border border-slate-100 shadow-xl overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="floating-blob absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-50/80 rounded-full blur-3xl pointer-events-none mix-blend-multiply"></div>
          <div className="floating-blob absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-teal-50/80 rounded-full blur-3xl pointer-events-none mix-blend-multiply" style={{ animationDelay: '-2s' }}></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3">
              <div className="spring-icon w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8">
                <FlaskConical className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                Experimental <br/><span className="text-emerald-600">Excellence</span>
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                State-of-the-art laboratories designed to spark curiosity and facilitate hands-on experimentation.
              </p>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
               {[
                 { t: 'Physics', c: 'blue' }, { t: 'Chemistry', c: 'emerald' }, { t: 'Biology', c: 'yellow' }
               ].map((item, idx) => (
                 <div key={idx} className={`group bg-white p-6 rounded-2xl border border-slate-100 hover:border-${item.c}-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}>
                    <div className={`w-3 h-3 rounded-full bg-${item.c}-500 mb-4 group-hover:scale-150 transition-transform`}></div>
                    <h4 className="font-bold text-xl text-slate-800">{item.t}</h4>
                    <p className="text-xs text-slate-400 mt-2">Laboratory</p>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Facilities Grid with Hover Pop */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: BookOpen, color: 'amber', title: 'Library' },
            { icon: ShieldCheck, color: 'rose', title: 'Security' },
            { icon: HeartPulse, color: 'cyan', title: 'Health' }
          ].map((item, i) => (
            <div key={i} className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 cursor-pointer">
              <div className={`spring-icon w-14 h-14 bg-${item.color}-50 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                <item.icon className={`w-7 h-7 text-${item.color}-600`} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-800 group-hover:translate-x-2 transition-transform">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Premium facilities designed for the comprehensive development and safety of every student.
              </p>
            </div>
          ))}
        </div>

        {/* Animated Digital CTA */}
        <div className="relative overflow-hidden bg-slate-900 rounded-[2.5rem] text-white shadow-xl">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row">
             <div className="p-12 md:p-20 md:w-2/3">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="ui-pulse absolute inset-0 bg-blue-500 rounded-full"></div>
                    <div className="relative z-10 p-2 bg-blue-600 rounded-full">
                      <Wifi className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <span className="text-blue-300 font-bold tracking-wider text-xs uppercase">Live Integration</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Seamless Digital Ecosystem</h2>
                <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2">
                  Parent Portal <ArrowRight className="w-4 h-4"/>
                </button>
             </div>

             {/* Dynamic UI Simulation */}
             <div className="md:w-1/3 bg-slate-800/50 border-l border-white/5 p-12 flex flex-col justify-center gap-6 backdrop-blur-sm">
                {[1, 2, 3].map((bar) => (
                  <div key={bar} className="space-y-2">
                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                      <span>SYNCING_DB_0{bar}</span>
                      <span className="text-emerald-400">OK</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div className="ui-bar h-full bg-blue-500 rounded-full w-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    </div>
                  </div>
                ))}
                
                <div className="mt-4 p-4 bg-slate-900 rounded-lg border border-slate-700/50">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-mono text-emerald-500">SYSTEM_ONLINE</span>
                  </div>
                </div>
             </div>
           </div>
        </div>

      </main>
    </div>
  );
}