import React from "react";
/*import { Tilt } from '/node_modules/.vite/deps/react-tilt.js?v=b80d44d8';*/
import { Tilt } from 'react-tilt';

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
        

      </motion.p>
      <motion.div>
              
    <button
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
      onClick={() => window.open('https://drive.google.com/file/d/your_file_id/view?usp=sharing', '_blank')}
    >
      Download CV
    </button>
      </motion.div>
      


     { /*<div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      SERVICE CARDS ARE NOT WORKING  TO USE IT REMOVE THE COMMENT OUT */
        }
    </>
  );
};

export default SectionWrapper(About, "about");
