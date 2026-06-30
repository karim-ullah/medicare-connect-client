import PatientOverView from "@/components/dashboard/my-appointmentPatient/PatientOverView";
import { getMyAppointments } from "@/lib/Actions/patient/action";
import { getUser } from "@/lib/core/session";
import { Card } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FaCalendarCheck } from "react-icons/fa";

import { MdArrowOutward } from "react-icons/md";

const PatientPage = async () => {
  const user = await getUser();
  const patientId = user?.id;
  const myAppointments = await getMyAppointments(patientId);

  return (
    <div className="py-10 px-6">
      <h2 className="font-bold text-2xl">Welcome back, {user?.name}!</h2>
      <p className="text-primary text-sm">
        Here's a summary of your healthcare activity
      </p>

      {/* stats */}

      <PatientOverView myAppointments = {myAppointments} patientId ={patientId} />

      {/* upcoming appointments */}

      <div className="">
        <Card>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Latest Appointments</h3>
            <Link
              className="flex items-center gap-1 text-sm hover:border-b hover:border-b-blue-400"
              href={"/"}
            >
              View all <MdArrowOutward></MdArrowOutward>
            </Link>
          </div>

          {myAppointments && (
            myAppointments.slice(0,2).map((appointment,index) => <div key={index} className="flex items-center gap-3 bg-gray-200 p-4 rounded-2xl">
            <div className="w-10 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
              <FaCalendarCheck size={18} />
            </div>
            <div>
              <h4 className="font-semibold">{appointment.doctorName}</h4>
              <p className="font-mono text-primary">{appointment.specialization}</p>
              <span className="text-primary">{appointment.appointmentDate}</span>
            </div>

            <div className="flex-1 text-right">{appointment.status}</div>
          </div>)
          )}

          
        </Card>
      </div>
    </div>
  );
};

export default PatientPage;
