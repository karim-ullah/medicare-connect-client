import { Button, Card, Chip } from "@heroui/react";
import React from "react";
import { FiCalendar, FiClock } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlinePayments } from "react-icons/md";
const MyAppointmentCard = ({appointment}) => {
  return (
    <Card className="w-full border shadow bg-background p-0 my-3">
      <div className="flex flex-col md:flex-row justify-between gap-4 p-3">
        {/* Left Side */}
        <div className="flex gap-5">
          {/* Icon */}
          <div className="h-16 w-16 rounded-2xl bg-primary-50 flex items-center justify-center">
            <FiCalendar className="text-3xl text-primary" />
          </div>

          {/* Content */}
          <div className="space-y-2">
            {/* Doctor */}
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-xl font-bold">Dr. {appointment.doctorName}</h2>

              <Chip color="success" variant="flat">
                {appointment.status}
              </Chip>
            </div>

            {/* Specialization */}
            <p className="text-foreground text-lg">{appointment.specialization}</p>

            {/* Appointment Info */}
            <div className="flex flex-wrap items-center gap-3 text-default-600">
              <div className="flex items-center gap-2">
                <FiCalendar />
                <span>{appointment.appointmentDate}</span>
              </div>

              <div className="flex items-center gap-2">
                <FiClock />
                <span>{appointment.appointmentTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <MdOutlinePayments />
                <span>${appointment.totalFee}</span>
              </div>

              <div className="text-success font-medium">✓ {appointment.paymentStatus}</div>
            </div>

            {/* Reason */}
            <div className="bg-default-100 rounded-xl flex items-center gap-2 max-w-md">
              <HiOutlineDocumentText className="text-default-500" />
              <span>Annual cardiac checkup</span>
            </div>

            {/* Transaction */}
            <p className="font-medium text-sm">
              TXN:
              <span className="text-sm">TXN-2026-001892</span>
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-3 md:min-w-[170px]">
          <Button
            color="primary"
            fullWidth
            variant="outline"
            className={"bg-background hover:bg-accent/10 text-foreground"}
          >
            Reschedule
          </Button>

          <Button
            color="danger"
            fullWidth
            variant="outline"
            className={"bg-background hover:bg-accent/10 text-foreground"}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MyAppointmentCard;
