import DoctorCard from "@/components/find-doctorpage/DoctorCard";
import PaginationPart from "@/components/find-doctorpage/Pagination";
import SearchFilterPanel from "@/components/find-doctorpage/SearchFilterPanel";
import { getSchedules } from "@/lib/api/findallschedules";
import Link from "next/link";

const FindDoctorsPage = async ({ searchParams }) => {
  const sParams = await searchParams;
  const search = sParams.search || "";
  const specialization = sParams.specialization || "";
  const sortBy = sParams.sortBy || "";
  const page = sParams.page;

  const filterParams = new URLSearchParams();
  if (search) {
    filterParams.set("search", search);
  }
  if (specialization) {
    filterParams.set("specialization", specialization);
  }
  if (sortBy) {
    filterParams.set("sortBy", sortBy);
  }
  const filterQuery = filterParams.toString();

  const params = new URLSearchParams(filterParams);
  if (page) {
    params.set("page", page);
  }

  const data = await getSchedules(params);
  const schedules = data?.schedules ?? [];

  // console.log(data);
  return (
    <main className="min-h-[70vh] py-12 sm:py-16">
      <div className="container">
        <div className="max-w-2xl"><p className="section-kicker">Doctor directory</p><h1 className="section-title mt-3">Find the right doctor for you</h1><p className="mt-4 leading-7 text-slate-600">Search verified specialists, compare key details, and choose an available appointment.</p></div>
        <div className="mt-8"><SearchFilterPanel /></div>
        <div className="mt-8 flex items-center justify-between"><p className="text-sm text-slate-600"><strong className="text-slate-950">{schedules.length}</strong> {schedules.length === 1 ? "doctor" : "doctors"} found</p></div>
        {schedules.length > 0 ? <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {schedules &&
            schedules.map((schedule) => (
              <DoctorCard key={schedule._id} schedule={schedule}></DoctorCard>
            ))}
        </div> : <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center"><h2 className="text-lg font-bold text-slate-950">No matching doctors found</h2><p className="mt-2 text-sm text-slate-500">Try a broader search or clear your filters.</p><Link href="/find-doctors" className="secondary-link mt-5">Clear filters</Link></div>}
        {schedules.length > 0 && <PaginationPart data={data} filterQuery={filterQuery} />}
      </div>
    </main>
  );
};

export default FindDoctorsPage;
