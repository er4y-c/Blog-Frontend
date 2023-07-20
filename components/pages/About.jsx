import React, { useContext } from "react";
import { motion } from "framer-motion";
import ServiceCard from "../ServiceCard";
import SectionContainer from "../SectionContainer";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { PortfolioContext } from "../../context/portfolio";

const About = () => {
  const { userPort } = useContext(PortfolioContext);

  return (
    <div className="mx-4 lg:mx-16">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary max-w-3xl leading-[30px]'
      >
        { userPort?.overview }
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {userPort?.services?.map((service, index) => (
          <ServiceCard index={index} key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionContainer(About, "about");