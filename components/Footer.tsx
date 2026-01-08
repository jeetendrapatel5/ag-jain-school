import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-12 px-6 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-100 pt-8 gap-4">
          <p className="text-xs text-slate-400 font-medium">© 2025 AG Jain Higher Secondary School.</p>
          <div className="flex gap-6">
            <Link href="/why-us" className="text-xs text-slate-500 hover:text-navy-900 font-medium">Why Us</Link>
            <Link href="/contact" className="text-xs text-slate-500 hover:text-navy-900 font-medium">Contact</Link>
            <Link href="/admissions" className="text-xs text-slate-500 hover:text-navy-900 font-medium">Admissions</Link>
          </div>
        </div>
    </footer>
  );
}