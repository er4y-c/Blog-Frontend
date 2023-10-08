import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ButtonGroup = ({ blogVisible }) => {
  return (
    <div className='flex gap-x-2'>
        <Link href='#'>
            <Image src="/assets/dashboard/edit.png" width={20} height={20} alt="edit" />
        </Link>
        <button onClick={() => console.log("delete click")}>
            <Image src="/assets/dashboard/delete.png" width={20} height={20} alt="delete" />
        </button>
        <button onClick={() => console.log("visible click")}>
            <Image
            src={ blogVisible ? "/assets/dashboard/visible.png" : "/assets/dashboard/invisible.png"}
            width={20}
            height={20}
            alt="eye"
            />
        </button>
    </div>
  );
};

export default ButtonGroup;
