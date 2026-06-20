"use client";
import { authClient } from "@/lib/auth-client";
import { Card } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FaCalendarCheck, FaHeart, FaHistory, FaMoneyBillWave } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const PatientPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  return (
    <div className="py-10 px-6">
      <h2 className="font-bold text-2xl">Welcome back, {user?.name}!</h2>
      <p className="text-primary text-sm">
        Here's a summary of your healthcare activity
      </p>

      {/* stats */}

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 py-6">
        {/* Upcoming Appointments */}
        <div className="rounded-2xl border border-default-200 bg-background p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <FaCalendarCheck size={24} />
            </div>
            <div>
              <h3 className="mt-2 text-3xl font-bold">5</h3>
              <p className="text-sm text-default-500">Upcoming Appointments</p>
            </div>

            
          </div>
        </div>

        {/* Appointment History */}
        <div className="rounded-2xl border border-default-200 bg-background p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <FaHistory size={24} />
            </div>
            <div>
              <h3 className="mt-2 text-3xl font-bold">24</h3>
              <p className="text-sm text-default-500">Appointment History</p>
            </div>

            
          </div>
        </div>

        {/* Total Payments */}
        <div className="rounded-2xl border border-default-200 bg-background p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <FaMoneyBillWave size={24} />
            </div>
            <div>
              <h3 className="mt-2 text-3xl font-bold">$1,250</h3>
              <p className="text-sm text-default-500">Total Payments</p>
            </div>

            
          </div>
        </div>

        {/* Favorite Doctors */}
        <div className="rounded-2xl border border-default-200 bg-background p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <FaHeart size={24} />
            </div>
            <div>
              <h3 className="mt-2 text-3xl font-bold">8</h3>
              <p className="text-sm text-default-500">Favorite Doctors</p>
            </div>

            
          </div>
        </div>
      </div>


      {/* upcoming appointments */}

      <div className="">
        <Card>
            <div className="flex items-center justify-between">
                <h3 className="font-semibold">Upcoming Appointments</h3>
                <Link className="flex items-center gap-1 text-sm hover:border-b hover:border-b-blue-400" href={'/'}>View all <MdArrowOutward></MdArrowOutward></Link>
            </div>

            <div className="flex items-center gap-3 bg-gray-200 p-4 rounded-2xl">
                <div className="w-10 h-12 bg-gray-300 rounded-lg flex items-center justify-center"><FaCalendarCheck size={18}/></div>
                <div>
                    <h4 className="font-semibold">Doctor Name</h4>
                    <p className="font-mono text-primary">Cardiology</p>
                    <span className="text-primary">date</span>

                </div>

                <div className="flex-1 text-right">btn confirmed</div>
            </div>
        </Card>
      </div>
    </div>
  );
};

export default PatientPage;
