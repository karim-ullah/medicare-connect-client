import PatientOverView from "@/components/dashboard/my-appointmentPatient/PatientOverView";
import { getMyAppointments } from "@/lib/Actions/patient/action";
import { getUser } from "@/lib/core/session";
import { Card, Chip } from "@heroui/react";
import Link from "next/link";
import { FaCalendarCheck } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const PatientPage = async () => {
  const user = await getUser();
  const patientId = user?.id;
  const myAppointments = (await getMyAppointments(patientId)) ?? [];

  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-bold">Welcome back, {user?.name}</h2>
      <p className="text-sm text-muted">
        Here&apos;s a summary of your healthcare activity
      </p>

      {/* stats */}

      <PatientOverView myAppointments={myAppointments} patientId={patientId} />

      {/* latest appointments */}

      <Card>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Latest Appointments</h3>
          <Link
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            href="/dashboard/patient/my-appointments"
          >
            View all <MdArrowOutward />
          </Link>
        </div>

        {myAppointments.length > 0 ? (
          <div className="mt-4 space-y-3">
            {myAppointments.slice(0, 2).map((appointment) => (
              <div
                key={appointment._id}
                className="flex items-center gap-3 rounded-2xl bg-accent-soft p-4"
              >
                <div className="flex h-12 w-10 shrink-0 items-center justify-center rounded-lg bg-background">
                  <FaCalendarCheck size={18} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <h4 className="truncate font-semibold">
                    {appointment.doctorName}
                  </h4>
                  <p className="font-mono text-sm text-muted">
                    {appointment.specialization}
                  </p>
                  <span className="text-sm text-muted">
                    {appointment.appointmentDate}
                  </span>
                </div>
                <div className="ml-auto shrink-0">
                  <Chip color="success" variant="soft">
                    {appointment.status}
                  </Chip>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 rounded-2xl border border-dashed border-border p-6 text-center text-sm text-muted">
            You have no appointments yet.
          </p>
        )}
      </Card>
    </div>
  );
};

export default PatientPage;
