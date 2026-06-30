import { getTotalPayment } from '@/lib/Actions/patient/action';
import {  FaHeart, FaHistory, FaMoneyBillWave, FaRegCalendarCheck } from 'react-icons/fa';

const PatientOverView = async({myAppointments, patientId}) => {
    const total = await getTotalPayment(patientId)
    // console.log(total);
    return (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 py-6">
        {/* Upcoming Appointments */}
        <div className="rounded-2xl border border-default-200 bg-background p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <FaRegCalendarCheck size={24} />
            </div>
            <div>
              <h3 className="mt-2 text-3xl font-bold">{myAppointments.slice(0,2).length}</h3>
              <p className="text-sm text-default-500">Upcoming Appointments</p>
            </div>

            
          </div>
        </div>

        {/* Appointment History */}
        <div className="rounded-2xl border border-default-200 bg-background p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <FaHistory size={24} />
            </div>
            <div>
              <h3 className="mt-2 text-3xl font-bold">{myAppointments?.length}</h3>
              <p className="text-sm text-default-500">Appointment History</p>
            </div>

            
          </div>
        </div>

        {/* Total Payments */}
        <div className="rounded-2xl border border-default-200 bg-background p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <FaMoneyBillWave size={24} />
            </div>
            <div>
              <h3 className="mt-2 text-3xl font-bold">${total}</h3>
              <p className="text-sm text-default-500">Total Payments</p>
            </div>

            
          </div>
        </div>

        {/* Favorite Doctors */}
        <div className="rounded-2xl border border-default-200 bg-background p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <FaHeart size={24} />
            </div>
            <div>
              <h3 className="mt-2 text-3xl font-bold">8</h3>
              <p className="text-sm text-default-500">Favorite Doctors</p>
            </div>

            
          </div>
        </div>
      </div>
    );
};

export default PatientOverView;