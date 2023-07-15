import React from "react";
import { motion } from "framer-motion"
import { BallCanvas } from "../canvas";
import SectionContainer from "../SectionContainer";
import { technologies } from "../../constants";
import { textVariant } from "../../utils/motion";

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">the technologies I used</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Languages and Tools</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-4 lg:mt-8'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionContainer(Tech, "tech");