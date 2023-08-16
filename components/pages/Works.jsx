import React, { useContext } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles/styles";
import SectionContainer from "../SectionContainer";
import ProjectCard from "../ProjectCard";
import { fadeIn, textVariant } from "../../utils/motion";
import { PortfolioContext } from "../../context/portfolio";

const Works = () => {
  const { userPort } = useContext(PortfolioContext);
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
        {userPort?.projects?.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            source_code_link={project?.link}
            tags={project?.tags}
            name={project?.title}
            description={project?.description}
            image={project?.imagePath}
          />
        ))}
      </div>
    </>
  );
};

export default SectionContainer(Works, "");