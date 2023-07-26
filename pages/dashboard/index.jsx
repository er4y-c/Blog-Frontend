import React, { useContext } from "react";

import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";

const dashboard = () => {
  return (
    <div className="bg-dashboard h-screen">
      <div className="flex">
        <Sidebar />
        <Navbar />
      </div>
    </div>
  );
};

export default dashboard;
