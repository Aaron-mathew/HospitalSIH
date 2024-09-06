import React from "react";
import img from "../assets/img/about.jpg";
import Services from "./Services";

const About = () => {
  return (
    <> 
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5 shadow-lg">    
       <div className=" w-full lg:w-3/4">
          <img className="rounded-lg shadow-black shadow-lg " src={img} alt="img" />
        </div>
        <div className=" w-full lg:w-3/4 space-y-4 mt-[-100px] lg:mt-[-50px] ">
          <h1 className="text-4xl font-semibold text-center lg:text-start">About Us</h1>
          <p className=" text-justify lg:text-start">
            This theory views a hospital as a complex system with interconnected components. It emphasizes the importance of understanding how changes in one part of the system affect the others. For instance, improvements in patient care may lead to increased patient satisfaction, which can positively impact the hospital's reputation and financial performance.
          </p>
          <p className="text-justify lg:text-start">
            Quality improvement theories and methodologies, such as Lean Six Sigma, focus on identifying and eliminating waste and inefficiencies within processes. These approaches help hospitals to improve patient outcomes, reduce costs, and enhance overall performance.
          </p>
          <p className="text-justify lg:text-start">
            Strategic management involves setting long-term goals and developing plans to achieve them. In healthcare, strategic planning helps hospitals to identify their competitive advantages, assess market trends, and allocate resources effectively. By developing a sound strategy.
          </p>
        </div>
    </div>
    <Services />
    </>
  );
};

export default About;
