import { GraduationCap, Users, BookOpen, Layout, Medal, Palette, Monitor, Sparkles } from 'lucide-react';

export default function FacultyExcellence() {
  return (
    <div className="bg-[#fafaf9] text-slate-900 font-sans antialiased">
      {/* Hero Section */}
      <section className="pt-15 pb-30 px-6 bg-white border-b border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-amber-50/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-100 rounded-full blur-3xl opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <div className="h-px w-12 bg-amber-600" />
              <h2 className="text-amber-700 font-semibold tracking-[0.3em] uppercase text-xs">
                Our Greatest Asset
              </h2>
            </div>
            <h1 className="text-5xl md:text-7xl text-slate-900 mb-6 tracking-tight">
              Faculty Excellence
            </h1>
            <p className="text-slate-500 max-w-2xl text-lg font-light leading-relaxed mx-auto md:mx-0">
              Meet the dedicated educators who inspire, mentor, and shape the future of our students through passion and expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-50 space-y-6">
              {/* Headmistress Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-b from-amber-500 to-amber-700 rounded-[2.5rem] blur-lg opacity-10 group-hover:opacity-25 transition duration-700" />
                <div className="relative bg-white border border-amber-100 rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center mb-6 border-2 border-amber-200 group-hover:scale-110 transition-transform duration-500">
                    <GraduationCap className="w-8 h-8 text-amber-700" />
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent mb-4" />
                  <h3 className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">
                    Headmistress
                  </h3>
                  <h2 className="text-2xl font-serif text-slate-900 mb-4">
                    Dr. K. Jayashree
                  </h2>
                  <p className="text-slate-500 text-sm italic leading-relaxed">
                    "Leading with vision and compassion to nurture the leaders of tomorrow."
                  </p>
                  <Sparkles className="w-4 h-4 text-amber-400 mt-4 animate-pulse" />
                </div>
              </div>

              {/* Support Staff Card */}
              <div className="relative overflow-hidden bg-slate-900 rounded-[2rem] p-8 text-white group hover:bg-slate-800 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-amber-400" />
                    </div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-amber-400">
                      Support Staff
                    </h4>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Our dedicated non-teaching staff ensure smooth operations, safety, and hygiene across the campus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* PG Assistants */}
            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  PG Assistants
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
              </div>
              <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-amber-200">
                <p className="text-sm text-slate-500 mb-6 italic flex items-center gap-2">
                  Subject experts for Higher Secondary (XI & XII) standards
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'Economics', 'Accountancy', 'English', 'Tamil/Hindi'].map((subject, idx) => (
                    <div
                      key={subject}
                      className="px-4 py-3 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-xl text-xs font-semibold text-slate-700 border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all duration-300 cursor-pointer text-center"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      {subject}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BT Assistants & Secondary Grade */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <BookOpen className="text-blue-600 w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl mb-2 text-slate-900">BT Assistants</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Experienced educators for Middle and High School standards (Classes IX-X).
                </p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-500 group">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                  <Layout className="text-emerald-600 w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl mb-2 text-slate-900">Secondary Grade</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  The foundation builders for our young learners in Classes VI-VIII.
                </p>
              </div>
            </div>

            {/* Special Instructors */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  Special Instructors
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100/50 border-2 border-amber-200 p-6 rounded-2xl hover:shadow-xl transition-all duration-500 group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-amber-300 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                  <Medal className="w-5 h-5 text-amber-700 mb-3 relative z-10" />
                  <h5 className="font-bold text-sm mb-1 uppercase tracking-tight text-slate-900 relative z-10">
                    Physical Education
                  </h5>
                  <p className="text-sm font-serif text-slate-800 relative z-10">Shri K.F. Suresh Kumar</p>
                  <p className="text-[10px] text-amber-700 font-bold mt-1 relative z-10">
                    M.P.Ed., M.Phil., Ph.D.
                  </p>
                </div>
                <div className="bg-slate-50 border-2 border-slate-200 p-6 rounded-2xl hover:border-purple-300 hover:shadow-xl transition-all duration-500 group">
                  <Palette className="w-5 h-5 text-purple-500 mb-3 group-hover:text-purple-600 transition-colors" />
                  <h5 className="font-bold text-sm mb-1 uppercase tracking-tight text-slate-900">
                    Art & Craft
                  </h5>
                  <p className="text-sm font-serif text-slate-800">Shri P. Karthikeyan</p>
                </div>
                <div className="bg-slate-50 border-2 border-slate-200 p-6 rounded-2xl hover:border-blue-300 hover:shadow-xl transition-all duration-500 group">
                  <Monitor className="w-5 h-5 text-blue-500 mb-3 group-hover:text-blue-600 transition-colors" />
                  <h5 className="font-bold text-sm mb-1 uppercase tracking-tight text-slate-900">
                    Computer Education
                  </h5>
                  <p className="text-sm font-serif text-slate-800">Shri J. Isaac Kumar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full blur-xl opacity-20" />
          <div className="relative bg-gradient-to-r from-amber-600 to-amber-700 p-1 rounded-full">
            <div className="bg-white rounded-full py-6 px-8 flex items-center justify-center">
              <p className="text-sm md:text-base font-serif italic text-slate-700 text-center">
                "Every teacher brings passion, expertise, and commitment to student success."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}