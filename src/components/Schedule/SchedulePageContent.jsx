'use client'
import React, { useState } from 'react';
import DashboardHeading from '../dashboard/DashboardHeading';
import { Button } from '@heroui/react';
import AddScheduleForm from './AddScheduleForm';
import MySchedulesCard from './MySchedulesCard';

const SchedulePageContent = ({user, doctor, doctorSchedules}) => {
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
        {doctorSchedules &&(
          doctorSchedules.map((schedule, index) => (
          <MySchedulesCard
            key={index}
            schedule={schedule}
          ></MySchedulesCard>
        ))
        )}
      </div>
        </>
    );
};

export default SchedulePageContent;