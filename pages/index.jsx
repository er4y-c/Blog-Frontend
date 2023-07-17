import React from 'react';
import { About, Contact, Experience, Hero, Tech, Works, StarsCanvas } from "../components/pages";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center pt-16'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
    </div>
  );
};

export default Home;