import DoctorCard from "@/components/find-doctorpage/DoctorCard";
import SearchFilterPanel from "@/components/find-doctorpage/SearchFilterPanel";
import { getSchedules } from "@/lib/api/findallschedules";
import Image from "next/image";
import React from "react";

const FindDoctorsPage = async ({ searchParams }) => {
  const sParams = await searchParams;
  // console.log(sParams);
  const search = sParams.search || "";
  const specialization = sParams.specialization || "";
  const sortBy = sParams.sortBy || "";

  const params = new URLSearchParams();
  if (search) {
    params.set("search", search);
  }
  if (specialization) {
    params.set("specialization", specialization);
  }
  if(sortBy){
    params.set('sortBy', sortBy)
  }
  const schedules = await getSchedules(params);
  return (
    <div className="container py-10">
      {/* haeading */}
      <div>
        <h2 className="font-bold text-4xl">Find the Right Doctor</h2>
        <p className="text-primary text-lg">
          Browse {schedules.length} verified specialists across{" "}
          {schedules.length} specializations
        </p>
      </div>

      <div className="mt-6">
        <SearchFilterPanel />
      </div>

      {/* card */}

      <div className="mt-6">
        <p className="text-foreground text-sm">
          showing {schedules.length} doctors
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
          {schedules &&
            schedules.map((schedule) => (
              <DoctorCard key={schedule._id} schedule={schedule}></DoctorCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FindDoctorsPage;
