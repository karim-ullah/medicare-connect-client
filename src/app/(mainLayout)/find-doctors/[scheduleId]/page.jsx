import LeftSide from "@/components/detailspage/LeftSide";
import { getSingleSchedule } from "@/lib/api/findallschedules";
import { Button, Card, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder, MdOutlineVerifiedUser } from "react-icons/md";

const page = async ({ params }) => {
  const { scheduleId } = await params;
  const schedule = await getSingleSchedule(scheduleId);

  const daySlots = schedule.daySlots;
  const timeSlots = schedule.timeSlots;

  // console.log(schedule, 'details page');
  return (
    <div className="container py-10 flex gap-4">
      {/* left side */}

      <LeftSide schedule={schedule}/>

      {/* right side */}
      <div className="flex-1">
        <Card className="sticky top-24 p-6 rounded-3xl shadow-sm">
          <div>
            <h3 className="text-3xl font-bold text-foreground">
              Book Appointment
            </h3>

            <p className="mt-2 text-default-500">
              Select a day and time slot to proceed
            </p>
          </div>

          {/* Days */}
          <div className="mt-3">
            <h4 className="mb-3 text-lg font-medium">Select Day</h4>

            <div className="flex flex-wrap gap-3">
              {daySlots &&
                daySlots.map((day, index) => (
                  <Button
                    key={index}
                    className={"bg-background"}
                    variant="outline"
                  >
                    {day}
                  </Button>
                ))}
            </div>
          </div>

          {/* Time Slots */}
          <div className="mt-3">
            <h4 className="mb-3 text-lg font-medium">Select Time Slot</h4>

            <div className="grid grid-cols-2 gap-3">
              {timeSlots &&
                timeSlots.map((time, index) => (
                  <Button
                    key={index}
                    className={"bg-background"}
                    fullWidth
                    variant="outline"
                  >
                    {time}
                  </Button>
                ))}
            </div>
          </div>

          {/* Fee Card */}
          <div className="mt-3 rounded-2xl bg-primary/5 px-5">
            <div className="flex items-center justify-between">
              <span className="text-default-600">Consultation Fee</span>

              <span className="font-semibold">${schedule?.fee}</span>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-default-600">Platform Fee</span>

              <span>$5</span>
            </div>

            <Separator className="my-4" />

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">Total</span>

              <span className="text-xl font-bold text-foreground">
                ${Number(schedule?.fee) + 5}
              </span>
            </div>
          </div>

          {/* Selected Slot */}
          <div className="mt-6 rounded-2xl bg-primary/10 ">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>

              <span className="font-medium text-primary">Thu at 10:00 AM</span>
            </div>
          </div>

          {/* Book Button */}
          <Button
            size="lg"
            color="primary"
            className="mt-6 w-full text-lg font-semibold"
          >
            Confirm Appointment
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default page;
