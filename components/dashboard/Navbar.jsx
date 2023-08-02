import React, { useContext, useState } from "react";
import Image from "next/image";

import { AuthContext } from "../../context/auth";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className='bg-transparent flex flex-row justify-between px-8 pt-8 h-16 w-full'>
      <p className="text-gray-600 font-semibold text-2xl">{ activePage }</p>
      <div className="flex justify-center items-center gap-x-2">
        <p className="text-sm font-semibold text-gray-600">{user?.name}</p>
        <Image
          src="/assets/dashboard/user.png"
          width={25}
          height={25}
        />
      </div>
    </div>
  );
};

export default Navbar;