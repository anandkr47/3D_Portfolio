import React from "react";
/*import { Tilt } from '/node_modules/.vite/deps/react-tilt.js?v=b80d44d8';*/
import { Tilt } from 'react-tilt';

import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { Minorprojects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { FaPlay } from "react-icons/fa";
import { useState, useEffect } from 'react';



const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link, // add live_link prop
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
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-between m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>

            {live_link && ( // add live link only if provided
              <div
                onClick={() => window.open(live_link, "_blank")}
                className='bg-green-500 text-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <FaPlay />
              </div>
            )}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Minorproject = () => {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  useEffect(() => {
    // This function will be called whenever the state of showProjects changes
    // and will cause the component to re-render
  }, [showProjects]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Want To See Some Of My</p>
        <h2 className={`${styles.sectionHeadText}`}>Live Projects?</h2>
        <button
  onClick={toggleProjects}
  style={{
    background: '#34D399',
    color: '#FFFFFF',
    borderRadius: '5px',
    padding: '8px 12px',
    border: 'none',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 50%, transparent 50%)',
    backgroundSize: '40px 40px',
    position: 'relative',
    overflow: 'hidden',
  }}
>
  <span style={{ position: 'relative', top: '-2px', zIndex: '1' }}>Go Live</span>
  <span
    style={{
      position: 'absolute',
      top: '-10px',
      left: '-50%',
      width: '200%',
      height: '200%',
      borderRadius: '50%',
      backgroundColor: '#34D399',
      transform: 'scale(0)',
      zIndex: '0',
      transition: 'transform 0.3s',
    }}
  />
</button>

      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className={`mt-20 flex flex-wrap gap-7 ${showProjects ? '' : 'hidden'}`}>
        {Minorprojects.map((Minorproject, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...Minorproject} />
        ))}
      </div>

    </>
  );
};
export default SectionWrapper(Minorproject, "");

