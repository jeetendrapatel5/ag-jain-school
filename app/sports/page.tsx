import { Trophy, Activity, Medal, Calendar, MapPin, Flag, Award, Shield, Star, Swords, Zap } from 'lucide-react';

export default function SportsAthletics() {
  const outdoorSports = [
    { name: 'Cricket', trophy: 'Galada Trophy' },
    { name: 'Volleyball', trophy: 'Rolling Trophy' },
    { name: 'Hockey', trophy: null },
    { name: 'Kabaddi', trophy: null }
  ];

  const indoorActivities = [
    { name: 'Chess', icon: Swords },
    { name: 'Karate', icon: Zap }
  ];

  const upcomingEvents = [
    { icon: Calendar, text: 'Inter-house Matches' },
    { icon: MapPin, text: 'District Participation' },
    { icon: Flag, text: 'Annual Sports Day', featured: true }
  ];

  const wallOfFame = [
    {
      icon: Award,
      title: 'Sri Siremul Hirachand Cup',
      award: 'Best Sportsman',
      color: 'yellow'
    },
    {
      icon: Shield,
      title: 'Sri R.C. Bohra Cup',
      award: 'Best House',
      color: 'yellow'
    },
    {
      icon: Star,
      title: 'Sri Singhvi Award',
      award: 'Best NCC Cadet',
      color: 'blue'
    }
  ];

  return (
    <div className="bg-[#0f172a] text-white font-sans antialiased">
      {/* Hero Section */}
      <section className="relative py-44 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-transparent to-transparent" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-emerald-600 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-blue-400" />
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-xs">
              Athletics Program
            </h2>
            <div className="h-px w-12 bg-blue-400" />
          </div>
          <h1 className="text-6xl md:text-8xl font-display uppercase italic mb-6 leading-none tracking-tight">
            Champions Are{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
              Made Here
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-2 w-16 bg-blue-600 rounded-full" />
            <div className="h-2 w-8 bg-blue-500 rounded-full" />
            <div className="h-2 w-4 bg-blue-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Sports Categories */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">
        
        {/* Outdoor Arena */}
        <div className="space-y-6 group">
          <div className="flex items-center gap-3 border-l-4 border-blue-600 pl-4">
            <Trophy className="text-blue-500 w-6 h-6" />
            <h3 className="font-display text-2xl uppercase tracking-wider">Outdoor Arena</h3>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
            <ul className="space-y-4">
              {outdoorSports.map((sport, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center group/item hover:bg-slate-700/30 p-3 rounded-lg transition-all duration-300"
                >
                  <span className="text-slate-300 group-hover/item:text-white transition-colors font-medium">
                    {sport.name}
                  </span>
                  {sport.trophy && (
                    <span className="text-[10px] bg-blue-900/50 text-blue-300 px-3 py-1.5 rounded-full font-bold uppercase tracking-wider border border-blue-700/30">
                      {sport.trophy}
                    </span>
                  )}
                  {!sport.trophy && <span className="text-slate-600">•</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Indoor & Wellness */}
        <div className="space-y-6 group">
          <div className="flex items-center gap-3 border-l-4 border-emerald-500 pl-4">
            <Activity className="text-emerald-500 w-6 h-6" />
            <h3 className="font-display text-2xl uppercase tracking-wider">Indoor & Wellness</h3>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10">
            <div className="grid grid-cols-2 gap-4 mb-4">
              {indoorActivities.map((activity, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 bg-slate-900/50 rounded-xl hover:bg-slate-700/50 transition-all duration-300 cursor-pointer group/card border border-slate-800 hover:border-emerald-500/30"
                >
                  <activity.icon className="w-6 h-6 mx-auto mb-2 text-emerald-400 group-hover/card:scale-110 transition-transform" />
                  <p className="text-xs uppercase font-bold text-slate-300 group-hover/card:text-white transition-colors">
                    {activity.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border border-emerald-500/20 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent animate-pulse" />
              <p className="text-sm text-emerald-300 italic relative z-10">
                "Yoga & Meditation: Standard practice for mental clarity and focus."
              </p>
            </div>
          </div>
        </div>

        {/* Competition */}
        <div className="space-y-6 group">
          <div className="flex items-center gap-3 border-l-4 border-orange-500 pl-4">
            <Medal className="text-orange-500 w-6 h-6" />
            <h3 className="font-display text-2xl uppercase tracking-wider">Competition</h3>
          </div>
          <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-6 rounded-2xl shadow-xl shadow-orange-900/30 hover:shadow-2xl hover:shadow-orange-900/50 transition-all duration-500 relative overflow-hidden group/card">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <h4 className="font-bold mb-4 uppercase text-sm tracking-widest flex items-center gap-2">
                <Flag className="w-4 h-4" />
                Upcoming Events
              </h4>
              <div className="space-y-3">
                {upcomingEvents.map((event, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg flex items-center gap-3 text-sm transition-all duration-300 ${
                      event.featured
                        ? 'bg-white/20 font-bold hover:bg-white/30 border-2 border-white/30'
                        : 'bg-white/10 hover:bg-white/15'
                    }`}
                  >
                    <event.icon className="w-4 h-4 flex-shrink-0" />
                    <span>{event.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wall of Fame */}
      <section className="bg-white text-slate-900 py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="font-display text-4xl md:text-5xl uppercase mb-2 tracking-tight">
              The Wall of Fame
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="h-1 w-16 bg-yellow-500 rounded-full" />
              <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
                Endowments for Sporting Excellence
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wallOfFame.map((award, idx) => (
              <div
                key={idx}
                className="border-2 border-slate-100 p-6 rounded-3xl hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group cursor-pointer hover:-translate-y-1"
              >
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
                  <award.icon className="w-10 h-10 text-yellow-500 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="font-bold text-lg leading-tight mb-2 group-hover:text-yellow-700 transition-colors">
                  {award.title}
                </h4>
                <div className="h-px bg-gradient-to-r from-slate-200 to-transparent mb-2" />
                <p className={`text-xs uppercase tracking-tighter font-bold ${
                  award.color === 'blue' ? 'text-blue-600' : 'text-slate-600'
                }`}>
                  Awarded to: {award.award}
                </p>
              </div>
            ))}

            {/* Rolling Trophies Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-3xl flex flex-col justify-center items-center text-center hover:from-slate-800 hover:to-slate-700 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 cursor-pointer relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex -space-x-2 mb-4 relative z-10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-slate-900 group-hover:scale-110 transition-transform" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 border-2 border-slate-900 group-hover:scale-110 transition-transform" style={{ transitionDelay: '50ms' }} />
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 border-2 border-slate-900 group-hover:scale-110 transition-transform" style={{ transitionDelay: '100ms' }} />
              </div>
              <p className="text-xs uppercase font-bold tracking-widest mb-2 relative z-10">
                Rolling Trophies
              </p>
              <p className="text-[10px] text-slate-400 relative z-10">
                Cricket • Volleyball • Kabaddi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Motivational Footer */}
      <section className="max-w-7xl mx-auto px-6 py-12 mb-12">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur-xl opacity-20" />
          <div className="relative bg-gradient-to-r from-blue-600/10 to-emerald-600/10 border border-blue-500/30 rounded-2xl p-8 text-center backdrop-blur-sm">
            <Trophy className="w-8 h-8 mx-auto mb-4 text-blue-400" />
            <p className="text-lg font-display italic text-blue-100">
              "Excellence is not a skill, it's an attitude cultivated through dedication."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}