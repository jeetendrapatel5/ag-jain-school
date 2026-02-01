import { MapPin, PhoneCall, Clock, Globe, ExternalLink, Landmark } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      {/* Header Section */}
      <section className="pt-15 pb-32 px-6 text-center">
        <h2 className="text-jain-gold font-bold tracking-[0.3em] uppercase text-xs mb-7">Connect With Us</h2>
        <h1 className="text-4xl md:text-5xl text-jain-slate mb-4">Get In Touch</h1>
        <p className="text-slate-500 max-w-xl mx-auto text-sm">
          Have a question or looking to visit? We are here to assist you during school hours.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Column - Main Contact Info */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl mb-8 text-jain-blue leading-tight">
                Shree Amoluckchand Galada <br />Jain Higher Secondary School
              </h3>
              
              <div className="grid md:grid-cols-2 gap-10">
                {/* Address */}
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-jain-blue">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-2">Campus Address</h4>
                    <p className="text-sm leading-relaxed text-slate-600">
                      19, Tholasingam Street, Sowcarpet,<br />
                      Chennai - 600 079<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Contact Numbers */}
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-jain-blue">
                    <PhoneCall />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-2">Direct Contact</h4>
                    <p className="text-sm font-semibold text-jain-slate">+91 78456 90334</p>
                    <p className="text-sm font-semibold text-jain-slate">044-4555 0224</p>
                    <p className="text-sm text-jain-blue mt-2 font-medium">agjainschool@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-12 p-6 bg-slate-50 rounded-2xl flex flex-col md:flex-row md:items-center gap-6 border border-slate-100">
                <div className="flex items-center gap-4">
                  <Clock className="text-jain-gold w-6 h-6" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-tighter text-slate-500">School Office Hours</p>
                    <p className="text-sm font-semibold">Mon - Sat: 8:45 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="h-10 w-px bg-slate-200 hidden md:block"></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-tighter text-slate-500">Headmistress Availability</p>
                  <p className="text-sm font-semibold text-jain-blue">3:00 PM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Management Info & Online Presence */}
          <div className="lg:col-span-5 space-y-8">
            {/* Management Info */}
            <div className="bg-jain-slate text-white rounded-[2.5rem] p-10 relative overflow-hidden group shadow-2xl">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl transition-all group-hover:bg-white/10"></div>
              
              <h4 className="text-xl mb-6 text-amber-400">Under the Management of</h4>
              <div className="space-y-6 relative z-10">
                <div>
                  <h5 className="text-lg font-bold">Sri S.S. Jain Educational Society</h5>
                  <p className="text-sm text-slate-400 mt-2">
                    No. 3, Madley Road, T. Nagar,<br />
                    Chennai - 600 017
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">Established 1940</span>
                  <Landmark className="w-5 h-5 opacity-20" />
                </div>
              </div>
            </div>

            {/* Online Presence */}
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8">
              <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-6">Online Presence</h4>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-3">
                  <Globe className="text-jain-blue w-5 h-5" />
                  <span className="text-sm font-medium">Official Website</span>
                </div>
              </div>
              
              <button className="w-full mt-6 py-4 bg-jain-blue text-white rounded-2xl font-bold text-sm shadow-lg hover:bg-jain-slate transition-all flex items-center justify-center gap-2">
                Get Directions on Maps <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}