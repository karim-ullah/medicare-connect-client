"use client";
import { deleteAppointment, updateAppointmentDay } from "@/lib/Actions/patient/action";
import { Button, Card, Chip, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiCalendar, FiClock } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
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
      toast.success("deleted success");
      router.refresh();
    }
  };

  const handleEdit = async() => {
    const res = await updateAppointmentDay(appointmentId, {appointmentDate})
    if(res.modifiedCount > 0){
      toast.success('updated schedule')
      setOpen(false)
      router.refresh()
    }
  };
  return (
    <Card className="w-full shadow bg-background p-0 my-3">
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
              <h2 className="text-lg font-bold">
                Dr. {appointment.doctorName}
              </h2>

              <Chip color="success" variant="flat">
                {appointment.status}
              </Chip>
            </div>

            {/* Specialization */}
            <p className="text-foreground text-lg">
              {appointment.specialization}
            </p>

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

              <div className="text-success font-medium">
                ✓ {appointment.paymentStatus}
              </div>
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
        {appointment.status !== 'Completed' && (
           <div className="flex flex-col gap-3 md:min-w-[170px]">
          <Button
            onClick={() => setOpen(true)}
            color="primary"
            fullWidth
            variant="outline"
            className={"bg-background hover:bg-accent/10 text-foreground"}
          >
            Reschedule
          </Button>

          <Button
            onClick={handleDelete}
            color="danger"
            fullWidth
            variant="outline"
            className={"bg-background hover:bg-accent/10 text-foreground"}
          >
            Cancel
          </Button>
        </div> 
        ) }
        
      </div>

      {open && (
        <div className="p-3 flex items-center gap-2 ">
          <TextField
            onChange={(value) => setAppointmentDate(value)}
            className="w-full"
            name="day"
            type="text"
            variant="secondary"
          >
            <Label>Update Day</Label>
            <Input />
          </TextField>

          <div className="flex items-center gap-2 mt-5">
            <Button onClick={handleEdit}>confirm</Button>
            <RxCross2 />
          </div>
        </div>
      )}
    </Card>
  );
};

export default MyAppointmentCard;
