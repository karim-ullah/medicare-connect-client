"use client";
import { createAppointment } from "@/lib/Actions/patient/action";
import { Button, Card, Separator } from "@heroui/react";
import React, { useState } from "react";

const RightSide = ({ schedule, user }) => {
//   patientId;
//   doctorId;
//   appointmentDate;
//   appointmentTime;
//   appointmentStatus;
//   symptoms;
//   paymentStatus;

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  // console.log(selectedDay, selectedTime);

  const daySlots = schedule.daySlots;
  const timeSlots = schedule.timeSlots;

  const totalFee = Number(schedule.fee) + 5

  const patientId = user?.id
  const patientName = user?.name
  const doctorId = schedule.doctorId
  const doctorName = schedule.name
  const specialization = schedule.specialization
  const appointmentDate = selectedDay
  const appointmentTime = selectedTime
  const paymentStatus = 'Paid'
  const status = 'pending'


  const appointmentData = {
    patientId,
    patientName,
    doctorId,
    doctorName,
    specialization,
    appointmentDate,
    appointmentTime,
    paymentStatus,
    status,
    price: totalFee,
  }



  const handleAppointmentSubmit = async()=>{
    const res = await fetch("/api/checkout_sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appointmentData),
  });

  const session = await res.json();
  // console.log(session, 'details page');
  window.location.href = session.url;

  


    // const res = await createAppointment(appointmentData)
    // console.log(res);
  }

  return (
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
                  onClick={() => setSelectedDay(day)}
                  key={index}
                  className={
                    selectedDay === day
                      ? "bg-accent/50 text-foreground"
                      : "bg-background"
                  }
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
                  onClick={() => setSelectedTime(time)}
                  className={
                    selectedTime === time ? "bg-accent/50" : "bg-background"
                  }
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
              ${totalFee}
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

            <span className="font-medium text-primary">
              {selectedDay || "day"} at {selectedTime || "0.00"}
            </span>
          </div>
        </div>

        {/* Book Button */}
        <Button
        type="button"
        onClick={handleAppointmentSubmit}
          size="lg"
          color="primary"
          className="mt-6 w-full text-lg font-semibold"
        >
          Confirm Appointment
        </Button>
      </Card>
    </div>
  );
};

export default RightSide;
