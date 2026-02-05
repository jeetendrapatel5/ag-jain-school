'use client';
import { useRef, useState, useEffect } from 'react';
import {
  Users, Heart, Trophy, Palette, Music, BookOpen, 
  Sparkles, Globe, Calendar, Star, ArrowRight,
  Zap, Shield, Brain, Sun, Moon, Compass, Award
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LifeAtAGJS() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({
    students: 0,
    states: 0,
    awards: 0,
    years: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  const daySchedule = [
    { time: '8:45 AM', icon: Sun, title: 'Morning Assembly', desc: 'Jain prayers, meditation, and inspiring daily messages' },
    { time: '9:00 AM', icon: BookOpen, title: 'Academic Sessions', desc: 'Interactive learning with experienced educators' },
    { time: '12:30 PM', icon: Users, title: 'Lunch & Recreation', desc: 'Vegetarian meals and joyful social bonding' },
    { time: '2:00 PM', icon: Trophy, title: 'Activities Hour', desc: 'Sports, arts, and character development programs' },
    { time: '3:30 PM', icon: Brain, title: 'Study & Enrichment', desc: 'Homework support, clubs, and skill development' },
  ];

  const activities = [
    { id: 'ncc', icon: Shield, title: 'NCC', desc: 'Building discipline, leadership & patriotism through rigorous training', stats: '100+ Cadets' },
    { id: 'nss', icon: Heart, title: 'NSS', desc: 'Community service & social responsibility - Not Me But You', stats: '150+ Volunteers' },
    { id: 'sports', icon: Trophy, title: 'Sports Excellence', desc: 'Cricket, volleyball, chess, karate & athletic training', stats: '10+ Disciplines' },
    { id: 'arts', icon: Palette, title: 'Creative Arts', desc: 'Visual arts, crafts, and creative expression workshops', stats: '8+ Art Forms' },
    { id: 'music', icon: Music, title: 'Music & Dance', desc: 'Classical & contemporary performances and cultural programs', stats: '5+ Dance Forms' },
    { id: 'tech', icon: Zap, title: 'Tech Innovation', desc: 'Coding, robotics, AI workshops & digital literacy', stats: '200+ Members' },
    { id: 'scouts', icon: Compass, title: 'Scouts & Guides', desc: 'Character building through outdoor adventure & teamwork', stats: 'VI-VIII Students' },
    { id: 'jrc', icon: Award, title: 'Junior Red Cross', desc: 'First aid training, humanitarian service & empathy', stats: 'IX-X Classes' },
  ];

  const values = [
    { icon: '', title: 'Ahimsa', desc: 'Non-violence & compassion for all living beings' },
    { icon: '', title: 'A Miniature India', desc: 'Unity in diversity - students from 28+ states' },
    { icon: '', title: 'Excellence', desc: 'Academic brilliance with 85 years of proven results' },
    { icon: '', title: 'Values First', desc: 'Ethics, integrity, respect & character at our core' },
  ];

  const testimonials = [
    { name: 'Rahul Kumar Mali', class: 'XII (Topper)', quote: 'AG Jain taught me that success is not just about grades, but about character, compassion, and the courage to dream big.', avatar: '' },
    { name: 'Priya Sharma', class: 'X-B', quote: 'The teachers here are like family. They believe in us, nurture our talents, and inspire us to become the best versions of ourselves.', avatar: '' },
    { name: 'Arjun Patel', class: 'XI-C', quote: 'From coding competitions to cricket championships, this school has helped me discover talents and passions I never knew existed within me.', avatar: '' },
  ];

  useGSAP(() => {
    // 1. HERO - Enhanced Visibility (using fromTo to prevent elements staying invisible)
    gsap.fromTo('.hero-content > *', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.3 }
    );

    // 2. TYPESCRIPT FIX: Use explicit Casting for toArray
    const sections = gsap.utils.toArray<HTMLElement>('.fade-section');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out'
        }
      );
    });

    const timelineItems = gsap.utils.toArray<HTMLElement>('.timeline-item');
    timelineItems.forEach((item, i) => {
      gsap.fromTo(item,
        { x: i % 2 === 0 ? -30 : 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out'
        }
      );
    });

    const activityCards = gsap.utils.toArray<HTMLElement>('.activity-card');
    activityCards.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: i * 0.05,
          ease: 'power2.out'
        }
      );
    });

    const valueCards = gsap.utils.toArray<HTMLElement>('.value-card');
    valueCards.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: i * 0.08,
          ease: 'power2.out'
        }
      );
    });

  }, { scope: containerRef });

  // Counter animation logic
  useEffect(() => {
    if (!statsRef.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        const targets = { students: 1000, states: 28, awards: 42, years: 85 };
        const duration = 2000;
        const fps = 60;
        const totalFrames = (duration / 1000) * fps;
        let frame = 0;

        const interval = setInterval(() => {
          frame++;
          const progress = 1 - Math.pow(1 - (frame / totalFrames), 3);
          setCounters({
            students: Math.floor(targets.students * progress),
            states: Math.floor(targets.states * progress),
            awards: Math.floor(targets.awards * progress),
            years: Math.floor(targets.years * progress)
          });
          if (frame >= totalFrames) clearInterval(interval);
        }, 1000 / fps);
      }
    }, { threshold: 0.5 });

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div ref={containerRef} className="bg-white min-h-screen overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="hero-content relative z-10 max-w-6xl mx-auto px-6 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full mb-8">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-white/90 font-medium text-sm">Life at AG Jain School</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tighter leading-tight">
            Where Every Day is
            <br />
            <span className="text-cyan-300">an Adventure</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Experience a vibrant community where <span className="text-white font-bold">1,000+ students</span> unite to learn, grow, and create lasting memories.
          </p>

          <div ref={statsRef} className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            {[
              { value: counters.students, label: 'Students', suffix: '+' },
              { value: counters.states, label: 'States', suffix: '' },
              { value: counters.awards, label: 'Awards', suffix: '+' },
              { value: counters.years, label: 'Years', suffix: '' }
            ].map((stat, i) => (
              <div key={i} className="text-center px-6 py-4 bg-white/5 rounded-2xl backdrop-blur-sm min-w-[120px]">
                <div className="text-3xl md:text-5xl font-bold text-white mb-1 tabular-nums">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs md:text-sm text-blue-200 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>

          <a href='/why-us' className="group inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
            Explore Our World 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* A Day in the Life (History/Schedule Section) - TIGHTER SPACING */}
      <section className="py-24 md:py-32 px-6 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="fade-section text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              Daily Routine
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">A Day in the Life</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Every moment designed for growth, learning, and joy.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-[2px] bg-slate-200" />

            {daySchedule.map((item, index) => (
              <div key={index} className={`timeline-item relative flex items-center mb-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content - Reduced padding from 12 to 6 to tighten horizontal distance */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                    <div className={`inline-flex items-center justify-center w-10 h-10 bg-blue-50 text-blue-600 rounded-lg mb-3 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="text-[11px] font-black text-blue-500 uppercase mb-1">{item.time}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-white ring-4 ring-slate-50" />
                </div>
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="fade-section text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">Beyond the Classroom</h2>
            <p className="text-slate-600">Nurturing leadership and creativity.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activities.map((activity) => (
              <div key={activity.id} className="activity-card group bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-slate-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <activity.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{activity.title}</h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">{activity.desc}</p>
                <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{activity.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-slate-900 text-white rounded-[3rem] mx-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="value-card p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-blue-100/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto relative">
          {testimonials.map((t, i) => (
            <div key={i} className={`transition-all duration-700 transform ${i === currentTestimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'}`}>
              <div className="text-center">
                <div className="text-6xl mb-8">{t.avatar}</div>
                <p className="text-2xl md:text-3xl font-medium text-slate-800 italic mb-8 leading-snug">"{t.quote}"</p>
                <h4 className="text-xl font-bold text-slate-900">{t.name}</h4>
                <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mt-1">Class {t.class}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrentTestimonial(i)} className={`h-1.5 rounded-full transition-all ${i === currentTestimonial ? 'w-10 bg-blue-600' : 'w-2 bg-slate-200'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Join Our Legacy.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href='/admissions' className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all">Apply Now</a>
            <a href='/amenities' className="border-2 border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">Visit Campus</a>
          </div>
        </div>
      </section>
    </div>
  );
}