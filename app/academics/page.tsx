'use client';

import { useRef } from 'react';
import { 
  BookMarked, Monitor, Palette, CheckSquare, Compass, 
  Users, Layout, GraduationCap, Atom, Beaker, Code, 
  Variable, BarChart3, PieChart, Briefcase, Calculator, 
  Sparkles, ArrowRight, BookOpen, Globe 
} from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AcademicsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // Hero Entrance
    gsap.from('.hero-content', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      stagger: 0.2
    });

    // Scroll Animations for Sections
    const sections = gsap.utils.toArray('.scroll-reveal');
    sections.forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

    // Floating animation for decorative icons
    gsap.to('.floating-icon', {
      y: -20,
      rotation: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 pt-15">
      
      {/* Hero Header */}
      <header className="relative min-h-[60vh] pb-30 flex items-center justify-center overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-[120px] opacity-50" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200 rounded-full blur-[120px] opacity-50" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <div className="hero-content inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 rounded-full border border-blue-100">
            <Sparkles className="w-4 h-4" /> Academic Excellence
          </div>
          <h1 className="hero-content text-6xl md:text-8xl font-light text-slate-900 mb-8 tracking-tighter">
            Pathways to <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Global Success</span>
          </h1>
          <p className="hero-content text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Nurturing critical thinkers and compassionate leaders through a curriculum that blends traditional values with modern innovation.
          </p>
        </div>
      </header>

      {/* Interactive Middle & Secondary School */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Middle School Card */}
          <div className="scroll-reveal group relative p-10 rounded-[2.5rem] bg-slate-50 border border-slate-200 transition-all duration-500 hover:shadow-2xl hover:bg-white overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl group-hover:bg-blue-200 transition-colors" />
            
            <div className="relative z-10">
              <div className="flex items-baseline gap-4 mb-10">
                <span className="text-7xl font-bold text-slate-200 group-hover:text-blue-100 transition-colors">VI-VIII</span>
                <h2 className="text-3xl font-bold text-slate-900">Middle School</h2>
              </div>
              
              <div className="space-y-6">
                <FeatureRow icon={BookMarked} title="Foundation Excellence" desc="Comprehensive curriculum covering 5 core subjects." />
                <FeatureRow icon={Monitor} title="Digital Literacy" desc="Compulsory hands-on computer education in modern labs." />
                <FeatureRow icon={Palette} title="Holistic Growth" desc="Integrated Arts, Crafts, and Moral Value education." />
              </div>
            </div>
          </div>

          {/* Secondary School Card */}
          <div className="scroll-reveal group relative p-10 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-20 floating-icon">
                <GraduationCap className="w-24 h-24 text-blue-400" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-baseline gap-4 mb-10">
                  <span className="text-7xl font-bold text-white/10">IX-X</span>
                  <h2 className="text-3xl font-bold">Secondary School</h2>
                </div>
                <p className="text-blue-400 font-medium mb-10 text-lg">State Board Mastery & Preparation</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <SecondaryTag icon={Users} text="Board Coaching" />
                  <SecondaryTag icon={Compass} text="Career Guidance" />
                  <SecondaryTag icon={CheckSquare} text="Regular Feedback" />
                  <SecondaryTag icon={Globe} text="Language Labs" />
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Higher Secondary: The "Deep Learning" Section */}
      <section className="bg-slate-950 py-32 px-6 relative overflow-hidden text-white">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="scroll-reveal text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-light mb-8">Higher Secondary <span className="font-bold text-blue-500">Streams</span></h2>
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-blue-400 text-sm font-bold tracking-tighter uppercase">
              <BookOpen className="w-4 h-4" /> Instruction: English Medium Only
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <StreamCard 
              group="GROUP I" 
              title="Mathematics & Science" 
              subjects={[
                { icon: Atom, name: "Physics" },
                { icon: Beaker, name: "Chemistry" },
                { icon: Code, name: "Computer Science" },
                { icon: Variable, name: "Mathematics" }
              ]}
              color="blue"
            />
            <StreamCard 
              group="GROUP II" 
              title="Commerce (Stream A)" 
              subjects={[
                { icon: BarChart3, name: "Accountancy" },
                { icon: PieChart, name: "Economics" },
                { icon: Briefcase, name: "Commerce" },
                { icon: Calculator, name: "Business Maths" }
              ]}
              color="emerald"
            />
            <StreamCard 
              group="GROUP III" 
              title="Commerce (Stream B)" 
              subjects={[
                { icon: BarChart3, name: "Accountancy" },
                { icon: PieChart, name: "Economics" },
                { icon: Briefcase, name: "Commerce" },
                { icon: Layout, name: "Comp. Applications" }
              ]}
              color="indigo"
            />
          </div>

          {/* Enhanced Supplementary Section */}
          <div className="scroll-reveal mt-32 pt-16 border-t border-white/10">
            <h4 className="text-center text-slate-500 uppercase tracking-[0.4em] text-xs font-bold mb-12">Supplementary Curriculum</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {['Environmental Science', 'Community Service', 'Value Education', 'Leadership Workshops'].map((item) => (
                <div key={item} className="px-8 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all cursor-default">
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="scroll-reveal text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Ready to Begin Your Journey?</h3>
          <p className="scroll-reveal text-lg text-slate-500 mb-12">Admissions are now open for the Academic Year 2026-27. Join our community of excellence.</p>
          <div className="scroll-reveal flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-12 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 transition-all flex items-center justify-center gap-3 group">
              Apply Online <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-12 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
              Download Prospectus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-components for cleaner code
function FeatureRow({ icon: Icon, title, desc }: any) {
  return (
    <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all">
      <div className="w-12 h-12 shrink-0 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function SecondaryTag({ icon: Icon, text }: any) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
      <Icon className="w-5 h-5 text-blue-400" />
      <span className="text-sm font-semibold">{text}</span>
    </div>
  );
}

function StreamCard({ group, title, subjects, color }: any) {
  const colorMap: any = {
    blue: "hover:border-blue-500/50 text-blue-400",
    emerald: "hover:border-emerald-500/50 text-emerald-400",
    indigo: "hover:border-indigo-500/50 text-indigo-400"
  };

  return (
    <div className={`scroll-reveal group bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] transition-all duration-500 ${colorMap[color]}`}>
      <h3 className="font-black text-xs tracking-widest mb-4 opacity-50">{group}</h3>
      <h4 className="text-2xl font-bold text-white mb-10 leading-tight">{title}</h4>
      <ul className="space-y-6">
        {subjects.map((s: any, i: number) => (
          <li key={i} className="flex items-center gap-4 group/item">
            <div className={`p-3 rounded-xl bg-white/5 group-hover/item:scale-110 transition-transform ${colorMap[color]}`}>
              <s.icon className="w-5 h-5" />
            </div>
            <span className="text-slate-300 font-medium group-hover/item:text-white transition-colors">{s.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}