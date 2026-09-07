import Image from "next/image";
import Link from "next/link";
import { BiAward, BiCheckCircle } from "react-icons/bi";
import { BsArrowRight, BsShieldCheck } from "react-icons/bs";
import { FiCalendar, FiLock } from "react-icons/fi";

const features = [
  { icon: BsShieldCheck, title: "Verified specialists", description: "Profiles and credentials are reviewed before doctors are listed." },
  { icon: FiCalendar, title: "Simple scheduling", description: "See open times and reserve your appointment in one clear flow." },
  { icon: BiAward, title: "Care you can compare", description: "Review experience, specialty, location, and fees before choosing." },
  { icon: FiLock, title: "Private by design", description: "Your personal and health information stays protected." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="why-heading">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-100"><Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&h=700&fit=crop&auto=format" alt="Doctor speaking with a patient" fill sizes="(max-width: 1024px) 90vw, 44vw" className="object-cover" /></div>
          <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:right-8"><span className="grid size-10 place-items-center rounded-full bg-teal-50 text-[#087f78]"><BiCheckCircle size={22} /></span><div><p className="text-sm font-bold">Clear from search to booking</p><p className="text-xs text-slate-500">No confusing steps</p></div></div>
        </div>
        <div className="order-1 lg:order-2"><p className="section-kicker">Why MediCare Connect</p><h2 id="why-heading" className="section-title mt-3">Less time navigating care. More time feeling better.</h2><p className="mt-5 max-w-xl leading-7 text-slate-600">A patient-first experience that helps you make a confident choice without unnecessary friction.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">{features.map(({ icon: Icon, title, description }) => <div key={title}><span className="grid size-11 place-items-center rounded-xl bg-[#e4f5f2] text-[#087f78]"><Icon size={21} aria-hidden="true" /></span><h3 className="mt-4 font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></div>)}</div>
          <Link href="/register" className="primary-link mt-9 gap-2">Create your account <BsArrowRight aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
