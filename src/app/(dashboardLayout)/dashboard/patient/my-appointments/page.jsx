import DashboardHeading from "@/components/dashboard/DashboardHeading";
import MyAppointmentCard from "@/components/dashboard/my-appointmentPatient/MyAppointmentCard";
import { getMyAppointments } from "@/lib/Actions/patient/action";
import { getUser } from "@/lib/core/session";

const MyAppointmentsPage = async () => {
  const user = await getUser();
  const patientId = user?.id;
  // console.log(patientId);
  const myAppointments = await getMyAppointments(patientId);
  // console.log(myAppointments, "hello");
  return (
    <div className="py-10 px-6">
      <DashboardHeading
        tittle={"My Appointments"}
        description={"Manage and track all your appointments"}
      />

      <div>
        {myAppointments &&
          myAppointments.map((appointment) => (
            <MyAppointmentCard
              key={appointment._id}
              appointment={appointment}
            />
          ))}
      </div>
    </div>
  );
};

export default MyAppointmentsPage;
