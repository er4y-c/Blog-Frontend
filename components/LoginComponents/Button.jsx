import React from 'react';

const Button = ({type, label}) => {
  return (
    <button type={type} className='bg-[#915EFF] w-full h-10 rounded'>{label}</button>
  );
};

export default Button;