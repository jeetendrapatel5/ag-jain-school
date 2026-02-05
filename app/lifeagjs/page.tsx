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
  const containerRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const statsRef = useRef(null);
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
    // Professional fade-in for hero content
    gsap.from('.hero-content > *', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.3
    });

    // Smooth reveal for sections on scroll
    const sections = gsap.utils.toArray('.fade-section');
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    });

    // Timeline items - clean slide-in
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        },
        x: i % 2 === 0 ? -30 : 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out'
      });
    });

    // Activity cards - subtle stagger
    gsap.utils.toArray('.activity-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.05,
        ease: 'power2.out'
      });
    });

    // Value cards
    gsap.utils.toArray('.value-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.08,
        ease: 'power2.out'
      });
    });

  }, { scope: containerRef });

  // Counter animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { students: 1000, states: 28, awards: 42, years: 85 };
    const duration = 2000; // 2 seconds
    const fps = 60;
    const frames = (duration / 1000) * fps;
    
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const progress = frame / frames;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOut cubic
      
      setCounters({
        students: Math.floor(targets.students * easeProgress),
        states: Math.floor(targets.states * easeProgress),
        awards: Math.floor(targets.awards * easeProgress),
        years: Math.floor(targets.years * easeProgress)
      });

      if (frame >= frames) {
        clearInterval(interval);
        setCounters(targets); // Ensure final values are exact
      }
    }, 1000 / fps);
  };

  // Clean testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        {/* Subtle accent shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="hero-content relative z-10 max-w-6xl mx-auto px-6 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/1 rounded-full mb-8">
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
            <span className="text-white/90 font-medium text-sm">Life at AG Jain School</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Where Every Day is
            <br />
            <span className="text-cyan-300">an Adventure</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Experience a vibrant community where 1,000+ students from across India unite to learn, grow, and create lasting memories.
          </p>

          {/* Animated Counter Stats */}
          <div ref={statsRef} className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { value: counters.students, label: 'Students', suffix: '+' },
              { value: counters.states, label: 'States', suffix: '' },
              { value: counters.awards, label: 'Awards', suffix: '+' },
              { value: counters.years, label: 'Years', suffix: '' }
            ].map((stat, i) => (
              <div key={i} className="relative group">
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative text-center px-6 py-4">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1 tabular-nums">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <button className="group inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all">
            Explore Our World 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Subtle decorative line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* A Day in the Life */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Subtle accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="fade-section text-center mb-16 md:mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Daily Routine
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">A Day in the Life</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every moment designed for growth, learning, and joy
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line - desktop only */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200" />

            {daySchedule.map((item, index) => (
              <div 
                key={index}
                className={`timeline-item relative flex items-center mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 rounded-xl mb-4 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-semibold text-gray-500 mb-2">{item.time}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm" />
                </div>

                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-24 md:py-32 px-6 relative">
        {/* Subtle background accent */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="fade-section text-center mb-16 md:mb-20">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Co-Curricular Excellence
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Beyond the Classroom</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Programs that nurture leadership, creativity, and character
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => (
              <div 
                key={activity.id}
                className="activity-card group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer overflow-hidden"
              >
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all">
                    <activity.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{activity.desc}</p>
                  <div className="inline-block px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs font-medium border border-gray-100">
                    {activity.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Subtle accent */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="fade-section text-center mb-16 md:mb-20">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              Our Foundation
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Values We Live By</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rooted in timeless principles that shape character
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="value-card bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="fade-section text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Student Voices
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Hear From Our Students</h2>
          </div>

          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-opacity duration-500 ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-10 md:p-12 border border-gray-100">
                  <div className="text-6xl mb-6 text-center">{testimonial.avatar}</div>
                  <p className="text-2xl text-gray-700 mb-8 text-center leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-center">
                    <div className="font-bold text-xl text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">Class {testimonial.class}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Subtle accent shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/1 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-sm font-medium">Admissions Open 2025-26</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Be part of 85 years of excellence where every student matters and every dream finds wings
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href='/admissions' className="group inline-flex items-center gap-2 hover:bg-blue-500 hover:text-white bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all">
              Apply for Admission
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href='/campus-visit' className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
              Schedule Campus Visit
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            <span>📞 +91 78456 90334</span>
            <span>📧 agjainschool@gmail.com</span>
            <span>📍 Sowcarpet, Chennai</span>
          </div>
        </div>

        {/* Decorative line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>
    </div>
  );
}