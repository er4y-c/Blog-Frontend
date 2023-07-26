import React, { useContext, useState } from "react";

import { AuthContext } from "../../context/auth";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className='bg-transparent flex justify-between px-8 pt-8'>
      <p className="text-gray-600 font-semibold text-2xl">{ activePage }</p>
    </div>
  );
};

export default Navbar;