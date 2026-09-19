import { getAppointmentRequests } from "@/lib/api/doctor";
import { getUser } from "@/lib/core/session";
import { Card, Chip } from "@heroui/react";
import Link from "next/link";
import { FaHistory } from "react-icons/fa";
import { FiArrowRight, FiClock, FiUsers } from "react-icons/fi";

const DoctorPage = async () => {
  const user = await getUser();
  const doctorId = user?.id;
  const appointments = (await getAppointmentRequests(doctorId)) ?? [];
  const latestAppointment = appointments.at(-1);

  const completed = appointments.filter(
    (item) => String(item.status).toLowerCase() === "completed",
  ).length;
  const active = appointments.length - completed;

  const stats = [
    { icon: FiUsers, value: appointments.length, label: "Total appointments" },
    { icon: FiClock, value: active, label: "Active requests" },
    { icon: FaHistory, value: completed, label: "Completed visits" },
  ];

  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-bold">Welcome back, {user?.name}</h2>
      <p className="text-sm text-muted">
        Here&apos;s a summary of your healthcare activity
      </p>

      <div className="grid gap-5 py-6 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <div className="rounded-xl bg-accent-soft p-3 text-accent">
                <Icon size={24} />
              </div>
              <div>
                <h3 className="mt-2 text-3xl font-bold">{value}</h3>
                <p className="text-sm text-muted">{label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Card className="rounded-3xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Latest appointment</h2>

          <Link
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            href="/dashboard/doctor/appointment-requests"
          >
            View all <FiArrowRight />
          </Link>
        </div>

        {latestAppointment ? (
          <div className="mt-4 rounded-2xl border border-border bg-background p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft">
                  <FiClock size={28} className="text-accent" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    {latestAppointment.patientName ||
                      latestAppointment.doctorName}
                  </h3>

                  <p className="text-muted">
                    {latestAppointment.appointmentDate} at{" "}
                    {latestAppointment.appointmentTime}
                  </p>
                </div>
              </div>

              <Chip color="success" variant="soft">
                {latestAppointment.status}
              </Chip>
            </div>
          </div>
        ) : (
          <div className="mt-4 rounded-2xl border border-dashed border-border bg-background p-8 text-center">
            <p className="font-medium text-slate-900">No appointments yet</p>
            <p className="mt-1 text-sm text-muted">
              New patient requests will appear here.
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default DoctorPage;
