import React, { useEffect } from 'react';
import Head from 'next/head';
import { About, Contact, Experience, Hero, Tech, Works, StarsCanvas } from "../components/pages";
import Navbar from "../components/Navbar";


const Home = () => {
  
  return (
    <>
      <Head>
        <title>Eray Aynacı | Frontend Developer</title>
        <meta name="title" content="Eray Aynacı | Frontend Developer" />
        <meta
          name="description"
          content="Personal blog and portfolio platform | Eray Aynacı"
        />

        <meta name="robots" content="index, follow" />

      </Head>
      <div className='relative z-0 bg-primary'>
          <div className='bg-primary bg-cover bg-no-repeat bg-center pt-16'>
            <Navbar />
          </div>
          <div className='h-screen'>Ana sayfa</div>
      </div>
    </>
  );
};

export default Home;