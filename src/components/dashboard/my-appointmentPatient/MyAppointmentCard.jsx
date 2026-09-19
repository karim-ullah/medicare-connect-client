"use client";
import {
  deleteAppointment,
  updateAppointmentDay,
} from "@/lib/Actions/patient/action";
import { Button, Card, Chip, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiCalendar, FiClock } from "react-icons/fi";
import { MdOutlinePayments } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const MyAppointmentCard = ({ appointment }) => {
  const [open, setOpen] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState("");
  const router = useRouter();
  const appointmentId = appointment._id;

  const handleDelete = async () => {
    const res = await deleteAppointment(appointmentId);
    if (res.deletedCount > 0) {
      toast.success("Appointment cancelled");
      router.refresh();
    }
  };

  const handleEdit = async () => {
    const res = await updateAppointmentDay(appointmentId, { appointmentDate });
    if (res.modifiedCount > 0) {
      toast.success("Appointment rescheduled");
      setOpen(false);
      router.refresh();
    }
  };

  return (
    <Card className="my-3 w-full p-0 shadow">
      <div className="flex flex-col justify-between gap-4 p-4 md:flex-row">
        {/* Left Side */}
        <div className="flex gap-4 sm:gap-5">
          {/* Icon */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent-soft">
            <FiCalendar className="text-3xl text-accent" />
          </div>

          {/* Content */}
          <div className="min-w-0 space-y-2">
            {/* Doctor */}
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-lg font-bold">
                Dr. {appointment.doctorName}
              </h2>

              <Chip color="success" variant="soft">
                {appointment.status}
              </Chip>
            </div>

            {/* Specialization */}
            <p className="text-lg text-foreground">
              {appointment.specialization}
            </p>

            {/* Appointment Info */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
              <span className="flex items-center gap-2">
                <FiCalendar />
                {appointment.appointmentDate}
              </span>

              <span className="flex items-center gap-2">
                <FiClock />
                {appointment.appointmentTime}
              </span>

              {appointment.totalFee != null && (
                <span className="flex items-center gap-2">
                  <MdOutlinePayments />${appointment.totalFee}
                </span>
              )}

              <span className="font-medium text-success">
                ✓ {appointment.paymentStatus}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        {appointment.status !== "Completed" && (
          <div className="flex flex-col gap-3 md:min-w-[170px]">
            <Button
              onClick={() => setOpen(true)}
              variant="outline"
              fullWidth
              className="bg-background"
            >
              Reschedule
            </Button>

            <Button onClick={handleDelete} variant="danger-soft" fullWidth>
              Cancel
            </Button>
          </div>
        )}
      </div>

      {open && (
        <div className="flex items-end gap-3 border-t p-4">
          <TextField
            onChange={(value) => setAppointmentDate(value)}
            className="w-full"
            name="day"
            type="text"
            variant="secondary"
          >
            <Label>Update Day</Label>
            <Input placeholder="e.g. Monday" />
          </TextField>

          <div className="flex items-center gap-2">
            <Button onClick={handleEdit}>Confirm</Button>
            <Button
              isIconOnly
              variant="ghost"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              <RxCross2 />
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default MyAppointmentCard;
