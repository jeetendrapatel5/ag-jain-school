import { UserPlus, Check, FileText, ClipboardCheck, Image, ShieldCheck, CreditCard, AlertCircle, Phone, MapPin, Clock, Download } from 'lucide-react';

export default function AdmissionPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-brand-900 pt-50 pb-52 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold tracking-widest uppercase mb-6">
            Enrolling Now for 2025-26
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Join Our 85-Year Legacy</h1>
          <p className="text-blue-100 text-lg opacity-80">
            Simple, transparent, and organized admissions for the next generation of leaders.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 -mt-16 pb-24">
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Eligibility Section */}
          <div className="lg:col-span-2 bg-white relative rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-10 border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-brand-50 rounded-lg">
                <UserPlus className="text-brand-600" />
              </div>
              <h2 className="text-2xl font-bold">Eligibility Criteria</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Class VI */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-brand-900 mb-4 flex items-center gap-2">
                  Class VI <span className="text-[10px] bg-brand-600 text-white px-2 py-0.5 rounded-full">Primary Entry</span>
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" /> Minimum age: 10 years completed
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" /> TC from a recognized school
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" /> Birth Certificate (Municipal)
                  </li>
                </ul>
              </div>

              {/* Other Classes */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-brand-900 mb-4 flex items-center gap-2">
                  Other Classes <span className="text-[10px] bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">Lateral Entry</span>
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" /> Age-appropriate as per norms
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" /> Mandatory Transfer Certificate
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" /> Complete academic records
                  </li>
                </ul>
              </div>
            </div>

            {/* Document Checklist */}
            <div className="mt-12">
              <h3 className="font-bold mb-6">Document Checklist</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl hover:bg-brand-50 transition-colors">
                  <FileText className="w-5 h-5 text-brand-600" />
                  <span className="text-sm font-medium">Original Birth Certificate</span>
                </div>
                <div className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl hover:bg-brand-50 transition-colors">
                  <ClipboardCheck className="w-5 h-5 text-brand-600" />
                  <span className="text-sm font-medium">Aadhar Card Copy</span>
                </div>
                <div className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl hover:bg-brand-50 transition-colors">
                  <Image className="w-5 h-5 text-brand-600" />
                  <span className="text-sm font-medium">Passport Size Photos</span>
                </div>
                <div className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl hover:bg-brand-50 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-brand-600" />
                  <span className="text-sm font-medium">Parent/Guardian ID Proof</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Fee Policy */}
            <div className="bg-brand-900 text-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <CreditCard className="text-blue-400" /> Fee Policy
              </h3>
              <ul className="space-y-4 text-sm text-blue-100 mb-8">
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span> Payment via Bank Only
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span> Non-refundable Special Fees
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span> Full clearance required for certificates
                </li>
              </ul>
              <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                <p className="text-[10px] uppercase tracking-widest font-bold text-blue-300">Note</p>
                <p className="text-xs italic">Fees subject to departmental modifications as per norms.</p>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-rose-50 border border-rose-100 rounded-3xl p-8">
              <h3 className="text-rose-900 font-bold mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Important
              </h3>
              <p className="text-xs text-rose-700 leading-relaxed space-y-2">
                • No DOB alterations permitted later.<br />
                • Parents MUST accompany students.<br />
                • False info leads to immediate dismissal.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden grid md:grid-cols-2">
          <div className="p-10 border-b md:border-b-0 md:border-r border-slate-100">
            <h3 className="text-xl font-bold mb-6">Contact Admissions</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-brand-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold">Phone</p>
                  <p className="text-sm font-semibold">+91 78456 90334 / 044-4555 0224</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-brand-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold">Location</p>
                  <p className="text-sm font-semibold">19, Tholasingam St, Sowcarpet, Chennai</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 bg-slate-50/50 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="w-5 h-5 text-brand-600" />
              <h3 className="text-xl font-bold">Office Hours</h3>
            </div>
            <p className="text-3xl font-bold text-brand-900 mb-2">3:00 PM — 5:00 PM</p>
            <p className="text-sm text-slate-500">Available on all working days</p>
            <div className="mt-8">
              <button className="bg-brand-600 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-brand-900 transition-all flex items-center gap-2">
                Download Application Form <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}