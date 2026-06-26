import DoctorCard from "@/components/find-doctorpage/DoctorCard";
import { getAllSchedules } from "@/lib/api/findallschedules";
import { Button, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";

const FindDoctorsPage = async () => {
  const schedules = await getAllSchedules();
  // console.log(schedules);
  return (
    <div className="container py-10">
      {/* haeading */}
      <div>
        <h2 className="font-bold text-4xl">Find the Right Doctor</h2>
        <p className="text-primary text-lg">
          Browse {schedules.length} verified specialists across {schedules.length} specializations
        </p>
      </div>

      {/* card */}

      <div className="mt-6">
        <p className="text-primary text-lg">
          showing {schedules.length} doctors
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            {
            schedules && (
                schedules.map(schedule=> <DoctorCard key={schedule._id} schedule ={schedule}></DoctorCard>)
            )
        }
        </div>
      </div>
    </div>
  );
};

export default FindDoctorsPage;
