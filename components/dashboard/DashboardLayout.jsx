import React from 'react';

import Sidebar from './Sidebar';
import Navbar from './Navbar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-dashboard h-screen">
      <div className="flex w-full h-full">
        <Sidebar />
        <div className='flex flex-col w-full h-full px-8 gap-y-16'>
          <Navbar />
          { children } 
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;