"use client";
import DashboardHeading from "@/components/dashboard/DashboardHeading";
import AddScheduleForm from "@/components/Schedule/AddScheduleForm";
import MySchedulesCard from "@/components/Schedule/MySchedulesCard";
import { getDoctor, getDoctorSchedules } from "@/lib/api/doctor";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import React, { useEffect, useState } from "react";

const SchedulePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const userId = user?.id;
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [doctor, setDoctor] = useState(null);
  const [doctorSchedules, setDoctorSchedules] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      const res = await getDoctor(userId);
      setDoctor(res);
    };

    const fetchDoctorSchedules = async () => {
      const res = await getDoctorSchedules(userId);
      setDoctorSchedules(res);
    };

    if (userId) {
      fetchDoctor();
      fetchDoctorSchedules();
    }
  }, [userId]);


  return (
    <div className="py-10 px-6">
      {/* headings */}

      <div className="flex items-center justify-between">
        <DashboardHeading
          tittle={"Manage Schedule"}
          description={"Set your availability and working hours"}
        ></DashboardHeading>

        <Button className={"font-medium"} onClick={() => setScheduleOpen(true)}>
          {" "}
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
        {doctorSchedules &&(
          doctorSchedules.map((schedule, index) => (
          <MySchedulesCard
            key={index}
            schedule={schedule}
          ></MySchedulesCard>
        ))
        )}
      </div>
    </div>
  );
};

export default SchedulePage;
