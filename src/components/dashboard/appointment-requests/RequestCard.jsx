"use client";
import { Card, Button, Chip } from "@heroui/react";
import { FiClock } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsCheckCircle } from "react-icons/bs";
import { updateStatus } from "@/lib/doctor/appointment";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const RequestCard = ({ appointment }) => {
  const router = useRouter();
  const appointmentId = appointment._id;

  const handleStatus = async (status) => {
    const res = await updateStatus(appointmentId, { status });
    if (res.modifiedCount > 0) {
      toast.success("Status changed successfully");
      if (status === "Completed") {
        router.push("/dashboard/doctor/prescriptions");
      } else {
        router.refresh();
      }
    }
  };

  return (
    <Card
      className={`mt-6 rounded-3xl p-4 ${
        appointment.status === "Completed" ? "hidden" : "block"
      }`}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div className="flex gap-4 sm:gap-5">
          {/* Icon */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent-soft">
            <FiClock size={32} className="text-accent" />
          </div>

          {/* Content */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-bold sm:text-2xl">
                {appointment.patientName}
              </h3>

              <Chip
                color="success"
                variant="soft"
                className="font-medium uppercase"
              >
                {appointment.status}
              </Chip>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="flex items-center gap-2">
                <MdOutlineDateRange />
                {appointment.appointmentDate}
              </span>

              <span className="flex items-center gap-2">
                <FiClock />
                {appointment.appointmentTime}
              </span>

              {appointment.price != null && (
                <span className="flex items-center gap-2">
                  <RiMoneyDollarCircleLine />${appointment.price}
                </span>
              )}

              <span className="flex items-center gap-2 text-success">
                <BsCheckCircle />
                {appointment.paymentStatus}
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex shrink-0 gap-3">
          {appointment.status === "Confirmed" ||
          appointment.status === "Completed" ? (
            <Button onClick={() => handleStatus("Completed")}>
              Mark as complete &amp; prescribe
            </Button>
          ) : (
            <>
              <Button
                onClick={() => handleStatus("Confirmed")}
                variant="outline"
                className="bg-background"
              >
                Accept
              </Button>
              <Button
                onClick={() => handleStatus("Rejected")}
                variant="danger-soft"
              >
                Reject
              </Button>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

export default RequestCard;
