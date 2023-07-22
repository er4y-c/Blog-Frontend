import React from 'react';
import { ErrorMessage, Field } from 'formik';

const Input = ({ name, type, placeholder, handleData, label }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="username" className='text-sm text-gray-500 font-semibold'>{label}</label>
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-[350px] p-4 bg-gray-700 focus:outline-none border border-gray-80 rounded text-sm"
        />
          <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
    </div>
  );
};

export default Input;