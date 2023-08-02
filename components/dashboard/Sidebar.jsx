import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { dashboardLinks } from '../../constants';

const Sidebar = () => {
  return (
    <div className='bg-gray-600 flex flex-col items-center lg:w-1/5 h-screen'>
      <div className='flex flex-col justify-center items-center gap-y-2 mt-12'>
        <Image src="/assets/logo.png" width={50} height={50} priority />
        <p className='font-semibold text-2xl text-white'>ENIGMA</p>
      </div>
      <div className='flex flex-col gap-y-4 mt-8'>
        {
          dashboardLinks.map((item)=>(
            <Link href={item?.link}>
              <div className='flex gap-x-2'>
                <Image src={item?.icon} width={20} height={20} />
                <span className="text-sm text-gray-300">{item?.title}</span>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Sidebar;
