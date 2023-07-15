import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles/styles";
import SectionContainer from "../SectionContainer";
import ProjectCard from "../ProjectCard";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The projects I have worked on, finished and contributed to are listed below with the technologies I use,
          sample images and GitHub links.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionContainer(Works, "");