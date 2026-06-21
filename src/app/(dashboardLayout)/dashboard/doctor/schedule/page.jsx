"use client";
import DashboardHeading from "@/components/dashboard/DashboardHeading";
import AddScheduleForm from "@/components/Schedule/AddScheduleForm";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card
} from "@heroui/react";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const SchedulePage = () => {
    const {data:session} = authClient.useSession()
    const user = session?.user
  const [scheduleOpen, setScheduleOpen] = useState(false);

 
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
        <AddScheduleForm user={user} setScheduleOpen={setScheduleOpen}></AddScheduleForm>
      )}

      {/* card */}

      <div>
        <Card className="mt-10">
          <div className="flex items-center justify-between">
            <div>
              <h3>Monday</h3>
              <p className="text-primary">9:00 AM - 10:00 AM</p>
            </div>
            <div className="flex items-center gap-2">
              <FiEdit></FiEdit>
              <RiDeleteBin6Line></RiDeleteBin6Line>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SchedulePage;
