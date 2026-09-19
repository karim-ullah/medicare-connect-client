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
      <div className="flex flex-wrap items-center justify-between gap-3">
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

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {doctorSchedules?.length > 0 ? (
          doctorSchedules.map((schedule) => (
            <MySchedulesCard key={schedule._id} schedule={schedule} />
          ))
        ) : (
          <div className="col-span-full rounded-2xl border border-dashed border-border py-10 text-center text-muted">
            No schedules found.
          </div>
        )}
      </div>
    </>
  );
};

export default SchedulePageContent;
