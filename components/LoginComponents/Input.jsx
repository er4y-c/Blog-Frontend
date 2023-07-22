import React from 'react';

const Input = ({ id, name, type, placeholder, setData, label }) => {
  return (
    <div className='flex flex-col justify-start w-full gap-y-2'>
        <label className='text-sm text-gray-500 font-semibold'>{label}</label>
        <input
            id={id}
            name={name}
            type={type}
            className="w-full py-4 pl-4 bg-gray-700 focus:outline-none border border-gray-80 rounded"
            placeholder={placeholder}
            onChange={(e)=>{
                setData(e.target.value)
            }}
            required
        />
    </div>
  );
};

export default Input;