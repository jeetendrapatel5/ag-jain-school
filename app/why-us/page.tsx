import { Award, Languages, Building2, Cpu, Heart, TrendingUp, Users, Trophy, Scroll, Sparkles, Camera, Droplet, Wind, Tablet, History } from 'lucide-react';

export default function WhyUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-15 pb-26 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-blue-600 font-semibold tracking-[0.2em] uppercase text-sm mb-14">
            The Institution of Choice
          </h2>
          <h1 className="text-5xl md:text-7xl mb-6 text-slate-900">10 Reasons We Stand Apart</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
            Blending a rich 85-year legacy with future-ready innovation to create the leaders of tomorrow.
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 opacity-40">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Reason 1 - Large Card */}
          <div className="lg:col-span-2 glass-card p-10 rounded-[2rem] relative overflow-hidden group card-hover transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50">
            <span className="number-outline absolute top-4 right-8 text-9xl font-serif transition-all duration-500">01</span>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-200">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-3xl mb-4">85 Years of Educational Excellence</h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                A legacy that speaks through generations of successful alumni who've made their mark across the globe since our founding.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-5 group-hover:opacity-10 transition-opacity">
              <History className="w-full h-full translate-x-10 translate-y-10" />
            </div>
          </div>

          {/* Reason 2 */}
          <div className="glass-card p-10 rounded-[2rem] relative group card-hover transition-all duration-500">
            <span className="number-outline absolute top-4 right-8 text-8xl font-serif transition-all duration-500">02</span>
            <Languages className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-2xl mb-4">Tri-Lingual Advantage</h3>
            <p className="text-slate-600 leading-relaxed">
              Hindi, Tamil, and English mediums, preparing students for India's multilingual landscape.
            </p>
          </div>

          {/* Reason 3 - Tall Card */}
          <div className="glass-card p-10 rounded-[2rem] relative group card-hover lg:row-span-2 border-l-4 border-l-blue-600 transition-all duration-500">
            <span className="number-outline absolute top-4 right-8 text-8xl font-serif transition-all duration-500">03</span>
            <Building2 className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-2xl mb-6">Smart Infrastructure</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Camera className="w-4 h-4 text-blue-500" /> 91+ CCTV Security
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Droplet className="w-4 h-4 text-blue-500" /> RO Purified Water
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Wind className="w-4 h-4 text-blue-500" /> AC Computer Labs
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Tablet className="w-4 h-4 text-blue-500" /> Smart Classrooms
              </li>
            </ul>
          </div>

          {/* Reason 4 */}
          <div className="glass-card p-10 rounded-[2rem] relative group card-hover transition-all duration-500">
            <span className="number-outline absolute top-4 right-8 text-8xl font-serif transition-all duration-500">04</span>
            <Cpu className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-2xl mb-4">Digital Pioneers</h3>
            <p className="text-slate-600">
              Integrating technology since 1992, preparing digital natives for decades.
            </p>
          </div>

          {/* Reason 5 */}
          <div className="glass-card p-10 rounded-[2rem] relative group card-hover transition-all duration-500">
            <span className="number-outline absolute top-4 right-8 text-8xl font-serif transition-all duration-500">05</span>
            <Heart className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-2xl mb-4">Character-Driven</h3>
            <p className="text-slate-600">
              Academics paired with values-based learning for ethical citizenship.
            </p>
          </div>

          {/* Reason 6 */}
          <div className="glass-card p-10 rounded-[2rem] relative group card-hover transition-all duration-500 border-b-4 border-b-blue-600">
            <span className="number-outline absolute top-4 right-8 text-8xl font-serif transition-all duration-500">06</span>
            <TrendingUp className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-2xl mb-4">Academic Results</h3>
            <p className="text-slate-600">
              Consistent top performers in state board examinations with expert mentorship.
            </p>
          </div>

          {/* Reason 7 */}
          <div className="glass-card p-10 rounded-[2rem] relative group card-hover transition-all duration-500">
            <span className="number-outline absolute top-4 right-8 text-8xl font-serif transition-all duration-500">07</span>
            <Users className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-2xl mb-4">360° Development</h3>
            <p className="text-slate-600">
              NCC, NSS, Scouts, and specialized clubs for holistic growth.
            </p>
          </div>

          {/* Reason 8 - Dark Card */}
          <div className="glass-card p-10 rounded-[2rem] relative group card-hover transition-all duration-500 bg-slate-900 text-white shadow-xl shadow-slate-200">
            <span className="number-outline absolute top-4 right-8 text-8xl font-serif transition-all duration-500 opacity-20">08</span>
            <Trophy className="w-10 h-10 text-blue-400 mb-6" />
            <h3 className="text-2xl mb-4">Sports & Wellness</h3>
            <p className="text-slate-400 text-sm">
              Yoga, Karate, and professional training in Cricket, Hockey, and more.
            </p>
          </div>

          {/* Reason 9 */}
          <div className="glass-card p-10 rounded-[2rem] relative group card-hover transition-all duration-500">
            <span className="number-outline absolute top-4 right-8 text-8xl font-serif transition-all duration-500">09</span>
            <Scroll className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-2xl mb-4">Awards Culture</h3>
            <p className="text-slate-600">
              42+ endowments recognizing excellence in every student's path.
            </p>
          </div>

          {/* Reason 10 - Wide Card */}
          <div className="md:col-span-2 glass-card p-10 rounded-[2rem] relative group card-hover flex flex-col md:flex-row items-center gap-8 transition-all duration-500">
            <span className="number-outline absolute top-4 right-8 text-9xl font-serif transition-all duration-500">10</span>
            <div className="md:w-2/3">
              <Sparkles className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-3xl mb-4 text-slate-900">Safe, Inclusive Environment</h3>
              <p className="text-slate-600 leading-relaxed">
                Where every child belongs, every voice matters, and every dream finds support in a nurturing atmosphere.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <p className="text-blue-800 font-serif text-center italic">"Every child matters"</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}