import React from "react";
import ServiceCard from "../ServiceCard";
import { motion } from "framer-motion";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const About = () => {
  return (
    <div className="mx-4 lg: mx-16">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary max-w-3xl leading-[30px]'
      >
        As a developer and computer science student, I am equipped with strong
        technical knowledge and experience to develop highquality and modern web applications. With my ability to
        produce creative solutions and collaborate effectively
        with teams, I am confident in delivering valuable results
        for your business
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;