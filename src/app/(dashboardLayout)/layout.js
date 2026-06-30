import Sidebar from '@/components/dashboard/Sidebar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='min-h-screen flex'>
            <Sidebar></Sidebar>
            <div className='md:flex-1 bg-[#F0F7FF]'>
                
            {children}
            </div>
        </div>
    );
};

export default DashboardLayout;