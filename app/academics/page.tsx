import { BookMarked, Monitor, Palette, CheckSquare, Compass, Users, Layout, GraduationCap, Atom, Beaker, Code, Variable, BarChart3, PieChart, Briefcase, Calculator } from 'lucide-react';

export default function AcademicsPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-slate-50 border-b border-slate-100 py-10 px-6">
        <div className="max-w-5xl mx-auto text-center pt-30">
          <h1 className="text-4xl md:text-6xl text-slate-900 mb-6">Academic Programs</h1>
          <p className="text-lg text-slate-500 uppercase tracking-widest font-medium">Pathways to Global Success</p>
        </div>
      </header>

      {/* Middle & Secondary School */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Middle School */}
          <div className="relative p-8 rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl font-serif text-academic-gold/20 group-hover:text-academic-gold/40 transition-colors">VI-VIII</span>
                <h2 className="text-2xl font-bold">Middle School</h2>
              </div>
              <p className="text-blue-600 mb-8 italic">The Foundation Years</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <BookMarked className="text-accent w-5 h-5" />
                  <span className="text-sm font-semibold">Core Curriculum (5 Subjects)</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <Monitor className="text-accent w-5 h-5" />
                  <span className="text-sm font-semibold">Compulsory Computer Education</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <Palette className="text-accent w-5 h-5" />
                  <span className="text-sm font-semibold">Integrated Art, Craft & Values</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary School */}
          <div className="relative p-8 rounded-3xl bg-accent overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <GraduationCap className="w-32 h-32" />
            </div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl font-serif">IX-X</span>
              <h2 className="text-2xl font-bold">Secondary School</h2>
            </div>
            <p className="text-blue-600 mb-8 italic">State Board Excellence</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm font-medium">
              <div className="border border-white/20 p-4 rounded-xl hover:bg-white/10 transition-colors">
                <CheckSquare className="mb-2 w-4 h-4 text-academic-gold" />
                Regular Feedback
              </div>
              <div className="border border-white/20 p-4 rounded-xl hover:bg-white/10 transition-colors">
                <Compass className="mb-2 w-4 h-4 text-academic-gold" />
                Career Guidance
              </div>
              <div className="border border-white/20 p-4 rounded-xl hover:bg-white/10 transition-colors">
                <Users className="mb-2 w-4 h-4 text-academic-gold" />
                Board Coaching
              </div>
              <div className="border border-white/20 p-4 rounded-xl hover:bg-white/10 transition-colors">
                <Layout className="mb-2 w-4 h-4 text-academic-gold" />
                Comprehensive Maps
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Higher Secondary */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl md:text-5xl mb-10">Higher Secondary</h2>
            <div className="inline-block px-4 py-1 bg-academic-gold/20 border border-academic-gold/30 text-academic-gold rounded-full text-xs font-bold tracking-widest uppercase">
              Instruction Medium: English Only
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Group I - Mathematics */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:border-academic-gold/50 transition-all duration-500">
              <h3 className="text-academic-gold font-bold mb-2">GROUP I</h3>
              <h4 className="text-white text-2xl font-serif mb-6">Mathematics Stream</h4>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <Atom className="w-4 h-4 text-academic-gold" /> Physics
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Beaker className="w-4 h-4 text-academic-gold" /> Chemistry
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Code className="w-4 h-4 text-academic-gold" /> Computer Science
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Variable className="w-4 h-4 text-academic-gold" /> Mathematics
                </li>
              </ul>
            </div>

            {/* Group II - Commerce A */}
            <div className="bg-white/5 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] hover:border-academic-gold/50 transition-all duration-500">
              <h3 className="text-academic-gold font-bold mb-2">GROUP II</h3>
              <h4 className="text-white text-2xl font-serif mb-6">Commerce Stream A</h4>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <BarChart3 className="w-4 h-4 text-academic-gold" /> Accountancy
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <PieChart className="w-4 h-4 text-academic-gold" /> Economics
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Briefcase className="w-4 h-4 text-academic-gold" /> Commerce
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Calculator className="w-4 h-4 text-academic-gold" /> Business Maths & Stats
                </li>
              </ul>
            </div>

            {/* Group III - Commerce B */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:border-academic-gold/50 transition-all duration-500">
              <h3 className="text-academic-gold font-bold mb-2">GROUP III</h3>
              <h4 className="text-white text-2xl font-serif mb-6">Commerce Stream B</h4>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <BarChart3 className="w-4 h-4 text-academic-gold" /> Accountancy
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <PieChart className="w-4 h-4 text-academic-gold" /> Economics
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Briefcase className="w-4 h-4 text-academic-gold" /> Commerce
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Layout className="w-4 h-4 text-academic-gold" /> Computer Applications
                </li>
              </ul>
            </div>

          </div>

          {/* Supplementary Curriculum */}
          <div className="mt-16 text-center">
            <p className="text-slate-400 text-sm mb-6 uppercase tracking-[0.3em]">Supplementary Curriculum</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-2 rounded-full border border-white/10 text-white text-sm">Environmental Science</span>
              <span className="px-6 py-2 rounded-full border border-white/10 text-white text-sm">Community Service</span>
              <span className="px-6 py-2 rounded-full border border-white/10 text-white text-sm">Value Education</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 px-6 text-center">
        <h3 className="text-2xl mb-8">Enrolling for the Academic Year 2026-27</h3>
        <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-95">
          Download Detailed Prospectus
        </button>
      </section>
    </>
  );
}