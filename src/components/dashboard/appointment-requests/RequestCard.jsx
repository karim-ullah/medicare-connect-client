"use client";
import { Card, Button, Chip } from "@heroui/react";
import { FiClock } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsCheckCircle } from "react-icons/bs";
import { LuFileText } from "react-icons/lu";
import { updateStatus } from "@/lib/doctor/appointment";
import toast from "react-hot-toast";
const RequestCard = ({ appointment }) => {
  const appointmentId = appointment._id;
  const handleStatus = async (data) => {
    const status = {};
    status.status = data;
    const res = await updateStatus(appointmentId, status);
    console.log(res);
    if (res.modifiedCount > 0) {
      toast.success("Status changed successfully");
      window.location.href = "/dashboard/doctor/appointment-requests";
    }
  };
  return (
    <Card className="rounded-3xl p-4 mt-6">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex gap-5">
          {/* Icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <FiClock size={32} className="text-foreground" />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold">{appointment.patientName}</h3>

              <Chip
                color="success"
                variant="flat"
                className="font-medium uppercase"
              >
                {appointment.status}
              </Chip>
            </div>

            <div className=" flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <MdOutlineDateRange />
                <span>{appointment.appointmentDate}</span>
              </div>

              <div className="flex items-center gap-2">
                <FiClock />
                <span>{appointment.appointmentTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <RiMoneyDollarCircleLine />
                <span>$180</span>
              </div>

              <div className="flex items-center gap-2 text-success">
                <BsCheckCircle />
                <span>{appointment.paymentStatus}</span>
              </div>
            </div>

            {/* Note */}
            <div className="flex items-center gap-2 rounded-xl bg-primary/5">
              <LuFileText className="text-primary" />
              <span className="text-accent/50">Annual cardiac checkup</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          {appointment.status === 'Confirmed' ? <Button>Mark as Complete and Prescripe</Button> : <div className="space-x-3">
            <Button
            onClick={() => handleStatus("Confirmed")}
            variant="outline"
            className="rounded-xl bg-background text-foreground"
          >
            Accept
          </Button>
          <Button
            onClick={() => handleStatus("Rejected")}
            variant="danger"
            className="rounded-xl bg-accent/10 text-foreground"
          >
            Reject
          </Button>
            </div>}
        </div>
      </div>
    </Card>
  );
};

export default RequestCard;
