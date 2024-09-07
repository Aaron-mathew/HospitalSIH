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
          <p className=" text-justify text-[3vh] lg:text-start">
          At Healio, we aim to revolutionize healthcare management with an integrated, city-wide platform designed to optimize patient flow, bed management, and inventory control. Our mission is to improve hospital efficiency and patient care by leveraging real-time data, predictive analytics, and automation. </p>
          <p className="text-justify text-[3vh] lg:text-start">
          By seamlessly connecting hospitals across a network, Healio ensures that healthcare systems operate smoothly, even during peak demand. </p>
          <p className="text-justify text-[3vh] lg:text-start">
          We are committed to transforming healthcare operations and enhancing the patient experience with cutting-edge technology and data-driven solutions.                              </p>
        </div>
    </div>
    <Services />
    </>
  );
};

export default About;
