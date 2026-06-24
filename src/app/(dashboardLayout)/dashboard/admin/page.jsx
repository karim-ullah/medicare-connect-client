import DashboardHeading from '@/components/dashboard/DashboardHeading';
import React from 'react';

const AdminPage = () => {
    return (
        <div className='py-10 px-6'>
            <DashboardHeading tittle={'Admin Overview'} description={'Platform-wide statistics and insights'}/>
        </div>
    );
};

export default AdminPage;