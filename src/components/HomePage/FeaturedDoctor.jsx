import React from "react";
import DoctorCard from "../find-doctorpage/DoctorCard";
import { getSchedules } from "@/lib/api/findallschedules";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";

const FeaturedDoctor = async() => {
    const data = await getSchedules()

    const schedules = data.schedules

    console.log(schedules);

  return (
    <div className="py-16 container">
      <div className="flex justify-between items-center">
        <div className="max-w-[75%]"><h2 className="font-bold text-3xl md:text-4xl">Meet Our Expert Doctors</h2>
        <p className="text-primary text-lg leading-6">
          Experienced, compassionate, and board-certified specialists ready to care for you.
        </p></div>
        <div>
            <Link className="text-accent text-lg font-medium flex items-center gap-2" href={'/find-doctors'}>See all <GrFormNextLink/></Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {
            
                schedules.slice(0,6).map((schedule, index) => <DoctorCard key={index} schedule={schedule}/>)
            
        }
      </div>
    </div>
  );
};

export default FeaturedDoctor;
