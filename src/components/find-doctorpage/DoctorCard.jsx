import { Button } from '@heroui/react';
import React from 'react';

const DoctorCard = ({schedule}) => {
    return (
        <div className="w-full overflow-hidden rounded-3xl border border-default-200 bg-background shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          {/* Image */}
          <div className="relative h-60 overflow-hidden">
            <img
              src={schedule.imgUrl}
              alt="Doctor"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />

            <div className="absolute right-3 top-3 rounded-full bg-success px-3 py-1 text-xs font-medium text-white">
              {schedule.status}
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Name & Specialization */}
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Dr. {schedule.name}
              </h3>

              <p className="text-sm font-medium text-primary">Cardiologist</p>

              <p className="mt-1 text-sm text-default-500">
                {schedule.hospital}
              </p>
            </div>

            {/* Qualifications */}
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary/10 py-1 text-xs font-medium text-primary">
                MBBS
              </span>

              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                FCPS
              </span>

              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                FACC
              </span>
            </div>

            {/* Available Days */}
            <div className="mt-2">

              <div className="flex flex-wrap gap-2">
                {["Mon", "Wed", "Fri"].map((day) => (
                  <span
                    key={day}
                    className="rounded-lg bg-default-100 py-1 text-sm"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>

            <div className=" bg-default-200" />

            {/* Stats */}
            <div className="flex items-center justify-between">
              <div className="flex">
                <p className="font-semibold">14 Years</p>
                <p className="font-semibold">2,344+</p>
              </div>

              

              <div>
                <p className="text-lg font-bold text-primary">$13</p>
              </div>
            </div>

            {/* Button */}
            <Button className="mt-5 w-full rounded-xl  font-medium transition hover:opacity-90">
              Book Appointment
            </Button>
          </div>
        </div>
    );
};

export default DoctorCard;