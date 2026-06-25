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

  const isOwner = user?.id === schedule.doctorId

  

  // console.log(schedule, 'details page');
  return (
    <div className="container py-10 flex gap-4">
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
