import React, { useContext } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "../ExperienceCard";
import SectionContainer from "../SectionContainer";
import { textVariant } from "../../utils/motion";
import { PortfolioContext } from "../../context/portfolio";

const Experience = () => {
  const { userPort } = useContext(PortfolioContext);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {userPort?.experiences?.map((experience, index) => (
            <ExperienceCard
              key={{index}}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionContainer(Experience, "work");