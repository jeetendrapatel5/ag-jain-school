import { Monitor, Cpu, FlaskConical, BookOpen, ShieldCheck, HeartPulse, CheckCircle2, Wifi } from 'lucide-react';

export default function AmenitiesPage() {
  return (
    <>
      {/* Header */}
      <header className="relative bg-school-900 text-white py-44 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6 tracking-wide uppercase">
            World-Class Amenities
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Where Excellence Meets <br/>Innovation
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            We have crafted an environment in Chennai that blends tradition with cutting-edge technology, ensuring every student has the tools to succeed.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16 -mt-10 relative z-20">
        
        {/* Smart Learning & Computer Labs */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          
          {/* Smart Learning Spaces */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group fade-in-up delay-100">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
              <Monitor className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Smart Learning Spaces</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Air-conditioned smart classrooms</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Interactive touch-screen boards</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>High-end multimedia projectors</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Spacious, well-ventilated layout</span>
              </li>
            </ul>
          </div>

          {/* Advanced Computer Labs */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group fade-in-up delay-200">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
              <Cpu className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Advanced Computer Labs</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Fully AC with 24-hour power backup</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>High-speed internet & modern dev tools</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Computer Science as exam subject</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Theory + Practical integration</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Science Wing */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-8 relative overflow-hidden fade-in-up delay-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -mr-32 -mt-32 opacity-50 blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
            <div className="md:w-1/3">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                <FlaskConical className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900">World-Class Science Wing</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our laboratories are designed to spark curiosity. From chemical reactions to biological exploration, we provide state-of-the-art equipment for hands-on learning.
              </p>
            </div>
            
            <div className="md:w-2/3 grid sm:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors">
                <h5 className="font-bold text-slate-800 mb-2">Physics</h5>
                <p className="text-xs text-slate-500">State-of-the-art equipment for experimental understanding.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors">
                <h5 className="font-bold text-slate-800 mb-2">Chemistry</h5>
                <p className="text-xs text-slate-500">Modern high-end setup for budding scientists.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors">
                <h5 className="font-bold text-slate-800 mb-2">Biology</h5>
                <p className="text-xs text-slate-500">Comprehensive facilities for life sciences exploration.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Facilities */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300 fade-in-up delay-100">
            <BookOpen className="w-8 h-8 text-amber-600 mb-6" />
            <h4 className="text-xl font-bold mb-3 text-slate-800">Library & Resources</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              An extensive collection supporting curriculum and encouraging a deep reading culture among students.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300 fade-in-up delay-200">
            <ShieldCheck className="w-8 h-8 text-rose-600 mb-6" />
            <h4 className="text-xl font-bold mb-3 text-slate-800">Safety First</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              91+ CCTV cameras, strict visitor protocols, and trained security personnel ensuring total peace of mind.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300 fade-in-up delay-300">
            <HeartPulse className="w-8 h-8 text-cyan-600 mb-6" />
            <h4 className="text-xl font-bold mb-3 text-slate-800">Health & Hygiene</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              RO purified water, spotless restrooms, first-aid trained staff, and regular student health check-ups.
            </p>
          </div>
        </div>

        {/* Digital Integration CTA */}
        <div className="bg-linear-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg fade-in-up delay-100">
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <Wifi className="w-6 h-6 text-blue-400" />
              <span className="text-blue-300 font-medium tracking-wide text-sm uppercase">Future Ready</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Seamless Digital Integration</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              We have fully digitalized school records since 2019. We bridge the gap between home and school with SMS updates, online assessments, and a dynamic web presence.
            </p>
            <button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">
              Access Parent Portal
            </button>
          </div>
          
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                <div className="space-y-3">
                  <div className="h-2 w-32 bg-white/20 rounded-full"></div>
                  <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                  <div className="h-2 w-28 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}