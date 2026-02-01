import { BookOpenCheck, PartyPopper, Map, Tent, Compass, Bus, Leaf, TrafficCone, Sparkles, Activity, HeartHandshake } from 'lucide-react';

export default function EventsCalendar() {
  return (
    <div className="bg-[#fafaf9] text-slate-900 font-sans antialiased">
      {/* Hero Section */}
      <section className="relative pt-15 pb-40 px-6 bg-slate-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90%" cy="10%" r="200" stroke="white" strokeWidth="1" className="animate-pulse" />
            <circle cx="10%" cy="80%" r="150" stroke="white" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="50%" cy="50%" r="100" stroke="white" strokeWidth="0.5" opacity="0.3" />
          </svg>
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-amber-900/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-blue-400" />
            <h2 className="text-blue-400 font-bold tracking-[0.3em] uppercase text-xs">
              School Calendar
            </h2>
            <div className="h-px w-8 bg-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl mb-10 mt-3 leading-tight">
            A Year Full of Learning <br />
            <span className="text-blue-500">& Celebration</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-light">
            Beyond textbooks, we nurture the soul and spirit through a vibrant tapestry of cultural, academic, and social activities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Academic Milestones */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <BookOpenCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl mb-6 text-slate-900">Academic Milestones</h3>
            <ul className="space-y-4">
              {[
                'Quarterly & Half-Yearly Exams',
                'Annual Final Assessments',
                'Unit Tests & Periodic Reviews'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
              <li className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 p-4 rounded-xl mt-4 border border-indigo-100">
                <p className="text-xs font-bold text-indigo-700 uppercase mb-1 tracking-wide">
                  Parent Connection
                </p>
                <p className="text-xs text-indigo-900/70 italic">
                  Open Days for regular interaction and feedback.
                </p>
              </li>
            </ul>
          </div>

          {/* Festivals & Culture */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                  <PartyPopper className="w-6 h-6" />
                </div>
                <h3 className="text-2xl mb-4 text-slate-900">Festivals & Culture</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Honoring our diverse heritage through grand celebrations and religious observances.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-2 gap-4">
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-100 transition-colors duration-300 hover:scale-105 transform">
                  <p className="font-bold text-xs mb-2 text-slate-400 uppercase tracking-tighter">
                    National Days
                  </p>
                  <p className="text-sm font-semibold text-slate-900">Independence & Republic Day</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-100 transition-colors duration-300 hover:scale-105 transform">
                  <p className="font-bold text-xs mb-2 text-slate-400 uppercase tracking-tighter">
                    Tamil Heritage
                  </p>
                  <p className="text-sm font-semibold text-slate-900">Pongal & Tamil New Year</p>
                </div>
                <div className="p-4 border-2 border-orange-200 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 hover:shadow-lg transition-all duration-300 hover:scale-105 transform">
                  <p className="font-bold text-xs mb-2 text-orange-700 uppercase tracking-tighter">
                    Spiritual Significance
                  </p>
                  <p className="text-sm font-semibold text-orange-900">Mahaveer Jayanthi & Paryushan</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-100 transition-colors duration-300 hover:scale-105 transform">
                  <p className="font-bold text-xs mb-2 text-slate-400 uppercase tracking-tighter">
                    General Festivals
                  </p>
                  <p className="text-sm font-semibold text-slate-900">Deepavali & Gandhi Jayanthi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Beyond Campus */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group lg:col-span-2">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <Map className="w-6 h-6" />
            </div>
            <h3 className="text-2xl mb-6 text-slate-900">Beyond Campus</h3>
            <div className="space-y-3">
              {[
                { icon: Tent, text: 'NCC / NSS Camps', color: 'emerald' },
                { icon: Compass, text: 'Scout Jamborees', color: 'emerald' },
                { icon: Bus, text: 'Educational Field Trips', color: 'emerald' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl text-sm font-medium hover:bg-emerald-50 hover:shadow-md transition-all duration-300 cursor-pointer group/item"
                >
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center group-hover/item:bg-emerald-100 transition-colors">
                    <item.icon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 group-hover/item:text-emerald-700 transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Responsibility */}
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white lg:col-span-2 lg:row-span-1 relative overflow-hidden group hover:bg-slate-800 transition-colors duration-500">
            {/* Background Decorations */}
            <div className="absolute bottom-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <HeartHandshake className="w-40 h-40" />
            </div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-amber-600 rounded-full blur-3xl opacity-10" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-2xl text-amber-400">
                  Social Responsibility & Values
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-4">
                  {[
                    { icon: Leaf, color: 'emerald', title: 'Environmental Awareness', desc: 'Regular drives and green initiatives.' },
                    { icon: TrafficCone, color: 'amber', title: 'Road Safety', desc: 'Campaigns for community awareness.' }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item hover:bg-white/5 p-3 rounded-xl transition-colors">
                      <div className={`w-10 h-10 rounded-lg bg-${item.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                      </div>
                      <div>
                        <p className="font-bold text-sm mb-1">{item.title}</p>
                        <p className="text-xs text-slate-400">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4">
                  {[
                    { icon: Sparkles, color: 'blue', title: 'Chaturmas & Reflection', desc: 'Periods of spiritual growth and forgiveness.' },
                    { icon: Activity, color: 'rose', title: 'Health & Hygiene', desc: 'Consistent awareness and health drives.' }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item hover:bg-white/5 p-3 rounded-xl transition-colors">
                      <div className={`w-10 h-10 rounded-lg bg-${item.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                      </div>
                      <div>
                        <p className="font-bold text-sm mb-1">{item.title}</p>
                        <p className="text-xs text-slate-400">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quote Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-[2rem] blur-xl opacity-20" />
          <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 rounded-[2rem] p-8 text-center">
            <p className="text-amber-900 text-lg">
              "Integration of Value Education in every aspect of school life."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}