import React from 'react';
import Image from 'next/image';
import Input from '../components/LoginComponents/Input';
import Button from '../components/LoginComponents/Button';

const LoginPage = () => {
  return (
    <div className='bg-gray-800 h-screen flex justify-center items-center gap-y-4'>
      <form className='flex flex-col justify-center items-center gap-y-4 rounded-xl w-[350px] h-[400px]'>
        <Image src="/assets/logo.png" width={40} height={40} priority />
        <p className='font-semibold text-[#915EFF] text-3xl mb-4'>ENIGMA</p>
        <Input type="text" placeholder="Enter your username" setData={()=>{}} label="Username" required />
        <Input type="password" placeholder="Enter your password" setData={()=>{}} label="Password" required />
        <Button type="submit" label="Login" />
      </form>
    </div>
  );
};

export default LoginPage;