import React, { useContext } from 'react';
import Image from 'next/image';
import { Formik, Form } from 'formik';

import { validationSchema } from '../components/LoginComponents/validationSchema';
import Input from '../components/LoginComponents/Input';
import Button from '../components/LoginComponents/Button';
import { AuthContext } from '../context/auth';

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const handleSubmit = async (values) => {
    await login(values?.email, values?.password);
  };

  return (
    <div className='bg-gray-800 h-screen flex justify-center items-center'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className='flex flex-col justify-center items-center gap-y-4 rounded-xl w-11/12 lg:w-[350px] h-[400px]'>
          <Image src="/assets/logo.png" width={40} height={40} priority alt='Enigma logo' />
          <p className='font-semibold text-[#915EFF] text-3xl mb-4'>ENIGMA</p>
          <Input type="email" name="email" placeholder="Enter your email" label="Email" />
          <Input type="password" name="password" placeholder="Enter your secret key" label="Password" />
          <Button type="submit" label="Login" />
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
