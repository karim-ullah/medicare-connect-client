import DashboardHeading from "@/components/dashboard/DashboardHeading";
import AddPrescription from "@/components/dashboard/prescriptionpage/AddPrescription";
import PrescriptionCard from "@/components/dashboard/prescriptionpage/PrescriptionCard";
import { getDoctorPrescriptions } from "@/lib/api/doctor";
import { getUser } from "@/lib/core/session";


const PrescriptionsPage = async() => {
  const user = await getUser();
  const doctorId = user?.id
  const prescriptions = await getDoctorPrescriptions(doctorId)

  console.log(prescriptions, 'from rq');

  return (
    <div className="py-10 px-6">
      <DashboardHeading
        tittle={"Prescriptions"}
        description={"Create and manage patient prescriptions"}
      />

      <AddPrescription user={user} />

      <div>
        {prescriptions && (
          prescriptions.slice().reverse().map(prescription => <PrescriptionCard key={prescription._id} prescription={prescription}/>)
        )}
      </div>

      
    </div>
  );
};

export default PrescriptionsPage;
