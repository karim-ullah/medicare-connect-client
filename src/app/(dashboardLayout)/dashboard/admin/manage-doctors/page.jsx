import DashboardHeading from '@/components/dashboard/DashboardHeading';
import ManageDoctorsCard from '@/components/dashboard/manage-doctors/ManageDoctorsCard';
import { getDoctors } from '@/lib/Actions/admin/actiions';
import React from 'react';

const ManageDoctors = async() => {
    const doctors = await getDoctors()
    // console.log(doctors, 'frommmmm');
    return (
        <div className='py-10 px-6'>
            <DashboardHeading tittle={'Manage Doctors'} description={'Verify, reject, or manage doctor profiles'}/>
            

      <div className='mt-3 space-y-3'>
        {doctors &&(
          doctors.map(doctor => <ManageDoctorsCard key={doctor._id} doctor = {doctor} />)
        )}
      </div>

            
        </div>
    );
};

export default ManageDoctors;