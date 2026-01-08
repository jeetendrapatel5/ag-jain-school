import Link from 'next/link';
import { Heart, Layers, Feather, Leaf } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-30 lg:pb-32 px-6 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className='text-center md:text-start'>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 leading-[1.1] mb-6">
                Where Learning<br />
                <span className="text-slate-400">Meets Legacy.</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-lg mb-10 font-normal">
                Empowering minds and shaping futures in the heart of Chennai. A legacy of excellence built on
                character and innovation.
              </p>

              <div className="flex flex-row gap-4">
                <Link
                  href="/whyus"
                  className="px-8 py-4 bg-navy-900 text-white font-bold rounded-lg hover:bg-navy-800 transition-all shadow-xl shadow-navy-900/10 text-center lg:w-50"
                >
                  Explore Our Story
                </Link>
                <Link
                  href="/ammenities"
                  className="px-8 py-4 bg-white text-navy-900 border border-slate-200 font-bold rounded-lg hover:bg-slate-50 transition-all text-center w-50"
                >
                  Virtual Tour
                </Link>
              </div>

            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src="/images/IMG-20260107-WA0007.jpg"
                alt="School Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>

              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-3xl font-bold mb-1">85 Years</p>
                <p className="text-sm opacity-90">Of Educational Excellence</p>
              </div>
            </div>
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-navy-900/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </header>

      {/* Heritage Section */}
      <section id="heritage" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 lg:p-16 border border-slate-100 shadow-soft">
          <div className="max-w-3xl">
            <h2 className="text-navy-900 text-xs font-bold uppercase tracking-widest mb-4">Our Community</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight">
              "A Miniature India."
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              From humble beginnings in 1940 to becoming Chennai's most diverse educational institution, our
              journey is one of unwavering commitment.
              <span className="text-navy-900 font-medium"> Unity in Diversity</span> isn't just our principle it's
              our lived reality.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-100 pt-8">
              <div>
                <div className="text-3xl font-bold text-gold-500 mb-1">1940</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-500 mb-1">State</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Board</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-500 mb-1">100%</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto relative timeline-line">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900">Transformation</h2>
          </div>

          <div className="relative pl-16 mb-12 group">
            <div className="absolute left-4 top-1 w-4 h-4 bg-white border-4 border-navy-900 rounded-full z-10 transition-transform group-hover:scale-125"></div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
              <span className="text-sm font-bold text-gold-500 mb-2 block">1940</span>
              <h3 className="text-xl font-bold text-navy-900 mb-3">The Beginning</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Founded by visionary philanthropists Shri Amoluckchand Galada and Shri Inderchand Galada with a
                mission to serve.
              </p>
            </div>
          </div>

          <div className="relative pl-16 mb-12 group">
            <div className="absolute left-4 top-1 w-4 h-4 bg-white border-4 border-slate-300 rounded-full z-10 transition-colors group-hover:border-navy-900"></div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
              <span className="text-sm font-bold text-gold-500 mb-2 block">1992</span>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Digital Pioneer</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We introduced Computer Education, becoming one of the first schools in the region to embrace the
                digital future.
              </p>
            </div>
          </div>

          <div className="relative pl-16 group">
            <div className="absolute left-4 top-1 w-4 h-4 bg-navy-900 border-4 border-navy-900 rounded-full z-10 shadow-lg shadow-navy-900/30"></div>
            <div className="bg-navy-900 p-8 rounded-2xl shadow-xl text-white">
              <span className="text-sm font-bold text-gold-500 mb-2 block">2025</span>
              <h3 className="text-xl font-bold text-white mb-3">Excellence Today</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Celebrating 85 years of transforming lives. Creating a safe, welcoming environment that nurtures
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="text-navy-900 text-xs font-bold uppercase tracking-widest mb-4">Our Philosophy</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy-900">Values That Guide Us</h3>
          </div>
          <div className="hidden md:block h-px bg-slate-200 flex-1 ml-12 mb-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="group p-8 bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-soft transition-all duration-300">
            <div className="w-12 h-12 bg-white rounded-lg border border-slate-100 flex items-center justify-center text-gold-600 mb-6 shadow-sm">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-navy-900 mb-2">Ahimsa</h4>
            <p className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-wider">Non-Violence</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Compassion for all living beings. Kindness in arm, action, and thought for a harmonious world.
            </p>
          </div>

          <div className="group p-8 bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-soft transition-all duration-300">
            <div className="w-12 h-12 bg-white rounded-lg border border-slate-100 flex items-center justify-center text-gold-600 mb-6 shadow-sm">
              <Layers className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-navy-900 mb-2">Anekant</h4>
            <p className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-wider">Pluralism</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Respecting diverse perspectives and valuing every individual's entry to the collective journey.
            </p>
          </div>

          <div className="group p-8 bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-soft transition-all duration-300">
            <div className="w-12 h-12 bg-white rounded-lg border border-slate-100 flex items-center justify-center text-gold-600 mb-6 shadow-sm">
              <Feather className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-navy-900 mb-2">Aparigraha</h4>
            <p className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-wider">Non-Possession</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Simplicity and contentment. Finding joy in being, not having. Freedom from material fetters.
            </p>
          </div>
        </div>

        <div className="mt-8 p-8 bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-2xl border border-emerald-100 flex items-start gap-6">
          <div className="p-3 bg-white rounded-full shadow-sm text-emerald-600">
            <Leaf className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-emerald-900 mb-1">Vegetarian Campus</h4>
            <p className="text-emerald-800 text-sm leading-relaxed max-w-2xl">
              In alignment with Ahimsa, strictly vegetarian food is permitted on our campus, fostering respect for
              all living beings.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}