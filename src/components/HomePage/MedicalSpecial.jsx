import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { FaBaby, FaBone, FaBrain, FaLaptopMedical, FaMicroscope } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const specializations = [
  { title: "Cardiology", subtitle: "Heart and cardiovascular", query: "Cardiologist", icon: BiHeart, tone: "bg-rose-50 text-rose-600" },
  { title: "Neurology", subtitle: "Brain and nervous system", query: "Neurology", icon: FaBrain, tone: "bg-violet-50 text-violet-600" },
  { title: "Orthopedics", subtitle: "Bones and joints", query: "Orthopedics", icon: FaBone, tone: "bg-amber-50 text-amber-600" },
  { title: "Pediatrics", subtitle: "Children’s healthcare", query: "Pediatrics", icon: FaBaby, tone: "bg-emerald-50 text-emerald-600" },
  { title: "Dermatology", subtitle: "Skin, hair and nails", query: "Dermatology", icon: FaLaptopMedical, tone: "bg-pink-50 text-pink-600" },
  { title: "Oncology", subtitle: "Cancer care", query: "Oncology", icon: FaMicroscope, tone: "bg-blue-50 text-blue-600" },
];

export default function Specializations() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="specialties-heading">
      <div className="container">
        <div className="max-w-2xl"><p className="section-kicker">Browse by specialty</p><h2 id="specialties-heading" className="section-title mt-3">Start with the care you need</h2><p className="mt-4 text-base leading-7 text-slate-600">Choose a specialty to see relevant doctors and available appointments.</p></div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {specializations.map(({ title, subtitle, query, icon: Icon, tone }) => (
            <Link key={title} href={`/find-doctors?specialization=${encodeURIComponent(query)}`} className="group flex min-h-28 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg hover:shadow-slate-900/5">
              <span className={`grid size-14 shrink-0 place-items-center rounded-2xl ${tone}`}><Icon size={24} aria-hidden="true" /></span>
              <span className="min-w-0 flex-1"><strong className="block text-base text-slate-950">{title}</strong><span className="mt-1 block text-sm text-slate-500">{subtitle}</span></span>
              <FiArrowUpRight className="text-slate-400 transition group-hover:text-[#087f78]" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
