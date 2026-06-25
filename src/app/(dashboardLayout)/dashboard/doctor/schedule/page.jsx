import SchedulePageContent from "@/components/Schedule/SchedulePageContent";
import { getDoctor, getDoctorSchedules } from "@/lib/api/doctor";
import { getUser } from "@/lib/core/session";

const SchedulePage = async () => {
  const user = await getUser();
  const userId = user?.id;

  const doctor = await getDoctor(userId);
  const doctorSchedules = await getDoctorSchedules(userId);

  return (
    <div className="py-10 px-6">
      <SchedulePageContent
        user={user}
        doctor={doctor}
        doctorSchedules={doctorSchedules}
      />
    </div>
  );
};

export default SchedulePage;
