import DashboardHeading from '@/components/dashboard/DashboardHeading';
import React from 'react';

const PaymentHistory = () => {
    return (
        <div className='py-10 px-6'>
            <DashboardHeading tittle={'Payment History'} description={'All your transaction records'} />
        </div>
    );
};

export default PaymentHistory;