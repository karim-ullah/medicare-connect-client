import DashboardHeading from '@/components/dashboard/DashboardHeading';
import ManageDoctorsCard from '@/components/dashboard/manage-doctors/ManageDoctorsCard';
import { getDoctors } from '@/lib/Actions/admin/actiions';
import { Avatar, Button, Card, Chip } from '@heroui/react';
import React from 'react';
import { BsShieldFillExclamation } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

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