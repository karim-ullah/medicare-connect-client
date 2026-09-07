import { BiStar } from "react-icons/bi";
import { FaStethoscope, FaUserGroup } from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";

const stats = [
  { icon: FaStethoscope, value: "284+", title: "Verified doctors" },
  { icon: FaUserGroup, value: "18k+", title: "Patients supported" },
  { icon: FiCalendar, value: "94k+", title: "Appointments booked" },
  { icon: BiStar, value: "4.9/5", title: "Average patient rating" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#103f43] py-16 text-white" aria-labelledby="trust-heading">
      <div className="container">
        <div className="max-w-xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">Care backed by confidence</p><h2 id="trust-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Healthcare people come back to</h2></div>
        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/15 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, title }) => <div key={title} className="bg-[#103f43] p-5 sm:p-7"><Icon className="text-teal-300" size={22} aria-hidden="true" /><dd className="mt-5 text-2xl font-bold sm:text-3xl">{value}</dd><dt className="mt-1 text-sm leading-5 text-teal-50/70">{title}</dt></div>)}
        </dl>
      </div>
    </section>
  );
}
