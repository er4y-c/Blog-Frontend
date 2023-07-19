import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { About, Contact, Experience, Hero, Tech, Works, StarsCanvas } from "../components/pages";
import Navbar from "../components/Navbar";
import { portfolio_services } from '../services/portfolio';

const PortfolioPage = () => {
  const router = useRouter();
  const { username } = router.query;
  const [userPort, setUserPort] = useState(null);

  useEffect(() => {
    if(username) {
        portfolio_services.get_user_portfolio(username)
        .then((res) => {
            setUserPort(res);
        })
    }
  }, [username]);

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
    </>
  );
};

export default PortfolioPage;