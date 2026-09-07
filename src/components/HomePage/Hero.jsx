import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCalendar, FiCheckCircle, FiShield } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#eef8f7] py-14 sm:py-20 lg:py-24">
      <div className="absolute -right-32 -top-32 size-96 rounded-full bg-teal-200/35 blur-3xl" aria-hidden="true" />
      <div className="container relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="max-w-2xl">
          <p className="section-kicker inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-3 py-2"><FiShield aria-hidden="true" /> Trusted, verified care</p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">The right doctor, <span className="text-[#087f78]">right when you need one.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">Find verified specialists, compare availability, and book an appointment in minutes—without the usual phone calls and waiting.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/find-doctors" className="primary-link gap-2 px-6">Find a doctor <FiArrowRight aria-hidden="true" /></Link><Link href="/about-us" className="secondary-link px-6">How it works</Link></div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600" aria-label="Service benefits">
            {['Verified clinicians', 'Secure booking', 'Clear consultation fees'].map((item) => <li key={item} className="flex items-center gap-2"><FiCheckCircle className="text-[#087f78]" aria-hidden="true" />{item}</li>)}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="relative aspect-[4/4.35] overflow-hidden rounded-[2rem] bg-slate-200 shadow-2xl shadow-teal-950/10">
            <Image src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1000&h=1100&fit=crop&auto=format" alt="A medical team collaborating in a bright clinic" fill priority sizes="(max-width: 1024px) 90vw, 44vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" aria-hidden="true" />
          </div>
          <div className="absolute -bottom-5 left-4 right-4 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur sm:left-8 sm:right-auto sm:min-w-72">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#e4f5f2] text-[#087f78]"><FiCalendar size={21} aria-hidden="true" /></span>
            <div><p className="text-sm font-bold text-slate-900">Appointments that fit your day</p><p className="mt-0.5 text-xs text-slate-500">See available times before you book</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
