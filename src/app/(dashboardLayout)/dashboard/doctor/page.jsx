import { getAppointmentRequests } from "@/lib/api/doctor";
import { getUser } from "@/lib/core/session";
import { Card, Chip } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FaHistory } from "react-icons/fa";
import { FiArrowRight, FiClock, FiUsers } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";

const DoctorPage = async() => {

  const user = await getUser()
  const doctorId = user?.id
  const totalPatients = await getAppointmentRequests(doctorId)
  const latestAppointment = totalPatients.at(-1)
 
  
  return (
    <div className="py-10 px-6">
        
      <h2 className="font-bold text-2xl">Welcome back, {user?.name}!</h2>
      <p className="text-primary text-sm">
        Here's a summary of your healthcare activity
      </p>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 py-6">
        {/* Total Patients */}
        <div className="rounded-2xl border bg-background p-4 shadow transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <FiUsers size={24} />
            </div>
            <div>
              <h3 className="mt-2 text-3xl font-bold">{totalPatients.length}</h3>
              <p className="text-sm text-default-500">Total patient</p>
            </div>
          </div>
        </div>

        {/* Appointment History */}
        <div className="rounded-2xl border bg-background p-4 shadow transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <FaHistory size={24} />
            </div>
            <div>
              <h3 className="mt-2 text-3xl font-bold">1</h3>
              <p className="text-sm text-default-500">Latest Appointments</p>
            </div>
          </div>
        </div>

        {/* Total Payments */}
        <div className="rounded-2xl border bg-background p-4 shadow transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <MdOutlineReviews size={24} />
            </div>
            <div>
              <h3 className="mt-2 text-3xl font-bold">$1,250</h3>
              <p className="text-sm text-default-500">Review Received</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Card className="rounded-3xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Latest Appointments
          </h2>

          <button className="flex items-center gap-2 text-primary font-medium">
            <Link className="flex items-center gap-2 text-sm" href={'/dashboard/doctor/appointment-requests'}>View all <FiArrowRight /></Link>
          </button>
        </div>

        <div className="rounded-2xl border border-default-200 bg-default-50 p-5">
          <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <FiClock size={28} className="text-primary" />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  {latestAppointment.doctorName}
                </h3>

                <p className="text-default-500">
                  {latestAppointment.appointmentDate} at {latestAppointment.appointmentTime}
                </p>
              </div>
            </div>

            <Chip color="success" variant="flat">
              {latestAppointment.status}
            </Chip>
          </div>
        </div>
      </Card>
      </div>
    </div>
  );
};

export default DoctorPage;
