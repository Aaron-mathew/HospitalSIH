import React from "react";
import Button from "../components/partials/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdIntegrationInstructions } from "react-icons/md";
import { MdOutlineBatchPrediction } from "react-icons/md";
import { GoWorkflow } from "react-icons/go";
import ServicesCard1 from "../components/partials/ServicesCard1";
import ServicesCard2 from "../components/partials/ServicesCard2";
import ServicesCard3 from "../components/partials/ServicesCard3";
import ServicesCard4 from "../components/partials/ServicesCard4";
import ServicesCard5 from "../components/partials/ServicesCard5";
import ServicesCard6 from "../components/partials/ServicesCard6";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import Doctors from './Doctors'

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;
  const icon4 = <MdIntegrationInstructions size={35} className="text-backgroundColor" />
  const icon5 = <MdOutlineBatchPrediction size={35} className="text-backgroundColor" />
  const icon6 = <GoWorkflow size={35} className="text-backgroundColor" />



  return (
    <>

      <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16 shadow-lg pb-14"  >
        <div className=" flex flex-col items-center lg:flex-row justify-between">
          <div>
            <h1 className=" text-4xl font-semibold text-center lg:text-start">
              Our Services
            </h1>
            <p className=" mt-2 text-center lg:text-start font-serif text-lg">
              Empowering hospitals with efficient management tools for improved patient care and operational excellence.
            </p>
          </div>
          <div className=" mt-4 lg:mt-0">
            <Button title="See Services" />
          </div>
        </div>
        <div className=" flex flex-col pt-14 ">
          <div className=" flex flex-row gap-4 mb-4"> 
            <ServicesCard1 icon={icon1} title="Patient Flow Optimization" />
            <ServicesCard2 icon={icon2} title="Real-Time Bed Management" />
            <ServicesCard3 icon={icon3} title="Automated Inventory Management" />
          </div>
          <div className=" flex flex-row gap-4"> 
            <ServicesCard4 icon={icon4} title="City-Wide Hospital Integration" />
            <ServicesCard5 icon={icon5} title="Predictive Analytics and Decision Support" />
            <ServicesCard6 icon={icon6} title="Patient Flow Optimization" />
          </div>
        </div>
      </div>
      <Doctors />
    </>
  );
};

export default Services;
