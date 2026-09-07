import Link from "next/link";
import { HiOutlineHeart, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const quickLinks = [
  ["Find doctors", "/find-doctors"], ["About us", "/about-us"], ["Contact", "/contact-us"], ["Patient login", "/login"], ["Create account", "/register"],
];
const specialties = ["Cardiologist", "Neurology", "Orthopedics", "Pediatrics", "Dermatology"];

export default function Footer() {
  return (
    <footer className="bg-[#0b3033] text-slate-300">
      <div className="container py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr_1fr]">
          <div className="max-w-sm"><Link href="/" className="inline-flex items-center gap-2 text-xl font-bold text-white"><span className="grid size-10 place-items-center rounded-xl bg-teal-600"><HiOutlineHeart size={22} aria-hidden="true" /></span>MediCare Connect</Link><p className="mt-5 text-sm leading-7 text-slate-400">A simpler, more transparent way to find trusted healthcare and book an appointment.</p></div>
          <div><h2 className="text-sm font-bold text-white">Explore</h2><ul className="mt-5 space-y-3 text-sm">{quickLinks.map(([label, href]) => <li key={label}><Link href={href} className="hover:text-teal-300">{label}</Link></li>)}</ul></div>
          <div><h2 className="text-sm font-bold text-white">Specialties</h2><ul className="mt-5 space-y-3 text-sm">{specialties.map((item) => <li key={item}><Link href={`/find-doctors?specialization=${encodeURIComponent(item)}`} className="hover:text-teal-300">{item}</Link></li>)}</ul></div>
          <div><h2 className="text-sm font-bold text-white">Need help?</h2><div className="mt-5 space-y-4 text-sm"><a href="tel:+18005556334" className="flex items-center gap-3 hover:text-teal-300"><HiOutlinePhone aria-hidden="true" />+1 (800) 555-6334</a><a href="mailto:support@medicareconnect.com" className="flex items-center gap-3 break-all hover:text-teal-300"><HiOutlineMail aria-hidden="true" />support@medicareconnect.com</a></div><div className="mt-6 rounded-xl border border-red-300/20 bg-red-400/10 p-4"><p className="text-xs font-bold uppercase tracking-wider text-red-200">Medical emergency?</p><p className="mt-1 text-sm text-white">Call your local emergency service immediately.</p></div></div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 MediCare Connect. All rights reserved.</p><div className="flex gap-5"><Link href="/" className="hover:text-slate-300">Privacy</Link><Link href="/" className="hover:text-slate-300">Terms</Link><Link href="/" className="hover:text-slate-300">Accessibility</Link></div></div>
      </div>
    </footer>
  );
}
