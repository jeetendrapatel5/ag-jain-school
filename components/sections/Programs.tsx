'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Calculator,
  TrendingUp,
  BookOpen,
  ArrowUpRight,
  Sparkles,
  Star,
  Users,
  Award,
} from 'lucide-react';

/* ================= TYPES ================= */

type MousePosition = {
  x: number;
  y: number;
};

type Program = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  stats: string;
  students: string;
  accent: string;
  accentGradient: string;
  hoverBg: string;
  glowColor: string;
  subjects: string[];
};

/* ================= COMPONENT ================= */

export default function SchoolProgramsHero() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const headerRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  const cardsRef = useRef<Record<string, HTMLDivElement | null>>({});

  /* ================= MOUSE TRACKING ================= */

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  /* ================= GSAP LOADING ================= */

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    script.async = true;

    script.onload = () => {
      const gsap = (window as any).gsap;
      if (!gsap) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, {
        opacity: 0,
        scale: 0.5,
        y: -30,
        duration: 0.8,
      })
        .from(titleRef.current?.children || [], {
          opacity: 0,
          y: 80,
          stagger: 0.2,
          duration: 1.2,
        })
        .from(subtitleRef.current, {
          opacity: 0,
          y: 40,
          duration: 1,
        })
        .from(statsRef.current?.children || [], {
          opacity: 0,
          scale: 0.8,
          stagger: 0.1,
          duration: 0.6,
        });

      gsap.to(badgeRef.current, {
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  /* ================= CARD HOVER ================= */

  const handleCardHover = (
    program: Program,
    isEntering: boolean
  ): void => {
    setHoveredCard(isEntering ? program.id : null);

    const gsap = (window as any).gsap;
    const card = cardsRef.current[program.id];

    if (!gsap || !card) return;

    gsap.to(card, {
      y: isEntering ? -16 : 0,
      scale: isEntering ? 1.03 : 1,
      duration: 0.6,
    });
  };

  /* ================= PROGRAM DATA ================= */

  const programs: Program[] = [
    {
      id: 'foundation',
      title: 'Foundation Program',
      subtitle: 'Standards VI - X',
      icon: BookOpen,
      description:
        'Build a strong academic foundation with integrated value education and compulsory computer training.',
      stats: 'Ages 10–16',
      students: '500+ Students',
      accent: 'bg-blue-500',
      accentGradient: 'from-blue-400 via-blue-500 to-indigo-500',
      hoverBg: 'group-hover:bg-blue-50/40',
      glowColor: 'shadow-blue-500/50',
      subjects: ['English', 'Maths', 'Science', 'Social Studies'],
    },
    {
      id: 'commerce',
      title: 'Commerce Stream',
      subtitle: 'Standards XI - XII',
      icon: TrendingUp,
      description:
        'A career-focused commerce curriculum with business mathematics and computer applications.',
      stats: 'Groups II & III',
      students: '300+ Students',
      accent: 'bg-emerald-500',
      accentGradient: 'from-emerald-400 via-emerald-500 to-teal-500',
      hoverBg: 'group-hover:bg-emerald-50/40',
      glowColor: 'shadow-emerald-500/50',
      subjects: ['Accountancy', 'Economics', 'Commerce'],
    },
    {
      id: 'science',
      title: 'Science Stream',
      subtitle: 'Standards XI - XII',
      icon: Calculator,
      description:
        'Advanced physics, chemistry, mathematics and computer science training.',
      stats: 'Group I',
      students: '200+ Students',
      accent: 'bg-violet-500',
      accentGradient: 'from-violet-400 via-violet-500 to-purple-500',
      hoverBg: 'group-hover:bg-violet-50/40',
      glowColor: 'shadow-violet-500/50',
      subjects: ['Physics', 'Chemistry', 'Maths', 'CS'],
    },
  ];

  /* ================= JSX ================= */

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div ref={headerRef} className="mb-20">
          <div ref={badgeRef} className="mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-red-600" />
            <span>Academic Excellence</span>
          </div>

          <div ref={titleRef}>
            <h1 className="text-6xl font-semibold">Academic Journey</h1>
          </div>

          <p ref={subtitleRef} className="mt-4 text-lg text-gray-600">
            Carefully designed programs from foundation to specialization.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.id}
                ref={(el) => {
                  cardsRef.current[program.id] = el;
                }}
                onMouseEnter={() => handleCardHover(program, true)}
                onMouseLeave={() => handleCardHover(program, false)}
                className="border rounded-xl p-10 cursor-pointer transition-all"
              >
                <Icon className="w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold">{program.title}</h3>
                <p className="mt-2 text-gray-600">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>

        <div ref={ctaRef} className="mt-24">
          <button className="px-10 py-5 bg-blue-600 text-white rounded-xl">
            Apply Now <ArrowUpRight className="inline ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
