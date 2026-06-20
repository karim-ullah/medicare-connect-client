import Sidebar from '@/components/dashboard/Sidebar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='min-h-screen flex'>
            <Sidebar></Sidebar>
            <div className='flex-1'>
                
            {children}
            </div>
        </div>
    );
};

export default DashboardLayout;