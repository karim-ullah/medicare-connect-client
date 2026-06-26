"use client";
import React, { useState } from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Button } from "@heroui/react";
import AddScheduleForm from "./AddScheduleForm";
import MySchedulesCard from "./MySchedulesCard";

const SchedulePageContent = ({ user, doctor, doctorSchedules }) => {
  const [scheduleOpen, setScheduleOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <DashboardHeading
          tittle={"Manage Schedule"}
          description={"Set your availability and working hours"}
        ></DashboardHeading>

        <Button className={"font-medium"} onClick={() => setScheduleOpen(true)}>
          + Add schedule
        </Button>
      </div>

      {/* Add Schedule Card */}

      {scheduleOpen && (
        <AddScheduleForm
          user={user}
          setScheduleOpen={setScheduleOpen}
          doctor={doctor}
        ></AddScheduleForm>
      )}

      {/* card */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {doctorSchedules?.length > 0 ? (
          doctorSchedules.map((schedule) => (
            <MySchedulesCard key={schedule._id} schedule={schedule} />
          ))
        ) : (
          <div className="text-center py-10">No schedules found.</div>
        )}
      </div>
    </>
  );
};

export default SchedulePageContent;
