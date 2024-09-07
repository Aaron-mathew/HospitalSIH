import { React } from "react";
// import { Link, } from "react-scroll";
import Mylogo from '../assets/img/Healio.jpg'
import { useNavigate, Link } from "react-router-dom";
const Navbar = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };
  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className=" fixed w-full z-10 bg-white text-black shadow-md">
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 h-24 ">
          <div className=" flex flex-row items-center cursor-pointer ">
            <Link to="/" spy={true} smooth={true} duration={500}>
              <img className="h-20 w-20 object-contain md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32" src={Mylogo} alt="Healio Logo" />
            </Link>
          </div>

          <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleHomeClick}
              className="transition-all cursor-pointer hover:border-b hover:border-black"
            >
              Home
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:border-b hover:border-black"
            >
              About Us
            </Link>
            <Link
            
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:border-b hover:border-black"
            >
              Services
            </Link>
            <Link
            
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:border-b hover:border-black"
            >
              Hospitals
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:border-b hover:border-black"
            >
              Blog
            </Link>
          </nav>

          <div className="hidden lg:flex flex-row items-center gap-4">
            <button onClick={handleLoginClick} className="bg-black text-white rounded-full py-2 px-4 hover:shadow-black"
            >
              Login
            </button>
            <button onClick={handleSignupClick}
              className="bg-black shadow-black text-white rounded-full py-2 px-4 hover:shadow-black"
            >
              Signup
            </button>
          </div>
        </div>
      </div>

    </>

  );
};

export default Navbar;
