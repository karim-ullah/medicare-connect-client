import { getTotalPayment } from "@/lib/Actions/patient/action";
import {
  FaRegCalendarCheck,
  FaHistory,
  FaMoneyBillWave,
} from "react-icons/fa";

const PatientOverView = async ({ myAppointments = [], patientId }) => {
  const total = await getTotalPayment(patientId);
  const appointments = myAppointments ?? [];

  const completed = appointments.filter(
    (item) => String(item.status).toLowerCase() === "completed",
  ).length;
  const upcoming = appointments.length - completed;

  const stats = [
    {
      icon: FaRegCalendarCheck,
      value: upcoming,
      label: "Upcoming Appointments",
    },
    { icon: FaHistory, value: completed, label: "Completed Appointments" },
    { icon: FaMoneyBillWave, value: `$${total}`, label: "Total Payments" },
  ];

  return (
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
  );
};

export default PatientOverView;
