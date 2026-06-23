
import DashboardHeading from "@/components/dashboard/DashboardHeading";
import { getUser } from "@/lib/core/session";
import { getAppointmentRequests } from "@/lib/api/doctor";
import RequestCard from "@/components/dashboard/appointment-requests/RequestCard";

export default async function AppointmentCard() {
    const user = await getUser()
    const doctorId = user?.id
    const appointments = await getAppointmentRequests(doctorId)

    
  return (

    <div className="py-10 px-6">

        <DashboardHeading tittle={'Appointment Requests'} description={'Review and manage patient appointments'}/>

    <div>
        {appointments && (
            appointments.map(appointment => <RequestCard key={appointment._id} appointment = {appointment}/>)
        )}
    </div>
    </div>
  );
}