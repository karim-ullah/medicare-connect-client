'use client'
import { authClient } from "@/lib/auth-client";
import { Card, Chip } from "@heroui/react";
import React from "react";
import { FaHistory } from "react-icons/fa";
import { FiArrowRight, FiClock, FiUsers } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";

const DoctorPage = () => {
    const { data: session } = authClient.useSession();
      const user = session?.user;
  return (
    <div className="py-10 px-6">
        
      <h2 className="font-bold text-2xl">Welcome back, {user?.name}!</h2>
      <p className="text-primary text-sm">
        Here's a summary of your healthcare activity
      </p>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 py-6">
        {/* Total Patient */}
        <div className="rounded-2xl border bg-background p-4 shadow transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <FiUsers size={24} />
            </div>
            <div>
              <h3 className="mt-2 text-3xl font-bold">5</h3>
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
              <h3 className="mt-2 text-3xl font-bold">24</h3>
              <p className="text-sm text-default-500">Today's Appointments</p>
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
        <Card className="rounded-3xl p-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Today's Appointments
          </h2>

          <button className="flex items-center gap-2 text-primary font-medium">
            View all <FiArrowRight />
          </button>
        </div>

        <div className="rounded-2xl border border-default-200 bg-default-50 p-5">
          <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <FiClock size={28} className="text-primary" />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Alice Johnson
                </h3>

                <p className="text-default-500">
                  2026-06-20 at 10:00 AM
                </p>
              </div>
            </div>

            <Chip color="success" variant="flat">
              Confirmed
            </Chip>
          </div>
        </div>
      </Card>
      </div>
    </div>
  );
};

export default DoctorPage;
