import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiBriefcase, FiMapPin } from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";

export default function DoctorCard({ schedule }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-xl hover:shadow-slate-900/5">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image src={schedule.imgUrl} alt={`Dr. ${schedule.name}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm">{schedule.status || "Available"}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3"><div><h3 className="flex items-center gap-1.5 text-lg font-bold text-slate-950">Dr. {schedule.name}<MdOutlineVerified className="shrink-0 text-[#087f78]" aria-label="Verified doctor" /></h3><p className="mt-1 text-sm font-semibold text-[#087f78]">{schedule.specialization}</p></div><p className="shrink-0 text-right"><strong className="text-lg text-slate-950">${schedule.fee}</strong><span className="block text-xs text-slate-500">per visit</span></p></div>
        <div className="mt-4 space-y-2 text-sm text-slate-600"><p className="flex items-center gap-2"><FiMapPin className="shrink-0 text-slate-400" aria-hidden="true" /><span className="truncate">{schedule.hospital}</span></p><p className="flex items-center gap-2"><FiBriefcase className="shrink-0 text-slate-400" aria-hidden="true" />{schedule.experience} years of experience</p></div>
        <div className="mt-5 border-t border-slate-100 pt-4"><Link className="primary-link w-full gap-2" href={`/find-doctors/${schedule._id}`}>View availability <FiArrowRight aria-hidden="true" /></Link></div>
      </div>
    </article>
  );
}
