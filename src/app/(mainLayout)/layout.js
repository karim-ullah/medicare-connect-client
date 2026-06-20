import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (

        <div>

        <header>
          <Navbar/>
        </header>
        <main>

        {children}
        </main>
        </div>
    );
};

export default MainLayout;