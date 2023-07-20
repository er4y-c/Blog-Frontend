import React from "react";
import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
              background: "#1d1836",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: "#383E56" }}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <Image
                  src={experience?.companyIcon}
                  alt={experience?.companyName}
                  className='object-contain rounded-full'
                  width={54}
                  height={54}
                />
              </div>
            }
          >
            <div>
              <h3 className='text-white text-[24px] font-bold'>{experience?.position}</h3>
              <p
                className='text-secondary text-[16px] font-semibold'
                style={{ margin: 0 }}
              >
                {experience?.companyName}
              </p>
            </div>
      
            <ul className='mt-5 list-disc ml-5 space-y-2'>
                <li
                  key={`experience-point-1}`}
                  className='text-white-100 text-[14px] pl-1 tracking-wider'
                >
                  {experience?.description}
                </li>
            </ul>
          </VerticalTimelineElement>
        );
    };

export default ExperienceCard;