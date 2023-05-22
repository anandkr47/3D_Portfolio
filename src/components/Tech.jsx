/*import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    
   // <div className='flex flex-row flex-wrap justify-center gap-10'>
     // {technologies.map((technology) => (
       // <div className='w-28 h-28' key={technology.name}>
         // <BallCanvas icon={technology.icon} />
     //   </div>
     // ))}
   // </div>
 
  );
};

export default SectionWrapper(Tech, "");*/

import React, { useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import "./Tech.css"; // Import the CSS file for Tech component styles

const Tech = () => {
  const iconRefs = useRef([]);

  useEffect(() => {
    iconRefs.current.forEach((iconRef, index) => {
      const delay = index * 100; // Adjust the delay as per your preference
      iconRef.style.animationDelay = `${delay}ms`;
    });
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div
          className="w-28 h-28 animate-float" // Add the floating animation class here
          key={technology.name}
          ref={(ref) => (iconRefs.current[index] = ref)}
        >
          <img src={technology.icon} alt={technology.name} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

