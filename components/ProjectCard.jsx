import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
  }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <Image
              src={image}
              alt={`Project-${index} image`}
              className='rounded-2xl'
              fill
            />
  
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <Image
                  src="/assets/github.png"
                  alt='source code'
                  width={35}
                  height={35}
                />
              </div>
            </div>
          </div>
  
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
  
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag?.name}`}
                className={`text-[14px] ${tag?.color}`}
              >
                #{tag}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
  };

export default ProjectCard;