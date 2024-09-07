import React from "react";
import Button from "../components/partials/Button";
import doctorImg from "../assets/img/doctors.jpg"
import About from "./About";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <> <Navbar />
      <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-white text-black bg-no-repeat bg-cover opacity-90 shadow-lg " >
        <div className=" w-full lg:w-4/5 space-y-5 mt-10">
          <h1 className=" w-1/2 text-5xl font-bold leading-tight test-center">
            Empowering Health Choices for a Vibrant Life Your Trusted...
          </h1>
          <p className="w-3/4 font-serif text-lg"  >
            Harnessing the power of technology to transform healthcare. Our cutting-edge hospital management software provides efficient workflows, real-time data insights, and seamless communication, enabling hospitals to deliver exceptional care in the digital age.
          </p>
          <Button className = ""  title="See Services" />
        </div>
        <img src={doctorImg} alt="Doctors" className=" absolute right-10 top-1/2 transform -translate-y-1/2 " />
      </div>
      <About />
    </>
  );
};
export default Home;