import DoctorCard from "../find-doctorpage/DoctorCard";
import { getSchedules } from "@/lib/api/findallschedules";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default async function FeaturedDoctor() {
  const data = await getSchedules();
  const schedules = data?.schedules ?? [];

  return (
    <section className="py-20 sm:py-24" aria-labelledby="featured-doctors-heading">
      <div className="container">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl"><p className="section-kicker">Recommended clinicians</p><h2 id="featured-doctors-heading" className="section-title mt-3">Meet doctors patients trust</h2><p className="mt-4 leading-7 text-slate-600">Explore experienced specialists and book based on the care, time, and fee that work for you.</p></div>
          <Link className="inline-flex items-center gap-2 self-start text-sm font-bold text-[#087f78] hover:text-[#08645f] sm:self-auto" href="/find-doctors">View all doctors <FiArrowRight aria-hidden="true" /></Link>
        </div>
        {schedules.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{schedules.slice(0, 6).map((schedule) => <DoctorCard key={schedule._id} schedule={schedule} />)}</div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center"><p className="font-semibold text-slate-900">Doctor schedules are being updated.</p><p className="mt-2 text-sm text-slate-500">Please check back shortly or browse all doctors.</p></div>
        )}
      </div>
    </section>
  );
}
