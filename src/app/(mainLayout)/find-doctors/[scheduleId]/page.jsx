import LeftSide from "@/components/detailspage/LeftSide";
import OwnerWarning from "@/components/detailspage/OwnerWarning";
import RightSide from "@/components/detailspage/RightSide";
import { getSingleSchedule } from "@/lib/api/findallschedules";
import { getUser } from "@/lib/core/session";
import React from "react";

const page = async ({ params }) => {

  const { scheduleId } = await params;
  const user = await getUser()
  // console.log(user);
  const schedule = await getSingleSchedule(scheduleId);

  const isOwner = user?.id === schedule?.doctorId

  

  // console.log(schedule, 'details page');
  return (
    <div className="container flex flex-col gap-6 py-10 md:flex-row lg:gap-8">
      {/* left side */}

      <LeftSide schedule={schedule}/>

      {/* right side */}

      {
      isOwner ? <OwnerWarning/> : <RightSide schedule={schedule} user = {user}/> 
    }
      
    </div>
  );
};

export default page;
